import React from 'react'

const Course = ({ setSlidesShow }) => {
    const moveSlides = (pageNum) => {

        setSlidesShow(pageNum)
    }
    return (
        <div className="grid lg:grid-cols-2 grid-rows-2 gap-4 mt-5">
            <div className='col-span-1' >
                <div className='h-16 bg-white rounded-full text-center text-lg text-green-400 pt-5 cursor-pointer hover:bg-green-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-neutral-500'
                    onClick={() => moveSlides(2)}
                >
                    Exam,Test with Practical</div>
            </div>
            <div className='col-span-1' >
            <div className='h-16 bg-white rounded-full text-center text-lg text-green-400 pt-5 cursor-pointer hover:bg-green-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-neutral-500'
                    onClick={() => moveSlides(3)}
                >
                    Exam and Test</div>
            </div>
            <div className='col-span-1' >
            <div className='h-16 bg-white rounded-full text-center text-lg text-green-400 pt-5 cursor-pointer hover:bg-green-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-neutral-500'
                    onClick={() => moveSlides(4)}
                >
                    Exam only</div>
            </div>
        </div>
    )
}

export default Course