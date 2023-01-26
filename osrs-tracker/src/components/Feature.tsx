import React from "react";
import { Link } from "react-router-dom";

interface FeatureProps {
  title: string;
  description: string;
  resourcePath: string;
}

export const Feature: React.FC<FeatureProps> = ({
  title,
  description,
  resourcePath,
  // icon,
}) => (
  <Link
    to={resourcePath}
    className="feature"
    target="_blank"
    rel="noopener noreferrer"
  >
    <h3 className="feature__headline">{title}</h3>
    <p className="feature__description">{description}</p>
  </Link>
);
