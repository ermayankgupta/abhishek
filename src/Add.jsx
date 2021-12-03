import React,{useState , useEffect} from "react";

const Add = () => {
  const [ num1 ,setNum1]=useState("");
  const [ num2 ,setNum2]=useState("");
  let mul = num1 * num2;
  let div = num1 / num2;

  return (
    <div className="text-center">
      <h1 className="text-warning">Get Multiplication and Division</h1>
      <form>
        <input
          type="number"
          value={num1}
          onChange={(e) => setNum1(e.target.value)}
        />
        <br /> <br />
        <input
          type="number"
          value={num2}
          onChange={(e) => setNum2(e.target.value)}
        />
        <br />
        <br />
      </form>
      <h3>{num1} * {num2} = {mul}</h3>
      <h3>{num1} / {num2} = {div}</h3>
    </div>
  );
};

export default Add;
