import styled from 'styled-components';

export const FooterContainer = styled.div`
    background-color: #c92868;
    margin-top: auto;
    height: 250px;
    width: 100%;
    display: flex;
    justify-content: space-around;
    flex-direction: row-reverse;
`;

export const Div = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding-left: 20px;
`;

export const Logo = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    color: #f0f0f0;
    width: 300px;
`;

export const FooterIcons = styled.div`
    width: 200px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    padding-bottom: 15px;
`;

export const Clock = styled.img`
    height: 220px;
    width: 220px;
`;

export const Paragraphs = styled.div`
    display: flex;
`;

export const P = styled.p`
    padding: 0px 4px;
    margin-bottom: 10px;
    color: #f0f0f0;
`;

export const Copyright = styled.p`
    color: #f0f0f0;
    font-size: 15px;
    text-align: center;
`;
