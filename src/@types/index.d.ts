type WordDefinition = {
  word: string;
  phonetic: string;
  phonetics?: Array<object>;
  sourceUrls: Array<string>;
  license: object;
  meanings: Array<Meaning>
}

type Meaning = {
  partOfSpeech: string;
  definitions: Array<definition>;
  synonyms: Array<string>;
  antonyms: Array<string>
}

type definition = {
    definition: string;
    synonyms: Array<string>;
    antonyms: Array<string>;
    example?: string
}
