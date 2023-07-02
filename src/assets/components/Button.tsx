import React, { Children, useState } from "react";
interface Props {
  children: string;
  color?: "primary" | "danger" | "info";
  onClickButton: () => void;
}

function Button({ children, color, onClickButton }: Props) {
  return (
    <button
      type="button"
      className={`btn btn-${color}`}
      onClick={onClickButton}
    >
      {children}
    </button>
  );
}

export default Button;
