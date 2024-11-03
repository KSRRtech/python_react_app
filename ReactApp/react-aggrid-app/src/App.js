import React, { useState, useEffect } from 'react';
import { AgGridReact } from 'ag-grid-react';
import axios from 'axios';
import 'ag-grid-community/styles/ag-grid.css'; // AG Grid CSS
import 'ag-grid-community/styles/ag-theme-alpine.css'; // AG Grid theme CSS
import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap';


/**
 * The main application component, which displays a navigation bar with four
 * tabs and a data grid below it. The data grid is populated with data from
 * a server via an HTTP GET request.
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
        <><div><Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand href="#home">MyApp</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        {/* Tab 1 with Dropdown */}
                        <NavDropdown title="Tab 1" id="tab1-dropdown">
                            <NavDropdown.Item href="#tab1/option1">Option 1</NavDropdown.Item>
                            <NavDropdown.Item href="#tab1/option2">Option 2</NavDropdown.Item>
                            <NavDropdown.Item href="#tab1/option3">Option 3</NavDropdown.Item>
                        </NavDropdown>

                        {/* Tab 2 with Dropdown */}
                        <NavDropdown title="Tab 2" id="tab2-dropdown">
                            <NavDropdown.Item href="#tab2/option1">Option 1</NavDropdown.Item>
                            <NavDropdown.Item href="#tab2/option2">Option 2</NavDropdown.Item>
                            <NavDropdown.Item href="#tab2/option3">Option 3</NavDropdown.Item>
                        </NavDropdown>

                        {/* Tab 3 with Dropdown */}
                        <NavDropdown title="Tab 3" id="tab3-dropdown">
                            <NavDropdown.Item href="#tab3/option1">Option 1</NavDropdown.Item>
                            <NavDropdown.Item href="#tab3/option2">Option 2</NavDropdown.Item>
                            <NavDropdown.Item href="#tab3/option3">Option 3</NavDropdown.Item>
                        </NavDropdown>

                        {/* Tab 4 with Dropdown */}
                        <NavDropdown title="Tab 4" id="tab4-dropdown">
                            <NavDropdown.Item href="#tab4/option1">Option 1</NavDropdown.Item>
                            <NavDropdown.Item href="#tab4/option2">Option 2</NavDropdown.Item>
                            <NavDropdown.Item href="#tab4/option3">Option 3</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
        </div><div className="ag-theme-alpine" style={{ height: 400, width: 600 }}>
                <AgGridReact
                    rowData={rowData}
                    columnDefs={columns} />
            </div></>
    );
};

export default App;
