import React from "react";

function Listitems(props) {
  let arr = [
    "position",
    "display",
    "border",
    "padding",
    "margin",
    "overflow",
    "background",
    "font",
    "text",
    "transform",
  ];
  return (
    <ul>
      {arr.map((e, key) => {
        return (
          <li
            key={key.toString()}
            style={{ listStyle: "none", textAlign: "left" }}
          >
            <input type="checkbox" /> {e}
          </li>
        );
      })}
    </ul>
  );
}

export default Listitems;
