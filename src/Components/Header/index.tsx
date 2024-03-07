import { Container,Menu,Option } from "./style";
import Logo from "../../assets/logo.png";
import { Link } from "react-router-dom";
import { FaHandshake } from "react-icons/fa";
import { Mobile } from "../Mobile";

export const Header = () => {
    return(
        <Container>
            <Link to={"/"}>
                <img src={Logo} alt="logo" />
            </Link>
            <Menu>
                <Option>Suporte</Option>
                <Option>Downloads</Option>
                <Option className="contratar"><FaHandshake/>Contratar </Option>
            </Menu>
            <Mobile/>
        </Container>
    )
}