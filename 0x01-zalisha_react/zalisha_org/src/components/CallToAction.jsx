// import React from 'react'
import styles from "../style"
import Button from "./Button"
import Clients from "./Clients"

const CallToAction = () => (
  <section className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} sm:flex-row flex-col bg-black-gradient-2 rounded-[20px] box-shadow`}>

    <div className={`flex-1 flex flex-col`}>
      <h2 className={`${styles.heading2}`}>Karibu Zalisha</h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
      The following projects are run through Zalisha as fiscal
      sponsorship projects. Organisations and individuals team
      up with Zalisha to accomplish their charity goals while allowing
      them to solicit tax-deductible contributions from the public without
      having to be recognised separately as tax-exempt by the IRS.
      </p>
      <Clients className='mt-15'/>
    </div>

    <div className={`${styles.flexCenter} sm:ml-10 ml-0 sm:mt-0 mt-10`}>
      <Button className={``}/>
    </div>

  </section>
)


export default CallToAction