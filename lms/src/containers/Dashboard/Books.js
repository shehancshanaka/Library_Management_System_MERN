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


  return <FluidContainer>{<Table data={catalog} />}</FluidContainer>;
};
export default Books;
