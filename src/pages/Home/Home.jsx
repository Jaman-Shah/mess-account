import React, { useState, createContext } from "react";

export const DataContext = createContext();

function Home({ children }) {
  const [memberCount, setMemberCount] = useState(0);
  const [memberNameIns, setMembersNameIns] = useState([]);
  const [membersName, setMembersName] = useState({});
  const [applyBtnBool, setApplyBtnBool] = useState(false);
  const [average, setAverage] = useState({
    totalMealCosts: 0,
    mealRate: 0,
    avgExtra: 0,
  });

  const memberCountHandler = () => {
    if (!memberCount) {
      alert("Fill input area");
      return;
    } else if (isNaN(memberCount)) {
      alert("Enter a number");
      return;
    }
    if (Number(memberCount) > 10) {
      alert("More than 10 members not allowed");
      return;
    }

    setMembersNameIns(generateMemberIns());
    setApplyBtnBool(true);
  };

  const handleMemberNameChange = (event) => {
    const { name, value } = event.target;
    setMembersName((prevMembersName) => ({
      ...prevMembersName,
      [name]: {
        ...prevMembersName[name],
        name: value,
        totalMeal: 0,
        totalMarket: 0,
        totalExtra: 0,
      },
    }));
  };

  const mealMarExtHandler = (event, i, fieldName) => {
    const { value } = event.target;
    setMembersName((prevMembersName) => ({
      ...prevMembersName,
      [i]: {
        ...prevMembersName[i],
        [fieldName]: parseInt(value),
      },
    }));
  };
  const averageHandler = () => {
    const totalMealValue = Object.values(membersName).reduce(
      (acc, curr) => acc + curr.totalMeal,
      0
    );
    const totalExtraValue = Object.values(membersName).reduce(
      (acc, curr) => acc + curr.totalExtra,
      0
    );
    const totalMarketValue = Object.values(membersName).reduce(
      (acc, curr) => acc + curr.totalMarket,
      0
    );

    const mealRate = totalMarketValue / totalMealValue;

    const avgExtra = totalExtraValue / memberCount;

    setAverage({
      totalMealCosts: totalMealValue,
      mealRate: mealRate,
      avgExtra: avgExtra,
    });
  };

  const generateMemberIns = () => {
    const divArray = [];
    for (let i = 0; i < memberCount; i++) {
      divArray.push(
        <div key={i} className="">
          <input
            className="w-full border border-solid border-red-300 p-2 mb-2 rounded-3xl"
            key={i}
            name={i}
            type="text"
            id={i}
            onChange={handleMemberNameChange}
          />
        </div>
      );
    }
    return divArray;
  };

  return (
    <>
      <DataContext.Provider
        value={{
          setMemberCount,
          memberCountHandler,
          memberNameIns,
          membersName,
          averageHandler,
          mealMarExtHandler,
          average,
          applyBtnBool,
          setApplyBtnBool,
        }}
      >
        {children}
      </DataContext.Provider>
    </>
  );
}

export default Home;
