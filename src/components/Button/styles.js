import styled from "styled-components";
import { blue } from "../../theme";

export const StyledButton = styled.button`
    padding: 8px 15px 8px 15px;
    font-size: 15px;
    font-weight: bold;
    background-color: ${(props) => props.secondary ? 'white' : '#2C88D9'};
    border: ${(props) => props.secondary ? `solid 1px ${blue}` : 'none'};
    border-radius: 5px;
    color: ${(props) => props.secondary ? '#2C88D9' : 'white'};
    cursor: pointer;
    transition: filter .2s;

    &:hover { 
        filter: brightness(85%);
        box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.3);
    }

    &:active {
        filter: brightness(80%);
    }
`;