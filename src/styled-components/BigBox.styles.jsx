import styled from 'styled-components';

export const BigBox = styled.div`
    border: 1px solid rgb(47, 9, 78);
    border-radius: 1.5rem;
    color: white;
    background-color: ${props => props.backgroundColor};
    width: ${props => props.Width};
    height: ${props => props.Height};
    position: absolute;
    margin-top: ${props => props.MarginTop};
    margin-left: ${props => props.MarginLeft};
    margin-right: ${props => props.MarginRight};
    padding-right: ${props => props.PaddingRight};
    padding-top: ${props => props.PaddingTop};
    overflow: hidden;
    @media (max-width: 600px) {
        width: 590px;
    }
`;

