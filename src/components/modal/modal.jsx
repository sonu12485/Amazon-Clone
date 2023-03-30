import React, { useState, useEffect } from "react";

import GameWindow from "../gameWindow/gameWindow";

function Modal() {
  const [alert, setAlert] = useState("");
  const [displayModal, setDisplayModal] = useState(true);

  useEffect(() => {
    const clearMessage = setTimeout(() => {
      setAlert("");
    }, 5000);
    return () => clearTimeout(clearMessage);
  }, [alert]);

  return (
    <div className="modalBody">
      <div className={`Modal ${displayModal ? "Show" : ""}`}>
        <br />
        <br />
        <button
          className="Close"
          onClick={() => setDisplayModal(!displayModal)}
        >
          X
        </button>
        <GameWindow closeModal={setDisplayModal} />
        <br />
        <br />
      </div>
      <div
        className={`Overlay ${displayModal ? "Show" : ""}`}
        onClick={() => setDisplayModal(!displayModal)}
      />
      <p className="Alert">{alert}</p>
    </div>
  );
}

export default Modal;
