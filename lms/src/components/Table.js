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
      td,
  th {
    border:1px solid;
    }
  }
  thead > tr {
    background-color: ${(props) => props.theme.primary.light};
  }
  caption{
font-size: 0.9em;
padding:${(props) => props.theme.spacing(1)};
font-weight:bold;


  }
`;

const TableMarkup = ({ data,caption }) => (
  <StyledTable>
    <caption>{ caption}</caption>
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
