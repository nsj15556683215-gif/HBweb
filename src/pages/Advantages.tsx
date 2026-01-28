import { advantages } from "../data/advantages";

export function Advantages() {
  
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
