import styled from "styled-components";


export const Container = styled.div`
    margin-right:auto;
    .icon{
        
    }
    @media (min-width:700px) {
        display: none;
    }
`;

export const Icon = styled.div`
    cursor: pointer;
    .bar{
            width: 26px;
            height: 3px;
            border-radius: 3px;
            background-color: #3B8FD0;
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
            margin-bottom: 5px;
            cursor: pointer;
        }

`;



type Toggle = {
    toggle:string;
}

export const Aside = styled.aside<Toggle>`
    
    opacity: ${(prop)=> prop.toggle == "false" ?"0":"1"};
    position: fixed;
    background-color: #eee;
    box-shadow: 2px 2px 5px #333;
    transition: 500ms;


`;
export const Menu = styled.ul<Toggle>`
   display: ${(prop)=> prop.toggle == "false" ?"none":"block"};
   border-radius: 5px;
   list-style: none;
  
`;

export const Option = styled.li`
    
    padding: 10px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    border-bottom: 1px solid #ccc;
    
    svg{
        margin-right: 10px;
    }
`;