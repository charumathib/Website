import React, { useState } from "react";
import "./About.css";
import Pic from "../../assets/Pic.png";

function AboutItem(props) {
  return (
    <div className="timeline-item">
      <div
        className="experience-info"
        onMouseEnter={() => {
          props.setKeyword(props.description);
        }}
        onMouseLeave={() => {
          props.setKeyword(props.actionWord);
        }}
      >
        <h4>{props.title}</h4>
      </div>
    </div>
  );
}

export default function AboutScreen() {
  const [firstKeyword, setFirstKeyword] = useState("Curious");
  const [secondKeyword, setSecondKeyword] = useState("Collaborative");
  const [thirdKeyword, setThirdKeyword] = useState("Creative");

  return (
    <div className="screen-background">
      <div className="intro-background">
        <div className="intro-item">
          <img src={Pic} className="intro-picture" />
        </div>
        <div className="intro-item">
          <h2> CS @ Harvard, 2024 </h2>
          <AboutItem
            title={firstKeyword}
            setKeyword={setFirstKeyword}
            actionWord={"Curious"}
            description={
              "I am passionate about solving problems, and am always looking for new ways to challenge myself and learn"
            }
          />
          <AboutItem
            title={secondKeyword}
            setKeyword={setSecondKeyword}
            actionWord={"Collaborative"}
            description={
              "I enjoy solving problems by working with others, and make sure to capitalize on my and my teammates' strengths"
            }
          />
          <AboutItem
            title={thirdKeyword}
            setKeyword={setThirdKeyword}
            actionWord={"Creative"}
            description={
              "My passion for the arts has helped me in developing new perspectives to solve challenging problems"
            }
          />
        </div>
      </div>
    </div>
  );
}
