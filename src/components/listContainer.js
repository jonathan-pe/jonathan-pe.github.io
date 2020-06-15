import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { theme, media } from '../styles';

const { colors, fontSizes } = theme;

const StyledList = styled.ul`
    display: grid;
    list-style: none;
    overflow: hidden;
    padding: 0;
    margin: 20px 0 0 0;
    grid-template-columns: repeat(2, minmax(140px, 300px));
`;

const StyledListItem = styled.li`
    position: relative;
    padding: 0px 0px 0px 20px;
    margin-bottom: 10px;
    font-size: ${fontSizes.small};
    ${media.phone`font-size: ${fontSizes.xs};`}
    &:before {
        content: '○';
        position: absolute;
        left: 0;
        color: ${colors.blue};
        font-size: ${fontSizes.small};
        ${media.phone`font-size: ${fontSizes.xs};`}
        line-height: 16px;
    }
`;

export default function ListContainer(props) {
    return (
        <StyledList numColumns={props.numColumns}>
            {props.items.map((item, i) => (
                <StyledListItem key={i}>
                    {item}
                </StyledListItem>
            ))}
        </StyledList>
    );
}

ListContainer.propTypes = {
    numColumns: PropTypes.number,
    items: PropTypes.array.isRequired
};
