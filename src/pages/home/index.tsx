// src/pages/home/index.tsx
import { Typography, Box, Paper } from '@mui/material';

const Home = () => {
  return (
    <Box>
      <Typography 
      variant="h4" gutterBottom
      style={{
        color: 'white'
      }}>
        Chào mừng đến với trang chủ!
      </Typography>

      <Paper sx={{ padding: 2, marginTop: 2 }}>
        <Typography variant="body1">
          Đây là nội dung của trang chủ. Bạn có thể tùy chỉnh thông tin, bảng thống kê, hoặc các widget khác tại đây.
        </Typography>

        <img src="/pur_sakura.png" alt="Mô tả ảnh" style={{ width: '100%', borderRadius: '8px' }} />
        {/* <img src="/pur_sakura.png" alt="Mô tả ảnh" style={{ width: '100%', borderRadius: '8px' }} />
        <img src="/pur_sakura.png" alt="Mô tả ảnh" style={{ width: '100%', borderRadius: '8px' }} />
        <img src="/pur_sakura.png" alt="Mô tả ảnh" style={{ width: '100%', borderRadius: '8px' }} /> */}
      </Paper>  
    </Box>
  );
};

export default Home;
