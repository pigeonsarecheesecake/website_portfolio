'use client'

const props = {
  title: "3D-Circuitry Website",
  description: `Exposing young minds to the exciting 
  world of electronics`,
  mainImage: "",
  role:"Front-end Developer",
  responsibilities: "Lorem",
  website:"0",
  technologies:"React, jQuery",
  gif1:"gif1",
  gif2: "gif2",
  gif3:"gif3",
  gif4: "gif4",
}

import ProjectPage from "../components/ProjectPage"
const page = () => {
  return (
    <ProjectPage {...props}/>
  )
}

export default page