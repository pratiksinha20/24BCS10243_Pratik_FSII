import { Link } from 'react-router-dom'

function Navbar() {
    return (
        <header className="site-header">
            <Link className="brand" to="/">My Portfolio</Link>
            <nav className="main-nav" aria-label="Main navigation">
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/contact">Contact</Link>
                <Link to="/dashboard">Dashboard</Link>
            </nav>
        </header>
    )
}

export default Navbar