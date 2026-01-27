import { Card } from '../components/card'; 
import { Settings, Gauge, Zap, Shield } from 'lucide-react'; 
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export function Products() { 
  const products = [ 
    { 
      slug: 'auto-dosing',
      title: '自动计量系统', 
      description: '将生产所需各种原料进行计量并输送至高速混合机混合、冷却。', 
      icon: Settings, 
    }, 
    
    {
      slug: 'super-mixer',
      title: '高速混合机', 
      description: '将PVC原料及配合剂先行充分分散、混合、预熟、预备胶化。', 
      icon: Gauge, 
    },

    { 
      slug: 'cooling-mixer',
      title: '冷却搅拌机', 
      description: '将混合料由高温以冷却水冷却，以防结块。', 
      icon: Zap, 
    }, 
    
    {
      slug: 'banbury-machine',
      title: '万马力机', 
      description: '在极短时间内，将PVC混合料熔融，并促进胶化，色料及发泡剂在此加入混炼。', 
      icon: Shield, 
    }, 
    
    { 
      slug: 'mixing-roll',
      title: '轧轮机', 
      description: '促进混合料至胶化均匀完全及压延成型前的预热。',  
      icon: Gauge, 
    },

    { 
      slug: 'strainer',
      title: '过滤机', 
      description: '对塑化物料进行过滤，确保产品质量稳定。', 
      icon: Gauge, 
    }, 
    
    { 
      slug: 'calender',
      title: '压延主机', 
      description: '将已经塑化的PVC原料压延成高质量胶布。', 
      icon: Gauge, 
    }, 
    
    { 
      slug: 'post-calender',
      title: '压延后段设备', 
      description: '由引取轮组，压纹轮组和冷却轮组组成，使产品冷却并输送至卷取机。', 
      icon: Gauge, 
    },

    { 
      slug: 'winder',
      title: '卷取机', 
      description: '分中心卷取和表面卷取两种，能自动，半自动卷取PVC压延膜。', 
      icon: Gauge, 
    }, 
    
    { 
      slug: 'laminating-machine',
      title: '贴合机', 
      description: '将2-7层不同厚度及用途的薄膜，通过贴合机来进行贴合。', 
      icon: Gauge, 
    },

    { 
      slug: 'planetary-extruder',
      title: '行星挤出机', 
      description: '进口材质配合先进的加工设备，塑化效果好，助剂添加量低，关键部件使用寿命长。', 
      icon: Gauge, 
    },
  ]
  const [ showAll, setShowAll ] = useState(false); 
  const visibleProducts = showAll ? products : products.slice(0, 6);
  const navigate = useNavigate();

  return ( 
    <section id="products" className="py-20 bg-white"> 
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"> 
        <div className="text-center mb-16"> 
          <h2 className="text-4xl mb-2">产品中心</h2> 
            <div className="w-44 h-1 bg-blue-600 mx-auto mb-4" /> 
              <p className="text-xl text-gray-600"> 提供全套全尺寸 PVC 压延设备，满足不同生产需求 </p> 
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
      {products.length > 6 && ( <div className="mt-10 text-center"> 
        <button onClick={() => setShowAll(!showAll)} 
          className=" inline-flex items-center px-8 py-3 border 
            border-blue-600 text-blue-600 rounded-lg hover:bg-blue-600 hover:text-white transition " > 
            {showAll ? '收起' : '显示更多'} 
        </button> 
      </div> )} 
    </section> );
}