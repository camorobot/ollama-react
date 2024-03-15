import modelsData from '../../public/assets/db.json'
import {ArrowDownTrayIcon} from "@heroicons/react/24/solid";
import {ClockIcon, TagIcon} from "@heroicons/react/24/outline";
import {formatNumber, timeConverter} from "@/lib/utils.ts";

interface ModelRepoProps {
  activeFilter: string;
  searchTerm: string;
}

function ModelRepo({activeFilter, searchTerm}: ModelRepoProps){

  const filteredModels = modelsData.filter(model =>
      model.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if(activeFilter === "Most Popular"){
    filteredModels.sort((a, b) => b.downloads - a.downloads);
  } else if (activeFilter === "Newest"){
    filteredModels.sort((a, b) => new Date(b.lastUpdated).getTime() - new Date(a.lastUpdated).getTime());
  }

  return (
      <section>
        {filteredModels.map((model, index) => (
            <ul key={index} className="grid grid-cols-1 gap-y-3 ">
              <li className="flex border-b py-6">
                <a href={`/model/${model.title.toLowerCase()}`} className="w-full">
                  <h2 className="text-xl font-semibold hover:underline mb-4">{model.title}</h2>
                  <p className="mb-4 max-w-md">{model.description}</p>
                  <p className="flex space-x-5 text-sm text-gray-400">
                <span className="flex items-center">
                  <ArrowDownTrayIcon width="15" className="mr-1"/>
                  {formatNumber(model.downloads)} pulls
                </span>
                    <span className="flex items-center">
                  <TagIcon width="15" className="mr-1"/>
                      {model.tags} tags
                </span>
                    <span className="flex items-center">
                  <ClockIcon width="15" className="mr-1"/>
                      {timeConverter(model.lastUpdated)} day(s) ago
                </span>
                  </p>
                </a>
              </li>
            </ul>
        ))}
      </section>
  )
}

export default ModelRepo