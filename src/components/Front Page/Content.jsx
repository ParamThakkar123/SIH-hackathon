import React, { useEffect } from 'react'
import Aos from 'aos';
import 'aos/dist/aos.css';

const Content = () => {
    useEffect(() => {
        Aos.init();
    }, []);
  return (
    <div className='font-sans bg-gray-200'>
        <div>
            <div data-aos="fade-up" data-aos-delay="300" className='h-screen relative bg-indigo-400'>
                <iframe src='https://my.spline.design/lightingstudio1copy-c7be49be93bdf7523b6a69d92aef3286/' frameborder='0' width='100%' height='100%'></iframe>
                <h1 className='ml-14 absolute top-20 text-9xl font-bold text-white'>HealWell</h1>
                <div className='w-40 h-14 absolute bottom-0 right-0 bg-indigo-400'></div>
            </div>
        </div>
        <div className='h-screen'>
        <div data-aos="fade-right" data-aos-delay="200" className='mt-28 pt-16 shadow-xl ml-5 mr-5 pr-14 pb-20 pl-14 bg-indigo-950 rounded-3xl'>
            <div className='text-white flex'>
                <div className='pr-14 md:w-3/5'>
                    <h1 className='mb-10 text-5xl font-bold'>Mental Health Assesment</h1>
                    <p className='text-2xl'>Your Path to Well-Being Welcome to a safe space for student mental health. We're here to support your journey towards well-being and success in your academic life.Discuss your problem with us and get the solution immediately.
                    Your anonymity is our priority. Feel free to express yourself openly and honestly – your responses will be confidential.</p>
                    <p className='text-2xl pt-10'>Mental health conditions, such as depression or anxiety, are real, common and treatable. And recovery is possible.</p>
                    <div className='mt-20 w-80 shadow-md p-5 rounded-lg font-bold text-center text-white inline-block bg-indigo-600 text-xl hover:text-indigo-950 hover:bg-indigo-100 ease-in-out duration-300'>
                    <a href="/survey" className=''>Let's solve your problem</a>
                    </div>
                </div>
                <div className='md:w-2/5'>
                    <img src="./images/brain.png" alt="hello.jpg" className='rounded-2xl' />
                </div>
            </div>
        </div>
        </div>
        <div className=''>
            <div>
                <div data-aos="fade-left" data-aos-delay="200">
                <h2 className='ml-20 mr-20 mt-8 text-4xl font-semibold text-indigo-950'>How Does this Work ?</h2>
                <p className='ml-20 mt-4 mr-20 text-2xl text-indigo-900'>After completing your student mental health assessment, you'll gain access to valuable information, resources, and tools aimed at enhancing your understanding and well-being.</p>
                </div>
                <div data-aos="fade-right" data-aos-delay="220">
                <h2 className='ml-20 mr-20 mt-8 text-4xl font-semibold text-indigo-950'>How Can Online Mental Health Testing Help Students ?</h2>
                <p className='ml-20 mt-4 mr-20 text-2xl text-indigo-900'>Online mental health testing serves as a helpful tool to gain insights into your mental well-being. It can provide guidance and resources to address various challenges that students often encounter.</p>
                </div>

                <div data-aos="fade-left" data-aos-delay="240">
                <h2 className='ml-20 mr-20 mt-8 text-4xl font-semibold text-indigo-950'>Understanding Your Student Mental Health Test Results</h2>
                <p className='ml-20 mt-4 mr-20 text-2xl text-indigo-900'>Your test results offer a snapshot of your mental health. If they suggest you may be experiencing mental health symptoms, consider sharing them with a mental health provider, like a counselor or therapist. They can provide a comprehensive assessment and discuss strategies to help you feel better.</p>
                </div>

                <div data-aos="fade-right" data-aos-delay="260">
                <h2 className='ml-20 mr-20 mt-8 text-4xl font-semibold text-indigo-950'>Important Note: We Are Here to Inform</h2>
                <p className='ml-20 mt-4 mr-20 text-2xl text-indigo-900'>Please be aware that this website serves as an informational resource and not a crisis support line. If you require immediate assistance, reach out to the Suicide & Crisis Lifeline</p>
                </div>
            </div>
            <div className='mt-20'>
                <h3 data-aos="fade-zoom-in"
     data-aos-easing="ease-in-back"
     data-aos-delay="500"
     data-aos-offset="0" className='ml-20 mr-20 mt-8 text-4xl font-semibold text-indigo-950'>What We Offer:</h3>
     <div data-aos="fade-left" data-aos-delay="280">
     <h2 className='ml-20 mr-20 mt-8 text-2xl font-semibold text-indigo-950'>Resources and Insights : </h2>
                <p className='ml-20 mt-4 mr-20 text-xl text-indigo-900 py-8'>Comprehensive Articles: Explore a wide range of articles covering topics such as stress management, time management, coping with exam anxiety, and improving study habits.
Interactive Tools: Gain access to interactive tools and self-assessment quizzes that provide personalized recommendations for enhancing mental well-being.
Expert Tips: Receive guidance from mental health professionals and experienced students on navigating the challenges of student life.</p>
    </div>
                <div data-aos="fade-right" data-aos-delay="300">
                <h2 className='ml-20 mr-20 mt-8 text-2xl font-semibold text-indigo-950'>Support and Assistance</h2>
                <p className='ml-20 mt-4 mr-20 text-xl text-indigo-900 py-8'>Peer Support Groups: Join diverse peer support groups and forums where you can engage in meaningful discussions, exchange advice, and build connections with fellow students facing similar experiences.
Student-Led Initiatives: Discover student-led initiatives aimed at promoting mental health awareness, organizing events, and fostering a supportive community on campus.
Safe and Inclusive Space: Our community is a safe, inclusive, and judgment-free space where you can freely express yourself and seek solace in shared experiences.</p>                    
                </div>
                <div data-aos="fade-left" data-aos-delay="320">
                <h3 className='ml-20 mr-20 mt-8 text-4xl font-semibold text-indigo-950'>Get Help : </h3>
                <p className='ml-20 mt-4 mr-20 text-xl text-indigo-900 py-8'>Counseling Services: Access information about on-campus and off-campus counseling services, including how to schedule appointments and what to expect during counseling sessions.
Crisis Helplines: Find quick and confidential access to crisis helplines, available 24/7, to assist you during moments of acute distress or emotional crisis.
Resource Directories: Explore a comprehensive directory of mental health professionals, clinics, and support organizations in your area, making it easier to find the right help when you need it.                                                               
Embark on your journey to improved mental health today, armed with an array of resources, a supportive community, and the guidance you need to thrive in your student life.</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Content