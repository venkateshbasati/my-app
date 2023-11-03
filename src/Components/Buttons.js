import React from 'react'

const Buttons = ({name}) => {
  return (
    <div className='bg-gray-100 mx-1  px-4 py-1  hover:bg-black hover:text-white cursor-pointer text-center font-normal rounded-md'>{name}</div>
  )
}

export default Buttons