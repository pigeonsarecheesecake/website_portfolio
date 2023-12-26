interface ProjectPageProps {
    title:string,
    description:string,
    intro:string,
    mainImage:string,
    gif1:string,
    gif2:string,
    gif3?:string,
    gif4?:string,
    role:string,
    website:string,
    technologies:string,
    feature1:string,
    feature1Description:string,
    feature2:string,
    feature2Description:string,
    feature3?:string,
    feature3Description?:string
}

const ProjectPage = ({title,description,intro,mainImage,gif1,gif2,gif3,gif4,role,website,technologies,feature1,feature1Description,feature2,feature2Description,feature3,feature3Description}:ProjectPageProps) => {
  return (
    <main className="min-h-screen pb-12 lg:pt-12 lg:pb-48 px-8 md:px-12 lg:px-56 2xl:px-96 flex flex-col items-center">
      {/* Project Title */}
      <section>
        <h1 className="text-4xl md:text-6xl text-center pb-2">{title}</h1> 
        <p className="md:text-2xl text-center whitespace-pre">{description}</p>
      </section>

      {/* Main Image */}
      <section className="border border-black border-4 lg:border-1 min-h-[25vh] md:min-h-[70vh] w-full mt-24 bg-cover bg-no-repeat bg-center" style={{backgroundImage : `url(${mainImage})`}}></section>
      
      {/* Project Description */}
      <section className="grid grid-cols-1 xl:grid-cols-3 w-full my-12 lg:my-24 gap-12 lg:w-[70%]">
        {/* Intro */}
        <div className="col-span-1 xl:col-span-3">
            <h2 className="underline pb-6 text-3xl">Intro</h2>
            <p className="whitespace-pre-wrap text-justify leading-8 " >{intro}</p>
        </div>
        {/* Role */}
        <div>
            <h2 className="underline pb-6 text-2xl text-3xl">Role</h2>
            <p className="whitespace-pre-wrap">{role}</p>
        </div>
        {/* Website */}
        <div>
          <h2 className="underline pb-6 text-2xl">Website</h2>
          <p>{website}</p>
        </div>
        {/* Technologies */}
        <div>
          <h2 className="underline pb-6 text-2xl">Technologies</h2>
          <p className="leading-8">{technologies}</p>
        </div>
      </section>
   
      <section className="w-full flex flex-col items-center mb-36">
        {/* Gif 1 */}
        <div className="border border-black border-4 lg:border-1 min-h-[25vh] md:min-h-[70vh] mb-16 bg-cover bg-no-repeat bg-center w-full" style={{backgroundImage : `url(${gif1})`}}></div>
        {/* Gif 1 description */}
        <div className="lg:w-[70%]">
          <h2 className="pb-6 text-2xl underline text-center">{feature1}</h2>
          <p className="whitespace-pre-wrap text-justify leading-8">{feature1Description}</p>
        </div>
        <hr className="border-[#353535] mt-12 w-[20%] "></hr>
      </section>


      <section className="w-full flex flex-col items-center mb-36">
        {/* Gif 2 */}
        <div className="border border-black border-4 lg:border-1 min-h-[25vh] md:min-h-[70vh] mb-16 bg-cover bg-no-repeat bg-center w-full" style={{backgroundImage : `url(${gif2})`}}></div>
        {/* Gif 2 description */}
        <div className="lg:w-[70%]">
          <h2 className="pb-6 text-2xl underline  text-center">{feature2}</h2>
          <p className="whitespace-pre-wrap text-justify leading-8">{feature2Description}</p>
        </div>
        <hr className="border-[#353535] mt-12 w-[20%] "></hr>
      </section>

      {/* For bigger projects, gif3 and gif4 will be rendered conditionally */}
      {gif3 && 
        <section className="w-full flex flex-col items-center">
        {/* Gif 3 */}
        <div className="border border-black border-4 lg:border-1 min-h-[25vh] md:min-h-[70vh] mb-16 bg-cover bg-no-repeat bg-center w-full" style={{backgroundImage : `url(${gif3})`}}></div>
        {/* Gif 3 description */}
        <div className="lg:w-[70%]">
          <h2 className="pb-6 text-2xl underline  text-center">{feature3}</h2>
          <p className="whitespace-pre-wrap text-justify leading-8">{feature3Description}</p>
        </div>
        <hr className="border-[#353535] mt-12 w-[20%] "></hr>
      </section>
      }
      {gif4 && 
        <section className="w-full flex flex-col items-center mb-36">
        {/* Gif 1 */}
        <div className="border border-black border-4 lg:border-1 min-h-[25vh] md:min-h-[70vh] mb-16 bg-cover bg-no-repeat bg-center w-full" style={{backgroundImage : `url(${gif1})`}}></div>
        {/* Gif 1 description */}
        <div className="lg:w-[70%]">
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