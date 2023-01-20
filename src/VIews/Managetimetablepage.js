import React from "react";
import Table from 'react-bootstrap/Table';

export default function Managetimetablepage() {
    return (
        <>
            <div className="content-wrapper ">
                <div >
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

                               
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Monday</td>
                                <td>Maths</td>
                                <td>English</td>
                                <td>Language</td>
                                <td>Science</td>
                                <td>Social science</td>
                                <td>Monday</td>
                                
                                
                               
                            </tr>
                            <tr>
                                <td>Tuesday</td>
                                
                            </tr>
                            <tr>
                                <td>Wednesday</td>
                                
                            </tr>
                            <tr>
                                <td>Thrusday</td>
                                
                            </tr>
                            <tr>
                                <td>Friday</td>
                                
                            </tr>
                            <tr>
                                <td>Saturday</td>
                                
                            </tr>

                        </tbody>
                    </Table>
                </div>
            </div>

        </>
    );

}