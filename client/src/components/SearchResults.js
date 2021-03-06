import React from "react";
import { Container, Jumbotron, ListGroup, Image } from "react-bootstrap";

function SearchResults(props) {
    const data = props.searchedBooks;
    // (!data[0]) ? (console.log("nothing")) : (console.log("something"));
    return (
        <Container fluid className="px-4">
            <Jumbotron>
                <h3 className="px-4 mb-2">Book Search Results</h3>
                <h6 className="px-4 mb-2 text-muted">Click on the entry to save the book.</h6>
                <ListGroup className="mx-4">
                    {(!data[0]) ? (
                        <ListGroup.Item action variant="light">
                            Search for a book to see entries
                        </ListGroup.Item>
                    ) : 
                    (data.map(entry => {
                        return (
                            <ListGroup.Item action variant="light" key={data.indexOf(entry)}>
                                <p>Title: {entry.title}</p>
                                <p>Author: {entry.authors}</p>
                                <p>Description: {entry.description}</p>
                                {/* <Image thumbnail 
                                src={entry.image}
                                alt={entry.title}
                                /> */}
                                <a href={entry.link} target="_blank">Learn More</a>
                            </ListGroup.Item>
                        )
                    }))}
                </ListGroup>
            </Jumbotron>
        </Container>
    )
}

export default SearchResults;