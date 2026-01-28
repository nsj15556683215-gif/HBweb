import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { Phone, Mail, MapPin, Clock, Check, X } from 'lucide-react';
import { Card } from '../components/card';

export function Contact() {
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<'success' | 'error' | null>(null);
  const [loading, setLoading] = useState(false);

  const contactInfo = [
    { icon: Phone, title: '联系电话', content: '+86 13817239269' },
    { icon: Mail, title: '电子邮箱', content: '13817239269@163.com' },
    { icon: MapPin, title: '公司地址', content: '中国浙江省海宁市仙侠路112号' },
    { icon: Clock, title: '工作时间', content: '周一至周五 8:00-17:00' },
  ];

  const sendEmail = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;

    setLoading(true);
    setStatus(null);

    try {
      await emailjs.sendForm(
        'service_y7jul6e',      // service ID
        'template_mph5q0k',     // template ID
        formRef.current,
        'iCBDP5ccw6fJHZQAV'     // public key
      );

      setStatus('success');
      formRef.current.reset();
    } catch (err) {
      console.error(err);
      setStatus('error');
    } finally {
      setLoading(false);
      setTimeout(() => setStatus(null), 2500);
    }
  };

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">

        {/* 联系信息 */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {contactInfo.map((info, i) => (
            <Card key={i} className="p-6 text-center">
              <div className="flex justify-center mb-2">
                <info.icon className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="font-semibold">{info.title}</h3>
              <p className="text-sm text-gray-600">{info.content}</p>
            </Card>
          ))}
        </div>

        {/* 表单 */}
        <div className="bg-white rounded-xl shadow-lg p-8 max-w-3xl mx-auto">
          <h3 className="text-2xl font-semibold text-center mb-8">在线咨询</h3>

          <form ref={formRef} onSubmit={sendEmail} className="space-y-6">
            <input
              name="user_name"
              placeholder="姓名"
              required
              className="w-full px-4 py-3 border rounded-lg"
            />

            <input
              name="user_phone"
              placeholder="电话"
              required
              className="w-full px-4 py-3 border rounded-lg"
            />

            <input
              name="user_email"
              type="email"
              placeholder="邮箱"
              required
              className="w-full px-4 py-3 border rounded-lg"
            />

            <textarea
              name="message"
              rows={5}
              placeholder="咨询内容"
              required
              className="w-full px-4 py-3 border rounded-lg resize-none"
            />

            <button
              type="submit"
              disabled={loading}
              className="block mx-auto bg-blue-600 text-white px-14 py-3 rounded-lg hover:bg-blue-700 disabled:opacity-60"
            >
              {loading ? '发送中...' : '立即提交'}
            </button>
          </form>
        </div>

        {/* 成功提示 */}
        {status === 'success' && (
          <div className="fixed top-24 left-1/2 -translate-x-1/2 bg-green-500 text-white px-6 py-3 rounded-lg flex gap-2 z-50">
            <Check className="w-5 h-5" />
            提交成功，我们会尽快联系您
          </div>
        )}

        {/* 失败提示 */}
        {status === 'error' && (
          <div className="fixed top-24 left-1/2 -translate-x-1/2 bg-red-500 text-white px-6 py-3 rounded-lg flex gap-2 z-50">
            <X className="w-5 h-5" />
            发送失败，请稍后再试
          </div>
        )}
      </div>
    </section>
  );
}
