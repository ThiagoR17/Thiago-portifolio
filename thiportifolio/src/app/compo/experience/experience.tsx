import Image from "next/image"
import { SectionTitle } from "../sectionTitle/section-title"

import "./experience.scss"
import { Skill } from "../skill/skill"

export function Experience(){
    return(
        <div className="experience">
          <SectionTitle text="Experience"/>
          <p>Olá, meu nome é Thiago Rodrigues e tenho experiência significativa em projetos acadêmicos e pessoais de desenvolvimento de software. Tenho experiência em tecnologias back-end e frontend.</p>
          <div className="experience-time">
            <Skill image="/java.png" measure={2} years={""}/>
            <Skill image="/js.png" measure={1} years={""}/>
            <Skill image="/html.png" measure={2} years={""}/>
            <Skill image="/css2.png" measure={2} years={""}/>
            <Skill image="/springboot.png" measure={2} years={""}/>
            
          </div>
        </div>
    )
}