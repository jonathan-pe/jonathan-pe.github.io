import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    resume: {
        minHeight: "100vh",
        display: "flex",
        padding: 50,
        justifyContent: "center"
    },
}));

export default function Resume() {
    const styles = useStyles();
    return (
        <section className={styles.resume}>
            Resume
        </section>
    );
}
