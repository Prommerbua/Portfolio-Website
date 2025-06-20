import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { MdOutlineHome, MdPersonOutline } from 'react-icons/md';
import { MdCode } from 'react-icons/md';
import { default as logo } from '../Assets/Images/logo-no-background.svg';
import { NavLink } from 'react-router-dom';

function Navigation() {
	return (
		<Navbar variant='dark' sticky='top' className='px-3' expand="sm" collapseOnSelect>
			<Container>
				<Navbar.Brand as={NavLink} to="/">
					<div className='d-flex align-items-center'>
						<img alt='Logo MP' src={logo} width="80" className='me-2 filter-white' />
					</div>
				</Navbar.Brand>
				<Navbar.Toggle />
				<Navbar.Collapse className="justify-content-end" id='navbarCollapse'>
					<Nav className='align-items-center px-1' style={{ columnGap: '1em' }}>
						<Nav.Link as={NavLink} to="/" eventKey="1">
							<span>
								<MdOutlineHome />{' '}Home
							</span>
						</Nav.Link>
						<Nav.Link as={NavLink} to="/about" eventKey="2">
							<span>
								<MdPersonOutline />{' '}About
							</span>

						</Nav.Link>
						<Nav.Link as={NavLink} to="/projects" eventKey="3">
							<span>
								<MdCode />{' '}Projects
							</span>
						</Nav.Link>
						{/* <Nav.Link as={Link} to="/cv" eventKey="4">
							<span>
								<ImProfile />{' '}CV
							</span>
						</Nav.Link> */}
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
}

export default Navigation;