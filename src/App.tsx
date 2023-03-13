import Navbar from './components/Nav/Nav'
import SearchBar from './components/SearchBar/SearchBar';
import Meaning from './components/Meaning/Meaning';
import { useState } from 'react';

type WordDefinition = {
  word: string;
  phonetic: string;
  phonetics?: Array<object>;
  sourceUrls: Array<string>;
  license: object
}

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [definitions, setDefinitions] = useState<Array<WordDefinition> | string>("");
  const dictionaryAPIURI = 'https://api.dictionaryapi.dev/api/v2/entries/en/';

  const fetchWordDefinitions = async (word: string) => {
    const response = await fetch(`${dictionaryAPIURI}${word}`);
    if (!response.ok) {
      setDefinitions("");
      throw new Error(`HTTP Error! status: ${response.status}`)
    }
    const json = await response.json();
    setDefinitions(json);
  }


  return (
    <div className="container pt-6 lg:pt-14">
      <Navbar darkMode={darkMode} />
      <div className='pt-8'>
        <SearchBar />
      </div>
      <div>
        {typeof definitions !== 'string' && (
          definitions.map((definition: WordDefinition, i: number) => (
            <div key={i}>
              <div className='flex justify-between'>
                <h2>{definition.word}</h2>
              </div>
            </div>
          ))
        )}
      </div >
    </div >
  )
}

export default App;
