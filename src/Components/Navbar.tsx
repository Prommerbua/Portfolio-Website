import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { MdOutlineHome, MdPersonOutline } from 'react-icons/md';
import { MdCode } from 'react-icons/md';
import { ImProfile } from 'react-icons/im';
import { default as logo } from '../Assets/Images/logo-no-background.svg';
import { Link } from 'react-router-dom';

function Navigation() {
	return (
		<Navbar variant='dark' sticky='top' className='px-3'>
			<Container>
				<Navbar.Brand href="/">
					<div className='d-flex align-items-center'>
						<img alt='Logo MP' src={logo} width="80" className='me-2 filter-white' />
					</div>
				</Navbar.Brand>
				<Navbar.Toggle />
				<Navbar.Collapse className="justify-content-end">
					<Nav>
						<Nav.Link as={Link} to="/">
							<MdOutlineHome />{' '}Home
						</Nav.Link>
						<Nav.Link as={Link} to="/about">
							<MdPersonOutline />{' '}About
						</Nav.Link>
						<Nav.Link as={Link} to="/projects">
							<MdCode />{' '}Projects
						</Nav.Link>
						<Nav.Link as={Link} to="/cv">
							<ImProfile />{' '}CV
						</Nav.Link>
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
}

export default Navigation;