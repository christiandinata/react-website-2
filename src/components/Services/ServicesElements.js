import styled from 'styled-components'

export const ServicesContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: transparent;
    height: auto;
    position: relative;
`

export const ServicesWrapper = styled.div`
    /* display: flex;
    gap: 16px; */
    
    width: auto;
    margin: 0 auto;
    /* display: flex; */
    /* grid-template-columns: 1fr 1fr 1fr; */
    align-items: center;
    /* grid-gap: 16px; */
    padding-bottom: 80px;
    padding-left: 50px;
    padding-right: 50px;
    position: relative;
    
    /* padding: 0 16px; */

    /* @media screen and (max-width: 1000px){
        grid-template-columns: 1fr 1fr;

    } */

    @media screen and (max-width: 768px){
        /* grid-template-columns: 1fr;
        padding-bottom: 90px;
        padding-left: 20px;
        padding-right: 20px; */
        /* max-width: 555px;
        display: flex;
        flex-direction: column;
        flex: 1;
        gap: 16px; */
    }  
`

export const ServicesCard = styled.div`
    position: relative;
    background: #fff;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 10px;
    max-height: 340px;
    padding: 30px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
    transition: 0.2s all ease-in-out;

    &:hover{
        transform: scale(1.02);
        transition: 0.2s all ease-in-out;
        cursor: pointer;
    }

    @media screen and (max-width: 992px){
        max-width: 444px;
    }
`

export const ServicesIcon = styled.img`
    height: 160px;
    width: 160px;
    margin-bottom: 10px;
`

export const ServicesHeading = styled.h1`
    font-size: 2.5rem;
    color: #fff;
    margin-bottom: 64px;
    margin-top: 64px;
    padding-top: 48px;

    @media screen and (max-width: 480px){
        font-size: 2rem;
    }
`

export const ServicesText = styled.h2`
    font-size: 1rem;
    margin-bottom: 10px;
`

export const ServicesDesc = styled.p`
    font-size: 1rem;
    text-align: center;

`

export const BSTest = styled.div`
    background-color: #fff;
    color: green;
    font-size: 1.5rem;
    cursor: pointer;
    transition: 0.3s all ease-in-out;
    text-transform: uppercase;
    letter-spacing: 0.25rem;

    &:hover{
        transform: scale(1.05);
        background-color: ${({maured}) => maured ? 'hotpink' : 'green'};
        color: #fff;
        transition: 0.3s all ease-in-out;
    }
`

export const BadgeHover = styled.span`
    &:hover{
        cursor: pointer;
    }
`