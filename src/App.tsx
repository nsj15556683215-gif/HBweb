import { Routes, Route } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import { About } from './pages/About';
import { Products } from './pages/Products';
import { Advantages } from './pages/Advantages';
import { Cases } from './pages/Cases';
import { Contact } from './pages/Contact';
import { Hero } from '@/pages/Hero';
import ProductsDetail  from './pages/ProductsDetail';

export default function App() {
  return (
    <Routes>
      {/* 公共布局 */}
      <Route element={<MainLayout />}>
        {/* 首页 */}
        <Route
          path="/"
          element={
            <>
              <Hero />
              <About />
              <Products />
              <Advantages />
              <Cases />
              <Contact />
            </>
          }
        />

        {/* 产品中心 */}
        <Route path="/products" element={<Products />} />
        {/* 产品详情 */}
        <Route path="/products/:slug" element={<ProductsDetail />} />
      </Route>
    </Routes>
  );
}
