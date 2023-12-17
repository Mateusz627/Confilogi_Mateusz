import { useState } from "react";
import Button from "react-bootstrap/Button";
import "../scss/HomeSimple.scss";
import CustomAlert from "./CustomAlert";
import image from "../assets/illustration-hero.svg";

function HomeSimple() {
  const [showAlert, setShowAlert] = useState(false);

  const handleButtonClick = () => {
    setShowAlert(true);
  };
  return (
    <section className="home-simple">
      {showAlert && (
        <CustomAlert
          variant="success"
          message="Installation in progress. Please wait..."
          onClose={() => setShowAlert(false)}
        />
      )}
      <div className="content-container">
        <h1>A Simple Bookmark Manager</h1>
        <p>
          A clean and simple interface to organize your favourite websites. Open
          a new browser tab and see your sites load instantly. Try for free.
        </p>
        <div className="button-container">
          <Button
            className="primary-button"
            onClick={handleButtonClick}
            variant="primary"
          >
            Get it on Chrome
          </Button>
          <Button
            className="light-button"
            onClick={handleButtonClick}
            variant="light"
          >
            Get it on Firefox
          </Button>
        </div>
      </div>
      <div className="additional-content">
        <div className="hero-image">
          <img src={image} alt="image" />
        </div>
        <div className="additional-block"></div>
      </div>
    </section>
  );
}

export default HomeSimple;
