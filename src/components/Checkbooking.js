import React, { useState } from "react";
import { useForm } from "react-hook-form";
import classNames from "classnames";
import Alert from 'react-bootstrap/Alert';

import UpdateBookingModel from "./UpdateBooking";
import axios from "axios";

function Checkbooking() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onTouched",
  });

  const [clientData, setClientData] = useState({
    full_name: "",
    email: "",
    phone: null,
    date: null,
    num_adults: null,
    num_children: null,
    state: "",
  });
  const [formSubmitted, setFormSubmitted] = useState(false); // Track form submission
  const [updateModalShow, setUpdateModalShow] = useState(false);
  const [showAlert, setShowAlert] = useState(false)
  const [deleteAlert, setDeleteAlert] = useState(false)


  // GET
  const onSubmit = async (data) => {
    const apiUrl = `http://127.0.0.1:8000/booking/${data.full_name}/${data.phone}/`;

    try {
      const response = await axios.get(apiUrl);
      setClientData(response.data);
      setFormSubmitted(true);
      setShowAlert(false)

    } catch (error) {
      console.error("Error fetching data:", error);
      setShowAlert(true)
    }
  };

  // Function to delete a booking
  const deleteBooking = async () => {
    try {
      const apiUrl = `http://127.0.0.1:8000/booking/${clientData.id}/`;
      await axios.delete(apiUrl);
      setDeleteAlert(true)
      
    } catch (error) {
      console.error("Failed to delete booking:", error.response.data);
    }
  };
  // Function to update a booking

  const handleUpdate = () => {
    setUpdateModalShow(true);
    console.log("update is clicked");
  };
  const updateClientData = (newData) => {
    setClientData(newData);
  };
  return (
    <div className="bg-dark">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="booking-Check-form mt-2 pt-4 "
        method="GET"
      >
        <div className="row">
          <div className="col-12 col-lg-5">
            <label htmlFor="full_name" className=" text-white">
              Full Name
            </label>
            <input
              autoComplete="off"
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

          <div className="col-12 col-lg-5">
            <label htmlFor="phone" className=" text-white">
              Contact Number
            </label>
            <input
              autoComplete="off"
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
                  message: "*please enter a valid 10-digit phone number",
                },
              })}
            />
            {errors.phone && (
              <div className="invalid-feedback">{errors.phone.message}</div>
            )}
          </div>

          <div className=" col-12  col-md-2 ">
            <div className="form-button mt-3">
              <button
                id="submit"
                type="submit"
                className="btn btn-primary pt-2 mt-2"
              >
                Check!
              </button>
            </div>
          </div>
        </div>
      </form>
      <hr className="custom-hr" />
      {showAlert && (
        <Alert variant="danger" autoFocus onClose={() => setShowAlert(false)} dismissible>
          <p>full Name or Contact Number is not valid</p>
        </Alert>
      )}

      {formSubmitted &&
        clientData && ( // Conditionally render clientData if form is submitted and clientData is not null
          <>
            <div className="container booking-details">
              <table className="table table-bordered table-dark">
                <tbody>
                  <tr>
                    <th>Full Name:</th>
                    <td>{clientData["full_name"]}</td>
                  </tr>
                  <tr>
                    <th>E-Mail:</th>
                    <td>{clientData["email"]}</td>
                  </tr>
                  <tr>
                    <th>Phone:</th>
                    <td>{clientData["phone"]}</td>
                  </tr>
                  <tr>
                    <th>Date of Journey:</th>
                    <td>{clientData["date"]}</td>
                  </tr>
                  <tr>
                    <th>No of Adults:</th>
                    <td>{clientData["num_adults"]}</td>
                  </tr>
                  <tr>
                    <th>No of Children:</th>
                    <td>{clientData["num_children"]}</td>
                  </tr>
                  <tr>
                    <th>State:</th>
                    <td>{clientData["state"]}</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <hr className="custom-hr" />

            <div className="row">
              <div className=" text-center mb-3">
                <button
                  className="btn btn-info col-md-4 mx-5"
                  onClick={handleUpdate}
                >
                  Update Booking
                </button>

                <UpdateBookingModel
                  show={updateModalShow}
                  onHide={() => setUpdateModalShow(false)} // Close the modal
                  clientData={clientData}
                  setClientData={updateClientData}
                />
                <button
                  className="btn btn-danger col-md-4 mx-5"
                  onClick={() => deleteBooking(clientData)}
                >
                  Cancel booking
                </button>
              </div>
            </div>

            {deleteAlert && (
              <Alert variant="danger" onClose={() => setDeleteAlert(false)} dismissible>
                <p>Your booking has been successfully deleted</p>
              </Alert>
            )}

          </>
        )}
    </div>
  );
}

export default Checkbooking;
