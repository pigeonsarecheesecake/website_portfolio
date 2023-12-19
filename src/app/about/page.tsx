
import AboutMain from "../components/AboutMain"
import AboutEducation from "../components/AboutEducation"
import AboutPictures from "../components/AboutPictures"
const page = () => {
  return (
    <main className=" min-h-screen ">
      {/* About me main section */}
      <section className="px-8 md:px-12 md:pb-36 lg:px-48 2xl:px-72 grid grid-cols-2 gap-8 pb-36 ">
        <AboutMain />
      </section>
      {/* Education */}
      <section className="bg-[#F4F4F4] py-12">
        <AboutEducation />
      </section>
      {/* Pictures */}
      <section className="px-8 md:px-12 lg:px-48 2xl:px-72 py-36">
        <AboutPictures />
      </section>
    </main>
  )
}

export default page