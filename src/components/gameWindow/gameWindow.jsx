import React, { useState, useRef } from "react";
import useWindowSize from "react-use/lib/useWindowSize";
import Confetti from "react-confetti";
import WheelSpin from "../wheelSpin/wheelSpin";

export default function GameWindow(props) {
  let [flag, setFlag] = useState(false);
  const confetiRef = useRef(null);

  const { width, height } = useWindowSize();

  const spinClicked = (value) => {
    setFlag(value);
  };

  return (
    <div className="body">
      {console.log(width, height)}
      <div className="confettie-wrap" ref={confetiRef}>
        <Confetti run={flag} numberOfPieces={150} width={2000} height={2000} />
      </div>
      <div style={{ display: "flex", width: "100%", justifyContent: "center" }}>
        <h2 style={{ fontSize: "34px", fontWeight: "600" }}> Spin and win </h2>
      </div>

      <br />
      <br />
      <WheelSpin spinClicked={spinClicked} />
      <br />
      <br />
      {flag ? (
        <div className="btnGrid">
          <div className="tryLuckbtn" onClick={() => props.closeModal(false)}>
            <span>Claim your prize</span>
          </div>
        </div>
      ) : (
        <div> </div>
      )}
    </div>
  );
}
