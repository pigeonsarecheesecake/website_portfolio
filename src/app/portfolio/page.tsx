'use client'
import ProjectPage from "../components/ProjectPage"

const Page = () => {
    // Props
    const props = {
        title: "Website Portfolio",
        description: `A new beginning`,
        intro:
        `This is the third portfolio website I've created so far. The first two were made somewhat carelessly. When I began this journey, I was a perfectionist, striving for originality to the point where it significantly prolonged my projects.

This portfolio is a charm, born out of two previous attempts. I took my time crafting this project, enjoying every step of the process, even though it was my first time using Next.js and Tailwind. My mindset has shifted significantly since then. I initially wanted to become skilled quickly, living in the future where mundane tasks in the present seemed like mere annoyances. But now, I've fallen in love with the process and with the uncertainty of not knowing.

I've adopted a 'learning by doing' approach, rather than deceiving myself by endlessly taking courses and reading documentation without producing anything. In reality, I was avoiding the realization that I was not good at it, and by not creating anything, I was merely delaying failure under the guise of planning. I hope you like this website. It's the one I plan to maintain and update regularly.`,
        mainImage: "/portfolio-home.png",
        gif1:"/portfolio-gif-1.gif",
        gif2: "/portfolio-gif-2.gif",
        gif3:"/portfolio-gif-3.gif",
        role:"Front-end Developer",
        website:"This is the website 🍃",
        technologies:"HTML, TypeScript, React, Next.js, CSS, Tailwind",
        feature1:"Home Page",
        feature1Description:
        `The homepage comprises three distinct sections. The main section includes the introduction and an interactive logo. The secondary section showcases the projects, featuring larger projects in bigger boxes and smaller projects in smaller boxes. These boxes are interactive, and I've opted to use CSS grid for the layout and CSS transform to change the scale of the boxes when users hover over them. The final section displays my recent workplaces, detailing my experience.
    
Initially, to animate the project boxes, I tried adjusting the height and width of the colorful boxes. However, this approach disrupted the image ratio of the projects when using the Next.js image component. Eventually, I found that transforming the scale was the ideal method to achieve the animation I envisioned.`,
        feature2:"Project Page",
        feature2Description:
        `When I was wireframing the project page, I noticed that most features I wanted to showcase followed a similar pattern. So, I decided to create a ProjectPage component that generates the structure of each project page.

The downside of this approach is that within the parent component, the props passed from the parent and the interface declaration inside the child component become lengthier. The benefit, however, is that I avoid repeating myself by copying and pasting the layout and can pass props to display data dynamically.
        
I've also decided to use GIFs to demonstrate some of the key features, knowing that you probably don't have much time to check the links. Additionally, some of the websites are implemented internally and are not available for public viewing.`,
        feature3:"About Page",
        feature3Description:
        `The About page shares my journey both personally and as a developer. Please do check it out 😁. The last section of the About page is my personal favorite. I've aimed to give it the appearance of Polaroid pictures, complete with imperfect captions as if they were handwritten with a marker.

To achieve this, I used the map method to iterate through an array of objects. Each object represents a Polaroid picture, with properties that correspond to the image and caption.`
      }
      
  return (
    <ProjectPage {...props}/>
  )
}

export default Page