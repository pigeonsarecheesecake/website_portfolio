// Rafce
import Image from "next/image"
import Link from "next/link"

const Projects = () => {
    // Projects Object
    const projects=[
        {
            projectId:1,
            projectName:"3D Circuitry Internship",
            backgroundColor:"bg-[#FFDF8C]",
            imgPath:"/3d_laptop.png",
            gridSize:"md:col-span-2",
            width:300,
        },
        {
            projectId:2,
            projectName:"To-do List",
            backgroundColor:"bg-[#BBA9D1]",
            imgPath:"/to-do.png",
            gridSize:"md:col-span-1",
            width:150,
        },
        {
            projectId:3,
            projectName:"Weather App",
            backgroundColor:"bg-[#7488B9]",
            imgPath:"/weather.png",
            gridSize:"md:col-span-1",
            width:300,
        },
        {
            projectId:4,
            projectName:"Refrigerant Inventory System",
            backgroundColor:"bg-[#7BA880]",
            imgPath:"/capstone.png",
            gridSize:"md:col-span-2",
            width:300,
        }
    ]
    return (
        <section className="px-8 md:px-12 lg:px-64 py-24">
            <ul className="grid grid-cols-1 md:grid-cols-3 md:grid-rows-4 gap-4 min-h-[200vh] md:min-h-screen">
                {/* Generates Multiple Projects */}
                {projects.map((project)=>{
                            return(
                                <Link key={project.projectId} className={`${project.gridSize} row-span-2 `} href={"/about"}>
                                    <li className={`flex items-center justify-center rounded-3xl h-full ${project.backgroundColor} p-4`}>
                                        <Image src={project.imgPath} width={project.width} height={0} alt={`Project ${project.projectName}`}/>
                                    </li>
                                </Link>
                            )
                        }
                    )
                }
            </ul>
        </section>
        )
}

export default Projects