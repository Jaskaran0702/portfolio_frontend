import { ListGroup, Container,Col ,Row } from "react-bootstrap";

export const Extra = () =>{
    return (
        <section className="extra" id="extra">
            <Container>
                <Row>
                    <Col>
                    <div className="extra-list">
                        <h2>Extra-Curricular</h2>
                        <p>"Beyond the code, explore my engagement in extra-curricular activities. From leadership roles to community involvement, witness my holistic approach to personal and professional development."</p>
                            <ListGroup className="list">
                            <a target="_blank" style={{textDecoration : 'none'}}><ListGroup.Item>Prefect and House Captain in High School</ListGroup.Item></a>
                            <a target="_blank" style={{textDecoration : 'none'}}><ListGroup.Item>Represented College Volleyball Team in Sports Fest</ListGroup.Item></a> 
                            {/* <a target="_blank" style={{textDecoration : 'none'}}><ListGroup.Item>Member at Capriccio: The Music Club LNMIIT</ListGroup.Item></a>  */}

                            </ListGroup>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
      );
}