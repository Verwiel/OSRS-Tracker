import React from "react";
import { Feature } from "./Feature";


export const Features: React.FC = () => {
  const featuresList = [
    {
      title: "View quests",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      resourcePath: "/quests",
      // icon: TakeSnapshotIcon,
    },
    {
      title: "Check your skill levels",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      resourcePath: "/levels",
      // icon: RequestFeedbackIcon,
    },
    {
      title: "See your activity scores",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      resourcePath: "/activities",
      // icon: GiveFeedbackIcon,
    },
    {
      title: "Monitor highscores",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      resourcePath: "/highscores",
      // icon: ViewReportIcon,
    },
  ];

  return (
    <div className="features">
      <div className="features__grid">
        {featuresList.map((feature) => (
          <Feature
            key={feature.resourcePath}
            title={feature.title}
            description={feature.description}
            resourcePath={feature.resourcePath}
          />
        ))}
      </div>
    </div>
  );
};
