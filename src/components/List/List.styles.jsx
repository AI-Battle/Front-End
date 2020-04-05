import styled from 'styled-components';

export const ListBorder = styled.div`
    height: 75%;
    margin-top: 1rem;
    margin-left: 1rem;
    margin-right: 1rem;
`

export const StatisticsBorder = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding-top: 1rem;
    padding-bottom: 1rem;
`

export const Circle = styled.div`
    border: 2.5rem solid white;
    background-repeat: no-repeat;
    border-radius: 50%;
    width: 12rem;
    height: 12rem;
    margin-left: auto;
    margin-right: auto;
    font-size: 180%;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const NumericalsBorder = styled.div`
    display: flex;
    justify-content: space-evenly;
`

export const Num = styled.div`
    padding: .5rem;
    border-radius: 1rem;
    background-color: rgba(71, 55, 103, 0.6);
    transition: all .2s;

    &:hover {
        background-color: rgba(71, 55, 103, 1);
        cursor: pointer;
    }
`