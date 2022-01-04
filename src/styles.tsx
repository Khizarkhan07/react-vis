import styled from "styled-components";

type Props = {
    color : string;
}

export const LanguageWrapper = styled.div`
    display: flex;
    gap: 5px;
`
export const Language = styled.div<Props>`
    border : 1px solid black;
    height : 20px;
    width : 20px;
    background:  ${(props) => (props.color)};
`