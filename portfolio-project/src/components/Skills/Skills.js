import React, { useContext } from "react";
import Marquee from "react-fast-marquee";
import "./Skills.css";

import { ThemeContext } from "../../contexts/ThemeContext";
import { skillsData } from "../../data/skillsData";
import { skillsImage } from "../../utils/skillsImage";

function Skills() {
  const { theme } = useContext(ThemeContext);

  const skillBoxStyle = {
    backgroundColor: theme.secondary,
    boxShadow: `0px 0px 30px ${theme.primary30}`,
  };

  return (
    <div className="skills" style={{ backgroundColor: theme.secondary }}>
      <div className="skillsHeader">
        <h2 style={{ color: theme.primary }}>Skills</h2>
      </div>
      <div className="skillsContainer">
        <div className="skill--scroll">
          <Marquee
            gradient={false}
            speed={80}
            pauseOnHover={true}
            pauseOnClick={true}
            delay={0}
            play={true}
            direction="left"
          >
            {skillsData.map((skill, id) => (
              <div className="skill--box" key={id} style={skillBoxStyle}>
                <img src={skillsImage(skill)} alt={skill} />
                <h3 style={{ color: theme.tertiary }}>{skill}</h3>
              </div>
            ))}
          </Marquee>
        </div>
      </div>
      <section className="skills" id="skills">
        <div className="max-width">
          <div className="skills-content"></div>
          <div className="column right">
            <div className="bars">
              <div className="info">
                <span>ReactJS</span>
                <span>80%</span>
              </div>
              <div className="line react"></div>
            </div>
            <div className="bars">
              <div className="info">
                <span>Javascript</span>
                <span>80%</span>
              </div>
              <div class="line js"></div>
            </div>
            <div className="bars">
              <div className="info">
                <span>React Native</span>
                <span>50%</span>
              </div>
              <div className="line native"></div>
            </div>
            <div className="bars">
              <div class="info">
                <span>HTML</span>
                <span>80%</span>
              </div>
              <div className="line html"></div>
            </div>
            <div className="bars">
              <div class="info">
                <span>CSS</span>
                <span>80%</span>
              </div>
              <div className="line css"></div>
            </div>
            <div className="bars">
              <div class="info">
                <span>Python</span>
                <span>70%</span>
              </div>
              <div className="line python"></div>
            </div>
            <div className="bars">
              <div class="info">
                <span>Bootstrap</span>
                <span>60%</span>
              </div>
              <div className="line bootstrap"></div>
            </div>
            <div className="bars">
              <div class="info">
                <span>C++</span>
                <span>70%</span>
              </div>
              <div className="line cp"></div>
            </div>
            <div className="bars">
              <div class="info">
                <span>C</span>
                <span>70%</span>
              </div>
              <div className="line c"></div>
            </div>
            <div className="bars">
              <div class="info">
                <span>Django</span>
                <span>60%</span>
              </div>
              <div className="line django"></div>
            </div>
            <div className="bars">
              <div class="info">
                <span>Git</span>
                <span>60%</span>
              </div>
              <div className="line git"></div>
            </div>
            <div className="bars">
              <div class="info">
                <span>MySql</span>
                <span>60%</span>
              </div>
              <div className="line sql"></div>
            </div>
            <div className="bars">
              <div class="info">
                <span>Figma</span>
                <span>60%</span>
              </div>
              <div className="line figma"></div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Skills;
