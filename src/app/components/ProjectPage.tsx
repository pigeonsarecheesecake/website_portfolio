interface ProjectPageProps {
    title:string,
    description:string,
    mainImage:string,
    gif1:string,
    gif2:string,
    gif3?:string,
    gif4?:string
}

const ProjectPage = ({title,description,mainImage,gif1,gif2,gif3,gif4}:ProjectPageProps) => {
  return (
    <main className="min-h-screen pb-12 lg:pt-12 lg:pb-48 px-8 md:px-12 lg:px-56 2xl:px-96 flex flex-col items-center">
      {/* Project Title */}
      <section>
        <h1 className="text-4xl md:text-6xl text-center pb-2">{title}</h1> 
        <p className="md:text-2xl text-center whitespace-pre">{description}</p>
      </section>

      {/* Main Image */}
      <section className="border border-black border-4 lg:border-8 rounded-3xl min-h-[25vh] md:min-h-[70vh] w-full my-24 bg-cover bg-no-repeat bg-center" style={{backgroundImage : `url(${mainImage})`}}></section>
      
      {/* Role */}
      <section className="grid grid-cols-1 xl:grid-cols-3 w-full my-12 lg:my-24 gap-12">
        <div className="  ">
            <h2 className="underline pb-6 text-2xl">Role</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi numquam vero aut illum in, reprehenderit voluptate explicabo voluptatem eaque? Eos odio animi debitis ab qui quod aliquam saepe vitae provident!</p>
        </div>
        <div >
          <h2 className="underline pb-6 text-2xl">Responsibilities</h2>
          <p className="">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni consequatur doloremque delectus blanditiis, repellat earum labore! Ipsum quos qui hic ullam consequuntur sit nam aut expedita molestiae, voluptates eligendi repellat?</p>
        </div>
        <div >
          <h2 className="underline pb-6 text-2xl">Website</h2>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maiores ipsam nemo dolore a rerum debitis distinctio, reprehenderit dolores expedita reiciendis aut perspiciatis iure unde corrupti suscipit saepe ratione? Sequi, asperiores?</p>
        </div>
        <div >
          <h2 className="underline pb-6 text-2xl">Technologies</h2>
          <p>Next.js, Tailwind</p>
        </div>
      </section>
   
      <section className="w-full">
        {/* Gif 1 */}
        <div className="border border-black border-4 lg:border-8 rounded-3xl min-h-[25vh] md:min-h-[70vh] my-24 bg-cover bg-no-repeat bg-center " style={{backgroundImage : `url(${gif1})`}}></div>
        {/* Gif 1 description */}
        <div>
          <h2 className="underline pb-6 text-2xl">Classroom Page</h2>
          <p></p>
        </div>
      </section>

      <section className="w-full">
        {/* Gif 2 */}
        <div className="border border-black border-4 lg:border-8 rounded-3xl min-h-[25vh] md:min-h-[70vh] my-24 "></div>
        {/* Gif 2 description */}
        <div>
          <h2 className="underline pb-6 text-2xl">Technologies</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum aliquam repudiandae molestias, maiores quisquam necessitatibus asperiores deleniti. Ipsum possimus quibusdam, labore nihil delectus unde facere. Ratione vero omnis quasi. Corporis. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Inventore ipsum tenetur dolor, reprehenderit dolorem animi et expedita? Saepe, vero totam porro, et alias dolorem beatae sit, ad velit optio magni.</p>
        </div>
      </section>

      {/* For bigger projects, gif3 and gif4 will be rendered conditionally */}
      {gif3 && 
        <section className="w-full">
            {/* Gif 3 */}
          <div className="border border-black border-4 lg:border-8 rounded-3xl min-h-[25vh] md:min-h-[70vh] my-24 "></div>
          {/* Gif 3 description */}
          <div>
            <h2 className="underline pb-6 text-2xl">Technologies</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum aliquam repudiandae molestias, maiores quisquam necessitatibus asperiores deleniti. Ipsum possimus quibusdam, labore nihil delectus unde facere. Ratione vero omnis quasi. Corporis. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Inventore ipsum tenetur dolor, reprehenderit dolorem animi et expedita? Saepe, vero totam porro, et alias dolorem beatae sit, ad velit optio magni.</p>
          </div>
        </section>
      }
      {gif4 && 
        <section className="w-full">
            {/* Gif 4 */}
          <div className="border border-black border-4 lg:border-8 rounded-3xl min-h-[25vh] md:min-h-[70vh] my-24 "></div>
          {/* Gif 4 description */}
          <div>
            <h2 className="underline pb-6 text-2xl">Technologies</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum aliquam repudiandae molestias, maiores quisquam necessitatibus asperiores deleniti. Ipsum possimus quibusdam, labore nihil delectus unde facere. Ratione vero omnis quasi. Corporis. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Inventore ipsum tenetur dolor, reprehenderit dolorem animi et expedita? Saepe, vero totam porro, et alias dolorem beatae sit, ad velit optio magni.</p>
          </div>
        </section>
      }
    </main>
  )
}

export default ProjectPage