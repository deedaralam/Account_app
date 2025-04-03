import {
    FaCheckCircle,
    FaTimesCircle,
    FaBan,
    FaClipboardList,
    FaHourglassHalf,
    FaEye,
    FaExclamationTriangle,
    FaFileAlt,
    FaInfoCircle,
  } from "react-icons/fa";

    const StatusConfig = {
      "Not Completed": { color: "bg-gray-500 text-white", icon: FaTimesCircle },
      Declined: { color: "bg-red-600 text-white", icon: FaTimesCircle },
      Approved: { color: "bg-green-600 text-white", icon: FaCheckCircle },
      "Approved (RR)": { color: "bg-green-600 text-white", icon: FaCheckCircle },
      "Approved (Sup)": { color: "bg-green-600 text-white", icon: FaCheckCircle },
      "Declined (RR)": { color: "bg-red-600 text-white", icon: FaTimesCircle },
      "Declined (Sup)": { color: "bg-red-600 text-white", icon: FaTimesCircle },
      Closed: { color: "bg-gray-700 text-white", icon: FaBan },
      "Submitted Pending Approval": {
        color: "bg-yellow-500 text-black",
        icon: FaClipboardList,
      },
      Canceled: { color: "bg-orange-500 text-white", icon: FaBan },
      "Pending Review (RR)": {
        color: "bg-blue-500 text-white",
        icon: FaHourglassHalf,
      },
      "Under Review (RR)": { color: "bg-blue-500 text-white", icon: FaEye },
      "Action Required (RR)": {
        color: "bg-orange-600 text-white",
        icon: FaExclamationTriangle,
      },
      "Pending Review (Sup)": {
        color: "bg-blue-500 text-white",
        icon: FaHourglassHalf,
      },
      "Under Review (Sup)": { color: "bg-blue-500 text-white", icon: FaEye },
      "Action Required (Sup)": {
        color: "bg-orange-600 text-white",
        icon: FaExclamationTriangle,
      },
      "Submitted (Clearing Firm)": {
        color: "bg-gray-500 text-white",
        icon: FaFileAlt,
      },
      "Info Required (Clearing Firm)": {
        color: "bg-cyan-600 text-white",
        icon: FaInfoCircle,
      },
      "Approved (Clearing Firm)": {
        color: "bg-green-600 text-white",
        icon: FaCheckCircle,
      },
    };

    export default StatusConfig;