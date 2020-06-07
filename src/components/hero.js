import React from 'react';
import colors from '../config/colors';
import constants from '../config/constants';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Slide from '@material-ui/core/Slide';

const useStyles = makeStyles((theme) => ({
    hero: {
        minHeight: "100vh",
        flexDirection: "column",
        alignItems: "flex-start",
        WebkitBoxPack: "center",
        WebkitBoxAlign: "center"
    },
    greeting: {
        color: colors.blue,
        fontSize: 20,
        fontWeight: "normal",
        fontFamily: "'Courier New', Courier, monospace",
        margin: "0px 0px 10px 2px"
    },
    header: {
        fontSize: 80,
        color: colors.white,
        margin: "0px 0px 10px 0px"
    },
    subtitle: {
        fontSize: 50,
        color: colors.grey,
        margin: 0
    },
    caption: {
        fontSize: 18,
        color: colors.grey,
        margin: "60px 0px 60px 0px",
        width: "75%",
        maxWidth: 600
    },
    twitchLink: {
        color: colors.blue,
        textDecoration: "none"
    },
}));

export default function Hero() {
    const styles = useStyles();

    const greeting = (
        <h1 className={styles.greeting}>Hi there! I'm</h1>
    );
    const header = (
        <h2 className={styles.header}>Jonathan Pe.</h2>
    );
    const subtitle = (
        <h3 className={styles.subtitle}>I like coding, gaming and DJing.</h3>
    );
    const caption = (
        <div className={styles.caption}>I'm a Software Engineer based in San Francisco, CA
            with interests in web & mobile development. I also enjoy playing video games and DJing
            on <a href={constants.twitchLink} target="_blank" rel="noopener noreferrer">Twitch</a>!
        </div>
    );
    const contactButton = (
        <Button variant="outlined" href={`mailto:${constants.personalEmail}`}>
            Contact Me
        </Button>
    );

    const heroContent = [greeting, header, subtitle, caption, contactButton];

    return (
        <section className={styles.hero + " flexCenter"} id="hero">
            {heroContent.map((item, i) => (
                <Slide direction="right" in={true} key={i} timeout={300} style={{ transitionDelay: 1000 + i * 100}}>
                    {item}
                </Slide>
            ))}
        </section>
    );
}
