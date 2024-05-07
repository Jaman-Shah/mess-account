import React, { useContext } from "react";
import { DataContext } from "../../pages/Home/Home";
import { Link } from "react-router-dom";
import "./NumberOfMembers.css";

const NumberOfMembers = () => {
  const { setMemberCount, memberCountHandler, memberNameIns, applyBtnBool } =
    useContext(DataContext);
  return (
    <div className=" bg-[#474787] mx-auto h-lvh flex justify-center items-center">
      <div>
        <div className="text-center">
          <h1 className="font-extrabold text-3xl mb-3 text-[#6ab04c]">
            Number Of members
          </h1>
          <input
            className="border-2 border-solid border-black font-bold text-center p-4 rounded-full"
            type="text"
            onChange={(event) => setMemberCount(event.target.value)}
          />
          {!applyBtnBool && (
            <div>
              <button
                className="bg-blue-500 text-white p-2 my-3"
                onClick={memberCountHandler}
              >
                Apply
              </button>
            </div>
          )}
        </div>
        <div>
          {applyBtnBool && (
            <div className="text-center">
              <h1 className="font-bold text-3xl text-white my-3">
                Members Name
              </h1>
            </div>
          )}
          <div>{memberNameIns}</div>

          {applyBtnBool && (
            <div className="text-center">
              <Link
                to="/maininputarea"
                className="bg-blue-500  text-white p-2 "
              >
                Next
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default NumberOfMembers;
