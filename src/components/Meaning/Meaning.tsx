type TMeaning = {
  partOfSpeech: string;
  definitions: Array<object>;
  synonyms: Array<string>;
  antonyms: Array<string>
}

function Meaning({ partOfSpeech, definitions, synonyms, antonyms }: TMeaning) {
  return ()
}

export default Meaning;
