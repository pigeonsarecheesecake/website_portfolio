'use client'
import ProjectPage from "../components/ProjectPage"

const page = () => {
    // Props
    const props = {
        title: "Refrigerant Inventory System",
        description: `Upgrading the current Refrigerant Inventory System 
        from paper to digital`,
        intro:
        `This project was developed for Lisa Kortfelt, M.P.H., the Director of Environmental Health and Safety at Southern Connecticut State University. The primary goal was to replace the paper-based refrigerant inventory system with a digital one. I led a team of two, including myself. My responsibilities were focused on back-end development, while my project partner, Kevin Magbaleta, handled the front-end development.
    
The system features a login mechanism with two user types: supervisor and technician. Supervisors have the capability to create and delete equipment, users, and reports. They can also view and search through reports and equipment. Technicians, as specified by Lisa's request, are only authorized to add reports.
        
The modified and optimized version of this project was subsequently implemented within the Director of Environmental Health and Safety's office.`,
        mainImage: "/capstone-home.png",
        gif1:"/capstone-gif-1.gif",
        gif2: "/capstone-gif-2.gif",
        gif3:"/capstone-gif-3.gif",
        role:"Back-end developer ",
        link:"https://github.com/pigeonsarecheesecake/project_client",
        website:"Github Repo",
        technologies:"HTML, JavaScript, PHP, CSS, MySQL",
        feature1:"Login System & User Type",
        feature1Description:
        `This system supports two distinct user types: Supervisor and Technician. Depending on the user type logging in, the system displays different capabilities. The login system enables supervisors to perform data insertion, deletion, and search functions.
    
The system collects user login credentials using an HTML form, checks the 'usertype' field, and then redirects the user to the appropriate menu. I am aware that this method is not very secure, but at the time, it was sufficient to emulate a login system.`,
        feature2:"Create and Read",
        feature2Description:
        `Supervisors and technicians have the ability to add new reports. However, only supervisors are authorized to add users and equipment types. This functionality was achieved by implementing an 'insert' statement in the database.
    
Supervisors can also perform search functions on the database. They can look up reports using fields such as date, refrigerants used, serial number, and technician name. To look up equipment, the search function can accept the serial number of the equipment, the building where the refrigerant is located, and the equipment type.`,
        feature3:"Delete",
        feature3Description:
        `Supervisors have the ability to remove reports, users, and equipment. This functionality was achieved by utilizing the 'delete' statement in the database.`
      }
      
  return (
    <ProjectPage {...props}/>
  )
}

export default page