import { Nav } from "react-bootstrap";
import Header from "./Header";
import Content from "./Content";

export default function Dashboard() {

    const navSignIn = Header();

    return (

        <div>

            <Header />
            
            <Content />

        </div>


    );
}