import React from 'react'
import Slider from '../../components/slider/Slider';
import styles from './About.module.css';
import brain from '../../assets/brain.gif';

const About = () => {
  return (
  <>
  <Slider/>
  <section>
    <div className={styles["about-container"]}>
   
  <div className={styles["about-sub-container"]}>
  <div className={styles["sub-about"]}>
   <img src={brain} alt="brain-gif" />
   </div>
   <div className={styles["about-content"]}>
   <h2>What is Bhangola?</h2>
    <p>
    Bhangola is a startup, working for Trinity i.e., Individuals, Society, and Ecosystem by developing sustainable products and promoting sustainable lifestyles and growth.
    {/* <br /> */}
    Hemp is our Hero raw material hence the name Bhangola. We work to develop Nutraceuticals, Cosmeceuticals and Fashion wear with affordable alternatives available from the Ecosystem.
    {/* <br /> */}
    Team Bhangola is determined to work for efficient ecosystem economics by the diligent use of knowledge.
    </p>
   </div>
  </div>

    <div className={styles["about-img"]}>
   

    <h3>Experience the Natural Benefits of Hemp With Bhangola</h3>
    <p>
    Looking to buy hemp products in India? You're in luck! Bhangola Hemp based products are now available in India. <br />
    Bhangola is a hemp based startup, we work to develop Nutraceuticals, Cosmeceuticals and Fashion wear. We are proud to offer natural alternatives to the traditional cosmetics products made with synthetic chemicals, with a range of organic and vegan skin care, footwear and hair care products.
    </p>
    <h3>Hemp Based Products</h3>
    <p>
    Hemp based products are becoming more and more popular in India as people become aware of the many benefits of hemp. Hemp is a versatile plant that can be used to make a variety of products, including skincare products, clothing, and even food.
    <br /> 
    If you're looking for natural skincare products that are good for your skin and the environment, then you should definitely consider buying hemp products in India.
    </p>
    <h3>Hemp Skin Care Products</h3>
    <p>
    Hemp products offer a number of benefits for both your health and the environment. Hemp based skin care products are packed with nutrients and antioxidants that can help to improve skin health. These products are often more affordable than their chemical-based counterparts, and they offer a number of additional benefits as well.
    <br /> 
    Hemp skin care products can help to moisturize your skin, protect against free radicals, and even reduce the appearance of wrinkles. Plus, If you are looking for an environmentally friendly way to shop for clothing, then consider buying hemp based clothing. Products made from hemp require less water and energy to produce than traditional fabrics such as cotton, making them a more sustainable option.
    <br />
    <span>So why not give them a try?</span>
    </p>
    </div>
    <div className={styles["circle"]}></div>
    <div className={styles["circle-1"]}></div>

    </div>


    <div className={styles["about-img1"]}>
    <div className={styles["sub-img"]}>
     <img src="https://s3-alpha-sig.figma.com/img/f9aa/253d/6a8b0ab4cffdf15cc846ce4561308b93?Expires=1691971200&Signature=MWF00Ega32k2Zl~2-WqEXKZS6Q1jiuzoKo~5jb2xEqZBkWt8O1pyYvnRGPk3R-jl31wrHrRD5fdVSpQsVb-kW9YR1zZXejRvO55r6QxvEXypoyZwJw8p93haIdWMf6IZ2WpGOXCyc~Ijb~RjKZ3e7jTHu~~tBmiXvWh3Nl48ce3e3S3Du1gs4VkQWvyaNsT8cZh9DfDfIv5ha6P8lyXqQVvlSTWWwH8P6b6YmzdBjrNp72CZbn1cZ6PGaDivO1rnIHQOZ5oan~mUtbIaJgNzktg~lFEUMX4lp~LjtLEAm5LEmCwHy6JfyySFNiyNOcziAU-Il1gHmNreHEVrRAmTfA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" alt="about-img1" />
     <h3>Vision</h3>
    </div>
    <div className={styles["sub-img"]}>
    <img src="https://s3-alpha-sig.figma.com/img/fa3f/dc01/f365f75e96a7328eb10e4f0f254900bf?Expires=1691971200&Signature=FgBPJmDDiIJ00VoEfboCmxyRwh32E9NsrXKTLpkoJeP7lopYfA1Ob05kmYVG~YAGbR9omNv5xeLW7vqmHsl78UUD81c2i4ZSzQFThBESH4ezxuQZRDwNNdVeNeCWgSdBKi79iROZ2AJV61Adf8I~1-zHLldId7XP~czgXEQRSZhW5jRsUe07~RlA9zRfXzKENbkALA4Ay2ZwnmbBW1CXKnCh3lEpmA7Qx0nOKI45LyBZJ80gIhYPrSbgas6Xg4SWLJncuRQOSeXjoaExbrod17WkNZNbY9c5OcyY6uoyELYeSHEcnj81OQJfG07EaSgnclwm7lUS44VJO-~j8ONSyA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" alt="about-img2" />
    <h3>Mission</h3>
    </div>

    </div>
    </section>
  </>
  )
}

export default About