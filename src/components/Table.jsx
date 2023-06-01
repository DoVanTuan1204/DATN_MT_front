import styled from "styled-components";

const StyledTable = styled.table`
  width: 100%;
  margin: 20px 0;
  th {
    text-align: left;
    text-transform: uppercase;
    color: ${SecondGreenCode};
    font-weight: 600;
    font-size: 20px;
  }
  td {
    padding: 10px;
    font-size: 17px;
    border-top: 1px solid rgba(0, 0, 0, 0.1);
  }
`;

import React from "react";
import { SecondGreenCode } from "@/ColorCode";

const Table = (props) => {
  return <StyledTable {...props} />;
};

export default Table;
