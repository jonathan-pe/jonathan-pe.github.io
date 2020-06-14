import React from 'react';
import SectionHeader from '../components/sectionHeader';
import resume from '../docs/Resume.pdf';
import ListContainer from '../components/listContainer';
import { Button } from '../styles';

export default function Experience() {

    const technologies = ["React", "React Native", "JavaScript (ES6+)", "HTML & CSS", "Node.js", "Java"]

    return (
        <section id="softwareEngineer">
            <SectionHeader text="Software Engineer" />
            <div>
                <p>
                    I'm a Full Stack Software Engineer who loves developing mobile and web applications.
                    However, recently, I've been interested in deeply exploring Front-End development and am starting
                    to learn as much as I can about building aesthetic and highly-functional interfaces.
                </p>
                <p>
                    Technologies I've been working with recently:
                </p>
                <ListContainer items={technologies}/>
                <Button className="outlined" target="_blank" rel="noopener noreferrer" href={resume}>
                    Resumé
                </Button>
            </div>
        </section>
    );
}
