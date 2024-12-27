// import React from 'react'


// // import './App.css'

// function App() {

//   return (
//     <>
//       <div className='flex justify-center items-center w-full h-[100vh] bg-slate-800'>
//         <div className=' flex-col gap-8 w-[50%] h-full items-center justify-center flex'>
//           <div className='w-48 h-48 rounded-full shadow-lg shadow-cyan-500/50 overflow-hidden'>
//             <img src='../src/assets/user1.avif' className='w-48 h-48' alt="profile pic" />
//           </div>
//           <textarea className='w-[80%] h-40 rounded-md p-3 text-1xl font-semibold border-none  outline-none shadow-lg shadow-cyan-500/50 bg-transparent text-white' name="" id=""></textarea>
//           <button class="bg-cyan-500 shadow-lg shadow-cyan-500/50 w-[80%] mt-6 p-3 text-white text-[20px] rounded-lg">Generate</button>
//         </div>
//         <div className=' flex-col gap-8 w-[50%] h-full items-center justify-center flex'>
//           <div className='w-48 h-48 rounded-full shadow-lg shadow-cyan-500/50 overflow-hidden'>
//             <img src='../src/assets/ai.avif' className='w-48 h-48' alt="profile pic" />
//           </div>
//           <textarea className='w-[80%] h-40 rounded-md p-3 text-1xl font-semibold border-none  outline-none shadow-lg shadow-cyan-500/50 bg-transparent text-white' name="" id=""></textarea>
//           <button class="bg-cyan-500 shadow-lg shadow-cyan-500/50 w-[80%] mt-6 p-3 text-white text-[20px] rounded-lg">Speak</button>
//         </div>      </div>
//     </>
//   )
// }

// export default App


import axios from 'axios';
import React, { useState } from 'react';

function App() {
  const [question, setQusetion] = useState('')
  const [response, setResponse] = useState("")

  //handleSubmit 
  const handleSubmit = async (e) => {
    e.preventDefault()
    await axios.post("https://gemini-app-pvdz.onrender.com/question", { question: question }).then((response) => setResponse(response.data.anawer)).catch((err) => {
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
    utterance.lang = "en-US"; // Choose language
    utterance.rate = 1;       // Speed (0.1 to 10, default is 1)
    utterance.pitch = 1;      // Pitch (0 to 2, default is 1)

    // Speak the text
    window.speechSynthesis.speak(utterance);
  }
  return (
    <>
      <div className="flex flex-col  md:flex-row justify-center items-center w-full h-[100vh] bg-slate-800">
        {/* Left Section */}
        <div className="flex flex-col gap-8 w-full md:w-[50%] h-auto md:h-full items-center justify-center p-4">
          <div id='animation' className="w-32 h-32 md:w-48 md:h-48 rounded-full shadow-lg shadow-cyan-500/50 overflow-hidden">
            <img
              src="../src/assets/user1.avif"
              className="w-full h-full object-cover"
              alt="profile pic"
            />
          </div>
          <p className='text-white'>Question</p>
          <textarea
            onChange={(e) => setQusetion(e.target.value)}
            placeholder='write you questioin here'
            className="w-full md:w-[80%] h-32 md:h-40 rounded-md p-3 text-sm md:text-1xl font-semibold border-none outline-none shadow-lg shadow-cyan-500/50 bg-transparent text-white"
          ></textarea>
          <button onClick={handleSubmit} className="bg-cyan-500 shadow-lg shadow-cyan-500/50 w-full md:w-[80%] mt-6 p-2 md:p-3 text-white text-sm md:text-[20px] rounded-lg">
            Generate
          </button>
        </div>

        {/* Right Section */}
        <div className="flex flex-col gap-8 w-full md:w-[50%] h-auto md:h-full items-center justify-center p-4">
          <div id='animation' className="w-32 h-32 md:w-48 md:h-48 rounded-full shadow-lg shadow-cyan-500/50 overflow-hidden">
            <img
              src="../src/assets/ai.avif"
              className="w-full h-full object-cover"
              alt="profile pic"

            />
          </div>
          <p className='text-white'>Response</p>
          <textarea
            value={response}
            placeholder='here your response will be come'
            className="w-full md:w-[80%] h-32 md:h-40 rounded-md p-3 text-sm md:text-1xl font-semibold border-none outline-none shadow-lg shadow-cyan-500/50 bg-transparent text-white"
            name=""
          ></textarea>
          <button onClick={handleSpeakFunction} className="bg-cyan-500 shadow-lg shadow-cyan-500/50 w-full md:w-[80%] mt-6 p-2 md:p-3 text-white text-sm md:text-[20px] rounded-lg">
            Speak
          </button>
        </div>
      </div>
    </>
  );
}

export default App;

