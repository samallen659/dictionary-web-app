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
        <div className="pt-8">
            <div className="flex justify-between items-center gap-5">
                <h3 className="text-black dark:text-white text-lg lg:text-2xl">{partOfSpeech}</h3>
                <div className="h-[1px] w-full border-t-gray-200 dark:border-t-gray-400 border-t-2"></div>
            </div>
            <div>
                <h3 className="text-gray-300 pt-8 lg:pt-11 lg:text-xl">Meaning</h3>
                <article>
                    <ul className="list-disc pl-4">
                        {definitions.map((definition: definition, i: number) => (
                            <li className="text-purple pt-4" key={i}><span className="text-black dark:text-white lg:text-lg">{definition.definition}</span>
                                {definition.example && (
                                    <p className="pt-4 text-gray-300 lg:text-lg">{`"${definition.example}"`}</p>
                                )}
                            </li>
                        ))}
                    </ul>
                    <div className="pt-6">
                        {synonyms.length > 0 && (
                            <><h4 className="inline pr-4 text-gray-300 lg:text-xl">Synonyms</h4><p className="inline text-purple font-bold lg:text-xl">{synonyms[0]}</p></>
                        )}
                    </div>
                    <div className="pt-6">
                        {antonyms.length > 0 && (
                            <><h4 className="inline pr-4 text-gray-300 lg:text-xl">Antonyms</h4><p className="inline text-purple font-bold lg:text-xl">{antonyms[0]}</p></>
                        )}
                    </div>
                </article>
            </div>
        </div>
    )
}

export default Meaning;
