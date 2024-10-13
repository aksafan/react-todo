import { Outlet } from 'react-router-dom';
import NavBar from '../NavBar.jsx';

function Layout() {
    return (
        <>
            <NavBar />
            <main>
                <div className="container">
                    <Outlet />
                </div>
            </main>
        </>
    );
}

export default Layout;
