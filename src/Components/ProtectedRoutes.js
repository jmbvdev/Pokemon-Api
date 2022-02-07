import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';

const ProtectedRoutes = () => {

    const name= useSelector(state=>state.name)
		
    if(true){
        return <Outlet />
    } else { 
        return <Navigate to='/' />
    }                     
};                        
export default ProtectedRoutes;