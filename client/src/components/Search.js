import React from 'react';
import Box from '@material-ui/core/Box';
import BottomNavigation from './includes/bottom-navigation';
import { Form, ListGroup } from 'react-bootstrap';
import Typography from '@material-ui/core/Typography';
import { MDBListGroup, MDBListGroupItem, MDBContainer } from "mdbreact";
const Search = () => {
    return (
        <React.Fragment>
            <Box mt={2} mr={1} ml={1} mb={0} >
                <Form.Group controlId="formBasicEmail">
                    <Form.Control type="search" placeholder="Automation with Python" />
                </Form.Group>
            </Box>
            <Box mt={2} ml={2} mr={2}>
                <Typography variant="h6" component="h6" gutterBottom>
                    <strong>Looking For</strong>
                </Typography>
                <div className="row" >
                    <div className="col" >
                        <div class="card shadow">
                            <div class="card-body">
                                <h5 class="card-title text-center">Physics</h5>
                            </div>
                        </div>
                    </div>
                    <div className="col" >
                        <div class="card shadow">
                            <div class="card-body">
                                <h5 class="card-title text-center">Chemistry</h5>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row mt-2" >
                    <div className="col" >
                        <div class="card shadow">
                            <div class="card-body">
                                <h5 class="card-title text-center">Maths</h5>
                            </div>
                        </div>
                    </div>
                    <div className="col" >
                        <div class="card shadow">
                            <div class="card-body">
                                <h5 class="card-title text-center">History</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </Box>

            <Box mt={2} ml={2} mr={2}>
                <Typography variant="h6" component="h6" gutterBottom>
                    <strong>Recents Search</strong>
                </Typography>
                <MDBListGroup className="shadow" style={{ width: "auto" }}>
                    <MDBListGroupItem href="#">Physics</MDBListGroupItem>
                    <MDBListGroupItem href="#">Maths</MDBListGroupItem>
                    <MDBListGroupItem href="#">Enviormental Science</MDBListGroupItem>
                    <MDBListGroupItem href="#">Social Studies</MDBListGroupItem>
                    <MDBListGroupItem href="#">App Development</MDBListGroupItem>
                </MDBListGroup>
            </Box>
            <br />
            <br />
            <br />
            <BottomNavigation />
        </React.Fragment>
    )
}

export default Search
