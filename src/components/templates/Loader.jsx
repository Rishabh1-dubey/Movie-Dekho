import React from "react";
import prev from "/prev.jpg";
import { GIF_LOADER } from "../../utils/constents";
const Loader = () => {
  const data = Array(6).fill(""); // Create an array of 6 items
  const card = Array(4).fill(""); // Create an array of 6 items
  return (
    <div className="   bg-white text-white  grid grid-cols-3 gap-52 ">
      <div className=" w-[325px] bg-slate-300 animate-pulse pt-14   ">
        {data.map((item, index) => (
          <p
            key={index}
            className=" bg-slate-400 rounded-xl w-[250px] mt-14 mx-4 p-4"
          >
            {item}
          </p>
        ))}
      </div>
      <div className=" relative right-64  h-screen grid grid-rows-2 gap-14">
        <div className="  h-[400px] w-[1200px] min-w-[700px] bg-slate-100 animate-pulse ">
          <div className="mt-36 animate-pulse">
            <h1 className="text-black mb-10 bg-slate-200 px-12 py-6 mx-12 w-[280px] p-1 rounded-full"></h1>
            <div className="">
              <h1 className="text-black mb-4 bg-slate-200 px-12 mx-12 w-[780px] p-1 rounded-full"></h1>
              <h1 className="text-black mb-4  bg-slate-200 px-12 mx-12 w-[580px] p-1 rounded-full"></h1>
              <h1 className="text-black mb-6  bg-slate-200 px-12 mx-12 w-[680px] p-1 rounded-full"></h1>
            </div>
            <h1 className="text-black mb-10 bg-slate-200 px-12 py-6 mx-12 w-[150px] p-1 rounded-3xl"></h1>
          </div>
        </div>

        <div className="text-black  mt-6   h-[290px] grid grid-rows-1">
         <div className="flex overflow-auto">


         {card.map((item, index) => (
          <div key={index} className="flex flex-col space-y-3  mt-14 mx-12 ">
          <div className="h-[125px] w-[250px] rounded-xl bg-slate-300 "></div>
          <div className=" bg-slate-500 h-4 w-[250px] rounded-lg animate-pulse" />
          <div className=" bg-slate-500 h-4 w-[200px] rounded-lg animate-pulse" />
        </div>
        ))}
          
         </div>
        </div>
      </div>
    </div>
  );
};

export default Loader;
