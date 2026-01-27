import { Cpu, Wrench, Heart, Globe } from 'lucide-react';

export function Advantages() {
  const advantages = [
    {
      icon: Cpu,
      title: '智能化控制',
      description:
        '采用先进的PLC电气控制系统，配备触摸屏人机界面，操作简便，自动化程度高，大幅提升生产效率。',
    },
    {
      icon: Wrench,
      title: '精密制造',
      description:
        '关键部件采用进口材料，精密加工，确保设备运行稳定可靠，产品质量始终如一，使用寿命长。',
    },
    {
      icon: Heart,
      title: '节能环保',
      description:
        '采用节能设计理念，优化能源利用，降低生产成本。设备符合环保标准，助力企业绿色生产。',
    },
    {
      icon: Globe,
      title: '全球服务',
      description:
        '建立完善的售后服务体系，提供完备的技术支持，快速响应客户需求，确保设备高效运转。',
    },
  ];

  return (
    <section id="advantages" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* 标题 */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-semibold mb-4">技术优势</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-4"></div>
          <p className="text-xl text-gray-600">
            以设备可靠为核心，为客户创造更大价值
          </p>
        </div>

        {/* 优势卡片 */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {advantages.map((advantage, index) => (
            <div
              key={index}
              className="
                bg-white p-8 rounded-lg
                shadow-md
                text-center
                transition-all duration-300
                hover:shadow-xl hover:-translate-y-1
              "
            >
              <div className="flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mx-auto mb-6">
                <advantage.icon className="w-8 h-8 text-blue-600" />
              </div>

              <h3 className="text-xl font-semibold mb-4">
                {advantage.title}
              </h3>
              
              <p className=" max-w-4xl mx-auto text-lg text-gray-700 leading-relaxed text-justify ">
                {advantage.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
