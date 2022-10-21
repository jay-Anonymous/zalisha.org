// import React from 'react'
import styles from "../style"
import { discount, robot } from "../assets"
import GetStarted from '../components/GetStarted'

const Hero = () => {
  return (
    <section id="home" className={`flex md:flex-row flex-col ${styles.paddingY}`}>
      <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>
        
        <div className='flex flex-row items-center py-[6px] px-4 bg-discounted-gradient rounded-[10px] mb-2'>
          <img src={discount} alt="discount" className="w-[32px h-[32px]"/>
          <p className={`${styles.paragraph} ml-2`}>
            <span className="text-white">Zalisha</span>
            {' '}means{' '}
            <span className="text-white">'To</span>
            {' '}
            <span className="text-white">Produce'</span>
          </p>
        </div>

        <div className="flex flex-row items center w-full">
          <h1 className="flex-1 font-poppins font-semibold ss:-[72px] text-[52px] text-white ss:leading-[100px] leading-[75px]">
            Tenda<br className="sm:block hidden"/>{' '}
            <span className="text-gradient">Wema</span><br className="sm:block hidden"/>{' '}
          </h1>
          <div className="ss:flex hidden md:mr-4 mr-0">
            <GetStarted />
          </div>
        </div>

        <h1 className="font-poppins font-semibold ss:-[68px] text-[52px] text-white ss:leading-[100px] leading-[75px] w-full">
        Nenda Zako
        </h1>

        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          This Swahili saying could not have been more true for Charlie.
          You see, from the moment Charlie first set foot in Kenya in 2016, he
          felt an immediate connection with the land and the people. He was
          on a mission to an orphanage called X.
          The children had so little, yet they were happy and hopeful for the
          future. They aspired to become doctors and teachers and engineers;
          most of all, they wanted to help the people in their communities.
          The visit inspired Charlie’s vision and sowed the seeds for Zalisha.
          Charlie knew he could make a difference by creating opportunities for
          these children — not with handouts, but with education, skills, a thriving
          economy and self-sustaining income. He knew how to connect people with the
          supplies and skills they needed to build success. With his vision in mind,
          he reached out to his associate, Frank, and together, they founded Zalisha in 2022.
        </p>
        
      </div>

      <div  className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}>
        <img src={robot} alt="robot" className='w-[100%] h-[100%] relative z-[5] rounded-full'/>
        <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient"/>
        <div className="absolute z-[1] w-[80%] h-[80%] rounded-full bottom-40 white__gradient"/>
        <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient"/>
      </div>

      <div className={`ss:hidden ${styles.flexCenter}`}>
        <GetStarted />
      </div>
    </section>
  )
}

export default Hero