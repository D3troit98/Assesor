import React from 'react'

const Form = ({ form, setForm, handleSubmit, setSlidesShow }) => {
    const handleChange = (e) => {
        setForm((prevFormData) => {
            return {
                ...prevFormData,
                [e.target.name]: e.target.value
            }

        })
    }


    return (
        <div className='mt-5 md:mt-0 flex-col bg-green-100 rounded-lg'>
            <form onSubmit={handleSubmit}>
                <h3 className="text-lg font-medium leading-6 text-gray-900 ml-4">Personal Information</h3>
                <div className=' flex flex-row shadow-sm rounded-sm'>
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
                                className='border mt-1 focus:ring-green-400 focus:border-green-500 block w-full shadow-sm sm:text-sm border-green-300 rounded-md hover:border-green-600 '
                                onChange={handleChange}
                                value={form.firstname}
                                placeholder="First Name"
                                required
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
                                className='border mt-1 focus:ring-green-400 focus:border-green-500 block w-full shadow-sm sm:text-sm border-green-300 rounded-md hover:border-green-600 '
                                onChange={handleChange}
                                value={form.lastname}
                                placeholder="Last Name"
                                required
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
                                    className='border mt-1 focus:ring-green-400 focus:border-green-500 block w-full shadow-sm sm:text-sm border-green-300 rounded-md hover:border-green-600 '
                                    onChange={handleChange}
                                    value={form.course}
                                    placeholder="CSC"
                                />
                            </div>
                        </div>

                        <div className='shadow overflow-hidden sm:rounded-sm'>
                            <div className='px-4 py-5 sm:p-6'>
                                <label htmlFor='registration' className='block text-sm font-medium text-gray-700'>
                                    Registration
                                </label>
                                <input
                                    type="text"
                                    name="registration"
                                    id="registration"
                                    autoComplete='registration'
                                    className='border mt-1 focus:ring-green-400 focus:border-green-500 block w-full shadow-sm sm:text-sm border-green-300 rounded-md hover:border-green-600 '
                                    onChange={handleChange}
                                    value={form.registration}
                                    placeholder="Reg Number"
                                    required
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
                                className='border mt-1 focus:ring-green-400 focus:border-green-500 block w-10 shadow-sm sm:text-sm border-green-300 rounded-md hover:border-green-600 '
                                onChange={handleChange}
                                value={form.age}
                                placeholder="21"
                            />
                        </div>
                    </div>
                    <p className="mt-1 ml-4 text-sm text-gray-600">Input Your Exam Score(0-60), Test(0-20) and Project(0-20).</p>
                    <div className='shadow overflow-hidden sm:rounded-sm flex flex-row'>
                        <div className='px-4 py-5 sm:p-6'>
                            <label htmlFor=' exam' className='block text-sm font-medium text-gray-700'>
                                Exam
                            </label>
                            <input
                                type="number"
                                name="exam"
                                id="exam"
                                className='border mt-1 focus:ring-green-400 focus:border-green-500 block w-full shadow-sm sm:text-sm border-green-300 rounded-md hover:border-green-600 '
                                onChange={handleChange}                    
                                value={form.exam}
                                placeholder="0-60"
                                required
                            />
                        </div>

                        <div className='px-4 py-5 sm:p-6'>
                            <label htmlFor='test' className='block text-sm font-medium text-gray-700 '>
                                Test
                            </label>
                            <input
                                type="number"
                                name="test"
                                id="test"
                                className='border mt-1 focus:ring-green-400 focus:border-green-500 block w-full shadow-sm sm:text-sm border-green-300 rounded-md hover:border-green-600 '
                                onChange={handleChange}
                                value={form.test}
                                placeholder="0-20"
                                required
                            />
                        </div>

                        <div className='px-4 py-5 sm:p-6'>
                            <label htmlFor='project' className='block text-sm font-medium text-gray-700 '>
                                Project
                            </label>
                            <input
                                value={form.project}
                                type="number"
                                name="project"
                                id="project"
                                className='border mt-1 focus:ring-green-400 focus:border-green-500 block w-full shadow-sm sm:text-sm border-green-300 rounded-md hover:border-green-600 '
                                onChange={handleChange} 
                                placeholder="0-20"
                                required
                            />
                        </div>

                    </div>
                    <div className='flex'>
                        <div className="px-4 py-3 sm:px-6">
                            <button
                                type="submit"
                                className="inline-flex  py-2 px-4 border border-transparent shadow-sm text-sm font-medium  bg-neutral-600 rounded-md text-center text-white pt-4 cursor-pointer hover:bg-neutral-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-neutral-500"
                            >
                                Check Result
                            </button>

                        </div>

                        <div className="px-4 py-3 sm:px-6">
                            <button
                                type="button"
                                className="inline-flex  py-2 px-4 border border-transparent shadow-sm text-sm font-medium  bg-neutral-600 rounded-md text-center text-white pt-4 cursor-pointer hover:bg-neutral-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-neutral-500"
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

export default Form