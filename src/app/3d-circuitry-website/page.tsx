'use client'

const props = {
  title: "3D-Circuitry Website",
  description: `Exposing young minds to the exciting 
  world of electronics`,
  intro:
  `Three years after obtaining my bachelor's degree, I decided to pursue a career as a full-stack developer. Finding internship opportunities post-graduation was challenging. 3D Circuitry gave me the chance to be part of something big, regardless of my background. 
  
3D Circuitry is a company with the primary goal to nurture future engineers by providing innovative STEM kits. Having no prior experience with jQuery didn't stop me from embracing the discomfort of not knowing. I was responsible for crafting the website's user interface and user experience based on a design prototype created by the design team. Additionally, I suggested frameworks and contributed to design decisions.`,
  mainImage: "/3d-home.png",
  gif1:"/3d-home-gif.gif",
  gif2: "/3d-classroom-gif.gif",
  gif3:"/3d-resource-gif.gif",
  role:"Front-end Developer ",
  website:"Under Development 🛠️",
  technologies:"HTML, jQuery, JavaScript, PHP, SASS/SCSS, Git, Github",
  feature1:"Landing Page",
  feature1Description:
  `In my opinion, the landing page is the most critical part of the website. It's essential to give users a positive first impression and experience. On this page, I was responsible for every section, including the footer, with the exception of the "New Arrivals" and "Latest News and Articles" sections. Initially, I was uncertain about how to detect and animate elements on the screen without creating overly verbose code.

Then, I discovered the Intersection Observer API, which lets me target elements and apply classes once they become visible on the screen. By using the Intersection Observer's constructor and passing in a callback function, I gained the ability to select and animate elements as they appear to users. It felt like I've unlocked a new special move in a video game.`,
  feature2:"Classroom Page",
  feature2Description:
  `The Classroom page holds a special place for me as it was my first assignment, and I was excited to tackle it. I was responsible for every section visible on the page. Here, I learned to create both horizontal and vertical parallax backgrounds.

I encountered an issue in the "Here's the Next Steps" section. Aligning the elements, arrows, and the contact form proved challenging. Initially, I wasn't provided with some assets, such as the arrows. I decided to design the arrows myself using Figma and saved them as SVGs. To align the elements closely with the design prototype, I chose to use CSS Grid for the layout.`,
  feature3:"Resource Page",
  feature3Description:
  `The Resource page is the one I'm most proud of, particularly the Interactive Card Table section, which was a new challenge for me. Each card represents an instruction card that comes with the kit and has the ability to be dragged, rotated, and resized. When clicked, it triggers a modal popup that displays a carousel of instruction cards.

Initially, I intended to develop each interactive feature from scratch, but time constraints led me to seek alternative solutions. While grabbing an Americano at Starbucks to help me focus, I discovered jQuery UI, which offers a set of user interface interactions perfectly suited for my needs. For the modal popup, I utilized Bootstrap's modal and carousel components to create the desired effect.`
}

import ProjectPage from "../components/ProjectPage"
const page = () => {
  return (
    <ProjectPage {...props}/>
  )
}

export default page