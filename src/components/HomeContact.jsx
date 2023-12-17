import { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Alert from "react-bootstrap/Alert";
import "../scss/HomeContact.scss";

function HomeContact() {
  const [count, setCount] = useState(0);
  const [showAlert, setShowAlert] = useState(false);
  const [email, setEmail] = useState("");
  const [isEmailValid, setIsEmailValid] = useState(true);

  useEffect(() => {
    let animationInterval;

    const startAnimation = () => {
      let currentCount = 35000;
      animationInterval = setInterval(() => {
        setCount(currentCount);
        currentCount -= 200;

        if (currentCount < 0) {
          clearInterval(animationInterval);
        }
      }, 50);
    };

    startAnimation();

    return () => clearInterval(animationInterval);
  }, []);

  const handleContactButtonClick = () => {
    const isValid = email.includes("@");
    setIsEmailValid(isValid);

    if (isValid) {
      setShowAlert(true);

      setEmail("");

      setTimeout(() => {
        setShowAlert(false);
      }, 5000);
    }
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);

    setIsEmailValid(true);
  };

  return (
    <section className="home-contact">
      <div className="content">
        <p className="count">{count}+ ALREADY JOINED</p>
        <h2 className="heading">Stay up-to-date with what we're doing</h2>
      </div>
      <div className="form-container">
        <div className="input">
          <Form>
            <Form.Group controlId="exampleForm.ControlInput1">
              <Form.Control
                className={`email-input ${!isEmailValid ? "is-invalid" : ""}`}
                type="email"
                placeholder="Enter your email address"
                value={email}
                onChange={handleEmailChange}
              />
              {!isEmailValid && (
                <Form.Control.Feedback type="invalid">
                  Please enter a valid email address.
                </Form.Control.Feedback>
              )}
            </Form.Group>
          </Form>
        </div>
        {showAlert && (
          <Alert show={showAlert} variant="success" className="absolute-alert">
            We will write to you soon!
          </Alert>
        )}
        <Button
          className="contact-button"
          variant="danger"
          onClick={handleContactButtonClick}
        >
          Contact Us
        </Button>
      </div>
    </section>
  );
}

export default HomeContact;
