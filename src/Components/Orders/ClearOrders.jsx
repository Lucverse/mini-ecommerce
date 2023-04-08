import React, { useState } from "react";
import ConfirmOverlay from "./ConfirmOverlay.jsx";

const ClearOrders = ({ handleClearOrders }) => {
  const [showConfirmOverlay, setShowConfirmOverlay] = useState(false);

  const handleConfirmClearOrders = () => {
    handleClearOrders();
    setShowConfirmOverlay(false);
  };

  const handleCancelClearOrders = () => {
    setShowConfirmOverlay(false);
  };

  return (
    <div>
      <button className="clearButton" onClick={() => setShowConfirmOverlay(true)}>Clear Orders</button>
      {showConfirmOverlay && (
        <ConfirmOverlay
          message="Are you sure you want to clear your orders?"
          onConfirm={handleConfirmClearOrders}
          onCancel={handleCancelClearOrders}
        />
      )}
    </div>
  );
};

export default ClearOrders;
