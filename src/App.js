import React from "react";
import useSum from "./useSum"; 

function App() {
  const num1 = 10;
  const num2 = 40;

  const sum = useSum(num1, num2);

  return (
    <>
      <p>
        {num1} + {num2} = {sum}
      </p>
    </>
  );
}

export default App;
