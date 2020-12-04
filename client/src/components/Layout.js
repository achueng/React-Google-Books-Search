import React from "react";
import { Container, Jumbotron } from "react-bootstrap";
import NavBar from "./NavBar";

function Layout(props) {
    return (
        <React.Fragment>
            <NavBar />
            <Container fluid className="mt-4 p-4">
                <Jumbotron className="mt-4">
                    <h1 className="text-center text-bold">(React) Google Books Search</h1>
                    <h2 className="text-center">Search for and Save Books of Interest</h2>
                </Jumbotron>
            </Container>
            {props.children}
        </React.Fragment>
    )
}

export default Layout;