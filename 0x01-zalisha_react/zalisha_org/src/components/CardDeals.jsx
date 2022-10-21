// import React from 'react'
import styles, {layout} from "../style"
import { card } from "../assets"
import Button from "./Button"

const CardDeals = () => (
  <section className={layout.section}>

    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        Success <br className='sm:block hidden'/>
        Stories
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
      Since 2022, we have successfully helped communities and people
      improve their lives and well-being.
      We invite you to read our stories and hope that they will
      inspire you to help make an impact too.
      </p>
      <Button styles={`mt-10`}/>
    </div>

    <div className={layout.sectionImg}>
      <img src={card} alt="card-deals" className='w-[100%] h-[100%]'/>
    </div>
    
  </section>
)

export default CardDeals