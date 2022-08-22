import React from 'react'
import fozzyLogic from '../fozzy/fozzyLogix'
import oneExamLogic from '../fozzy/oneExamLogic'
import twoExamLogic from '../fozzy/twoExamLogic'


const Result = ({ form, setSlidesShow, resultSheet }) => {
    let useFozzy = { result: 'Error in Input' }

    if (resultSheet === 3) {
        useFozzy = fozzyLogic(form)

    } else if (resultSheet === 2) {
        useFozzy = twoExamLogic(form)
    } else if (resultSheet === 1) {
        useFozzy = oneExamLogic(form)
    } else {
        useFozzy = { result: 'Error in Input' }

    }



    return (
        <div className='mt-5 md:mt-0 flex-col mb-3 py-2 '>
            <div className='px-2'></div>
            <h3 className="text-4xl font-medium leading-6 text-gray-900 text-center mb-2">Your Grade</h3>
            <p className="mt-1 text-lg text-gray-600 text-center">Hello {form.firstname} {form.lastname}</p>
            <p className="mt-1 text-md text-gray-600 text-center">ID: {form.registration.toUpperCase()}</p>
            {useFozzy.average === false  ? <p className="mt-1 text-md text-red-600 text-center">PLEASE INPUT THE RIGHT RANGE OF NUMBERS.</p>
                : <p className="mt-1 text-md text-gray-600 text-center">Your Grade Calculated using Fozzy Logic:</p>}

            {useFozzy.result === 'F' &&(
                 <p className="mt-1 text-3xl  text-red-500 text-center">{useFozzy.result}</p>
            )}
             {useFozzy.result === 'D' &&(
                 <p className="mt-1 text-3xl  text-orange-500 text-center">{useFozzy.result}</p>
            )}
             {useFozzy.result === 'E' &&(
                 <p className="mt-1 text-3xl  text-pink-500 text-center">{useFozzy.result}</p>
            )}
             {useFozzy.result === 'C' &&(
                 <p className="mt-1 text-3xl  text-gray-800 text-center">{useFozzy.result}</p>
            )}
             {useFozzy.result === 'B' &&(
                 <p className="mt-1 text-3xl  text-blue-500 text-center">{useFozzy.result}</p>
            )}
             {useFozzy.result === 'A' &&(
                 <p className="mt-1 text-3xl  text-cyan-500 text-center">{useFozzy.result}</p>
            )}
           
           <p className="mt-1 text-sm text-gray-600 italic text-center">A score of {useFozzy.average}</p>
            <div className="px-4 py-3 sm:px-6 flex justify-center align-middle">
            <button
                                type="button"
                                className="inline-flex  py-2 px-4 border border-transparent shadow-sm text-sm font-medium  bg-neutral-600 rounded-md text-center text-white pt-4 cursor-pointer hover:bg-neutral-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-neutral-500"
                                onClick={() => setSlidesShow(1)}
                            >
                                Home
                            </button>
            </div>
        </div>
    )
}

export default Result