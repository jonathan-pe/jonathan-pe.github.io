import React from 'react';
import '../styles/hero.css';

export default class Hero extends React.Component {
    render() {
        return (
            <div className="hero">
                <div className="greeting">Hello there! I'm</div>
                <div className="header">Jonathan Pe</div>
                <div className="subtitle">and I like to code!</div>
            </div>
        );
    }
}
