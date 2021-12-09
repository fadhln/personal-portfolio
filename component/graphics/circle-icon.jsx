import React from "react";

function CircleIcon(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={props.height}
      height={props.height}
      fill="none"
      viewBox="0 0 278 278"
      className={props.active ? "active" : ""}
    >
      <circle
        cx="139.43"
        cy="139.43"
        r="56.93"
        stroke="#FF8A00"
        strokeWidth="5"
        className="circle-svg-1"
      />
      <circle
        cx="139"
        cy="139"
        r="76.929"
        stroke="#FF8A00"
        strokeWidth="5"
        className="circle-svg-2"
      />
      <circle
        cx="139"
        cy="139"
        r="96.786"
        stroke="#FF8A00"
        strokeWidth="5"
        className="circle-svg-3"
      />
      <circle
        cx="139"
        cy="139"
        r="116.643"
        stroke="#FF8A00"
        strokeWidth="5"
        className="circle-svg-4"
      />
      <circle
        cx="139"
        cy="139"
        r="136.5"
        stroke="#FF8A00"
        strokeWidth="5"
        className="circle-svg-5"
      />
    </svg>
  );
}

export default CircleIcon;