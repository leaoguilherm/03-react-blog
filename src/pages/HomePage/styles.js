import styled from "styled-components";

export const TitleListPost = styled.h3`
    margin: 0px;
    font-weight: normal;
    font-size: 20px;
    padding-bottom: 10px;
`

export const ContainerTitle = styled.div`
    align-items: center;
    width: 600px;

    @media screen and (max-width: 613px) { width: auto; }
`

export const ContainerPosts = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
    margin-bottom:20px;
`