import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import colors from '../config/colors';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

const useStyles = makeStyles((theme) => ({
    list: {
        display: "grid"
    },
    listItem: {
        padding: "0px 0px 0px 20px",
        marginBottom: 10,
        "&::before": {
            content: '"○"',
            position: "absolute",
            left: 0,
            color: colors.blue,
            fontSize: 16,
            lineHeight: 0
        }
    }
}));

export default function ListContainer(props) {
    const styles = useStyles();

    return (
        <List disablePadding={true} className={styles.list}>
            {props.items.map((item, i) => (
                <ListItem key={i} disableGutters={true} className={styles.listItem}>
                    <ListItemText className={styles.listItemText}>{item}</ListItemText>
                </ListItem>
            ))}
        </List>
    )
}
