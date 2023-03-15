// type AppProps = {
//   partOfSpeech: string;
//   definitions: Array<object>;
//   synonyms: Array<string>;
//   antonyms: Array<string>
// }

// type definition = {
//      definition: string;
//      synonyms: Array<string>;
//      antonyms: Array<string>;
//      example?: string
// }

function Meaning({ partOfSpeech, definitions, synonyms, antonyms }: Meaning) {
    return (
        <div>
            <div className="flex justify-between items-center gap-5">
                <h3>{partOfSpeech}</h3>
                <div className="h-[1px] w-full border-t-black border border-opacity-10"></div>
            </div>
            <div>
                <h3>Meaning</h3>
                <article>
                    <ul className="list-disc">
                        {definitions.map((definition: definition, i: number) => (
                            <li key={i}>{definition.definition}</li>
                        ))}
                    </ul>
                    <div>
                        {synonyms.length > 0 && (
                            <><h4 className="inline pr-4">Synonyms</h4><p className="inline">{synonyms[0]}</p></>
                        )}
                    </div>
                    <div>
                        {antonyms.length > 0 && (
                            <><h4 className="inline pr-4">Antonyms</h4><p className="inline">{antonyms[0]}</p></>
                        )}
                    </div>
                </article>
            </div>
        </div>
    )
}

export default Meaning;
