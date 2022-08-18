import React from 'react'

const Course = ({ setSlidesShow }) => {
    const moveSlides = (pageNum) => {

        setSlidesShow(pageNum)
    }
    return (
        <div className="grid grid-cols-2 gap-4">
            <div className='col-span-1' >
                <div className='h-20 bg-teal-800 rounded-md text-center pt-4 cursor-pointer'
                    onClick={() => moveSlides(2)}
                >
                    Exam/Text/Pratical</div>
            </div>
            <div className='col-span-1' >
                <div className='h-20 bg-teal-800 rounded-md text-center pt-4 cursor-pointer'
                    onClick={() => moveSlides(3)}
                >
                    Exam/Text</div>
            </div>
            <div className='col-span-1' >
                <div className='h-20 bg-teal-800 rounded-md text-center pt-4 cursor-pointer'
                    onClick={() => moveSlides(4)}
                >
                    Exam</div>
            </div>
        </div>
    )
}

export default Course