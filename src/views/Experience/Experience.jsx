import React, { useState } from "react";
import "./Experience.css";

function TimeLineItem(props) {
  return (
    <div
      className="timeline-item"
      onClick={() => {
        props.setActiveTitle(props.title);
        props.setActiveDescription(props.description);
        props.setActiveSubhead(props.subhead);
      }}
    >
      <div className="experience-info">
        <h4>{props.title}</h4>
      </div>
    </div>
  );
}

function CourseItem(props) {
  return (
    <div
      onMouseEnter={() => {
        props.setActiveTitle(props.title);
        props.setActiveDescription(props.description);
      }}
    >
      {props.title}
    </div>
  );
}

export default function ExperienceScreen() {
  const [activeTitle, setActiveTitle] = useState("Internships and Education");
  const [activeDescription, setActiveDescription] = useState("");
  const [activeSubhead, setActiveSubhead] = useState("");

  return (
    <div className="screen-background">
      <div className="experience-background">
        <div className="timeline-background">
          <TimeLineItem
            title="Memorial Sloan Kettering - HOPP SSP"
            subhead="Summer Research Intern"
            description="Created an interactive web-based dashboard using ReactJS and GraphQL to display cell composition and gene expression profile of tumors. Presented to 30+ people at a poster session, and won award for video which showcased work and experiences as an intern"
            setActiveSubhead={setActiveSubhead}
            setActiveTitle={setActiveTitle}
            setActiveDescription={setActiveDescription}
          />
          <TimeLineItem
            title="New York University - GSTEM"
            subhead="Summer Research Intern"
            description="Developed an algorithm using C that calculated the most efficient traffic flow pattern for a given set of roads in Chappaqua, NY. Presented to 40+ people at symposium"
            setActiveTitle={setActiveTitle}
            setActiveSubhead={setActiveSubhead}
            setActiveDescription={setActiveDescription}
          />
        </div>
        <div className="highlight-background">
          <h2>{activeTitle}</h2>
          <h4>{activeSubhead}</h4>
          <p>{activeDescription}</p>
        </div>
      </div>
      <div style={{ padding: "0.5em" }}>{}</div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          background: "rgb(240, 240, 240)",
          justifyContent: "space-around",
          padding: "1em",
          cursor: "pointer",
        }}
      >
        <CourseItem
          title="CS61"
          description="This course provides a rigorous introduction to systems programming and machine organization and is mainly taught in C. Previous problem sets have included creating a debugging memory allocator, and diffusing a binary bomb by interpreting assembly code."
          setActiveTitle={setActiveTitle}
          setActiveDescription={setActiveDescription}
        />

        <CourseItem
          title="MATH22A"
          description="Covers multivariable calculus, linear algebra, and proof-writing for students interested in mathematical sciences and computer science. The final project for this course will be writing rigorous introduction to a topic in linear algebra or CS."
          setActiveTitle={setActiveTitle}
          setActiveDescription={setActiveDescription}
        />
        <CourseItem
          title="STAT110"
          description="This class is an introduction to probability as a language and set of tools for understanding statistics, science, risk, and randomness. The ideas and methods are useful in statistics, science, engineering, economics, finance, and everyday life. Topics include the following. Basics: sample spaces and events, conditioning, Bayes' Theorem. Random variables and their distributions: distributions, moment generating functions, expectation, variance, covariance, correlation, conditional expectation. Univariate distributions: Normal, t, Binomial, Negative Binomial, Poisson, Beta, Gamma. Multivariate distributions: joint, conditional, and marginal distributions, independence, transformations, Multinomial, Multivariate Normal. Limit theorems: law of large numbers, central limit theorem. Markov chains: transition probabilities, stationary distributions, reversibility, convergence."
          setActiveTitle={setActiveTitle}
          setActiveDescription={setActiveDescription}
        />
      </div>
    </div>
  );
}
