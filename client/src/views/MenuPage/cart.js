import React from "react";
import MaterialTable from "material-table";
import burger from "./images/burger.png";
import icedTea from "./images/icedTea.jpeg";
import fries from "./images/fries.jpg";

const IcedTea = <img src={icedTea} alt="icedTea" width="45px" height="65px" />;
const Burger = <img src={burger} alt="burger" width="60px" height="50px" />;
const Fries = <img src={fries} alt="fries" width="70px" height="60px" />;

export default function MaterialTableDemo() {
  const [state, setState] = React.useState({
    columns: [{ field: "image" }, { field: "item" }, { field: "price" }],
    data: [
      { image: Burger, item: "Burger", price: "$8.99" },
      { image: IcedTea, item: "Iced Tea", price: "$2.99" },
      { image: Fries, item: "French Fries", price: "$5.69" }
    ]
  });

  return (
    <MaterialTable
      title=""
      columns={state.columns}
      data={state.data}
      editable={{
        onRowDelete: oldData =>
          new Promise(resolve => {
            setTimeout(() => {
              resolve();
              setState(prevState => {
                const data = [...prevState.data];
                data.splice(data.indexOf(oldData), 1);
                return { ...prevState, data };
              });
            }, 600);
          })
      }}
      options={{
        actionsColumnIndex: -1,
        search: false,
        paging: false,
        header: "",
        toolbar: false
      }}
    />
  );
}
