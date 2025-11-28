import React from 'react'
import { motion } from 'framer-motion'

const Pricing = () => {
  const plans = [
    {
      name: 'Starter',
      price: '₹3,000',
      description: 'Perfect for startups and small businesses',
      features: [
        'Up to 5 pages',
        'Mobile responsive design',
        'Contact form integration',
        'Basic SEO optimization',
        'Social media links',
        '2 rounds of revisions',
        '7-day delivery',
        'Free domain for 1 year'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '₹10,000',
      description: 'Ideal for growing businesses',
      features: [
        'Up to 10 pages',
        'Custom UI/UX design',
        'CMS integration (WordPress)',
        'Advanced SEO',
        'Image gallery & sliders',
        'Blog setup',
        'Contact forms',
        'Google Analytics',
        'Email integration',
        '3 rounds of revisions',
        '14-day delivery',
        'Free hosting for 6 months'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '₹25,000',
      description: 'For businesses that need it all',
      features: [
        'Unlimited pages',
        'Custom animations (GSAP/Framer)',
        'E-commerce integration',
        'Payment gateway setup',
        'Custom features & APIs',
        'Performance optimization',
        'Complete branding',
        'Admin dashboard',
        'Priority support',
        'Unlimited revisions',
        '30-day delivery',
        'Free hosting for 1 year'
      ],
      popular: false
    }
  ];

  return (
    <>
      <div className='py-16 px-4'>
        {/* Header */}
        <div className='flex flex-col items-center gap-2 mb-16'>
          <div className='flex flex-wrap items-center justify-center gap-4'>
            <span className='text-4xl md:text-5xl font-inter font-bold'>Transparent Pricing,</span>
            <span className='text-5xl md:text-7xl font-instrument italic'>no hidden fees.</span>
          </div>
          <p className='text-xl text-gray-600 text-center max-w-2xl mt-4'>
            Choose the plan that fits your needs. All prices include GST.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className='max-w-7xl mx-auto grid md:grid-cols-3 gap-8'>
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`
                relative bg-white rounded-2xl p-8 border-2 
                ${plan.popular ? 'border-black shadow-xl md:scale-105' : 'border-gray-200'}
                hover:shadow-lg transition-all duration-300
              `}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className='absolute -top-4 left-1/2 transform -translate-x-1/2'>
                  <span className='bg-black text-white px-4 py-1 rounded-full text-sm font-medium'>
                    Most Popular
                  </span>
                </div>
              )}

              {/* Plan Details */}
              <div className='text-center mb-6'>
                <h3 className='text-2xl font-bold mb-2'>{plan.name}</h3>
                <p className='text-gray-600 text-sm mb-4'>{plan.description}</p>
                <div className='mb-4'>
                  <span className='text-5xl font-bold'>{plan.price}</span>
                  <span className='text-gray-500 text-sm block mt-1'>one-time payment</span>
                </div>
              </div>

              {/* Features List */}
              <ul className='space-y-3 mb-8'>
                {plan.features.map((feature, i) => (
                  <li key={i} className='flex items-start gap-3'>
                    <svg className='w-5 h-5 text-green-500 shrink-0 mt-0.5' fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className='text-gray-700 text-sm'>{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA Button */}
              <button
                className={`
                  w-full py-3 px-6 rounded-xl font-medium transition-all
                  ${plan.popular 
                    ? 'bg-black text-white hover:bg-gray-800' 
                    : 'bg-gray-100 text-black hover:bg-gray-200'
                  }
                `}
              >
                Get Started
              </button>
            </motion.div>
          ))}
        </div>

        {/* Custom Pricing Note */}
        <div className='text-center mt-16'>
          <p className='text-gray-600 mb-4'>
            Need a custom e-commerce store or web app? Let's discuss your requirements.
          </p>
          <a 
            href="#contact" 
            className='inline-block px-8 py-3 bg-white border-2 border-black rounded-xl font-medium hover:bg-black hover:text-white transition-all'
          >
            Contact for Custom Quote
          </a>
        </div>

        {/* Payment Note */}
        <div className='max-w-3xl mx-auto mt-12 p-6 bg-gray-50 rounded-xl border border-gray-200'>
          <p className='text-sm text-gray-600 text-center'>
            💳 Payment Terms: 50% advance, 50% on delivery • All prices include GST • 
            Free revisions within 30 days of delivery
          </p>
        </div>
      </div>
    </>
  )
}

export default Pricing
