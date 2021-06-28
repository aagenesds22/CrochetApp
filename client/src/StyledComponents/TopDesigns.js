import styled from 'styled-components';



const MainContainer = styled.div`
        height: 725px;
        width: 100%;
        background: url('https://i.pinimg.com/originals/10/cb/e8/10cbe8dbf58d255307efce49b60f0472.jpg');
        background-size: cover;
        background-position: center;
        background-attachment: fixed;

        .cardMainContainer {
            margin-top: 20%;
            
            opacity: 0;
            transition: all 0.2s ease-in;
        }

        .visibleCardContainer {
            transition: all 0.5s ease-in;
            margin-top: 10%;
            opacity: 1;

        }
`

export {
    MainContainer
}