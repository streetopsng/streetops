"use client";
import React from 'react';
import Image from 'next/image';
import { FaComments, FaTimes } from 'react-icons/fa';

const Section = () => {
  const [input, setInput] = React.useState('');
  const [messages, setMessages] = React.useState<{ role: 'user' | 'assistant'; content: string }[]>([]);
  const [isChatOpen, setIsChatOpen] = React.useState(false);

  // Auto-scroll to bottom when new message arrives
  React.useEffect(() => {
    const chat = document.getElementById('chat-messages');
    if (chat) chat.scrollTop = chat.scrollHeight;
  }, [messages]);

  const sendMessage = async () => {
    if (!input.trim()) return;

    const newMessages = [...messages, { role: 'user' as const, content: input }];
    setMessages(newMessages);
    setInput('');

    const res = await fetch('/api/chat', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ message: input }),
    });

    const data = await res.json();
    setMessages([...newMessages, { role: 'assistant' as const, content: data.reply }]);
  };

  return (
    <div className="xl:px-32 md:px-8 px-4 flex flex-col bg-purple-200 justify-start items-center min-h-screen lg:px-20 py-10 space-y-10 text-primary">
      {/* work life balance */}
      <div className="flex flex-col lg:flex-row items-center p-6 rounded-lg gap-6 w-full max-w-6xl">
        <div className="flex-1 space-y-4">
          <h2 className="font-semibold text-2xl lg:text-[2.2rem] leading-snug lg:text-start text-center">
            The Future of <br className="block sm:hidden" />
            Balanced Workforces.
          </h2>
          <p>
            We are championing workforce evolution, offering innovative operational strategies that drive business transformation. By integrating specialized recruitment, smart automations and workflow optimization, we empower organizations to thrive. Our focus is on delivering <q>The Future of Balanced Workforces</q> - where talent blends with technology.
          </p>
        </div>
        <Image alt="paige" src="/connect.png" width={300} height={300} />
      </div>

      {/* Suppliers & Financiers Section */}
      <div className="flex flex-col lg:flex-row gap-6 w-full max-w-6xl">
        {/* People */}
        <div className="flex-1 bg-purple-100 p-6 rounded-lg flex flex-col items-center">
          <h2 className="uppercase font-semibold text-xl lg:text-2xl text-center">People</h2>
          <p className="text-base pt-4">
            We believe that people are the core of every successful organization. Our People section provides strategic solutions to maximize your human capital investment. We offer:
            <br />
            <strong>Strategic Recruitment</strong>: Identifying and placing the right talent to achieve your business objectives.
            <br />
            <strong>Transformative Training</strong>: Equipping your workforce with the skills and knowledge needed to excel.
            <br />
            <strong>Human Capital Leadership (Africa)</strong>: Actively contributing to the development of human capital across the African continent through webinars, training programs, and a dynamic blog, fostering a community of growth and innovation.
          </p>
          <Image alt="paige" src="/people.png" width={250} height={250} className="mt-4 rounded-lg" />
        </div>

        {/* Processes */}
        <div className="flex-1 bg-purple-100 p-6 rounded-lg flex flex-col items-center">
          <h2 className="uppercase font-semibold text-xl lg:text-2xl text-center">Processes</h2>
          <p className="text-base pt-4">
            We partner with organizations to transform their operations and achieve peak performance. Our Processes section delivers strategic consulting services, including:
            <br />
            <strong>Operational Consulting</strong>: Providing expert guidance to optimize workflows, reduce costs, and improve overall operational effectiveness.
            <br />
            <strong>Process Automation</strong>: Leveraging automation technologies to drive efficiency, accuracy, and scalability.
            <br />
            <strong>Comprehensive Consulting Solutions</strong>: Offering a suite of consulting services to support organizational change, improve project delivery, and enhance overall business performance.
          </p>
          <Image alt="paige" src="/processes.png" width={250} height={200} className="mt-4 rounded-lg" />
        </div>
      </div>

      
    </div>
  );
};

export default Section;