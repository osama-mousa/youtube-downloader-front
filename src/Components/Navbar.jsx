import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import './Navbar.css';
import reactLogo from '../assets/Hacker.png';

const Navbar = () => {
    return (
        <AppBar className='nav' sx={{ backgroundColor: '#000' }}>
            <Toolbar>
                <img src={reactLogo} alt="React Logo" style={{ width: '40px', marginRight: '10px' }} />
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    Youtube Downloader
                </Typography>
            </Toolbar>
            <p className='PsStand'>I stand with Palestine 🇵🇸 </p>
        </AppBar>
    );
};

export default Navbar;
