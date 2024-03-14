import { Button } from "@/components/ui/button"
import {ArrowDownTrayIcon} from "@heroicons/react/24/solid";

function Hero(){
  return(
      <main className="mx-auto flex flex-col items-center px-10 py-20 md:p-32 text-gray-800">
        <div className="">
          <img src="/assets/img/ollama.png" alt="hero-logo" width="70" height="70" className="mb-6"/>
        </div>
        <div className="flex flex-col space-y-4 text-center">
          <h2 className="mx-auto my-2 max-w-md text-2xl font-medium tracking-tight md:text-3xl">Get up and running with
            large language models, locally.
          </h2>
          <h3 className="text-gray-400 mx-auto max-w-sm text-neutral-500 md:text-lg">
            Run Llama 2, Code Llama, and other models. Customize and create your own.
          </h3>
        </div>
        <div className="mt-12 flex flex-col items-center">
          <Button className="w-52 h-12 text-1xl">
            <ArrowDownTrayIcon className="mr-2 h-4 w-4" />
            <a href="/download" className="">Download</a>
          </Button>
          <p className="text-xs mt-6 text-gray-400 max-w-40 text-center">Available for macOS, Linux, and Windows (preview)</p>
        </div>
      </main>
  )
}

export default Hero