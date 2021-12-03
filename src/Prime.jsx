import React, { useState } from "react";

const Prime = () => {
  let array = [1, 2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43,47]
  return (
    <>
      <div className="text-center">
        {
          array.map((elem)=>{
            return <p>{elem}</p>
          })
        }
      </div>
    </>
  );
};

export default Prime;
