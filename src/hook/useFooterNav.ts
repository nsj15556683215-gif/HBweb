import { useNavigate } from 'react-router-dom';

export function useFooterNav() {
  const navigate = useNavigate();

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);

    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    } else {
      navigate('/');
      setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
      }, 120);
    }
  };

  const goProduct = (slug: string) => {
    navigate(`/products/${slug}`);
  };

  return {
    scrollToSection,
    goProduct,
  };
}
