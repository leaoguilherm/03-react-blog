import styled from "styled-components";

export const Card = styled.div`
    border: solid 1PX #2C88D9;
    display: flex;
    flex-direction: column;
    padding: 5px 13px 5px 13px;
    background-color: #D5E7F7;
    width: 600px;

    @media screen and (max-width: 613px) { width: 400px; }

    @media screen and (max-width: 399px) { width: 350px; }

    @media screen and (max-width: 349px) { width: auto; }
`
export const TitleCard = styled.h4`
    margin: 0px;
`

export const FooterCard = styled.footer`
    display: flex;
    gap: 5px;
`
