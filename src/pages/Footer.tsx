import { productParams } from '@/data/products';
import { contactText, footerNavText } from '@/data/textInfo/mapInfo';
import { textTitle } from '@/data/textInfo/headInfo';
import { textSolgan } from '@/data/textInfo/solganInfo';
import { useFooterNav } from '@/hook/useFooterNav';

export function Footer() {
  const { scrollToSection, goProduct } = useFooterNav();
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4">

        {/* 主体 */}
        <div className="grid md:grid-cols-[0.5fr_1fr_1fr] gap-6 mb-8">

          {/* 快速链接 */}
          <div>
            <h3 className="text-xl mb-4">{textTitle.footerLinksTitle}</h3>
            <ul className="space-y-2 text-gray-400">
              {footerNavText.map((item) => (
                <li key={item.target}>
                  <button
                    onClick={() => scrollToSection(item.target)}
                    className="hover:text-white"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* 产品中心（自动生成三列） */}
          <div>
            <h3 className="text-xl mb-4">{textTitle.footerproductsTitle}</h3>

            <div className="grid grid-cols-3 gap-x-3">
              {Array.from({ length: 3 }).map((_, colIndex) => (
                <ul key={colIndex} className="space-y-2 text-gray-400">
                  {productParams
                    .slice(colIndex * 4, colIndex * 4 + 4)
                    .map((product) => (
                      <li key={product.slug}>
                        <button
                          onClick={() => goProduct(product.slug)}
                          className="hover:text-white"
                        >
                          {product.title}
                        </button>
                      </li>
                    ))}
                </ul>
              ))}
            </div>
          </div>

          {/* 联系方式 */}
          <div className="ml-14">
            <h3 className="text-xl mb-4">{textTitle.footerContactTitle}</h3>
              <ul className="space-y-2 text-gray-400">
                {contactText.map((item) => (
                <li key={item.id}>
                  <span >{item.title}：</span>
                  <span>{item.content}</span>
                </li>
                ))}
              </ul>
          </div>
        </div>



        {/* 版权 */}
        <div className="border-t border-gray-800 pt-8 text-center text-gray-400 text-sm">
          {textSolgan.footerSign}
        </div>
      </div>
    </footer>
  );
}
