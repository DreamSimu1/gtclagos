import { React, useEffect, useState } from "react";
// import useFetch from "hooks/useFetch";
import logo from "./oga4.png";
import axios from "axios";
import TopNav from "../TopNav";
import SideNav from "../SideNav";

import { Dropdown, ButtonGroup, Button } from "react-bootstrap";
import { FaEdit, FaTrash } from "react-icons/fa";
import useAuth from "../../hooks/useAuth";
import moment from "moment";
import { useSidebar } from "../../hoddashboard/SidebarProvider";

const ManagerDashboard = () => {
  const [points, setPoints] = useState([]);

  const { user } = useAuth(); // Access the authenticated user
  const { isSidebarOpen } = useSidebar(); // use context to get sidebar state
  const [totalSales, setTotalSales] = useState(0); // State for total sales
  const [totalDailySales, setTotalDailySales] = useState(0); // State for total daily sales
  const [totalLast30DaysSales, setTotalLast30DaysSales] = useState(0); // State for total last 30 days sales
  const [totalWeeklySales, setTotalWeeklySales] = useState(0); // State for total weekly sales
  const [totalProfit, setTotalProfit] = useState(0); // State for total profit
  const [totalDailyProfit, setTotalDailyProfit] = useState(0); // State for total daily profit
  const [totalLast30DaysProfit, setTotalLast30DaysProfit] = useState(0); // State for total last 30 days profit
  const [totalWeeklyProfit, setTotalWeeklyProfit] = useState(0); // State for total weekly profit
  const [userCounts, setUserCounts] = useState({
    admin: 0,
    manager: 0,
    staff: 0,
  });

  const [transactions, setTransactions] = useState([]);
  const apiUrl = process.env.REACT_APP_API_URL.trim();

  useEffect(() => {
    const fetchTransactions = async () => {
      try {
        if (user && user._id) {
          const response = await axios.get(
            `${apiUrl}/api/cash/manager/${user._id}`,
            {
              headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`, // Assuming JWT is stored in localStorage
              },
            }
          );

          setTransactions(response.data);

          // Calculate total sales (for all time)
          const totalSalesAmount = response.data.reduce((sum, transaction) => {
            return sum + transaction.transactionAmount;
          }, 0);

          setTotalSales(totalSalesAmount); // Set the total sales amount

          // Get today's date in the required format (e.g., 'YYYY-MM-DD')
          const today = moment().format("YYYY-MM-DD");

          // Filter transactions for today using the transaction's date field
          const dailyTransactions = response.data.filter((transaction) => {
            const transactionDate = moment(transaction.date).format(
              "YYYY-MM-DD"
            );
            return transactionDate === today;
          });

          // Calculate total daily sales
          const totalDailySalesAmount = dailyTransactions.reduce(
            (sum, transaction) => {
              return sum + transaction.transactionAmount;
            },
            0
          );

          setTotalDailySales(totalDailySalesAmount); // Set the total daily sales amount
          // Calculate the date 30 days ago from today
          const thirtyDaysAgo = moment()
            .subtract(30, "days")
            .format("YYYY-MM-DD");

          // Filter transactions within the last 30 days
          const last30DaysTransactions = response.data.filter((transaction) => {
            const transactionDate = moment(transaction.date).format(
              "YYYY-MM-DD"
            );
            return transactionDate >= thirtyDaysAgo && transactionDate <= today;
          });

          // Calculate total sales for the last 30 days
          const totalLast30DaysSalesAmount = last30DaysTransactions.reduce(
            (sum, transaction) => {
              return sum + transaction.transactionAmount;
            },
            0
          );

          setTotalLast30DaysSales(totalLast30DaysSalesAmount);

          // Calculate the date 7 days ago from today for weekly sales
          const sevenDaysAgo = moment()
            .subtract(7, "days")
            .format("YYYY-MM-DD");

          // Filter transactions within the last 7 days (weekly sales)
          const weeklyTransactions = response.data.filter((transaction) => {
            const transactionDate = moment(transaction.date).format(
              "YYYY-MM-DD"
            );
            return transactionDate >= sevenDaysAgo && transactionDate <= today;
          });

          // Calculate total sales for the last 7 days
          const totalWeeklySalesAmount = weeklyTransactions.reduce(
            (sum, transaction) => {
              return sum + transaction.transactionAmount;
            },
            0
          );

          setTotalWeeklySales(totalWeeklySalesAmount);
          const totalProfitAmount = response.data.reduce((sum, transaction) => {
            return sum + transaction.profit;
          }, 0);
          setTotalProfit(totalProfitAmount);

          // Calculate total profit for the last 30 days
          const totalLast30DaysProfitAmount = last30DaysTransactions.reduce(
            (sum, transaction) => {
              return sum + transaction.profit;
            },
            0
          );
          setTotalLast30DaysProfit(totalLast30DaysProfitAmount);
          // Calculate total daily profit
          const totalDailyProfitAmount = dailyTransactions.reduce(
            (sum, transaction) => {
              return sum + transaction.profit;
            },
            0
          );
          setTotalDailyProfit(totalDailyProfitAmount);
          // Calculate total weekly profit
          const totalWeeklyProfitAmount = weeklyTransactions.reduce(
            (sum, transaction) => {
              return sum + transaction.profit;
            },
            0
          );
          setTotalWeeklyProfit(totalWeeklyProfitAmount);
        }
      } catch (error) {
        console.error("Error fetching transactions", error);
      }
    };

    fetchTransactions();
  }, [user, apiUrl]);
  useEffect(() => {
    const fetchPoints = async () => {
      try {
        const response = await axios.get(`${apiUrl}/api/point`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`, // Assuming JWT is stored in localStorage
          },
        });
        setPoints(response.data);
      } catch (error) {
        console.error("Error fetching points", error);
      }
    };
    fetchPoints();
  }, []);

  useEffect(() => {
    const fetchUserCounts = async () => {
      try {
        const response = await axios.get(`${apiUrl}/api/user-counts`);
        setUserCounts(response.data);
      } catch (error) {
        console.error("Error fetching user counts:", error);
      }
    };

    fetchUserCounts();
  }, []);

  return (
    <div>
      <body>
        <div className={`main-wrapper ${isSidebarOpen ? "sidebar-open" : ""}`}>
          <SideNav />
          <TopNav />

          <div class="page-wrapper">
            <div class="content">
              <div class="row">
                <div class="col-xl-3 col-sm-6 col-12 d-flex">
                  <div class="dash-widget w-100">
                    <div class="dash-widgetimg">
                      <span>
                        <img
                          src="https://dreamspos.dreamstechnologies.com/html/template/assets/img/icons/dash1.svg"
                          alt="img"
                        />
                      </span>
                    </div>
                    <div class="dash-widgetcontent">
                      <h5>
                        ₦
                        <span
                          className="counters"
                          data-count={totalSales.toFixed(2)}
                        >
                          {totalSales.toLocaleString()}
                        </span>
                      </h5>
                      <h6>Today's Sales</h6>
                    </div>
                  </div>
                </div>
                <div class="col-xl-3 col-sm-6 col-12 d-flex">
                  <div class="dash-widget dash1 w-100">
                    <div class="dash-widgetimg">
                      <span>
                        <img
                          src="https://dreamspos.dreamstechnologies.com/html/template/assets/img/icons/dash2.svg"
                          alt="img"
                        />
                      </span>
                    </div>
                    <div class="dash-widgetcontent">
                      <h5>
                        ₦
                        <span
                          className="counters"
                          data-count={totalLast30DaysSales.toFixed(2)}
                        >
                          {totalLast30DaysSales.toLocaleString()}
                        </span>
                      </h5>
                      <h6>Last 30 days sales</h6>
                      {/*}  <h6>Total Expense</h6>*/}
                    </div>
                  </div>
                </div>
                <div class="col-xl-3 col-sm-6 col-12 d-flex">
                  <div class="dash-widget dash2 w-100">
                    <div class="dash-widgetimg">
                      <span>
                        <img
                          src="https://dreamspos.dreamstechnologies.com/html/template/assets/img/icons/dash3.svg"
                          alt="img"
                        />
                      </span>
                    </div>
                    <div class="dash-widgetcontent">
                      <h5>
                        <span
                          className="counters"
                          data-count={totalDailySales.toFixed(2)}
                        >
                          ₦ {totalDailySales.toLocaleString()}
                        </span>
                      </h5>
                      {/*<h6>Outstanding Sales</h6>*/}
                      <h6>Total Daily Sales</h6>
                    </div>
                  </div>
                </div>
                <div class="col-xl-3 col-sm-6 col-12 d-flex">
                  <div class="dash-widget dash3 w-100">
                    <div class="dash-widgetimg">
                      <span>
                        <img
                          src="https://dreamspos.dreamstechnologies.com/html/template/assets/img/icons/dash4.svg"
                          alt="img"
                        />
                      </span>
                    </div>
                    <div class="dash-widgetcontent">
                      <h5>
                        ₦
                        <span
                          className="counters"
                          data-count={totalWeeklySales.toFixed(2)}
                        >
                          {totalWeeklySales.toLocaleString()}
                        </span>
                      </h5>
                      <h6>Total Weekly</h6>
                    </div>
                  </div>
                </div>
                <div class="col-xl-3 col-sm-6 col-12 d-flex">
                  <div class="dash-widget w-100">
                    <div class="dash-widgetimg">
                      <span>
                        <img
                          src="https://dreamspos.dreamstechnologies.com/html/template/assets/img/icons/dash1.svg"
                          alt="img"
                        />
                      </span>
                    </div>
                    <div class="dash-widgetcontent">
                      <h5>
                        ₦
                        <span
                          class="counters"
                          data-count={totalProfit.toFixed(2)}
                        >
                          {totalProfit.toLocaleString()}
                        </span>
                      </h5>
                      <h6>Today's Profit</h6>
                    </div>
                  </div>
                </div>
                <div class="col-xl-3 col-sm-6 col-12 d-flex">
                  <div class="dash-widget dash1 w-100">
                    <div class="dash-widgetimg">
                      <span>
                        <img
                          src="https://dreamspos.dreamstechnologies.com/html/template/assets/img/icons/dash2.svg"
                          alt="img"
                        />
                      </span>
                    </div>
                    <div class="dash-widgetcontent">
                      <h5>
                        ₦
                        <span
                          class="counters"
                          data-count={totalLast30DaysProfit.toFixed(2)}
                        >
                          {totalLast30DaysProfit.toLocaleString()}
                        </span>
                      </h5>
                      <h6>Last 30 days profit</h6>
                    </div>
                  </div>
                </div>
                <div class="col-xl-3 col-sm-6 col-12 d-flex">
                  <div class="dash-widget dash2 w-100">
                    <div class="dash-widgetimg">
                      <span>
                        <img
                          src="https://dreamspos.dreamstechnologies.com/html/template/assets/img/icons/dash3.svg"
                          alt="img"
                        />
                      </span>
                    </div>
                    <div class="dash-widgetcontent">
                      <h5>
                        ₦
                        <span
                          class="counters"
                          data-count={totalDailyProfit.toFixed(2)}
                        >
                          {totalDailyProfit.toLocaleString()}
                        </span>
                      </h5>
                      <h6>Total Daily Profit</h6>
                    </div>
                  </div>
                </div>
                <div class="col-xl-3 col-sm-6 col-12 d-flex">
                  <div class="dash-widget dash3 w-100">
                    <div class="dash-widgetimg">
                      <span>
                        <img
                          src="https://dreamspos.dreamstechnologies.com/html/template/assets/img/icons/dash4.svg"
                          alt="img"
                        />
                      </span>
                    </div>

                    <div class="dash-widgetcontent">
                      <h5>
                        ₦
                        <span
                          class="counters"
                          data-count={totalWeeklyProfit.toFixed(2)}
                        >
                          {totalWeeklyProfit.toLocaleString()}
                        </span>
                      </h5>
                      <h6>Total Weekly Profit</h6>
                    </div>
                  </div>
                </div>
                <div class="col-xl-3 col-sm-6 col-12 d-flex">
                  <div class="dash-count">
                    <div class="dash-counts">
                      <h4>{userCounts.admin}</h4>
                      <h5>Admin</h5>
                    </div>
                    <div class="dash-imgs">
                      <i data-feather="user"></i>
                    </div>
                  </div>
                </div>
                <div class="col-xl-3 col-sm-6 col-12 d-flex">
                  <div class="dash-count das1">
                    <div class="dash-counts">
                      <h4>{userCounts.manager}</h4>
                      <h5>Manager</h5>
                    </div>
                    <div class="dash-imgs">
                      <i data-feather="user-check"></i>
                    </div>
                  </div>
                </div>
                <div class="col-xl-3 col-sm-6 col-12 d-flex">
                  <div class="dash-count das2">
                    <div class="dash-counts">
                      <h4>{userCounts.staff}</h4>
                      <h5>Staff(POS workers)</h5>
                    </div>
                    <div class="dash-imgs">
                      <i data-feather="user"></i>
                    </div>
                  </div>
                </div>
                <div class="col-xl-3 col-sm-6 col-12 d-flex">
                  <div class="dash-count das3">
                    <div class="dash-counts">
                      <h4></h4>
                      <h5> Invoice</h5>
                    </div>
                    <div class="dash-imgs">
                      <i data-feather="file"></i>
                    </div>
                  </div>
                </div>
              </div>

              <div class="row">
                <div className="col-xl-7 col-sm-12 col-12 d-flex">
                  <div className="card flex-fill default-cover mb-4">
                    <div className="card-header d-flex justify-content-between align-items-center">
                      <h4 className="card-title mb-0">
                        Total Pos Point Transactions
                      </h4>
                      <Dropdown as={ButtonGroup}>
                        <Button variant="light btn-sm">2023</Button>
                        <Dropdown.Toggle
                          split
                          variant="light btn-sm"
                          id="dropdown-split-basic"
                        />
                        <Dropdown.Menu>
                          <Dropdown.Item>2023</Dropdown.Item>
                          <Dropdown.Item>2022</Dropdown.Item>
                          <Dropdown.Item>2021</Dropdown.Item>
                        </Dropdown.Menu>
                      </Dropdown>
                    </div>
                    <div className="card-body">
                      <div id="sales_charts">
                        <div className="bar-chart">
                          <div className="bar" style={{ height: "65%" }}></div>
                          <div className="bar" style={{ height: "59%" }}></div>
                          <div className="bar" style={{ height: "80%" }}></div>
                          <div className="bar" style={{ height: "81%" }}></div>
                          <div className="bar" style={{ height: "56%" }}></div>
                          <div className="bar" style={{ height: "55%" }}></div>
                        </div>
                        <div className="labels">
                          <span>January</span>
                          <span>February</span>
                          <span>March</span>
                          <span>April</span>
                          <span>May</span>
                          <span>June</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-xl-5 col-sm-12 col-12 d-flex">
                  <div class="card flex-fill default-cover mb-4">
                    <div class="card-header d-flex justify-content-between align-items-center">
                      <h4 class="card-title mb-0">
                        Total Pos Point Transactions
                      </h4>
                      <div class="view-all-link">
                        <a
                          href="javascript:void(0);"
                          class="view-all d-flex align-items-center"
                        >
                          View All
                          <span class="ps-2 d-flex align-items-center">
                            <i
                              data-feather="arrow-right"
                              class="feather-16"
                            ></i>
                          </span>
                        </a>
                      </div>
                    </div>
                    <div className="card-body">
                      <div className="table-responsive dataview">
                        <table className="table dashboard-recent-products">
                          <thead>
                            <tr>
                              <th>#</th>
                              <th>Points</th>
                              <th>Total Sales</th>
                            </tr>
                          </thead>
                          <tbody>
                            {points.length > 0 ? (
                              points.map((point, index) => (
                                <tr key={point._id}>
                                  <td>{index + 1}</td>
                                  <td className="productimgname">
                                    <a href="#">
                                      {point.pointname} ({point.address})
                                    </a>
                                  </td>
                                  <td>{point.totalSales}</td>
                                </tr>
                              ))
                            ) : (
                              <tr>
                                <td colSpan="3">No points found.</td>
                              </tr>
                            )}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="card">
                <div class="card-header">
                  <h4 class="card-title">Recent Transactions</h4>
                </div>
                <div class="card-body">
                  <table class="table  datanew">
                    <thead>
                      <tr>
                        <th class="no-sort">
                          <label class="checkboxs">
                            <input type="checkbox" id="select-all" />
                            <span class="checkmarks"></span>
                          </label>
                        </th>
                        <th>POS/Sales Operator</th>
                        <th>Customer Name</th>
                        <th>Ref ID</th>
                        <th>Date</th>
                        <th>Status</th>
                        <th>Transaction Amount</th>
                        <th>Payment Method</th>
                        <th>Interest/Fee</th>
                        <th>Phone No</th>
                        <th>Paid</th>
                        <th>Transaction Type</th>
                        <th>Payment Status</th>
                        <th>Profit</th>
                        <th class="text-center">Action</th>
                      </tr>
                    </thead>
                    <tbody className="sales-list">
                      {transactions.map((transaction) => (
                        <tr key={transaction._id}>
                          <td>
                            <label className="checkboxs">
                              <input type="checkbox" />
                              <span className="checkmarks"></span>
                            </label>
                          </td>
                          <td>
                            {transaction.posOperator
                              ? transaction.posOperator.username
                              : "N/A"}
                          </td>
                          <td>{transaction.customerName}</td>
                          <td>{transaction.referenceId}</td>
                          <td>
                            {new Date(transaction.date).toLocaleDateString()}
                          </td>
                          <td>
                            <span
                              className={`badge ${
                                transaction.status === "Completed"
                                  ? "badge-bgsuccess"
                                  : "badge-bgfailure"
                              }`}
                            >
                              {transaction.status}
                            </span>
                          </td>
                          <td>₦{transaction.transactionAmount}</td>
                          <td>{transaction.paymentMethod}</td>
                          <td>₦{transaction.interest}</td>
                          <td>{transaction.customerPhoneNo}</td>
                          <td>{transaction.amountPaid ? "Yes" : "No"}</td>
                          <td>{transaction.transactionType}</td>
                          <td>{transaction.paymentStatus}</td>
                          <td>₦{transaction.profit}</td>
                          <td className="action-table-data">
                            <div className="edit-delete-action">
                              <a className="me-2 p-2" href="#">
                                <FaEdit className="edit-icon" />
                              </a>
                              <a
                                className="confirm-text p-2"
                                href="javascript:void(0);"
                              >
                                <FaTrash className="delete-icon" />
                              </a>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </body>
    </div>
  );
};

export default ManagerDashboard;
