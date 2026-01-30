import { Card } from '../components/card'; 
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { productParams } from '@/data/products';
import { textTitle } from '@/data/textInfo/headInfo';
import { textSolgan } from '@/data/textInfo/solganInfo';

export function Products() { 
  const [ showAll, setShowAll ] = useState(false); 
  const visibleProducts = showAll ? productParams : productParams.slice(0, 6);
  const navigate = useNavigate();

  return ( 
    <section id="products" className="py-20 bg-white"> 
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"> 
        <div className="text-center mb-16"> 
          <h2 className="text-4xl mb-2">{textTitle.productsTitle}</h2> 
            <div className="w-44 h-1 bg-blue-600 mx-auto mb-4" /> 
              <p className="text-xl text-gray-600">{ textSolgan.productSolgan }</p> 
        </div> 
        <div className="grid md:grid-cols-3 gap-8"> 
          {visibleProducts.map((product, index) => { const Icon = product.icon;
          return ( 
            <Card 
              key={index} 
              className="p-8 hover:shadow-xl transition-shadow"
              onClick={() => navigate(`/products/${product.slug}`)} 
            > 
              <div className="flex items-start mb-4"> 
                <div className="bg-blue-100 p-3 rounded-lg mr-4"> 
                  <Icon className="w-8 h-8 text-blue-600" /> 
                </div> 
                <div> 
                  <h3 className="text-2xl mb-2">{product.title}</h3> 
                    <p className="text-gray-600">{product.description}</p> 
                </div> 
              </div> 
            </Card> ); 
          })}
        </div> 
      </div> 
      {productParams.length > 6 && ( <div className="mt-10 text-center"> 
        <button onClick={() => setShowAll(!showAll)} 
          className=" inline-flex items-center px-8 py-3 border 
            border-blue-600 text-blue-600 rounded-lg hover:bg-blue-600 hover:text-white transition " > 
            {showAll ? '收起' : '显示更多'} 
        </button> 
      </div> )} 
    </section> );
}