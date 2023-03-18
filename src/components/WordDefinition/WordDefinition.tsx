import Meaning from "../Meaning/Meaning";
import playIcon from "../../assets/images/icon-play.svg";
import { useState, useEffect } from 'react';

function WordDefinition({ word, phonetic, phonetics, sourceUrls, license, meanings }: WordDefinition) {
    const [mp3URI, setMp3URI] = useState("");

    const getMP3URI = (phonetics: Array<any>): string | boolean => {
        if (phonetics.length <= 0) return false;

        let tempMp3URI: string | boolean = false;
        for (let i = 0; i < phonetics.length; i++) {
            if (phonetics[i].audio.length <= 0) continue;

            tempMp3URI = phonetics[i].audio;
            break;
        }
        return tempMp3URI;
    }

    useEffect(() => {
        if (!phonetics) return;

        const tempMp3URI = getMP3URI(phonetics);
        if (typeof tempMp3URI === "string") setMp3URI(tempMp3URI);
    })



    const playWordSound = (): void => {
        if (mp3URI === "") return;

        const mp3Audio = new Audio(mp3URI);
        mp3Audio.play();
    }

    return (

        <div className="pt-6 lg:pt-12">
            <div className='flex justify-between'>
                <div className='flex flex-col'>
                    <h2 className="font-bold text-4xl lg:text-[64px] text-black dark:text-white">{word}</h2>
                    <p className="pt-2 lg:pt-4 text-purple text-lg lg:text-2xl">{phonetic}</p>
                </div>
                <button onClick={() => playWordSound()}>
                    <img src={playIcon} />
                </button>
            </div>
            {meanings.map((meaning: Meaning, i: number) => (
                <Meaning key={i} {...meaning} />
            ))}
            <div>
                <div className="w-full border-t-gray-200 dark:border-t-gray-400 border-t-2"></div>
                <p className="text-sm text-gray-300 pt-6 pb-4">Source<span className="pl-5 text-black dark:text-white">{sourceUrls}</span></p>
            </div>
        </div>
    )
}

export default WordDefinition;
