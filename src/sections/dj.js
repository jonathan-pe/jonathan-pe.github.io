import React from 'react';
import SectionHeader from '../components/sectionHeader';
import constants from '../config/constants';
import ListContainer from '../components/listContainer';

export default function DJ() {
    const shows = ["Welcome To The Jungle, B*TCH (04/25/20)", "Trivecta @ Origin SF (10/18/19)"];

    return (
        <section id="dj">
            <SectionHeader text="DJ" />
            <div className={"flexBetween"}>
                <div>
                    <p>
                        I'm a DJ who loves to play Electronic Dance Music (EDM)! I like mixing a variety of
                        subgenres like Future Bass, Dubstep, Trap and House. I also like to 
                        occasionally play some Hip Hop.
                    </p>
                    <p>
                        I stream once or twice week for a couple of hours 
                        on <a target="_blank" rel="noopener noreferrer" href={constants.twitchLink}>Twitch</a>. If you'd like to know
                        when I'll be streaming, then follow me
                        on <a target="_blank" rel="noopener noreferrer" href={constants.instagramLink}>Instagram</a>! I also like to post
                        some mixes on <a target="_blank" rel="noopener noreferrer" href={constants.soundcloudLink}>SoundCloud</a> too.
                    </p>
                    <p>
                        Recent Shows:
                    </p>
                    <ListContainer items={shows}/>
                </div>
            </div>
        </section>
    );
}
