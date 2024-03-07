import styled from "styled-components";


export const Container = styled.header`
    width: 100%;
    height: 100px;
    box-shadow: 1px 0px 10px #333;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px 10%;
    img{
        width: 80px;
        height: 80px;
    }
    @media (max-width:700px) {
        padding: 20px 10px;
        flex-direction: row-reverse;
        img{
        width: 50px;
        height: 50px;
    }
    }
`;

export const Menu = styled.ul`
    width: 100%;
    max-width: 300px;
    margin-left: auto;
    list-style: none;
    display: flex;
    justify-content: space-between;
    .contratar{
        background-color: royalblue;
        color: #fff;
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
        padding: 5px 10px;
        border-radius: 10px;

        svg{
            margin: 5px;
        }
    }
    @media (max-width:700px) {
        display: none;
        
         
    }
`;

export const Option = styled.li`
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
        

    &:hover{
        transition: 500ms;
        scale: 1.1;
         
        
    }
`;

