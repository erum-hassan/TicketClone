import { Button } from 'antd';
import { useNavigate, Route, Routes } from 'react-router-dom';
import Dashboard from './Dashboard';
function Register(){
    const navigate = useNavigate();

    const navigateHome = () => {
        // 👇️ navigate to /
        navigate('/dashboard');
      };
      const navigateUser = () => {
        // 👇️ navigate to /
        navigate('/user');
      };
 
   return(
       <>
       <div  style={{marginLeft:'10em', marginTop:'10em'}}>
        <h1 style={{fontSize:50}}>User</h1>
        <Button size='large'  type="primary"  onClick={navigateUser}>Click Me</Button>
       </div>
       <div style={{marginLeft:'10em', marginTop:'10em'}}>
        <h1 style={{fontSize:50}}>Admin</h1>
        <Button size='large' type="primary" onClick={navigateHome}>click me</Button>
       </div>
       </>
   )
}

export default Register;