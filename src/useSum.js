import { useState, useEffect } from "react";

function useSum(num1, num2) {
  const [sum, setSum] = useState(5);

  useEffect(() => {
    setSum(num1 + num2); 
  }, [num1, num2]);

  return sum;
}

export default useSum;
