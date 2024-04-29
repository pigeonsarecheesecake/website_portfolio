'use client'

import { useInView } from "react-intersection-observer"
interface ProjectPageProps {
    title:string,
    description:string,
    intro:string,
    mainImage:string,
    gif1:string,
    gif2?:string,
    gif3?:string,
    gif4?:string,
    role:string,
    link?:string,
    website:string,
    technologies:string,
    feature1:string,
    feature1Description:string,
    feature2?:string,
    feature2Description?:string,
    feature3?:string,
    feature3Description?:string
}

const ProjectPage = ({title,description,intro,mainImage,gif1,gif2,gif3,gif4,role,website,link,technologies,feature1,feature1Description,feature2,feature2Description,feature3,feature3Description}:ProjectPageProps) => {
  // inView Hook that allows me to track a DOM node
  const {ref:ref1,inView} = useInView({
    threshold:.1,
    triggerOnce:true
  }); 
  const {ref:ref2,inView:inView2} = useInView({
      threshold:.1,
      triggerOnce:true
  });
  const {ref:ref3,inView:inView3} = useInView({
      threshold:.3,
      triggerOnce:true
  }); 
  const {ref:ref4,inView:inView4} = useInView({
      threshold:.3,
      triggerOnce:true
  });
  const {ref:ref5,inView:inView5} = useInView({
    threshold:.3,
    triggerOnce:true
  });
  const {ref:ref6,inView:inView6} = useInView({
    threshold:.3,
    triggerOnce:true
  });
  const {ref:ref7,inView:inView7} = useInView({
    threshold:.3,
    triggerOnce:true
  });
  const {ref:ref8,inView:inView8} = useInView({
    threshold:.3,
    triggerOnce:true
  });
  const {ref:ref9,inView:inView9} = useInView({
    threshold:.3,
    triggerOnce:true
  });
  const {ref:ref10,inView:inView10} = useInView({
    threshold:.3,
    triggerOnce:true
  });
  const {ref:ref11,inView:inView11} = useInView({
    threshold:.3,
    triggerOnce:true
  });

  return (
    <main className="min-h-screen pb-12 lg:pt-12 lg:pb-48 px-8 md:px-12 lg:px-56 2xl:px-96 flex flex-col items-center">
      {/* Project Title */}
      <section ref={ref1} className={`opacity-0 transition-all duration-[1500ms] relative top-8 ${inView ? "show" : ""}`}>
        <h1 className="text-4xl md:text-6xl text-center pb-6">{title}</h1> 
        <p className="md:text-2xl text-center ">{description}</p>
      </section>

      {/* Main Image */}
      <section ref={ref2} className={`border border-black border-4 lg:border-1 min-h-[50vw] lg:min-h-[350px] xl:min-h-[570px] w-full mt-24 bg-cover bg-no-repeat bg-center opacity-0 transition-all duration-[1500ms] relative top-8 ${inView2 ? "show" : ""} `} style={{backgroundImage : `url(${mainImage})`}}></section>
      
      {/* Project Description */}
      <section ref={ref3} className={`grid grid-cols-1 xl:grid-cols-3 w-full my-12 lg:my-24 gap-12 lg:w-[70%] opacity-0 transition-all duration-[1500ms] relative top-8 ${inView3 ? "show" : ""}`}>
        {/* Intro */}
        <div className="col-span-1 xl:col-span-3">
            <h2 className="underline pb-6 text-2xl">Intro</h2>
            <p className="whitespace-pre-wrap text-justify leading-8 " >{intro}</p>
        </div>
        {/* Role */}
        <div>
            <h2 className="underline pb-6 text-2xl ">Role</h2>
            <p className="whitespace-pre-wrap">{role}</p>
        </div>
        {/* Website */}
        <div>
          <h2 className="underline pb-6 text-2xl">Website</h2>
          {link ? <a href={`${link}`} className="underline whitespace-pre-wrap" target="_blank">{website}</a> : <p>{website}</p>}
        </div>
        {/* Technologies */}
        <div>
          <h2 className="underline pb-6 text-2xl">Technologies</h2>
          <p className="leading-8">{technologies}</p>
        </div>
      </section>
   
      <section  className="w-full flex flex-col items-center mb-36" >
        {/* Gif 1 */}
        <div ref={ref4} className={`border border-black border-4 lg:border-1 min-h-[50vw] lg:min-h-[350px] xl:min-h-[570px] mb-16 bg-cover bg-no-repeat bg-center w-full opacity-0 transition-all duration-[1500ms] relative top-8 ${inView4 ? "show" : ""}`} style={{backgroundImage : `url(${gif1})`}}></div>
        {/* Gif 1 description */}
        <div ref={ref5} className={`lg:w-[70%] opacity-0 transition-all duration-[1500ms] relative top-8 ${inView5 ? "show" : ""}`} >
          <h2 className="pb-6 text-2xl underline text-center">{feature1}</h2>
          <p className="whitespace-pre-wrap text-justify leading-8">{feature1Description}</p>
        </div>
        <hr className="border-[#353535] mt-12 w-[20%] "></hr>
      </section>

      {/* For bigger projects, gif2, gif3, and gif4 will be rendered conditionally */}

      {
        gif2 && 
        <section className="w-full flex flex-col items-center mb-36">
          {/* Gif 2 */}
          <div ref={ref6} className={`border border-black border-4 lg:border-1 min-h-[50vw] lg:min-h-[350px] xl:min-h-[570px] mb-16 bg-cover bg-no-repeat bg-center w-full opacity-0 transition-all duration-[1500ms] relative top-8 ${inView6 ? "show" : ""}`} style={{backgroundImage : `url(${gif2})`}}></div>
          {/* Gif 2 description */}
          <div ref={ref7} className={`lg:w-[70%] opacity-0 transition-all duration-[1500ms] relative top-8 ${inView7 ? "show" : ""}`}>
            <h2 className="pb-6 text-2xl underline  text-center">{feature2}</h2>
            <p className="whitespace-pre-wrap text-justify leading-8">{feature2Description}</p>
          </div>
          <hr className="border-[#353535] mt-12 w-[20%] "></hr>
        </section>
      }
      
      {gif3 && 
        <section className="w-full flex flex-col items-center">
        {/* Gif 3 */}
        <div ref={ref8} className={`border border-black border-4 lg:border-1 min-h-[50vw] lg:min-h-[350px] xl:min-h-[570px] mb-16 bg-cover bg-no-repeat bg-center w-full opacity-0 transition-all duration-[1500ms] relative top-8 ${inView8 ? "show" : ""}`} style={{backgroundImage : `url(${gif3})`}}></div>
        {/* Gif 3 description */}
        <div ref={ref9} className={`lg:w-[70%] opacity-0 transition-all duration-[1500ms] relative top-8 ${inView9 ? "show" : ""}`}>
          <h2 className="pb-6 text-2xl underline  text-center">{feature3}</h2>
          <p className="whitespace-pre-wrap text-justify leading-8">{feature3Description}</p>
        </div>
        <hr className="border-[#353535] mt-12 w-[20%] "></hr>
      </section>
      }

      {gif4 && 
        <section className="w-full flex flex-col items-center mb-36">
        {/* Gif 1 */}
        <div ref={ref10} className={`border border-black border-4 lg:border-1 min-h-[50vw] lg:min-h-[350px] xl:min-h-[570px] mb-16 bg-cover bg-no-repeat bg-center w-full opacity-0 transition-all duration-[1500ms] relative top-8 ${inView10 ? "show" : ""}`} style={{backgroundImage : `url(${gif1})`}}></div>
        {/* Gif 1 description */}
        <div ref={ref11} className={`lg:w-[70%] opacity-0 transition-all duration-[1500ms] relative top-8 ${inView11 ? "show" : ""}`}>
          <h2 className="pb-6 text-2xl underline  text-center">{feature1}</h2>
          <p className="whitespace-pre-wrap text-justify leading-8">{feature1Description}</p>
        </div>
        <hr className="border-[#353535] mt-12 w-[20%] "></hr>
      </section>
      }
    </main>
  )
}

export default ProjectPage