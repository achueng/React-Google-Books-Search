import React from "react";
import { Container, Jumbotron } from "react-bootstrap";
import NavBar from "./NavBar";
import BookSearch from "./BookSearch";

function Layout() {
    return (
        <React.Fragment>
            <NavBar />
            <Container fluid className="mt-4 p-4">
                <Jumbotron className="mt-4">
                    <h1 className="text-center text-bold">(React) Google Books Search</h1>
                    <h2 className="text-center">Search for and Save Books of Interest</h2>
                </Jumbotron>
            </Container>
            <BookSearch/>
        </React.Fragment>
    )
}

export default Layout;