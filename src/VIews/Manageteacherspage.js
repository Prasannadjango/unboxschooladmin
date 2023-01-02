
import React, { useState, useEffect } from "react";
import * as FaIcons from "react-icons/fa";
import { Table, Button, Spinner, Form, Modal } from 'react-bootstrap';
import { collection, addDoc, getDocs, updateDoc, doc } from "firebase/firestore";
import { db } from "../firebase-config";
import CircularProgress from '@mui/material/CircularProgress';
import TablePagination from '@mui/material/TablePagination';
import TablePaginationUnstyled, {
    tablePaginationUnstyledClasses as classes,
} from '@mui/base/TablePaginationUnstyled';
import { styled } from '@mui/system';
import SimpleEditable from 'react-bootstrap-simple-editable';
import '/node_modules/react-bootstrap-simple-editable/dist/index.css';
function Manageteacherspage() {
    const [show, setShow] = useState(false);



    const [Teachers, setTeachers] = useState([]);
    // Add teacher form variables

    const [teacherfirstName, setTeacherfirstName] = useState("");
    const [teacherlastName, setTeacherlastName] = useState("");
    const [teacherphonenumber, setTeacherphonenumber] = useState("");
    const [teacherMail, setTeacherMail] = useState("");
    const [teacherDob, setTeacherDob] = useState("");
    const [teacherQualification, setTeacherQualification] = useState("");
    const [teacherExperience, setTeacherExperience] = useState("");
    const [teacherDoj, setTeacherDoj] = useState("");
    const [teacherAddress, setTeacherAddress] = useState("");
    const [teacherFathername, setTeacherFathername] = useState("");
    const [teacherCity, setTeacherCity] = useState("");
    const [teacherPincode, setTeacherPincode] = useState("");

    const [query, setQuery] = useState('');
    const [retrieving, setRetrieving] = useState(false);

    // modal variables

    const [showteacherinfo, setShowteacherinfo] = useState(false);
    const handleClose = () => setShowteacherinfo(false);
    const handleShow = () => setShowteacherinfo(true);


    // const [MyInput, setMyInput] = useState('hi');
    // const [MyInput2, setMyInput2] = useState('hi');


    // const change = event =>{
    //     setMyInput(event.target.value)
    // }

    const search = (data) => {
        return data.filter(
            (item) =>
                item.teacherfirstname.toLowerCase().includes(query) ||
                item.teacherphonenumber.toLowerCase().includes(query) ||
                item.teachercity.toLowerCase().includes(query)
        );
    }
    // Add new teacher

    const Addteacher = async (e) => {
        e.preventDefault();

        try {
            const docRef = await addDoc(collection(db, "Newteacher"), {
                teacherfirstname: teacherfirstName,
                teacherlast: teacherlastName,
                teacherphonenumber: teacherphonenumber,
                teacherAddress: teacherAddress,
                teacherCity: teacherCity,
                teacherDob: teacherDob,
                teacherdateofjoining: teacherDoj,
                teacherexperience: teacherExperience,
                teachermail: teacherMail,
                teacherqualification: teacherQualification,
                teachercity: teacherCity,
                teacherfathername: teacherFathername,
                teacherpincode: teacherPincode

            });
            alert("Document written with ID: ", docRef.id);
        } catch (e) {
            console.error("Error adding document: ", e);
        }
    }
    //  fetch teacher data
    const fetchschooldata = async () => {
        setRetrieving(true)
        await getDocs(collection(db, "Newteacher"))
            .then((querySnapshot) => {
                const newData = querySnapshot.docs
                    .map((doc) => ({ ...doc.data(), id: doc.id }));
                setTeachers(newData);
                console.log(Teachers, newData);
            })
        setTimeout(() => {
            setRetrieving(false)
            setShow(!show);
        }, 1200)

    }

    useEffect(() => {

        fetchschooldata();

    },
        [])


    // pagination varibles
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
        page > 0 ? Math.max(0, (1 + page) * rowsPerPage - Teachers.length) : 0;

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

    function handleUpdate(e) {
        e.preventDefault();

        const examcollref = doc(db, 'Newteacher', "T5hRdgJ9erm7IifyfFYM")
        updateDoc(examcollref, {
            teacherexperience: '1years'
        }).then(response => {
            alert("updated")
        }).catch(error => {
            console.log(error.message)
        })

    }

const [Teacherid,setTeacherid] = useState('');
    return (
        <>
            <div className="content-wrapper d-flex">
                <div className='col-8 me-2'>
                    <div className="app-card">
                        <div className='py-2 d-flex justify-content-between'>
                            <h3>Teachers list</h3>
                            <div className="col-7">

                                <Form.Control type="text" placeholder="Search..."
                                    onChange={e => setQuery(e.target.value)} className='search-bar   ' />

                            </div>
                        </div>
                        <Table className='content-bg'>
                            <thead >
                                <tr >

                                    <th>Name</th>

                                    <th>Phone number</th>

                                    <th>city</th>

                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody className="position-relative tbscrollable">


                                {(rowsPerPage > 0
                                    ? search(Teachers).slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                    : Teachers
                                ).map((row, i) => (
                                    <tr >
                                        <td>{row.teacherfirstname}</td>
                                        <td>{row.teacherphonenumber}</td>
                                        <td>{row.teachercity}</td>

                                        <td>
                                            <Button key={i} className='bg-primary text-white me-3  text-center 'onClick={() => setTeacherid(row.id)} ><FaIcons.FaEdit className="fs-6" onClick={handleShow}/></Button>
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
                                    count={Teachers.length}
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

                    {/* Teacher update data modal */}

                    <Modal show={showteacherinfo} onHide={handleClose} className='app-card'>
                        <Modal.Header closeButton>
                            <Modal.Title>Update Teacher info</Modal.Title>
                        </Modal.Header>



                        <Form>
                           
                            {/* teacher id is : {Teacherid} */}
                            <Button variant="primary" onClick={handleClose}>
                                Save Changes
                            </Button>

                        </Form>


                    </Modal>
                </div>
                <div className="col-4">
                    <div className="app-card overflow-container  p-4">
                        <Form >
                            <h3 className=" py-1"> Add new Teacher</h3>
                            <label>First name</label>
                            <Form.Control type="text" placeholder="First name" className='py-2 my-2'
                                onChange={(e) => setTeacherfirstName(e.target.value)} />
                            <label>Last name</label>
                            <Form.Control type="text" placeholder="Last name" className='py-2 mb-2'
                                onChange={(e) => setTeacherlastName(e.target.value)} />
                            <label>Phone number</label>
                            <Form.Control type="text" placeholder="phone number" className='py-2 mb-2'
                                onChange={(e) => setTeacherphonenumber(e.target.value)} />
                            <label>Email Address</label>
                            <Form.Control type="text" placeholder="Email" className='py-2 mb-2'
                                onChange={(e) => setTeacherMail(e.target.value)} />
                            <label>Date Of Birth</label>
                            <Form.Control type="date" placeholder="DOB" className='py-2 mb-2'
                                onChange={(e) => setTeacherDob(e.target.value)} />
                            <label>Qualification</label>
                            <Form.Control type="text" placeholder="Qualification" className='py-2 mb-2'
                                onChange={(e) => setTeacherQualification(e.target.value)} />
                            <label>Experience</label>
                            <Form.Control type="text" placeholder="Experience" className='py-2 mb-2'
                                onChange={(e) => setTeacherExperience(e.target.value)} />
                            <label>Date of Joining</label>
                            <Form.Control type="date" placeholder="Date of Joining" className='py-2 mb-2'
                                onChange={(e) => setTeacherDoj(e.target.value)} />
                            <label>Address</label>
                            <Form.Control type="text" placeholder="Address" className='py-2 mb-2'
                                onChange={(e) => setTeacherAddress(e.target.value)} />
                            <label>Father/spouse Name</label>
                            <Form.Control type="text" placeholder="Father/spouse Name" className='py-2 mb-2'
                                onChange={(e) => setTeacherFathername(e.target.value)} />
                            <label>City</label>
                            <Form.Control type="text" placeholder="city" className='py-2 mb-2'
                                onChange={(e) => setTeacherCity(e.target.value)} />
                            <label>Pin-code</label>
                            <Form.Control type="number" placeholder="pin code" className='py-2 mb-2'
                                onChange={(e) => setTeacherPincode(e.target.value)} />


                            <Button variant="primary" type='submit' className='w-100 py-2 my-2' onClick={Addteacher}>
                                Add New teacher
                            </Button>

                        </Form>
                    </div>
                </div>

            </div>

        </>
    );
}

export default Manageteacherspage;