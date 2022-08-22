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
        <div className='mt-5 md:mt-0 flex-col bg-white rounded-lg pt-5 w-full'>
            <form onSubmit={handleSubmit}>
                <h3 className="text-lg font-medium leading-6 text-green-400 ml-4">Personal Information</h3>
                <div className=' flex flex-row shadow-sm rounded-sm'>
                    <div className='shadow overflow-hidden sm:rounded-md'>
                        <div className='px-4 py-5 only:sm:p-6'>
                            <label htmlFor='firstname' className='block text-sm font-medium text-green-400'>
                                First Name
                            </label>
                            <input
                                type="text"
                                name="firstname"
                                id="firstname"
                                autoComplete='firstName'
                                className='border mt-1 focus:ring-green-400 focus:border-green-500 block w-full shadow-sm sm:text-sm border-green-300 rounded-md hover:border-green-600 p-2 '
                                onChange={handleChange}
                                value={form.firstname}
                                placeholder="First Name"
                                required
                            />
                        </div>
                    </div>

                    <div className='shadow overflow-hidden sm:rounded-sm'>
                        <div className='px-4 py-5  sm:p-6'>
                            <label htmlFor='lastname' className='block text-sm font-medium text-green-400'>
                                Last Name
                            </label>
                            <input
                                type="text"
                                name="lastname"
                                id="lastname"
                                autoComplete='lastName'
                                className='border mt-1 focus:ring-green-400 focus:border-green-500 block w-full shadow-sm sm:text-sm border-green-300 rounded-md hover:border-green-600 p-2 '
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
                                <label htmlFor='first-name' className='block text-sm font-medium text-green-400'>
                                    Course
                                </label>
                                <input
                                    type="text"
                                    name="course"
                                    id="course"
                                    autoComplete='course'
                                    className='border mt-1 focus:ring-green-400 focus:border-green-500 block w-full shadow-sm sm:text-sm border-green-300 rounded-md hover:border-green-600 p-2'
                                    onChange={handleChange}
                                    value={form.course}
                                    placeholder="CSC"
                                />
                            </div>
                        </div>

                        <div className='shadow overflow-hidden sm:rounded-sm'>
                            <div className='px-4 py-5 sm:p-6'>
                                <label htmlFor='registration' className='block text-sm font-medium text-green-400'>
                                    Registration
                                </label>
                                <input
                                    type="text"
                                    name="registration"
                                    id="registration"
                                    autoComplete='registration'
                                    className='border mt-1 focus:ring-green-400 focus:border-green-500 block w-full shadow-sm sm:text-sm border-green-300 rounded-md hover:border-green-600 p-2'
                                    onChange={handleChange}
                                    value={form.registration}
                                    placeholder="Reg Number"
                                    required
                                />
                            </div>
                        </div>

                    </div>

                
                    <p className="mt-1 ml-4 text-sm text-gray-600">Input Your Exam Score(0-60), Test(0-20) and Project(0-20).</p>
                    <div className='shadow overflow-hidden sm:rounded-sm flex flex-row'>
                        <div className='px-4 py-5 sm:p-6'>
                            <label htmlFor=' exam' className='block text-sm font-medium text-green-400'>
                                Exam
                            </label>
                            <input
                                type="number"
                                name="exam"
                                id="exam"
                                className='border mt-1 focus:ring-green-400 focus:border-green-500 block  shadow-sm sm:text-sm border-green-300 rounded-md hover:border-green-600 p-2 w-20'
                                onChange={handleChange}                    
                                value={form.exam}
                                placeholder="0-60"
                                required
                            />
                        </div>

                        <div className='px-4 py-5 sm:p-6'>
                            <label htmlFor='test' className='block text-sm font-medium text-green-400'>
                                Test
                            </label>
                            <input
                                type="number"
                                name="test"
                                id="test"
                                className='border mt-1 focus:ring-green-400 focus:border-green-500 block  shadow-sm sm:text-sm border-green-300 rounded-md hover:border-green-600 p-2 w-20 '
                                onChange={handleChange}
                                value={form.test}
                                placeholder="0-20"
                                required
                            />
                        </div>

                        <div className='px-4 py-5 sm:p-6'>
                            <label htmlFor='project' className='block text-sm font-medium text-green-400 '>
                                Project
                            </label>
                            <input
                                value={form.project}
                                type="number"
                                name="project"
                                id="project"
                                className='border mt-1 focus:ring-green-400 focus:border-green-500 block shadow-sm sm:text-sm border-green-300 rounded-md hover:border-green-600 p-2 w-20'
                                onChange={handleChange} 
                                placeholder="0-20"
                                required
                            />
                        </div>

                    </div>
                    <div className='flex justify-center place-content-stretch'>
                        <div className="px-4 py-3 sm:px-6">
                            <button
                                type="submit"
                                className="px-5 py-2 border border-transparent shadow-sm text-md font-medium  bg-gradient-to-r from-green-300 to-green-600 rounded-full text-center text-white  cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-neutral-500 "
                            >
                                Check Result
                            </button>

                        </div>

                        <div className="px-4 py-3 sm:px-6">
                            <button
                                type="button"
                                className=" px-6 py-2 border border-transparent shadow-sm text-md font-medium  bg-gradient-to-r from-green-300 to-green-600 rounded-full text-center text-white  cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-neutral-500  "
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