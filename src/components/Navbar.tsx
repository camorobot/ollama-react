import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import {Link} from "lucide-react";


function Navbar(){


  return (
      <nav className="white">
        <div className="max-w-screen mx-6 mt-2 flex space-x-3 flex-wrap items-center justify-between">
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
              <li className="mx-5">
                <Input placeholder="Search Models"/>
              </li>
              <li className="mx-5 mt-2">
                <a href="/blog">Models</a>
              </li>
              <li className="mx-5 mt-2">
                <a href="/discord">Sign in</a>
              </li>
              <li className="mx-5">
                <Button variant="outline">Download</Button>
              </li>
            </ul>
          </div>
        </div>
      </nav>

  )

}

export default Navbar