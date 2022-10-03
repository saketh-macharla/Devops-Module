import React, { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import styled from "styled-components";

const StyledComp = styled.div`

  & .div{
    display: flex;
    align-items: center;
    justify-content: center;
    column-gap: 20px;

  }
  & svg{
    border: 1px solid black;
  }
`;

const CounterDevops = () => {
  const [count, setCount] = useState(0);

  return (
    <StyledComp>
      <h1>Counter</h1>
      <div className="div">
        <RemoveIcon onClick={() => setCount(count - 1)} />
        {count}
        <AddIcon onClick={() => setCount(count + 1)} />
      </div>
    </StyledComp>
  );
};
 
export default CounterDevops; 
