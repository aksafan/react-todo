import { Outlet } from 'react-router-dom';
import NavBar from '../../NavBar';

const MainLayout = () => (
    <>
        <NavBar />
        <main>
            <div className="container">
                <Outlet />
            </div>
        </main>
    </>
);


export default MainLayout;
