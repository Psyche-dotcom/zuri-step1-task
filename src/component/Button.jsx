import React from "react";

const Button = ({ url, title, id }) => {
  return (
    <a href={url} id={id}>
      <button>{title}</button>
    </a>
  );
};

export default Button;
