import React from "react";

export default function InstrumentKit(props) {
  const kit = props.musicKit;
  const playSound = props.click;
  return (
    <div className="col-sm-6 col1">
      <div id="display">
        {kit.map((note, index) => (
          <div
            className="drum-pad"
            id={note.keyTrigger}
            onClick={playSound}
            dataValue={index}
          >
            {note.keyTrigger}
          </div>
        ))}
      </div>
    </div>
  );
}
