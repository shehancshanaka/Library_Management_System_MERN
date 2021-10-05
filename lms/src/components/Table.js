import React from "react";
import styled from "styled-components";
import { capitalizeFirstLetter } from "../shared/utils";

export const StyledTable = styled.table`
  border: none;

  th {
    border: 0.5px solid;
    background-color: ${(props) => props.theme.primary.main};
    color:#ffff;
     
  
  }
  td {
      border: 0.5px solid;
    padding: 5px 10px;
  }
  tbody tr {
  
    :nth-of-type(even) {
      background-color: ${(props) => props.theme.primary.light};
    }
    :hover {
      background-color: ${(props) => props.theme.primary.main};
    }
      td,
  th {
    border:1px solid;
    }
  }
  thead > tr {
    background-color: ${(props) => props.theme.primary.light};
  }
  tr > tr{
    padding : 0.25em 0.5em;
  }
  tr >td{
    cursor:pointer;
  }

caption {
font-size: 1.2em;
padding:${(props) => props.theme.spacing(1)};
font-weight: bold;
  }
`;

const TableMarkup = ({ titles, data, handleClick, caption }) => (
  <StyledTable>
    <caption>{caption}</caption>

    <colgroup>
      {titles.map((title, index) => (
        <col key={index} />
      ))}
    </colgroup>
    <tbody>
      <tr>
        {titles.map((title, index) => (
          <th key={index}>{capitalizeFirstLetter(title)}</th>
        ))}
      </tr>
    </tbody>
    <tbody>
      {data.map((item, index) => (
        <tr key={index} onClick={() => handleClick(item.id)}>
          {titles.map((title, index) => (
            <td key={index}>
              {typeof item[title] === "boolean"
                ? item[title]
                  ? "Available"
                  : "Not Available"
                : item[title]}
            </td>
          ))}
        </tr>
      ))}
    </tbody>
  </StyledTable>
);

const Table = ({ data, handleRowClick, instructions }) => {
  return data.length > 0 ? (
    <TableMarkup
      titles={Object.keys(data[0])}
      data={data}
      handleClick={handleRowClick}
      caption={instructions}
    />
  ) : (
    "no data to populate"
  );
};
export default Table;
