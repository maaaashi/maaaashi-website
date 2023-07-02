import React from 'react'
import dynamic from 'next/dynamic'
import Swal from 'sweetalert2'
import { MdPinch } from 'react-icons/md'
const Scene = dynamic(() => import('@/components/Scene'), {
  ssr: false,
})

function App() {
  Swal.fire({
    title: '<strong>Welcome <u>Maaaashi Website</u></strong>',
    html: '<div class="mouseArea"><div class="moveMouse"><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 256 256" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg" color="white" style="color: white;"><path d="M216,104v48a88,88,0,0,1-176,0V136a16,16,0,0,1,32,0v8a8,8,0,0,0,16,0V88a16,16,0,0,1,32,0v16a8,8,0,0,0,16,0V88a16,16,0,0,1,32,0v16a8,8,0,0,0,16,0,16,16,0,0,1,32,0Z"></path></svg></div><div class="pinchMouse"><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg" color="white" style="color: white;"><path fill="none" d="M0 0h24v24H0z"></path><path d="M6 2.5V1h5v5H9.5V3.56L3.56 9.5H6V11H1V6h1.5v2.44L8.44 2.5H6zm16.98 14.32l-.63 4.46c-.14.99-.99 1.72-1.98 1.72h-6.16c-.53 0-1.29-.21-1.66-.59L8 17.62l.83-.84c.24-.24.58-.35.92-.28l3.25.74V6.5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5v6h.91c.31 0 .62.07.89.21l4.09 2.04c.77.39 1.21 1.22 1.09 2.07z"></path></svg></div></div>',
    showCloseButton: false,
    showCancelButton: false,
    focusConfirm: false,
    confirmButtonAriaLabel: 'Thumbs up, great!',
    cancelButtonAriaLabel: 'Thumbs down',
  })

  return (
    <div className='h-full w-full bg-black' style={{ cursor: 'grab' }}>
      <Scene />
    </div>
  )
}

export default App
