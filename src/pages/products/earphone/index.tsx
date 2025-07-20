// src/pages/earphone/index.tsx

import { Box, Typography } from '@mui/material';
import ProductList from '../../../components/productList';
import {products} from '../mockData';


const EarphonePage = () => {
  const earphoneData = products.earphone; // ✅ lấy dữ liệu cho tai nghe

  return (
    <Box>
      <Typography variant="h4" gutterBottom>
        Tai nghe
      </Typography>

      <ProductList items={earphoneData} />
    </Box>
  );
};

export default EarphonePage;



