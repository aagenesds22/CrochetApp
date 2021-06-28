import styled from 'styled-components';

const SizedImage = styled.img`
    
    height: 30vw;
    width: 35%;
    border-radius: 50%;
    content: url(${props => props.src});

    @media screen and (max-width: 600px){
        
        height: 100%;
        width: 100%;
        border-radius: 0;
    }
`

export {SizedImage}