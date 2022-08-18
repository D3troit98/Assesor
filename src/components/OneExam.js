import React from 'react'

const OneExam = ({ form, setForm, handleSubmit1, setSlidesShow }) => {
    const handleChange = (e) => {
        setForm((prevFormData) => {
            return {
                ...prevFormData,
                [e.target.name]: e.target.value
            }
        })
    }
    return (

        <div className='mt-5 md:mt-0 flex-col '>
            <form onSubmit={handleSubmit1}>
                <h3 className="text-lg font-medium leading-6 text-gray-900">Personal Information</h3>
                <div className=' flex flex-row'>

                    <div className='shadow overflow-hidden sm:rounded-md'>
                        <div className='px-4 py-5 only:sm:p-6'>
                            <label htmlFor='firstname' className='block text-sm font-medium text-gray-700'>
                                First Name
                            </label>
                            <input
                                type="text"
                                name="firstname"
                                id="firstname"
                                autoComplete='firstName'
                                className='mt-1 focus:ring-indogo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md'
                                onChange={handleChange}
                                value={form.firstname}
                            />
                        </div>
                    </div>

                    <div className='shadow overflow-hidden sm:rounded-sm'>
                        <div className='px-4 py-5  sm:p-6'>
                            <label htmlFor='lastname' className='block text-sm font-medium text-gray-700'>
                                Last Name
                            </label>
                            <input
                                type="text"
                                name="lastname"
                                id="lastname"
                                autoComplete='lastName'
                                className='mt-1 focus:ring-indogo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md'
                                onChange={handleChange}
                                value={form.lastname}
                            />
                        </div>
                    </div>

                </div>
                <div>

                    <div className=' flex flex-row'>
                        <div className='shadow overflow-hidden sm:rounded-md'>
                            <div className='px-4 py-5  sm:p-6'>
                                <label htmlFor='first-name' className='block text-sm font-medium text-gray-700'>
                                    Course
                                </label>
                                <input
                                    type="text"
                                    name="course"
                                    id="course"
                                    autoComplete='course'
                                    className='mt-1 focus:ring-indogo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md'
                                    onChange={handleChange}
                                    value={form.course}
                                />
                            </div>
                        </div>

                        <div className='shadow overflow-hidden sm:rounded-sm'>
                            <div className='px-4 py-5 sm:p-6'>
                                <label htmlFor='registration' className='block text-sm font-medium text-gray-700'>
                                    Registration ID
                                </label>
                                <input
                                    type="text"
                                    name="registration"
                                    id="registration"
                                    autoComplete='registration'
                                    className='mt-1 focus:ring-indogo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md'
                                    onChange={handleChange}
                                    value={form.registration}
                                />
                            </div>
                        </div>

                    </div>

                    <div className='shadow overflow-hidden sm:rounded-sm'>
                        <div className='px-4 py-5 sm:p-6'>
                            <label htmlFor='age' className='block text-sm font-medium text-gray-700 ml-4 mr-4'>
                                Age
                            </label>
                            <input
                                type="number"
                                name="age"
                                id="age"
                                autoComplete='age'
                                className='mt-1 focus:ring-indogo-500 focus:border-indigo-500 block w-20 shadow-sm sm:text-sm border-gray-300 rounded-md '
                                onChange={handleChange}
                                value={form.age}
                            />
                        </div>
                    </div>


                    <p className="mt-1 text-sm text-gray-600">Input Only Your Exam Score.</p>

                    <div className='shadow overflow-hidden sm:rounded-sm flex flex-row'>
                        <div className='px-4 py-5 sm:p-6'>
                            <label htmlFor=' exam' className='block text-sm font-medium text-gray-700 mb-6 sm:mb-0'>
                                Exam
                            </label>
                            <input
                                type="number"
                                name="exam"
                                id="exam"
                                className='mt-1 focus:ring-indogo-500 focus:border-indigo-500 block w-20 shadow-sm sm:text-sm border-gray-300 rounded-md '
                                onChange={handleChange}
                                value={form.exam}
                                placeholder="0-100"
                            />
                        </div>




                    </div>
                    <div className='flex'>
                        <div className="px-4 py-3 sm:px-6">
                            <button
                                type="submit"
                                className="inline-flex  py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                            >
                                Check Result
                            </button>

                        </div>

                        <div className="px-4 py-3 sm:px-6">
                            <button
                                type="button"
                                className="inline-flex  py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-green-400 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:bg-green-500"
                                onClick={() => setSlidesShow(1)}
                            >
                                Home
                            </button>

                        </div>
                    </div>
                </div>

            </form>
        </div>

    )
}

export default OneExam