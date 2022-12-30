import { Navigate, Outlet } from 'react-router-dom';
import { auth } from "./firebase-config";

const PrivateRoutes = () => {
  //let auth = { 'token': false }
  let authUser = auth.currentUser;
return (
    authUser ? <Outlet/> : <Navigate to='/login'/>
  )
}

export default PrivateRoutes;