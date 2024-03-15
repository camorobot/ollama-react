import React, { useState } from 'react';

function AiChat() {
  const [prompt, setPrompt] = useState('');
  const [responses, setResponses] = useState([]);

  const handleInputChange = (e) => {
    setPrompt(e.target.value);
  };

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
        <form onSubmit={handleSubmit}>
          <input type="text" value={prompt} onChange={handleInputChange} />
          <button type="submit">Ask</button>
        </form>
        <div>
          {/* Voeg een spatie toe tussen elke response */}
          <p>{responses.join(' ')}</p>
        </div>
      </div>
  );
}

export default AiChat;
