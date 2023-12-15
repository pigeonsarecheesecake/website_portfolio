// Rafce
'use client'
import Image from "next/image"
import Link from "next/link"
import { useCallback } from 'react';
import clsx from "clsx";
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
            projectName:"3D Circuitry Internship",
            backgroundColor:"bg-[#FFDF8C]",
            imgPath:"/3d_laptop.png",
            gridSize:"md:col-span-2",
            // width:"30%",
            width:300,
            reference:ref1,
            inView:inView
        },
        {
            projectId:2,
            projectName:"To-do List",
            backgroundColor:"bg-[#BBA9D1]",
            imgPath:"/to-do.png",
            gridSize:"md:col-span-1",
            // width:"30%",
            width:150,
            reference:ref2,
            inView:inView2
        },
        {
            projectId:3,
            projectName:"Weather App",
            backgroundColor:"bg-[#7488B9]",
            imgPath:"/weather.png",
            gridSize:"md:col-span-1",
            // width:"30%",
            width:300,
            reference:ref3,
            inView:inView3
        },
        {
            projectId:4,
            projectName:"Refrigerant Inventory System",
            backgroundColor:"bg-[#7BA880]",
            imgPath:"/capstone.png",
            gridSize:"md:col-span-2",
            // width:"30%",
            width:300,
            reference:ref4,
            inView:inView4
        }
    ]
    
    return (
        
            <ul className="grid grid-cols-1 md:grid-cols-3 md:grid-rows-4 min-h-[200vh] gap-10 md:min-h-screen">
                {/* Generates Multiple Projects */}
                {projects.map((project)=>{
                            return(
                                <Link ref={project.reference} key={project.projectId} className={`${project.gridSize} rounded-3xl row-span-2 opacity-0 transition-all duration-[1500ms] relative top-8 ${project.inView ? "desktop-show" : ""} flex justify-center items-center `} href={"/about"}>
                                    <li className={`flex items-center justify-center rounded-2xl  ${project.backgroundColor} w-full h-full scale-100 transition-all ease-linear lg:hover:scale-105 `}>
                                        <Image  src={project.imgPath} width={project.width} height={project.width} alt={`Project ${project.projectName}`}/>
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