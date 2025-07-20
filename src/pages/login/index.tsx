import {Divider, InputAdornment, TextField, Typography} from '@mui/material';
// import * as ReactDOM from 'react-dom';
// import TextField from '@mui/material/TextField';
import { Link, useNavigate } from 'react-router-dom';
import LockIcon from '@mui/icons-material/Lock';
import AccountCircle from '@mui/icons-material/AccountCircle';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import FacebookIcon from '@mui/icons-material/Facebook';
import XIcon from '@mui/icons-material/X';
import {useState} from 'react';

const Login = () =>{
    const navigate = useNavigate();
    const [show, setShow] = useState(false)

    const handleLogin = () => {
        //logic
        navigate('/home');
    }

    return (

        //thẻ bọc cả trang
        <div style={{
            position: 'fixed',
            top: 0,
            left: 0,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            width: '100%',
            height: '100vh',
            backgroundImage: "url('/pur_sakura.png')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            }}>
            
            {/* thẻ bọc form đăng nhập */}
            <form style={{
                width: '420px',
                height: 'flex',
                border: '2px solid gray',
                borderRadius: '40px',
                backdropFilter: 'blur(50px)',
            }}>
                
                {/* tiêu đề đăng nhập */}
                <Typography 
                variant='h3'
                align='center'
                sx={{
                    color: 'white',
                    fontSize: '50px',
                    margin: '20px',
                }}>
                    Đăng nhập
                </Typography>

                {/* input username */}
                <TextField
                    type="text"
                    id="username"
                    placeholder="Email hoặc số điện thoại"
                    variant="outlined"
                    sx={{
                        width: '300px',
                        margin: '20px 0',
                        backgroundColor: 'white',
                        borderRadius: '10px',
                        // '& input::placeholder': {
                        // color: 'black',
                        // opacity: 1, // để placeholder không bị mờ
                        // },
                    }}
                    InputProps={{
                        startAdornment: (
                        <InputAdornment position="start">
                            <AccountCircle />
                        </InputAdornment>
                        ),
                    }}
                />

                {/* input password*/}
                    <TextField
                        type= {show ? 'text' : 'password'}
                        id="password"
                        placeholder="Mật khẩu"
                        variant="outlined"
                        sx={{
                            width: '300px',
                            margin: '20px 0',
                            backgroundColor: 'white',
                            borderRadius: '10px',
                        }}
                        InputProps={{
                            startAdornment: (
                            <InputAdornment position="start">
                                <LockIcon />
                            </InputAdornment>
                            ),

                            // ẩn hiện mật khẩu
                             endAdornment: (
                                <InputAdornment position="end">
                                    {show ? (
                                    <VisibilityIcon
                                        onClick={() => setShow(false)}
                                        sx={{
                                        cursor: 'pointer',
                                        '&:hover': {
                                            color: 'purple',
                                            transform: 'scale(1.2)',
                                            transition: 'all 0.2s ease',
                                        },
                                        }}
                                    />
                                    ) : (
                                    <VisibilityOffIcon
                                        onClick={() => setShow(true)}
                                        sx={{
                                        cursor: 'pointer',
                                        '&:hover': {
                                            color: 'purple',
                                            transform: 'scale(1.2)',
                                            transition: 'all 0.2s ease',
                                        },
                                        }}
                                    />
                                    )}
                                </InputAdornment>
                                ),
                            }}
                            />                 
                
                {/* nút Đăng nhập */}
                <button 
                onClick={handleLogin}
                style={{
                    width: '300px',
                    marginBottom: '20px',
                    marginTop: '20px',
                    fontSize: '20px',
                    backgroundColor: 'blueviolet'
                }}>
                    Đăng nhập
                </button>

                {/* thẻ ghi nhớ + quên mật khẩu */}
                <div style={{
                    marginLeft: '60px',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                }}>
                    <label style={{
                        display: 'flex',
                        alignItems: 'center',
                    }}>
                        <input style={{
                            cursor: 'pointer',
                        }}
                         type="checkBox" />Ghi nhớ đăng nhập
                    </label>
                    
                    <Typography style={{
                        marginRight: '60px',
                    }}>
                       <Link to="/forgotPassword" style={{
                        textDecoration: 'underline',
                       }}>Quên mật khẩu</Link> 
                    </Typography>
                </div>
                
                {/* hoặc */}

                <Divider sx={{ my: 2 }}>
                    <Typography variant="body1" color="white">
                        Hoặc
                    </Typography>
                </Divider>


                {/* Facebook hoặc X */}
                <div style={{
                    marginBottom: '20px',
                }}>
                    <a href="#"
                    style={{
                        marginRight: '40px',
                    }}>
                        <FacebookIcon></FacebookIcon>
                    </a>

                    <a href="#">
                        <XIcon></XIcon>
                    </a>
                </div>

                {/* Chưa có tài khoản */}
                <div style={{
                    marginBottom: '20px',
                    marginTop: '20px',
                }}>
                    <Typography>
                        Chưa có tài khoản? <Link to="/signin"
                    style={{
                        textDecoration: 'underline',
                    }}>Đăng ký</Link>
                    </Typography>
                </div>
            </form>
        </div>
    )}

export default Login;