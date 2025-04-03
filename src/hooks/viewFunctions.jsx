import { useState } from "react";

export const useViewState = () => {
  const [activeView, setActiveView] = useState("card"); // Manage active state

  const handleCardClick = () => {
    setActiveView("card");
  };

  const handleTableClick = () => {
    setActiveView("table");
  };

  return { activeView, handleCardClick, handleTableClick };
};
