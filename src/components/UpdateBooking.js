import { useState } from "react";
import { Modal, Col, Row, Button } from "react-bootstrap";
import { useForm } from "react-hook-form";
import classNames from "classnames";
import Alert from 'react-bootstrap/Alert';
import axios from "axios";


function UpdateBookingModel(props) {
  const show = props.show;
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [updateAlert, setupdateAlert] = useState(false)


  const isFutureDate = (inputDate) => {
    const currentDate = new Date();
    const selectedDate = new Date(inputDate);
    return selectedDate >= currentDate;
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
  const onSubmit = async (data) => {
    console.log("Booking Updated!");
    console.log(props.clientData)
    const apiUrl = `http://127.0.0.1:8000/booking/${props.clientData.id}/`;
    console.log(props.clientData.id)

    try {
      const response = await axios.put(apiUrl, data);
      props.setClientData(response.data);
      setupdateAlert(true)
      props.onHide()
      // Handle the response data here, you can update your UI with the data
    } catch (error) {
      // Handle any errors here
      console.error("Failed to update booking:", error);
    }

  };

  return (
    <>
      <Modal show={show} onHide={props.onHide}>
        <Modal.Header closeButton>
          <Modal.Title>Update Booking</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Row>
            <Col sm={6}>
              <form className="" onSubmit={handleSubmit(onSubmit)} noValidate>
                <div className="col-md-12">
                  <label htmlFor="full_name">Full Name</label>
                  <input
                    autoComplete="off"
                    className="form-control"
                    type="text"
                    name="full_name"
                    defaultValue={props.clientData.full_name}
                    id="full_name"
                    placeholder=""
                    {...register("full_name")}
                  />
                </div>

                <div className="col-md-12">
                  <label htmlFor="email" className="label">
                    E-mail
                  </label>
                  <input
                    autoComplete="off"
                    className={classNames("form-control ", {
                      "is-invalid": errors.email,
                    })}
                    type="email"
                    name="email"
                    id="email"
                    defaultValue={props.clientData.email}
                    placeholder=""
                    {...register("email", {
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
                  <label htmlFor="phone" className="label">
                    Contact Number
                  </label>
                  <input
                    autoComplete="off"
                    className={classNames("form-control ", {
                      "is-invalid": errors.phone,
                    })}
                    type="number"
                    name="phone"
                    defaultValue={props.clientData.phone}
                    id="phone"
                    placeholder=""
                    {...register("phone", {
                      pattern: {
                        value: /^[0-9]{10}$/,
                        message: "*please enter a valid 10-digit phone number",
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
                  <label htmlFor="date" className="label">
                    Journey Date
                  </label>
                  <input
                    autoComplete="off"
                    className={classNames("form-control ", {
                      "is-invalid": errors.date,
                    })}
                    type="date"
                    name="date"
                    defaultValue={props.clientData.date}
                    id="date"
                    {...register("date", {
                      validate: (inputDate) =>
                        isFutureDate(inputDate) || "*please enter a valid date",
                    })}
                  />

                  {errors.date && (
                    <div className="invalid-feedback">
                      {errors.date.message}
                    </div>
                  )}
                </div>

                <div className="col-md-12">
                  <label htmlFor="num_adults" className="label">
                    Number of Adults
                  </label>
                  <input
                    autoComplete="off"
                    type="number"
                    className="form-control"
                    name="num_adults"
                    defaultValue={props.clientData.num_adults}
                    id="num_adults"
                    placeholder=""
                    {...register("num_adults")}
                  />
                </div>

                <div className="col-md-12">
                  <label htmlFor="num_children" className="label">
                    Number of Children
                  </label>
                  <input
                    autoComplete="off"
                    className="form-control"
                    type="number"
                    name="num_children"
                    id="num_children"
                    defaultValue={props.clientData.num_children}
                    placeholder=""
                    {...register("num_children")}
                  />
                </div>

                <div className="col-md-12">
                  <label htmlFor="state" className="label">
                    State
                  </label>
                  <select
                    name="state"
                    className="form-control"
                    id="state"
                    defaultValue={props.clientData.state}
                    {...register("state")}
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
                </div>
                <div className="row">
                  <div className="d-flex">
                    <Button variant="primary" type="submit" className="mt-5">
                      Save Changes
                    </Button>


                  </div>
                </div>
              </form>
              {updateAlert && (
                <Alert variant="danger" autoFocus onClose={() => setupdateAlert(false)} dismissible>
                  <p>Your booking details has been successfully updated</p>
                </Alert>
              )}
            </Col>
          </Row>
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant="danger"
            className="mt-5 ml-2"
            onClick={props.onHide}
          >
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default UpdateBookingModel;
