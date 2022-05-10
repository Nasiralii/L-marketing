import Image from 'next/image'
import React from 'react'

const _Footer = () => {
  return (
    <>
      <div className='bg-black border-b-2 px-4 border-white  bg-cover h-auto bg-center p-12 w-full'>
        <div className='container  mx-auto py-4'>
          <div className='my-5'>
            <a href='/landing'>
              <span className=' font-bold whitespace-nowrap'>
                <Image className='w-[100px]' src="/image/lmar-logo.jpeg" height="100%" width="100%" alt='LMAR logo' />
              </span>
            </a>
          </div>
          <div
            className='h-auto pt-6 flex flex-wrap container w-full'
            style={{ justifyContent: 'space-between' }}
          >
            <div className='w-auto text-left md:pr-24 pt-10 lg:pt-0 ml-6 md:ml-0'>
              <h1 className='text-xl font-bold text-white mb-0 py-4 '>LMAR</h1>
              <ul className=' w-auto footerLinks'>
               <li className='mt-5 pr-1 text-white text-sm'>About Us</li>
               <li className='mt-5 pr-1 text-white text-sm'>Contact Us</li>
               <li className='mt-5 pr-1 text-white text-sm'>Join Us</li>
               <li className='mt-5 text-white text-sm'>How does LMAR work?</li>
              </ul>
            </div>
            <div className='w-auto text-left md:pr-24 pt-10 lg:pt-0 ml-6 md:ml-0'>
              <h1 className='text-xl font-bold text-white mb-0 py-4'>
                Want to Host?
              </h1>
              <ul className=' w-auto footerLinks'>
               <li className='mt-5 pr-1 text-white text-sm '>Ask an expert</li>
               <li className='mt-5 pr-1 text-white text-sm'>
                  How to be a Host?
                </li>
               <li className='mt-5 pr-1 text-white text-sm'>
                  Hosting Terms & Conditions
                </li>
               <li className='mt-5 text-white text-sm'>Host payment method</li>
              </ul>
            </div>
            <div className='w-auto text-left md:pr-24 pt-10 lg:pt-0 ml-6 md:ml-0'>
              <h1 className='text-xl font-bold text-white mb-0 py-4'>LMAR&apos;s Guests</h1>
              <ul className=' w-auto footerLinks'>
                <li className='mt-5 pr-1 text-white text-sm'>Book now</li>
                <li className='mt-5 pr-1 text-white text-sm'>
                  Guest&apos;s Terms & Conditions
                </li>
                <li className='mt-5 pr-1 text-white text-sm'>
                  Cancellation Policy
                </li>
                <li className='mt-5 text-white text-sm'>LMAR&apos;s Responsibility</li>
              </ul>
            </div>
            <div className='w-auto text-left md:pr-24 pt-10 lg:pt-0 ml-6 md:ml-0'>
              <h1 className='text-xl font-bold text-white mb-0 py-4'>Quick LMAR</h1>
              <ul className='  w-auto footerLinks'>
                <li className='mt-5 pr-1 text-white text-sm'>Tour Packages</li>
                <li className='mt-5 pr-1 text-white text-sm'>Media Center</li>
                <li className='mt-5 pr-1 text-white text-sm'>F.A.Q&apos;s</li>
                <li className='mt-5 text-white text-sm'>Newsroom</li>
              </ul>
            </div>
          </div>
          <div className='w-full bg-transparent mt-10'>
            <h1 className='text-xl font-bold text-white text-center md:text-left'>
              Follow Us
            </h1>
            <div className='flex flex-row w-full align-middle mt-1 space-x-3 justify-center md:justify-start'>
            </div>
          </div>
        </div>
      </div>

      <div className='h-auto bg-black'>
        <h1 className='text-center text-white py-4'>
          &copy; 2022 LMAR MARKETING LIMITED
        </h1>
      </div>
    </>
  )
}

export default _Footer