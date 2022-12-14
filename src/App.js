import React, { useState } from 'react'


import { Form, Loader, Result, Course, OneExam, TwoExams, Header } from './components'
const App = () => {
  //form to store the users form
  const [form, setForm] = useState({
    firstname: '', lastname: '', course: '', registration: '', age: '', exam: '', test: '', project: ''
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
    <div class=" w-full h-screen bg-gradient-to-r from-green-300 to-green-600">
    <div className='h-auto bg-gradient-to-r from-green-300 to-green-600 flex rounded-md '>
      <div className='p-10 mx-auto'>
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
    </div>
  )
}

export default App