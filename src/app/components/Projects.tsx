// Rafce
'use client'
import Image from "next/image"
import Link from "next/link"
import { useInView } from 'react-intersection-observer';
const Projects = () => {
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
        threshold:.1,
        triggerOnce:true
    }); 
    const {ref:ref4,inView:inView4} = useInView({
        threshold:.1,
        triggerOnce:true
    });  
    
    // Projects Object
    const projects=[
        {
            projectId:1,
            projectName:"3D Circuitry Website",
            backgroundColor:"bg-[#FFD361]",
            imgPath:"/3d-laptop.png",
            gridSize:"md:col-span-2",
            width:400,
            reference:ref1,
            inView:inView,
            filePath:"/3d-circuitry-website"
        },
        {
            projectId:2,
            projectName:"Marvel Legends API",
            backgroundColor:"bg-[#7488B9]",
            imgPath:"/api-laptop.png",
            gridSize:"md:col-span-1",
            width:250,
            reference:ref2,
            inView:inView2,
            filePath:"/marvel-legends-api"
        },
        {
            projectId:3,
            projectName:"Portfolio",
            backgroundColor:"bg-[#BBA9D1]",
            imgPath:"/portfolio-laptop.png",
            gridSize:"md:col-span-1",
            width:300,
            reference:ref3,
            inView:inView3,
            filePath:"/portfolio"
        },
        {
            projectId:4,
            projectName:"Refrigerant System",
            backgroundColor:"bg-[#7BA880]",
            imgPath:"/refrigerant-laptop.png",
            gridSize:"md:col-span-2",
            width:400,
            reference:ref4,
            inView:inView4,
            filePath:"/refrigerant-system"
        }
    ]
    
    return (
            <ul className="grid grid-cols-1 md:grid-cols-3 md:grid-rows-4 min-h-[200vh] gap-10 md:min-h-screen">
                {/* Generates Multiple Projects */}
                {projects.map((project)=>{
                            return(
                                <Link ref={project.reference} key={project.projectId} className={`${project.gridSize} rounded-3xl row-span-2 opacity-0 transition-all duration-[1500ms] relative top-8 ${project.inView ? "show" : ""} flex justify-center items-center `} href={`${project.filePath}`}>
                                    <li className={` flex items-center justify-center rounded-2xl  ${project.backgroundColor} w-full h-full transition-all ease-linear lg:hover:scale-105 relative`}>
                                        <Image className="" src={project.imgPath} width={project.width} height={400} alt={`Project ${project.projectName}`}/>
                                        <p className="absolute bottom-0 py-6 md:p-10  md:bottom-0 md:right-0 white text-white text-xl text-center md:text-start">{`${project.projectName} ↗`}</p>
                                    </li>
                                </Link>
                            )
                        }
                    )
                }
            </ul>
      
        )
}

export default Projects