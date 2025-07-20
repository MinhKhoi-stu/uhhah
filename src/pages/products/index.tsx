// src/pages/products/index.tsx
import { useParams } from 'react-router-dom';
import { products } from './mockData';
import PageLayout from '../../layouts/PageLayout';
import ProductGrid from '../../components/productList';

const ProductPage = () => {
  const { category } = useParams();

  const productList = products[category as keyof typeof products];

  if (!productList) return <div>Không tìm thấy sản phẩm.</div>;

  return (
    <PageLayout>
      <ProductGrid items={productList} />
    </PageLayout>
  );
};

export default ProductPage;
