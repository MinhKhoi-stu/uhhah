// // src/components/ProductList.tsx

// import Grid from '@mui/material/Grid';
// import Card from '@mui/material/Card';
// import CardContent from '@mui/material/CardContent';
// import CardMedia from '@mui/material/CardMedia';
// import Typography from '@mui/material/Typography';

// type Product = {
//   id: number;
//   name: string;
//   image: string;
//   price: number;
// };

// type Props = {
//   items: Product[];
// };

// const ProductList = ({ items }: Props) => {
//   return (
//     <Grid container spacing={2}>
//       {items.map((product) => (
//           <Card
//           sx={{ 
//             minHeight: 300, 
//             maxHeight: 320,
//             display: 'flex', 
//             flexDirection: 'column' 
//           }}>
//             <CardMedia
//               component="img"
//               height="140"
//               image={product.image}
//               alt={product.name}
//               sx={{ height: 160, objectFit: 'cover' }}
//             />
//             <CardContent
//             sx={{ 
//               flexGrow: 1 
//             }}>
//               <Typography variant="h6">{product.name}</Typography>
//               <Typography color="text.secondary">
//                 {product.price.toLocaleString()}₫
//               </Typography>
//             </CardContent>
//           </Card>
//       ))}
//     </Grid>
//   );
// };

// export default ProductList;
// src/components/ProductList.tsx


// src/components/productlist/index.tsx
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Typography,
  Grid,
} from '@mui/material';

type Product = {
  id: number;
  name: string;
  image: string;
  price: number;
};

const ProductList = ({ items }: { items: Product[] }) => {
  const rows = [];
  const itemsPerRow = 3;

  for (let i = 0; i < items.length; i += itemsPerRow) {
    const rowItems = items.slice(i, i + itemsPerRow);
    const isLastRow = i + itemsPerRow >= items.length;

    rows.push(
      <Grid
        container
        spacing={3}
        key={`row-${i}`}
        justifyContent={isLastRow ? 'flex-start' : 'center'}
        sx={{ marginBottom: 2 }}
      >
        {rowItems.map((product) => (
          <Grid
            item
            key={product.id}
            sx={{
              width: 300,
              display: 'flex',
              justifyContent: 'center',
            }}
          >
            <Card
              sx={{
                width: '100%',
                height: 380,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
              }}
            >
              <CardMedia
                component="img"
                image={product.image}
                alt={product.name}
                sx={{
                  height: 160,
                  objectFit: 'contain',
                  padding: 1,
                }}
              />
              <CardContent>
                <Typography
                  fontWeight="bold"
                  sx={{
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                    display: '-webkit-box',
                    WebkitLineClamp: 2,
                    WebkitBoxOrient: 'vertical',
                  }}
                >
                  {product.name}
                </Typography>
                <Typography color="text.secondary" sx={{ mt: 1 }}>
                  {product.price.toLocaleString()}₫
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    );
  }

  return <Box>{rows}</Box>;
};

export default ProductList;




