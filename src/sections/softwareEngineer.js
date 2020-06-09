import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import SectionHeader from '../components/sectionHeader';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import resume from '../docs/Resume.pdf';
import Link from '@material-ui/core/Link';
import constants from '../config/constants';
import ListContainer from '../components/listContainer';

const useStyles = makeStyles((theme) => ({
    resumeButton: {
        marginTop: 20
    },
    container: {
        "& ul": {
            gridTemplateColumns: "repeat(2, minmax(140px, 200px));",
        }
    }
}));

export default function Experience() {
    const styles = useStyles();

    const technologies = ["React", "React Native", "JavaScript (ES6+)", "HTML & CSS", "Node.js", "Java"]

    return (
        <section id="softwareEngineer">
            <SectionHeader text="Software Engineer" />
            <div className={"flexBetween"}>
                <div className={styles.container}>
                    <Typography paragraph={true}>
                    </Typography>
                    <Typography paragraph={true}>
                        I'm a Full Stack Software Engineer who loves developing mobile and web applications.
                        However, recently, I've been interested in deeply exploring Front-End development and am starting
                        to learn as much as I can about building beautiful and highly-functional interfaces.
                    </Typography>
                    <Typography paragraph={true}>
                        Technologies I've been working with recently:
                    </Typography>
                    <ListContainer items={technologies}/>
                    <Button variant="outlined" target="_blank" rel="noopener noreferrer" className={styles.resumeButton} href={resume}>
                        Resumé
                    </Button>
                </div>
            </div>
        </section>
    );
}
