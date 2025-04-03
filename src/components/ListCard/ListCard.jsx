import React from "react";
import { Link } from "react-router-dom";
import { HiOutlineDotsHorizontal } from "react-icons/hi";
import { MdTypeSpecimen, MdEmail } from "react-icons/md";
import { FaPhoneAlt, FaGlobe } from "react-icons/fa";
import { AiFillBank } from "react-icons/ai";

const ListCard = ({
  applicationStatusName,
  accountTypeName,
  accountSubType,
  phone,
  email,
  ipAddress,
  bank,
  applicationGuid,
}) => {
  return (
    <Link
      to={applicationGuid}
      className="flex border-black border-4 rounded-xl"
    >
      <div className="flex flex-col p-2 gap-3 bg-gradient-to-r from-secondary/70 to-primary/70 border border-white/10 rounded-lg w-full">
        {/* Name & Status */}
        <div className="flex items-center justify-center bg-primary p-2 rounded-lg gap-3">
          <span className="w-8 h-8 flex items-center justify-center rounded-full">
            {applicationStatusName}
          </span>
          <span className="text-gray-300">{applicationStatusName}</span>
        </div>

        {/* Profile Section */}
        <div className="flex justify-between items-center w-auto">
          <span className="flex items-center gap-2">
            <i className="not-italic text-sm flex justify-center items-center rounded-full w-8 h-8 bg-white text-orange uppercase"></i>
            <i className="not-italic text-white text-sm">{accountTypeName}</i>
          </span>
          <span className="flex items-center gap-2">
            <i className="not-italic text-sm flex justify-center items-center rounded-full w-8 h-8 bg-white"></i>
            {/* 🔥 Fixed: Changed <Link> to <button> */}
            <button className="bg-secondary p-2 rounded-sm text-white/50 text-lg">
              <HiOutlineDotsHorizontal />
            </button>
          </span>
        </div>

        {/* Account Details */}
        <div className="grid grid-cols-2 gap-2">
          <div className="flex gap-2 items-center">
            <i className="not-italic flex justify-center items-center rounded-sm bg-secondary p-1 border border-white/10 text-xl text-white">
              <MdTypeSpecimen />
            </i>
            <i className="not-italic text-white/50 text-sm font-bold text-nowrap overflow-hidden">
              {accountSubType}
            </i>
          </div>
          <div className="flex gap-2 items-center">
            <i className="not-italic flex justify-center items-center rounded-sm bg-secondary p-1 border border-white/10 text-xl text-white">
              <FaPhoneAlt />
            </i>
            <i className="not-italic text-white/50 text-sm font-bold">
              {phone}
            </i>
          </div>
          <div className="flex gap-2 items-center">
            <i className="not-italic flex justify-center items-center rounded-sm bg-secondary p-1 border border-white/10 text-xl text-white">
              <MdEmail />
            </i>
            <i className="not-italic text-white/50 text-sm font-bold">
              {email}
            </i>
          </div>
        </div>

        {/* Bank & IP Section */}
        <div className="flex w-auto justify-between items-center gap-2">
          <div className="flex justify-center items-center gap-2">
            <i className="not-italic flex justify-center items-center rounded-sm bg-secondary p-1 border border-white/10 text-xl text-white">
              <AiFillBank />
            </i>
            <i className="not-italic text-sm text-white bg-secondary p-1 rounded-sm text-nowrap overflow-hidden">
              {bank}
            </i>
          </div>
          <div className="flex justify-center items-center gap-2">
            <i className="not-italic flex justify-center items-center rounded-sm bg-secondary p-1 border border-white/10 text-xl text-white">
              <FaGlobe />
            </i>
            <i className="not-italic text-sm text-white bg-secondary p-1 rounded-sm">
              {ipAddress}
            </i>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ListCard;
