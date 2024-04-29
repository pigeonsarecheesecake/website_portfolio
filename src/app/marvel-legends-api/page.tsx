'use client'
import ProjectPage from "../components/ProjectPage"

const page = () => {
    // Props
    const props = {
        title: "Marvel Legends API",
        description: `A REST API that retrieves action figure information from a Marvel Legends Database I've created.`,
        intro:
        `I built this API because I wanted to create a simple Marvel Legends checklist web application to track my collection. I realized that Hasbro does not provide an API or public database accessible for developers who collect Marvel Legends action figures like myself.`,
        mainImage: "/marvel-legends-api.png",
        gif1:"/marvel-legends-gif-1.gif",
        gif2:"/marvel-legends-gif-2.gif",
        role:"Back-end Developer",
        link:"https://github.com/pigeonsarecheesecake/marvel-legends-api/",
        website:"Marvel Legends API",
        technologies:"Node.js, Express.js, Typescript, MongoDB, AWS (Cognito, Beanstalk, S3, Amplify).",
        feature1:"Requesting Access",
        feature1Description:
        `Request an account from me to retrieve JWT (Acess Token from Cognito). Use the following credentials for example purposes.

-username: xekaja9228@em2lab.com 
-password: Test123!! 

Once log in credentials are authenticated, you will receive a JWT token that has to be included in the next steps. `,
        feature2:"Requesting Resources",
        feature2Description:
`You can retrieve action figures by using query parameters. All parameters are optional, but you must include at least 1 parameter. The JWT token created by Cognito is an access token that expires after 24 hours.

Please checkout this project's repo's readme file for more :)`
      }
      
  return (
    <ProjectPage {...props}/>
  )
}

export default page