import React from "react";
import { CardContainer } from "../styles/styles";

type CardProps = {
  text?: string;
};

function Card({ text }: CardProps) {
  return <CardContainer>{text}</CardContainer>;
}

export default Card;
