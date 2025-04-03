import React from "react";
const Table = ({
  statusDetails,
  name,
  type,
  phone,
  email,
  ip,
  bank,
  status,
}) => {
  return (
    <tr className="text-center text-white/70 text-sm ">
      <td className=" text-white text-sm font-normal p-1 border border-orange/10">
        {name}
      </td>
      <td className=" text-white text-sm font-normal p-1 border border-orange/10">
        {type}
      </td>
      <td className=" text-white text-sm font-normal p-1 border border-orange/10">
        {phone}
      </td>
      <td className=" text-white text-sm font-normal p-1 border border-orange/10">
        {email}
      </td>
      <td className=" text-white text-sm font-normal p-1 border border-orange/10">
        {bank}
      </td>
      <td className=" text-white text-sm font-normal p-1 border border-orange/10">
        {ip}
      </td>
      <td className="  text-white text-sm font-normal p-1 border border-orange/10">
        {" "}
        <button className={` cursor-pointer flex items-center justify-center  p-2 rounded-lg ${statusDetails.color}`}>
          <span
            className={`w-8 h-8 flex items-center justify-center rounded-full ${statusDetails.color}`}
          >
            {statusDetails.icon && <statusDetails.icon size={20} />}
          </span>
          <span className="text-white">{status}</span>
        </button>
      </td>
    </tr>
  );
};

export default Table;
