import React from "react";
import { GiGraduateCap } from "react-icons/gi";
import ResumeTitle from "./ResumeTitle";
import { MdWork } from "react-icons/md";
import ResumeCard from "./ResumeCard";

const Education = () => {
  return (
    <div className="w-full grid grid-cols-9 px-6">
      <div className="col-span-4 max-sm:col-span-9">
        <ResumeTitle title="Experience" icon={<MdWork />} />
        <ResumeCard
          badge=""
          title="Web Developer"
          subtitle="Learning to Code from Home"
          des=" I recently made a career transition into software development after realizing my passion for technology and desire to work in a dynamic and challenging industry. To fully commit to this career change, I made the difficult decision to resign from my previous job and dedicate my time to learning new skills and acquiring relevant experience. Although it was a challenging decision, I am confident that this career transition will allow me to pursue a fulfilling and rewarding career in a field that aligns with my passions and interests"
        />
        <ResumeCard
          badge="2018 - 2023"
          title="Repair Specialist"
          subtitle="Plexus SRL"
          des=" Mitigate risk with diagnostics and failure analysis services that identify root causes and provide the intelligence to predict product failures more effectively. Reduce downtime and strengthen your customer experience with expert aftermarket repair—from minor product fixes to full component-level repairs."
        />
        <ResumeCard
          badge="2014 - 2018"
          title="Electronic Technician"
          subtitle="Visual Digitech"
          des=" During my time at Samsung's mobile device division, I worked on repairing various phone models, including troubleshooting, diagnosing hardware and software issues, and performing repairs. I also collaborated with a team of technicians and engineers to improve repair processes and ensure customer satisfaction. This experience allowed me to gain extensive knowledge in mobile device technology and develop exceptional problem-solving skills in a fast-paced environment."
        />
      </div>
      <div className="w-full h-full flex justify-center items-center">
        <span className="w-[1px] h-full bg-zinc-800 inline-flex"></span>
      </div>
      <div className="col-span-4 max-sm:col-span-9">
        <ResumeTitle title="Education" icon={<GiGraduateCap />} />
        <ResumeCard
          badge=""
          title="Programming Course"
          subtitle="Online remote"
          des=" Remote programming education is becoming increasingly popular, allowing
        individuals to learn to code from the comfort of their own home. With
        the abundance of online resources and the flexibility of remote
        learning, anyone can become a proficient programmer with dedication and
        hard work."
        />
        <ResumeCard
          badge="2006 - 2008"
          title="Automation & Computer Science"
          subtitle="Politehnica Timisoara"
          des=" I started studying Automation and Computers in college, but didn't finish because I had big dreams of becoming an entrepreneur. Although I didn't complete my degree, I gained valuable skills and knowledge that have helped me in my entrepreneurial journey."
        />
        <ResumeCard
          badge="2002 - 2006"
          title="Informatics"
          subtitle="Mihai Vitezul - Oradea"
          des=" High school specializing in computer science was a pivotal point in my formation. It provided me with a solid foundation in programming languages, algorithms, and software development. The hands-on experience in various programming projects honed my analytical and problem-solving skills. This education gave me the confidence to pursue a career in technology and become a lifelong learner."
        />
      </div>
    </div>
  );
};

export default Education;
