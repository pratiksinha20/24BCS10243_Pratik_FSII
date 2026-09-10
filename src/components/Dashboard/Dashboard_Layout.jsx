import { Link, Outlet } from 'react-router-dom'

function DashboardLayout() {
	return (
		<main className="page dashboard-page">
			<p className="eyebrow">PRIVATE AREA</p>
			<h1>Dashboard</h1>
			<nav className="dashboard-nav" aria-label="Dashboard navigation">
				<Link to="profile">Profile</Link>
				<Link to="settings">Settings</Link>
			</nav>
			<Outlet />
		</main>
	)
}

export default DashboardLayout
