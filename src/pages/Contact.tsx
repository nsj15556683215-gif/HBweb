import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import { Card } from '../components/card';
import { useRef } from 'react';
import React from 'react';
import { Check } from 'lucide-react';
import { useState } from 'react';


export function Contact() {
  const nameRef = useRef<HTMLInputElement>(null);
  const phoneRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const messageRef = useRef<HTMLTextAreaElement>(null);
  const submitRef = useRef<HTMLButtonElement>(null);
  const [success, setSuccess] = useState(false);

  const contactInfo = [
    { icon: Phone, title: '联系电话', content: '+86 13817239269' },
    { icon: Mail, title: '电子邮箱', content: '13817239269@163.com' },
    { icon: MapPin, title: '公司地址', content: '中国浙江省海宁市仙侠路112号' },
    { icon: Clock, title: '工作时间', content: '周一至周五 8:00-17:00' },
  ];

  const handleArrow = (
    e: React.KeyboardEvent,
    prev?: React.RefObject<HTMLElement>,
    next?: React.RefObject<HTMLElement>
  ) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      next?.current?.focus();
    }

    if (e.key === 'ArrowUp') {
      e.preventDefault();
      prev?.current?.focus();
    }
  };

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* 联系方式 */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {contactInfo.map((info, index) => (
            <Card key={index} className="p-6 hover:shadow-lg">
              <div className="flex items-center justify-center gap-2 mb-1">
                <div className="w-10 h-10 flex items-center justify-center bg-blue-100 rounded-full">
                  {React.createElement(info.icon, {
                    className: 'w-5 h-5 text-blue-600',
                  })}
                </div>
                <h3 className="font-semibold text-base">{info.title}</h3>
              </div>
              <p className="text-gray-600 text-sm text-center">
                {info.content}
              </p>
            </Card>
          ))}
        </div>

        {/* 表单 */}
        <div className="bg-white rounded-xl shadow-lg p-8 md:p-12 max-w-3xl mx-auto">
          <h3 className="text-2xl font-semibold mb-8 text-center">
            在线咨询
          </h3>

          <form
            className="max-w-2xl mx-auto space-y-6"
            onSubmit={(e) => {
              e.preventDefault();
              setSuccess(true);
              // 2 秒后自动隐藏
              setTimeout(() => {
              setSuccess(false);
              }, 2000);
              }}
          >
            {/* 姓名 */}
            <input
              ref={nameRef}
              placeholder="姓名"
              onKeyDown={(e) => handleArrow(e, undefined, phoneRef)}
              className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-3 focus:ring-blue-600"
            />

            {/* 电话 */}
            <input
              ref={phoneRef}
              placeholder="电话"
              onKeyDown={(e) => handleArrow(e, nameRef, emailRef)}
              className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-3 focus:ring-blue-600"
            />

            {/* 邮箱 */}
            <input
              ref={emailRef}
              placeholder="邮箱"
              onKeyDown={(e) => handleArrow(e, phoneRef, messageRef)}
              className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-3 focus:ring-blue-600"
            />

            {/* 咨询内容（Enter 只换行） */}
            <textarea
              ref={messageRef}
              rows={6}
              placeholder="咨询内容（Enter 换行，↑↓切换）"
              onKeyDown={(e) => handleArrow(e, emailRef, submitRef)}
              className="w-full px-4 py-3 border border-gray-200 rounded-lg resize-y focus:outline-none focus:ring-3 focus:ring-blue-600"
            />

            {/* 提交 */}
            <button
              ref={submitRef}
              type="submit"
              onKeyDown={(e) => {
                if (e.key === 'ArrowUp') {
                  e.preventDefault();
                  messageRef.current?.focus();
                }
              }}
              className="block mx-auto bg-blue-600 text-white px-14 py-3 rounded-lg hover:bg-blue-700"
            >
              立即提交
            </button>

            {success && (
              <div className="
                    fixed top-24 left-1/2 -translate-x-1/2 flex items-center gap-2 bg-green-500 text-white
                    px-6 py-3 rounded-lg shadow-lg animate-fade z-50 ">
                      <Check className="w-5 h-5" />
                      <span className="text-sm font-medium">
                        提交成功
                      </span>
                    </div>
                  )}
          </form>
        </div>
      </div>
    </section>
  );
}
