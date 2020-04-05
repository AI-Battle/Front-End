import styled, {css} from 'styled-components';


const invertedButtonStyles = css`
    background-color: white;
    color: black;
    position: absolute;
    top: 250px;
    opacity: 0;

    &:hover {
        background-color: black;
        color: white;
    }
`;

const googleSignInStyles = css`
    background-color: #4285f4;
    color: white;

    &:hover {
        background-color: #357ae8;
        border: none;
    }
`;


const getButtonStyles = props => {
    if(props.isGoogleSignIn){
        return googleSignInStyles;
    }

    return props.inverted ? invertedButtonStyles : CustomButtonContainer
}


export const CustomButtonContainer = styled.button`
    min-width: 165px;
    width: auto;
    height: 50px;
    letter-spacing: 0.5px;
    line-height: 50px;
    padding: 0 35px 0 35px;
    font-size: 15px;
    background-color: rgb(41, 9, 78);
    color: white;
    text-transform: uppercase;
    font-family: 'Open Sans Condensed';
    font-weight: bolder;
    border: none;
    cursor: pointer;
    border-radius: 4px;
    transition: all .3s;
    box-shadow: 2px 4px 8px rgba(0, 0, 0, .2);
    position: relative;
    &:hover {
        background-color: white;
        color: black;
        border: 1px solid black;
        transform: translateY(-2px);
    }
    &:active {
        transform: translateY(0);
        box-shadow: 1px 2px 4px rgba(0, 0, 0, .2);
    }
    &:focus {
        outline: 0;
    }
    ${getButtonStyles}
`;