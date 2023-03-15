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
    }, [])



    const playWordSound = (): void => {
        if (mp3URI === "") return;

        const mp3Audio = new Audio(mp3URI);
        mp3Audio.play();
    }

    return (

        <div>
            <div className='flex justify-between'>
                <div className='flex flex-col'>
                    <h2>{word}</h2>
                    <p>{phonetic}</p>
                </div>
                <button onClick={() => playWordSound()}>
                    <img src={playIcon} />
                </button>
            </div>
            {meanings.map((meaning: Meaning, i: number) => (
                <Meaning key={i} {...meaning} />
            ))}
        </div>
    )
}

export default WordDefinition;
