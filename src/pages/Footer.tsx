import { useNavigate } from 'react-router-dom';

export function Footer() {
  const navigate = useNavigate();

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    } else {
      navigate('/');
      setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }
  };

  const goProduct = (slug: string) => {
    navigate(`/products/${slug}`);
  };

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* 主体 */}
        <div className="grid md:grid-cols-[0.5fr_1fr_1fr] gap-6 mb-8">

          {/* 快速链接 */}
          <div>
            <h3 className="text-xl mb-4">快速链接</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <button onClick={() => scrollToSection('home')} className="hover:text-white">
                  首页
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('about')} className="hover:text-white">
                  公司简介
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('contact')} className="hover:text-white">
                  联系我们
                </button>
              </li>
            </ul>
          </div>

          {/* 产品中心 */}
          <div>
            <h3 className="text-xl mb-4">产品中心</h3>

            <div className="grid grid-cols-3 gap-x-3">
              {/* 第一列 */}
              <ul className="space-y-2 text-gray-400">
                <li><button onClick={() => goProduct('auto-dosing')} className="hover:text-white">自动计量系统</button></li>
                <li><button onClick={() => goProduct('super-mixer')} className="hover:text-white">高速混合机</button></li>
                <li><button onClick={() => goProduct('cooling-mixer')} className="hover:text-white">冷却搅拌机</button></li>
                <li><button onClick={() => goProduct('banbury-machine')} className="hover:text-white">万马力机</button></li>
              </ul>

              {/* 第二列 */}
              <ul className="space-y-2 text-gray-400">
                <li><button onClick={() => goProduct('mixing-roll')} className="hover:text-white">轧轮机</button></li>
                <li><button onClick={() => goProduct('strainer')} className="hover:text-white">过滤机</button></li>
                <li><button onClick={() => goProduct('calender')} className="hover:text-white">压延主机</button></li>
                <li><button onClick={() => goProduct('post-calender')} className="hover:text-white">压延后段设备</button></li>
              </ul>

              {/* 第三列 */}
              <ul className="space-y-2 text-gray-400">
                <li><button onClick={() => goProduct('winder')} className="hover:text-white">卷取机</button></li>
                <li><button onClick={() => goProduct('laminating-machine')} className="hover:text-white">贴合机</button></li>
                <li><button onClick={() => goProduct('planetary-extruder')} className="hover:text-white">行星挤出机</button></li>
              </ul>
            </div>
          </div>

          {/* 联系方式 */}
          <div className="ml-14">
            <h3 className="text-xl mb-4">联系方式</h3>
            <ul className="space-y-2 text-gray-400">
              <li>电话：+86 13817239269</li>
              <li>邮箱：13817239269@163.com</li>
              <li>地址：中国浙江省海宁市仙侠路112号</li>
              <li>工作时间：周一至周五 8:00-17:00</li>
            </ul>
          </div>
        </div>

        {/* 版权 */}
        <div className="border-t border-gray-800 pt-8 text-center text-gray-400 text-sm">
          © 2026 海宁市华博机械有限公司 版权所有 | 浙ICP备 xxxxxxxx 号
        </div>

      </div>
    </footer>
  );
}
