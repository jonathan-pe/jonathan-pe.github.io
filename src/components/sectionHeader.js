import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { theme, media } from '../styles';

const { colors, fontSizes } = theme;

const StyledSectionHeader = styled.h3`
    font-size: ${fontSizes.large};
    align-items: center;
    display: flex;
    width: 100%;
    white-space: nowrap;
    margin: 10px 0 40px 0;
    &:after {
        content: "";
        display: block;
        height: 1px;
        width: 300px;
        background-color: ${colors.grey};
        position: relative;
        margin-left: 20px;
    }

    ${media.phablet`font-size: ${fontSizes.normal};`};
`;

export default function SectionHeader(props) {
    return (
        <StyledSectionHeader>{props.text}</StyledSectionHeader>
    );
}

SectionHeader.propTypes = {
    text: PropTypes.string.isRequired
};
