import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment,incrementByValue } from "../redux/features/counter/counterSlice";

const Counter = () => {
  const count = useSelector((state) => state.counter.value);
  const dispath = useDispatch();
  console.log(count);
  return (
    <div className="ml-10 mt-10">
      <button
        onClick={() => dispath(incrementByValue(10))}
        className="bg-green-800 text-white"
      >
        Increment 10
      </button>
      <br />
      <button
        onClick={() => dispath(increment())}
        className="bg-slate-800 text-white"
      >
        Increment
      </button>
      <div>
        <h1>{count}</h1>
      </div>
      <button
        onClick={() => dispath(decrement())}
        className="bg-red-800 text-white"
      >
        decrement
      </button>
    </div>
  );
};

export default Counter;
