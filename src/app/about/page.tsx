
import AboutMain from "../components/AboutMain"
const page = () => {
  return (
    <main className="px-8 md:px-12 lg:px-48 2xl:px-72 min-h-screen ">
      {/* About me main section */}
      <section className=" grid grid-cols-2 gap-8 ">
        <AboutMain />
      </section>
    </main>
  )
}

export default page