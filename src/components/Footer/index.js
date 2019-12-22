// Header.js
import React from 'react';
import styled from 'styled-components';

const Footer = () => {
    // Create a Title component that'll render an <h1> tag with some styles
    const Title = styled.h1`
        font-size: 2.5em;
        text-align: center;
        text-transform: uppercase;
        color: white;
    `;
    const Wrapper = styled.section`
        height: 300px;
        background: #27b5d8;
        position: relative;
    `;
    const NavLeft = styled.div`
        width: 40%;
        margin: 0;
        position: absolute;
        top: 50%;
        -ms-transform: translateY(-50%);
        transform: translateY(-50%);
        text-align: left;
      `;
 
    return (
        <Wrapper>
            <NavLeft>
                <Title>
                    BCG Digital Ventures
                </Title>
            </NavLeft>
        </Wrapper>
    );
};
export default Footer;