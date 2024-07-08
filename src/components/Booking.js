import React, { useState } from "react";
import { useForm } from "react-hook-form";
import classNames from "classnames";
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Alert } from "react-bootstrap";

function Booking() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    mode: "onTouched",
  });

  const [showAlert, setShowAlert] = useState(false)

  const isFutureDate = (inputDate) => {
    const currentDate = new Date();
    const selectedDate = new Date(inputDate);
    return selectedDate >= currentDate;
  };


  const onSubmit = (data) => {
    // Define the API endpoint URL
    const apiUrl = 'http://127.0.0.1:8000/booking/';

    // Send the form data to your backend API using Axios
    axios
      .post(apiUrl, data)
      .then((response) => {
        // Handle success response from the backend (if needed)

        setShowAlert(true)
        reset();
      })
      .catch((error) => {
        // Handle error from the backend
        console.error('Booking failed:', error.response.data);
      });
  };

  const indianStates = [
    "Andhra Pradesh",
    "Arunachal Pradesh",
    "Assam",
    "Bihar",
    "Chhattisgarh",
    "Goa",
    "Gujarat",
    "Haryana",
    "Himachal Pradesh",
    "Jammmu And Kashmir",
    "Jharkhand",
    "Karnataka",
    "Kerala",
    "Madhya Pradesh",
    "Maharashtra",
    "Manipur",
    "Meghalaya",
    "Mizoram",
    "Nagaland",
    "Odisha",
    "Punjab",
    "Rajasthan",
    "Sikkim",
    "Tamil Nadu",
    "Telangana",
    "Tripura",
    "Uttar Pradesh",
    "Uttarakhand",
    "West Bengal",
    "Andaman and Nicobar Islands",
    "Chandigarh",
    "Dadra and Nagar Haveli and Daman and Diu",
    "Lakshadweep",
    "Delhi",
    "Puducherry",
  ];

  return (
    <div className="">
      <div className="form-body form-outer-container ">
        <div className="row">
          <div className="form-holder">
            {showAlert && (
              <Alert variant="success" autoFocus onClose={() => setShowAlert(false)} dismissible>
                <p>Your booking has been done successfully</p>
              </Alert>
            )}
            <div className="form-content">
              <div className="form-items form-container">
                <h3 className="text-warning">Book your slot Today</h3>
                <p>Fill in the data below.</p>
                <form className="" onSubmit={handleSubmit(onSubmit)} method="Post">
                  <div className="col-md-12">
                    <label htmlFor="full_name">Full Name</label>
                    <input autoComplete="off"
                      className={classNames("form-control ", {
                        "is-invalid": errors.full_name,
                      })}
                      type="text"
                      name="full_name"
                      id="full_name"
                      placeholder="Full Name"
                      {...register("full_name", {
                        required: "*this field is required",
                      })}
                    />
                    {errors.full_name && (
                      <div className="invalid-feedback ">
                        {errors.full_name.message}
                      </div>
                    )}
                  </div>

                  <div className="col-md-12">
                    <label htmlFor="email" className="label">E-mail</label>
                    <input autoComplete="off"
                      className={classNames("form-control ", {
                        "is-invalid": errors.email,
                      })}
                      type="email"
                      name="email"
                      id="email"
                      placeholder="Email Address"
                      {...register("email", {
                        required: "*this field is required",
                        pattern: {
                          value:
                            /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/,
                          message: "please enter a valid e-mail address",
                        },
                      })}
                    />

                    {errors.email && (
                      <div className="invalid-feedback">
                        {errors.email.message}
                      </div>
                    )}
                  </div>

                  <div className="col-md-12">
                    <label htmlFor="phone" className="label">Contact Number</label>
                    <input autoComplete="off"
                      className={classNames("form-control ", {
                        "is-invalid": errors.phone,
                      })}
                      type="number"
                      name="phone"
                      id="phone"
                      placeholder="Contact Number"
                      {...register("phone", {
                        required: "*this field is required",
                        pattern: {
                          value: /^[0-9]{10}$/,
                          message:
                            "*please enter a valid 10-digit phone number",
                        },
                      })}
                    />
                    {errors.phone && (
                      <div className="invalid-feedback">
                        {errors.phone.message}
                      </div>
                    )}
                  </div>

                  <div className="col-md-12">
                    <label htmlFor="date" className="label">Journey Date</label>
                    <input autoComplete="off"
                      className={classNames("form-control ", {
                        "is-invalid": errors.date,
                      })}
                      type="date"
                      name="date"
                      id="date"
                      {...register("date", {
                        required: "*this field is required",
                        validate: (inputDate) =>
                          isFutureDate(inputDate) ||
                          "*please enter a valid date",
                      })}
                    />

                    {errors.date && (
                      <div className="invalid-feedback">
                        {errors.date.message}
                      </div>
                    )}
                  </div>

                  <div className="row">
                    <div className="col-md-6">
                      <label htmlFor="num_adults" className="label">Number of Adults</label>
                      <input autoComplete="off"
                        className={classNames("form-control ", {
                          "is-invalid": errors.num_adults,
                        })}
                        type="number"
                        name="num_adults"
                        id="num_adults"
                        placeholder="No of Adults"
                        {...register("num_adults", {
                          required: "*this field is required",
                        })}
                      />
                      {errors.num_adults && (
                        <div className="invalid-feedback">
                          {errors.num_adults.message}
                        </div>
                      )}
                    </div>

                    <div className="col-md-6">
                      <label htmlFor="num_children" className="label">Number of Children</label>
                      <input autoComplete="off"
                        className={classNames("form-control ", {
                          "is-invalid": errors.num_children,
                        })}
                        type="number"
                        name="num_children"
                        id="num_children"
                        placeholder="No of Children"
                        {...register("num_children", {
                          required: "*this field is required",
                        })}
                      />

                      {errors.num_children && (
                        <div className="invalid-feedback">
                          {errors.num_children.message}
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="col-md-12">
                    <label htmlFor="state" className="label">State</label>
                    <select name="state" id="state"
                      defaultValue=""
                      className={classNames("form-control ", {
                        "is-invalid": errors.state,
                      })}

                      {...register("state", {
                        required: "*this field is required",
                      })}
                    >
                      <option value="" disabled>
                        select your state
                      </option>
                      {indianStates.map((state, index) => (
                        <option key={index} value={state}>
                          {state}
                        </option>
                      ))}
                    </select>

                    {errors.state && (
                      <div className="invalid-feedback">
                        {errors.state.message}
                      </div>
                    )}

                  </div>

                  <div className="form-check mt-3">
                    <input autoComplete="off"
                      className={classNames("form-check-input", {
                        "is-invalid": errors.iConfirm,
                      })}
                      type="checkbox"
                      value=""
                      id="invalidCheck"
                      {...register("iConfirm", { required: "Please confirm that the entered data are all correct!" })}
                      name="iConfirm"
                    />
                    <label className="form-check-label" htmlFor="invalidCheck">
                      I confirm that all data are correct
                    </label>
                    {errors.iConfirm && (
                      <div className="invalid-feedback">
                        {errors.iConfirm.message}
                      </div>
                    )}
                  </div>

                  <div className="row">
                    <div className="col-md-4">
                      <div className="form-button mt-3">
                        <button
                          id="submit"
                          type="submit"
                          className="btn btn-primary"
                        >
                          Book Now!
                        </button>
                      </div>
                    </div>
                    <div className="col-md-8 mt-4">
                      <p>
                        Already Booked?
                        <span>
                          <Link to="/check-booking">  Check your booking</Link>
                        </span>
                      </p>
                    </div>


                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>


    </div>
  );
}

export default Booking;
