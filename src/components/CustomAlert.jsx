import { useState, useEffect } from "react";
import Alert from "react-bootstrap/Alert";
import "../scss/CustomAlert.scss";

const CustomAlert = ({ variant, message, onClose }) => {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setShow(false);
      if (onClose) {
        onClose();
      }
    }, 4000);

    return () => clearTimeout(timeoutId);
  }, [onClose]);

  const handleAlertClose = () => {
    setShow(false);
    if (onClose) {
      onClose();
    }
  };

  return (
    <Alert
      show={show}
      variant={variant}
      onClose={handleAlertClose}
      dismissible
      className="custom-alert"
    >
      {message}
    </Alert>
  );
};

export default CustomAlert;
