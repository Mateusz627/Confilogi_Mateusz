import { useState, useEffect } from "react";
import Alert from "react-bootstrap/Alert";
import Button from "react-bootstrap/Button";
import image from "../assets/illustration-features-tab-2.svg";
import "../scss/modal.scss";

function Modal() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const alertTimeout = setTimeout(() => {
      setShow(true);
    }, 30000);

    return () => clearTimeout(alertTimeout);
  }, []);

  return (
    <>
      <Alert className="Alert" show={show} variant="success">
        <img src={image} alt="photo" />
        <p>
          Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget
          lacinia odio sem nec elit. Cras mattis consectetur purus sit amet
          fermentum.
        </p>

        <div className="d-flex justify-content-end">
          <Button onClick={() => setShow(false)} variant="outline-success">
            Close me
          </Button>
        </div>
      </Alert>
    </>
  );
}

export default Modal;
