import { Link } from 'react-router-dom';

const surah = ({ surah }) => {

    const ayat = surah.verses
    console.log(ayat);

    return (
        <>
            <div className='text-center p-5 bg-neutral rounded-xl flex justify-center'>
                <div className="card w-96 bg-base-100 shadow-xl">
                    <div className="card-body">
                        <p className=" font-bold text-2xl text-center">{surah?.name}</p>
                        <p>English pronunciation: {surah?.transliteration}</p>
                        <p>Type: {surah?.type}</p>
                        <div className="card-actions justify-center">
                            <label for="my-modal-6" class="btn btn-primary">Read</label>
                            {/* <Link to="/fullsurah"><button className="btn btn-primary">Read</button></Link> */}
                        </div>
                    </div>
                </div>
            </div>


            {
                ayat.map(comSurah => <>
                    <input type="checkbox" id="my-modal-6" class="modal-toggle" />
                    <div class="modal modal-bottom sm:modal-middle">
                        <div class="modal-box">
                            <h3 class="font-bold text-lg">{comSurah?.id}</h3>

                            <p class="py-4">{comSurah?.text}</p>
                            <div class="modal-action">
                                <label for="my-modal-6" class="btn">Yay!</label>
                            </div>
                        </div>
                    </div>
                </>
                )
            }







        </>

    );
};

export default surah;