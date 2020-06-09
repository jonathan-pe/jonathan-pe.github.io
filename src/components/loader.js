import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import animatedLogo from '../images/animatedLogo.svg';

const useStyles = makeStyles((theme) => ({
    loader: {
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
    },
    animatedLogo: {
        height: "auto",
        width: "25%"
    }
}));

export default function Loader({ finishLoading }) {
    const styles = useStyles();

    useEffect(() => {
        setTimeout(() => {
            finishLoading()
        }, 3200);
    })

    return (
        <div className={styles.loader}>
            <object type="image/svg+xml" aria-label="animated logo" data={animatedLogo} alt="animated logo" className={styles.animatedLogo} />
        </div>
    );
}
