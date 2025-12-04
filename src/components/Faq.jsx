import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const Faq = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "What's the difference between one-time and rental pricing?",
      answer: "One-time pricing means you pay once and own the website forever. Rental pricing is a monthly subscription that includes ongoing updates, maintenance, and support. With rental, you get the first month at a special introductory price, then continue at regular monthly rates. You can cancel anytime with no long-term commitment."
    },
    {
      question: "Do you provide hosting and domain?",
      answer: "Yes! All our plans include free hosting on platforms like Vercel, Netlify, or Render - perfect for small to medium traffic websites. However, domains are not included and must be purchased separately (typically ₹500-1000/year). If your site gets high traffic, we'll help you migrate to a VPS server (hosting costs apply separately)."
    },
    {
      question: "How long does it take to build a website?",
      answer: "Delivery time depends on your plan: Starter websites take 7 days, Professional websites take 14 days, and Enterprise projects take 30 days. These timelines start after we receive the initial payment and all required content (text, images, branding materials) from you."
    },
    {
      question: "What if I need changes after the website is delivered?",
      answer: "For one-time payments, you get free revisions within 30 days of delivery (2-3 rounds depending on your plan). After that, minor updates can be done at hourly rates. For rental plans, ongoing updates and changes are included in your monthly subscription based on your plan tier."
    },
    {
      question: "Can I upgrade or downgrade my plan later?",
      answer: "Absolutely! For rental plans, you can upgrade or downgrade anytime - changes take effect from the next billing cycle. For one-time purchases, you can upgrade by paying the difference between plans. We'll work with you to find the best solution for your growing needs."
    },
    {
      question: "What technologies do you use to build websites?",
      answer: "We build modern, fast websites using React, Next.js, and Tailwind CSS for custom sites. For content-heavy sites, we use WordPress with custom themes. We also integrate animations using GSAP and Framer Motion. All websites are mobile-responsive, SEO-optimized, and deployed on reliable hosting platforms."
    },
    {
      question: "Do I get the source code?",
      answer: "Yes! For one-time payments, you get full access to the source code and can host it wherever you want. For rental plans, you get the code when you complete your subscription or purchase the website outright. We believe in transparency and giving you control over your digital assets."
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept UPI, bank transfers, and online payments. For one-time projects, we follow a 50% advance and 50% on delivery model. For rental plans, payments are processed monthly. All prices include GST, and you'll receive proper invoices for all transactions."
    },
    {
      question: "Can you help with e-commerce websites?",
      answer: "Yes! Our Enterprise plan includes e-commerce integration with payment gateway setup. We can integrate popular payment methods like Razorpay, Stripe, or PayU. We also set up product catalogs, shopping carts, order management, and admin dashboards based on your requirements."
    },
    {
      question: "What kind of support do you provide?",
      answer: "Support varies by plan: Starter gets basic email support, Professional gets priority email/chat support with weekly updates, and Enterprise gets 24/7 priority support with dedicated assistance. Rental plans include ongoing support as part of your subscription. We're here to help whenever you need us!"
    }
  ];

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
      <div className='py-16 px-4 bg-linear-to-br from-gray-50 via-white to-gray-100 w-full'>
     
        <div className='flex flex-col items-center mb-16'>
          <h3 className='text-gray-400 font-mono text-sm uppercase tracking-wider mb-4'>FAQ</h3>
          <h1 className='text-5xl md:text-6xl font-inter font-bold text-center mb-4'>
            Got questions?
          </h1>
          <p className='text-xl text-gray-600 text-center max-w-2xl'>
            We've got answers. Can't find what you're looking for? 
            <a href="#contact" className='text-black font-medium underline ml-1'>Contact us</a>
          </p>
        </div>

       
        <div className='max-w-full mx-auto md:p-10'>
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              viewport={{ once: true }}
              className='mb-4'
            >
              <button
                onClick={() => toggleFaq(index)}
                className='w-full bg-white border border-gray-200 rounded-xl p-6 text-left hover:border-gray-300 transition-all hover:shadow-md'
              >
                <div className='flex items-center justify-between gap-4'>
                  <h3 className='text-lg font-semibold pr-8'>{faq.question}</h3>
                  <motion.div
                    animate={{ rotate: openIndex === index ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className='shrink-0'
                  >
                    <svg 
                      className='w-6 h-6 text-gray-600' 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        strokeWidth={2} 
                        d="M19 9l-7 7-7-7" 
                      />
                    </svg>
                  </motion.div>
                </div>

                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className='overflow-hidden'
                    >
                      <p className='text-gray-600 mt-4 leading-relaxed'>
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </button>
            </motion.div>
          ))}
        </div>

        {/* Still Have Questions CTA */}
        <div className='max-w-3xl mx-auto mt-16 text-center p-8 bg-white rounded-2xl border border-gray-200'>
          <h3 className='text-2xl font-bold mb-3'>Still have questions?</h3>
          <p className='text-gray-600 mb-6'>
            Can't find the answer you're looking for? Our team is here to help.
          </p>
          <a 
            href="#contact" 
            className='inline-block px-8 py-3 bg-black text-white rounded-xl font-medium hover:bg-gray-800 transition-all'
          >
            Get in Touch
          </a>
        </div>
      </div>
    </>
  )
}

export default Faq
