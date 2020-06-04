import React from 'react';
import '../styles/music.css';
import animatedLogo from '../images/animatedLogo.svg';
export default class Music extends React.Component {
    render() {
        return (
            <div className="music">
                <img src={animatedLogo} alt="animated logo" className="animatedLogo"/>
            </div>
        );
    }
}
