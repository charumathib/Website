import React from "react";
import Project from "../../components/Project/Project";

export default function ProjectsScreen() {
  return (
    <div className="screen-background">
      <Project
        title="Environmental Impacts of COVID-19"
        description="Created a web-app using ReactJS that examined the impacts of reduced human traffic caused by COVID-19 on protected environments such as beaches, parks, marine monuments, etc. Explored remote sensing data from NASA Goddard Earth Sciences, NASA Aqua Modis, and NASA Terra Modis; visualized using Panoply"
        link="https://github.com/SpaceApps2020/EnvironmentalImpacts"
      />
      <Project
        title="Personal Portfolio"
        description="This website!!"
        link="https://bing.com"
      />
    </div>
  );
}
