import { ImageWithFallback } from '../components/ImageWithFallback';
import { MapPin, CheckCircle } from 'lucide-react';
import { cases } from '@/data/cases';
export function Cases() {
  return (
    <section id="cases" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* 标题 */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-semibold mb-4">案例展示</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-4"></div>
          <p className="text-xl text-gray-600">
            服务全球客户，创造卓越成果
          </p>
        </div>

        {/* 案例列表 */}
        <div className="space-y-12">
          {cases.map((caseItem, index) => {
            const isEven = index % 2 === 0;

            return (
              <div
                key={index}
                className={`
                  flex flex-col md:flex-row
                  ${!isEven ? 'md:flex-row-reverse' : ''}
                  gap-8 items-center
                  bg-gray-50 rounded-lg overflow-hidden
                  shadow-md
                  transition-all duration-300
                  hover:shadow-xl hover:-translate-y-1
                `}
              >
                {/* 图片 */}
                <div className="md:w-1/2 h-80 overflow-hidden">
                  <ImageWithFallback
                    src={caseItem.image}
                    alt={caseItem.company}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* 文本 */}
                <div className="md:w-1/2 p-8">
                  <h3 className="text-2xl font-semibold mb-4">
                    {caseItem.company}
                  </h3>

                  <div className="flex items-center text-gray-600 mb-4">
                    <MapPin className="w-5 h-5 mr-2 text-blue-600 flex-shrink-0" />
                    {caseItem.location}
                  </div>

                  <div className="mb-4">
                    <span className="inline-block bg-blue-100 text-blue-800 px-4 py-1 rounded-full text-sm">
                      {caseItem.project}
                    </span>
                  </div>

                  <div className="flex items-start">
                    <CheckCircle className="w-5 h-5 mr-2 text-green-600 flex-shrink-0 mt-1" />
                    <p className="text-gray-700 leading-relaxed">
                      {caseItem.result}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
