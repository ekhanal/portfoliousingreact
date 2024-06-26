import React from 'react'
import html from '../assets/html.png';
import css from '../assets/css.png';
import javascript from '../assets/javascript.png';
import react from '../assets/react.png';
import tailwind from '../assets/tailwind.png';
import github from '../assets/github.png';
import java from '../assets/java.png';


const Experience = () => {
    const techs=[
      {
        id:1,
        src:html,
        Title:'HTML',
        style:'shadow-orange-500'
      },
      {
        id:2,
        src:css,
        Title:'CSS',
        style:'shadow-blue-500'
      },
      {
        id:3,
        src:javascript,
        Title:'JavaScript',
        style:'shadow-yellow-500'
      },
      {
        id:4,
        src: react,
        Title:'React',
        style:'shadow-blue-600'
      },
      {
        id:5,
        src:tailwind,
        Title:'Tailwind',
        style:'shadow-sky-400'
      },
      {
        id:6,
        src:github,
        Title:'GitHUb',
        style:'shadow-gray-500'
      },
      {
        id:7,
        src:java,
        Title:'JAVA',
        style:'shadow-red-500'
      },
      
    ]
  return (
    <div name="experience"
     className='bg-gradient-to-b
    from-gray-800 to-black w-full h-full'>
        <div className='max-w-screen-lg mx-auto p-8
        flex flex-col justify-center  w-full h-full  text-white'>
            <div>
                <p className='text-4xl font-bold border-b-4
                boredr-gray-500 p-2 inline'>
                Experience
                </p>
                <p className='py-6'>These are the technologies I've worked with</p>
            </div>

            <div className='w-full grid grid-cols-2 sm:grid-cols-3
            gap-8 text-center py-8 px-12 sm:px-0'>
                {
                    techs.map(({id,src,Title,style})=>(
                        <div key={id}
                         className='shadow-md hover:scale-105 duration-500
                         py-2 rounded-lg'>
                            <img src={src} alt={Title} className='h-auto max-w-full'/>
                            <p className={`text-xl font-bold  ${style}`}>{Title}</p>
                        </div>
                    ))
                }

        
                </div>            
            </div>
        </div>
  
  )
}

export default Experience
