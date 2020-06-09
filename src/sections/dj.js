import React from 'react';
import SectionHeader from '../components/sectionHeader';
import Link from '@material-ui/core/Link';
import constants from '../config/constants';
import ListContainer from '../components/listContainer';
import Typography from '@material-ui/core/Typography';

export default function DJ() {
    const shows = ["Welcome To The Jungle, B*TCH (04/25/20)", "Trivecta @ Origin SF (10/18/19)"];

    return (
        <section id="dj">
            <SectionHeader text="DJ" />
            <div className={"flexBetween"}>
                <div>
                    <Typography paragraph={true}>
                        I'm a DJ who loves to play Electronic Dance Music (EDM)! I like mixing a variety of
                        subgenres like Future Bass, Dubstep, Trap and House. I also like to 
                        occasionally play some Hip Hop.
                    </Typography>
                    <Typography paragraph={true}>
                        I stream once or twice week for a couple of hours 
                        on <Link href={constants.twitchLink}>Twitch</Link>. If you'd like to know
                        when I'll be streaming, then follow me
                        on <Link href={constants.instagramLink}>Instagram</Link>! I also like to post
                        some mixes on <Link href={constants.soundcloudLink}>SoundCloud</Link> too.
                    </Typography>
                    <Typography paragraph={true}>
                        Recent Shows:
                    </Typography>
                    <ListContainer items={shows}/>
                </div>
            </div>
        </section>
    );
}
