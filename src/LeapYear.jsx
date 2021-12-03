import React, { useState,useEffect } from "react";

const LeapYear = () => {
  const [year, setYear] = useState("");
  const [answer, setAnswer] = useState("");
  useEffect(() => {
    func();
  }, [year]);
  const func = () => {
    let que = year;
    let ans = true;
    if ((que % 4 == 0 && que % 100 != 0) || que % 400 == 0) {
      setAnswer("This is Leap Year");
    } else {
      setAnswer("This is not a Leap Year");
    }
  };

  return (
    <div className="text-center">
      <h1 className="text-danger">Check Weather the year is Leap or Not</h1>
      <br />
      <form onSubmit={func}>
        <input
          type="number"
          value={year}
          className="ms-4"
          onChange={(e) => setYear(e.target.value)}
        />
        <br />
        <hr />  
      </form>
      <h2>{answer}</h2>
    </div>
  );
};

export default LeapYear;
