import { React, useEffect, useState } from "react";
// import useFetch from "hooks/useFetch";

import axios from "axios";
import TopNav from "../TopNav";
import SideNav from "../SideNav";
import { Link } from "react-router-dom";
import AddSale from "./AddSale";
import useFetch from "../../../hooks/useFetch";
// import "./all.css";
import { FaEdit, FaTrash } from "react-icons/fa";
import useAuth from "../../hooks/useAuth";
const AllSale = () => {
  const { data, loading, error, reFetch } = useFetch("/student/JS1");
  const apiUrl = process.env.REACT_APP_API_URL.trim();
  const [anchorElMap, setAnchorElMap] = useState({});
  const [searchTerm, setSearchTerm] = useState("");
  const [transactions, setTransactions] = useState([]);

  const [showModal, setShowModal] = useState(false);
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedCustomer, setSelectedCustomer] = useState("");
  const [selectedStatus, setSelectedStatus] = useState("");
  const [showAdvancedSearch, setShowAdvancedSearch] = useState(false);
  const { user } = useAuth(); // Access the authenticated user
  const [selectedUserId, setSelectedUserId] = useState(null); // State to track the selected user ID
  const [selectedDateRange, setSelectedDateRange] = useState({
    start: "",
    end: "",
  });
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState("");
  const [selectedPaymentStatus, setSelectedPaymentStatus] = useState("");
  const [selectedProduct, setSelectedProduct] = useState("");
  const [selectedSalesperson, setSelectedSalesperson] = useState("");
  const [amountRange, setAmountRange] = useState({ min: "", max: "" });
  const [editDialogOpen, setEditDialogOpen] = useState(false);

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const handleOpenMenu = (event, examId) => {
    setAnchorElMap((prev) => ({
      ...prev,
      [examId]: event.currentTarget,
    }));
  };
  const updateTableData = (newSales) => {
    // Logic to update the table with the new admin data
    console.log("Updating table with new admin:", newSales);
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  const handleSearch = () => {
    // Add your search logic here, such as filtering data based on search criteria
    console.log(
      "Searching for:",
      searchTerm,
      selectedDate,
      selectedCustomer,
      selectedStatus
    );
    // Call your fetch function or filter logic here
  };

  const handleAdvancedSearchToggle = () => {
    setShowAdvancedSearch(!showAdvancedSearch);
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
        }
      } catch (error) {
        console.error("Error fetching transactions", error);
      }
    };

    fetchTransactions();
  }, [user]);

  const deleteUser = async (userId) => {
    if (window.confirm("Are you sure you want to delete this user?")) {
      try {
        await axios.delete(`${apiUrl}/api/cash/${userId}`);
        // Remove the deleted user from the state
        setTransactions(
          transactions.filter((transaction) => transaction._id !== userId)
        );
        alert("User deleted successfully");
      } catch (error) {
        console.error("Error deleting user:", error);
        alert("Failed to delete user. Please try again.");
      }
    }
  };
  return (
    <div>
      <body>
        <div class="main-wrapper">
          <TopNav />

          <SideNav />

          <div class="page-wrapper">
            <div class="content">
              <div class="page-header">
                <div class="add-item d-flex">
                  <div class="page-title">
                    <h4>Sales List</h4>
                    <h6>Manage Your Sales</h6>
                  </div>
                </div>

                <div class="page-btn">
                  <a
                    className="force-mobile-button"
                    onClick={() => setShowModal(true)}
                  >
                    Add New Sales
                  </a>
                </div>
              </div>

              <div class="card table-list-card">
                <div class="card-body">
                  <div class="table-responsive">
                    <table class="table  datanew">
                      <thead>
                        <tr>
                          <th class="no-sort">
                            <label class="checkboxs">
                              <input type="checkbox" id="select-all" />
                              <span class="checkmarks"></span>
                            </label>
                          </th>
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
                                  onClick={() => deleteUser(transaction._id)}
                                >
                                  <FaTrash className="delete-icon" />
                                </a>
                              </div>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                    <AddSale
                      showModal={showModal}
                      setShowModal={setShowModal}
                      updateTableData={updateTableData}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </body>
    </div>
  );
};

export default AllSale;
