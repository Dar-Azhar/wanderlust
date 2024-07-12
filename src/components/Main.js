import React from "react";
import Badge from "react-bootstrap/Badge";

function Main() {
  return (
    <>
      <div className="heading">
        <div className="text-center">
          <h6 id="Choose_Your_Package">Choose Your Package</h6>
          <h1 className="text-center">
            Select Your Best Package <br /> For Your Travel
          </h1>
        </div>
      </div>

      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-4 mb-4">
            <div className="card h-100" style={{ width: "18rem" }}>
              <div className="position-relative">
                <Badge bg="warning" text="dark" className="badge">
                  4 NIGHTS 5 DAYS
                </Badge>

                <img
                  src="/static/Gulmarg.jpg"
                  className="card-img-top  custom-img "
                  alt="..."
                />
              </div>
              <div className="card-body">
                <h5 className="card-title">Srinagar-Gulmarg</h5>
                <p className="card-text">
                  Embark on an unforgettable adventure with our Srinagar-Gulmarg
                  tour package.
                </p>

                <button className="btn btn-primary" >
                  Check Details
                </button>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="card h-100" style={{ width: "18rem" }}>
              <div className="position-relative">
                <Badge bg="warning" text="dark" className="badge">
                  4 NIGHTS 5 DAYS
                </Badge>
              </div>
              <img
                src="/static/Pahalgam.jpg"
                className="card-img-top   custom-img "
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title">Srinagar-Pahalgam</h5>
                <p className="card-text">
                  Get ready for the journey of a lifetime with 4 nights and 5
                  days of excitement.
                </p>
                <button className="btn btn-primary">
                  Check Details
                </button>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="card h-100" style={{ width: "18rem" }}>
              <div className="position-relative">
                <Badge bg="warning" text="dark" className="badge">
                  4 NIGHTS 5 DAYS
                </Badge>
              </div>
              <img
                src="/static/Sonmarg.jpg"
                className="card-img-top  custom-img"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title">Srinagar-Sonmarg</h5>
                <p className="card-text">
                  Get lost in the enchanting meadows, rivers, and glaciers of
                  Sonmarg
                </p>
                <button className="btn btn-primary" >
                  Check Details
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="row justify-content-center">
          <div className="col-md-4 mb-4">
            <div className="card h-100" style={{ width: "18rem" }}>
              <div className="position-relative">
                <Badge bg="warning" text="dark" className="badge">
                  4 NIGHTS 5 DAYS
                </Badge>
              </div>
              <img
                src="/static/Yusmarg.jpg"
                className="card-img-top custom-img"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title">Srinagar-Yusmarg</h5>
                <p className="card-text">
                  Enjoy luxury accommodations and personalized service throughout your journey.
                </p>
                <button className="btn btn-primary" >
                  Check Details
                </button>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="card h-100" style={{ width: "18rem" }}>
              <div className="position-relative">
                <Badge bg="warning" text="dark" className="badge">
                  4 NIGHTS 5 DAYS
                </Badge>
              </div>
              <img
                src="/static/Bhaderwah.jpg"
                className="card-img-top  custom-img"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title">Srinagar-Bhaderwah</h5>
                <p className="card-text">
                  Prepare for thrilling outdoor activities, including trekking
                  and fishing.
                </p>
                <button className="btn btn-primary" >
                  Check Details
                </button>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="card h-100" style={{ width: "18rem" }}>
              <div className="position-relative">
                <Badge bg="warning" text="dark" className="badge">
                  4 NIGHTS 5 DAYS
                </Badge>
              </div>
              <img
                src="/static/Kupwara.jpg"
                className="card-img-top custom-img"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title">Srinagar-Kupwara</h5>
                <p className="card-text">
                  Don't miss the opportunity to experience Sonmarg's tranquility
                  and charm.
                </p>
                <button className="btn btn-primary" >
                  Check Details
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Main;
