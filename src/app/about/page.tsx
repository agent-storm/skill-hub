// pages.tsx
import React from "react";
import styles from "./about.module.scss";
import OurMission from "./OurMission"; // Adjust the path if necessary
import Experience from "./aboutUs"; // Adjust the path if necessary

const Page = () => {
  return (
    <>
      <div className={styles.home}>
        <main id="main">
          <OurMission id="our-mission" /> {/* Assuming you pass id prop to components */}
          <Experience id="about-us" /> {/* Assuming you pass id prop to components */}
          <div
            style={{
              height: "200px",
              background:
                "linear-gradient(180deg, var(--background), var(--background-dark))",
            }}
          />
        </main>
      </div>
    </>
  );
};

export default Page;
