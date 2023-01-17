import React, { useState, useContext } from "react";
import { Button, ButtonGroup, FormControl } from "react-bootstrap";


export default function Managesettingspage() {


    return (
        <>
            <div className="w-100 content-wrapper">
                <div className="col-10 me-2">
                    <div className="app-card">
                        <div className='p-3 col-8 '>
                            <h3>Reset Password</h3>
                            <form className="my-3">
                                <label >old Password:</label>
                                <FormControl type='text' className="py-2 my-2"/>
                                <label >Re-enter old Password:</label>
                                <FormControl type='text' className="py-2 my-2"/>
                                <label >New Password:</label>
                                <FormControl type='text' className="py-2 my-2"/>
                                <Button className="mt-3">Change Password</Button>
                            </form>
                        </div>
                    </div>

                </div>



            </div>
        </>
    );
}