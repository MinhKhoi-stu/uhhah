import AccountCircle from "@mui/icons-material/AccountCircle";
import {Divider, InputAdornment, TextField, Typography} from "@mui/material";
import {Link, useNavigate} from "react-router-dom";
import LockIcon from '@mui/icons-material/Lock';
import {Password} from "@mui/icons-material";
import {useState} from "react";
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import FacebookIcon from '@mui/icons-material/Facebook';
import XIcon from '@mui/icons-material/X';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const Signin = () =>{
    const [show, setShow] = useState(false)
    const [showConfirm, setShowConfirm] = useState(false)
    const navigate = useNavigate()

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
            
            {/* thẻ bọc form đăng ký */}
            <form style={{
                width: '420px',
                height: 'flex',
                border: '2px solid gray',
                borderRadius: '40px',
                backdropFilter: 'blur(50px)',
            }}>

                <div>
                {/* Nút Back */}
                    <ArrowBackIcon
                        onClick={() => navigate(-1)} // hoặc navigate('/login')
                        sx={{
                        cursor: 'pointer',
                        fontSize: '30px',
                        marginTop: '30px',
                        marginRight: '350px',
                        '&:hover': {
                            color: '#4e9af1',
                            transform: 'scale(1.1)',
                            transition: 'all 0.2s ease',
                        },
                        }}
                    />

                
                {/* tiêu đề đăng ký */}
                    <Typography 
                    variant='h3'
                    align='center'
                    sx={{
                        color: 'white',
                        fontSize: '50px',
                        margin: '20px',
                    }}>
                        Đăng ký
                    </Typography>
                </div>

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
                    }}
                    InputProps={{
                        startAdornment: (
                        <InputAdornment position="start">
                            <AccountCircle />
                        </InputAdornment>
                        ),
                    }}
                />

                {/* input password */}
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

                {/* input password again */}
                <TextField
                    type= {showConfirm ? 'text' : 'password'}
                    id="password"
                    placeholder="Nhập lại mật khẩu"
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
                            <Password/>
                        </InputAdornment>
                        ),
                        // ẩn hiện mật khẩu
                             endAdornment: (
                                <InputAdornment position="end">
                                    {showConfirm ? (
                                    <VisibilityIcon
                                        onClick={() => setShowConfirm(false)}
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
                                        onClick={() => setShowConfirm(true)}
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

                {/* nút Đăng ký */}
                <button style={{
                    marginTop: '20px',
                    marginBottom: '20px',
                    fontSize: '20px',
                    backgroundColor: 'blueviolet'
                }}>
                    Đăng ký
                </button>

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

                {/* Đã có tài khoản */}
                <div style={{
                    marginTop: '10px',
                }}>
                    <Typography 
                    style={{
                        marginBottom: '10px'
                    }}>
                        Đã có tài khoản? <Link  to= "/login" style={{
                            textDecoration: 'underline',
                        }}>Đăng nhập</Link>
                    </Typography>
                </div>
            </form>
        </div>
    )}

export default Signin;