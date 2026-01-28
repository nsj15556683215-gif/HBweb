import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { Check, X } from 'lucide-react';
import { Card } from '../components/card';
import {
  contactInfo,
  emailConfig,
  contactText,
} from '../data/contact';

export function Contact() {
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<'success' | 'error' | null>(null);
  const [loading, setLoading] = useState(false);

  const sendEmail = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;

    setLoading(true);
    setStatus(null);

    try {
      await emailjs.sendForm(
        emailConfig.serviceId,
        emailConfig.templateId,
        formRef.current,
        emailConfig.publicKey
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
          <h3 className="text-2xl font-semibold text-center mb-8">
            {contactText.title}
          </h3>

          <form ref={formRef} onSubmit={sendEmail} className="space-y-6">
            <input
              name="user_name"
              placeholder={contactText.placeholders.name}
              required
              className="w-full px-4 py-3 border rounded-lg"
            />

            <input
              name="user_phone"
              placeholder={contactText.placeholders.phone}
              required
              className="w-full px-4 py-3 border rounded-lg"
            />

            <input
              name="user_email"
              type="email"
              placeholder={contactText.placeholders.email}
              required
              className="w-full px-4 py-3 border rounded-lg"
            />

            <textarea
              name="message"
              rows={5}
              placeholder={contactText.placeholders.message}
              required
              className="w-full px-4 py-3 border rounded-lg resize-none"
            />

            <button
              type="submit"
              disabled={loading}
              className="block mx-auto bg-blue-600 text-white px-14 py-3 rounded-lg hover:bg-blue-700 disabled:opacity-60"
            >
              {loading ? contactText.submitting : contactText.submit}
            </button>
          </form>
        </div>

        {/* 成功提示 */}
        {status === 'success' && (
          <div className="fixed top-24 left-1/2 -translate-x-1/2 bg-green-500 text-white px-6 py-3 rounded-lg flex gap-2 z-50">
            <Check className="w-5 h-5" />
            {contactText.success}
          </div>
        )}

        {/* 失败提示 */}
        {status === 'error' && (
          <div className="fixed top-24 left-1/2 -translate-x-1/2 bg-red-500 text-white px-6 py-3 rounded-lg flex gap-2 z-50">
            <X className="w-5 h-5" />
            {contactText.error}
          </div>
        )}
      </div>
    </section>
  );
}
