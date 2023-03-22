import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { MdPersonOutline } from 'react-icons/md';
import { MdCode } from 'react-icons/md';

function Navigation() {
	return (
		<>
			<Navbar bg='dark' variant='dark' sticky='top'>
				<Container>
					<Navbar.Brand href="#home">
						<img
							alt=""
							src="/logo.svg"
							width="30"
							height="30"
							className="d-inline-block align-top"
						/>{' '}
						Michael Prommer MSc. - Game Developer
					</Navbar.Brand>
					<Navbar.Toggle />
					<Navbar.Collapse className="justify-content-end">
						<Nav>
							<Nav.Link>
								<MdPersonOutline />{' '}About
							</Nav.Link>
							<Nav.Link>
								<MdCode />{' '}Projects
							</Nav.Link>
							<Nav.Link>
								<MdPersonOutline />{' '}CV
							</Nav.Link>
						</Nav>
					</Navbar.Collapse>
				</Container>
			</Navbar>
		</>
	);
}

export default Navigation;