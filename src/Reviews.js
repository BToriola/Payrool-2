import React, { useState, useEffect } from 'react'
import Navbar from './Navbar'
import Footer from'./footer'

const Reviews = () => {

    const [isgoing, setIsgoing] = useState('')

    const handleInputChange = (event) => {
        const target = event.target;
        const value = target.name === 'isgoing' ? target.checked : target.value;
        const name = target.name;

        setIsgoing({ [name]: value })
    }
    return (
        <div>
            <Navbar />
            <div className='container'>
                <h2>Reviews & Approvals</h2>
                <div class="table-responsive">
                    <table class="table table-striped table-sm">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Firstname</th>
                                <th>Lastname</th>
                                <th>Department</th>
                                <th>Approval</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1,001</td>
                                <td>Lorem</td>
                                <td>ipsum</td>
                                <td>dolor</td>
                                <td><input
                                    name="isGoing"
                                    type="checkbox"
                                    checked={isgoing}
                                    onChange={handleInputChange} /></td>
                            </tr>
                            <tr>
                                <td>1,002</td>
                                <td>amet</td>
                                <td>consectetur</td>
                                <td>adipiscing</td>
                                <td><input
                                    name="isGoing"
                                    type="checkbox"
                                    checked={isgoing}
                                    onChange={handleInputChange} /></td>
                            </tr>
                            <tr>
                                <td>1,003</td>
                                <td>Integer</td>
                                <td>nec</td>
                                <td>odio</td>
                                <td><input
                                    name="isGoing"
                                    type="checkbox"
                                    checked={isgoing}
                                    onChange={handleInputChange} /></td>
                            </tr>


                            <tr>
                                <td>1,007</td>
                                <td>sagittis</td>
                                <td>ipsum</td>
                                <td>Praesent</td>
                                <td><input
                                    name="isGoing"
                                    type="checkbox"
                                    checked={isgoing}
                                    onChange={handleInputChange} /></td>
                            </tr>
                            <tr>
                                <td>1,008</td>
                                <td>Fusce</td>
                                <td>nec</td>
                                <td>tellus</td>
                                <td><input
                                    name="isGoing"
                                    type="checkbox"
                                    checked={isgoing}
                                    onChange={handleInputChange} /></td>
                            </tr>
                            <tr>
                                <td>1,009</td>
                                <td>augue</td>
                                <td>semper</td>
                                <td>porta</td>
                                <td><input
                                    name="isGoing"
                                    type="checkbox"
                                    checked={isgoing}
                                    onChange={handleInputChange} /></td>
                            </tr>

                            <tr>
                                <td>1,013</td>
                                <td>torquent</td>
                                <td>per</td>
                                <td>conubia</td>
                                <td><input
                                    name="isGoing"
                                    type="checkbox"
                                    checked={isgoing}
                                    onChange={handleInputChange} /></td>
                            </tr>
                            <tr>
                                <td>1,014</td>
                                <td>per</td>
                                <td>inceptos</td>
                                <td>himenaeos</td>
                                <td><input
                                    name="isGoing"
                                    type="checkbox"
                                    checked={isgoing}
                                    onChange={handleInputChange} /></td>
                            </tr>
                            <tr>
                                <td>1,015</td>
                                <td>sodales</td>
                                <td>ligula</td>
                                <td>in</td>
                                <td><input
                                    name="isGoing"
                                    type="checkbox"
                                    checked={isgoing}
                                    onChange={handleInputChange} /></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default Reviews
