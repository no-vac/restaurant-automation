import React, {forwardRef, useEffect} from 'react';
import MaterialTable from 'material-table';
import AddBox from '@material-ui/icons/AddBox';
import ArrowDownward from '@material-ui/icons/ArrowDownward';
import Check from '@material-ui/icons/Check';
import ChevronLeft from '@material-ui/icons/ChevronLeft';
import ChevronRight from '@material-ui/icons/ChevronRight';
import Clear from '@material-ui/icons/Clear';
import DeleteOutline from '@material-ui/icons/DeleteOutline';
import Edit from '@material-ui/icons/Edit';
import FilterList from '@material-ui/icons/FilterList';
import FirstPage from '@material-ui/icons/FirstPage';
import LastPage from '@material-ui/icons/LastPage';
import Remove from '@material-ui/icons/Remove';
import SaveAlt from '@material-ui/icons/SaveAlt';
import Search from '@material-ui/icons/Search';
import ViewColumn from '@material-ui/icons/ViewColumn';
import TopBar from "../../components/TopBar";

const TableIcons = {
    Add: forwardRef((props, ref) => <AddBox {...props} ref={ref}/>),
    Check: forwardRef((props, ref) => <Check {...props} ref={ref}/>),
    Clear: forwardRef((props, ref) => <Clear {...props} ref={ref}/>),
    Delete: forwardRef((props, ref) => <DeleteOutline {...props} ref={ref}/>),
    DetailPanel: forwardRef((props, ref) => <ChevronRight {...props} ref={ref}/>),
    Edit: forwardRef((props, ref) => <Edit {...props} ref={ref}/>),
    Export: forwardRef((props, ref) => <SaveAlt {...props} ref={ref}/>),
    Filter: forwardRef((props, ref) => <FilterList {...props} ref={ref}/>),
    FirstPage: forwardRef((props, ref) => <FirstPage {...props} ref={ref}/>),
    LastPage: forwardRef((props, ref) => <LastPage {...props} ref={ref}/>),
    NextPage: forwardRef((props, ref) => <ChevronRight {...props} ref={ref}/>),
    PreviousPage: forwardRef((props, ref) => <ChevronLeft {...props} ref={ref}/>),
    ResetSearch: forwardRef((props, ref) => <Clear {...props} ref={ref}/>),
    Search: forwardRef((props, ref) => <Search {...props} ref={ref}/>),
    SortArrow: forwardRef((props, ref) => <ArrowDownward {...props} ref={ref}/>),
    ThirdStateCheck: forwardRef((props, ref) => <Remove {...props} ref={ref}/>),
    ViewColumn: forwardRef((props, ref) => <ViewColumn {...props} ref={ref}/>)
};


export default function MaterialTableDemo() {
    const URI = 'http://127.0.0.1:5000';
    const [count, setCount] = React.useState(0);
    const [state, setState] = React.useState({
        columns: [
            {title: 'Employee ID', field: 'id', type: 'numeric'},
            {title: 'Username', field: 'username'},
            {title: 'Email', field: 'email'},
            {title: 'Role', field: 'role'},

        ],
        data: [],
    });

    useEffect(() => {
        setCount(0);
        fetch(URI+'/api/u/', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': localStorage.getItem('jwtToken')
            }
        }).then(response => response.json()).then(result => {
            setState(prevState => {
                const data = [prevState.data];
                data.push(result);
                console.log(data[1]);
                return {...prevState, data};
            })
        }).catch(e => console.log(e))
    }, [count])

    return (
        <>
            <TopBar/>
            <MaterialTable
                style={{width: '100%', margin: '4em 1em'}}
                title="Employee Profiles"
                icons={TableIcons}
                columns={state.columns}
                data={state.data[1]}
                editable={{
                    onRowAdd: (newData) =>
                        new Promise((resolve) => {
                            resolve();
                            fetch(URI+'/api/u/', {
                                method: 'POST',
                                body: JSON.stringify(newData),
                                headers: {
                                    'Content-Type': 'application/json',
                                    'Authorization': localStorage.getItem('jwtToken')
                                }
                            }).then(response => response.json()).then(result => {
                                console.log(newData);


                                // setState(prevState => {
                                //     const data = [prevState.data];
                                //     data.push(result);
                                //     console.log(data);
                                //     return {...prevState, data};
                                // })
                            }).catch(e => console.log(e))
                        }),
                    onRowUpdate: (newData, oldData) =>
                        new Promise((resolve) => {
                            setTimeout(() => {
                                resolve();
                                if (oldData) {
                                    setState((prevState) => {
                                        const data = [...prevState.data];
                                        data[data.indexOf(oldData)] = newData;
                                        return {...prevState, data};
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
                                    return {...prevState, data};
                                });
                            }, 600);
                        }),
                }}
            />
        </>
    );
}


// class MaterialTableDemo extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             columns: [
//                 {title: 'Employee ID', field: 'id', type: 'numeric'},
//                 {title: 'Username', field: 'username'},
//                 {title: 'Email', field: 'email'},
//                 {title: 'Role', field: 'role'},
//             ],
//             data: [],
//             open: false,
//         }
//     };
//
//     componentWillMount() {
//         fetch('http://127.0.0.1:5000/api/u/', {
//             method: 'GET',
//             headers: {
//                 'Content-Type': 'application/json',
//                 'Authorization': localStorage.getItem('jwtToken')
//             }
//         }).then(response => response.json()).then(result => {
//             this.setState({data: result})
//         }).catch(e => console.log(e))
//     };
//
//     addNewUser = (userInfo) => {
//         fetch('http://127.0.0.1:5000/api/u/', {
//                 method: 'POST',
//                 body: JSON.stringify({userInfo}),
//                 headers: {
//                     'Content-Type': 'application/json',
//                     'Authorization': localStorage.getItem('jwtToken'),
//                 }
//             }
//         );
//     };
//
//
//     render() {
//         return (
//             <>
//                 <TopBar/>
//                 <MaterialTable
//                     style={{width: '100%', margin: '4em 1em'}}
//                     icons={TableIcons}
//                     title="Employee Profiles"
//                     columns={this.state.columns}
//                     data={this.state.data}
//                     editable={{
//                         onRowAdd: (newData) => {
//                             this.addNewUser(newData);
//                         },
//                         onRowUpdate: (newData, oldData) =>
//                             new Promise((resolve) => {
//                                 setTimeout(() => {
//                                     resolve();
//                                     if (oldData) {
//                                         this.setState((prevState) => {
//                                             const data = [...prevState.data];
//                                             data[data.indexOf(oldData)] = newData;
//                                             return {...prevState, data};
//                                         });
//                                     }
//                                 }, 600);
//                             }),
//                         onRowDelete: (oldData) =>
//                             new Promise((resolve) => {
//                                 setTimeout(() => {
//                                     resolve();
//                                     this.setState((prevState) => {
//                                         const data = [...prevState.data];
//                                         data.splice(data.indexOf(oldData), 1);
//                                         return {...prevState, data};
//                                     });
//                                 }, 600);
//                             }),
//                     }}
//                 />
//             </>
//         );
//     }
// }
//
// export default MaterialTableDemo;