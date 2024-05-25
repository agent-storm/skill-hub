import React from 'react';
import { SectionHeader } from "../components/SectionHeader";
import { ExperienceItem } from "./AboutUsDeets";

const Experience = () => {
  return (
    <section className="section-wrapper" id="experience">
      <SectionHeader title="About Us" dir="l" />
      {experience.map((item) => (
        <ExperienceItem key={item.title} {...item} />
      ))}
    </section>
  );
};

const experience = [
  {
    title: "Sai Srinith Gujarathi",
    position: "Student, CMR Institute Of Technology",
    description:
      "Create functional, high-level, dynamic and reusable components based on mock-up given using Next JS. Coordinated on team for QA, bug fixes, features and code refactoring.",
    tech: [
      "Github",
      "LinkedIn",
      "Instagram",
      "Mail",
    ],
    imageUrl: "https://i.imgur.com/TmBoVnT.png"
  },
  {
    title: "Shiva Shankar",
    position: "Student, CMR Institute Of Technology",
    description:
      "I help build and scale core javascript functions and created test units. Also created reusable components for the front end and Azure API integrations.",
      tech: [
        "Github",
        "LinkedIn",
        "Instagram",
        "Mail",
      ],
      imageUrl: "https://i.imgur.com/TmBoVnT.png"
  },
  {
    title: "Raghava Kesanapalli",
    position: "Student, CMR Institute Of Technology",
    description:
      "An aspiring developer who is seeking to make an impact in the world of Technology by collaborating with Organisations and different projects. I am a person who has a way to find a solution for the question that I do not know! Apart from this, I am also into the world of fitness and sports.",
      tech: [
        <a href="https://github.com/Raghavk3">Github</a>,
        <a href="https://www.linkedin.com/in/raghava-kesanapalli-980048228/">LinkedIn</a>,
        <a href="https://www.instagram.com/raghav.k_/">Instagram</a>,
        <a href="raghavvarshith@gmail.com">Email</a>,
      ],
      imageUrl: "https://i.imgur.com/TmBoVnT.png"
  },
];

export default Experience;