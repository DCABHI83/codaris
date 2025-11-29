import React from 'react'
import { motion } from 'framer-motion'

const Rental = () => {
  const rentalPlans = [
    {
      name: 'Starter',
      firstMonth: '₹29',
      regularPrice: '₹99',
      description: 'Perfect for startups and small businesses',
      features: [
        'Up to 5 pages',
        'Mobile responsive design',
        'Contact form integration',
        'Basic SEO optimization',
        'Social media links',
        'Monthly updates included',
        'Basic support',
        'Free domain included'
      ],
      popular: false
    },
    {
      name: 'Professional',
      firstMonth: '₹39',
      regularPrice: '₹199',
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
        'Weekly updates',
        'Priority support',
        'Free hosting included'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      firstMonth: '₹49',
      regularPrice: '₹299',
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
        'Daily updates',
        '24/7 priority support',
        'Free hosting & maintenance',
        'Unlimited revisions'
      ],
      popular: false
    }
  ];

  return (
    <>
      <div className='py-16 px-4'>
        {/* Rental Pricing Cards */}
        <div className='max-w-7xl mx-auto grid md:grid-cols-3 gap-8'>
          {rentalPlans.map((plan, index) => (
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
                
                {/* First Month Special */}
                <div className='mb-2'>
                  <div className='inline-block bg-green-50 border border-green-200 rounded-lg px-3 py-1 mb-2'>
                    <span className='text-green-700 text-sm font-semibold'>First Month Only</span>
                  </div>
                  <div>
                    <span className='text-5xl font-bold text-green-600'>{plan.firstMonth}</span>
                    <span className='text-gray-500 text-sm'>/month</span>
                  </div>
                </div>

                {/* Regular Pricing */}
                <div className='mt-4 pt-4 border-t border-gray-200'>
                  <p className='text-sm text-gray-500 mb-1'>Then</p>
                  <div>
                    <span className='text-3xl font-bold'>{plan.regularPrice}</span>
                    <span className='text-gray-500 text-sm'>/month</span>
                  </div>
                  <p className='text-xs text-gray-400 mt-1'>Cancel anytime</p>
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
                Start Free Trial
              </button>
            </motion.div>
          ))}
        </div>

        {/* Rental Benefits */}
        <div className='max-w-4xl mx-auto mt-16 grid md:grid-cols-3 gap-6'>
          <div className='text-center p-6 bg-gray-50 rounded-xl border border-gray-200'>
            <div className='w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3'>
              <svg className='w-6 h-6 text-green-600' fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h4 className='font-semibold mb-2'>No Long-Term Commitment</h4>
            <p className='text-sm text-gray-600'>Cancel anytime. No questions asked.</p>
          </div>

          <div className='text-center p-6 bg-gray-50 rounded-xl border border-gray-200'>
            <div className='w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3'>
              <svg className='w-6 h-6 text-blue-600' fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
              </svg>
            </div>
            <h4 className='font-semibold mb-2'>Regular Updates</h4>
            <p className='text-sm text-gray-600'>Your website stays fresh and updated.</p>
          </div>

          <div className='text-center p-6 bg-gray-50 rounded-xl border border-gray-200'>
            <div className='w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-3'>
              <svg className='w-6 h-6 text-purple-600' fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
            </div>
            <h4 className='font-semibold mb-2'>Ongoing Support</h4>
            <p className='text-sm text-gray-600'>Get help whenever you need it.</p>
          </div>
        </div>

        {/* Additional Info */}
        <div className='max-w-3xl mx-auto mt-12 p-6 bg-linear-to-r from-green-50 to-blue-50 rounded-xl border border-green-200'>
          <div className='flex items-start gap-3'>
            <svg className='w-6 h-6 text-green-600 shrink-0 mt-1' fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
            </svg>
            <div>
              <h4 className='font-semibold mb-1'>🎉 Special Launch Offer!</h4>
              <p className='text-sm text-gray-700'>
                Get your first month at an introductory price. After that, enjoy our regular monthly rate with the flexibility to cancel anytime. All plans include hosting, maintenance, and updates!
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Rental
