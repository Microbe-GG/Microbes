import React from 'react'
const date=new Date().getFullYear();
export default function footer() {
  return (
    <div className='footer'>Copyrights {date}</div>
  )
}
