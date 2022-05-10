import type { NextPage } from 'next'
import Head from 'next/head'
import Navbar from "../component/Navbar"
import _Footer from "../component/_Footer";
import Image from 'next/image'
import { URL } from 'url'
const Home: NextPage = () => {
  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Khula:wght@700;800&family=Lato:wght@300;400&display=swap" rel="stylesheet" />
      </Head>
      <div className=' bg-no-repeat  bg-center bg-cover ' style={{ backgroundImage: "linear-gradient(180deg,rgba(0,0,0,0.58) 0%,rgba(0,0,0,0.54) 100%), url(/image/bg.jpg)" }}>
        <div className='container-fluid xl:h-[46rem] lg:h-[46rem] h-auto'>
          <Navbar />
          <div className='container py-8'>
            <div className='xl:text-[5.625rem] lg:text-[5.625rem] md:text-[5.625rem] text-[3rem] font-extrabold text-center pt-[6rem]  y-clr '><h2>MOVE ON UP</h2></div>
            <div className=''><p className='xl:text-[2.625rem] lg:text-[2.625rem] md:text-[2.625rem] text-xl text-center px-8 pt-3 py-8 text-white'>We have more than 17 years of experience</p></div>
            <div className='xl:flex justify-center m-auto gap-10 xl:py-8 lg:py-8 md:py-8 '>
              <div className='3-card  xl:w-[16.688rem] lg:w-[16.688rem] h-[11rem] lg:mx-0 xl:mx-0  md:mx-16 mx-8 xl:m-0 lg:m-0 my-8 m-auto bg-cover bg-center ' style={{ backgroundImage: "linear-gradient(180deg,rgba(255,255,255,0.58) 0%,rgba(0,75,181,0.58) 100%),url(/image/capital-smart.jpg)" }}>
                <p className='y-bg relative py-1 top-40 text-white text-center font-medium '>CAPITAL SMART CITY</p>
              </div>
              <div className='3-card   xl:w-[16.688rem] lg:w-[16.688rem] h-[11rem] lg:mx-0 xl:mx-0  md:mx-16 mx-8  xl:m-0 lg:m-0 my-8 m-auto  bg-cover bg-center ' style={{ backgroundImage: "linear-gradient(180deg,rgba(255,255,255,0.58) 0%,rgba(0,75,181,0.58) 100%),url(/image/park-city.jpg)" }}>
                <p className='y-bg relative py-1 top-40 text-white text-center font-medium '>CAPITAL SMART CITY</p>
              </div>
              <div className='3-card   xl:w-[16.688rem] lg:w-[16.688rem] h-[11rem] lg:mx-0 xl:mx-0  md:mx-16 mx-8  xl:m-0 lg:m-0 my-8 m-auto  bg-cover bg-center ' style={{ backgroundImage: "linear-gradient(180deg,rgba(255,255,255,0.58) 0%,rgba(0,75,181,0.58) 100%),url(/image/blue-city.jpg)" }}>
                <p className='y-bg relative py-1 top-40 text-white text-center font-medium '>CAPITAL SMART CITY</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='container-fluid'>
        <div className='grid xl:grid-cols-2 lg:grid-cols-2 grid-cols-1 '>
          <div className=''>
            <h2 className='xl:text-6xl lg:text-5xl md:text-6xl text-4xl  py-10 xl:px-40 lg:px-16 px-20 my-16  raltive  bg-gray-100 y-clr'>Welcome to <br />SKY MARKETING</h2>
          </div>
          <div className=' xl:block lg:block hidden  px-8'>
            <Image src="/image/guranty.png" width="220px" height="220px" />
            <Image src="/image/excellence.png" width="220px" height="220px" />
          </div>
        </div>
      </div>

      <div className='container xl:py-8 lg:py-8 md:py-8 '>
        <div className='grid xl:grid-cols-2 lg:grid-cols-2 gap-4'>
          <p className='xl:text-2xl lg:text-xl xl:px-4 lg:px-4 md:px-20 px-8 leading-9'>Welcome to the rapidly emerging Real Estate Company <b>Sky Marketing</b> Islamabad working from last 15 years. Our professional team is serving many housing societies for marketing purposes and has completed many renowned projects achieving high excellency. Use of most modern techniques of marketing like e-media and web-based medium for mass communication is
            one of our strengths to reach-out maximum number of clients and customers.</p>

          <div className='px-2 m-auto'>
            <img src='/image/pic1.jpg' />

          </div>
        </div>
      </div>
      <div className='container bg-cover xl:h-80 lg:h-80  ' style={{ backgroundImage: "linear-gradient(180deg,rgba(239,239,239,0.9) 0%,rgba(239,239,239,0.9) 100%),url(image/bg-house.jpg)" }}>
        <div className='grid xl:grid-cols-2 lg:grid-cols-2'>
          <div className=''> <img src='/image/house.png' /></div>
          <div className='relative text-center xl:top-20 lg:top-20'><h2 className='text-5xl '>WE ARE 24/7 AVAILABLE</h2>
            <img className='my-8 m-auto' src='/image/line.png' />
            <button className='y-bg py-2 px-4 text-white m-auto text-center justify-center flex'>CONTACT US</button>
          </div>
        </div>
      </div>
      <div className=' py-36 relative xl:top-16 lg:top-16  ' style={{ backgroundImage: "linear-gradient(180deg,rgba(0,0,0,0.95) 0%,rgba(0,0,0,0.95) 100%),url(https://skymarketing.com.pk/wp-content/uploads/2019/08/1920x1080.jpg)" }}>
        <div className='container xl:px-0 lg:px-0 md:px-12 px-8 '>
          <h2 className='xl:text-6xl lg:text-6xl md:text-6xl text-4xl text-center font-bold text-white'>OUR CURRENT PROJECTS</h2>
          <div className='grid xl:grid-cols-3 lg:grid-cols-3 xl:py-20 lg:py-12 md:py-20  xl:gap-16 lg:gap-8'>
            <div className='w-full h-[14rem] xl:my-0 lg:my-0 my-8 bg-cover bg-center bg-[url(/image/capital-smart.jpg)] '>
              <p className='y-bg relative py-3 top-48 text-white text-center font-medium '>CAPITAL SMART CITY</p>
            </div>
            <div className='w-full h-[14rem] xl:my-0 lg:my-0  bg-cover bg-center bg-[url(/image/blue-city.jpg)]'>
              <p className='y-bg relative py-3 top-48 text-white text-center font-medium '>CAPITAL SMART CITY</p>
            </div>
            <div className='w-full h-[14rem] xl:my-0 lg:my-0 my-8 bg-cover bg-center bg-[url(/image/view-city.jpg)] '>
              <p className='y-bg relative py-3 top-48 text-white text-center font-medium '>CAPITAL SMART CITY</p>
            </div>
          </div>
          <div className='grid xl:grid-cols-3 lg:grid-cols-3 xl:px-0 lg:px-0     xl:gap-16 lg:gap-8'>
            <div className='w-full h-[14rem] xl:my-0 lg:my-0 my-0 bg-cover bg-center bg-[url(/image/nova-city.jpg)] '>
              <p className='y-bg relative py-3 top-48 text-white text-center font-medium '>CAPITAL SMART CITY</p>
            </div>
            <div className='w-full h-[14rem] xl:my-0 lg:my-0 my-8 bg-cover bg-center bg-[url(/image/lahore-city.jpg)]'>
              <p className='y-bg relative py-3 top-48 text-white text-center font-medium '>CAPITAL SMART CITY</p>
            </div>
            <div className='w-full h-[14rem] bg-cover bg-center bg-[url(/image/enclave.jpg)] '>
              <p className='y-bg relative py-3 top-48 text-white text-center font-medium '>CAPITAL SMART CITY</p>
            </div>
          </div>
        </div>
      </div>

      <div className='relative py-20 top-20 bg-no-repeat bg-cover' style={{ backgroundImage: "radial-gradient(circle at top,rgba(255,255,255,0.95) 53%,rgba(255,255,255,0.95) 100%),url(https://skymarketing.com.pk/wp-content/uploads/2019/08/1920x1080.jpg)" }}>
        <div className='container-fluid'>
          <div className='container'>
            <h1 className='text-5xl text-center px-4 py-8 '>WHY CHOOSE SKY MARKETING</h1>
            <div className='grid xl:grid-cols-2 lg:grid-cols-2'>
              <div>
                <div className='flex xl:justify-between lg:justify-between  justify-between px-2 py-6'>
                  <span><svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="#ffa700" className="bi bi-currency-dollar" viewBox="0 0 16 16">
                    <path d="M4 10.781c.148 1.667 1.513 2.85 3.591 3.003V15h1.043v-1.216c2.27-.179 3.678-1.438 3.678-3.3 0-1.59-.947-2.51-2.956-3.028l-.722-.187V3.467c1.122.11 1.879.714 2.07 1.616h1.47c-.166-1.6-1.54-2.748-3.54-2.875V1H7.591v1.233c-1.939.23-3.27 1.472-3.27 3.156 0 1.454.966 2.483 2.661 2.917l.61.162v4.031c-1.149-.17-1.94-.8-2.131-1.718H4zm3.391-3.836c-1.043-.263-1.6-.825-1.6-1.616 0-.944.704-1.641 1.8-1.828v3.495l-.2-.05zm1.591 1.872c1.287.323 1.852.859 1.852 1.769 0 1.097-.826 1.828-2.2 1.939V8.73l.348.086z" />
                  </svg></span><h2 className='text-2xl y-clr'>MARKETERS</h2>
                </div>
                <div className='flex xl:justify-between lg:justify-between  justify-between px-2 py-6'>
                  <span><svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="#ffa700" className="bi bi-currency-dollar" viewBox="0 0 16 16">
                    <path d="M4 10.781c.148 1.667 1.513 2.85 3.591 3.003V15h1.043v-1.216c2.27-.179 3.678-1.438 3.678-3.3 0-1.59-.947-2.51-2.956-3.028l-.722-.187V3.467c1.122.11 1.879.714 2.07 1.616h1.47c-.166-1.6-1.54-2.748-3.54-2.875V1H7.591v1.233c-1.939.23-3.27 1.472-3.27 3.156 0 1.454.966 2.483 2.661 2.917l.61.162v4.031c-1.149-.17-1.94-.8-2.131-1.718H4zm3.391-3.836c-1.043-.263-1.6-.825-1.6-1.616 0-.944.704-1.641 1.8-1.828v3.495l-.2-.05zm1.591 1.872c1.287.323 1.852.859 1.852 1.769 0 1.097-.826 1.828-2.2 1.939V8.73l.348.086z" />
                  </svg></span><h2 className='text-2xl y-clr'>INVESTMENT CONSULTANT</h2>
                </div>
                <div className='flex xl:justify-between lg:justify-between  justify-between px-2 py-6'>
                  <span><svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="#ffa700" className="bi bi-currency-dollar" viewBox="0 0 16 16">
                    <path d="M4 10.781c.148 1.667 1.513 2.85 3.591 3.003V15h1.043v-1.216c2.27-.179 3.678-1.438 3.678-3.3 0-1.59-.947-2.51-2.956-3.028l-.722-.187V3.467c1.122.11 1.879.714 2.07 1.616h1.47c-.166-1.6-1.54-2.748-3.54-2.875V1H7.591v1.233c-1.939.23-3.27 1.472-3.27 3.156 0 1.454.966 2.483 2.661 2.917l.61.162v4.031c-1.149-.17-1.94-.8-2.131-1.718H4zm3.391-3.836c-1.043-.263-1.6-.825-1.6-1.616 0-.944.704-1.641 1.8-1.828v3.495l-.2-.05zm1.591 1.872c1.287.323 1.852.859 1.852 1.769 0 1.097-.826 1.828-2.2 1.939V8.73l.348.086z" />
                  </svg></span><h2 className='text-2xl y-clr'>DEALER & PROMOTERS</h2>
                </div>
                <div className='flex xl:justify-between lg:justify-between  justify-between px-2 py-6'>
                  <span className=''> <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 841.9 595.3">
                    <g fill="#ffa700">
                      <path d="M666.3 296.5c0-32.5-40.7-63.3-103.1-82.4 14.4-63.6 8-114.2-20.2-130.4-6.5-3.8-14.1-5.6-22.4-5.6v22.3c4.6 0 8.3.9 11.4 2.6 13.6 7.8 19.5 37.5 14.9 75.7-1.1 9.4-2.9 19.3-5.1 29.4-19.6-4.8-41-8.5-63.5-10.9-13.5-18.5-27.5-35.3-41.6-50 32.6-30.3 63.2-46.9 84-46.9V78c-27.5 0-63.5 19.6-99.9 53.6-36.4-33.8-72.4-53.2-99.9-53.2v22.3c20.7 0 51.4 16.5 84 46.6-14 14.7-28 31.4-41.3 49.9-22.6 2.4-44 6.1-63.6 11-2.3-10-4-19.7-5.2-29-4.7-38.2 1.1-67.9 14.6-75.8 3-1.8 6.9-2.6 11.5-2.6V78.5c-8.4 0-16 1.8-22.6 5.6-28.1 16.2-34.4 66.7-19.9 130.1-62.2 19.2-102.7 49.9-102.7 82.3 0 32.5 40.7 63.3 103.1 82.4-14.4 63.6-8 114.2 20.2 130.4 6.5 3.8 14.1 5.6 22.5 5.6 27.5 0 63.5-19.6 99.9-53.6 36.4 33.8 72.4 53.2 99.9 53.2 8.4 0 16-1.8 22.6-5.6 28.1-16.2 34.4-66.7 19.9-130.1 62-19.1 102.5-49.9 102.5-82.3zm-130.2-66.7c-3.7 12.9-8.3 26.2-13.5 39.5-4.1-8-8.4-16-13.1-24-4.6-8-9.5-15.8-14.4-23.4 14.2 2.1 27.9 4.7 41 7.9zm-45.8 106.5c-7.8 13.5-15.8 26.3-24.1 38.2-14.9 1.3-30 2-45.2 2-15.1 0-30.2-.7-45-1.9-8.3-11.9-16.4-24.6-24.2-38-7.6-13.1-14.5-26.4-20.8-39.8 6.2-13.4 13.2-26.8 20.7-39.9 7.8-13.5 15.8-26.3 24.1-38.2 14.9-1.3 30-2 45.2-2 15.1 0 30.2.7 45 1.9 8.3 11.9 16.4 24.6 24.2 38 7.6 13.1 14.5 26.4 20.8 39.8-6.3 13.4-13.2 26.8-20.7 39.9zm32.3-13c5.4 13.4 10 26.8 13.8 39.8-13.1 3.2-26.9 5.9-41.2 8 4.9-7.7 9.8-15.6 14.4-23.7 4.6-8 8.9-16.1 13-24.1zM421.2 430c-9.3-9.6-18.6-20.3-27.8-32 9 .4 18.2.7 27.5.7 9.4 0 18.7-.2 27.8-.7-9 11.7-18.3 22.4-27.5 32zm-74.4-58.9c-14.2-2.1-27.9-4.7-41-7.9 3.7-12.9 8.3-26.2 13.5-39.5 4.1 8 8.4 16 13.1 24 4.7 8 9.5 15.8 14.4 23.4zM420.7 163c9.3 9.6 18.6 20.3 27.8 32-9-.4-18.2-.7-27.5-.7-9.4 0-18.7.2-27.8.7 9-11.7 18.3-22.4 27.5-32zm-74 58.9c-4.9 7.7-9.8 15.6-14.4 23.7-4.6 8-8.9 16-13 24-5.4-13.4-10-26.8-13.8-39.8 13.1-3.1 26.9-5.8 41.2-7.9zm-90.5 125.2c-35.4-15.1-58.3-34.9-58.3-50.6 0-15.7 22.9-35.6 58.3-50.6 8.6-3.7 18-7 27.7-10.1 5.7 19.6 13.2 40 22.5 60.9-9.2 20.8-16.6 41.1-22.2 60.6-9.9-3.1-19.3-6.5-28-10.2zM310 490c-13.6-7.8-19.5-37.5-14.9-75.7 1.1-9.4 2.9-19.3 5.1-29.4 19.6 4.8 41 8.5 63.5 10.9 13.5 18.5 27.5 35.3 41.6 50-32.6 30.3-63.2 46.9-84 46.9-4.5-.1-8.3-1-11.3-2.7zm237.2-76.2c4.7 38.2-1.1 67.9-14.6 75.8-3 1.8-6.9 2.6-11.5 2.6-20.7 0-51.4-16.5-84-46.6 14-14.7 28-31.4 41.3-49.9 22.6-2.4 44-6.1 63.6-11 2.3 10.1 4.1 19.8 5.2 29.1zm38.5-66.7c-8.6 3.7-18 7-27.7 10.1-5.7-19.6-13.2-40-22.5-60.9 9.2-20.8 16.6-41.1 22.2-60.6 9.9 3.1 19.3 6.5 28.1 10.2 35.4 15.1 58.3 34.9 58.3 50.6-.1 15.7-23 35.6-58.4 50.6zM320.8 78.4z" />
                    </g>
                  </svg></span><h2 className='text-2xl y-clr '>DEVELOPERS</h2>
                </div>
                <div className='flex xl:justify-between lg:justify-between  justify-between px-2 py-6'>
                  <span><svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="#ffa700" className="bi bi-building" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M14.763.075A.5.5 0 0 1 15 .5v15a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5V14h-1v1.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V10a.5.5 0 0 1 .342-.474L6 7.64V4.5a.5.5 0 0 1 .276-.447l8-4a.5.5 0 0 1 .487.022zM6 8.694 1 10.36V15h5V8.694zM7 15h2v-1.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5V15h2V1.309l-7 3.5V15z" />
                    <path d="M2 11h1v1H2v-1zm2 0h1v1H4v-1zm-2 2h1v1H2v-1zm2 0h1v1H4v-1zm4-4h1v1H8V9zm2 0h1v1h-1V9zm-2 2h1v1H8v-1zm2 0h1v1h-1v-1zm2-2h1v1h-1V9zm0 2h1v1h-1v-1zM8 7h1v1H8V7zm2 0h1v1h-1V7zm2 0h1v1h-1V7zM8 5h1v1H8V5zm2 0h1v1h-1V5zm2 0h1v1h-1V5zm0-2h1v1h-1V3z" />
                  </svg></span><h2 className='text-2xl  y-clr'>PROPERTY ADVISOR</h2>
                </div>
              </div>
              <div className=''>
                <div className="testimonial-1 ">
                  <div className="container mx-auto xl:px-4 lg:px-4 md:px-20 px-2">
                    <div className="md:flex md:flex-wrap md:-mx-4 mb-4">
                      <div className=" md:px-4 mt-6">
                        <div className="testimonial p-8 bg-blue-600  border-2 border-solid flex  transition-colors duration-300">
                          <div className="w-16 h-16 md:w-24 md:h-24 rounded-full overflow-hidden mr-4 md:mr-6 flex-shrink-0">
                            <img src="image/client-1.jpeg" alt="profile image" className="w-full h-full object-cover" />
                          </div>
                          <div>
                            <p className="text-white">" Had taken consultation regarding purchase of property in islamabad for my relatives, thanks to team @skymarketing for making it that simple. Highly recommended..!"</p>
                            <div className="text-white font-bold uppercase mt-6">- Candace H.</div>
                          </div>
                        </div>
                      </div>
                      <div className="md:px-4 mt-6">
                        <div className="testimonial p-8 bg-blue-600 border-2 border-solid flex  transition-colors duration-300">
                          <div className="w-16 h-16 md:w-24 md:h-24 rounded-full overflow-hidden mr-4 md:mr-6 flex-shrink-0">
                            <img src="image/client-2.jpg" alt="profile image" className="w-full h-full object-cover" />
                          </div>
                          <div>
                            <p className="text-white">"This is \ Blocks often. You've saved our business! No matter where you go, FWR Bootstrap Blocks is the coolest, most happening thing around!"</p>
                            <div className="text-white font-bold uppercase mt-6">- Joe H.</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='text-center '>
              <h2 className='text-6xl py-8 text-blue-900 '>Our clients love us</h2>
              <p className='text-3xl'>We have an average of 9.6</p>
              <ul className="flex justify-center py-4">
                <li>
                  <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star" className="w-14 text-yellow-500 mr-1" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                    <path fill="currentColor" d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path>
                  </svg>
                </li>
                <li>
                  <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star" className="w-14 text-yellow-500 mr-1" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                    <path fill="currentColor" d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path>
                  </svg>
                </li>
                <li>
                  <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star" className="w-14 text-yellow-500 mr-1" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                    <path fill="currentColor" d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path>
                  </svg>
                </li>
                <li>
                  <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star" className="w-14 text-yellow-500 mr-1" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                    <path fill="currentColor" d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path>
                  </svg>
                </li>
                <li>
                  <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star" className="w-14 text-yellow-500 mr-1" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                    <path fill="currentColor" d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path>
                  </svg>
                </li>
              </ul>
              <button className='bg-blue-900 py-2 my-2 px-6 text-lg rounded text-white'>READ ALL REVIEWS</button>
            </div>

          </div>
        </div>
      </div>

<div className='bg-no-repeat bg-cover' style={{backgroundImage: "linear-gradient(180deg,rgba(255,167,0,0.85) 0%,rgba(30,61,126,0.85) 100%),url(https://skymarketing.com.pk/wp-content/uploads/2019/08/1920x1080.jpg)"}}>
      <div className='container-fluid xl:py-36 lg:py-36 md:py-36 py-20 pb-8'>
        <div className='container px-2'>
          <div className='grid xl:grid-cols-2 lg:grid-cols-2'>
            <div className='py-24 text-white font-extrabold xl:px-0 lg:px-0 xl:text-6xl lg:text-6xl md:text-6xl text-4xl md:px-20'><h2 className=''>WE ARE READY TO SERVE YOU IN REAL ESTATE</h2>
              <hr />
              <h2 className='text-xl py-8'>CALL US TODAY</h2>
              <h2 className='py-4'>(051) 848-7777</h2>
              <h2 className=''>+92 333-222-2241</h2>
              <h2 className='py-4'>+92 332-199-9562</h2>
            </div>
            <div className=''>
              <div className=''>
                
              <div className="w-full xl:px-36 lg:px-20 md:px-20 px-4 pt-24 ">
                
  <form className="shadow-md rounded px-4 bg-black py-16 mb-4">
  <h2 className='text-bold text-white text-center pb-8 text-xl'>Request for<span className='y-clr'> DISCOUNT</span> Booking</h2>
    <div className="mb-4">
      
      <input className=" appearance-none  border-b-2 bg-black rounded w-full border-yellow-400 py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline-0 " id="username" type="text" placeholder="FullName"/>
    </div>
    <div className="mb-6">
     
      <input className="appearance-none border-b-2 bg-black rounded border-yellow-400  w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline" id="password" type="text" placeholder="Contact Number"/>
    </div>
    <div className="flex items-center justify-between">
    <textarea className="textarea bg-black appearance-none border-b-2 border-yellow-400 rounded w-full pb-20 px-3 text-white leading-tight focus:outline-none focus:shadow-outline" placeholder="Type a message..."></textarea>
    </div>
    <div className="flex items-center justify-between pt-8">
      <button className='y-bg w-full py-2  rounded text-white text-xl '>send</button>
      </div>
  </form>
 
</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
      {/* <_Footer/> */}
    </>
  )
}

export default Home