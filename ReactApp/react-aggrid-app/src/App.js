import React, { useState, useEffect } from 'react';
import { AgGridReact } from 'ag-grid-react';
import axios from 'axios';
import 'ag-grid-community/styles/ag-grid.css'; // AG Grid CSS
import 'ag-grid-community/styles/ag-theme-alpine.css'; // AG Grid theme CSS

/**
 * A React component that displays a grid of data from a backend API.
 *
 * The App component fetches data from the backend API when it mounts, and
 * displays it in a grid with the specified columns.
 *
 * @returns {React.ReactElement}
 */
const App = () => {
    const [rowData, setRowData] = useState([]);

    const columns = [
        { headerName: "ID", field: "id" },
        { headerName: "Name", field: "name" },
        { headerName: "Age", field: "age" },
        { headerName: "Country", field: "country" }
    ];

    useEffect(() => {
        axios.get('http://localhost:5000/data')
            .then(response => setRowData(response.data))
            .catch(error => console.error("Error fetching data:", error));
    }, []);

    return (
        <div className="ag-theme-alpine" style={{ height: 400, width: 600 }}>
            <AgGridReact
                rowData={rowData}
                columnDefs={columns}
            />
        </div>
    );
};

export default App;
