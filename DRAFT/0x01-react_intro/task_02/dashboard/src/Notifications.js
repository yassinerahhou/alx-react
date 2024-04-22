import React from "react";
import "./Notifications.css";
import closeIcon from "./close-icon.png";
import { getLatestNotification } from "./utils";

function handle_btn_click() {
  console.log("Close button has been clicked");
}
export { handle_btn_click };
export function Notifications() {
  return (
    <div className="Notifications">
      <p>Here is the list of notifications</p>
      {/* after the paragraph add an unordered list */}
      <ul>
        <li data-priority="default">New course available</li>
        <li data-priority="urgent">New resume available</li>
        <li
          data-priority="urgent"
          dangerouslySetInnerHTML={{ __html: getLatestNotification() }}
        ></li>
      </ul>
      <button
        aria-label="Close"
        id="close-btn"
        style={{
          backgroundColor: "transparent",
          border: "none",
          position: "absolute",
          top: 0,
          // float: "right",
          right: 0,
          margin: "15px",
        }}
        onClick={handle_btn_click}
      >
        <img src={closeIcon} alt="Close" style={{ height: "20px" }}></img>
      </button>
    </div>
  );
}
