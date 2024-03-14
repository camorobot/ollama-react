import {Input} from "@/components/ui/input.tsx";
import {DropdownMenu, DropdownMenuCheckboxItem, DropdownMenuContent, DropdownMenuTrigger} from "@/components/ui/dropdown-menu"
import {Button} from "@/components/ui/button.tsx";
import {useState} from "react";
import {FunnelIcon} from "@heroicons/react/24/outline";
import ModelRepo from "@/components/ModelRepo.tsx";

function ModelsRepoView(){

  const [activeFilter, setActiveFilter] = useState('')
  const [searchTerm, setSearchTerm] = useState('')

  function handleFiltertChange(filterName: string){
    setActiveFilter(filterName)
  }

  function handleSearchTermChange(searchTerm: string){
    setSearchTerm(searchTerm)
  }

  return (
    <main className="mx-auto flex flex-col max-w-[46rem] py-28">
      <div className="flex items-center">
        <img src="/assets/img/ollama_profile.png" alt="ollama-profile-pic" className="border rounded-full" width="50" height="50" />
        <h3 className="text-3xl mx-3 text-center">Models</h3>
      </div>
      <div className="mt-10 flex flex-col space-y-2 sm:flex-row sm:items-center sm:justify-between sm:space-x-3 sm:space-y-0">
        <Input placeholder="Filter by name..." value={searchTerm} onChange={(e) => handleSearchTermChange(e.target.value.toString())} />
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="flex items-center justify-center space-x-2">
              <span>{activeFilter ? activeFilter : "Filter..."}</span>
              <FunnelIcon className="w-5 h-5" />
            </Button>
          </DropdownMenuTrigger>

          <DropdownMenuContent className="w-56">
            <DropdownMenuCheckboxItem onClick={() => handleFiltertChange("Featured")}>Featured</DropdownMenuCheckboxItem>
            <DropdownMenuCheckboxItem onClick={() => handleFiltertChange("Most Popular")}>Most Popular</DropdownMenuCheckboxItem>
            <DropdownMenuCheckboxItem onClick={() => handleFiltertChange("Newest")}>Newest</DropdownMenuCheckboxItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      <div>
        <ModelRepo activeFilter={activeFilter} searchTerm={searchTerm} />
      </div>
    </main>
  )
}

export default ModelsRepoView