import styled from 'styled-components';
import {} from './style.css';

export const PageNav = styled.nav `
    height: 60px;
    display: flex;
    justify-content: space-between;
    padding-left: 35px;
    padding-right: 35px;
    align-items: center;
    border-bottom: solid 1px black;
    position: fixed;
    z-index: 1;
    width: 100%;
    background-color: #f0f0f0
`;

export const PageNavTitleDiv = styled.div `
    display: flex;
`;

export const PageNavTitle = styled.h1 `
    font-size: 30px;
    color: #c92868;
    cursor: pointer;
    font-weight: 600;
`;

export const PageNavMenu = styled.h3 `
    font-size: 16px;
    padding-right: 10px;
    cursor: pointer;
`;

export const ImgNav = styled.img `
    width: 30px;
`;