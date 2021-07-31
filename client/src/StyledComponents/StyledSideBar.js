import styled from 'styled-components';

const StyledSideBar = styled.div`

    width: 302px;
    display: flex;
    flex-direction: column;
    height: 100vh;
    background-color: rgb(66,66,88, 0.25);

    .title {
        display: flex;
        height: max-content;
        width: 100%;
    }

    .title > h3 {
        font-family: Intim;
    }
`

export {StyledSideBar};