import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    aboutMe: {
        minHeight: "100vh",
        display: "flex",
        padding: 50,
        justifyContent: "center"
    },
}));

export default function AboutMe() {
    const styles = useStyles();
    return (
        <section className={styles.aboutMe} id="aboutMe">
            About Me
        </section>
    );
}
