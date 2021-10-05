import React from "react";
import Table from "../../components/Table";
import { FluidContainer } from "../../components/CommonComponents";

const Books = ({ catalog }) => {
  const updatedCatalog = [
    ...catalog,
    {
      author: "shehan",
      burrowedDate: "",
      burrowedMemberId: "",
      id: "3",
      isAvailable: true,
      title: "abc",
    },

    {
      author: "shehan",
      burrowedDate: "",
      burrowedMemberId: "",
      id: "4",
      isAvailable: true,
      title: "abc",
    },
  ];

  const handleTableRowClick = (id) => {
    console.log(id);
  };
  return (
    <FluidContainer>
      {<Table data={updatedCatalog} handleRowClick={handleTableRowClick} instructions="Click a row to view Book" />}
    </FluidContainer>
  );
};
export default Books;
