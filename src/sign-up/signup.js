import React, {useState} from 'react'
import { Grid, Paper, Avatar, Typography, TextField, Button } from '@material-ui/core'
import AddCircleOutlineOutlinedIcon from '@material-ui/icons/AddCircleOutlineOutlined';
import { AiFillGoogleCircle } from "react-icons/ai";
import { AiFillPlusCircle } from "react-icons/ai";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import './signup.css';



const eye = <FontAwesomeIcon icon={faEye} />;

const Signup = () => {
    const paperStyle = { padding: '30px 20px', width: 300, margin: "20px auto" }
    const headerStyle = { margin: 0 }
    const avatarStyle = { backgroundColor: '#1bbd7e' }
    const marginTop = { marginTop: 5 }
    const [passwordShown, setPasswordShown] = useState(false);
    const togglePasswordVisiblity = () => {setPasswordShown(passwordShown ? false : true);
  };
    return (
        <div className="register">
            <Grid>
                <Paper elevation={20} style={paperStyle}>
                    <Grid align='center'>
                        <Avatar style={avatarStyle}>
                            <AddCircleOutlineOutlinedIcon />
                        </Avatar>
                        <h2 style={headerStyle}>Create Account</h2>
                        <Typography variant='caption' gutterBottom>Please fill in your details !!</Typography>
                    </Grid>
                    <form>
                        <div className="text">
                            <TextField fullWidth label='' placeholder="Name" />
                        </div>
                        <div className="text">
                            <TextField fullWidth label='' placeholder="Email" />
                        </div>
                        <div className="text-wrapper">
                            <TextField 
                                fullWidth label='' 
                                placeholder="Password"
                                name="password"
                                type={passwordShown ? "text" : "password"}
                                />
                            <i onClick={togglePasswordVisiblity}>{eye}</i>
                        </div>
                        {/* <div className="text">
                            <TextField fullWidth label='' placeholder="Confirm Password"/>
                        </div> */}
                        
                        <div className="butt">
                            <Button type='submit' variant='contained' color='secondary'>Register Now</Button>
                        </div>
                        <div className="tesla">
                            <div className="tesla2">
                                <p>----- Or SignUp With -----</p>
                            </div>
                            <div className="tesla3">
                                <Button variant="outlined" color="secondary">
                                    <AiFillGoogleCircle  style={{ fontSize: 30 }}/> Google
                                </Button>
                            </div>
                        </div>
                    </form>
                </Paper>
            </Grid>
        </div>
    )
}

export default Signup;