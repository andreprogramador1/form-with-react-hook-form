import styled from 'styled-components'

export const Container = styled.div`
    height: 100vh;
    width: 13vw;
    position: absolute;
    left: 0;
    top: 0;
    background-color: blue;
    /* z-index: -1; */

    a {
        background-color: white;
        display: flex;
        flex-direction: column;
        width: fit-content;
    }
`;