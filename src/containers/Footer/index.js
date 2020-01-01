import React from 'react';
import { Container, Row, Col, ListGroup } from 'react-bootstrap';
import './Footer.css';

export default function Footer() {
	return (
		<div className="footer">
			<Container>
				<Row>
					<Col
						sm={6}
						md={4}
						lg={6}
						style={{
							display: 'flex',
							flexDirection: 'column',
							justifyContent: 'center',
							alignItems: 'center'
						}}
					>
						<div horizontal style={{ display: 'flex', alignItems: 'center' }}>
							<div>
								<a className="icons" href="https://www.facebook.com/agnenevulyte">
									<i className="fab fa-facebook" />
								</a>
							</div>
							<div>
								<a className="icons" href="https://www.instagram.com/agne.nev">
									<i className="fab fa-instagram" />
								</a>
							</div>
							<div>
								<a className="icons" href="#">
									<i className="fab fa-youtube" />
								</a>
							</div>
						</div>
					</Col>
					<Col
						md={4}
						style={{
							display: 'flex',
							flexDirection: 'column',
							justifyContent: 'center',
							alignItems: 'center'
						}}
					>
						<div className="copyright" style={{ display: 'flex', alignItems: 'center' }}>
							<p>© Copyright - Agne Nevulyte</p>
						</div>
					</Col>
				</Row>
			</Container>
		</div>
	);
}
