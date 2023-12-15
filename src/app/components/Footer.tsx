const Footer = () => {
  return (
    <footer className="py-12 px-8 md:px-12 lg:px-72 flex justify-between">
        <p >© 2023 by William Ryuputra </p>
        <div className="socials">
            <a href="" className="transition-all ease-linear duration-300 hover:text-gray-500">Instagram</a>
            <span className="px-2">|</span>
            <a href="" className=" transition-all ease-linear duration-300 hover:text-gray-500">LinkedIn</a>
            <span className="px-2">|</span>
            <a href="" className=" transition-all ease-linear duration-300 hover:text-gray-500">GitHub</a>
        </div>
    </footer>
  )
}

export default Footer