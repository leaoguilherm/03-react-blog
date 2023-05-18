import styled from "styled-components";

export const TitleCreatePost = styled.h3`
    margin: 0;
    font-weight: normal;
    font-size: 20px;
    padding-bottom: 10px;
`

export const ContainerInput = styled.div`
    border: solid 1PX #2C88D9;
    display: flex;
    flex-direction: column;
    padding: 0px 13px 10px 13px;
`

export const ContainerBtnCreatePost = styled.div`
    display: flex;
    justify-content: flex-end;
    padding-top: 12px;
`

export const SuccessMessage = styled.div`
    background-color: rgb(181, 211, 181);
    color: rgb(0, 83, 0);
    padding: 3px;
    border: solid 1px rgb(0, 83, 0);
    margin-top: 3px;
    text-align: center;
    border-radius: 3px;
    font-weight: bold;
    display: none;
`