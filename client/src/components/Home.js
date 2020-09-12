import React, { Fragment } from 'react';
import BottomNavigation from './includes/bottom-navigation';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import ReactPlayer from 'react-player'
import { Link } from 'react-router-dom';
const useStyles = makeStyles((theme) => ({
    root: {
      maxWidth: 1000,
    },
    media: {
      height: 0,
      paddingTop: '56.25%', // 16:9
    },
    expand: {
      transform: 'rotate(0deg)',
      marginLeft: 'auto',
      transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
      }),
    },
    expandOpen: {
      transform: 'rotate(180deg)',
    },
    avatar: {
      backgroundColor: red[500],
    },
}));

const Home = () => {
    const classes = useStyles();
    return (
        <Fragment>
            <Box mt={2} ml={2} mr={2}>
                <Typography variant="h5" component="h2" gutterBottom>
                    <strong>Welcome Shivanshu Gupta</strong>
                </Typography>

                <Typography variant="h6" component="h6" gutterBottom>
                    <strong>Courses</strong>
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
                <hr />
                <Typography variant="h6" component="h6" gutterBottom>
                    <strong>Recents</strong>
                </Typography>


                <div class="card">
                    <div class="card-body">
                        <ReactPlayer width="auto" height="200px" controls={true} url='https://www.youtube.com/watch?v=ysz5S6PUM-U' />
                        <h4 class="card-title text-center p-2">
                            <Link style={{ textDecoration: 'none', color: 'black' }} to="/course" >
                                Test Course 1
                            </Link>
                        </h4>
                    </div>
                </div>

                <div class="card mt-2">
                    <div class="card-body">
                        <ReactPlayer width="auto" height="200px" controls={true} url='https://www.youtube.com/watch?v=ysz5S6PUM-U' />
                        <h4 class="card-title text-center p-2">
                            <Link style={{ textDecoration: 'none', color: 'black' }} to="/course" >
                                Test Course 2
                            </Link>
                        </h4>
                    </div>
                </div>

                <div class="card mt-2">
                    <div class="card-body">
                        <ReactPlayer width="auto" height="200px" controls={true} url='https://www.youtube.com/watch?v=ysz5S6PUM-U' />
                        <h4 class="card-title text-center p-2">
                            <Link style={{ textDecoration: 'none', color: 'black' }} to="/course" >
                                Test Course 3
                            </Link>
                        </h4>
                    </div>
                </div>

                <div class="card mt-2">
                    <div class="card-body">
                        <ReactPlayer width="auto" height="200px" controls={true} url='https://www.youtube.com/watch?v=ysz5S6PUM-U' />
                        <h4 class="card-title text-center p-2">
                            <Link style={{ textDecoration: 'none', color: 'black' }} to="/course" >
                                Test Course 4
                            </Link>
                        </h4>
                    </div>
                </div>



            </Box>
            <br />
            <br />
            <br />
            <BottomNavigation />
        </Fragment>
    )
}

export default Home
