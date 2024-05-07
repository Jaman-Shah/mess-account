import React, { useContext } from "react";
import { DataContext } from "../../pages/Home/Home";
import "./FinalResult.css";

const FinalResult = () => {
  const { average, membersName } = useContext(DataContext);
  return (
    <div
      id="final-result"
      className="h-lvh  bg-[#474787] flex justify-center items-center"
    >
      <div className="text-center">
        <div className="mb-3 text-white">
          <h1 className="font-extrabold text-4xl mb-3 text-red-600">Average</h1>
          <div className="flex  justify-between text-2xl">
            <div className="">
              <h1>Total Meal Number : {average.totalMealCosts} </h1>
            </div>
            <div>
              <h1>Meal Rate : {average.mealRate} </h1>
            </div>
            <div>
              <h1>Average Extra : {average.avgExtra}</h1>
            </div>
          </div>
        </div>
        <div>
          <h1 className="font-extrabold  text-green-600">Final Result</h1>
          <div>
            <table border="1">
              <thead>
                <tr>
                  <td>Name</td>
                  <td>Market Spent</td>
                  <td>Extra Spent</td>
                  <td>Total Spent</td>
                  <td>Total Meal(N)</td>
                  <td>Total Meal Costs</td>
                  <td>Total Extra Costs</td>
                  <td>Overall Costs </td>
                  <td>Position (TS - OC)</td>
                </tr>
              </thead>
              <tbody>
                {Object.values(membersName).map((element, i) => {
                  const { name, totalMeal, totalMarket, totalExtra } = element;
                  const totalSpent =
                    parseFloat(totalMarket) + parseFloat(totalExtra);
                  const totalMealCosts =
                    parseFloat(totalMeal) * parseFloat(average.mealRate);
                  const totalExtraCosts = average.avgExtra;
                  const position =
                    totalSpent - (totalMealCosts + totalExtraCosts);
                  return (
                    <tr key={i}>
                      <td>{name}</td>
                      <td>{totalMarket}</td>
                      <td>{totalExtra}</td>
                      <td>{totalSpent}</td>
                      <td>{totalMeal}</td>
                      <td>{totalMealCosts || 0}</td>
                      <td>{totalExtraCosts}</td>
                      <td>{totalMealCosts + totalExtraCosts || 0}</td>
                      <td className={position < 0 ? "red-bg" : "green-bg"}>
                        {position}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FinalResult;
