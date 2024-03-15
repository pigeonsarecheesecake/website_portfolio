"use client"
import { useInView } from "react-intersection-observer";
const Experience = () => { 
    const {ref:ref1,inView} = useInView({
        threshold:.5,
        triggerOnce:true
      }); 
      const {ref:ref2,inView:inView2} = useInView({
          threshold:.1,
          triggerOnce:true
      });
    return (
    <>
    {/* Experience Left Side (Title) */}
    <div className={`flex items-center opacity-0 transition-all duration-[1500ms] ${inView ? "show" : ""} pb-12 md:pb-24`} ref={ref1} >
        <h1 className="text-4xl md:text-6xl" >Experience</h1>
    </div>
    {/* Experience Right Side (Experiences) */}
    <div className={`flex flex-col justify-between opacity-0 transition-all duration-[1500ms] ${inView2 ? "show" : ""}`} ref={ref2}>
        <div className="py-4 md:py-8">
            <h2 className="md:text-4xl">Front-End Developer Intern</h2>
            <p className="md:text-2xl">3D Circuitry | June 2023 - January 2024</p>
        </div>
        <hr></hr>
        <div className="py-4 md:py-8">
            <h2 className="md:text-4xl">Technical Specialist</h2>
            <p className="md:text-2xl">Apple | July 2022 - Current</p>
        </div>
        <hr></hr>
        <div className="py-4 md:py-8">
            <h2 className="md:text-4xl">Business Analyst</h2>
            <p className="md:text-2xl">MetaRetail | November 2021 - June 2022</p>
        </div>
        <hr></hr>
        <div className="py-4 md:py-8">
            <h2 className="md:text-4xl">Python Tutor</h2>
            <p className="md:text-2xl">Southern CT State University | September 2019 - May 2020</p>
        </div>
        <hr></hr>
        <div className="py-4 md:py-8">
            <h2 className="md:text-4xl">Store Associate</h2>
            <p className="md:text-2xl">Walgreens | June 2017 - June 2020</p>
        </div>
        <hr></hr>
        <div className="py-4 md:py-8">
            <h2 className="md:text-4xl">Picker</h2>
            <p className="md:text-2xl">Amazon | July 2020 - January 2021</p>
        </div>
        <hr></hr>
    </div>
    </>
  )
}

export default Experience