import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    experience: {
        minHeight: "100vh",
        display: "flex",
        padding: 50,
        justifyContent: "center"
    },
}));

export default function Experience() {
    const styles = useStyles();
    return (
        <section className={styles.experience} id="experience">
            Experience
        </section>
    );
}
