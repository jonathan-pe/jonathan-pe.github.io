import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import SectionHeader from '../components/sectionHeader';
import Typography from '@material-ui/core/Typography';
import ListContainer from '../components/listContainer';

const useStyles = makeStyles((theme) => ({
    gamer: {
        alignItems: "flex-start"
    },
    container: {
        "& ul": {
            gridTemplateColumns: "repeat(2, minmax(140px, 200px));",
        }
    }
}));

export default function League() {
    const styles = useStyles();

    const games = ["League of Legends", "CS:GO", "Valorant"];

    return (
        <section className={styles.gamer} id="gamer">
            <SectionHeader text="Gamer" />
            <div className={"flexBetween"}>
                <div className={styles.container}>
                    <Typography paragraph={true}>
                        I'm a gamer who loves strategizing and outwitting opponents to come out on top.
                        I like gaming with my friends and think it's a really great way to keep in contact
                        and continue to build bonds with them. I mostly play MOBAs and FPSs so if you also
                        like to play then let's play a game or two!
                    </Typography>
                    <Typography paragraph={true}>
                        Games I've been playing recently:
                    </Typography>
                    <ListContainer items={games}/>
                </div>
            </div>
        </section>
    );
}
