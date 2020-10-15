import React from 'react'
import styled from 'styled-components'

const TitleContainer = styled.div`
    width: 100%;
    height: 20%;
    background-color: ${({ titleBackground }) => titleBackground ? titleBackground : 'rgba(255, 255, 255, 0.75)'};
    color: ${({ titleColor }) => titleColor ? titleColor : 'black' };
    position: absolute;
    bottom: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: clamp(10px, 5vw, 15px);
    font-weight: bold;
    z-index: 99;
    opacity: 0;

    transition: 0.5s all;
`

const Container = styled.div`
    width: ${({ width }) => width ? width : '220px' };
    height: ${({ height }) => height ? height : '360px'};
    background-image: ${({ coverPath }) => coverPath ? `url(${coverPath})` : null};
    background-color: ${({ backgroundColor, coverPath }) => coverPath ? null : backgroundColor};
    background-size: cover;
    background-position: center;
    position: relative;
    cursor: pointer;

  &:hover {
    transform: scale(1.01);
    &:before {
        content: '';
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        background-image: linear-gradient(to bottom right, black , black);
        opacity: 0.2;
    }
  }

  &:hover ${TitleContainer} {
      opacity: 1;
  }
`

function MovieCard({ coverPath, title = '', onClick, titleColor, titleBackground }) {
    return (
        <Container coverPath={coverPath} onClick={onClick}>
            {title ? (
                <TitleContainer titleColor={titleColor} titleBackground={titleBackground}>
                    <p style={{ padding: '1rem'}}>{title}</p>
                </TitleContainer>
            ) : null}
        </Container>
    )
}

export default MovieCard

