import { useState } from 'react'
import Star from './assets/icon-star.svg'
import Thanks from './assets/illustration-thank-you.svg'

function Intert() {
    const [selected, setSelected] = useState('')

    const handleSelect = (value) => {
        setSelected(value)
        console.log(value)
    }

    const handleClick = () => {
        document.getElementById('one').classList.add('hidden')
        document.getElementById('tow').classList.remove('hidden')
    }

    return (

            <div>
                <div id='one' className="b rounded-3xl p-6 grid gap-3">
                <div className="w-10 h-10 rounded-full bg-[var(--light)] flex justify-center items-center">
                    <img src={Star} alt="Star" />
                </div>
                <p className="text-white font-semibold text-2xl mt-2">How did we do?</p>
                <p className="text-[var(--font)] text-xs font-medium leading-normal">
                    Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering!
                </p>
                <div className="flex gap-4 text-[var(--font)] w-full font-bold justify-center items-center mt-4">
                    {[1, 2, 3, 4, 5].map((value) => (
                        <div
                            key={value}
                            className={`w-10 h-10 cursor-pointer rounded-full flex items-center justify-center
                                ${selected === value ? 'bg-white text-black' : 'bg-[var(--light)] text-[var(--font)]'}
                                hover:bg-[var(--orange)]`}
                            onClick={() => handleSelect(value)}
                        >
                            {value}
                        </div>
                    ))}
                </div>
                <button onClick={handleClick} className="bg-[var(--orange)] rounded-full font-semibold text-sm py-2 tracking-widest my-3">
                    SUBMIT
                </button>
            </div>
            <div id='tow' className='b rounded-3xl hidden p-8 flex items-center justify-center flex-col gap-3 text-center'>
                <img src={Thanks} alt="" />
                <div className='bg-[var(--light)] text-xs text-[var(--orange)] rounded-full px-4 py-1 '>You selected {selected} of 5</div>
                <p className="text-white font-semibold text-2xl mt-2"> Thank you</p>
                <p className="text-[var(--font)] text-xs font-medium leading-normal">We appreciate you taking the time to give a rating.
                     if you ever need more support, dont hesitate to get it touch!</p>
            </div>

        </div>
    )
}

export default Intert
