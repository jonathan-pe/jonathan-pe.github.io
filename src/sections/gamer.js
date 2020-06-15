import React from 'react';
import SectionHeader from '../components/sectionHeader';
import ListContainer from '../components/listContainer';
import constants from '../config/constants';

export default function League() {
    return (
        <section id="gamer">
            <SectionHeader text="Gamer" />
            <div>
                <p>
                    I'm a gamer who loves strategizing and outwitting opponents to come out on top.
                    I like gaming with my friends and think it's a really great way to keep in contact
                    and continue to build bonds with them. I mostly play MOBAs and FPSs so if you also
                    like to play then let's play a game or two!
                </p>
                <p>
                    Games I've been playing recently:
                </p>
                <ListContainer items={constants.games}/>
            </div>
        </section>
    );
}
