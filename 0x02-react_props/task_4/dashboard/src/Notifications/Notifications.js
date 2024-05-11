import React from "react";
import PropTypes from "prop-types";
import "./Notifications.css";
import close_icon from "../assets/close-icon.png";
import { getLatestNotification } from "../utils/utils";
import NotificationItem from "./NotificationItem";

const Notifications = ({ displayDrawer = false }) => {
  return (
    <>
      <div className="menuItem">Your notifications</div>
      {displayDrawer ? (
        <div className="Notifications">
          <p>Here is the list of notifications</p>
          <ul>
            <NotificationItem type="default" value="New course available" />
            <NotificationItem type="urgent" value="New resume available" />
            <NotificationItem
              type="urgent"
              html={{ __html: getLatestNotification() }}
            />

            {/* <li data-priority="default">New course available</li>
        <li data-priority="urgent">New resume available</li>
        <li data-priority="urgent">
          <div
            dangerouslySetInnerHTML={{ __html: `${getLatestNotification()}` }}
          ></div>
        </li> */}
          </ul>
          <button
            type="button"
            aria-label="Close"
            onClick={() => console.log("Close button has been clicked")}
            style={{
              display: "inline-block",
              position: "absolute",
              top: "16px",
              right: "16px",
              background: 0,
              border: 0,
              outline: "none",
              cursor: "pointer",
            }}
          >
            <img
              src={close_icon}
              alt=""
              style={{ width: "8px", height: "8px" }}
            />
          </button>
        </div>
      ) : null}
    </>
  );
};
Notifications.propTypes = {
  html: PropTypes.shape({
    __html: PropTypes.string.isRequired,
  }),
  type: PropTypes.string,
  value: PropTypes.string,
  displayDrawer: PropTypes.bool,
};

export default Notifications;
