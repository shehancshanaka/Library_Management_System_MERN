import styled from "styled-components";
import { capitalizeFirstLetter } from "../shared/utils";

export const StyledTable = styled.table`
  border: none;
  td,
  th {
    border: 1px solid;
  }
  td {
    padding: 5px 10px;
  }
  tbody tr {
    :nth-of-type(even) {
      background-color: ${(props) => props.theme.primary.light};
    }
    :hover {
      background-color: ${(props) => props.theme.primary.main};
    }
  }
  thead > tr {
      color:#fff;
    background-color: ${(props) => props.theme.primary.light};
  }
`;

const TableMarkup = ({ data }) => (
  <StyledTable>
    <colgroup>
      {Object.keys(data[0]).map((title, index) => (
        <col key={index} />
      ))}
    </colgroup>
   
      <tr>
        {Object.keys(data[0]).map((title, index) => (
          <th key={index}>{capitalizeFirstLetter(title)}</th>
        ))}
      </tr>


    <tbody>
      {data.map((item, index) => (
        <tr key={index}>
          {Object.keys(data[0]).map((title, index) => (
            <td key={index}>{item[title]}</td>
          ))}
        </tr>
      ))}
    </tbody>
  </StyledTable>
);

const Table = ({ data }) => {
  return data.length > 0 ? <TableMarkup data={data} /> : "no data to populate";
};
export default Table;
