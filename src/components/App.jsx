import "../style/styles.css";
import React, { useEffect, useState } from "react";
import setOne from "./SetOne";
import setTwo from "./SetTwo";
import "bootstrap/dist/css/bootstrap.min.css";
import InstrumentKit from "./InstrumentKit";
import Equalizer from "./Equalizer";

var kitBool = true;

export default function App() {
  //States -- default states
  const [kit, setKit] = useState(setOne);
  const [kitName, setKitName] = useState("setOne");
  const [volume, setVolume] = useState("0");
  const [keyPressed, setKeyPressed] = useState("");
  const [eqPower, setEqPower] = useState(false);

  //Play sound fucntion
  function playSound(event) {
    var drumValue = event.target.getAttribute("dataValue");
    setKeyPressed(kit[drumValue].id);
    var audio = new Audio(kit[drumValue].url);
    audio.volume = volume;
    audio.play();
  }

  //Change intstrument kit
  function changeKit() {
    kitBool = !kitBool;
    if (kitBool) {
      setKit(setOne);
      setKitName("setOne");
    } else {
      setKit(setTwo);
      setKitName("setTwo");
    }
  }

  //Change volume
  function changeVolume(event) {
    const volValue = event.target.value;
    setVolume(volValue);
  }

  //Playsound on keypress
  function keydown(pressed) {
    var i = 0;
    kit.forEach(function (item) {
      if (item.keyCode === pressed) {
        setKeyPressed(item.id);
        var audio = new Audio(kit[i].url);
        audio.volume = volume;
        audio.play();
      }
      i++;
    });
  }

  //Detect pressed buttons
  useEffect(() => {
    const keyDownHandler = (event) => {
      const pressed = event.keyCode;
      keydown(pressed);
    };

    document.addEventListener("keydown", keyDownHandler);

    return () => {
      document.removeEventListener("keydown", keyDownHandler);
    };
  });

  function power() {
    setEqPower(!eqPower);
    if (!eqPower) {
      setVolume(0.5);
      document.getElementById("customRange1").disabled = false;
    } else {
      setVolume(0.0);
      document.getElementById("customRange1").disabled = true;
    }
  }

  return (
    <div className="drum-container" id="drum-machine">
      <div className="row">
        <InstrumentKit musicKit={kit} click={playSound} dataValue={""} />
        <Equalizer
          pressed={keyPressed}
          musicKit={kitName}
          toKit={changeKit}
          vol={volume}
          cVol={changeVolume}
          powerOnOff={power}
        />
      </div>
    </div>
  );
}
