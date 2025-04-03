import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { BsSaveFill } from "react-icons/bs";
import TabItem from "./TabItem";
import { tabs } from "../../constants/tabs";
import Personal from "../TabsContents/Personal";
import EmploymentInfo from "../TabsContents/EmploymentInfo";
import InvestmentPro from "../TabsContents/InvestmentPro";
import RegulatoryItems from "../TabsContents/RegulatoryItems";
import AccountFeatures from "../TabsContents/AccountFeatures";
const Tabs = () => {
  const [activeTab, setActiveTab] = useState("personal");
  const handleNextTab = () => {
    const currentIndex = tabs.findIndex((tab) => tab.id === activeTab);
    if (currentIndex < tabs.length - 1) {
      setActiveTab(tabs[currentIndex + 1].id);
    }
  };
  const renderTabContent = () => {
    switch (activeTab) {
      case "personal":
        return <Personal />;
      case "employment":
        return <EmploymentInfo />;
      case "investment":
        return <InvestmentPro />;
      case "regulatory":
        return <RegulatoryItems />;
        case "account":
        return <AccountFeatures />;
      default:
        return null;
    }
  };
  return (
    <>
      <ul className="flex justify-center gap-2 items-center p-2 w-full">
        {tabs.map((tab) => (
          <TabItem
            key={tab.id}
            tab={tab}
            activeTab={activeTab}
            setActiveTab={setActiveTab}
          />
        ))}
        {/* Next Button */}
        {activeTab !== "review" && (
          <li>
            <button
              onClick={handleNextTab}
              className="flex flex-col gap-2 justify-center items-center text-white hover:text-orange hover:bg-orange/25 bg-lightDark p-2 text-xs rounded-sm w-28 h-28 text-center transition-all duration-300"
            >
              <MdKeyboardDoubleArrowRight className="text-4xl transition-all duration-300" />
              <span>Next</span>
            </button>
          </li>
        )}

        {/* Submit Button */}
        {activeTab === "review" && (
          <li>
            <button
              // onClick={handleSubmit}
              className="flex flex-col gap-2 justify-center items-center bg-lightDark p-2 text-xs rounded-sm w-28 h-28 text-center transition-all duration-300 text-white hover:text-orange hover:bg-orange/25"
            >
              <BsSaveFill className="text-4xl transition-all duration-300" />
              <span>Submit</span>
            </button>
          </li>
        )}
      </ul>
      {/* Tabs Content with Smooth Animation */}
      <div className="bg-dark p-2 text-white rounded-md ">
        <AnimatePresence mode="wait">{renderTabContent()}</AnimatePresence>
      </div>
    </>
  );
};

export default Tabs;
