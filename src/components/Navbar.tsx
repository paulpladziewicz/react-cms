import Container from "react-bootstrap/Container";
import BootstrapNavbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Button from "react-bootstrap/Button";
import {Link} from "@tanstack/react-router";

function Navbar() {
    const isAuthenticated = window.pageConfig?.userId

    return (
        <BootstrapNavbar expand="lg" bg="light" className="mb-4">
            <Container>
                <BootstrapNavbar.Brand style={{ fontSize: '32px', fontWeight: 'bold' }}>
                    <Link to="/">
                        Fremont
                        <span style={{ color: 'rgba(var(--ar-primary-rgb), var(--ar-bg-opacity))' }}>MI</span>
                    </Link>
                </BootstrapNavbar.Brand>
                <BootstrapNavbar.Toggle aria-controls="navbarCollapse1" />
                <BootstrapNavbar.Collapse id="navbarCollapse1">
                    <Nav className="me-auto">
                        <Link className="nav-link fw-semibold" to="/search">
                            <i className="ai-search fs-lg me-2"></i>Search
                        </Link>
                        <Link className="nav-link fw-semibold" to="/events">
                            <i className="ai-map fs-lg me-2"></i>Explore
                        </Link>
                        <Link className="nav-link fw-semibold" to="/create">
                            <i className="ai-circle-plus fs-lg me-2"></i>Create
                        </Link>
                    </Nav>
                    {!isAuthenticated ? (
                        <>
                            <Button href="/register" variant="primary" size="sm" className="fs-sm me-1 ms-3 mb-4 mb-lg-0">
                                Register
                            </Button>
                            <Button href="/login" variant="outline-primary" size="sm" className="fs-sm mb-4 mb-lg-0">
                                Sign in
                            </Button>
                        </>
                    ) : (
                        <>
                            <Button href="/my/settings" variant="secondary" size="sm" className="fs-sm me-1 ms-3 mb-4 mb-lg-0 px-3 px-1">
                                <i className="ai-user"></i>
                            </Button>
                            <form action="/logout" method="post" style={{ display: 'inline' }}>
                                <Button type="submit" variant="link" className="ps-2 btn-sm fs-sm mb-4 mb-lg-0">
                                    Sign out
                                </Button>
                            </form>
                        </>
                    )}
                </BootstrapNavbar.Collapse>
            </Container>
        </BootstrapNavbar>
    );
}

export default Navbar;


