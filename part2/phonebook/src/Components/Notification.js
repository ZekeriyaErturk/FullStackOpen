import React from "react";

const Notification = (props) => {
  if (props.message.length === 0) return null;
  return (
    <div className={props.message[0].status}>{props.message[0].message}</div>
  );
};

export default Notification;
