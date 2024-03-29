import styled from "styled-components";

export const HeaderMain = styled.header`
    background-color: #D5E7F7;
    display: flex;
    justify-content: space-between;
    padding: 10px 18px 10px 18px;

    @media screen and (max-width: 348px) {
        flex-direction: column;
        gap: 7px;
        align-items: center;
        padding: 0px 0px 5px 0px;
        }
`

export const Title = styled.h1`
    margin: 0px;
    font-weight: normal;
    font-size: 24px;
`

export const ContainerButton = styled.nav`
    display: flex;
    gap: 18px;
`
