import React from 'react';
import { FaHtml5, FaCss3Alt, FaGithub } from "react-icons/fa";
import { TbBrandJavascript, TbBrandNodejs } from "react-icons/tb";
import { RiReactjsLine } from "react-icons/ri";
import { SiMysql, SiMongodb, SiPostgresql } from "react-icons/si";

const AutoSlider = () => {
  return (
    <div className="relative overflow-hidden  py-6">
      {/* Container with duplicated icon list */}
      <div className="flex slider-track  space-x-4">
        {/* Icon List (Duplicated) */}
        {[...Array(2)].map((_, index) => (
          <React.Fragment key={index}>
            <div className="slider-item ">
              <FaHtml5 size={70} color="white" />
            </div>
            <div className="slider-item">
              <FaCss3Alt size={70} color="white" />
            </div>
            <div className="slider-item">
              <TbBrandJavascript size={70} color="white" />
            </div>
            <div className="slider-item">
              <RiReactjsLine size={70} color="white" />
            </div>
            <div className="slider-item">
              <TbBrandNodejs size={70} color="white" />
            </div>
            <div className="slider-item">
              <SiMysql size={70} color="white" />
            </div>
            <div className="slider-item">
              <SiMongodb size={70} color="white" />
            </div>
            <div className="slider-item">
              <SiPostgresql size={70} color="white" />
            </div>
            <div className="slider-item">
              <FaGithub size={70} color="white" />
            </div>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default AutoSlider;
