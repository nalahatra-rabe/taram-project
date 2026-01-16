"use client";
import clsx from "clsx";
import React from "react";
import {FaCalendarAlt} from "react-icons/fa";

interface ButtonProps {
  variant?: "primary" | "secondary";
  title: string;
  icon?: React.ReactNode;
  iconPosition?: "before" | "after";
  onClick?: () => void;
}
const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  title,
  icon = <FaCalendarAlt />,
  iconPosition = "before",
  onClick,
}) => {
  const buttonContent =
    iconPosition === "before" ? [icon, title] : [title, icon];
  return (
    <button
      onClick={onClick}
      className={clsx(
        "flex gap-4   justify-center items-center px-10 py-4 rounded-xl font-bold text-lg border",
        variant == "primary"
          ? "bg-primary border-transparent text-secondary"
          : "bg-transparent border-primary text-primary",
      )}
    >
      {buttonContent.map((item, index) => (
        <span key={index} className="flex items-center">
          {item}
        </span>
      ))}
    </button>
  );
};
export default Button;
