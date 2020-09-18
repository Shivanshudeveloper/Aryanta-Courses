import React, { Fragment } from 'react';
import Box from '@material-ui/core/Box';
import { MDBListGroup, MDBListGroupItem } from "mdbreact";
import BottomNavigation from './includes/bottom-navigation';
import Typography from '@material-ui/core/Typography';

const Notifications = () => {
    return (
        <Fragment>
            <Box mt={2} ml={1} mr={1}>
                <Typography variant="h5" gutterBottom>
                    <span className="font-weight-bold">Notifications
                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                        width="30" height="30"
                        viewBox="0 0 172 172"
                        ><g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none"><path d="M0,172v-172h172v172z" fill="none"></path><g fill="#3498db"><path d="M86,14.33333c-5.934,0 -10.75,4.816 -10.75,10.75v4.98307c-18.54017,4.78017 -32.25,21.56943 -32.25,41.60026v43l-14.33333,14.33333v7.16667h114.66667v-7.16667l-14.33333,-14.33333v-43c0,-20.03083 -13.70983,-36.8061 -32.25,-41.58626v-4.99707c0,-5.934 -4.816,-10.75 -10.75,-10.75zM71.66667,143.33333c0,7.91917 6.42133,14.33333 14.33333,14.33333c7.912,0 14.33333,-6.42133 14.33333,-14.33333z"></path></g></g></svg>
                    </span>
                </Typography>
                <MDBListGroup className="shadow" style={{ width: "auto" }}>
                    <MDBListGroupItem  href="#" hover>
                        Notification 1
                    </MDBListGroupItem>
                    <MDBListGroupItem  href="#" hover>
                        Notification 2
                    </MDBListGroupItem>
                    <MDBListGroupItem  href="#" hover>
                        Notification 3
                    </MDBListGroupItem>
                    <MDBListGroupItem  href="#" hover>
                        Notification 4
                    </MDBListGroupItem>
                    <MDBListGroupItem  href="#" hover>
                        Notification 5
                    </MDBListGroupItem>
                    <MDBListGroupItem  href="#" hover>
                        Notification 6
                    </MDBListGroupItem>
                    <MDBListGroupItem  href="#" hover>
                        Notification 7
                    </MDBListGroupItem>
                    <MDBListGroupItem  href="#" hover>
                        Notification 8
                    </MDBListGroupItem>
                    <MDBListGroupItem  href="#" hover>
                        Notification 9
                    </MDBListGroupItem>
                </MDBListGroup>

                <br />
                <br />
                <br />
                <BottomNavigation />
            </Box>
        </Fragment>
    )
}

export default Notifications