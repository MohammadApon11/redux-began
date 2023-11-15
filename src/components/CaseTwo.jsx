import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { incrementByValue } from "../redux/features/counter/counterSlice";

const CaseTwo = () => {
  const count = useSelector((state) => state.counter.value);
  const dispath = useDispatch();
  return (
    <div className="text-center">
      <button className="bg-red-600 px-5 py-5 text-white rounded-lg" onClick={() => dispath(incrementByValue(100))}>
        Increment by 100
      </button>
      <h1 className="text-5xl text-center font-extrabold">{count}</h1>
    </div>
  );
};

export default CaseTwo;
