import React, { useState, useEffect } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";
import {
  Card,
  Checkbox,
  Grid,
  TextField,
  IconButton,
  InputAdornment,
  MenuItem,
  FormControl,
  Button,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
} from "@mui/material";
import useFetch from "hooks/useFetch";
const validationSchema = Yup.object().shape({
  username: Yup.string().required("Username is required"),
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  password: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
  address: Yup.string().required("Address is required"),
  phone: Yup.number().required("Phone number is required"),
  saleName: Yup.string().required("Sale Name is required"),
  AdmNo: Yup.string().required("Admission No is required"),
  classname: Yup.string().required("Class is required"),
  parentsName: Yup.string().required("Parent Name is required"),
  gender: Yup.string().required("Gender is required"),
});

const initialValues = {
  username: "",
  email: "",
  password: "",
  address: "",
  phone: "",
  saleName: "",
  AdmNo: "",
  classname: "",
  parentsName: "",
  gender: "",
};

const Register = () => {
  const apiUrl = process.env.REACT_APP_API_URL.trim();

  const {
    data: classData,
    loading: classLoading,
    error: classError,
  } = useFetch("/class");
  // ...

  const handleSubmit = async (values, { setSubmitting }) => {
    try {
      const response = await axios.post(
        `https://doneapi.vercel.app/api/register`,
        {
          role: "sale",
          ...values,
        }
      );

      const { token, user } = response.data;

      // Handle successful registration (e.g., save token to local storage, redirect user, etc.)
      console.log("Registration successful!", token, user);
    } catch (error) {
      console.error("Registration failed:", error);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div>
      <h2>Sale Registration</h2>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <Form>
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <Field
              type="text"
              id="username"
              name="username"
              className="form-control"
            />
            <ErrorMessage
              name="username"
              component="div"
              className="text-danger"
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email</label>
            <Field
              type="email"
              id="email"
              name="email"
              className="form-control"
            />
            <ErrorMessage
              name="email"
              component="div"
              className="text-danger"
            />
          </div>

          <div className="form-group">
            <label htmlFor="password">Password</label>
            <Field
              type="password"
              id="password"
              name="password"
              className="form-control"
            />
            <ErrorMessage
              name="password"
              component="div"
              className="text-danger"
            />
          </div>

          <div className="form-group">
            <label htmlFor="address">Address</label>
            <Field
              type="text"
              id="address"
              name="address"
              className="form-control"
            />
            <ErrorMessage
              name="address"
              component="div"
              className="text-danger"
            />
          </div>

          <div className="form-group">
            <label htmlFor="phone">Phone</label>
            <Field
              type="tel"
              id="phone"
              name="phone"
              className="form-control"
            />
            <ErrorMessage
              name="phone"
              component="div"
              className="text-danger"
            />
          </div>

          <div className="form-group">
            <label htmlFor="saleName">Sale Name</label>
            <Field
              type="text"
              id="saleName"
              name="saleName"
              className="form-control"
            />
            <ErrorMessage
              name="saleName"
              component="div"
              className="text-danger"
            />
          </div>

          <div className="form-group">
            <label htmlFor="AdmNo">Admission No</label>
            <Field
              type="text"
              id="AdmNo"
              name="AdmNo"
              className="form-control"
            />
            <ErrorMessage
              name="AdmNo"
              component="div"
              className="text-danger"
            />
          </div>

          <Field
            as="select"
            id="classname"
            name="classname"
            className="form-control"
          >
            <option value="" disabled>
              Select a class
            </option>
            {classData &&
              classData.map((item) => (
                <MenuItem key={item.id} value={item.name}>
                  {item.name}
                </MenuItem>
              ))}
          </Field>
          <ErrorMessage
            name="classname"
            component="div"
            className="text-danger"
          />

          <div className="form-group">
            <label htmlFor="parentsName">Parent Name</label>
            <Field
              type="text"
              id="parentsName"
              name="parentsName"
              className="form-control"
            />
            <ErrorMessage
              name="parentsName"
              component="div"
              className="text-danger"
            />
          </div>

          <div className="form-group">
            <label htmlFor="gender">Gender</label>
            <Field
              as="select"
              id="gender"
              name="gender"
              className="form-control"
            >
              <option value="">Select gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </Field>
            <ErrorMessage
              name="gender"
              component="div"
              className="text-danger"
            />
          </div>

          <button type="submit" className="btn btn-primary">
            Register
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default Register;
