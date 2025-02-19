import React from "react";
import { Link } from "react-router-dom";
import { HiOutlineDotsHorizontal } from "react-icons/hi";
import { BiLoaderCircle } from "react-icons/bi";
import { MdTypeSpecimen } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { AiFillBank } from "react-icons/ai";
import { FaGlobe } from "react-icons/fa";
import { MdWatchLater } from "react-icons/md";
import { BsFillStopwatchFill } from "react-icons/bs";
import { FaCheck } from "react-icons/fa6";
import { IoMdClose } from "react-icons/io";

const ListCard = () => {
  return (
    <div className="flex flex-row">
      <div className="flex flex-col gap-2 items-start border border-white/10 p-2 m-2 rounded-lg  h-[calc(100vh-5rem)] w-[calc(100vw-85rem)] overflow-y-auto  shadow-lg custom-scrollbar hover:border-orange/50">
        {/* Sticky header */}
        <h2 className="sticky top-0 bg-gray-900 p-2 w-full flex items-center gap-2 mb-4 z-10">
          <span className="w-8 h-8 rounded-full bg-orange-500 text-white flex justify-center items-center text-xl">
            <BiLoaderCircle />
          </span>
          <span className="text-white text-lg">In progress</span>
        </h2>
        <div className="flex flex-col p-2 gap-2 bg-secondary/50 rounded-lg w-full">
          <div className="flex justify-between w-auto">
            <span className="flex items-center gap-2">
              <i className="not-italic text-sm flex justify-center items-center rounded-full w-8 h-8 bg-white text-center text-orange uppercase">
                MM
              </i>{" "}
              <i className="not-italic text-white text-sm"> Mathew Martin</i>
            </span>
            <span className="flex items-center gap-2">
              <i className="not-italic text-sm flex justify-center items-center rounded-full w-8 h-8 bg-white"></i>
              <Link className="bg-secondary p-2 rounded-sm text-white/50 text-lg">
                <HiOutlineDotsHorizontal />
              </Link>
            </span>
          </div>
          <div className="grid grid-col gap-2">
            <div className="flex gap-2  items-center">
              <i className="not-italic  justify-center items-center flex rounded-sm bg-secondary p-1 border border-white/10 text-xl text-white">
                <MdTypeSpecimen />
              </i>
              <i className="not-italic text-white/50 text-sm font-bold text-nowrap text-ellipsis overflow-hidden">
                Personal (Custodial (UTMA/ UGMA))
              </i>
            </div>
            <div className="flex gap-2  items-center">
              <i className="not-italic  justify-center items-center  flex rounded-sm bg-secondary p-1 border border-white/10 text-xl text-white">
                <FaPhoneAlt />
              </i>
              <i className="not-italic text-white/50 text-sm font-bold">
                786-656-6666
              </i>
            </div>
            <div className="flex gap-2  items-center">
              <i className="not-italic  justify-center items-center flex rounded-sm bg-secondary p-1 border border-white/10 text-xl text-white">
                <MdEmail />
              </i>
              <i className="not-italic text-white/50 text-sm font-bold">
                tristan.william@test.com
              </i>
            </div>
          </div>
          <div className="flex w-auto just-between item-center gap-2">
            <div className="flex justify-center items-center gap-2">
              <i className="not-italic  justify-center items-center flex rounded-sm bg-secondary p-1 border border-white/10 text-xl text-white">
                <AiFillBank />
              </i>
              <i className="not-italic text-sm text-white bg-secondary p-1 rounded-sm text-nowrap text-ellipsis overflow-hidden">
                XXX-XX-2312
              </i>
            </div>
            <div className="flex justify-center items-center gap-2">
              <i className="not-italic  justify-center items-center flex rounded-sm bg-secondary p-1 border border-white/10 text-xl text-white">
                <FaGlobe />
              </i>
              <i className="not-italic text-sm text-white bg-secondary p-1 rounded-sm">
                192.01.01.02
              </i>
            </div>
          </div>
        </div>
        <div className="flex flex-col p-2 gap-2 bg-secondary/50 rounded-lg w-full">
          <div className="flex justify-between w-auto">
            <span className="flex items-center gap-2">
              <i className="not-italic text-sm flex justify-center items-center rounded-full w-8 h-8 bg-white text-center text-orange uppercase">
                MM
              </i>{" "}
              <i className="not-italic text-white text-sm"> Mathew Martin</i>
            </span>
            <span className="flex items-center gap-2">
              <i className="not-italic text-sm flex justify-center items-center rounded-full w-8 h-8 bg-white"></i>
              <Link className="bg-secondary p-2 rounded-sm text-white/50 text-lg">
                <HiOutlineDotsHorizontal />
              </Link>
            </span>
          </div>
          <div className="grid grid-col gap-2">
            <div className="flex gap-2  items-center">
              <i className="not-italic  justify-center items-center flex rounded-sm bg-secondary p-1 border border-white/10 text-xl text-white">
                <MdTypeSpecimen />
              </i>
              <i className="not-italic text-white/50 text-sm font-bold text-nowrap text-ellipsis overflow-hidden">
                Personal (Custodial (UTMA/ UGMA))
              </i>
            </div>
            <div className="flex gap-2  items-center">
              <i className="not-italic  justify-center items-center  flex rounded-sm bg-secondary p-1 border border-white/10 text-xl text-white">
                <FaPhoneAlt />
              </i>
              <i className="not-italic text-white/50 text-sm font-bold">
                786-656-6666
              </i>
            </div>
            <div className="flex gap-2  items-center">
              <i className="not-italic  justify-center items-center flex rounded-sm bg-secondary p-1 border border-white/10 text-xl text-white">
                <MdEmail />
              </i>
              <i className="not-italic text-white/50 text-sm font-bold">
                tristan.william@test.com
              </i>
            </div>
          </div>
          <div className="flex w-auto just-between item-center gap-2">
            <div className="flex justify-center items-center gap-2">
              <i className="not-italic  justify-center items-center flex rounded-sm bg-secondary p-1 border border-white/10 text-xl text-white">
                <AiFillBank />
              </i>
              <i className="not-italic text-sm text-white bg-secondary p-1 rounded-sm text-nowrap text-ellipsis overflow-hidden">
                XXX-XX-2312
              </i>
            </div>
            <div className="flex justify-center items-center gap-2">
              <i className="not-italic  justify-center items-center flex rounded-sm bg-secondary p-1 border border-white/10 text-xl text-white">
                <FaGlobe />
              </i>
              <i className="not-italic text-sm text-white bg-secondary p-1 rounded-sm">
                192.01.01.02
              </i>
            </div>
          </div>
        </div>
        <div className="flex flex-col p-2 gap-2 bg-secondary/50 rounded-lg w-full">
          <div className="flex justify-between w-auto">
            <span className="flex items-center gap-2">
              <i className="not-italic text-sm flex justify-center items-center rounded-full w-8 h-8 bg-white text-center text-orange uppercase">
                MM
              </i>{" "}
              <i className="not-italic text-white text-sm"> Mathew Martin</i>
            </span>
            <span className="flex items-center gap-2">
              <i className="not-italic text-sm flex justify-center items-center rounded-full w-8 h-8 bg-white"></i>
              <Link className="bg-secondary p-2 rounded-sm text-white/50 text-lg">
                <HiOutlineDotsHorizontal />
              </Link>
            </span>
          </div>
          <div className="grid grid-col gap-2">
            <div className="flex gap-2  items-center">
              <i className="not-italic  justify-center items-center flex rounded-sm bg-secondary p-1 border border-white/10 text-xl text-white">
                <MdTypeSpecimen />
              </i>
              <i className="not-italic text-white/50 text-sm font-bold text-nowrap text-ellipsis overflow-hidden">
                Personal (Custodial (UTMA/ UGMA))
              </i>
            </div>
            <div className="flex gap-2  items-center">
              <i className="not-italic  justify-center items-center  flex rounded-sm bg-secondary p-1 border border-white/10 text-xl text-white">
                <FaPhoneAlt />
              </i>
              <i className="not-italic text-white/50 text-sm font-bold">
                786-656-6666
              </i>
            </div>
            <div className="flex gap-2  items-center">
              <i className="not-italic  justify-center items-center flex rounded-sm bg-secondary p-1 border border-white/10 text-xl text-white">
                <MdEmail />
              </i>
              <i className="not-italic text-white/50 text-sm font-bold">
                tristan.william@test.com
              </i>
            </div>
          </div>
          <div className="flex w-auto just-between item-center gap-2">
            <div className="flex justify-center items-center gap-2">
              <i className="not-italic  justify-center items-center flex rounded-sm bg-secondary p-1 border border-white/10 text-xl text-white">
                <AiFillBank />
              </i>
              <i className="not-italic text-sm text-white bg-secondary p-1 rounded-sm text-nowrap text-ellipsis overflow-hidden">
                XXX-XX-2312
              </i>
            </div>
            <div className="flex justify-center items-center gap-2">
              <i className="not-italic  justify-center items-center flex rounded-sm bg-secondary p-1 border border-white/10 text-xl text-white">
                <FaGlobe />
              </i>
              <i className="not-italic text-sm text-white bg-secondary p-1 rounded-sm">
                192.01.01.02
              </i>
            </div>
          </div>
        </div>
        <div className="flex flex-col p-2 gap-2 bg-secondary/50 rounded-lg w-full">
          <div className="flex justify-between w-auto">
            <span className="flex items-center gap-2">
              <i className="not-italic text-sm flex justify-center items-center rounded-full w-8 h-8 bg-white text-center text-orange uppercase">
                MM
              </i>{" "}
              <i className="not-italic text-white text-sm"> Mathew Martin</i>
            </span>
            <span className="flex items-center gap-2">
              <i className="not-italic text-sm flex justify-center items-center rounded-full w-8 h-8 bg-white"></i>
              <Link className="bg-secondary p-2 rounded-sm text-white/50 text-lg">
                <HiOutlineDotsHorizontal />
              </Link>
            </span>
          </div>
          <div className="grid grid-col gap-2">
            <div className="flex gap-2  items-center">
              <i className="not-italic  justify-center items-center flex rounded-sm bg-secondary p-1 border border-white/10 text-xl text-white">
                <MdTypeSpecimen />
              </i>
              <i className="not-italic text-white/50 text-sm font-bold text-nowrap text-ellipsis overflow-hidden">
                Personal (Custodial (UTMA/ UGMA))
              </i>
            </div>
            <div className="flex gap-2  items-center">
              <i className="not-italic  justify-center items-center  flex rounded-sm bg-secondary p-1 border border-white/10 text-xl text-white">
                <FaPhoneAlt />
              </i>
              <i className="not-italic text-white/50 text-sm font-bold">
                786-656-6666
              </i>
            </div>
            <div className="flex gap-2  items-center">
              <i className="not-italic  justify-center items-center flex rounded-sm bg-secondary p-1 border border-white/10 text-xl text-white">
                <MdEmail />
              </i>
              <i className="not-italic text-white/50 text-sm font-bold">
                tristan.william@test.com
              </i>
            </div>
          </div>
          <div className="flex w-auto just-between item-center gap-2">
            <div className="flex justify-center items-center gap-2">
              <i className="not-italic  justify-center items-center flex rounded-sm bg-secondary p-1 border border-white/10 text-xl text-white">
                <AiFillBank />
              </i>
              <i className="not-italic text-sm text-white bg-secondary p-1 rounded-sm text-nowrap text-ellipsis overflow-hidden">
                XXX-XX-2312
              </i>
            </div>
            <div className="flex justify-center items-center gap-2">
              <i className="not-italic  justify-center items-center flex rounded-sm bg-secondary p-1 border border-white/10 text-xl text-white">
                <FaGlobe />
              </i>
              <i className="not-italic text-sm text-white bg-secondary p-1 rounded-sm">
                192.01.01.02
              </i>
            </div>
          </div>
        </div>
        <div className="flex flex-col p-2 gap-2 bg-secondary/50 rounded-lg w-full">
          <div className="flex justify-between w-auto">
            <span className="flex items-center gap-2">
              <i className="not-italic text-sm flex justify-center items-center rounded-full w-8 h-8 bg-white text-center text-orange uppercase">
                MM
              </i>{" "}
              <i className="not-italic text-white text-sm"> Mathew Martin</i>
            </span>
            <span className="flex items-center gap-2">
              <i className="not-italic text-sm flex justify-center items-center rounded-full w-8 h-8 bg-white"></i>
              <Link className="bg-secondary p-2 rounded-sm text-white/50 text-lg">
                <HiOutlineDotsHorizontal />
              </Link>
            </span>
          </div>
          <div className="grid grid-col gap-2">
            <div className="flex gap-2  items-center">
              <i className="not-italic  justify-center items-center flex rounded-sm bg-secondary p-1 border border-white/10 text-xl text-white">
                <MdTypeSpecimen />
              </i>
              <i className="not-italic text-white/50 text-sm font-bold text-nowrap text-ellipsis overflow-hidden">
                Personal (Custodial (UTMA/ UGMA))
              </i>
            </div>
            <div className="flex gap-2  items-center">
              <i className="not-italic  justify-center items-center  flex rounded-sm bg-secondary p-1 border border-white/10 text-xl text-white">
                <FaPhoneAlt />
              </i>
              <i className="not-italic text-white/50 text-sm font-bold">
                786-656-6666
              </i>
            </div>
            <div className="flex gap-2  items-center">
              <i className="not-italic  justify-center items-center flex rounded-sm bg-secondary p-1 border border-white/10 text-xl text-white">
                <MdEmail />
              </i>
              <i className="not-italic text-white/50 text-sm font-bold">
                tristan.william@test.com
              </i>
            </div>
          </div>
          <div className="flex w-auto just-between item-center gap-2">
            <div className="flex justify-center items-center gap-2">
              <i className="not-italic  justify-center items-center flex rounded-sm bg-secondary p-1 border border-white/10 text-xl text-white">
                <AiFillBank />
              </i>
              <i className="not-italic text-sm text-white bg-secondary p-1 rounded-sm text-nowrap text-ellipsis overflow-hidden">
                XXX-XX-2312
              </i>
            </div>
            <div className="flex justify-center items-center gap-2">
              <i className="not-italic  justify-center items-center flex rounded-sm bg-secondary p-1 border border-white/10 text-xl text-white">
                <FaGlobe />
              </i>
              <i className="not-italic text-sm text-white bg-secondary p-1 rounded-sm">
                192.01.01.02
              </i>
            </div>
          </div>
        </div>
        <div className="flex flex-col p-2 gap-2 bg-secondary/50 rounded-lg w-full">
          <div className="flex justify-between w-auto">
            <span className="flex items-center gap-2">
              <i className="not-italic text-sm flex justify-center items-center rounded-full w-8 h-8 bg-white text-center text-orange uppercase">
                MM
              </i>{" "}
              <i className="not-italic text-white text-sm"> Mathew Martin</i>
            </span>
            <span className="flex items-center gap-2">
              <i className="not-italic text-sm flex justify-center items-center rounded-full w-8 h-8 bg-white"></i>
              <Link className="bg-secondary p-2 rounded-sm text-white/50 text-lg">
                <HiOutlineDotsHorizontal />
              </Link>
            </span>
          </div>
          <div className="grid grid-col gap-2">
            <div className="flex gap-2  items-center">
              <i className="not-italic  justify-center items-center flex rounded-sm bg-secondary p-1 border border-white/10 text-xl text-white">
                <MdTypeSpecimen />
              </i>
              <i className="not-italic text-white/50 text-sm font-bold text-nowrap text-ellipsis overflow-hidden">
                Personal (Custodial (UTMA/ UGMA))
              </i>
            </div>
            <div className="flex gap-2  items-center">
              <i className="not-italic  justify-center items-center  flex rounded-sm bg-secondary p-1 border border-white/10 text-xl text-white">
                <FaPhoneAlt />
              </i>
              <i className="not-italic text-white/50 text-sm font-bold">
                786-656-6666
              </i>
            </div>
            <div className="flex gap-2  items-center">
              <i className="not-italic  justify-center items-center flex rounded-sm bg-secondary p-1 border border-white/10 text-xl text-white">
                <MdEmail />
              </i>
              <i className="not-italic text-white/50 text-sm font-bold">
                tristan.william@test.com
              </i>
            </div>
          </div>
          <div className="flex w-auto just-between item-center gap-2">
            <div className="flex justify-center items-center gap-2">
              <i className="not-italic  justify-center items-center flex rounded-sm bg-secondary p-1 border border-white/10 text-xl text-white">
                <AiFillBank />
              </i>
              <i className="not-italic text-sm text-white bg-secondary p-1 rounded-sm text-nowrap text-ellipsis overflow-hidden">
                XXX-XX-2312
              </i>
            </div>
            <div className="flex justify-center items-center gap-2">
              <i className="not-italic  justify-center items-center flex rounded-sm bg-secondary p-1 border border-white/10 text-xl text-white">
                <FaGlobe />
              </i>
              <i className="not-italic text-sm text-white bg-secondary p-1 rounded-sm">
                192.01.01.02
              </i>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-2 items-start border border-white/10 p-2 m-2 rounded-lg  h-[calc(100vh-5rem)] w-[calc(100vw-85rem)] overflow-y-auto  shadow-lg custom-scrollbar hover:border-yellow-500">
        {/* Sticky header */}
        <h2 className="sticky top-0 bg-gray-900 p-2 w-full flex items-center gap-2 mb-4 z-10">
          <span className="w-8 h-8 rounded-full bg-yellow-500 text-white flex justify-center items-center text-xl">
            <MdWatchLater />
          </span>
          <span className="text-white text-lg">Pending</span>
        </h2>
        <div className="flex flex-col p-2 gap-2 bg-secondary/50 rounded-lg w-full">
          <div className="flex justify-between w-auto">
            <span className="flex items-center gap-2">
              <i className="not-italic text-sm flex justify-center items-center rounded-full w-8 h-8 bg-white text-center text-orange uppercase">
                MM
              </i>{" "}
              <i className="not-italic text-white text-sm"> Mathew Martin</i>
            </span>
            <span className="flex items-center gap-2">
              <i className="not-italic text-sm flex justify-center items-center rounded-full w-8 h-8 bg-white"></i>
              <Link className="bg-secondary p-2 rounded-sm text-white/50 text-lg">
                <HiOutlineDotsHorizontal />
              </Link>
            </span>
          </div>
          <div className="grid grid-col gap-2">
            <div className="flex gap-2  items-center">
              <i className="not-italic  justify-center items-center flex rounded-sm bg-secondary p-1 border border-white/10 text-xl text-white">
                <MdTypeSpecimen />
              </i>
              <i className="not-italic text-white/50 text-sm font-bold text-nowrap text-ellipsis overflow-hidden">
                Personal (Custodial (UTMA/ UGMA))
              </i>
            </div>
            <div className="flex gap-2  items-center">
              <i className="not-italic  justify-center items-center  flex rounded-sm bg-secondary p-1 border border-white/10 text-xl text-white">
                <FaPhoneAlt />
              </i>
              <i className="not-italic text-white/50 text-sm font-bold">
                786-656-6666
              </i>
            </div>
            <div className="flex gap-2  items-center">
              <i className="not-italic  justify-center items-center flex rounded-sm bg-secondary p-1 border border-white/10 text-xl text-white">
                <MdEmail />
              </i>
              <i className="not-italic text-white/50 text-sm font-bold">
                tristan.william@test.com
              </i>
            </div>
          </div>
          <div className="flex w-auto just-between item-center gap-2">
            <div className="flex justify-center items-center gap-2">
              <i className="not-italic  justify-center items-center flex rounded-sm bg-secondary p-1 border border-white/10 text-xl text-white">
                <AiFillBank />
              </i>
              <i className="not-italic text-sm text-white bg-secondary p-1 rounded-sm text-nowrap text-ellipsis overflow-hidden">
                XXX-XX-2312
              </i>
            </div>
            <div className="flex justify-center items-center gap-2">
              <i className="not-italic  justify-center items-center flex rounded-sm bg-secondary p-1 border border-white/10 text-xl text-white">
                <FaGlobe />
              </i>
              <i className="not-italic text-sm text-white bg-secondary p-1 rounded-sm">
                192.01.01.02
              </i>
            </div>
          </div>
        </div>
        <div className="flex flex-col p-2 gap-2 bg-secondary/50 rounded-lg w-full">
          <div className="flex justify-between w-auto">
            <span className="flex items-center gap-2">
              <i className="not-italic text-sm flex justify-center items-center rounded-full w-8 h-8 bg-white text-center text-orange uppercase">
                MM
              </i>{" "}
              <i className="not-italic text-white text-sm"> Mathew Martin</i>
            </span>
            <span className="flex items-center gap-2">
              <i className="not-italic text-sm flex justify-center items-center rounded-full w-8 h-8 bg-white"></i>
              <Link className="bg-secondary p-2 rounded-sm text-white/50 text-lg">
                <HiOutlineDotsHorizontal />
              </Link>
            </span>
          </div>
          <div className="grid grid-col gap-2">
            <div className="flex gap-2  items-center">
              <i className="not-italic  justify-center items-center flex rounded-sm bg-secondary p-1 border border-white/10 text-xl text-white">
                <MdTypeSpecimen />
              </i>
              <i className="not-italic text-white/50 text-sm font-bold text-nowrap text-ellipsis overflow-hidden">
                Personal (Custodial (UTMA/ UGMA))
              </i>
            </div>
            <div className="flex gap-2  items-center">
              <i className="not-italic  justify-center items-center  flex rounded-sm bg-secondary p-1 border border-white/10 text-xl text-white">
                <FaPhoneAlt />
              </i>
              <i className="not-italic text-white/50 text-sm font-bold">
                786-656-6666
              </i>
            </div>
            <div className="flex gap-2  items-center">
              <i className="not-italic  justify-center items-center flex rounded-sm bg-secondary p-1 border border-white/10 text-xl text-white">
                <MdEmail />
              </i>
              <i className="not-italic text-white/50 text-sm font-bold">
                tristan.william@test.com
              </i>
            </div>
          </div>
          <div className="flex w-auto just-between item-center gap-2">
            <div className="flex justify-center items-center gap-2">
              <i className="not-italic  justify-center items-center flex rounded-sm bg-secondary p-1 border border-white/10 text-xl text-white">
                <AiFillBank />
              </i>
              <i className="not-italic text-sm text-white bg-secondary p-1 rounded-sm text-nowrap text-ellipsis overflow-hidden">
                XXX-XX-2312
              </i>
            </div>
            <div className="flex justify-center items-center gap-2">
              <i className="not-italic  justify-center items-center flex rounded-sm bg-secondary p-1 border border-white/10 text-xl text-white">
                <FaGlobe />
              </i>
              <i className="not-italic text-sm text-white bg-secondary p-1 rounded-sm">
                192.01.01.02
              </i>
            </div>
          </div>
        </div>
        <div className="flex flex-col p-2 gap-2 bg-secondary/50 rounded-lg w-full">
          <div className="flex justify-between w-auto">
            <span className="flex items-center gap-2">
              <i className="not-italic text-sm flex justify-center items-center rounded-full w-8 h-8 bg-white text-center text-orange uppercase">
                MM
              </i>{" "}
              <i className="not-italic text-white text-sm"> Mathew Martin</i>
            </span>
            <span className="flex items-center gap-2">
              <i className="not-italic text-sm flex justify-center items-center rounded-full w-8 h-8 bg-white"></i>
              <Link className="bg-secondary p-2 rounded-sm text-white/50 text-lg">
                <HiOutlineDotsHorizontal />
              </Link>
            </span>
          </div>
          <div className="grid grid-col gap-2">
            <div className="flex gap-2  items-center">
              <i className="not-italic  justify-center items-center flex rounded-sm bg-secondary p-1 border border-white/10 text-xl text-white">
                <MdTypeSpecimen />
              </i>
              <i className="not-italic text-white/50 text-sm font-bold text-nowrap text-ellipsis overflow-hidden">
                Personal (Custodial (UTMA/ UGMA))
              </i>
            </div>
            <div className="flex gap-2  items-center">
              <i className="not-italic  justify-center items-center  flex rounded-sm bg-secondary p-1 border border-white/10 text-xl text-white">
                <FaPhoneAlt />
              </i>
              <i className="not-italic text-white/50 text-sm font-bold">
                786-656-6666
              </i>
            </div>
            <div className="flex gap-2  items-center">
              <i className="not-italic  justify-center items-center flex rounded-sm bg-secondary p-1 border border-white/10 text-xl text-white">
                <MdEmail />
              </i>
              <i className="not-italic text-white/50 text-sm font-bold">
                tristan.william@test.com
              </i>
            </div>
          </div>
          <div className="flex w-auto just-between item-center gap-2">
            <div className="flex justify-center items-center gap-2">
              <i className="not-italic  justify-center items-center flex rounded-sm bg-secondary p-1 border border-white/10 text-xl text-white">
                <AiFillBank />
              </i>
              <i className="not-italic text-sm text-white bg-secondary p-1 rounded-sm text-nowrap text-ellipsis overflow-hidden">
                XXX-XX-2312
              </i>
            </div>
            <div className="flex justify-center items-center gap-2">
              <i className="not-italic  justify-center items-center flex rounded-sm bg-secondary p-1 border border-white/10 text-xl text-white">
                <FaGlobe />
              </i>
              <i className="not-italic text-sm text-white bg-secondary p-1 rounded-sm">
                192.01.01.02
              </i>
            </div>
          </div>
        </div>
        <div className="flex flex-col p-2 gap-2 bg-secondary/50 rounded-lg w-full">
          <div className="flex justify-between w-auto">
            <span className="flex items-center gap-2">
              <i className="not-italic text-sm flex justify-center items-center rounded-full w-8 h-8 bg-white text-center text-orange uppercase">
                MM
              </i>{" "}
              <i className="not-italic text-white text-sm"> Mathew Martin</i>
            </span>
            <span className="flex items-center gap-2">
              <i className="not-italic text-sm flex justify-center items-center rounded-full w-8 h-8 bg-white"></i>
              <Link className="bg-secondary p-2 rounded-sm text-white/50 text-lg">
                <HiOutlineDotsHorizontal />
              </Link>
            </span>
          </div>
          <div className="grid grid-col gap-2">
            <div className="flex gap-2  items-center">
              <i className="not-italic  justify-center items-center flex rounded-sm bg-secondary p-1 border border-white/10 text-xl text-white">
                <MdTypeSpecimen />
              </i>
              <i className="not-italic text-white/50 text-sm font-bold text-nowrap text-ellipsis overflow-hidden">
                Personal (Custodial (UTMA/ UGMA))
              </i>
            </div>
            <div className="flex gap-2  items-center">
              <i className="not-italic  justify-center items-center  flex rounded-sm bg-secondary p-1 border border-white/10 text-xl text-white">
                <FaPhoneAlt />
              </i>
              <i className="not-italic text-white/50 text-sm font-bold">
                786-656-6666
              </i>
            </div>
            <div className="flex gap-2  items-center">
              <i className="not-italic  justify-center items-center flex rounded-sm bg-secondary p-1 border border-white/10 text-xl text-white">
                <MdEmail />
              </i>
              <i className="not-italic text-white/50 text-sm font-bold">
                tristan.william@test.com
              </i>
            </div>
          </div>
          <div className="flex w-auto just-between item-center gap-2">
            <div className="flex justify-center items-center gap-2">
              <i className="not-italic  justify-center items-center flex rounded-sm bg-secondary p-1 border border-white/10 text-xl text-white">
                <AiFillBank />
              </i>
              <i className="not-italic text-sm text-white bg-secondary p-1 rounded-sm text-nowrap text-ellipsis overflow-hidden">
                XXX-XX-2312
              </i>
            </div>
            <div className="flex justify-center items-center gap-2">
              <i className="not-italic  justify-center items-center flex rounded-sm bg-secondary p-1 border border-white/10 text-xl text-white">
                <FaGlobe />
              </i>
              <i className="not-italic text-sm text-white bg-secondary p-1 rounded-sm">
                192.01.01.02
              </i>
            </div>
          </div>
        </div>
        <div className="flex flex-col p-2 gap-2 bg-secondary/50 rounded-lg w-full">
          <div className="flex justify-between w-auto">
            <span className="flex items-center gap-2">
              <i className="not-italic text-sm flex justify-center items-center rounded-full w-8 h-8 bg-white text-center text-orange uppercase">
                MM
              </i>{" "}
              <i className="not-italic text-white text-sm"> Mathew Martin</i>
            </span>
            <span className="flex items-center gap-2">
              <i className="not-italic text-sm flex justify-center items-center rounded-full w-8 h-8 bg-white"></i>
              <Link className="bg-secondary p-2 rounded-sm text-white/50 text-lg">
                <HiOutlineDotsHorizontal />
              </Link>
            </span>
          </div>
          <div className="grid grid-col gap-2">
            <div className="flex gap-2  items-center">
              <i className="not-italic  justify-center items-center flex rounded-sm bg-secondary p-1 border border-white/10 text-xl text-white">
                <MdTypeSpecimen />
              </i>
              <i className="not-italic text-white/50 text-sm font-bold text-nowrap text-ellipsis overflow-hidden">
                Personal (Custodial (UTMA/ UGMA))
              </i>
            </div>
            <div className="flex gap-2  items-center">
              <i className="not-italic  justify-center items-center  flex rounded-sm bg-secondary p-1 border border-white/10 text-xl text-white">
                <FaPhoneAlt />
              </i>
              <i className="not-italic text-white/50 text-sm font-bold">
                786-656-6666
              </i>
            </div>
            <div className="flex gap-2  items-center">
              <i className="not-italic  justify-center items-center flex rounded-sm bg-secondary p-1 border border-white/10 text-xl text-white">
                <MdEmail />
              </i>
              <i className="not-italic text-white/50 text-sm font-bold">
                tristan.william@test.com
              </i>
            </div>
          </div>
          <div className="flex w-auto just-between item-center gap-2">
            <div className="flex justify-center items-center gap-2">
              <i className="not-italic  justify-center items-center flex rounded-sm bg-secondary p-1 border border-white/10 text-xl text-white">
                <AiFillBank />
              </i>
              <i className="not-italic text-sm text-white bg-secondary p-1 rounded-sm text-nowrap text-ellipsis overflow-hidden">
                XXX-XX-2312
              </i>
            </div>
            <div className="flex justify-center items-center gap-2">
              <i className="not-italic  justify-center items-center flex rounded-sm bg-secondary p-1 border border-white/10 text-xl text-white">
                <FaGlobe />
              </i>
              <i className="not-italic text-sm text-white bg-secondary p-1 rounded-sm">
                192.01.01.02
              </i>
            </div>
          </div>
        </div>
        <div className="flex flex-col p-2 gap-2 bg-secondary/50 rounded-lg w-full">
          <div className="flex justify-between w-auto">
            <span className="flex items-center gap-2">
              <i className="not-italic text-sm flex justify-center items-center rounded-full w-8 h-8 bg-white text-center text-orange uppercase">
                MM
              </i>{" "}
              <i className="not-italic text-white text-sm"> Mathew Martin</i>
            </span>
            <span className="flex items-center gap-2">
              <i className="not-italic text-sm flex justify-center items-center rounded-full w-8 h-8 bg-white"></i>
              <Link className="bg-secondary p-2 rounded-sm text-white/50 text-lg">
                <HiOutlineDotsHorizontal />
              </Link>
            </span>
          </div>
          <div className="grid grid-col gap-2">
            <div className="flex gap-2  items-center">
              <i className="not-italic  justify-center items-center flex rounded-sm bg-secondary p-1 border border-white/10 text-xl text-white">
                <MdTypeSpecimen />
              </i>
              <i className="not-italic text-white/50 text-sm font-bold text-nowrap text-ellipsis overflow-hidden">
                Personal (Custodial (UTMA/ UGMA))
              </i>
            </div>
            <div className="flex gap-2  items-center">
              <i className="not-italic  justify-center items-center  flex rounded-sm bg-secondary p-1 border border-white/10 text-xl text-white">
                <FaPhoneAlt />
              </i>
              <i className="not-italic text-white/50 text-sm font-bold">
                786-656-6666
              </i>
            </div>
            <div className="flex gap-2  items-center">
              <i className="not-italic  justify-center items-center flex rounded-sm bg-secondary p-1 border border-white/10 text-xl text-white">
                <MdEmail />
              </i>
              <i className="not-italic text-white/50 text-sm font-bold">
                tristan.william@test.com
              </i>
            </div>
          </div>
          <div className="flex w-auto just-between item-center gap-2">
            <div className="flex justify-center items-center gap-2">
              <i className="not-italic  justify-center items-center flex rounded-sm bg-secondary p-1 border border-white/10 text-xl text-white">
                <AiFillBank />
              </i>
              <i className="not-italic text-sm text-white bg-secondary p-1 rounded-sm text-nowrap text-ellipsis overflow-hidden">
                XXX-XX-2312
              </i>
            </div>
            <div className="flex justify-center items-center gap-2">
              <i className="not-italic  justify-center items-center flex rounded-sm bg-secondary p-1 border border-white/10 text-xl text-white">
                <FaGlobe />
              </i>
              <i className="not-italic text-sm text-white bg-secondary p-1 rounded-sm">
                192.01.01.02
              </i>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-2 items-start border border-white/10 p-2 m-2 rounded-lg  h-[calc(100vh-5rem)] w-[calc(100vw-85rem)] overflow-y-auto  shadow-lg custom-scrollbar hover:border-purple-500">
        {/* Sticky header */}
        <h2 className="sticky top-0 bg-gray-900 p-2 w-full flex items-center gap-2 mb-4 z-10">
          <span className="w-8 h-8 rounded-full bg-purple-500 text-white flex justify-center items-center text-xl">
            <BsFillStopwatchFill />
          </span>
          <span className="text-white text-lg">Not Complete</span>
        </h2>
        <div className="flex flex-col p-2 gap-2 bg-secondary/50 rounded-lg w-full">
          <div className="flex justify-between w-auto">
            <span className="flex items-center gap-2">
              <i className="not-italic text-sm flex justify-center items-center rounded-full w-8 h-8 bg-white text-center text-orange uppercase">
                MM
              </i>{" "}
              <i className="not-italic text-white text-sm"> Mathew Martin</i>
            </span>
            <span className="flex items-center gap-2">
              <i className="not-italic text-sm flex justify-center items-center rounded-full w-8 h-8 bg-white"></i>
              <Link className="bg-secondary p-2 rounded-sm text-white/50 text-lg">
                <HiOutlineDotsHorizontal />
              </Link>
            </span>
          </div>
          <div className="grid grid-col gap-2">
            <div className="flex gap-2  items-center">
              <i className="not-italic  justify-center items-center flex rounded-sm bg-secondary p-1 border border-white/10 text-xl text-white">
                <MdTypeSpecimen />
              </i>
              <i className="not-italic text-white/50 text-sm font-bold text-nowrap text-ellipsis overflow-hidden">
                Personal (Custodial (UTMA/ UGMA))
              </i>
            </div>
            <div className="flex gap-2  items-center">
              <i className="not-italic  justify-center items-center  flex rounded-sm bg-secondary p-1 border border-white/10 text-xl text-white">
                <FaPhoneAlt />
              </i>
              <i className="not-italic text-white/50 text-sm font-bold">
                786-656-6666
              </i>
            </div>
            <div className="flex gap-2  items-center">
              <i className="not-italic  justify-center items-center flex rounded-sm bg-secondary p-1 border border-white/10 text-xl text-white">
                <MdEmail />
              </i>
              <i className="not-italic text-white/50 text-sm font-bold">
                tristan.william@test.com
              </i>
            </div>
          </div>
          <div className="flex w-auto just-between item-center gap-2">
            <div className="flex justify-center items-center gap-2">
              <i className="not-italic  justify-center items-center flex rounded-sm bg-secondary p-1 border border-white/10 text-xl text-white">
                <AiFillBank />
              </i>
              <i className="not-italic text-sm text-white bg-secondary p-1 rounded-sm text-nowrap text-ellipsis overflow-hidden">
                XXX-XX-2312
              </i>
            </div>
            <div className="flex justify-center items-center gap-2">
              <i className="not-italic  justify-center items-center flex rounded-sm bg-secondary p-1 border border-white/10 text-xl text-white">
                <FaGlobe />
              </i>
              <i className="not-italic text-sm text-white bg-secondary p-1 rounded-sm">
                192.01.01.02
              </i>
            </div>
          </div>
        </div>
        <div className="flex flex-col p-2 gap-2 bg-secondary/50 rounded-lg w-full">
          <div className="flex justify-between w-auto">
            <span className="flex items-center gap-2">
              <i className="not-italic text-sm flex justify-center items-center rounded-full w-8 h-8 bg-white text-center text-orange uppercase">
                MM
              </i>{" "}
              <i className="not-italic text-white text-sm"> Mathew Martin</i>
            </span>
            <span className="flex items-center gap-2">
              <i className="not-italic text-sm flex justify-center items-center rounded-full w-8 h-8 bg-white"></i>
              <Link className="bg-secondary p-2 rounded-sm text-white/50 text-lg">
                <HiOutlineDotsHorizontal />
              </Link>
            </span>
          </div>
          <div className="grid grid-col gap-2">
            <div className="flex gap-2  items-center">
              <i className="not-italic  justify-center items-center flex rounded-sm bg-secondary p-1 border border-white/10 text-xl text-white">
                <MdTypeSpecimen />
              </i>
              <i className="not-italic text-white/50 text-sm font-bold text-nowrap text-ellipsis overflow-hidden">
                Personal (Custodial (UTMA/ UGMA))
              </i>
            </div>
            <div className="flex gap-2  items-center">
              <i className="not-italic  justify-center items-center  flex rounded-sm bg-secondary p-1 border border-white/10 text-xl text-white">
                <FaPhoneAlt />
              </i>
              <i className="not-italic text-white/50 text-sm font-bold">
                786-656-6666
              </i>
            </div>
            <div className="flex gap-2  items-center">
              <i className="not-italic  justify-center items-center flex rounded-sm bg-secondary p-1 border border-white/10 text-xl text-white">
                <MdEmail />
              </i>
              <i className="not-italic text-white/50 text-sm font-bold">
                tristan.william@test.com
              </i>
            </div>
          </div>
          <div className="flex w-auto just-between item-center gap-2">
            <div className="flex justify-center items-center gap-2">
              <i className="not-italic  justify-center items-center flex rounded-sm bg-secondary p-1 border border-white/10 text-xl text-white">
                <AiFillBank />
              </i>
              <i className="not-italic text-sm text-white bg-secondary p-1 rounded-sm text-nowrap text-ellipsis overflow-hidden">
                XXX-XX-2312
              </i>
            </div>
            <div className="flex justify-center items-center gap-2">
              <i className="not-italic  justify-center items-center flex rounded-sm bg-secondary p-1 border border-white/10 text-xl text-white">
                <FaGlobe />
              </i>
              <i className="not-italic text-sm text-white bg-secondary p-1 rounded-sm">
                192.01.01.02
              </i>
            </div>
          </div>
        </div>
        <div className="flex flex-col p-2 gap-2 bg-secondary/50 rounded-lg w-full">
          <div className="flex justify-between w-auto">
            <span className="flex items-center gap-2">
              <i className="not-italic text-sm flex justify-center items-center rounded-full w-8 h-8 bg-white text-center text-orange uppercase">
                MM
              </i>{" "}
              <i className="not-italic text-white text-sm"> Mathew Martin</i>
            </span>
            <span className="flex items-center gap-2">
              <i className="not-italic text-sm flex justify-center items-center rounded-full w-8 h-8 bg-white"></i>
              <Link className="bg-secondary p-2 rounded-sm text-white/50 text-lg">
                <HiOutlineDotsHorizontal />
              </Link>
            </span>
          </div>
          <div className="grid grid-col gap-2">
            <div className="flex gap-2  items-center">
              <i className="not-italic  justify-center items-center flex rounded-sm bg-secondary p-1 border border-white/10 text-xl text-white">
                <MdTypeSpecimen />
              </i>
              <i className="not-italic text-white/50 text-sm font-bold text-nowrap text-ellipsis overflow-hidden">
                Personal (Custodial (UTMA/ UGMA))
              </i>
            </div>
            <div className="flex gap-2  items-center">
              <i className="not-italic  justify-center items-center  flex rounded-sm bg-secondary p-1 border border-white/10 text-xl text-white">
                <FaPhoneAlt />
              </i>
              <i className="not-italic text-white/50 text-sm font-bold">
                786-656-6666
              </i>
            </div>
            <div className="flex gap-2  items-center">
              <i className="not-italic  justify-center items-center flex rounded-sm bg-secondary p-1 border border-white/10 text-xl text-white">
                <MdEmail />
              </i>
              <i className="not-italic text-white/50 text-sm font-bold">
                tristan.william@test.com
              </i>
            </div>
          </div>
          <div className="flex w-auto just-between item-center gap-2">
            <div className="flex justify-center items-center gap-2">
              <i className="not-italic  justify-center items-center flex rounded-sm bg-secondary p-1 border border-white/10 text-xl text-white">
                <AiFillBank />
              </i>
              <i className="not-italic text-sm text-white bg-secondary p-1 rounded-sm text-nowrap text-ellipsis overflow-hidden">
                XXX-XX-2312
              </i>
            </div>
            <div className="flex justify-center items-center gap-2">
              <i className="not-italic  justify-center items-center flex rounded-sm bg-secondary p-1 border border-white/10 text-xl text-white">
                <FaGlobe />
              </i>
              <i className="not-italic text-sm text-white bg-secondary p-1 rounded-sm">
                192.01.01.02
              </i>
            </div>
          </div>
        </div>
        <div className="flex flex-col p-2 gap-2 bg-secondary/50 rounded-lg w-full">
          <div className="flex justify-between w-auto">
            <span className="flex items-center gap-2">
              <i className="not-italic text-sm flex justify-center items-center rounded-full w-8 h-8 bg-white text-center text-orange uppercase">
                MM
              </i>{" "}
              <i className="not-italic text-white text-sm"> Mathew Martin</i>
            </span>
            <span className="flex items-center gap-2">
              <i className="not-italic text-sm flex justify-center items-center rounded-full w-8 h-8 bg-white"></i>
              <Link className="bg-secondary p-2 rounded-sm text-white/50 text-lg">
                <HiOutlineDotsHorizontal />
              </Link>
            </span>
          </div>
          <div className="grid grid-col gap-2">
            <div className="flex gap-2  items-center">
              <i className="not-italic  justify-center items-center flex rounded-sm bg-secondary p-1 border border-white/10 text-xl text-white">
                <MdTypeSpecimen />
              </i>
              <i className="not-italic text-white/50 text-sm font-bold text-nowrap text-ellipsis overflow-hidden">
                Personal (Custodial (UTMA/ UGMA))
              </i>
            </div>
            <div className="flex gap-2  items-center">
              <i className="not-italic  justify-center items-center  flex rounded-sm bg-secondary p-1 border border-white/10 text-xl text-white">
                <FaPhoneAlt />
              </i>
              <i className="not-italic text-white/50 text-sm font-bold">
                786-656-6666
              </i>
            </div>
            <div className="flex gap-2  items-center">
              <i className="not-italic  justify-center items-center flex rounded-sm bg-secondary p-1 border border-white/10 text-xl text-white">
                <MdEmail />
              </i>
              <i className="not-italic text-white/50 text-sm font-bold">
                tristan.william@test.com
              </i>
            </div>
          </div>
          <div className="flex w-auto just-between item-center gap-2">
            <div className="flex justify-center items-center gap-2">
              <i className="not-italic  justify-center items-center flex rounded-sm bg-secondary p-1 border border-white/10 text-xl text-white">
                <AiFillBank />
              </i>
              <i className="not-italic text-sm text-white bg-secondary p-1 rounded-sm text-nowrap text-ellipsis overflow-hidden">
                XXX-XX-2312
              </i>
            </div>
            <div className="flex justify-center items-center gap-2">
              <i className="not-italic  justify-center items-center flex rounded-sm bg-secondary p-1 border border-white/10 text-xl text-white">
                <FaGlobe />
              </i>
              <i className="not-italic text-sm text-white bg-secondary p-1 rounded-sm">
                192.01.01.02
              </i>
            </div>
          </div>
        </div>
        <div className="flex flex-col p-2 gap-2 bg-secondary/50 rounded-lg w-full">
          <div className="flex justify-between w-auto">
            <span className="flex items-center gap-2">
              <i className="not-italic text-sm flex justify-center items-center rounded-full w-8 h-8 bg-white text-center text-orange uppercase">
                MM
              </i>{" "}
              <i className="not-italic text-white text-sm"> Mathew Martin</i>
            </span>
            <span className="flex items-center gap-2">
              <i className="not-italic text-sm flex justify-center items-center rounded-full w-8 h-8 bg-white"></i>
              <Link className="bg-secondary p-2 rounded-sm text-white/50 text-lg">
                <HiOutlineDotsHorizontal />
              </Link>
            </span>
          </div>
          <div className="grid grid-col gap-2">
            <div className="flex gap-2  items-center">
              <i className="not-italic  justify-center items-center flex rounded-sm bg-secondary p-1 border border-white/10 text-xl text-white">
                <MdTypeSpecimen />
              </i>
              <i className="not-italic text-white/50 text-sm font-bold text-nowrap text-ellipsis overflow-hidden">
                Personal (Custodial (UTMA/ UGMA))
              </i>
            </div>
            <div className="flex gap-2  items-center">
              <i className="not-italic  justify-center items-center  flex rounded-sm bg-secondary p-1 border border-white/10 text-xl text-white">
                <FaPhoneAlt />
              </i>
              <i className="not-italic text-white/50 text-sm font-bold">
                786-656-6666
              </i>
            </div>
            <div className="flex gap-2  items-center">
              <i className="not-italic  justify-center items-center flex rounded-sm bg-secondary p-1 border border-white/10 text-xl text-white">
                <MdEmail />
              </i>
              <i className="not-italic text-white/50 text-sm font-bold">
                tristan.william@test.com
              </i>
            </div>
          </div>
          <div className="flex w-auto just-between item-center gap-2">
            <div className="flex justify-center items-center gap-2">
              <i className="not-italic  justify-center items-center flex rounded-sm bg-secondary p-1 border border-white/10 text-xl text-white">
                <AiFillBank />
              </i>
              <i className="not-italic text-sm text-white bg-secondary p-1 rounded-sm text-nowrap text-ellipsis overflow-hidden">
                XXX-XX-2312
              </i>
            </div>
            <div className="flex justify-center items-center gap-2">
              <i className="not-italic  justify-center items-center flex rounded-sm bg-secondary p-1 border border-white/10 text-xl text-white">
                <FaGlobe />
              </i>
              <i className="not-italic text-sm text-white bg-secondary p-1 rounded-sm">
                192.01.01.02
              </i>
            </div>
          </div>
        </div>
        <div className="flex flex-col p-2 gap-2 bg-secondary/50 rounded-lg w-full">
          <div className="flex justify-between w-auto">
            <span className="flex items-center gap-2">
              <i className="not-italic text-sm flex justify-center items-center rounded-full w-8 h-8 bg-white text-center text-orange uppercase">
                MM
              </i>{" "}
              <i className="not-italic text-white text-sm"> Mathew Martin</i>
            </span>
            <span className="flex items-center gap-2">
              <i className="not-italic text-sm flex justify-center items-center rounded-full w-8 h-8 bg-white"></i>
              <Link className="bg-secondary p-2 rounded-sm text-white/50 text-lg">
                <HiOutlineDotsHorizontal />
              </Link>
            </span>
          </div>
          <div className="grid grid-col gap-2">
            <div className="flex gap-2  items-center">
              <i className="not-italic  justify-center items-center flex rounded-sm bg-secondary p-1 border border-white/10 text-xl text-white">
                <MdTypeSpecimen />
              </i>
              <i className="not-italic text-white/50 text-sm font-bold text-nowrap text-ellipsis overflow-hidden">
                Personal (Custodial (UTMA/ UGMA))
              </i>
            </div>
            <div className="flex gap-2  items-center">
              <i className="not-italic  justify-center items-center  flex rounded-sm bg-secondary p-1 border border-white/10 text-xl text-white">
                <FaPhoneAlt />
              </i>
              <i className="not-italic text-white/50 text-sm font-bold">
                786-656-6666
              </i>
            </div>
            <div className="flex gap-2  items-center">
              <i className="not-italic  justify-center items-center flex rounded-sm bg-secondary p-1 border border-white/10 text-xl text-white">
                <MdEmail />
              </i>
              <i className="not-italic text-white/50 text-sm font-bold">
                tristan.william@test.com
              </i>
            </div>
          </div>
          <div className="flex w-auto just-between item-center gap-2">
            <div className="flex justify-center items-center gap-2">
              <i className="not-italic  justify-center items-center flex rounded-sm bg-secondary p-1 border border-white/10 text-xl text-white">
                <AiFillBank />
              </i>
              <i className="not-italic text-sm text-white bg-secondary p-1 rounded-sm text-nowrap text-ellipsis overflow-hidden">
                XXX-XX-2312
              </i>
            </div>
            <div className="flex justify-center items-center gap-2">
              <i className="not-italic  justify-center items-center flex rounded-sm bg-secondary p-1 border border-white/10 text-xl text-white">
                <FaGlobe />
              </i>
              <i className="not-italic text-sm text-white bg-secondary p-1 rounded-sm">
                192.01.01.02
              </i>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-2 items-start border border-white/10 p-2 m-2 rounded-lg  h-[calc(100vh-5rem)] w-[calc(100vw-85rem)] overflow-y-auto  shadow-lg custom-scrollbar hover:border-green-500">
        {/* Sticky header */}
        <h2 className="sticky top-0 bg-gray-900 p-2 w-full flex items-center gap-2 mb-4 z-10">
          <span className="w-8 h-8 rounded-full bg-green-500 text-white flex justify-center items-center text-xl">
            <FaCheck />
          </span>
          <span className="text-white text-lg">Approved</span>
        </h2>
        <div className="flex flex-col p-2 gap-2 bg-secondary/50 rounded-lg w-full">
          <div className="flex justify-between w-auto">
            <span className="flex items-center gap-2">
              <i className="not-italic text-sm flex justify-center items-center rounded-full w-8 h-8 bg-white text-center text-orange uppercase">
                MM
              </i>{" "}
              <i className="not-italic text-white text-sm"> Mathew Martin</i>
            </span>
            <span className="flex items-center gap-2">
              <i className="not-italic text-sm flex justify-center items-center rounded-full w-8 h-8 bg-white"></i>
              <Link className="bg-secondary p-2 rounded-sm text-white/50 text-lg">
                <HiOutlineDotsHorizontal />
              </Link>
            </span>
          </div>
          <div className="grid grid-col gap-2">
            <div className="flex gap-2  items-center">
              <i className="not-italic  justify-center items-center flex rounded-sm bg-secondary p-1 border border-white/10 text-xl text-white">
                <MdTypeSpecimen />
              </i>
              <i className="not-italic text-white/50 text-sm font-bold text-nowrap text-ellipsis overflow-hidden">
                Personal (Custodial (UTMA/ UGMA))
              </i>
            </div>
            <div className="flex gap-2  items-center">
              <i className="not-italic  justify-center items-center  flex rounded-sm bg-secondary p-1 border border-white/10 text-xl text-white">
                <FaPhoneAlt />
              </i>
              <i className="not-italic text-white/50 text-sm font-bold">
                786-656-6666
              </i>
            </div>
            <div className="flex gap-2  items-center">
              <i className="not-italic  justify-center items-center flex rounded-sm bg-secondary p-1 border border-white/10 text-xl text-white">
                <MdEmail />
              </i>
              <i className="not-italic text-white/50 text-sm font-bold">
                tristan.william@test.com
              </i>
            </div>
          </div>
          <div className="flex w-auto just-between item-center gap-2">
            <div className="flex justify-center items-center gap-2">
              <i className="not-italic  justify-center items-center flex rounded-sm bg-secondary p-1 border border-white/10 text-xl text-white">
                <AiFillBank />
              </i>
              <i className="not-italic text-sm text-white bg-secondary p-1 rounded-sm text-nowrap text-ellipsis overflow-hidden">
                XXX-XX-2312
              </i>
            </div>
            <div className="flex justify-center items-center gap-2">
              <i className="not-italic  justify-center items-center flex rounded-sm bg-secondary p-1 border border-white/10 text-xl text-white">
                <FaGlobe />
              </i>
              <i className="not-italic text-sm text-white bg-secondary p-1 rounded-sm">
                192.01.01.02
              </i>
            </div>
          </div>
        </div>
        <div className="flex flex-col p-2 gap-2 bg-secondary/50 rounded-lg w-full">
          <div className="flex justify-between w-auto">
            <span className="flex items-center gap-2">
              <i className="not-italic text-sm flex justify-center items-center rounded-full w-8 h-8 bg-white text-center text-orange uppercase">
                MM
              </i>{" "}
              <i className="not-italic text-white text-sm"> Mathew Martin</i>
            </span>
            <span className="flex items-center gap-2">
              <i className="not-italic text-sm flex justify-center items-center rounded-full w-8 h-8 bg-white"></i>
              <Link className="bg-secondary p-2 rounded-sm text-white/50 text-lg">
                <HiOutlineDotsHorizontal />
              </Link>
            </span>
          </div>
          <div className="grid grid-col gap-2">
            <div className="flex gap-2  items-center">
              <i className="not-italic  justify-center items-center flex rounded-sm bg-secondary p-1 border border-white/10 text-xl text-white">
                <MdTypeSpecimen />
              </i>
              <i className="not-italic text-white/50 text-sm font-bold text-nowrap text-ellipsis overflow-hidden">
                Personal (Custodial (UTMA/ UGMA))
              </i>
            </div>
            <div className="flex gap-2  items-center">
              <i className="not-italic  justify-center items-center  flex rounded-sm bg-secondary p-1 border border-white/10 text-xl text-white">
                <FaPhoneAlt />
              </i>
              <i className="not-italic text-white/50 text-sm font-bold">
                786-656-6666
              </i>
            </div>
            <div className="flex gap-2  items-center">
              <i className="not-italic  justify-center items-center flex rounded-sm bg-secondary p-1 border border-white/10 text-xl text-white">
                <MdEmail />
              </i>
              <i className="not-italic text-white/50 text-sm font-bold">
                tristan.william@test.com
              </i>
            </div>
          </div>
          <div className="flex w-auto just-between item-center gap-2">
            <div className="flex justify-center items-center gap-2">
              <i className="not-italic  justify-center items-center flex rounded-sm bg-secondary p-1 border border-white/10 text-xl text-white">
                <AiFillBank />
              </i>
              <i className="not-italic text-sm text-white bg-secondary p-1 rounded-sm text-nowrap text-ellipsis overflow-hidden">
                XXX-XX-2312
              </i>
            </div>
            <div className="flex justify-center items-center gap-2">
              <i className="not-italic  justify-center items-center flex rounded-sm bg-secondary p-1 border border-white/10 text-xl text-white">
                <FaGlobe />
              </i>
              <i className="not-italic text-sm text-white bg-secondary p-1 rounded-sm">
                192.01.01.02
              </i>
            </div>
          </div>
        </div>
        <div className="flex flex-col p-2 gap-2 bg-secondary/50 rounded-lg w-full">
          <div className="flex justify-between w-auto">
            <span className="flex items-center gap-2">
              <i className="not-italic text-sm flex justify-center items-center rounded-full w-8 h-8 bg-white text-center text-orange uppercase">
                MM
              </i>{" "}
              <i className="not-italic text-white text-sm"> Mathew Martin</i>
            </span>
            <span className="flex items-center gap-2">
              <i className="not-italic text-sm flex justify-center items-center rounded-full w-8 h-8 bg-white"></i>
              <Link className="bg-secondary p-2 rounded-sm text-white/50 text-lg">
                <HiOutlineDotsHorizontal />
              </Link>
            </span>
          </div>
          <div className="grid grid-col gap-2">
            <div className="flex gap-2  items-center">
              <i className="not-italic  justify-center items-center flex rounded-sm bg-secondary p-1 border border-white/10 text-xl text-white">
                <MdTypeSpecimen />
              </i>
              <i className="not-italic text-white/50 text-sm font-bold text-nowrap text-ellipsis overflow-hidden">
                Personal (Custodial (UTMA/ UGMA))
              </i>
            </div>
            <div className="flex gap-2  items-center">
              <i className="not-italic  justify-center items-center  flex rounded-sm bg-secondary p-1 border border-white/10 text-xl text-white">
                <FaPhoneAlt />
              </i>
              <i className="not-italic text-white/50 text-sm font-bold">
                786-656-6666
              </i>
            </div>
            <div className="flex gap-2  items-center">
              <i className="not-italic  justify-center items-center flex rounded-sm bg-secondary p-1 border border-white/10 text-xl text-white">
                <MdEmail />
              </i>
              <i className="not-italic text-white/50 text-sm font-bold">
                tristan.william@test.com
              </i>
            </div>
          </div>
          <div className="flex w-auto just-between item-center gap-2">
            <div className="flex justify-center items-center gap-2">
              <i className="not-italic  justify-center items-center flex rounded-sm bg-secondary p-1 border border-white/10 text-xl text-white">
                <AiFillBank />
              </i>
              <i className="not-italic text-sm text-white bg-secondary p-1 rounded-sm text-nowrap text-ellipsis overflow-hidden">
                XXX-XX-2312
              </i>
            </div>
            <div className="flex justify-center items-center gap-2">
              <i className="not-italic  justify-center items-center flex rounded-sm bg-secondary p-1 border border-white/10 text-xl text-white">
                <FaGlobe />
              </i>
              <i className="not-italic text-sm text-white bg-secondary p-1 rounded-sm">
                192.01.01.02
              </i>
            </div>
          </div>
        </div>
        <div className="flex flex-col p-2 gap-2 bg-secondary/50 rounded-lg w-full">
          <div className="flex justify-between w-auto">
            <span className="flex items-center gap-2">
              <i className="not-italic text-sm flex justify-center items-center rounded-full w-8 h-8 bg-white text-center text-orange uppercase">
                MM
              </i>{" "}
              <i className="not-italic text-white text-sm"> Mathew Martin</i>
            </span>
            <span className="flex items-center gap-2">
              <i className="not-italic text-sm flex justify-center items-center rounded-full w-8 h-8 bg-white"></i>
              <Link className="bg-secondary p-2 rounded-sm text-white/50 text-lg">
                <HiOutlineDotsHorizontal />
              </Link>
            </span>
          </div>
          <div className="grid grid-col gap-2">
            <div className="flex gap-2  items-center">
              <i className="not-italic  justify-center items-center flex rounded-sm bg-secondary p-1 border border-white/10 text-xl text-white">
                <MdTypeSpecimen />
              </i>
              <i className="not-italic text-white/50 text-sm font-bold text-nowrap text-ellipsis overflow-hidden">
                Personal (Custodial (UTMA/ UGMA))
              </i>
            </div>
            <div className="flex gap-2  items-center">
              <i className="not-italic  justify-center items-center  flex rounded-sm bg-secondary p-1 border border-white/10 text-xl text-white">
                <FaPhoneAlt />
              </i>
              <i className="not-italic text-white/50 text-sm font-bold">
                786-656-6666
              </i>
            </div>
            <div className="flex gap-2  items-center">
              <i className="not-italic  justify-center items-center flex rounded-sm bg-secondary p-1 border border-white/10 text-xl text-white">
                <MdEmail />
              </i>
              <i className="not-italic text-white/50 text-sm font-bold">
                tristan.william@test.com
              </i>
            </div>
          </div>
          <div className="flex w-auto just-between item-center gap-2">
            <div className="flex justify-center items-center gap-2">
              <i className="not-italic  justify-center items-center flex rounded-sm bg-secondary p-1 border border-white/10 text-xl text-white">
                <AiFillBank />
              </i>
              <i className="not-italic text-sm text-white bg-secondary p-1 rounded-sm text-nowrap text-ellipsis overflow-hidden">
                XXX-XX-2312
              </i>
            </div>
            <div className="flex justify-center items-center gap-2">
              <i className="not-italic  justify-center items-center flex rounded-sm bg-secondary p-1 border border-white/10 text-xl text-white">
                <FaGlobe />
              </i>
              <i className="not-italic text-sm text-white bg-secondary p-1 rounded-sm">
                192.01.01.02
              </i>
            </div>
          </div>
        </div>
        <div className="flex flex-col p-2 gap-2 bg-secondary/50 rounded-lg w-full">
          <div className="flex justify-between w-auto">
            <span className="flex items-center gap-2">
              <i className="not-italic text-sm flex justify-center items-center rounded-full w-8 h-8 bg-white text-center text-orange uppercase">
                MM
              </i>{" "}
              <i className="not-italic text-white text-sm"> Mathew Martin</i>
            </span>
            <span className="flex items-center gap-2">
              <i className="not-italic text-sm flex justify-center items-center rounded-full w-8 h-8 bg-white"></i>
              <Link className="bg-secondary p-2 rounded-sm text-white/50 text-lg">
                <HiOutlineDotsHorizontal />
              </Link>
            </span>
          </div>
          <div className="grid grid-col gap-2">
            <div className="flex gap-2  items-center">
              <i className="not-italic  justify-center items-center flex rounded-sm bg-secondary p-1 border border-white/10 text-xl text-white">
                <MdTypeSpecimen />
              </i>
              <i className="not-italic text-white/50 text-sm font-bold text-nowrap text-ellipsis overflow-hidden">
                Personal (Custodial (UTMA/ UGMA))
              </i>
            </div>
            <div className="flex gap-2  items-center">
              <i className="not-italic  justify-center items-center  flex rounded-sm bg-secondary p-1 border border-white/10 text-xl text-white">
                <FaPhoneAlt />
              </i>
              <i className="not-italic text-white/50 text-sm font-bold">
                786-656-6666
              </i>
            </div>
            <div className="flex gap-2  items-center">
              <i className="not-italic  justify-center items-center flex rounded-sm bg-secondary p-1 border border-white/10 text-xl text-white">
                <MdEmail />
              </i>
              <i className="not-italic text-white/50 text-sm font-bold">
                tristan.william@test.com
              </i>
            </div>
          </div>
          <div className="flex w-auto just-between item-center gap-2">
            <div className="flex justify-center items-center gap-2">
              <i className="not-italic  justify-center items-center flex rounded-sm bg-secondary p-1 border border-white/10 text-xl text-white">
                <AiFillBank />
              </i>
              <i className="not-italic text-sm text-white bg-secondary p-1 rounded-sm text-nowrap text-ellipsis overflow-hidden">
                XXX-XX-2312
              </i>
            </div>
            <div className="flex justify-center items-center gap-2">
              <i className="not-italic  justify-center items-center flex rounded-sm bg-secondary p-1 border border-white/10 text-xl text-white">
                <FaGlobe />
              </i>
              <i className="not-italic text-sm text-white bg-secondary p-1 rounded-sm">
                192.01.01.02
              </i>
            </div>
          </div>
        </div>
        <div className="flex flex-col p-2 gap-2 bg-secondary/50 rounded-lg w-full">
          <div className="flex justify-between w-auto">
            <span className="flex items-center gap-2">
              <i className="not-italic text-sm flex justify-center items-center rounded-full w-8 h-8 bg-white text-center text-orange uppercase">
                MM
              </i>{" "}
              <i className="not-italic text-white text-sm"> Mathew Martin</i>
            </span>
            <span className="flex items-center gap-2">
              <i className="not-italic text-sm flex justify-center items-center rounded-full w-8 h-8 bg-white"></i>
              <Link className="bg-secondary p-2 rounded-sm text-white/50 text-lg">
                <HiOutlineDotsHorizontal />
              </Link>
            </span>
          </div>
          <div className="grid grid-col gap-2">
            <div className="flex gap-2  items-center">
              <i className="not-italic  justify-center items-center flex rounded-sm bg-secondary p-1 border border-white/10 text-xl text-white">
                <MdTypeSpecimen />
              </i>
              <i className="not-italic text-white/50 text-sm font-bold text-nowrap text-ellipsis overflow-hidden">
                Personal (Custodial (UTMA/ UGMA))
              </i>
            </div>
            <div className="flex gap-2  items-center">
              <i className="not-italic  justify-center items-center  flex rounded-sm bg-secondary p-1 border border-white/10 text-xl text-white">
                <FaPhoneAlt />
              </i>
              <i className="not-italic text-white/50 text-sm font-bold">
                786-656-6666
              </i>
            </div>
            <div className="flex gap-2  items-center">
              <i className="not-italic  justify-center items-center flex rounded-sm bg-secondary p-1 border border-white/10 text-xl text-white">
                <MdEmail />
              </i>
              <i className="not-italic text-white/50 text-sm font-bold">
                tristan.william@test.com
              </i>
            </div>
          </div>
          <div className="flex w-auto just-between item-center gap-2">
            <div className="flex justify-center items-center gap-2">
              <i className="not-italic  justify-center items-center flex rounded-sm bg-secondary p-1 border border-white/10 text-xl text-white">
                <AiFillBank />
              </i>
              <i className="not-italic text-sm text-white bg-secondary p-1 rounded-sm text-nowrap text-ellipsis overflow-hidden">
                XXX-XX-2312
              </i>
            </div>
            <div className="flex justify-center items-center gap-2">
              <i className="not-italic  justify-center items-center flex rounded-sm bg-secondary p-1 border border-white/10 text-xl text-white">
                <FaGlobe />
              </i>
              <i className="not-italic text-sm text-white bg-secondary p-1 rounded-sm">
                192.01.01.02
              </i>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-2 items-start border border-white/10 p-2 m-2 rounded-lg  h-[calc(100vh-5rem)] w-[calc(100vw-85rem)] overflow-y-auto  shadow-lg custom-scrollbar hover:border-red-500">
        {/* Sticky header */}
        <h2 className="sticky top-0 bg-gray-900 p-2 w-full flex items-center gap-2 mb-4 z-10">
          <span className="w-8 h-8 rounded-full bg-red-500 text-white flex justify-center items-center text-xl">
            <IoMdClose />
          </span>
          <span className="text-white text-lg">Decline</span>
        </h2>
        <div className="flex flex-col p-2 gap-2 bg-secondary/50 rounded-lg w-full">
          <div className="flex justify-between w-auto">
            <span className="flex items-center gap-2">
              <i className="not-italic text-sm flex justify-center items-center rounded-full w-8 h-8 bg-white text-center text-orange uppercase">
                MM
              </i>{" "}
              <i className="not-italic text-white text-sm"> Mathew Martin</i>
            </span>
            <span className="flex items-center gap-2">
              <i className="not-italic text-sm flex justify-center items-center rounded-full w-8 h-8 bg-white"></i>
              <Link className="bg-secondary p-2 rounded-sm text-white/50 text-lg">
                <HiOutlineDotsHorizontal />
              </Link>
            </span>
          </div>
          <div className="grid grid-col gap-2">
            <div className="flex gap-2  items-center">
              <i className="not-italic  justify-center items-center flex rounded-sm bg-secondary p-1 border border-white/10 text-xl text-white">
                <MdTypeSpecimen />
              </i>
              <i className="not-italic text-white/50 text-sm font-bold text-nowrap text-ellipsis overflow-hidden">
                Personal (Custodial (UTMA/ UGMA))
              </i>
            </div>
            <div className="flex gap-2  items-center">
              <i className="not-italic  justify-center items-center  flex rounded-sm bg-secondary p-1 border border-white/10 text-xl text-white">
                <FaPhoneAlt />
              </i>
              <i className="not-italic text-white/50 text-sm font-bold">
                786-656-6666
              </i>
            </div>
            <div className="flex gap-2  items-center">
              <i className="not-italic  justify-center items-center flex rounded-sm bg-secondary p-1 border border-white/10 text-xl text-white">
                <MdEmail />
              </i>
              <i className="not-italic text-white/50 text-sm font-bold">
                tristan.william@test.com
              </i>
            </div>
          </div>
          <div className="flex w-auto just-between item-center gap-2">
            <div className="flex justify-center items-center gap-2">
              <i className="not-italic  justify-center items-center flex rounded-sm bg-secondary p-1 border border-white/10 text-xl text-white">
                <AiFillBank />
              </i>
              <i className="not-italic text-sm text-white bg-secondary p-1 rounded-sm text-nowrap text-ellipsis overflow-hidden">
                XXX-XX-2312
              </i>
            </div>
            <div className="flex justify-center items-center gap-2">
              <i className="not-italic  justify-center items-center flex rounded-sm bg-secondary p-1 border border-white/10 text-xl text-white">
                <FaGlobe />
              </i>
              <i className="not-italic text-sm text-white bg-secondary p-1 rounded-sm">
                192.01.01.02
              </i>
            </div>
          </div>
        </div>
        <div className="flex flex-col p-2 gap-2 bg-secondary/50 rounded-lg w-full">
          <div className="flex justify-between w-auto">
            <span className="flex items-center gap-2">
              <i className="not-italic text-sm flex justify-center items-center rounded-full w-8 h-8 bg-white text-center text-orange uppercase">
                MM
              </i>{" "}
              <i className="not-italic text-white text-sm"> Mathew Martin</i>
            </span>
            <span className="flex items-center gap-2">
              <i className="not-italic text-sm flex justify-center items-center rounded-full w-8 h-8 bg-white"></i>
              <Link className="bg-secondary p-2 rounded-sm text-white/50 text-lg">
                <HiOutlineDotsHorizontal />
              </Link>
            </span>
          </div>
          <div className="grid grid-col gap-2">
            <div className="flex gap-2  items-center">
              <i className="not-italic  justify-center items-center flex rounded-sm bg-secondary p-1 border border-white/10 text-xl text-white">
                <MdTypeSpecimen />
              </i>
              <i className="not-italic text-white/50 text-sm font-bold text-nowrap text-ellipsis overflow-hidden">
                Personal (Custodial (UTMA/ UGMA))
              </i>
            </div>
            <div className="flex gap-2  items-center">
              <i className="not-italic  justify-center items-center  flex rounded-sm bg-secondary p-1 border border-white/10 text-xl text-white">
                <FaPhoneAlt />
              </i>
              <i className="not-italic text-white/50 text-sm font-bold">
                786-656-6666
              </i>
            </div>
            <div className="flex gap-2  items-center">
              <i className="not-italic  justify-center items-center flex rounded-sm bg-secondary p-1 border border-white/10 text-xl text-white">
                <MdEmail />
              </i>
              <i className="not-italic text-white/50 text-sm font-bold">
                tristan.william@test.com
              </i>
            </div>
          </div>
          <div className="flex w-auto just-between item-center gap-2">
            <div className="flex justify-center items-center gap-2">
              <i className="not-italic  justify-center items-center flex rounded-sm bg-secondary p-1 border border-white/10 text-xl text-white">
                <AiFillBank />
              </i>
              <i className="not-italic text-sm text-white bg-secondary p-1 rounded-sm text-nowrap text-ellipsis overflow-hidden">
                XXX-XX-2312
              </i>
            </div>
            <div className="flex justify-center items-center gap-2">
              <i className="not-italic  justify-center items-center flex rounded-sm bg-secondary p-1 border border-white/10 text-xl text-white">
                <FaGlobe />
              </i>
              <i className="not-italic text-sm text-white bg-secondary p-1 rounded-sm">
                192.01.01.02
              </i>
            </div>
          </div>
        </div>
        <div className="flex flex-col p-2 gap-2 bg-secondary/50 rounded-lg w-full">
          <div className="flex justify-between w-auto">
            <span className="flex items-center gap-2">
              <i className="not-italic text-sm flex justify-center items-center rounded-full w-8 h-8 bg-white text-center text-orange uppercase">
                MM
              </i>{" "}
              <i className="not-italic text-white text-sm"> Mathew Martin</i>
            </span>
            <span className="flex items-center gap-2">
              <i className="not-italic text-sm flex justify-center items-center rounded-full w-8 h-8 bg-white"></i>
              <Link className="bg-secondary p-2 rounded-sm text-white/50 text-lg">
                <HiOutlineDotsHorizontal />
              </Link>
            </span>
          </div>
          <div className="grid grid-col gap-2">
            <div className="flex gap-2  items-center">
              <i className="not-italic  justify-center items-center flex rounded-sm bg-secondary p-1 border border-white/10 text-xl text-white">
                <MdTypeSpecimen />
              </i>
              <i className="not-italic text-white/50 text-sm font-bold text-nowrap text-ellipsis overflow-hidden">
                Personal (Custodial (UTMA/ UGMA))
              </i>
            </div>
            <div className="flex gap-2  items-center">
              <i className="not-italic  justify-center items-center  flex rounded-sm bg-secondary p-1 border border-white/10 text-xl text-white">
                <FaPhoneAlt />
              </i>
              <i className="not-italic text-white/50 text-sm font-bold">
                786-656-6666
              </i>
            </div>
            <div className="flex gap-2  items-center">
              <i className="not-italic  justify-center items-center flex rounded-sm bg-secondary p-1 border border-white/10 text-xl text-white">
                <MdEmail />
              </i>
              <i className="not-italic text-white/50 text-sm font-bold">
                tristan.william@test.com
              </i>
            </div>
          </div>
          <div className="flex w-auto just-between item-center gap-2">
            <div className="flex justify-center items-center gap-2">
              <i className="not-italic  justify-center items-center flex rounded-sm bg-secondary p-1 border border-white/10 text-xl text-white">
                <AiFillBank />
              </i>
              <i className="not-italic text-sm text-white bg-secondary p-1 rounded-sm text-nowrap text-ellipsis overflow-hidden">
                XXX-XX-2312
              </i>
            </div>
            <div className="flex justify-center items-center gap-2">
              <i className="not-italic  justify-center items-center flex rounded-sm bg-secondary p-1 border border-white/10 text-xl text-white">
                <FaGlobe />
              </i>
              <i className="not-italic text-sm text-white bg-secondary p-1 rounded-sm">
                192.01.01.02
              </i>
            </div>
          </div>
        </div>
        <div className="flex flex-col p-2 gap-2 bg-secondary/50 rounded-lg w-full">
          <div className="flex justify-between w-auto">
            <span className="flex items-center gap-2">
              <i className="not-italic text-sm flex justify-center items-center rounded-full w-8 h-8 bg-white text-center text-orange uppercase">
                MM
              </i>{" "}
              <i className="not-italic text-white text-sm"> Mathew Martin</i>
            </span>
            <span className="flex items-center gap-2">
              <i className="not-italic text-sm flex justify-center items-center rounded-full w-8 h-8 bg-white"></i>
              <Link className="bg-secondary p-2 rounded-sm text-white/50 text-lg">
                <HiOutlineDotsHorizontal />
              </Link>
            </span>
          </div>
          <div className="grid grid-col gap-2">
            <div className="flex gap-2  items-center">
              <i className="not-italic  justify-center items-center flex rounded-sm bg-secondary p-1 border border-white/10 text-xl text-white">
                <MdTypeSpecimen />
              </i>
              <i className="not-italic text-white/50 text-sm font-bold text-nowrap text-ellipsis overflow-hidden">
                Personal (Custodial (UTMA/ UGMA))
              </i>
            </div>
            <div className="flex gap-2  items-center">
              <i className="not-italic  justify-center items-center  flex rounded-sm bg-secondary p-1 border border-white/10 text-xl text-white">
                <FaPhoneAlt />
              </i>
              <i className="not-italic text-white/50 text-sm font-bold">
                786-656-6666
              </i>
            </div>
            <div className="flex gap-2  items-center">
              <i className="not-italic  justify-center items-center flex rounded-sm bg-secondary p-1 border border-white/10 text-xl text-white">
                <MdEmail />
              </i>
              <i className="not-italic text-white/50 text-sm font-bold">
                tristan.william@test.com
              </i>
            </div>
          </div>
          <div className="flex w-auto just-between item-center gap-2">
            <div className="flex justify-center items-center gap-2">
              <i className="not-italic  justify-center items-center flex rounded-sm bg-secondary p-1 border border-white/10 text-xl text-white">
                <AiFillBank />
              </i>
              <i className="not-italic text-sm text-white bg-secondary p-1 rounded-sm text-nowrap text-ellipsis overflow-hidden">
                XXX-XX-2312
              </i>
            </div>
            <div className="flex justify-center items-center gap-2">
              <i className="not-italic  justify-center items-center flex rounded-sm bg-secondary p-1 border border-white/10 text-xl text-white">
                <FaGlobe />
              </i>
              <i className="not-italic text-sm text-white bg-secondary p-1 rounded-sm">
                192.01.01.02
              </i>
            </div>
          </div>
        </div>
        <div className="flex flex-col p-2 gap-2 bg-secondary/50 rounded-lg w-full">
          <div className="flex justify-between w-auto">
            <span className="flex items-center gap-2">
              <i className="not-italic text-sm flex justify-center items-center rounded-full w-8 h-8 bg-white text-center text-orange uppercase">
                MM
              </i>{" "}
              <i className="not-italic text-white text-sm"> Mathew Martin</i>
            </span>
            <span className="flex items-center gap-2">
              <i className="not-italic text-sm flex justify-center items-center rounded-full w-8 h-8 bg-white"></i>
              <Link className="bg-secondary p-2 rounded-sm text-white/50 text-lg">
                <HiOutlineDotsHorizontal />
              </Link>
            </span>
          </div>
          <div className="grid grid-col gap-2">
            <div className="flex gap-2  items-center">
              <i className="not-italic  justify-center items-center flex rounded-sm bg-secondary p-1 border border-white/10 text-xl text-white">
                <MdTypeSpecimen />
              </i>
              <i className="not-italic text-white/50 text-sm font-bold text-nowrap text-ellipsis overflow-hidden">
                Personal (Custodial (UTMA/ UGMA))
              </i>
            </div>
            <div className="flex gap-2  items-center">
              <i className="not-italic  justify-center items-center  flex rounded-sm bg-secondary p-1 border border-white/10 text-xl text-white">
                <FaPhoneAlt />
              </i>
              <i className="not-italic text-white/50 text-sm font-bold">
                786-656-6666
              </i>
            </div>
            <div className="flex gap-2  items-center">
              <i className="not-italic  justify-center items-center flex rounded-sm bg-secondary p-1 border border-white/10 text-xl text-white">
                <MdEmail />
              </i>
              <i className="not-italic text-white/50 text-sm font-bold">
                tristan.william@test.com
              </i>
            </div>
          </div>
          <div className="flex w-auto just-between item-center gap-2">
            <div className="flex justify-center items-center gap-2">
              <i className="not-italic  justify-center items-center flex rounded-sm bg-secondary p-1 border border-white/10 text-xl text-white">
                <AiFillBank />
              </i>
              <i className="not-italic text-sm text-white bg-secondary p-1 rounded-sm text-nowrap text-ellipsis overflow-hidden">
                XXX-XX-2312
              </i>
            </div>
            <div className="flex justify-center items-center gap-2">
              <i className="not-italic  justify-center items-center flex rounded-sm bg-secondary p-1 border border-white/10 text-xl text-white">
                <FaGlobe />
              </i>
              <i className="not-italic text-sm text-white bg-secondary p-1 rounded-sm">
                192.01.01.02
              </i>
            </div>
          </div>
        </div>
        <div className="flex flex-col p-2 gap-2 bg-secondary/50 rounded-lg w-full">
          <div className="flex justify-between w-auto">
            <span className="flex items-center gap-2">
              <i className="not-italic text-sm flex justify-center items-center rounded-full w-8 h-8 bg-white text-center text-orange uppercase">
                MM
              </i>{" "}
              <i className="not-italic text-white text-sm"> Mathew Martin</i>
            </span>
            <span className="flex items-center gap-2">
              <i className="not-italic text-sm flex justify-center items-center rounded-full w-8 h-8 bg-white"></i>
              <Link className="bg-secondary p-2 rounded-sm text-white/50 text-lg">
                <HiOutlineDotsHorizontal />
              </Link>
            </span>
          </div>
          <div className="grid grid-col gap-2">
            <div className="flex gap-2  items-center">
              <i className="not-italic  justify-center items-center flex rounded-sm bg-secondary p-1 border border-white/10 text-xl text-white">
                <MdTypeSpecimen />
              </i>
              <i className="not-italic text-white/50 text-sm font-bold text-nowrap text-ellipsis overflow-hidden">
                Personal (Custodial (UTMA/ UGMA))
              </i>
            </div>
            <div className="flex gap-2  items-center">
              <i className="not-italic  justify-center items-center  flex rounded-sm bg-secondary p-1 border border-white/10 text-xl text-white">
                <FaPhoneAlt />
              </i>
              <i className="not-italic text-white/50 text-sm font-bold">
                786-656-6666
              </i>
            </div>
            <div className="flex gap-2  items-center">
              <i className="not-italic  justify-center items-center flex rounded-sm bg-secondary p-1 border border-white/10 text-xl text-white">
                <MdEmail />
              </i>
              <i className="not-italic text-white/50 text-sm font-bold">
                tristan.william@test.com
              </i>
            </div>
          </div>
          <div className="flex w-auto just-between item-center gap-2">
            <div className="flex justify-center items-center gap-2">
              <i className="not-italic  justify-center items-center flex rounded-sm bg-secondary p-1 border border-white/10 text-xl text-white">
                <AiFillBank />
              </i>
              <i className="not-italic text-sm text-white bg-secondary p-1 rounded-sm text-nowrap text-ellipsis overflow-hidden">
                XXX-XX-2312
              </i>
            </div>
            <div className="flex justify-center items-center gap-2">
              <i className="not-italic  justify-center items-center flex rounded-sm bg-secondary p-1 border border-white/10 text-xl text-white">
                <FaGlobe />
              </i>
              <i className="not-italic text-sm text-white bg-secondary p-1 rounded-sm">
                192.01.01.02
              </i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListCard;
