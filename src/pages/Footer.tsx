export function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* 主体 */}
        <div className="grid md:grid-cols-[0.5fr_1fr_1fr] gap-6 mb-8">

          {/* 快速链接 */}
          <div>
            <h3 className="text-xl mb-4">快速链接</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#home" className="hover:text-white transition-colors">首页</a></li>
              <li><a href="#about" className="hover:text-white transition-colors">公司简介</a></li>
              <li><a href="#products" className="hover:text-white transition-colors">产品中心</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">联系我们</a></li>
            </ul>
          </div>

          {/* 产品中心（三列） */}
          <div>
            <h3 className="text-xl mb-4">产品中心</h3>

            <div className="grid grid-cols-3 gap-x-3">
              {/* 第一列 */}
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">自动计量系统</a></li>
                <li><a href="#" className="hover:text-white transition-colors">高速混合机</a></li>
                <li><a href="#" className="hover:text-white transition-colors">冷却搅拌机</a></li>
                <li><a href="#" className="hover:text-white transition-colors">万马力机</a></li>
              </ul>

              {/* 第二列 */}
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">轧轮机</a></li>
                <li><a href="#" className="hover:text-white transition-colors">过滤机</a></li>
                <li><a href="#" className="hover:text-white transition-colors">压延主机</a></li>
                <li><a href="#" className="hover:text-white transition-colors">压延后段设备</a></li>
              </ul>

              {/* 第三列 */}
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">卷取机</a></li>
                <li><a href="#" className="hover:text-white transition-colors">贴合机</a></li>
                <li><a href="#" className="hover:text-white transition-colors">行星挤出机</a></li>
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
