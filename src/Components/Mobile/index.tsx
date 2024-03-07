import { Container,Icon,Aside,Menu,Option } from "./style";
import { IoMdDownload } from "react-icons/io";
import { FaHeadphonesSimple } from "react-icons/fa6";
import { FaHandshake } from "react-icons/fa";
import { useState } from "react";

export const Mobile = () => {
    const[toggle,setToggle] = useState<true|false>(false);
 
    const ToggleFunc = () => {
        const tg = !toggle;

        setToggle(tg);
    }

    return(
        <Container>
            <Icon onClick={()=>ToggleFunc()}>
                <div className="bar"></div>
                <div className="bar"></div>
                <div className="bar"></div>
            </Icon>
            <Aside toggle={toggle.toString()}>
                <Menu toggle={toggle.toString()}>
                    <Option><IoMdDownload/>Downloads</Option>
                    <Option><FaHeadphonesSimple />Suporte</Option>
                    <Option><FaHandshake/>Contratar</Option>
                </Menu>
            </Aside>
        </Container>
    )
}