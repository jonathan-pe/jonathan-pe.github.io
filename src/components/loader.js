import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import animatedLogo from '../images/animatedLogo.svg';

const useStyles = makeStyles((theme) => ({
    loader: {
        minHeight: "100%",
        display: "flex",
        justifyContent: "center",
    },
    animatedLogo: {
        height: "auto",
        width: "25%"
    }
}));

export default function Loader() {
    const styles = useStyles();
    return (
        <div className={styles.loader}>
            <img src={animatedLogo} alt="animated logo" className={styles.animatedLogo} />
        </div>
    );
}
