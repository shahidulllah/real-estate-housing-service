
import { Outlet } from 'react-router-dom'
import Navbar from '../Components/Navbar/Navbar';
const Root = () => {
    return (
        <div className='p-4 lg:mx-24'>
            <Navbar></Navbar>
            <Outlet></Outlet>
        </div>
    );
};

export default Root;