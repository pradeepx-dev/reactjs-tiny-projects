import React, { useState } from 'react'

const Pag1 = () => {
  const [color, setColor] = useState('red');
  // const colorChanger =(color)=>{
  //   setColor(color)
  // }

  return (
    <div className=' w-screen h-screen duration-200' style = {{ backgroundColor: color}}>
      <div className=' fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
        <div className=' flex flex-wrap justify-center gap-3
        shadow-lg i bg-white px-3 py-1 rounded-3xl'>
          <button className='outline-none px-4 py-1 rounded-full bg-teal-500 shadow-lg text-black' onClick={()=>setColor('teal')}>
            teal
          </button>
          <button className='outline-none px-4 py-1 rounded-full  bg-pink-500 shadow-lg text-black' onClick={()=>setColor('pink')}>
            pink
          </button>
          <button className='outline-none px-4 py-1 rounded-full bg-purple-500 shadow-lg text-black' onClick={()=>setColor('purple')}>
            purple
          </button>
          <button className='outline-none px-4 py-1 rounded-full bg-green-500 shadow-lg text-black' onClick={()=>setColor('green')}>
            green
          </button>
          <button className='outline-none px-4 py-1 rounded-full bg-yellow-500 shadow-lg text-black' onClick={()=>setColor('yellow')}>
            yellow
          </button>
          <button className='outline-none px-4 py-1 rounded-full bg-orange-500 shadow-lg text-black' onClick={()=>setColor('orange')}>
            orange
          </button>
          <button className='outline-none px-4 py-1 rounded-full bg-blue-500 shadow-lg text-black' onClick={()=>setColor('blue')}>
            blue
          </button>
          <button className='outline-none px-4 py-1 rounded-full bg-indigo-500 shadow-lg text-black' onClick={()=>setColor('indigo')}>
            indigo
          </button>
        </div>
      </div>
    </div>
  )
}

export default Pag1
