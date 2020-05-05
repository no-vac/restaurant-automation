import React from "react";
import MaterialTable from "material-table";

export default function MaterialTableDemo() {
  const [state, setState] = React.useState({
    columns: [
      { title: "Table #", field: "table" },
      { title: "Order #", field: "order" },
      { title: "Status", field: "status" }
    ],
    data: [
      {
        table: "1",
        order: "1",
        status: "ready"
      },
      {
        table: "2",
        order: "3",
        status: "ordered"
      },
      {
        table: "3",
        order: "2",
        status: "ready"
      },
      {
        table: "4",
        order: "4",
        status: "ordered"
      }
    ]
  });

  return (
    <MaterialTable
      title="Order Queue"
      columns={state.columns}
      data={state.data}
      editable={{
        onRowAdd: newData =>
          new Promise(resolve => {
            setTimeout(() => {
              resolve();
              setState(prevState => {
                const data = [...prevState.data];
                data.push(newData);
                return { ...prevState, data };
              });
            }, 600);
          }),
        onRowUpdate: (newData, oldData) =>
          new Promise(resolve => {
            setTimeout(() => {
              resolve();
              if (oldData) {
                setState(prevState => {
                  const data = [...prevState.data];
                  data[data.indexOf(oldData)] = newData;
                  return { ...prevState, data };
                });
              }
            }, 600);
          }),
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
    />
  );
}
