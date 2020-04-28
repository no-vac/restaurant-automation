import React from 'react';
import MaterialTable from 'material-table';

export default function MaterialTableDemo() {
  const [state, setState] = React.useState({
    columns: [
      { title: 'Name', field: 'name' },
      { title: 'Role', field: 'role' },
      { title: 'Employee ID', field: 'id', type: 'numeric' },
      { title: 'Employee Pin', field: 'pin', type: 'numeric' },

      { title: 'Start Year', field: 'startYear', type: 'numeric' },
      { title: 'Age', field: 'age', type: 'numeric' },
      { title: 'Restricted Access', field: 'restrict', },
      { title: 'Noted Activities', field: 'activities', },
   
    ],
    data: [
      { name: 'John Smith', role: 'Waitor',id:"3440" , pin:"00019" , age:"16", startYear: 2017, restrict: "Bar", activities:"Late for work on 3/20/19"},
      {
        name: 'Jane Doe',
        role: 'Waitress',
        id:"6730" ,
        pin:"00019" ,
        age:"21",
        startYear: 2019,
        restrict: "Hosting",
        activities:"No call no show on 1/10/20, warning given"
        
      },
    ],
  });

  return (
    <MaterialTable
      title="Employee Profiles"
      columns={state.columns}
      data={state.data}
      editable={{
        onRowAdd: (newData) =>
          new Promise((resolve) => {
            setTimeout(() => {
              resolve();
              setState((prevState) => {
                const data = [...prevState.data];
                data.push(newData);
                return { ...prevState, data };
              });
            }, 600);
          }),
        onRowUpdate: (newData, oldData) =>
          new Promise((resolve) => {
            setTimeout(() => {
              resolve();
              if (oldData) {
                setState((prevState) => {
                  const data = [...prevState.data];
                  data[data.indexOf(oldData)] = newData;
                  return { ...prevState, data };
                });
              }
            }, 600);
          }),
        onRowDelete: (oldData) =>
          new Promise((resolve) => {
            setTimeout(() => {
              resolve();
              setState((prevState) => {
                const data = [...prevState.data];
                data.splice(data.indexOf(oldData), 1);
                return { ...prevState, data };
              });
            }, 600);
          }),
      }}
    />
  );
}
