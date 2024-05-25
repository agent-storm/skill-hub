import React from 'react';
import { Reveal } from '../components/Reveal';
import { SectionHeader } from '../components/SectionHeader';
import styles from "./about.module.scss";
import '../globals.css'; 
import { Stats } from "./Stats";
import { AiOutlineArrowRight } from "react-icons/ai";

const OurMission = () => {
  return (
    <section id="about" className="section-wrapper">
      <SectionHeader title="Our Mission" dir="l" />
      <div className={styles.about}>
        <div>
          <Reveal>
            <p className={`${styles.aboutText} ${styles.highlightFirstLetter}`}>
              Howdy Everyone!
              We at Skill-Hub, are bringing to you the best and most efficient tool for all the major CS Majors out there, in hopes that competitive programming is made easier for all the students.
             </p>
          </Reveal>
          <Reveal>
            <p className={styles.aboutText}>
              Our primary mission is to bring essence to the competitive spirit in programming. 
              Keeping this in mind, the Skill-Hub team delivers to you this app to keep track of all your coding profiles' scores as well as compare them to others with great user-friendliness!
            </p>
          </Reveal>
          <Reveal>
            <p className={styles.aboutText}>
              Be it students or college management, Skill-Hub is the one place to go for all your statistics.
              With one click, you are now away from accessing all your scores at one place with additional features.
            </p>
          </Reveal>
          <Reveal>
            <p className={styles.aboutText}>
              Skill-Hub now comes with Cal-Set, a tool used to set reminders for coding contests.
              To use this feature, please use the following link
              🔗
            </p>
          </Reveal>
        </div>
        <Stats />
      </div>
    </section>
  );
};

export default OurMission;