import React from 'react'
import { Link } from 'react-router-dom'

const TabItem = ({tab,activeTab,setActiveTab}) => {
  return (
    <li>
          <Link
            to={`#${tab.id}`}
            onClick={() => setActiveTab(tab.id)}
            className={`flex flex-col gap-2 justify-center items-center bg-lightDark p-2 text-xs rounded-sm w-28 h-28 text-center transition-all duration-300 ${
              activeTab === tab.id
                ? "text-orange bg-orange/25"
                : "text-white hover:text-orange hover:bg-orange/25"
            }`}
          >
            <tab.icon
              className={`text-4xl transition-all duration-300 ${
                activeTab === tab.id ? "text-orange" : "text-white"
              }`}
            />
            <span>
              {tab.label}
            </span>
          </Link>
        </li>
  )
}

export default TabItem
