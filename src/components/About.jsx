import AboutImg from '../assets/abt.jpg';

export default function About () {
    const config  = {
        line1: 'Hi, My name is Deepa. I am a Full stack web developer. I built beautiful Websites with React.js , CSS + Bootstrap',
        line2: 'I am proficient in Frontend skills like React.js, Redux, Redux Tool Kit, Axios, CSS, SaSS, Css3 and many more.',
        line3: 'In backend I know Node.js, Express.js, MongoDB, and Mongoose'
    }

    return <section className='flex flex-col md:flex-row bg-secondary px-20 justify-center' id='about'>
        <div className='py-3 md:w-1/2'>
            <img className='justify-center'src={AboutImg} />
        </div>
        
        <div className='md:w-1/2 flex justify-center'>
            <div className='flex flex-col justify-center'>
                <h1 className='text-4xl border-b-4 border-secondary mb-5 w-[170px] font-bold text-white'>About Me</h1>
                <p className='pb-5'>{config.line1}</p>
                <p className='pb-5'>{config.line2}</p>
                <p className='pb-5'>{config.line3}</p>
            </div>
        </div>
    </section>
}
