import React, { Fragment } from 'react';
import BottomNavigation from './includes/bottom-navigation';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';
import { red } from '@material-ui/core/colors';
import ReactPlayer from 'react-player'
import { Link } from 'react-router-dom';
import Sliding from './includes/Sliding';
import MultipleSliding from './includes/MultipleSliding';

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
            <Box mt={1} mr={0} ml={0} mb={2} >
                <Sliding />
            </Box>
            <Box mt={4} mr={1} ml={1} mb={0} >
                <h4 className="font-weight-bold">
                    Recents Watch
                </h4>
            </Box>
            <Box mt={1} mr={0} ml={0} mb={2} >
                <MultipleSliding />
            </Box>
            <Box mt={4} mr={1} ml={1} mb={0} >
                <h4 className="font-weight-bold">
                    Physics Courses
                </h4>
            </Box>
            <Box mt={1} mr={0} ml={0} mb={2} >
                <MultipleSliding />
            </Box>
            <Box mt={4} mr={1} ml={1} mb={0} >
                <h4 className="font-weight-bold">
                    Chemistry Courses
                </h4>
            </Box>
            <Box mt={1} mr={0} ml={0} mb={2} >
                <MultipleSliding />
            </Box>
            <br />
            <br />
            <br />
            <BottomNavigation />
        </Fragment>
    )
}

export default Home
