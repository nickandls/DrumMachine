import React from "react";
import Form from "react-bootstrap/Form";

export default function Equalizer(props) {
  const pressedButton = props.pressed;
  const kitSwitch = props.musicKit;
  const kit = props.toKit;
  const currVolume = props.vol;
  const changeVolume = props.cVol;
  const powerButton = props.powerOnOff;
  return (
    <div className="col-sm-6 left-panel">
      <Form>
        <Form.Check
          type="switch"
          id="custom-switch power"
          onChange={powerButton}
          label="Power"
        />
      </Form>

      <div className="kitTitle" id="display">
        <p>{pressedButton}</p>
      </div>

      <label for="customRange1" class="form-label">
        Volume
      </label>
      <input
        type="range"
        className="form-range"
        id="customRange1"
        step="0.01"
        min="0"
        max="1"
        value={currVolume}
        onChange={changeVolume}
      />

      <Form style={{ paddingTop: 25 + "px" }}>
        <Form.Check
          type="switch"
          id="custom-switch setKit"
          label={kitSwitch}
          onClick={kit}
        />
      </Form>
    </div>
  );
}
