import { AppBar, Toolbar, Typography } from '@mui/material';
import './Footer.css';

const Footer = () => {
    return (
        <div className='footer'>
            <Typography variant="body1" color="inherit">
                © 2024 OSS All rights reserved.
            </Typography>
        </div>
    );
};

export default Footer;