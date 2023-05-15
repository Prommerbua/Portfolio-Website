import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { MdOutlineHome, MdPersonOutline } from 'react-icons/md';
import { MdCode } from 'react-icons/md';
import { ImProfile } from 'react-icons/im';
import Link from 'next/link'
import Image from 'next/image'

export const Navigation = () => {
	return (
		<Navbar variant='dark' sticky='top' className='px-3' expand="sm" collapseOnSelect>
			<Container>
				<Navbar.Brand as={Link} href="/">
					<div className='d-flex align-items-center'>
						<Image alt='Logo MP' src="/Images/logo-no-background.svg" width="100" height="29" className='me-2 filter-white' />
					</div>
				</Navbar.Brand>
				<Navbar.Toggle />
				<Navbar.Collapse className="justify-content-end" id='navbarCollapse'>
					<Nav className='align-items-center px-1' style={{ columnGap: '1em' }}>
						<Nav.Link as={Link} href="/" eventKey="1">
							<span>
								<MdOutlineHome />{' '}Home
							</span>
						</Nav.Link>
						<Nav.Link as={Link} href="/about" eventKey="2">
							<span>
								<MdPersonOutline />{' '}About
							</span>

						</Nav.Link>
						<Nav.Link as={Link} href="/projects" eventKey="3">
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