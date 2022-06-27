import React from "react";
import Image from './Image';
import "./AboutMe"

const AboutMe=()=>{
    return(
        <div id = 'about-me'  >
            <h1>About me </h1>
            <Image/>
            <p  >Junior Software Engineer recently graduated CodeClan with Business Banking backrounds.
                Before starting the course I have been studying programming for about two years.
                While working in the Business Banking sector I was thinking about my carrer and how I want to progress in it.
                I wanted to challenge my self and learn how to code. I have managed to go through the base principles of coding in Java and then
                in Python while working a full-time job. I have built some projects which can be seen in the Projects section. 
                After experimenting with code and exploring new technologies I have decided that that is something
                that I thoroughly enjoy doing and that I would love to make a carrer out of. That is why I have enrolled with CodeClan.
                I have learned many more technologies from the course and I am very excited to get the opportunity to put them to use.
</p>
        </div>
    )
}

export default AboutMe;