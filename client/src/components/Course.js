import React, { Fragment } from 'react'
import ReactPlayer from 'react-player'
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import BottomNavigation from './includes/bottom-navigation';


const Course = () => {
    return (
        <Fragment>
                <div class="card booking-card">
                <div class="">
                    <ReactPlayer width="auto" height="300px" controls={true} url='https://www.youtube.com/watch?v=ysz5S6PUM-U' />
                    <a href="#!">
                    <div class="mask rgba-white-slight"></div>
                    </a>
                </div>
                <div class="card-body">
                    <p class="mb-2 text-success float-right">Rs. 14,000/-</p>
                    <h4 class="card-title font-weight-bold"><a>Test Course 1</a></h4>
                    <ul class="list-unstyled list-inline rating mb-0">
                    <li class="list-inline-item mr-0"><i class="fas fa-star amber-text"> </i></li>
                    <li class="list-inline-item mr-0"><i class="fas fa-star amber-text"></i></li>
                    <li class="list-inline-item mr-0"><i class="fas fa-star amber-text"></i></li>
                    <li class="list-inline-item mr-0"><i class="fas fa-star amber-text"></i></li>
                    <li class="list-inline-item"><i class="fas fa-star-half-alt amber-text"></i></li>
                    <li class="list-inline-item"><p class="text-muted">4.5 (413)</p></li>
                    </ul>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
                <Box ml={2} mr={2}>
                    <form method="post" action="https://securegw-stage.paytm.in/theia/api/v1/showPaymentPage?mid=YOUR_MID_HERE&orderId=YOUR_ORDERID_HERE" name="paytm">
                        
                        <input type="hidden" name="mid" value="jGRHgl66206003509623" />
                        <input type="hidden" name="orderId" value="3423JIDS32" />
                        <input type="hidden" name="txnToken" value="JDIS3" />
                        <input type='hidden' name='TXNAMOUNT' value='10' />
                        
                        <Button size="large" type="submit" variant="contained" color="primary">
                            Buy Now
                        </Button>
                    </form>
                </Box>

                <br />
                <br />
                <br />
                <BottomNavigation />
                </div>
        </Fragment>
    )
}

export default Course
