import React from 'react';
import colors from '../config/colors';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    sectionHeader: {
        fontSize: 32,
        alignItems: "center",
        display: "flex",
        width: "100%",
        whiteSpace: "nowrap",
        margin: "10px 0px 40px",
        "&::after": {
            content: '""',
            display: "block",
            height: 1,
            width: 300,
            backgroundColor: colors.grey,
            position: "relative",
            marginLeft: 20
          }
    },
}));

export default function SectionHeader(props) {
    const styles = useStyles();
    return (
        <h3 className={styles.sectionHeader}>{props.text}</h3>
    );
}
