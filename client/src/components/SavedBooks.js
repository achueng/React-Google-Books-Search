import React from "react";
import { Container, Jumbotron, ListGroup, Image } from "react-bootstrap";

function SavedBooks(props) {
    const data = props.savedBooks;
    return (
        <Container fluid className="px-4">
            <Jumbotron>
                <h3 className="px-4 mb-2">Saved Books</h3>
                <h6 className="px-4 mb-2 text-muted">Click on the entry to remove the book from Saved Books.</h6>
                <ListGroup className="mx-4">
                    {(!data[0]) ? (
                        <ListGroup.Item action variant="light">
                            Save a book to see Saved Books entries
                        </ListGroup.Item>
                    ) : 
                    (data.map(entry => {
                        return (
                            <ListGroup.Item action variant="light">
                                Title: {entry.title}
                                Author: {entry.author}
                                Description: {entry.description}
                                <Image thumbnail 
                                src={entry.image}
                                alt={entry.title}
                                />
                                <a href={entry.link}>Learn More</a>
                            </ListGroup.Item>
                        )
                    }))}
                </ListGroup>
            </Jumbotron>
        </Container>
    )
}

export default SavedBooks;