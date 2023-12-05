'use client'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import clsx from 'clsx'
const NavigationBar = () => {
    const urlPath = usePathname();
    console.log(urlPath)
    return (
        <div className=' pt-24 px-64 flex justify-between'>
            {/* Using / works because / correspond to a route segment (Root or Leaf) */}
            <ul className="menus flex ">
                <li className={clsx({'underline underline-offset-8' : urlPath==="/"})}>
                    <Link  href={"/"}>
                        Home
                    </Link>
                </li>
                <li className={clsx("pl-8",{'underline underline-offset-8' : urlPath==="/about"})}>
                    <Link  href={"/about"}>
                    About
                    </Link>
                </li>
            </ul>
            <ul className="socials-logos ">
                <a href='#'>
                    LinkedIn
                </a>
                <span>|</span>
                <a href='#'>
                    Github
                </a>
            </ul>
        </div>
  )
}

export default NavigationBar