const AboutMain = () => {
  return (
    <>
    {/* About me text */}
    <div className= {`col-span-2 xl:col-span-1 flex flex-col text-white bg-[#383838] p-8 md:p-16 `} >
        <h1 className='text-4xl md:text-6xl pb-6 '>Welcome 🌱</h1>
        <hr className=" w-12 " />
        <p className=" py-8 whitespace-pre-wrap">{`My name is William Ryuputra, and I'm a software engineer 🖥️. Why do I torture myself by spending hours just to find a missing bracket or Googling how to center a div for the 100th time, you ask? Well, you can compare it to enjoying spicy food. Spiciness is a sensation. It's an uncomfortable feeling that deters some, but for people like me, the "painful" sensation is what makes it addicting.

In this field, not only do I get to build pretty things, but I also craft programs that make life easier for everyone. And when I say everyone, I mean every single person. It gives me the chance to contribute directly or indirectly to the community.

My primary language is JavaScript. Besides programming, I enjoy reading books and designing apparel and websites. Books that have shaped who I am today include "Atomic Habits" by James Clear, "Ego is the Enemy" by Ryan Holiday, and "4,000 Weeks" by Oliver Burkeman.

If you're reading this, don't stop chasing your dreams. Fall in love with the process, and you'll find it's easier to change yourself for the better than trying to change others. Confidence lies within humility, while insecurity lies within arrogance. Be kind!`}</p>
        <div className="flex flex-col  ">
            <a className="underline" href="/Ryuputra_William_Resume.pdf" target='_blank'>Resume ↗</a>
            <a className="underline" href="https://www.linkedin.com/in/william-ryuputra-470856197/" target='_blank'>LinkedIn ↗</a>
        </div>
    </div>
    {/* About me picture container */}
    <div className=" border-2 border-black col-span-2 xl:col-span-1 min-h-[550px] xl:min-h-[700px] ">
        {/* About me picture tab */}
        <div className="border-b-2 border-black h-12 flex justify-between px-4">
            {/* About me picture dots */}
            <div className="flex items-center">
                <svg width="74" height="16" viewBox="0 0 74 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="8" cy="8" r="8" fill="#353535"/>
                    <circle cx="37" cy="8" r="8" fill="#353535"/>
                    <circle cx="66" cy="8" r="8" fill="#353535"/>
                </svg>
            </div>
            {/* About me picture close button */}
            <div className="flex items-center ">
                <svg width="24" height="27" viewBox="0 0 24 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="0.5" y="0.743904" width="23" height="25.6341" fill="#D9D9D9" stroke="#353535"/>
                    <path d="M13.7748 20.032C13.5188 20.032 13.3428 19.92 13.3428 19.696C13.3428 19.12 14.3668 19.328 14.3668 18.768C14.3668 18.56 14.2068 18.304 13.9508 17.968L11.7588 15.056L9.34281 18.096C9.05481 18.48 9.00681 18.64 9.00681 18.784C9.00681 19.344 10.0788 19.12 10.0788 19.696C10.0788 19.92 9.91881 20.032 9.64681 20.032C9.31081 20.032 8.51081 19.984 8.07881 19.984C7.59881 19.984 7.11881 20.032 6.70281 20.032C6.47881 20.032 6.30281 19.92 6.30281 19.712C6.30281 19.152 7.13481 19.344 8.15881 18.064L11.1668 14.272L8.14281 10.24C7.45481 9.312 6.70281 9.472 6.70281 8.976C6.70281 8.768 6.87881 8.64 7.10281 8.64C7.53481 8.64 7.91881 8.688 8.55881 8.688C9.23081 8.688 10.0308 8.64 10.3988 8.64C10.6548 8.64 10.8308 8.752 10.8308 8.976C10.8308 9.536 9.87081 9.28 9.87081 9.84C9.87081 10.032 10.0788 10.32 10.2548 10.576L12.2868 13.264L14.3508 10.592C14.6068 10.272 14.6868 10.048 14.6868 9.904C14.6868 9.344 13.6788 9.568 13.6788 8.992C13.6788 8.768 13.8388 8.64 14.1108 8.64C14.4468 8.64 15.1508 8.688 15.5828 8.688C16.0468 8.688 16.4788 8.64 16.8788 8.64C17.1188 8.64 17.2788 8.752 17.2788 8.96C17.2788 9.52 16.5428 9.344 15.7908 10.288L12.8628 14.048L15.9988 18.208C16.9268 19.456 17.6948 19.104 17.6948 19.712C17.6948 19.904 17.5188 20.032 17.2948 20.032C16.8628 20.032 16.3988 19.984 15.7588 19.984C15.0868 19.984 14.1428 20.032 13.7748 20.032Z" fill="#353535"/>
                </svg>
            </div>
        </div>
        {/* About me picture*/}
        <div className="h-[90%] border-b-2 border-black bg-[url('/portrait.jpg')] bg-cover bg-no-repeat bg-center"></div>
    </div>
    </>
  )
}

export default AboutMain