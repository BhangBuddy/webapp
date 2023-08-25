import React from 'react'
import styles from './Testimonials.module.css'

const Testimonials = () => {
  return (
    <>
    <section>
        <div className={styles["main-container"]}>
        <h1>What our client say about us</h1>
        <div className={styles["sub-container"]}>
        <div className={styles["sub"]}>
        <img src="https://dgtzuqphqg23d.cloudfront.net/aqUDdv8fco91cPIeBAetAcpDfUEOIuaIrivU11PMnBs-2048x1942.jpg" alt="test-icon" />
       <p>
       Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate,
         error numquam, consequuntur velit delectus voluptates possimus, recusandae debitis
         officiis dolor pariatur ut reprehenderit cum autem id perspiciatis labore 
       </p>
       <p><b>Jenny Wilson</b></p>
       <p>Project Manager at Microsoft</p>
        </div>
        <div className={styles["sub"]}>
        <img src="https://dgalywyr863hv.cloudfront.net/pictures/athletes/188112/45714/8/full.jpg" alt="test-icon-1" />
       <p>
       Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate,
         error numquam, consequuntur velit delectus voluptates possimus, recusandae debitis
         officiis dolor pariatur ut reprehenderit cum autem id perspiciatis labore 
       </p>
       <p><b>Jenny Wilson</b></p>
       <p>Project Manager at Microsoft</p>
        </div>
        <div className={styles["sub"]}>
        <img src="https://dgtzuqphqg23d.cloudfront.net/aqUDdv8fco91cPIeBAetAcpDfUEOIuaIrivU11PMnBs-2048x1942.jpg" alt="test-icon" />
       <p>
       Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate,
         error numquam, consequuntur velit delectus voluptates possimus, recusandae debitis
         officiis dolor pariatur ut reprehenderit cum autem id perspiciatis labore 
       </p>
       <p><b>Jenny Wilson</b></p>
       <p>Project Manager at Microsoft</p>
        </div>
        </div>
        </div>
       
        </section>
    </>
  )
}

export default Testimonials