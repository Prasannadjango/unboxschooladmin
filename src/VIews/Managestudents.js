import React, { useState, useContext,useEffect } from "react";
import { Table, Button, Form } from 'react-bootstrap';
import { collection, addDoc, getDocs } from "firebase/firestore";
import { db } from "../firebase-config";
import TablePagination from '@mui/material/TablePagination';
import TablePaginationUnstyled, {
    tablePaginationUnstyledClasses as classes,
} from '@mui/base/TablePaginationUnstyled';
import * as FaIcons from "react-icons/fa";

import { styled } from '@mui/system';
function Managestudentspage() {
    const [Students, setStudents] = useState([]);
    const [Studentsectioninfo, setStudentsectioninfo] = useState([]);
    const [Studentclassinfo, setStudentclassinfo] = useState([]);
    const [studentfirstName, setStudentfirstName] = useState("");
    const [studentlastName, setStudentlastName] = useState("");
    const [studentDob, setStudentdob] = useState("");
    const [studentClass, setStudentclass] = useState("");
    const [studentSection, setStudentsection] = useState("");
    const [studentParentName, setStudentparentName] = useState("");
    const [studentPincode, setStudentpincode] = useState("");
    const [studentPhonenumber, setStudentphonenumber] = useState("");
    const [studentAlternatephonenumber, setStudentalternatephonenumber] = useState("");
    const [studentAddress, setStudentaddress] = useState("");
    const [studentCity, setStudentcity] = useState("");
    const [query, setQuery] = useState('');
    const [retrieving, setRetrieving] = useState(false);
    const [show, setShow] = useState(false);


  

    // create new student

    const Addstudent = async (e) => {
        e.preventDefault();

        try {
            const docRef = await addDoc(collection(db, "Newstudent"), {
                studentfirstname: studentfirstName,
                studentlastname: studentlastName,
                studentDob: studentDob,
                studentClass: studentClass,
                studentsection: studentSection,
                studentparentname: studentParentName,
                studentpincode: studentPincode,
                studentphonenumber: studentPhonenumber,
                studentalternatephonenumber: studentAlternatephonenumber,
                studentaddress: studentAddress,
                studentcity: studentCity

            });
            alert("Document written with ID: ", docRef.id);
        } catch (e) {
            console.error("Error adding document: ", e);
        }
    }

    //  read student data

    const fetchstudentdata = async () => {
        setRetrieving(true)
        await getDocs(collection(db, "Newstudent"))
            .then((querySnapshot) => {
                const newData = querySnapshot.docs
                    .map((doc) => ({ ...doc.data(), id: doc.id }));
                setStudents(newData);
               

            })
        setTimeout(() => {
            setRetrieving(false)
            setShow(!show);
        }, 1200)



    }

    useEffect(() => {
        fetchstudentdata();
    }, [])



    //  fetch Student section data

    const fetchstudentsection = async () => {

        await getDocs(collection(db, "Newsection"))
            .then((querySnapshot) => {
                const newData = querySnapshot.docs
                    .map((doc) => ({ ...doc.data(), id: doc.id }));
                setStudentsectioninfo(newData);

            })

    }

    useEffect(() => {
        fetchstudentsection();
    }, [])

    // fetch student class 
    const fetchstudentclass = async () => {

        await getDocs(collection(db, "Newclass"))
            .then((querySnapshot) => {
                const newData = querySnapshot.docs
                    .map((doc) => ({ ...doc.data(), id: doc.id }));
                setStudentclassinfo(newData);
                // setTotalstudentvalue(newData.value);

            })

    }

    useEffect(() => {
        fetchstudentclass();
    }, [])

    const search = (data) => {

        return data.filter(
            (item) =>
                item.studentfirstname.toLowerCase().includes(query) ||
                item.studentlastname.toLowerCase().includes(query) ||
                item.studentsection.toLowerCase().includes(query) ||
                item.studentClass.toLowerCase().includes(query)
        );


    }



    //  pagination variables 


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


    return (
        <>
            <div className="content-wrapper d-flex">
                <div className="col-8 me-2">
                    <div className="app-card">
                        <div className='p-3 d-flex justify-content-between'>
                            <h3>Student list</h3>
                            <div className="col-5">
                                <Form.Control type="text" placeholder="Search..."
                                    onChange={e => setQuery(e.target.value)} className='py-2  ' />
                            </div>

                        </div>

                        <div>
                            <Table className='content-bg ' >

                            <thead>
                                <tr>

                                    <th>first-Name</th>
                                    <th>Last-name</th>
                                    <th>Class</th>
                                    <th>section</th>
                                    <th >Actions</th>
                                </tr>
                            </thead>
                            <tbody className=" position-relative tbscrollable">



                                {(rowsPerPage > 0
                                    ? search(Students).slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                    : Students
                                ).map((row, i) => (
                                    <tr key={i}>
                                        <td>{row.studentfirstname}</td>
                                        <td>{row.studentlastname}</td>
                                        <td>{row.studentClass}</td>
                                        <td>{row.studentsection}</td>
                                        <td>
                                                    <Button className='bg-primary text-white me-3  text-center '><FaIcons.FaEdit className="fs-6"/></Button> 
                                                    <Button className='bg-danger text-white border-0'><FaIcons.FaTrashAlt /></Button>
                                                </td>
                                    </tr>
                                ))}

                                {emptyRows > 0 && (
                                    <tr style={{ height: 34 * emptyRows }}>
                                        <td colSpan={3} />
                                    </tr>
                                )}

                            </tbody>

                            <tfoot>

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



                            </tfoot>

                        </Table>
                        </div>
                    </div>

                </div>
                <div className="col-4">
                    <div className="app-card overflow-container  p-4">
                        <h4 className="py-2">Add students</h4>
                        <Form >
                            <label>First name</label>
                            <Form.Control type="text" placeholder="First name" className='py-2 my-2'
                                onChange={(e) => setStudentfirstName(e.target.value)}
                            />
                            <label>Last name</label>
                            <Form.Control type="text" placeholder="Last name" className='py-2 mb-2'
                                onChange={(e) => setStudentlastName(e.target.value)}
                            />
                            <label>Date of Birth</label>
                            <Form.Control type="date" placeholder="Dob" className='py-2 mb-2'
                                onChange={(e) => setStudentdob(e.target.value)}
                            />
                            <label>Class</label>
                            <Form.Select aria-label="Default select example"
                                onChange={(e) => setStudentclass(e.target.value)} >
                                {
                                    Studentclassinfo?.map((studentclass, i) => (
                                        <option>{studentclass.class}</option>

                                    ))
                                }

                            </Form.Select>

                            <label>Section</label>
                            <Form.Select aria-label="Default select example"
                                onChange={(e) => setStudentsection(e.target.value)} >
                                {
                                    Studentsectioninfo?.map((studentsection, i) => (
                                        <option>{studentsection.section}</option>

                                    ))
                                }

                            </Form.Select>
                            <label>Parent name</label>
                            <Form.Control type="text" placeholder="parent name" className='py-2 mb-2'
                                onChange={(e) => setStudentparentName(e.target.value)}
                            />
                            <label>Pin code</label>
                            <Form.Control type="number" placeholder="Pin code" className='py-2 mb-2'
                                onChange={(e) => setStudentpincode(e.target.value)}
                            />
                            <label>Phone Number</label>
                            <Form.Control type="number" placeholder="Phone number" className='py-2 mb-2'
                                onChange={(e) => setStudentphonenumber(e.target.value)}
                            />
                            <label>Alternate Phone Number</label>
                            <Form.Control type="number" placeholder="Alternate Phone number" className='py-2 mb-2'
                                onChange={(e) => setStudentalternatephonenumber(e.target.value)}
                            />
                            <label>Address</label>
                            <Form.Control type="text" placeholder="Address" className='py-2 mb-2'
                                onChange={(e) => setStudentaddress(e.target.value)}
                            />
                            <label>City</label>
                            <Form.Control type="text" placeholder="city" className='py-2 mb-2'
                                onChange={(e) => setStudentcity(e.target.value)}
                            />
                            <Button variant="primary" type='submit' className='w-100 py-2 my-2' onClick={Addstudent}>
                                Add New Student
                            </Button>
                        </Form>
                    </div>
                </div>

            </div>
        </>
    );
}

export default Managestudentspage;