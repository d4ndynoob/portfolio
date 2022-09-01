import Css from '../assets/css.png'
import Github from '../assets/github.png'
import Html from '../assets/html.png'
import Javascript from '../assets/javascript.png'
import React from '../assets/react.png'
import Tailwind from '../assets/tailwind.png'

import SkillCard from './SkillCard'

import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
AOS.init();

const Skills = () => {
  return (
    <div name="skills" className="w-full h-full bg-[#0a192f] text-gray-300 py-[80px]">
      {/* container */}
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div>
          <p className="text-4xl font-bold inline border-b-4 border-pink-600 text-gray-300">
            Skills
          </p>
          <p className="py-4">These are the technologies I've worked with</p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-10 text-center py-8">
          <SkillCard flipType="flip-left" image={Html} name="HTML"/>
          <SkillCard flipType="flip-down" image={Css} name="CSS"/>
          <SkillCard flipType="flip-right" image={Javascript} name="Javascript"/>
          <SkillCard flipType="flip-left" image={React} name="React JS"/>
          <SkillCard flipType="flip-up" image={Github} name="GitHub"/>
          <SkillCard flipType="flip-right" image={Tailwind} name="Tailwind"/>
        </div>
      </div>
    </div>
  );
}

export default Skills