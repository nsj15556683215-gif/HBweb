import { useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';

export default function RouteTransition({
  children,
}: {
  children: React.ReactNode;
}) {
  const location = useLocation();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // URL 变化时，重新触发动画
    setVisible(false);

    const timer = setTimeout(() => {
      setVisible(true);
    }, 100); // 很小的延迟，确保动画生效

    return () => clearTimeout(timer);
  }, [location.pathname]);

  return (
    <div
      className={`
        transition-opacity duration-300
        ${visible ? 'opacity-100' : 'opacity-0'}
      `}
    >
      {children}
    </div>
  );
}
