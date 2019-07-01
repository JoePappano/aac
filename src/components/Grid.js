import React, { Component } from 'react'
import { Table, ButtonToolbar, Button, Modal } from "react-bootstrap";
// import Papa from "papaparse";


export class Grid extends Component {

    constructor(props) {
        super(props);
        this.state = { 
            modalShow: false,
        };
      }
    
      
      
    // componentDidMount() {
    //   this.loadListing();
    // }
    
    //  loadListing = (e) => {
    //     CSVToJSON().fromFile("/aacFile.csv").then(source => {
    //         console.log(source);
    //     })  
    //  }

    render() {
        
        let modalClose = () => this.setState({ modalShow: false });

        let csvConverter = () => {
            csvConverter.csvConverter();
        }

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
                            <td>   
                                <ButtonToolbar>
                                    <Button
                                        variant="primary"
                                        onClick={() => this.setState({ modalShow: true })}
                                    >
                                        Launch vertically centered modal
                                    </Button>

                                    <Modal 
                                        size="lg"
                                        show={this.state.modalShow}
                                        onHide={modalClose}
                                    >
                                        
                                        <Modal.Header closeButton>
                                            <Modal.Title id="contained-modal-title-vcenter">
                                            Modal heading
                                            </Modal.Title>
                                        </Modal.Header>
                                        <Modal.Body>
                                            <h4>Centered Modal</h4>
                                            <p>
                                                Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
                                                dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta
                                                ac consectetur ac, vestibulum at eros.
                                            </p>
                                        </Modal.Body>
                                        <Modal.Footer>
                                        <Button onClick={() => this.setState({ modalShow: false })}>Close</Button>
                                        {/* <Button onClick={() => this.setState({ modalShow: false })}>Close</Button> */}
                                        </Modal.Footer>
                                        
                                    </Modal>
                                </ButtonToolbar>
                            </td>
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
                            <td>Larry the Bird</td>
                            <td>@twitter</td>
                            <td> test </td>
                            <td> test </td>
                            <td> test </td>
                            <td> test </td>
                        </tr>
                    </tbody>
                </Table>
                {/* <form method="GET" action="/json">
                    <Button onClick={csvConverter}> Click Me </Button>
                </form> */}
                
                
            </div>
        )
    }
}

export default Grid
