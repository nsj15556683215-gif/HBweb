import { Users, Factory, TrendingUp, Globe } from 'lucide-react';
import { ImageWithFallback } from '../components/ImageWithFallback';

export function About() {
  const stats = [
    { icon: Factory, label: '成立年限', value: '10+' },
    { icon: Users, label: '专业团队', value: '50+' },
    { icon: Globe, label: '合作国家', value: '10+' },
    { icon: TrendingUp, label: '客户满意度', value: '98%' },
  ];

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* 上半部分：图片 + 简介 */}
        <div className="grid md:grid-cols-2 gap-12 items-start mb-20">
          {/* 图片 */}
          <div>
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1739863306113-2629b0ed2a6b"
              alt="工厂生产线"
              className="rounded-lg shadow-lg w-full h-auto"
            />
          </div>

          {/* 文字 */}
          <div>
            {/* 中文标题 */}
            <h3 className="text-center text-4xl mb-2 font-medium">
              公司简介
            </h3>
            <div className="w-40 h-1 bg-blue-600 mx-auto mb-5"></div>

            {/* 中文正文 */}
            <p className="max-w-4xl mx-auto text-lg text-gray-700 leading-relaxed mb-6 text-justify">
              海宁市华博机械有限公司成立于2023年5月，前身为华术实业有限公司，由于业务需求量增大，
              搬迁至海宁市仙侠路112号。我们是一家专业生产销售橡塑胶压延整厂设备的厂家，
              主要产品有3-6辊压延生产整线，行星挤出机及螺杆3-7层贴合机等。
            </p>

            <p className=" max-w-4xl mx-auto text-lg text-gray-700 leading-relaxed mb-8 text-justify">
              公司一贯坚持 “ 质量第一，用户至上，信守合同 ” 的宗旨，凭借高质量的产品，
              良好的信誉，优质的服务，产品畅销全国各地以及远销中东，东南亚，非洲，南美洲等地区。
              我们旨在打造“中华之术”，竭诚与国内外商家双赢合作，共同发展，共创辉煌。
            </p>

            {/* 英文标题 */}
            <h3 className="text-center text-4xl mb-2 font-medium">
              Company Profile
            </h3>
            <div className="w-80 h-1 bg-blue-600 mx-auto mb-5"></div>

            {/* 英文正文 */}
            <p
              lang="en"
              className="text-lg text-gray-700 mb-6 leading-relaxed text-justify"
            >
              Haining Huabo Machinery Co., Ltd. was established in May 2023, formerly
              known as Shanghai Huashu Industrial Co., Ltd. Due to increasing business
              demands, the company relocated to No.112 Xianxia Road, Haining City.
              We are a professional manufacturer of rubber and plastic calendering
              equipment. Our main products include 3–6 roll calendering production lines,
              planetary extruders, and 3–7 layer laminating machines.
            </p>

            <p
              lang="en"
              className="text-lg text-gray-700 leading-relaxed text-justify"
            >
              The company adheres to the principle of “Quality First, Customer First,
              Quality Service, and Contract Compliance.” With high-quality products,
              strong reputation, and excellent service, our products are sold nationwide
              and exported to the Middle East, Southeast Asia, Africa, South America,
              and other regions. We aim to create “Chinese Technology” and sincerely
              cooperate with domestic and international partners for mutual success
              and sustainable development.
            </p>
          </div>
        </div>

        {/* 底部数据卡片 */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center p-6 bg-white rounded-lg shadow-md"
            >
              <stat.icon className="w-12 h-12 mx-auto mb-4 text-blue-600" />
              <div className="text-3xl font-bold text-blue-600 mb-2">
                {stat.value}
              </div>
              <div className="text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
