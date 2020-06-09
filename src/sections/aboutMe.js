import React from 'react';
import colors from '../config/colors';
import constants from '../config/constants';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Fade from '@material-ui/core/Fade';
import Typography from '@material-ui/core/Typography';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Link from '@material-ui/core/Link';

const useStyles = makeStyles((theme) => ({
    aboutMe: {
        minHeight: "100vh",
        flexDirection: "column",
        alignItems: "flex-start",
        WebkitBoxPack: "center",
        WebkitBoxAlign: "center",
    },
    greeting: {
        color: colors.blue,
        fontSize: 20,
        fontWeight: "normal",
        fontFamily: "'Courier New', Courier, monospace",
        margin: "0px 0px 10px 2px"
    },
    header: {
        margin: "0px 0px 10px 0px"
    },
    subtitle: {
        color: colors.grey,
        margin: 0
    },
    caption: {
        margin: "60px 0px 60px 0px",
        width: "75%",
        maxWidth: 600
    },
    menuItem: {
        margin: 0,
        padding: 0,
        "&::before": {
            content: '""'
        }
    }
}));

export default function AboutMe() {
    const styles = useStyles();

    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const greeting = (
        <Typography variant="h1" className={styles.greeting}>Hi there! I'm</Typography>
    );
    const header = (
        <Typography variant="h2" className={styles.header}>Jonathan Pe.</Typography>
    );
    const subtitle = (
        <Typography variant="h3" className={styles.subtitle}>I like coding, gaming and DJing.</Typography>
    );
    const caption = (
        <Typography className={styles.caption}>I'm a Software Engineer based in San Francisco, CA
            interested in web & mobile development. I also enjoy playing video games and DJing!
        </Typography>
    );
    const contactButton = (
        <div>
            <Button aria-controls="email-menu" aria-haspopup="true" variant="outlined" onClick={handleClick}>
                Contact Me
            </Button>
            <Menu id="email-menu" anchorEl={anchorEl} keepMounted open={Boolean(anchorEl)} onClose={handleClose}>
                <MenuItem disableGutters={true} onClick={handleClose}>
                    <Link className={styles.menuItem} href={`mailto:${constants.personalEmail}`}>Business Inquiries</Link>
                </MenuItem>
                <MenuItem disableGutters={true} onClick={handleClose}>
                    <Link className={styles.menuItem} href={`mailto:${constants.musicEmail}`}>Music/DJ Inquiries</Link>
                </MenuItem>
            </Menu>
        </div>
        
    );

    const content = [greeting, header, subtitle, caption, contactButton];

    return (
        <section className={styles.aboutMe + " flexCenter"} id="aboutMe">
            {content.map((item, i) => (
                <Fade in={true} key={i} timeout={500} style={{ transitionDelay: 1000 + i * 100 }}>
                    {item}
                </Fade>
            ))}
        </section>
    );
}
