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
    <ul className="grid grid-cols-1 md:grid-cols-2 gap-24">
        {
            polaroids.map(
                (polaroid)=>{
                    return(
                        <li key={polaroid.polaroidId} className={`flex flex-col items-center  pt-4 min-h-[500px] bg-[#FAFAFA] shadow-[20px_20px_16px_0px_rgba(0,0,0,.1)] `}>
                            {/* A trick to separate the background image using normal css property and not tailwind */}
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