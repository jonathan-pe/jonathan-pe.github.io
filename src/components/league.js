import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    league: {
        minHeight: "100vh",
        display: "flex",
        padding: 50,
        justifyContent: "center"
    },
}));

export default function League() {
    const styles = useStyles();
    return (
        <div className={styles.league}>
            League
        </div>
    );
}
