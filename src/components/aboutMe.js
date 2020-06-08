import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import SectionHeader from './sectionHeader';

const useStyles = makeStyles((theme) => ({
    aboutMe: {
        alignItems: "flex-start"
    },
}));

export default function AboutMe() {
    const styles = useStyles();
    return (
        <section id="aboutMe">
            <div className={styles.aboutMe + " flexBetween"}>
                <SectionHeader text="About Me" />
            </div>
        </section>
    );
}
