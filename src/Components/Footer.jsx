import { AppBar, Toolbar, Typography } from '@mui/material';
import './Footer.css';

const Footer = () => {
    return (
        <div className='footer'>
            <Typography variant="body1" color="inherit" font-size="small">
                © 2024 <a href="https://www.linkedin.com/in/osama-mousa-%F0%9F%87%B5%F0%9F%87%B8-568364209/" target="_blank">OSS</a> All rights reserved.
            </Typography>
        </div>
    );
};

export default Footer;