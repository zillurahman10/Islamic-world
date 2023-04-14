import React, { useEffect, useState } from 'react';
import Surah from './Surah';

const Quran = () => {
    const [quranText, setQuranText] = useState([])

    useEffect(() => {
        fetch('https://cdn.jsdelivr.net/npm/quran-json@3.1.2/dist/quran_bn.json')
            .then(res => res.json())
            .then(data => setQuranText(data))
    }, [])
    return (
        <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1  gap-5 mt-12 px-12 items-center'>
            {
                quranText.map(quran => <Surah surah={quran}></Surah>)
            }
        </div>
    );
};

export default Quran;