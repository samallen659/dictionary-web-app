import Navbar from './components/Nav/Nav'
import SearchBar from './components/SearchBar/SearchBar';
import WordDefinition from './components/WordDefinition/WordDefinition';
import { useEffect, useState } from 'react';

// type WordDefinition = {
//   word: string;
//   phonetic: string;
//   phonetics?: Array<object>;
//   sourceUrls: Array<string>;
//   license: object;
//   meanings: Array<object>
// }

function App() {
    const [definitions, setDefinitions] = useState<Array<WordDefinition> | string>("");
    const [selectedFont, setSelectedFont] = useState(0);
    const dictionaryAPIURI = 'https://api.dictionaryapi.dev/api/v2/entries/en/';
    const fontOptions = ['sans','serif','mono'];

    const fetchWordDefinitions = async (word: string) => {
        const response = await fetch(`${dictionaryAPIURI}${word}`);
        if (!response.ok) {
            setDefinitions("");
            throw new Error(`HTTP Error! status: ${response.status}`)
        }
        const json = await response.json();
        setDefinitions(json);
    }

    const handleFontChange = (selected: number): void => {
        if(selected < 0 || selected > 2) return;

        setSelectedFont(selected);
    }

    return (
        <div className={`container pt-6 lg:pt-14 font-${fontOptions[selectedFont]}`}>
            <Navbar handleFontChange={handleFontChange} />
            <div className='pt-8'>
                <SearchBar search={fetchWordDefinitions} />
            </div>
            <section className='h-screen'>
                {typeof definitions !== 'string' && (
                    definitions.map((definition: WordDefinition, i: number) => (
                   <WordDefinition key={i} {...definition} /> )))}
            </section>
        </div >
    )
}

export default App;
