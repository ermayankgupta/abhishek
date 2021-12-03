import React,{useState , useEffect} from "react";

const Guess = () => {
  const [num, setNum] = useState("");
  const secretNum = 4;
  const [answer, setAnswer] = useState("");
  useEffect(() => {
    func();
  }, [num]);
  const func = () => {
    if(num==secretNum){
      setAnswer("Good")
    }else{
      setAnswer("Not mapped")
    }
  };
  return (
    <div className="text-center">
      <h1 className="text-danger">Guess The Number Between 1-10</h1>
      <br />
      <form onSubmit={func}>
        <input
          type="number"
          value={num}
          className="ms-4"
          onChange={(e) => setNum(e.target.value)}
        />
        <br />
        <hr />
      </form>
      <h2>{answer}</h2>
    </div>
  );
};

export default Guess;
