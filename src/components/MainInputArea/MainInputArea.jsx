import React, { useContext } from "react";
import { DataContext } from "../../pages/Home/Home";
import { Link } from "react-router-dom";
import "./MainInputArea.css";

const MainInputArea = () => {
  const { membersName, averageHandler, mealMarExtHandler } =
    useContext(DataContext);
  return (
    <div className="h-lvh bg-[#474787] flex justify-center items-center ">
      <div className="container mx-auto text-center">
        <h2 className="font-extrabold text-3xl text-green-500 mb-3">
          Members Accounts
        </h2>
        <div className="flex justify-center items-center">
          <table className="table-auto">
            <thead className="font-bold text-2xl">
              <tr>
                <td className="text-xl md:text-3xl">Name</td>
                <td className="text-xl md:text-3xl">Total Meal(N)</td>
                <td className="text-xl md:text-3xl">Total Market(TK)</td>
                <td className="text-xl md:text-3xl">Total Extra(TK)</td>
              </tr>
            </thead>

            <tbody>
              {Object.values(membersName).map((element, i) => (
                <tr key={i}>
                  <td className="font-bold text-xl md:text-3xl  bg-[#1e3799] text-white p-2 rounded-2xl">
                    {`${element.name}`}
                  </td>
                  <td>
                    <input
                      className="p-1 md:p-4 w-3/5 md:w-full"
                      key={i}
                      name="totalMeal"
                      type="text"
                      id={i}
                      onChange={(event) =>
                        mealMarExtHandler(event, i, "totalMeal")
                      }
                    />
                  </td>
                  <td>
                    <input
                      className="p-1 md:p-4 w-3/5 md:w-full"
                      key={i}
                      name="totalMarket"
                      type="text"
                      id={i}
                      onChange={(event) =>
                        mealMarExtHandler(event, i, "totalMarket")
                      }
                    />
                  </td>
                  <td>
                    <input
                      className="p-1 md:p-4 w-3/5 md:w-full"
                      key={i}
                      name="totalExtra"
                      type="text"
                      id={i}
                      onChange={(event) =>
                        mealMarExtHandler(event, i, "totalExtra")
                      }
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className=" w-[80%] ml-20 md:ml-24 lg:ml-32 mx-auto flex justify-center text-end">
          <Link
            to="/finalresult"
            className="bg-blue-500 text-sm md:text-xl  text-white rounded-xl px-2 md:px-6 py-1 md:py-3 my-3 "
            onClick={averageHandler}
          >
            Next
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MainInputArea;
