import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import SectionHeader from '../components/sectionHeader';
import Link from '@material-ui/core/Link';
import constants from '../config/constants';
import ListContainer from '../components/listContainer';
import Typography from '@material-ui/core/Typography';
import animatedLogo from '../images/animatedLogo.svg';

const useStyles = makeStyles((theme) => ({
    animatedLogo: {
        height: "auto",
        width: "25%"
    },
}));

export default function DJ() {
    const shows = ["Trivecta @ Origin SF (10/18/19)"];

    return (
        <section id="dj">
            <SectionHeader text="DJ" />
            <div className={"flexBetween"}>
                <div>
                    <Typography paragraph={true}>
                        I'm a DJ who loves to play Electronic Dance Music (EDM)! I like to play a variety of
                        subgenres like Future Bass, Dubstep, Trap and House. I also like to 
                        occasionally play some Hip Hop.
                    </Typography>
                    <Typography paragraph={true}>
                        I stream once or twice week for a couple of hours 
                        on <Link href={constants.twitchLink}>Twitch</Link> and I like to make
                        mixes on <Link href={constants.soundcloudLink}>SoundCloud</Link> too!
                    </Typography>
                    <Typography paragraph={true}>
                        Recent Shows:
                    </Typography>
                    <ListContainer items={shows}/>
                </div>
            </div>
            
            {/* <img src={animatedLogo} alt="animated logo" className={styles.animatedLogo} /> */}
        </section>
    );
}
