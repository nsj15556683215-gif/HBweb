import { ImageWithFallback } from '../components/ImageWithFallback';
import { aboutStats } from '@/data/about';
import { aboutImage } from '@/data/imgInfo/imgInfo';
import { companyInfo } from '@/data/textInfo/companyProfile';
import { textTitle } from '@/data/textInfo/headInfo';

export function About() {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* 上半部分：图片 + 简介 */}
        <div className="grid md:grid-cols-2 gap-12 items-start mb-20">
          {/* 图片 */}
          <div className="h-full">
            <ImageWithFallback
              src={ aboutImage.src }
              alt={ aboutImage.alt }
              className="rounded-lg shadow-lg w-full h-full"
            />
          </div>

          {/* 文字区域 */}
          <div>
            {/* 中文标题 */}
            <h3 className="text-center text-4xl mb-2 font-medium">
              { textTitle.cnCompanyProfile }
            </h3>
            <div className="w-40 h-1 bg-blue-600 mx-auto mb-5"></div>
 
            {/* 中文正文 */}
            <p className="text-lg text-gray-700 leading-relaxed text-justify mb-6">
              { companyInfo.cnProfile }
            </p>

            <p className="text-lg text-gray-700 leading-relaxed text-justify mb-8">
              { companyInfo.cnProfileExtra }
            </p>

            {/* 英文标题 */}
            <h3 className="text-center text-4xl mb-2 font-medium">
              { textTitle.enCompanyProfile }
            </h3>
            <div className="w-80 h-1 bg-blue-600 mx-auto mb-5"></div>

            {/* 英文正文 */}
            <p
              lang="en"
              className="text-lg text-gray-700 leading-relaxed text-justify mb-6"
            >
              { companyInfo.enProfile }
            </p>

            <p
              lang="en"
              className="text-lg text-gray-700 leading-relaxed text-justify"
            >
              { companyInfo.enProfileExtra }
            </p>
          </div>
        </div>

        {/* 底部数据卡片 */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {aboutStats.map((stat, index) => {
            const Icon = stat.icon; // 正确用法

            return (
              <div
                key={index}
                className="text-center p-6 bg-white rounded-lg shadow-md"
              >
                <Icon className="w-12 h-12 mx-auto mb-4 text-blue-600" />
                <div className="text-3xl font-bold text-blue-600 mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
