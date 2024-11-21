import logoImg from "@/images/studio.png"
import Image from "next/image"
import { Link } from '@/i18n/Routting'; 
import { usePathname } from "next/navigation";
import { useLocale } from "next-intl";
const Sidebar = () => {
 const pathname =  usePathname()

 const locale = useLocale()
  return (
    <div>
      <aside className="hidden md:block min-h-screen">
  <div className="p-10  text-2xl justify-center uppercase flex items-center w-full text-center tracking-widest">
    <Link href="/dashboard" >
    <Image
      src={logoImg}
      width={150}
      height={150}
      alt="Picture not found"
      className="object-cover"
    />
    </Link>
  </div>
  <div className="text-sm text-gray-300">
    <ul className="flex flex-col">
      <li className={pathname  === `/${locale}/dashboard` ? "px-4 cursor-pointer transition-all duration-300   bg-teal-600 text-white" :`px-4 cursor-pointer transition-all duration-300  hover:bg-teal-600  text-white`}>
        <Link className="py-3 flex items-center" href="/dashboard">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
            stroke="currentColor" className="w-4 mr-3">
            <path strokeLinecap="round" strokeLinejoin="round"
              d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21" />
          </svg>

          Dashboard
        </Link>
      </li>

      <li className="px-4 py-2 text-xs uppercase tracking-wider text-gray-500 font-bold">Ui MANAGEMENT</li>
      <li className={pathname  === `/${locale}/dashboard/Hero` ? "px-4 cursor-pointer transition-all duration-300   bg-teal-600 text-white" :`px-4 cursor-pointer transition-all duration-300  hover:bg-teal-600  text-white`}>
        <Link className="py-3 flex items-center" href="/dashboard/Hero" >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
            stroke="currentColor" className="w-4 mr-3">
            <path strokeLinecap="round" strokeLinejoin="round"
              d="M6 6.878V6a2.25 2.25 0 0 1 2.25-2.25h7.5A2.25 2.25 0 0 1 18 6v.878m-12 0c.235-.083.487-.128.75-.128h10.5c.263 0 .515.045.75.128m-12 0A2.25 2.25 0 0 0 4.5 9v.878m13.5-3A2.25 2.25 0 0 1 19.5 9v.878m0 0a2.246 2.246 0 0 0-.75-.128H5.25c-.263 0-.515.045-.75.128m15 0A2.25 2.25 0 0 1 21 12v6a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 18v-6c0-.98.626-1.813 1.5-2.122" />
          </svg>

          Hero Section
        </Link>

      </li>
      <li className={pathname  === `/${locale}/dashboard/partners` ? "px-4 cursor-pointer transition-all duration-300   bg-teal-600 text-white" :`px-4 cursor-pointer transition-all duration-300  hover:bg-teal-600  text-white`}>
      <Link className="py-3 flex items-center" href="/dashboard/partners">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
        stroke="currentColor" className="w-4 mr-3">
        <path strokeLinecap="round" strokeLinejoin="round"
          d="M6 6.878V6a2.25 2.25 0 0 1 2.25-2.25h7.5A2.25 2.25 0 0 1 18 6v.878m-12 0c.235-.083.487-.128.75-.128h10.5c.263 0 .515.045.75.128m-12 0A2.25 2.25 0 0 0 4.5 9v.878m13.5-3A2.25 2.25 0 0 1 19.5 9v.878m0 0a2.246 2.246 0 0 0-.75-.128H5.25c-.263 0-.515.045-.75.128m15 0A2.25 2.25 0 0 1 21 12v6a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 18v-6c0-.98.626-1.813 1.5-2.122" />
      </svg>

    Partners
    </Link>
      
      </li>
      <li className={pathname  === `/${locale}/dashboard/Testimonials` ? "px-4 cursor-pointer transition-all duration-300   bg-teal-600 text-white" :`px-4 cursor-pointer transition-all duration-300  hover:bg-teal-600  text-white`}>
      <Link className="py-3 flex items-center" href="/dashboard/Testimonials">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
        stroke="currentColor" className="w-4 mr-3">
        <path strokeLinecap="round" strokeLinejoin="round"
          d="M6 6.878V6a2.25 2.25 0 0 1 2.25-2.25h7.5A2.25 2.25 0 0 1 18 6v.878m-12 0c.235-.083.487-.128.75-.128h10.5c.263 0 .515.045.75.128m-12 0A2.25 2.25 0 0 0 4.5 9v.878m13.5-3A2.25 2.25 0 0 1 19.5 9v.878m0 0a2.246 2.246 0 0 0-.75-.128H5.25c-.263 0-.515.045-.75.128m15 0A2.25 2.25 0 0 1 21 12v6a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 18v-6c0-.98.626-1.813 1.5-2.122" />
      </svg>

      Testimonials
    </Link>
      
      </li>
      <li className={pathname  === `/${locale}/dashboard/Projects` ? "px-4 cursor-pointer transition-all duration-300   bg-teal-600 text-white" :`px-4 cursor-pointer transition-all duration-300  hover:bg-teal-600  text-white`}>
      <Link className="py-3 flex items-center" href="/dashboard/Projects">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
        stroke="currentColor" className="w-4 mr-3">
        <path strokeLinecap="round" strokeLinejoin="round"
          d="M6 6.878V6a2.25 2.25 0 0 1 2.25-2.25h7.5A2.25 2.25 0 0 1 18 6v.878m-12 0c.235-.083.487-.128.75-.128h10.5c.263 0 .515.045.75.128m-12 0A2.25 2.25 0 0 0 4.5 9v.878m13.5-3A2.25 2.25 0 0 1 19.5 9v.878m0 0a2.246 2.246 0 0 0-.75-.128H5.25c-.263 0-.515.045-.75.128m15 0A2.25 2.25 0 0 1 21 12v6a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 18v-6c0-.98.626-1.813 1.5-2.122" />
      </svg>

      Projects
    </Link>
      
      </li>
      <li className={pathname  === `/${locale}/dashboard/questions` ? "px-4 cursor-pointer transition-all duration-300   bg-teal-600 text-white" :`px-4 cursor-pointer transition-all duration-300  hover:bg-teal-600  text-white`}>
      <Link className="py-3 flex items-center" href="/dashboard/questions">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
        stroke="currentColor" className="w-4 mr-3">
        <path strokeLinecap="round" strokeLinejoin="round"
          d="M6 6.878V6a2.25 2.25 0 0 1 2.25-2.25h7.5A2.25 2.25 0 0 1 18 6v.878m-12 0c.235-.083.487-.128.75-.128h10.5c.263 0 .515.045.75.128m-12 0A2.25 2.25 0 0 0 4.5 9v.878m13.5-3A2.25 2.25 0 0 1 19.5 9v.878m0 0a2.246 2.246 0 0 0-.75-.128H5.25c-.263 0-.515.045-.75.128m15 0A2.25 2.25 0 0 1 21 12v6a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 18v-6c0-.98.626-1.813 1.5-2.122" />
      </svg>

      Asked questions
    </Link>
      
      </li>
      



      <li className="px-4 py-2 text-xs uppercase tracking-wider text-gray-500 font-bold">Blog</li>
      <li className={pathname  === `/${locale}/dashboard/blog` ? "px-4 cursor-pointer transition-all duration-300   bg-teal-600 text-white" :`px-4 cursor-pointer transition-all duration-300  hover:bg-teal-600  text-white`}>
        <Link href="/dashboard/blog" className="py-3 flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
            stroke="currentColor" className="w-4 mr-3">
            <path strokeLinecap="round" strokeLinejoin="round"
              d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
          </svg>
          Blog
        </Link>
      </li>
  
      <li className="px-4 py-2 text-xs uppercase tracking-wider text-gray-500 font-bold">USER MANAGEMENT</li>
      <li className={pathname  === `/${locale}/dashboard/users` ? "px-4 cursor-pointer transition-all duration-300   bg-teal-600 text-white" :`px-4 cursor-pointer transition-all duration-300  hover:bg-teal-600  text-white`}>
        <Link className="py-3 flex items-center" href="/dashboard/users" >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
            stroke="currentColor" className="w-4 mr-3">
            <path strokeLinecap="round" strokeLinejoin="round"
              d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z" />
          </svg>
          Users
        </Link>
      </li>
      <li className={pathname  === `/${locale}/dashboard/Roles` ? "px-4 cursor-pointer transition-all duration-300   bg-teal-600 text-white" :`px-4 cursor-pointer transition-all duration-300  hover:bg-teal-600  text-white`}>
        <Link className="py-3 flex items-center" href="/dashboard/Roles">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
            stroke="currentColor" className="w-4 mr-3">
            <path strokeLinecap="round" strokeLinejoin="round"
              d="M10.343 3.94c.09-.542.56-.94 1.11-.94h1.093c.55 0 1.02.398 1.11.94l.149.894c.07.424.384.764.78.93.398.164.855.142 1.205-.108l.737-.527a1.125 1.125 0 0 1 1.45.12l.773.774c.39.389.44 1.002.12 1.45l-.527.737c-.25.35-.272.806-.107 1.204.165.397.505.71.93.78l.893.15c.543.09.94.559.94 1.109v1.094c0 .55-.397 1.02-.94 1.11l-.894.149c-.424.07-.764.383-.929.78-.165.398-.143.854.107 1.204l.527.738c.32.447.269 1.06-.12 1.45l-.774.773a1.125 1.125 0 0 1-1.449.12l-.738-.527c-.35-.25-.806-.272-1.203-.107-.398.165-.71.505-.781.929l-.149.894c-.09.542-.56.94-1.11.94h-1.094c-.55 0-1.019-.398-1.11-.94l-.148-.894c-.071-.424-.384-.764-.781-.93-.398-.164-.854-.142-1.204.108l-.738.527c-.447.32-1.06.269-1.45-.12l-.773-.774a1.125 1.125 0 0 1-.12-1.45l.527-.737c.25-.35.272-.806.108-1.204-.165-.397-.506-.71-.93-.78l-.894-.15c-.542-.09-.94-.56-.94-1.109v-1.094c0-.55.398-1.02.94-1.11l.894-.149c.424-.07.765-.383.93-.78.165-.398.143-.854-.108-1.204l-.526-.738a1.125 1.125 0 0 1 .12-1.45l.773-.773a1.125 1.125 0 0 1 1.45-.12l.737.527c.35.25.807.272 1.204.107.397-.165.71-.505.78-.929l.15-.894Z" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
          </svg>
          Roles
        </Link>
      </li>
      <li className="px-4 cursor-pointer transition-all duration-300 hover:bg-teal-600 ">
        <a className="py-3 flex items-center" href="/">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
            stroke="currentColor" className="w-4 mr-3">
            <path strokeLinecap="round" strokeLinejoin="round"
              d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z" />
          </svg>

          Permissions
        </a>
      </li>

    
    </ul>
  </div>
</aside>
    </div>
  )
}

export default Sidebar