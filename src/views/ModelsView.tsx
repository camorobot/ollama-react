import {useParams} from "react-router-dom";
import modelsData from "../../public/assets/db.json"
import {ArrowDownTrayIcon} from "@heroicons/react/24/solid";
import {formatNumber, timeConverter} from "@/lib/utils.ts";
import {ChevronDownIcon, ClockIcon, TagIcon} from "@heroicons/react/24/outline";
import {DropdownMenu, DropdownMenuCheckboxItem, DropdownMenuContent,} from "@/components/ui/dropdown-menu.tsx";
import {Button} from "@/components/ui/button.tsx";
import {DropdownMenuTrigger} from "@radix-ui/react-dropdown-menu";
import {useState} from "react";

function ModelsView(){

  const { model } = useParams()
  const modelData = modelsData.find(m => m.title.toLowerCase() === model?.toLowerCase())
  const [ selectedVersion, setSelectedVersion ] = useState('')

  function handleVersionChange(version: string){
    setSelectedVersion(version)
  }

  if (!modelData) {
    return <p>Model not found.</p>; // Vroege return als modelData undefined is
  }

  return(
      <main className="flex flex-col mx-auto max-w-[46rem] py-28">
        <section className="flex-col">
          <div className="flex justify-between items-baseline mb-3">
            <h3 className="text-3xl text-center">{modelData.title}</h3>
          </div>
          <h2 className="flex max-w-96 font-light">{modelData.description}</h2>
          <p className="text-gray-400 text-sm mt-3 flex space-x-5">
            <span className="flex items-center">
              <ArrowDownTrayIcon width="15" className="mr-1"/>
              {formatNumber(modelData.downloads)} pulls
            </span>
            <span className="flex items-center">
              <ClockIcon width="15" className="mr-1"/>
              {timeConverter(modelData.lastUpdated)} day(s) ago
            </span>
          </p>
        </section>
        <section className="flex w-full flex-col space-y-2 md:flex-row md:items-center md:justify-between md:space-y-0">
          <div className="flex items-center space-x-4">
            <div className="my-6">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" className="flex items-center justify-between space-x-2 min-w-52 left">
                    <span>{selectedVersion || "Select version"}</span>
                    <ChevronDownIcon className="w-5 h-5"/>
                  </Button>
                </DropdownMenuTrigger>

                <DropdownMenuContent className="w-56">
                  {modelData?.versions.map((version, index) => (
                      <DropdownMenuCheckboxItem key={index}
                                                onClick={() => handleVersionChange(version)}>{version}</DropdownMenuCheckboxItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
            </div>

            <div className="flex text-gray-400">
              <TagIcon width="15" className="mr-1"/>
              <p>{modelData.tags} Tags</p>
            </div>
          </div>
          <div className="rounded-md border px-4 py-2 font-mono text-sm shadow-sm">
            @{modelData.title.toLowerCase()}/latest
          </div>
        </section>
      </main>
  )
}

export default ModelsView