import { useState } from 'react';
import {Input} from "@/components/ui/input.tsx";
import modelsData from "../../public/assets/db.json"
import {TagIcon} from "@heroicons/react/24/outline";
import {Button} from "@/components/ui/button.tsx";

function AiChat() {
  const model = "llama2"
  const modelData = modelsData.find(m => m.title.toLowerCase() === model?.toLowerCase())
  const [prompt, setPrompt] = useState('');
  const [responses, setResponses] = useState([]);

  const handleInputChange = (e) => {
    setPrompt(e.target.value);
  };

  if(!modelData){
    return(
        <p>Model not found</p>
    )
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    setResponses([]); // Reset responses
    try {
      const responseStream = await fetch('http://localhost:11434/api/generate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ model: "llama2", language: "nl", prompt })
      });
      const reader = responseStream.body.getReader();
      reader.read().then(function processText({ done, value }) {
        if (done) {
          console.log("Stream completed.");
          return;
        }
        const responseText = new TextDecoder("utf-8").decode(value);
        // Parse individual JSON objects
        responseText.trim().split("\n").forEach(jsonLine => {
          try {
            const responseObj = JSON.parse(jsonLine);
            setResponses(resps => [...resps, responseObj.response]); // Sla alleen de response tekst op
          } catch (error) {
            console.error("Error parsing JSON:", error);
          }
        });
        // Read the next response
        reader.read().then(processText);
      });
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
      <div>
        <section className="flex w-full flex-col space-y-2 md:flex-row md:items-center md:justify-between md:space-y-0">
          <div className="flex items-center space-x-4">
            <div className="my-6">
              <div className="rounded-md border px-4 py-2 font-mono text-sm shadow-sm">
                @Llama2
              </div>
            </div>

            <div className="flex text-gray-400">
              <TagIcon width="15" className="mr-1"/>
              <p>{modelData.tags} Tags</p>
            </div>
          </div>
          <div className="rounded-md border px-4 py-2 font-mono text-sm shadow-sm">
            @Llama2/latest
          </div>
        </section>
        <form onSubmit={handleSubmit} className="flex space-x-4">
          <Input placeholder="Submit your question..." value={prompt} onChange={handleInputChange}/>
          {/*<input type="text" value={prompt} onChange={handleInputChange} />*/}
          <Button type="submit">Submit</Button>
          {/*<button type="submit">Ask</button>*/}
        </form>
        <div className="p-4 mt-6 border rounded-md">
          {/* Voeg een spatie toe tussen elke response */}
          <p>{responses.join(' ')}</p>
        </div>
      </div>
  );
}

export default AiChat;
