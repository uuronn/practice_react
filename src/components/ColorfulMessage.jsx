import React from "react";

export const ColorfulMessage = (props) => {
  const { color, children } = props;
  console.log(props);
  const contentStyle = {
    color, /* color: color を省略している */
    fontSize: "18px"
  }
  return (
    <p style={contentStyle}>{ children }</p>
  );
}
