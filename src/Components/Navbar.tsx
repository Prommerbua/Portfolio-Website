import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { MdPersonOutline } from 'react-icons/md';
import { MdCode } from 'react-icons/md';
import { ImProfile } from 'react-icons/im';
import { default as logo } from '../Assets/Images/logo-no-background.svg';

function Navigation() {
	return (
		<Navbar bg='dark' variant='dark' sticky='top' className='px-3'>
			<Container>
				<Navbar.Brand href="#home">
					<div className='d-flex align-items-center'>
						<img src={logo} width="80" className='me-2' />
					</div>
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
							<ImProfile />{' '}CV
						</Nav.Link>
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
}

export default Navigation;