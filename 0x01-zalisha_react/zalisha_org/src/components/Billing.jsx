// import React from 'react'
import {apple, bill, google} from '../assets'
import styles, {layout } from '../style'


const Billing = () => (
    <section id='product' className='{layout.sectionReverse}'>
      <div className={layout.sectionReverse}>

        <img src={bill} alt="bill" className='w-[60%] h-[60%] relativez-[5] rounded-full mr-10'/>
        {/* <div className='absolute z-[3] left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient'></div>
        <div className='absolute z-[0] left-1/2 bottom-0 w-[50%] h-[50%] rounded-full pink__gradient'></div> */}

        <div className={layout.sectionInfo}>
          <h2 className={styles.heading2}>
            Our <br className='sm:block hidden'/> Commitment
          </h2>
          <p className={`${styles.paragraph} max-w-[470px] mt-5 ml-5`}>
            Zalisha  is committed to improving the lives of people in need—not just for today,
            but for tomorrows yet to come. Thanks to dedicated volunteers and heartfelt
            donations, we provide critical resources and create self-sustaining programs
            designed to help people make a better life for themselves, for their children and
            for their communities.
          </p>
          <div className="flex flex-row flex-wrap sm:mt-10 mt-6">
            <img src={apple} alt="app-store" className='w-[128px] h-[42px] object-contain mr-5 cursor-pointer' />
            <img src={google} alt="play-store" className='w-[128px] h-[42px] object-contain mr-5 cursor-pointer' />
          </div>
        </div>
        
      </div>
    </section>
)

export default Billing