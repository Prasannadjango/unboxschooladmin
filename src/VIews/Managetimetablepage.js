import React, { useRef, useState } from "react";
import Table from 'react-bootstrap/Table';

export default function Managetimetablepage() {
    const nameRef = useRef(null);
    const LocationRef = useRef(null);

    const [Name, setName] = useState('Maths');
    const [Location, setLocation] = useState('English');
    const[Science,setScience] = useState('Science');
    const[Maths,setMaths] = useState('Maths');
    const[History,setHistory] = useState('History');
    const[Language,setLanguage] = useState('Langauge');


    const [isEditing, setIsEditing] = useState(false);

    const handleEdit = () => {
        setIsEditing(true);
    };

    const handleSave = () => {
        setIsEditing(false);
        setName(nameRef.current.value);
        setLocation(LocationRef.current.value);
    };
    return (
        <>
            <div className="content-wrapper ">
                <div className="app-card">
                    <Table className="text-white">
                        <thead>
                            <tr>
                                <th>Days</th>
                                <th>9:00 - 10:00</th>
                                <th>10:00 - 11:00</th>
                                <th>12:00 - 1:00</th>
                                <th>1:00 - 2:00</th>
                                <th>2:00 - 3:00</th>
                                <th>3:00 - 4:00</th>
                                <th>Actions</th>


                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Monday</td>
                                {isEditing ? (
                                    <>
                                        <td >
                                            <input type="text " className='form-control border w-100' defaultValue={Name} ref={nameRef} />
                                        </td>
                                        <td>
                                            <input type="text"  className='form-control border w-100' defaultValue={Location} ref={LocationRef} />
                                        </td>
                                        <td>
                                            <input type="text"  className='form-control border w-100' defaultValue={Maths} />
                                        </td>
                                        <td>
                                            <input type="text"  className='form-control border w-100' defaultValue={Language}  />
                                        </td>
                                        <td>
                                            <input type="text"  className='form-control border w-100' defaultValue={Language}  />
                                        </td>
                                        <td>
                                            <input type="text"  className='form-control border w-100' defaultValue={History}  />
                                        </td>
                                       
                                         <td>
                                         <button className='btn btn-success' onClick={handleSave}>Save</button>
                                         </td>
                                        
                                    </>
                                ) : (
                                    <>
                                        <td>{Name}</td>
                                        <td>{Location}</td>
                                        <td>{Maths}</td>
                                       <td>{Science}</td>
                                        <td>{Language}</td>
                                        <td>{History}</td>

                                        <td>
                                            <button className='btn btn-primary'  onClick={handleEdit}>Edit</button>
                                        </td>
                                    </>
                                )}



                            </tr>
                            <tr>
                                <td>Tuesday</td>
                                {isEditing ? (
                                    <>
                                        <td >
                                            <input type="text " className='form-control border w-100' defaultValue={Name} ref={nameRef} />
                                        </td>
                                        <td>
                                            <input type="text"  className='form-control border w-100' defaultValue={Location} ref={LocationRef} />
                                        </td>
                                        <td>
                                            <input type="text"  className='form-control border w-100' defaultValue={Maths} />
                                        </td>
                                        <td>
                                            <input type="text"  className='form-control border w-100' defaultValue={Language}  />
                                        </td>
                                        <td>
                                            <input type="text"  className='form-control border w-100' defaultValue={Language}  />
                                        </td>
                                        <td>
                                            <input type="text"  className='form-control border w-100' defaultValue={History}  />
                                        </td>
                                       
                                         <td>
                                         <button className='btn btn-success' onClick={handleSave}>Save</button>
                                         </td>
                                        
                                    </>
                                ) : (
                                    <>
                                        <td>{Name}</td>
                                        <td>{Location}</td>
                                        <td>{Maths}</td>
                                       <td>{Science}</td>
                                        <td>{Language}</td>
                                        <td>{History}</td>

                                        <td>
                                            <button className='btn btn-primary'  onClick={handleEdit}>Edit</button>
                                        </td>
                                    </>
                                )}


                            </tr>
                            <tr>
                                <td>Wednesday</td>
                                {isEditing ? (
                                    <>
                                        <td >
                                            <input type="text " className='form-control border w-100' defaultValue={Name} ref={nameRef} />
                                        </td>
                                        <td>
                                            <input type="text"  className='form-control border w-100' defaultValue={Location} ref={LocationRef} />
                                        </td>
                                        <td>
                                            <input type="text"  className='form-control border w-100' defaultValue={Maths} />
                                        </td>
                                        <td>
                                            <input type="text"  className='form-control border w-100' defaultValue={Language}  />
                                        </td>
                                        <td>
                                            <input type="text"  className='form-control border w-100' defaultValue={Language}  />
                                        </td>
                                        <td>
                                            <input type="text"  className='form-control border w-100' defaultValue={History}  />
                                        </td>
                                       
                                         <td>
                                         <button className='btn btn-success' onClick={handleSave}>Save</button>
                                         </td>
                                        
                                    </>
                                ) : (
                                    <>
                                        <td>{Name}</td>
                                        <td>{Location}</td>
                                        <td>{Maths}</td>
                                       <td>{Science}</td>
                                        <td>{Language}</td>
                                        <td>{History}</td>

                                        <td>
                                            <button className='btn btn-primary'  onClick={handleEdit}>Edit</button>
                                        </td>
                                    </>
                                )}


                            </tr>
                            <tr>
                                <td>Thrusday</td>
                                {isEditing ? (
                                    <>
                                        <td >
                                            <input type="text " className='form-control border w-100' defaultValue={Name} ref={nameRef} />
                                        </td>
                                        <td>
                                            <input type="text"  className='form-control border w-100' defaultValue={Location} ref={LocationRef} />
                                        </td>
                                        <td>
                                            <input type="text"  className='form-control border w-100' defaultValue={Maths} />
                                        </td>
                                        <td>
                                            <input type="text"  className='form-control border w-100' defaultValue={Language}  />
                                        </td>
                                        <td>
                                            <input type="text"  className='form-control border w-100' defaultValue={Language}  />
                                        </td>
                                        <td>
                                            <input type="text"  className='form-control border w-100' defaultValue={History}  />
                                        </td>
                                       
                                         <td>
                                         <button className='btn btn-success' onClick={handleSave}>Save</button>
                                         </td>
                                        
                                    </>
                                ) : (
                                    <>
                                        <td>{Name}</td>
                                        <td>{Location}</td>
                                        <td>{Maths}</td>
                                       <td>{Science}</td>
                                        <td>{Language}</td>
                                        <td>{History}</td>

                                        <td>
                                            <button className='btn btn-primary'  onClick={handleEdit}>Edit</button>
                                        </td>
                                    </>
                                )}


                            </tr>
                            <tr>
                                <td>Friday</td>
                                {isEditing ? (
                                    <>
                                        <td >
                                            <input type="text " className='form-control border w-100' defaultValue={Name} ref={nameRef} />
                                        </td>
                                        <td>
                                            <input type="text"  className='form-control border w-100' defaultValue={Location} ref={LocationRef} />
                                        </td>
                                        <td>
                                            <input type="text"  className='form-control border w-100' defaultValue={Maths} />
                                        </td>
                                        <td>
                                            <input type="text"  className='form-control border w-100' defaultValue={Language}  />
                                        </td>
                                        <td>
                                            <input type="text"  className='form-control border w-100' defaultValue={Language}  />
                                        </td>
                                        <td>
                                            <input type="text"  className='form-control border w-100' defaultValue={History}  />
                                        </td>
                                       
                                         <td>
                                         <button className='btn btn-success' onClick={handleSave}>Save</button>
                                         </td>
                                        
                                    </>
                                ) : (
                                    <>
                                        <td>{Name}</td>
                                        <td>{Location}</td>
                                        <td>{Maths}</td>
                                       <td>{Science}</td>
                                        <td>{Language}</td>
                                        <td>{History}</td>

                                        <td>
                                            <button className='btn btn-primary'  onClick={handleEdit}>Edit</button>
                                        </td>
                                    </>
                                )}


                            </tr>
                            <tr>
                                <td>Saturday</td>
                                {isEditing ? (
                                    <>
                                        <td >
                                            <input type="text " className='form-control border w-100' defaultValue={Name} ref={nameRef} />
                                        </td>
                                        <td>
                                            <input type="text"  className='form-control border w-100' defaultValue={Location} ref={LocationRef} />
                                        </td>
                                        <td>
                                            <input type="text"  className='form-control border w-100' defaultValue={Maths} />
                                        </td>
                                        <td>
                                            <input type="text"  className='form-control border w-100' defaultValue={Language}  />
                                        </td>
                                        <td>
                                            <input type="text"  className='form-control border w-100' defaultValue={Language}  />
                                        </td>
                                        <td>
                                            <input type="text"  className='form-control border w-100' defaultValue={History}  />
                                        </td>
                                       
                                         <td>
                                         <button className='btn btn-success' onClick={handleSave}>Save</button>
                                         </td>
                                        
                                    </>
                                ) : (
                                    <>
                                        <td>{Name}</td>
                                        <td>{Location}</td>
                                        <td>{Maths}</td>
                                       <td>{Science}</td>
                                        <td>{Language}</td>
                                        <td>{History}</td>

                                        <td>
                                            <button className='btn btn-primary'  onClick={handleEdit}>Edit</button>
                                        </td>
                                    </>
                                )}


                            </tr>

                        </tbody>
                    </Table>
                </div>
            </div>

        </>
    );

}