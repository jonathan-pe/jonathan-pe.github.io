import React from 'react';
import colors from '../config/colors';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    hero: {
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        margin: "0 auto",
        padding: "150px 0",
        justifyContent: "center",
        maxWidth: 1000,
        WebkitBoxPack: "center",
        WebkitBoxAlign: "center"
    },
      
    greeting: {
        width: "100%",
        color: colors.blue,
        fontSize: 20,
        fontWeight: "normal",
        fontFamily: "'Courier New', Courier, monospace",
        margin: "0px 0px 10px 2px"
    },
      
    header: {
        fontSize: 100,
        width: "100%",
        color: colors.white,
        margin: "0px 0px 10px 0px"
    },
      
    subtitle: {
        width: "100%",
        fontSize: 50,
        color: colors.grey,
        margin: 0
    },

    caption: {
        fontSize: 18,
        color: colors.grey,
        margin: "50px 0px 0px 0px",
        width: "50%"
    },

    twitchLink: {
        color: colors.blue,
        textDecoration: "none"
    }
}));

export default function Hero() {
    const styles = useStyles();

    return (
        <section className={styles.hero}>
            <h1 className={styles.greeting}>Hi there! I'm</h1>
            <h2 className={styles.header}>Jonathan Pe.</h2>
            <h3 className={styles.subtitle}>I like coding, gaming and DJing.</h3>
            <div className={styles.caption}>I'm a Software Engineer based in San Francisco, CA 
            with interests in web & mobile development. 
            I also enjoy playing video games and DJing 
            on <a href="https://twitch.tv/jpeeeeeeeeeeee" target="_blank" rel="noopener noreferrer" className={styles.twitchLink}>Twitch</a>!
            </div>
        </section>
    );
}
