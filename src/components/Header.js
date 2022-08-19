import React, { useEffect, useState } from 'react'
import Logo from "../assets/Yaba-College-of-Technology-YabaTech-logo-350x250.jpg"
const Header = ({ slideShow }) => {
    const [pageNo, setPageNo] = useState('')
    useEffect(() => {
        const pagination = () => {

            if (slideShow === 1) {
                return "Select Assesment Method"
            } else if (slideShow === 2) {
                return "Exam, Test and Pratical Assesment"
            }
            else if (slideShow === 3) {
                return "Exam and Test Assesment"
            } else if (slideShow === 4) {
                return "Exam Assesment Only"
            } else if (slideShow === 5) {
                return "Loading..."
            } else {
                return "Your Result!"
            }
        }
        setPageNo(pagination())
    }, [slideShow])

const whiteBackground = "bg-white rounded-md"

    return (
        <div className='flex flex-col shadow-md p-3  '>
                <div className={pageNo === 'Exam, Test and Pratical Assesment' || pageNo === 'Exam and Test Assesment'  || pageNo === 'Exam Assesment Only' ? whiteBackground : ''  }>
            <div className='flex flex-row rounded-sm justify-between'>
                <img src={Logo} alt="logo" className='w-20 rounded-sm mr-5' />
                <h3 className='text-xl font-semibold text-slate-900'>Evaluation of Student Performance Using Fuzzy Logic</h3>
            </div>
            <div className="justify-center text-center">
                <h2 className=' text-slate-900'>Yaba College of Technology</h2>
                <h4>{pageNo}</h4>
            </div>
            </div>
        </div>
    )
}

export default Header