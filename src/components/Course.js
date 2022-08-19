import React from 'react'

const Course = ({ setSlidesShow }) => {
    const moveSlides = (pageNum) => {

        setSlidesShow(pageNum)
    }
    return (
        <div className="grid grid-cols-2 gap-4">
            <div className='col-span-1' >
                <div className='h-20 bg-neutral-600 rounded-md text-center text-white pt-4 cursor-pointer hover:bg-neutral-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-neutral-500'
                    onClick={() => moveSlides(2)}
                >
                    Exam,Test with Practical</div>
            </div>
            <div className='col-span-1' >
                <div className='h-20 bg-neutral-600 rounded-md text-center text-white pt-4 cursor-pointer hover:bg-neutral-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-neutral-500'
                    onClick={() => moveSlides(3)}
                >
                    Exam and Test</div>
            </div>
            <div className='col-span-1' >
                <div className='h-20 bg-neutral-600 rounded-md text-center text-white pt-4 cursor-pointer hover:bg-neutral-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-neutral-500'
                    onClick={() => moveSlides(4)}
                >
                    Exam only</div>
            </div>
        </div>
    )
}

export default Course