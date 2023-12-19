import { Mansalva } from 'next/font/google'

const manslava=Mansalva({
    weight: '400',
    subsets: ['latin'],
})
const AboutPictures = () => {
    const polaroids=[
        {
            polaroidId:1,
            imgSource:"/concat.png",
            handWriting: <p className={`${manslava.className}  text-2xl xl:text-3xl whitespace-pre -rotate-12 pt-12 `}>
                {`Conncatt Volunteer,
            New Haven`}
            </p>
        },
        {
            polaroidId:2,
            imgSource:"/devfest.jpg",
            handWriting: <p className={`${manslava.className}  text-2xl xl:text-3xl whitespace-pre -rotate-8 pt-12`}>
            {`Google's DevFest,
                Bronx`}
        </p>
        },
        {
            polaroidId:3,
            imgSource:"/scsu-club.jpg",
            handWriting: <p className={`${manslava.className}  text-2xl xl:text-3xl whitespace-pre rotate-3 pt-12`}>
            {`Computer Science Club 
    Conference`}
        </p>
        },
        {
            polaroidId:4,
            imgSource:"/google-speaker.jpg",
            handWriting: <p className={`${manslava.className}  text-2xl xl:text-3xl whitespace-pre pt-12`}>
            {`Computer Science Club
            Members`}
        </p>
        }
    ]
  return (
    <ul className="grid grid-cols-1 md:grid-cols-2  gap-10 relative">
        <li className='absolute -bottom-10 right-0 lg:-bottom-10 lg:-right-20 text-6xl lg:text-9xl'>
            <p className="">🖊️</p>
        </li>
        {
            polaroids.map(
                (polaroid)=>{
                    return(
                        <li key={polaroid.polaroidId} className={`flex flex-col items-center  pt-4 min-h-[500px] bg-[#FAFAFA] shadow-[15px_25px_15px_5px_rgba(0,0,0,0.3)] `}>
                            <div className={`w-[90%] h-[65%] bg-cover bg-no-repeat bg-center border shadow-inner `} style={{backgroundImage : `url(${polaroid.imgSource}) `}}>
                            </div>
                            {polaroid.handWriting}
                        </li>
                    )
                }
            )
        }
    </ul>
  )
}

export default AboutPictures