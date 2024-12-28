import axios from 'axios';
import React, { useState } from 'react';
import Spinner from './components/Spinner';
function App() {
  const [question, setQusetion] = useState('')
  const [response, setResponse] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  //handleSubmit 
  const handleSubmit = async (e) => {
    setIsLoading(true)
    e.preventDefault()
    await axios.post("https://gemini-app-pvdz.onrender.com/question", { question: question }).then((response) => {
      setResponse(response.data.anawer)
      setIsLoading(false)
    }).catch((err) => {
      setIsLoading(true)
      console.log(err)
    })
  }

  //handleSpeakFunction
  const handleSpeakFunction = () => {
    if (!response) {
      alert("Please enter some text to speak");
      return;
    }
    // Create a new instance of SpeechSynthesisUtterance
    const utterance = new SpeechSynthesisUtterance(response);

    // Set voice options (optional)
    utterance.lang = "en-IN"; // Choose language
    utterance.rate = 0.9;       // Speed (0.1 to 10, default is 1)
    utterance.pitch = 2;      // Pitch (0 to 2, default is 1)

    // Speak the text
    window.speechSynthesis.speak(utterance);
  }
  return (
    <>
      <div className="flex flex-col md:flex-row justify-center items-center w-full min-h-screen bg-slate-800">
        {/* Left Section */}
        <div className="flex flex-col gap-8 w-full md:w-1/2 h-auto items-center justify-center p-4">
          <div id='animation' className="w-24 h-24 md:w-48 md:h-48 rounded-full shadow-lg shadow-cyan-500/50 overflow-hidden">
            <img
              src='/user1.avif'
              className="w-full h-full object-cover"
              alt="profile pic"
            />
          </div>
          <p className="text-white">Question</p>
          <textarea
            onChange={(e) => setQusetion(e.target.value)}
            placeholder="Write your question here"
            className="w-full sm:w-4/5 h-32 md:h-40 rounded-md p-2 md:p-3 text-sm md:text-1xl font-semibold border-none outline-none shadow-lg shadow-cyan-500/50 bg-transparent text-white"
          ></textarea>
          <button
            onClick={handleSubmit}
            className="bg-cyan-500 shadow-lg shadow-cyan-500/50 w-full sm:w-4/5 mt-2 md:mt-6 p-2 md:p-3 text-white text-sm md:text-[20px] rounded-lg flex justify-center items-center"
          >
            {isLoading ? (
              <Spinner />
            ) : (
              "Generate"
            )}
          </button>
        </div>

        {/* Right Section */}
        <div className="flex flex-col gap-8 w-full md:w-1/2 h-auto items-center justify-center p-4">
          <div id='animation' className="w-24 h-24 md:w-48 md:h-48 rounded-full shadow-lg shadow-cyan-500/50 overflow-hidden">
            <img
              src='/ai.avif'
              className="w-full h-full object-cover"
              alt="profile pic"
            />
          </div>
          <p className="text-white">Response</p>
          <textarea
            value={response}
            placeholder="Your response will appear here"
            className="w-full sm:w-4/5 h-32 md:h-40 rounded-md p-2 md:p-3 text-sm md:text-1xl font-semibold border-none outline-none shadow-lg shadow-cyan-500/50 bg-transparent text-white"
          ></textarea>
          <button
            onClick={handleSpeakFunction}
            className="bg-cyan-500 shadow-lg shadow-cyan-500/50 w-full sm:w-4/5 mt-2 md:mt-6 p-2 md:p-3 text-white text-sm md:text-[20px] rounded-lg"
          >
            Speak
          </button>
        </div>
      </div>

    </>
  );
}

export default App;

