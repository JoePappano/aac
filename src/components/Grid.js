import React, { Component } from 'react'
import { Table } from "react-bootstrap"

export class Grid extends Component {
    render() {
        return (
            <div>
                <h1> This is the Grid </h1>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>Kennel</th>
                            <th>Dog</th>
                            <th>AID</th>
                            <th>PG?</th>
                            <th>Walk History</th>
                            <th>Dot</th>
                            <th>Notes</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                            <td> test </td>
                            <td> test </td>
                            <td> test </td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>Jacob</td>
                            <td>Thornton</td>
                            <td>@fat</td>
                            <td> test </td>
                            <td> test </td>
                            <td> test </td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td colSpan="2">Larry the Bird</td>
                            <td>@twitter</td>
                            <td> test </td>
                            <td> test </td>
                            <td> test </td>
                        </tr>
                    </tbody>
                    </Table>
            </div>
        )
    }
}

export default Grid
