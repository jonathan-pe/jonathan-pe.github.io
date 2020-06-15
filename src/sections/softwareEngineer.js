import React from 'react';
import styled from 'styled-components';
import SectionHeader from '../components/sectionHeader';
import resume from '../docs/Resume.pdf';
import ListContainer from '../components/listContainer';
import { Link } from '../styles';
import constants from '../config/constants';

const StyledLink = styled(Link)`
    display: inline-block;
    margin-top: 20px;
`;

export default function Experience() {
    return (
        <section id="softwareEngineer">
            <SectionHeader text="Software Engineer" />
            <div>
                <p>
                    I'm a Full Stack Software Engineer who loves developing mobile and web applications.
                    However, recently, I've been interested in deeply exploring Front-End development and am starting
                    to learn as much as I can about building aesthetic and highly-functional interfaces.
                    If you'd like to work together, feel free 
                    to <a href={`mailto:${constants.personalEmail}`}>contact me</a>!
                </p>
                <p>
                    Technologies I've been working with recently:
                </p>
                <ListContainer items={constants.skills} />
                <StyledLink className="buttoned outlined" target="_blank" rel="noopener noreferrer" href={resume}>
                    Resumé
                </StyledLink>
            </div>
        </section>
    );
}
