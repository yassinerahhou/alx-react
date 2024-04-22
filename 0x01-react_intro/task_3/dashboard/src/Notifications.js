import React from "react";
import { getLatestNotification } from "./utils";

import "./Notifications.css";
import close from "./close-icon.png";
function handle_btn_click() {
  console.log("Close button has been clicked");
}
export { handle_btn_click };
export default function Notifications() {
  return (
    <>
      <div className="Notifications">
        <p> Here is the list of notifications</p>
        {/* /*       after the paragraph add an unordered li */}

        <ul>
          <li data-priority="default">New course available</li>
          <li data-priority="urgent">New resume available</li>
          <li
            data-priority="urgent"
            dangerouslySetInnerHTML={{ __html: getLatestNotification() }}
          ></li>
        </ul>
        <button
          style={{
            backgroundColor: "transparent",
            border: "none",
            position: "absolute",
            top: 0,
            right: 0,
            margin: "15px",
          }}
          aria-label="Close"
          id="close-btn"
          onClick={handle_btn_click}
        >
          <img src={close} alt="Close" width={10} height={10}></img>
        </button>
      </div>
    </>
  );
}
