import React, {useState} from "react";
import TextField from '@mui/material/TextField';
import { Button, Paper } from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import { Link } from "react-router-dom";
import { login } from '../../auth/authUser'
import { useNavigate } from "react-router-dom";

const root = {
    width: 500
}

const style = {
    display: "center",
    justifyContent: "center",
    padding: 2,
    maxWidth: 500
}

const LoginForm = () => {
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();

    const onHandleChange = async () => {
       await login(userName, password);
        navigate("/", { replace: true });
    }

    return (
        <Paper sx={style}>
        <Grid2 component="form" container spacing={2}>
            <Grid2 xs={12}>
            <TextField id="filled-basic" label="User Name" variant="filled" sx={root} onChange={(event) => {setUserName(event.target.value)}}/>
            </Grid2>
            <Grid2 xs={12}>
            <TextField id="filled-basic" label="Password" type="password" variant="filled" onChange={(event) => {setPassword(event.target.value)}}sx={root}/>
            </Grid2>
            <Grid2 sx={2}>
            <Button variant="contained" sx={{ width: 100 }} onClick={onHandleChange}>Login</Button>
                </Grid2>
                <Grid2 sx={2}>
                    <Link to="/signup">
                    <Button>Sign Up</Button>
                    </Link>
                </Grid2>
            </Grid2 >  
        </Paper>    
    )
}

export default LoginForm;