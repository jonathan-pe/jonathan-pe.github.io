import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import animatedLogo from '../images/animatedLogo.svg';

const useStyles = makeStyles((theme) => ({
    music: {
        minHeight: "100vh",
        display: "flex",
        padding: 50,
        justifyContent: "center",
    },
    animatedLogo: {
        height: "auto",
        width: "25%"
      }
}));

export default function Music() {
    const styles = useStyles();
    return (
        <div className={styles.music}>
            <img src={animatedLogo} alt="animated logo" className={styles.animatedLogo} />
        </div>
    );
}
