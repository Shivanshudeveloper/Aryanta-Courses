import React from 'react';
import Badge from '@material-ui/core/Badge';
import HomeIcon from '@material-ui/icons/Home';
import NotificationsIcon from '@material-ui/icons/Notifications';
import SettingsIcon from '@material-ui/icons/Settings';
import { Link } from 'react-router-dom';
import SearchIcon from '@material-ui/icons/Search';

export default function ButtonAppBar() {
  return (
    <div className="fixed-bottom">
        <nav class="navbar navbar-dark bg-primary p-3">
            <div className="float-left">
                <Link to="/home">
                    <HomeIcon style={{ fontSize: 30, color: 'white' }} />
                </Link>
            </div>
            <div className="float-right">
                <Link to="/search">
                    <SearchIcon style={{ fontSize: 30, color: 'white' }} />
                </Link>
            </div>
            <div className="float-right">
                <Link to="/notification">
                    <NotificationsIcon style={{ fontSize: 30, color: 'white' }} />
                </Link>
            </div>
            <div style={{ float: 'right' }}>
                <Link to="/setting">
                <SettingsIcon style={{ fontSize: 30, color: 'white' }} />
                </Link>
            </div>
        </nav>  
    </div>
  );
}
