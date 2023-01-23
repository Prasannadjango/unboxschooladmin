import React, { useState } from "react";
import { Table, Button, Form } from 'react-bootstrap';
import TablePagination from '@mui/material/TablePagination';
import TablePaginationUnstyled, {
    tablePaginationUnstyledClasses as classes,
} from '@mui/base/TablePaginationUnstyled';
import * as FaIcons from "react-icons/fa";
import { styled } from '@mui/system';

export default function Attendancepage() {
    const [query, setQuery] = useState('');
    const [retrieving, setRetrieving] = useState(false);
    const [show, setShow] = useState(false);
    const [Students, setStudents] = useState([]);
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(4);
    const blue = {
        200: '#A5D8FF',
        400: '#3399FF',
    };

    const grey = {
        50: '#F3F6F9',
        100: '#E7EBF0',
        200: '#E0E3E7',
        300: '#CDD2D7',
        400: '#B2BAC2',
        500: '#A0AAB4',
        600: '#6F7E8C',
        700: '#3E5060',
        800: '#2D3843',
        900: '#1A2027',
    };
    // Avoid a layout jump when reaching the last page with empty rows.
    const emptyRows =
        page > 0 ? Math.max(0, (1 + page) * rowsPerPage - Students.length) : 0;

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };
    const CustomTablePagination = styled(TablePaginationUnstyled)(
        ({ theme }) => `
        & .${classes.spacer} {
          display: none;
        }
      
        & .${classes.toolbar}  {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: 10px;
      
          @media (min-width: 768px) {
            flex-direction: row;
            align-items: center;
          }
        }
      
        & .${classes.selectLabel} {
          margin: 0;
        }
      
        & .${classes.select}{
          padding: 2px;
          border: 1px solid ${theme.palette.mode === 'dark' ? grey[800] : grey[200]};
          border-radius: 50px;
          background-color: transparent;
      
          &:hover {
            background-color: ${theme.palette.mode === 'dark' ? grey[800] : grey[50]};
          }
      
          &:focus {
            outline: 1px solid ${theme.palette.mode === 'dark' ? blue[400] : blue[200]};
          }
        }
      
        & .${classes.displayedRows} {
          margin: 0;
      
          @media (min-width: 768px) {
            margin-left: auto;
          }
        }
      
        & .${classes.actions} {
          padding: 2px;
          border: 1px solid ${theme.palette.mode === 'dark' ? grey[800] : grey[200]};
          border-radius: 50px;
          text-align: center;
        }
      
        & .${classes.actions} > button {
          margin: 0 8px;
          border: transparent;
          border-radius: 2px;
          background-color: transparent;
      
          &:hover {
            background-color: ${theme.palette.mode === 'dark' ? grey[800] : grey[50]};
          }
      
          &:focus {
            outline: 1px solid ${theme.palette.mode === 'dark' ? blue[400] : blue[200]};
          }
        }
        `,
    );
    const search = (data) => {

        return data.filter(
            (item) =>
                item.studentfirstname.toLowerCase().includes(query) ||
                item.studentlastname.toLowerCase().includes(query) ||
                item.studentsection.toLowerCase().includes(query) ||
                item.studentClass.toLowerCase().includes(query)
        );


    }
    return (
        <>
            <div className='w-100 content-wrapper'>

                <div className="app-card">
                    <h5>Student Attendance List</h5>
                    <div className="mb-3">
                        <form className=" d-flex">
                            <div>
                                <Form.Select aria-label="Default select example">
                                    <option>Choose class</option>
                                    <option value="1">One</option>
                                    <option value="2">Two</option>
                                    <option value="3">Three</option>
                                </Form.Select>
                            </div>
                            <div className="mx-4">
                                <Form.Select aria-label="Default select example">
                                    <option>Choose section</option>
                                    <option value="1">a</option>
                                    <option value="2">b</option>
                                    <option value="3">c</option>
                                </Form.Select>
                            </div>
                            <div>
                                <Form.Control type="date" />
                                   
                               
                            </div>
                           <Button className="ms-3">Get Attendance List</Button>
                        </form>
                    </div>
                    {/* <div className='p-3 d-flex justify-content-between'>
                        <h3>Attendance</h3>
                        <div className="col-5">
                            <Form.Control type="text" placeholder="Search..."
                                onChange={e => setQuery(e.target.value)} className='py-2  ' />
                        </div>

                    </div> */}

                    <div className="h-260">

                        <Table className='studentcontent-bg' >

                            <thead>
                                <tr>

                                    <th>S:no</th>
                                    <th>Roll.no</th>
                                    <th>Student Name</th>
                                    <th>Status</th>
                                   
                                </tr>
                            </thead>
                            <tbody className=" position-relative tbscrollable">



                                {/* {
                                    retrieving ? (

                                        <div className="Loader">
                                            <h6 className="text-center">Loading...</h6>
                                        </div>

                                    ) :
                                        (rowsPerPage > 0
                                            ? search(Students).slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                            : Students
                                        ).map((row, i) => (
                                            <tr key={i}>
                                                
                                               
                                            </tr>
                                        ))}

                                {emptyRows > 0 && (
                                    <tr style={{ height: 34 * emptyRows }}>
                                        <td colSpan={3} />
                                    </tr>
                                )} */}
                                     <tr>
                                        <td>1</td>
                                        <td>#12C001</td>
                                        <td>Pranav</td>
                                        <td>
                                            <span className="bg-success status-container">Present</span>
                                        </td>
                                     </tr>
                                     <tr>
                                        <td>2</td>
                                        <td>#12C002</td>
                                        <td>Hari</td>
                                        <td>
                                            <span className="bg-danger status-container">Absent</span>
                                        </td>
                                     </tr>
                            </tbody>

                            {/* <tfoot>

                                <TablePagination
                                    rowsPerPageOptions={[5, 10, 25, { label: 'All', value: -1 }]}
                                    colSpan={3}
                                    count={Students.length}
                                    rowsPerPage={rowsPerPage}
                                    page={page}
                                    slotProps={{
                                        select: {
                                            'aria-label': 'rows per page',
                                        },
                                        actions: {
                                            showFirstButton: true,
                                            showLastButton: true,
                                        },
                                    }}
                                    onPageChange={handleChangePage}
                                    onRowsPerPageChange={handleChangeRowsPerPage}
                                    className='bg-clr2 text-light'
                                />



                            </tfoot> */}

                        </Table>
                    </div>
                </div>
            </div>
        </>
    );
}