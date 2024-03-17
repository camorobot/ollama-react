import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { SearchIcon } from "lucide-react";


function Navbar(){
  return (
      <nav className="white">
        <div className=" max-w-screen mx-6 mt-2 flex space-x-3 flex-wrap items-center justify-between">
          <div className="flex justify-center ">
            <a href="/">
              <img src="/assets/img/ollama.png" className="h-12" alt="Flowbite Logo"/>
            </a>
            <ul className="flex mt-4 ml-5">
              <li className="mx-5">
                <a href="/blog">Blog</a>
              </li>
              <li className="mx-5">
                <a href="/discord">Discord</a>
              </li>
              <li className="mx-5">
                <a href="/github">GitHub</a>
              </li>
            </ul>
          </div>
          <div>
            <ul className="flex justify-center">
              <li className="mx-5 flex">
                <div className="flex w-full max-w-sm items-center space-x-2 border border-gray-300 rounded-lg px-3.5">
                  <SearchIcon className="h-4 w-4 text-gray-500"/>
                  <Input className="placeholder-gray-300 border-0 outline-none" placeholder="Search models..."/>
                </div>
              </li>
              <li className="mx-5 mt-2">
                <a href="/models">Models</a>
              </li>
              <li className="mx-5 mt-2">
                <a href="/ai">Your AI</a>
              </li>
              <li className="mx-5">
                <Button>Download</Button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
  )
}

export default Navbar