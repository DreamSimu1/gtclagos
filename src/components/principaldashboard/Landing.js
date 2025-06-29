import { React, useEffect, useContext, useState } from "react";
import moment from "moment";
import {
  FaUserGraduate,
  FaChalkboardTeacher,
  FaUserTie,
  FaUserShield,
  FaLayerGroup,
} from "react-icons/fa";
import { FaEdit, FaTrash } from "react-icons/fa";
import Calendar from "react-calendar";

import "react-calendar/dist/Calendar.css";
import axios from "axios";
import { Dropdown, ButtonGroup, Button } from "react-bootstrap";
import "./sales.css";
import useAuth from "../hooks/useAuth";
import { SessionContext } from "../../SessionContext";
import useFetch from "../../hooks/useFetch";

const getRandomColor = () => {
  const colors = ["skyblue", "yellow", "pink", "blue"];
  const randomIndex = Math.floor(Math.random() * colors.length);
  return colors[randomIndex];
};

const Landing = () => {
  const { user } = useAuth(); // Access the authenticated user

  const apiUrl = process.env.REACT_APP_API_URL.trim();
  const [transactions, setTransactions] = useState([]);
  const [totalSales, setTotalSales] = useState(0); // State for total sales
  const [totalDailySales, setTotalDailySales] = useState(0); // State for total daily sales
  const [totalLast30DaysSales, setTotalLast30DaysSales] = useState(0); // State for total last 30 days sales
  const [totalWeeklySales, setTotalWeeklySales] = useState(0); // State for total weekly sales
  const [totalProfit, setTotalProfit] = useState(0); // State for total profit
  const [totalDailyProfit, setTotalDailyProfit] = useState(0); // State for total daily profit
  const [totalLast30DaysProfit, setTotalLast30DaysProfit] = useState(0); // State for total last 30 days profit
  const [totalWeeklyProfit, setTotalWeeklyProfit] = useState(0); // State for total weekly profit
  const [selectedDate, setSelectedDate] = useState(new Date());

  const handleDateChange = (date) => {
    setSelectedDate(date);
    console.log("Selected Date:", date);
  };
  useEffect(() => {
    const fetchTransactions = async () => {
      try {
        if (user && user._id) {
          const response = await axios.get(
            `${apiUrl}/api/cash/operator/${user._id}`,
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
    const fetchTransactions = async () => {
      try {
        if (user && user._id) {
          const response = await axios.get(
            `${apiUrl}/api/cash/operator/${user._id}`,
            {
              headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`, // Assuming JWT is stored in localStorage
              },
            }
          );
          setTransactions(response.data);
        }
      } catch (error) {
        console.error("Error fetching transactions", error);
      }
    };

    fetchTransactions();
  }, [user]);

  const { currentSession } = useContext(SessionContext);

  // Fetch data from API
  const {
    data: notices = [],
    loading,
    error,
    reFetch,
  } = useFetch(
    currentSession ? `/get-all-notices/${currentSession._id}` : null
  );

  // Fetch user counts

  const [userCounts, setUserCounts] = useState({
    students: 0,
    teachers: 0,
    hods: 0,
    vps: 0,
  });

  useEffect(() => {
    const fetchUserCount = async (role) => {
      try {
        const res = await axios.get(
          `${process.env.REACT_APP_API_URL}/api/auth/users/${role}/${currentSession._id}`
        );
        return res.data.length;
      } catch (error) {
        console.error(`Failed to fetch ${role}:`, error);
        return 0;
      }
    };

    const fetchAllCounts = async () => {
      const [students, teachers, hods, vps] = await Promise.all([
        fetchUserCount("student"),
        fetchUserCount("teacher"),
        fetchUserCount("head_of_department"),
        fetchUserCount("vice_principal"),
      ]);

      setUserCounts({ students, teachers, hods, vps });
    };

    if (currentSession) {
      fetchAllCounts();
    }
  }, [currentSession]);
  return (
    <div class="page-wrapper">
      <div class="content">
        <h2>Principal Dashboard</h2>

        <div className="row">
          <div className="col-xl-3 col-sm-6 col-12 d-flex">
            <div className="dash-widget w-100">
              <div className="dash-widgetimg">
                <span>
                  <FaUserGraduate size={30} />
                </span>
              </div>
              <div className="dash-widgetcontent">
                <h5>{userCounts.students}</h5>
                <h6>Total Students</h6>
              </div>
            </div>
          </div>

          <div className="col-xl-3 col-sm-6 col-12 d-flex">
            <div className="dash-widget dash2 w-100">
              <div className="dash-widgetimg">
                <span>
                  <FaChalkboardTeacher size={30} />
                </span>
              </div>
              <div className="dash-widgetcontent">
                <h5>{userCounts.teachers}</h5>
                <h6>Total Staffs</h6>
              </div>
            </div>
          </div>

          <div className="col-xl-3 col-sm-6 col-12 d-flex">
            <div className="dash-widget dash3 w-100">
              <div className="dash-widgetimg">
                <span>
                  <FaChalkboardTeacher size={30} />
                </span>
              </div>
              <div className="dash-widgetcontent">
                <h5>{userCounts.hods}</h5>
                <h6>Total H.O.D</h6>
              </div>
            </div>
          </div>

          <div className="col-xl-3 col-sm-6 col-12 d-flex">
            <div className="dash-widget dash1 w-100">
              <div className="dash-widgetimg">
                <span>
                  <FaUserShield size={30} />
                </span>
              </div>
              <div className="dash-widgetcontent">
                <h5>{userCounts.vps}</h5>
                <h6>Total Vice Principal</h6>
              </div>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-xl-3 col-sm-6 col-12 d-flex">
            <div class="dash-widget dash1 w-100">
              <div class="dash-widgetimg">
                <span>
                  <FaLayerGroup size={30} />
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
                <h6>Total Sections</h6>
              </div>
            </div>
          </div>
          <div class="col-xl-3 col-sm-6 col-12 d-flex">
            <div class="dash-widget w-100">
              <div class="dash-widgetimg">
                <span>
                  <FaUserGraduate size={30} />
                </span>
              </div>
              <div class="dash-widgetcontent">
                <h5>
                  ₦
                  <span class="counters" data-count={totalProfit.toFixed(2)}>
                    {totalProfit.toLocaleString()}
                  </span>
                </h5>
                <h6>Today Tech 1</h6>
              </div>
            </div>
          </div>

          <div class="col-xl-3 col-sm-6 col-12 d-flex">
            <div class="dash-widget dash2 w-100">
              <div class="dash-widgetimg">
                <span>
                  <FaUserGraduate size={30} />
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
                <h6>Total Tech 2</h6>
              </div>
            </div>
          </div>
          <div class="col-xl-3 col-sm-6 col-12 d-flex">
            <div class="dash-widget dash3 w-100">
              <div class="dash-widgetimg">
                <span>
                  <FaUserGraduate size={30} />
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
                <h6>Total Tech 3</h6>
              </div>
            </div>
          </div>
        </div>

        <div class="row">
          <div class="col-xl-6 col-sm-12 col-12 d-flex">
            <div className="card flex-fill default-cover mb-4">
              <div className="card-header d-flex justify-content-between align-items-center">
                <h4 className="card-title mb-0">Event Calendar</h4>
                <Dropdown as={ButtonGroup}>
                  <Button variant="light btn-sm">
                    {new Date().getFullYear()}
                  </Button>
                  <Dropdown.Toggle
                    split
                    variant="light btn-sm"
                    id="dropdown-split-basic"
                  />
                  <Dropdown.Menu>
                    <Dropdown.Item>2025</Dropdown.Item>
                    <Dropdown.Item>2024</Dropdown.Item>
                    <Dropdown.Item>2023</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </div>
              <div className="card-body d-flex justify-content-center">
                <Calendar
                  onChange={handleDateChange}
                  value={selectedDate}
                  className="w-100"
                />
              </div>
            </div>
          </div>
          <div className="col-xl-6 col-sm-12 col-12 d-flex">
            <div className="card flex-fill default-cover mb-4">
              <div className="card-header d-flex justify-content-between align-items-center">
                <h4 className="card-title mb-0">Notice Board</h4>
              </div>
              <div className="card-body">
                <div
                  className="notice-box-wrap m-height-660"
                  style={{ display: "flex", flexWrap: "wrap" }}
                >
                  {notices?.length > 0 ? (
                    notices.map((notice) => (
                      <div
                        key={notice._id}
                        className="p-3 m-2 border rounded shadow-sm"
                        style={{
                          flexBasis: "48%",
                          backgroundColor: "#f9f9f9",
                        }}
                      >
                        <div
                          className={`post-date text-white px-2 py-1 mb-2 rounded bg-${getRandomColor()}`}
                          style={{
                            display: "inline-block",
                            fontSize: "0.9rem",
                          }}
                        >
                          {new Date(notice.date).toLocaleDateString()}
                        </div>
                        <h6 className="notice-title mb-1">
                          <a
                            href="#"
                            style={{ textDecoration: "none", color: "#333" }}
                          >
                            {notice.notice}
                          </a>
                        </h6>
                        <div
                          className="entry-meta text-muted"
                          style={{ fontSize: "0.8rem" }}
                        >
                          {notice.posted_by} / <span>5 min ago</span>
                        </div>
                      </div>
                    ))
                  ) : (
                    <div>No notices available</div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
