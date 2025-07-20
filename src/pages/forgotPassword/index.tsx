import {InputAdornment, TextField, Typography} from '@mui/material';
// import * as ReactDOM from 'react-dom';
// import TextField from '@mui/material/TextField';
import { Link, useNavigate } from 'react-router-dom';
// import LockIcon from '@mui/icons-material/Lock';
import CropFree from '@mui/icons-material/CropFree';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const ForgotPassword = () =>{
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
            
            {/* thẻ bọc form đăng nhập */}
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

                
                    {/* tiêu đề khôi phục mật khẩu */}
                    <Typography 
                    variant='h3'
                    align='center'
                    sx={{
                        color: 'white',
                        fontSize: '40px',
                        margin: '20px',
                    }}>
                        Khôi phục mật khẩu
                    </Typography>
                </div>

                {/* input OTP */}
                <TextField
                    type="text"
                    placeholder="Nhập mã OTP"
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
                            <CropFree/>
                        </InputAdornment>
                        ),
                    }}
                />

                {/* thẻ gửi lại mã */}
                <div style={{
                    marginLeft: '285px',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                }}> 
                    <Typography>
                       <Link to="/login" style={{
                        textDecoration: 'underline',
                       }}>Gửi lại mã</Link> 
                    </Typography>
                </div>

                
                {/* nút Xác nhận */}
                <button style={{
                    marginTop: '20px',
                    marginBottom: '20px',
                    fontSize: '20px',
                    backgroundColor: 'blueviolet'
                }}>
                    Xác nhận
                </button>
            </form>
        </div>
    )}

export default ForgotPassword;