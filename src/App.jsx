import { useEffect,useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {getNotes} from "./lib/get_note"
import Notes from "./components/template"


function App() {
  const [notes, setNotes] = useState([]);
  useEffect(() => {
    async function fetchdata() {
      try {
        const response=await getNotes("https://670023444da5bd2375534f8b.mockapi.io/api/v1/note");
        setNotes(response);
      } catch (error) {
        console.log("error");
        
      }
    }
    fetchdata();
  }, [])
  
  return(
  <>
  <section>
    {notes.map((notes)=>(<Notes notes={notes} key={notes.id}/>))}
  </section>
  </>

  );

  
}

export default App
