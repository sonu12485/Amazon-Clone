import React from "react";

const WheelSpin = (props) => {
  const letsSpin = () => {
    var x = 1024; //min value
    var y = 9999; //max value

    var deg = Math.floor(Math.random() * (x - y)) + y;

    document.getElementById("wheel").style.transform = "rotate(" + 945 + "deg)";
    let elements = document.getElementsByClassName("spinText");
    for (var i = 0; i < elements.length; i++) {
      elements[i].style.transform = "rotate(-" + 945 + "deg)";
    }
    setTimeout(() => {
      props.spinClicked(true);
    }, 2500);
  };

  return (
    <div className="mainBody">
      <div id="main" className="main">
        <div id="wheel" className="wheel">
          <div>
            <span className="span1">
              <p className="spinText">8%</p>
            </span>
            <span className="span2">
              <p className="spinText">🥲</p>
            </span>
            <span className="span3">
              <p className="spinText">🥲</p>
            </span>
            <span className="span4">
              <p className="spinText">🥲</p>
            </span>

            <span className="span5">
              <p className="spinText">5%</p>
            </span>
            <span className="span6">
              <p className="spinText">2%</p>
            </span>
            <span className="span7">
              <p className="spinText">2%</p>
            </span>
            <span className="span8">
              <p className="spinText">5%</p>
            </span>
          </div>
        </div>

        <button className="spin" onClick={letsSpin}>
          <div className="arrowHead"></div>
          <div className="arrowHead1"></div>
          SPIN
        </button>
      </div>
    </div>
  );
};

export default WheelSpin;
