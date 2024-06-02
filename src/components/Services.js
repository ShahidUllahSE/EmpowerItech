import React from 'react'
import mob from '../assets/mob.svg'
import web from '../assets/web.svg'
import ui from '../assets/ui.png'
import webcourse from '../assets/webcourse.png'
import amazon from '../assets/amazon.png'
import fiverr from '../assets/fiverr.png'

const Services = () => {
  return (
    <div>
      <div className='heading1 font-bold flex justify-center justify-items-center mt-7 text-3xl'>
        What we Offer?
        <svg
          class='w-7 h-7 ml-3 mt-1 text-gray-500 dark:text-gray-400 mb-3'
          aria-hidden='true'
          xmlns='http://www.w3.org/2000/svg'
          fill='currentColor'
          viewBox='0 0 20 20'
        >
          <path d='M18 5h-.7c.229-.467.349-.98.351-1.5a3.5 3.5 0 0 0-3.5-3.5c-1.717 0-3.215 1.2-4.331 2.481C8.4.842 6.949 0 5.5 0A3.5 3.5 0 0 0 2 3.5c.003.52.123 1.033.351 1.5H2a2 2 0 0 0-2 2v3a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1V7a2 2 0 0 0-2-2ZM8.058 5H5.5a1.5 1.5 0 0 1 0-3c.9 0 2 .754 3.092 2.122-.219.337-.392.635-.534.878Zm6.1 0h-3.742c.933-1.368 2.371-3 3.739-3a1.5 1.5 0 0 1 0 3h.003ZM11 13H9v7h2v-7Zm-4 0H2v5a2 2 0 0 0 2 2h3v-7Zm6 0v7h3a2 2 0 0 0 2-2v-5h-5Z' />
        </svg>
      </div>
      <div className='flex flex-wrap justify-center'>
        <div className='w-80 p-6 bg-white border border-gray-200 mt-11 ml-6 rounded-lg shadow dark:bg-white text-black dark:border-gray-700'>
          <img className='h-8 w-8 mb-3' src={mob} alt='' />
          <a href='#'>
            <h5 class='mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-black'>
              Mobile Application Development
            </h5>
          </a>
          <p class='mb-3 font-normal text-gray-500 dark:text-gray-400'>
            Create captivating mobile experiences with our expert team to boost
            brand visibility, engage users, and foster loyalty.
          </p>
          <a
            href='#'
            class='inline-flex font-medium items-center text-blue-600 hover:underline'
          >
            See our guideline{' '}
            <svg
              class='w-3 h-3 ms-2.5 rtl:rotate-[270deg]'
              aria-hidden='true'
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 18 18'
            >
              {' '}
              <path
                stroke='currentColor'
                stroke-linecap='round'
                stroke-linejoin='round'
                stroke-width='2'
                d='M15 11v4.833A1.166 1.166 0 0 1 13.833 17H2.167A1.167 1.167 0 0 1 1 15.833V4.167A1.166 1.166 0 0 1 2.167 3h4.618m4.447-2H17v5.768M9.111 8.889l7.778-7.778'
              />{' '}
            </svg>
          </a>
        </div>
        <div className='w-80 p-6 bg-white border border-gray-200 mt-11 ml-6 rounded-lg shadow dark:bg-white text-black dark:border-gray-700'>
          <img className='h-8 w-8 mb-3' src={web} alt='' />
          <a href='#'>
            <h5 class='mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-black'>
              Web Development
            </h5>
          </a>
          <p class='mb-3 font-normal text-gray-500 dark:text-gray-400'>
            Build a powerful online presence with our top-notch web development
            services, crafting responsive websites that captivate and convert
            visitors.
          </p>
          <a
            href='#'
            class='inline-flex font-medium items-center text-blue-600 hover:underline'
          >
            See our guideline{' '}
            <svg
              class='w-3 h-3 ms-2.5 rtl:rotate-[270deg]'
              aria-hidden='true'
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 18 18'
            >
              {' '}
              <path
                stroke='currentColor'
                stroke-linecap='round'
                stroke-linejoin='round'
                stroke-width='2'
                d='M15 11v4.833A1.166 1.166 0 0 1 13.833 17H2.167A1.167 1.167 0 0 1 1 15.833V4.167A1.166 1.166 0 0 1 2.167 3h4.618m4.447-2H17v5.768M9.111 8.889l7.778-7.778'
              />{' '}
            </svg>
          </a>
        </div>
        <div className='w-80 p-6 bg-white border border-gray-200 mt-11 ml-6 rounded-lg shadow dark:bg-white text-black dark:border-gray-700'>
          <img className='h-8 w-8 mb-3' src={ui} alt='' />
          <a href='#'>
            <h5 class='mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-black'>
              UX/UI Design
            </h5>
          </a>
          <p class='mb-3 font-normal text-gray-500 dark:text-gray-400'>
            Craft captivating, user-centric interfaces that seamlessly engage
            and delight your audience. From wireframes to prototypes, we bring
            your vision to life.
          </p>
          <a
            href='#'
            class='inline-flex font-medium items-center text-blue-600 hover:underline'
          >
            See our guideline{' '}
            <svg
              class='w-3 h-3 ms-2.5 rtl:rotate-[270deg]'
              aria-hidden='true'
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 18 18'
            >
              {' '}
              <path
                stroke='currentColor'
                stroke-linecap='round'
                stroke-linejoin='round'
                stroke-width='2'
                d='M15 11v4.833A1.166 1.166 0 0 1 13.833 17H2.167A1.167 1.167 0 0 1 1 15.833V4.167A1.166 1.166 0 0 1 2.167 3h4.618m4.447-2H17v5.768M9.111 8.889l7.778-7.778'
              />{' '}
            </svg>
          </a>
        </div>
      </div>
      <div className='flex flex-wrap justify-center mb-7'>
        <div className='w-80 p-6 bg-white border border-gray-200 mt-11 ml-6 rounded-lg shadow dark:bg-white text-black dark:border-gray-700'>
          <img className='h-8 w-8 mb-3' src={webcourse} alt='' />
          <a href='#'>
            <h5 class='mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-black'>
              MERN Stack Course
            </h5>
          </a>
          <p class='mb-3 font-normal text-gray-500 dark:text-gray-400'>
            Master modern web development with our MERN stack course. Dive into
            MongoDB, Express.js, React, and Node.js. Gain the skills to build
            scalable applications and advance your career. Join us and unleash
            your potential in the world of web development!
          </p>
          <a
            href='#'
            class='inline-flex font-medium items-center text-blue-600 hover:underline'
          >
            See our guideline{' '}
            <svg
              class='w-3 h-3 ms-2.5 rtl:rotate-[270deg]'
              aria-hidden='true'
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 18 18'
            >
              {' '}
              <path
                stroke='currentColor'
                stroke-linecap='round'
                stroke-linejoin='round'
                stroke-width='2'
                d='M15 11v4.833A1.166 1.166 0 0 1 13.833 17H2.167A1.167 1.167 0 0 1 1 15.833V4.167A1.166 1.166 0 0 1 2.167 3h4.618m4.447-2H17v5.768M9.111 8.889l7.778-7.778'
              />{' '}
            </svg>
          </a>
        </div>
        <div className='w-80 p-6 bg-white border border-gray-200 mt-11 ml-6 rounded-lg shadow dark:bg-white text-black dark:border-gray-700'>
          <img className='h-8 w-8 mb-3' src={amazon} alt='' />
          <a href='#'>
            <h5 class='mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-black'>
              Amazone Course
            </h5>
          </a>
          <p class='mb-3 font-normal text-gray-500 dark:text-gray-400'>
            Explore e-commerce success with our Amazon course. Dive into product
            listing optimization, marketing strategies, and more. Gain the
            skills to thrive on one of the largest online marketplaces. Join us
            and elevate your business today!
          </p>
          <a
            href='#'
            class='inline-flex font-medium items-center text-blue-600 hover:underline'
          >
            See our guideline{' '}
            <svg
              class='w-3 h-3 ms-2.5 rtl:rotate-[270deg]'
              aria-hidden='true'
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 18 18'
            >
              {' '}
              <path
                stroke='currentColor'
                stroke-linecap='round'
                stroke-linejoin='round'
                stroke-width='2'
                d='M15 11v4.833A1.166 1.166 0 0 1 13.833 17H2.167A1.167 1.167 0 0 1 1 15.833V4.167A1.166 1.166 0 0 1 2.167 3h4.618m4.447-2H17v5.768M9.111 8.889l7.778-7.778'
              />{' '}
            </svg>
          </a>
        </div>
        <div className='w-80 p-6 bg-white border border-gray-200 mt-11 ml-6 rounded-lg shadow dark:bg-white text-black dark:border-gray-700'>
          <img className='h-10 w-8 mb-3' src={fiverr} alt='' />
          <a href='#'>
            <h5 class='mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-black'>
              Fiverr Course
            </h5>
          </a>
          <p class='mb-3 font-normal text-gray-500 dark:text-gray-400'>
            Unlock freelance success with our Fiverr course. Learn to showcase
            your skills, craft winning gigs, and excel in the digital
            marketplace. Join us to kickstart your freelance career today!
          </p>
          <a
            href='#'
            class='inline-flex font-medium items-center text-blue-600 hover:underline'
          >
            See our guideline{' '}
            <svg
              class='w-3 h-3 ms-2.5 rtl:rotate-[270deg]'
              aria-hidden='true'
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 18 18'
            >
              {' '}
              <path
                stroke='currentColor'
                stroke-linecap='round'
                stroke-linejoin='round'
                stroke-width='2'
                d='M15 11v4.833A1.166 1.166 0 0 1 13.833 17H2.167A1.167 1.167 0 0 1 1 15.833V4.167A1.166 1.166 0 0 1 2.167 3h4.618m4.447-2H17v5.768M9.111 8.889l7.778-7.778'
              />{' '}
            </svg>
          </a>
        </div>
      </div>
    </div>
  )
}

export default Services
