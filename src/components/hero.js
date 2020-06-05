import React from 'react';
import colors from '../config/colors';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    hero: {
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        paddingTop: 200,
        paddingLeft: 250
    },
      
    greeting: {
        color: colors.blue,
        fontSize: 20,
    },
      
    header: {
        fontSize: 100,
        color: colors.white,
    },
      
    subtitle: {
        fontSize: 50,
        color: colors.dirtyWhite,
    },
      
    caption: {
        fontSize: 25,
    }
}));

export default function Hero() {
    const styles = useStyles();

    return (
        <div className={styles.hero}>
            <div className={styles.greeting}>Hi there! I'm</div>
            <div className={styles.header}>Jonathan Pe</div>
            <div className={styles.subtitle}>and I like to code!</div>
        </div>
    );
}
