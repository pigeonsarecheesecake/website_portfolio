const Experience = () => {
    const experiences = [
        {
            experienceId:1,
            title:"Front-End Developer Intern",
            description:"3D Circuitry | June 2023 - Current"
        }
    ]
    return (
    <>
    {/* Experience Left Side (Title) */}
    <div className="col-span-1 flex items-center">
        <h1 className="text-6xl">Experience</h1>
    </div>
    {/* Experience Right Side (Experiences) */}
    <div className="col-span-1 flex flex-col justify-between">
        <div className="py-4">
            <h2 className="text-4xl">Front-End Developer Intern</h2>
            <p className="text-2xl">3D Circuitry | June 2023 - Current</p>
        </div>
        <div className="py-4">
            <h2 className="text-4xl">Technical Specialist</h2>
            <p className="text-2xl">Apple | July 2022 - Current</p>
        </div>
        <div className="py-4">
            <h2 className="text-4xl">Business Analyst</h2>
            <p className="text-2xl">MetaRetail | February 2021 - June 2022</p>
        </div>
        <div className="py-4">
            <h2 className="text-4xl">Python Tutor</h2>
            <p className="text-2xl">Southern CT State University | September 2019 - June 2020</p>
        </div>
        <div className="py-4">
            <h2 className="text-4xl">Store Associate</h2>
            <p className="text-2xl">Walgreens | June 2017 - June 2020</p>
        </div>
        <div className="py-4">
            <h2 className="text-4xl">Picker</h2>
            <p className="text-2xl">Amazon | July 2020 - January 2021</p>
        </div>
    </div>
    </>
  )
}

export default Experience