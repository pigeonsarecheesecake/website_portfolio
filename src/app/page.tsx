import Image from 'next/image'
import Projects from './components/Projects';
import Experience from './components/Experience';
export default function Home() {
  return (
  <main className="min-h-screen items-center px-8 md:px-12 lg:px-48 2xl:px-72">
    {/* Landing Page */}
    <section className=" flex flex-wrap justify-between max-h-40vh]  ">
      {/* Landing Left side (Title) */}
      <div className="flex flex-col justify-center ">
        <h1 className='text-4xl md:text-6xl pb-4'>Hi I&#39;m William Ryuputra</h1>
        <p className='md:text-2xl'>Software Engineer  |  UI/UX Designer  |  Technical Specialist</p>
        {/* Socials */}
        <ul className="socials-logos pt-4 flex md:hidden ">
          <a href='https://github.com/pigeonsarecheesecake' target="_blank">
            <svg width="20" height="20" viewBox="0 0 48 47" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" clipRule="evenodd" d="M23.9824 1.25698e-05C12.2233 -0.0119478 2.19403 8.5128 0.31124 20.1202C-1.57154 31.7277 5.24886 42.9856 16.4089 46.6912C17.6148 46.9119 18.0412 46.1619 18.0412 45.5294C18.0412 44.8971 18.0412 43.4558 18.0412 41.4558C11.35 42.9119 9.9383 38.2352 9.9383 38.2352C9.4944 36.7858 8.55134 35.5406 7.27653 34.7206C5.11476 33.25 7.45301 33.25 7.45301 33.25C8.98847 33.4669 10.3388 34.3779 11.1148 35.7206C11.7719 36.9123 12.8766 37.7929 14.1847 38.1683C15.4927 38.5435 16.8964 38.3825 18.0853 37.7206C18.1777 36.5108 18.6992 35.3737 19.5559 34.5148C14.2324 33.9119 8.64418 31.8529 8.64418 22.75C8.60763 20.3721 9.48695 18.0711 11.1 16.3235C10.3816 14.2559 10.4656 11.9939 11.3354 9.9853C11.3354 9.9853 13.35 9.33824 17.9236 12.4412C21.8509 11.3629 25.9962 11.3629 29.9237 12.4412C34.4972 9.33824 36.4972 9.9853 36.4972 9.9853C37.3791 11.9727 37.4839 14.2184 36.7912 16.2794C38.4043 18.0269 39.2837 20.3279 39.2472 22.7058C39.2472 31.9119 33.6443 33.9264 28.3059 34.4706C29.4641 35.6348 30.0597 37.2446 29.9382 38.8823C29.9382 42.0883 29.9382 44.6764 29.9382 45.4558C29.9382 46.2352 30.3647 46.8383 31.5853 46.6029C42.6128 42.8014 49.2995 31.61 47.4214 20.0977C45.5432 8.58562 35.6464 0.0995542 23.9824 1.25698e-05Z" fill="currentColor"/>
            </svg>
          </a>
          <span className='px-2'>|</span>
          <a href='https://www.linkedin.com/in/william-ryuputra-470856197/' target="_blank">
            <svg width="20" height="20" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M25 0C11.1914 0 0 11.1914 0 25C0 38.8086 11.1914 50 25 50C38.8086 50 50 38.8086 50 25C50 11.1914 38.8086 0 25 0ZM40.6055 40.5957C38.5742 42.627 36.2207 44.2187 33.5938 45.3223C30.8789 46.4746 27.9883 47.0508 25 47.0508C22.0215 47.0508 19.1309 46.4648 16.4062 45.3223C13.7793 44.209 11.416 42.6172 9.39453 40.5957C7.36328 38.5645 5.77148 36.2109 4.66797 33.584C3.51563 30.8691 2.92969 27.9785 2.92969 25C2.92969 22.0215 3.51562 19.1309 4.6582 16.4062C5.77148 13.7793 7.36328 11.416 9.38477 9.39453C11.4258 7.36328 13.7793 5.77148 16.4062 4.6582C19.1309 3.51562 22.0215 2.92969 25 2.92969C27.9785 2.92969 30.8691 3.51562 33.5938 4.6582C36.2207 5.77148 38.584 7.36328 40.6055 9.38477C42.6367 11.416 44.2285 13.7695 45.332 16.3965C46.4844 19.1113 47.0605 22.002 47.0605 24.9902C47.0605 27.9688 46.4746 30.8594 45.332 33.584C44.2188 36.2109 42.627 38.5742 40.6055 40.5957Z" fill="currentColor"/>
              <path d="M18.0078 19.8633H13.1348V35.459H18.0078V19.8633Z" fill="currentColor"/>
              <path d="M15.4688 12.5C13.6719 12.5 12.4902 13.6621 12.4902 15.2051C12.4902 16.7188 13.6328 17.9102 15.4004 17.9102H15.4395C17.2754 17.9102 18.418 16.709 18.4082 15.2051C18.3691 13.6621 17.2656 12.5 15.4688 12.5Z" fill="currentColor"/>
              <path d="M31.3184 19.7168C28.5254 19.7168 26.7773 21.2402 26.4551 22.3145V19.8633H20.9766C21.0449 21.1621 20.9766 35.459 20.9766 35.459H26.4551V27.0312C26.4551 26.5527 26.4355 26.084 26.5723 25.752C26.9434 24.8145 27.7539 23.8379 29.209 23.8379C31.1133 23.8379 31.9727 25.2832 31.9727 27.3926V35.459H37.5V26.7871C37.5 21.9629 34.7852 19.7168 31.3184 19.7168Z" fill="currentColor"/>
            </svg>
          </a>
        </ul>
      </div>
      {/* Landing Right side (Logo) */}
      <div className='rotate-12 lg:hover:rotate-0 transition-all duration-[500ms] relative'>
        <Image className="hidden 2xl:block" src="/logo.png" width={400} height={400} alt='Landing page logo' />
        <Image className="hidden md:block 2xl:hidden" src="/logo.png" width={250} height={250} alt='Landing page logo' />
        <Image className="md:hidden" src="/logo.png" width={200} height={200} alt='Landing page logo' />
      </div>
    </section>
    
    {/* Projects */}
    <section className="py-12">
      <Projects />
    </section>

    {/* Experience */}
    <section className='min-h-[70vh] py-12 md:py-36'>
      <Experience />
    </section>
  </main>
  )
}
