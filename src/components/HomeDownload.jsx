import { useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "../scss/HomeDownload.scss";
import CustomAlert from "./CustomAlert";
import Dots from "../assets/bg-dots.svg";
import image from "../assets/logo-chrome.svg";
import image2 from "../assets/logo-firefox.svg";
import image3 from "../assets/logo-opera.svg";

function HomeDownload() {
  const [showAlert, setShowAlert] = useState(false);

  const handleButtonClick = () => {
    setShowAlert(true);
  };
  return (
    <section className="download-container">
      {showAlert && (
        <CustomAlert
          variant="success"
          message="Installation in progress. Please wait..."
          onClose={() => setShowAlert(false)}
        />
      )}
      <div className="header">
        <h1>Download the extension</h1>
        <p>
          We've got more browsers in the pipeline. Please do let us know if
          you've got a favourite you'd like us to prioritize.
        </p>
      </div>
      <div className="cards">
        <Card className="card">
          <Card.Img variant="top" className="image" src={image} />
          <Card.Body>
            <Card.Title>Add to Chrome</Card.Title>
            <Card.Text>Minimum version 62</Card.Text>
            <div className="dots">
              <img src={Dots} alt="dots" />
            </div>
            <Button
              className="card-button"
              onClick={handleButtonClick}
              variant="primary"
            >
              Add & Install Extension
            </Button>
          </Card.Body>
        </Card>

        <Card className="card">
          <Card.Img variant="top" className="image" src={image2} />
          <Card.Body>
            <Card.Title>Add to Firefox</Card.Title>
            <Card.Text>Minimum version 55</Card.Text>
            <div className="dots">
              <img src={Dots} alt="dots" />
            </div>
            <Button
              className="card-button"
              onClick={handleButtonClick}
              variant="primary"
            >
              Add & Install Extension
            </Button>
          </Card.Body>
        </Card>

        <Card className="card">
          <Card.Img variant="top" className="image" src={image3} />
          <Card.Body>
            <Card.Title>Add to Opera</Card.Title>
            <Card.Text>Minimum version 46</Card.Text>
            <div className="dots">
              <img src={Dots} alt="dots" />
            </div>
            <Button
              className="card-button"
              onClick={handleButtonClick}
              variant="primary"
            >
              Add & Install Extension
            </Button>
          </Card.Body>
        </Card>
      </div>
    </section>
  );
}

export default HomeDownload;
