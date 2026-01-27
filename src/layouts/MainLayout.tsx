import { Header } from '@/pages/Header';
import { Footer } from '@/pages/Footer';
import { Outlet } from 'react-router-dom';
import ScrollToTop  from '@/pages/ScrollToTop'

export default function MainLayout() {
  return (
    <div className='min-h-screen flex flex-col'>
      <ScrollToTop />
      <Header />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
