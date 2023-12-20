import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import './Navbar.css';

const Navbar = () => {
    return (
        <AppBar position="fixed" className='nav' sx={{backgroundColor:'#000'}}>
            <Toolbar>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    Youtube Downloader
                </Typography>
            </Toolbar>
        </AppBar>
    );
};

export default Navbar;
