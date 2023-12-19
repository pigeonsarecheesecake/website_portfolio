'use client'
import AboutMain from "../components/AboutMain"
import AboutEducation from "../components/AboutEducation"
import AboutPictures from "../components/AboutPictures"
import { useInView } from 'react-intersection-observer';
const page = () => {
  const {ref:ref1,inView} = useInView({
    threshold:.1,
    triggerOnce:true
  }); 
  const {ref:ref2,inView:inView2} = useInView({
      threshold:.2,
      triggerOnce:true
  });
  const {ref:ref3,inView:inView3} = useInView({
      threshold:.1,
      triggerOnce:true
  })
  return (
    <main className=" min-h-screen ">
      {/* About me main section */}
      <section className={`px-8 md:px-12 md:pb-36 lg:px-48 2xl:px-72 grid grid-cols-2 gap-8 pb-36 opacity-0 transition-all duration-[1500ms] relative top-8 ${inView ? "show" : ""} `} ref={ref1}>
        <AboutMain />
      </section>
      {/* Education */}
      <section className={`bg-[#F4F4F4] py-12 opacity-0 transition-all duration-[1500ms] relative top-8 ${inView2 ? "show" : ""}`} ref={ref2}>
        <AboutEducation />
      </section>
      {/* Pictures */}
      <section className={`px-8 md:px-12 lg:px-48 2xl:px-72 py-36 opacity-0 transition-all duration-[1500ms] relative top-8 ${inView3 ? "show" : ""}`} ref={ref3}>
        <AboutPictures />
      </section>
    </main>
  )
}

export default page