import React, { useState } from 'react'


import { Form, Loader, Result, Course, OneExam, TwoExams, Header } from './components'
const App = () => {
  //form to store the users form
  const [form, setForm] = useState({
    firstname: '', lastname: '', course: '', registration: '', age: 0, exam: 0, test: 0, project: 0
  })
  //a way to move the pages
  const [slideShow, setSlidesShow] = useState(1)
  //a way to handle which result is being calculated
  const [resultSheet, setResultSheet] = useState(0)

  //three logic form submition
  //In the three logic, timeout is done to enable loader and switch of result page
  const handleSubmit = (e) => {
    e.preventDefault()
    setResultSheet(3)
    setSlidesShow(5)
    setTimeout(() => {
      setSlidesShow(6)
    }, 2000)

  }
  //One logic form submition
  const handleSubmit1 = (e) => {
    e.preventDefault()
    setResultSheet(1)
    setSlidesShow(5)
    setTimeout(() => {
      setSlidesShow(6)
    }, 2000)

  }
  //Two logic form submition
  const handleSubmit2 = (e) => {
    e.preventDefault()
    setResultSheet(2)
    setSlidesShow(5)
    setTimeout(() => {
      setSlidesShow(6)
    }, 2000)
  }



  return (
    <div className='h-auto  bg-green-300 lg:mx-96 mt-4 rounded-md max-w-full'>
      <div className='p-10 mx-auto border-2 border-white'>
        <Header slideShow={slideShow} />
        {slideShow === 1 ? <Course setSlidesShow={setSlidesShow} />
          : slideShow === 2 ? <Form form={form} setForm={setForm} handleSubmit={handleSubmit} setSlidesShow={setSlidesShow} setResultSheet={setResultSheet} />
            : slideShow === 3 ? <TwoExams form={form} setForm={setForm} handleSubmit2={handleSubmit2} setSlidesShow={setSlidesShow} setResultSheet={setResultSheet} />
              : slideShow === 4 ? <OneExam form={form} setForm={setForm} handleSubmit1={handleSubmit1} setSlidesShow={setSlidesShow} setResultSheet={setResultSheet} />
                : slideShow === 5 ? <Loader />
                  : <Result form={form} setSlidesShow={setSlidesShow} resultSheet={resultSheet} />
        }



      </div>
    </div>
  )
}

export default App