import React from 'react'

const Content = () => {
  return (
    <div className='font-sans bg-black text-white'>
        <div className='max-w-4xl pt-16 ml-20 mr-20 shadow-xl py-10 pr-20 pb-20 pl-20 bg-indigo-500 rounded-2xl'>
            <div className='text-white flex'>
                <div>
                    <h1 className='mb-10 text-5xl font-bold'>Mental Health Assesment</h1>
                    <p className='text-2xl'>Your Path to Well-Being Welcome to a safe space for student mental health. We're here to support your journey towards well-being and success in your academic life.Discuss your problem with us and get the solution immediately.
                    Your anonymity is our priority. Feel free to express yourself openly and honestly – your responses will be confidential.
                    <p className='mt-10 mb-6 texl-2xl'>Mental health conditions, such as depression or anxiety, are real, common and treatable. And recovery is possible.</p></p>
                </div>
                <div>
                    <img src="" alt="hello.jpg" />
                </div>
            </div>
            <div className='mt-10 w-80 shadow-md p-5 rounded-lg text-center text-black inline-block bg-white text-xl hover:text-indigo-900 ease-in-out duration-200 hover:font-bold'>
                <a href="/survey" className=''>Let's solve your problem</a>
            </div>
        </div>
        <div className='mt-20'>
            <div>
                <h2 className='ml-20 mr-20 mt-8 text-4xl'>How Does this Work ?</h2>
                <p className='ml-20 mt-4 mr-20 text-2xl' >After completing your student mental health assessment, you'll gain access to valuable information, resources, and tools aimed at enhancing your understanding and well-being.</p>

                <h2 className='ml-20 mr-20 mt-8 text-4xl'>How Can Online Mental Health Testing Help Students ?</h2>
                <p className='ml-20 mt-4 mr-20 text-2xl'>Online mental health testing serves as a helpful tool to gain insights into your mental well-being. It can provide guidance and resources to address various challenges that students often encounter.</p>

                <h2 className='ml-20 mr-20 mt-8 text-4xl'>Understanding Your Student Mental Health Test Results</h2>
                <p className='ml-20 mt-4 mr-20 text-2xl'>Your test results offer a snapshot of your mental health. If they suggest you may be experiencing mental health symptoms, consider sharing them with a mental health provider, like a counselor or therapist. They can provide a comprehensive assessment and discuss strategies to help you feel better.</p>

                <h2 className='ml-20 mr-20 mt-8 text-4xl'>Important Note: We Are Here to Inform</h2>
                <p className='ml-20 mt-4 mr-20 text-2xl'>Please be aware that this website serves as an informational resource and not a crisis support line. If you require immediate assistance, reach out to the Suicide & Crisis Lifeline</p>
            </div>
            <div className='mt-20'>
                <h3 className='ml-20 mr-20 mt-8 text-4xl'>What We Offer:</h3>
                <h2 className='ml-20 mr-20 mt-8 text-2xl'>Resources and Insights : </h2>
                <p className='ml-20 mt-4 mr-20 text-xl'>Access articles, tools, and tips for managing student life and mental health.</p>
                <h2 className='ml-20 mr-20 mt-8 text-2xl'>Support and Assistance</h2>
                <p className='ml-20 mt-4 mr-20 text-xl'>Discuss your problems ,get their solutions and cure yourself.</p>                    <h3 className='ml-20'>Get Help : </h3>
                <p className='ml-20 mt-4 mr-20 text-xl'>Reach out to professionals and explore mental health services available to you.</p>
            </div>
        </div>
    </div>
  )
}

export default Content