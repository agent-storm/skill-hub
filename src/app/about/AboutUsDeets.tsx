// aboutUsDeets.tsx

import React from 'react';
import { Reveal } from "../components/Reveal";
import styles from "./aboutus.module.scss";

interface Props {
  title: string;
  position: string;
  time: string;
  location: string;
  description: string;
  tech: string[];
  imageUrl: string;
}

export const ExperienceItem = ({
  title,
  position,
  time,
  location,
  description,
  tech,
  imageUrl,
}: Props) => {
  return (
    <div className={styles.experience}>
      <div className={styles.heading}>
        <Reveal>
          <span className={styles.title}>{title}</span>
        </Reveal>
        <Reveal>
          <span>{time}</span>
        </Reveal>
      </div>

      <div className={styles.heading}>
        <Reveal>
          <span className={styles.position}>{position}</span>
        </Reveal>
        <Reveal>
          <span>{location}</span>
        </Reveal>
      </div>

      <Reveal>
        <img src={imageUrl} alt={title} className={`${styles.image} ${styles.rounded}`} />
      </Reveal>

      <Reveal>
        <p className={styles.description}>{description}</p>
      </Reveal>
      <Reveal>
        <div className={styles.tech}>
          {tech.map((item) => (
            <span key={item} className="chip">
              {item}
            </span>
          ))}
        </div>
      </Reveal>
    </div>
  );
};
