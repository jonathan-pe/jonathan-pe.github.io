import React from 'react';
import colors from '../config/colors';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    hero: {
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        padding: "150px 0px",
        margin: "0 auto",
        justifyContent: "center",
        maxWidth: 1000,
        WebkitBoxPack: "center",
        WebkitBoxAlign: "center"
    },
      
    greeting: {
        color: colors.blue,
        fontSize: 20,
        fontWeight: "normal",
        fontFamily: "'Courier New', Courier, monospace",
        margin: "0px 0px 10px 2px"
    },
      
    header: {
        fontSize: 100,
        color: colors.white,
        margin: "0px 0px 10px 0px"
    },
      
    subtitle: {
        fontSize: 50,
        color: colors.grey,
        margin: 0
    },

    caption: {
        fontSize: 18,
        color: colors.grey,
        margin: "50px 0px 0px 0px",
        width: "50%",
        maxWidth: 500
    },

    twitchLink: {
        color: colors.blue,
        textDecoration: "none"
    }
}));

export default function Hero() {
    const styles = useStyles();

    const greeting = () => (<h1 className={styles.greeting}>Hi there! I'm</h1>);
    const header = () => (<h2 className={styles.header}>Jonathan Pe.</h2>);
    const subtitle = () => (<h3 className={styles.subtitle}>I like coding, gaming and DJing.</h3>);
    const caption = () => (<div className={styles.caption}>I'm a Software Engineer based 
    in San Francisco, CA 
    with interests in web & mobile development. 
    I also enjoy playing video games and DJing 
    on <a href="https://twitch.tv/jpeeeeeeeeeeee" target="_blank" rel="noopener noreferrer" className={styles.twitchLink}>Twitch</a>!
    </div>);

    const heroContent = [greeting, header, subtitle, caption];

    return (
        <section className={styles.hero}>
            <TransitionGroup component={null}>
                {heroContent.map((item, i) => (
                    <CSSTransition key={i} classNames="fadeup" in={true} timeout={300}>
                        {item}
                    </CSSTransition>
                ))}
            </TransitionGroup>
        </section>
    );
}
