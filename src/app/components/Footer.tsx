const Footer = () => {
  return (
    <footer className="py-12 px-8 md:px-12 lg:px-48 2xl:px-72 flex flex-col items-center md:flex-row md:justify-between">
        <p >© 2023 by William Ryuputra </p>
        <div className="socials">
            <a href="https://www.instagram.com/williamryup/" className="transition-all ease-linear duration-300 hover:text-gray-500" target="_blank">Instagram</a>
            <span className="px-2">|</span>
            <a href="https://www.linkedin.com/in/william-ryuputra-470856197/" className=" transition-all ease-linear duration-300 hover:text-gray-500" target="_blank">LinkedIn</a>
            <span className="px-2">|</span>
            <a href="https://github.com/pigeonsarecheesecake" className=" transition-all ease-linear duration-300 hover:text-gray-500" target="_blank">GitHub</a>
        </div>
    </footer>
  )
}

export default Footer