import React from 'react'
import dynamic from 'next/dynamic'
import Swal from 'sweetalert2'
import {
  PiHandGrabbing,
  PiHandGrabbingFill,
  PiHandGrabbingThin,
} from 'react-icons/pi'
const Scene = dynamic(() => import('@/components/Scene'), {
  ssr: false,
})

function App() {
  Swal.fire({
    title: '<strong>Welcome <u>Maaaashi Website</u></strong>',
    html: '<div class="mouseArea"><div class="moveMouse"><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 256 256" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg" color="white" style="color: white;"><path d="M216,104v48a88,88,0,0,1-176,0V136a16,16,0,0,1,32,0v8a8,8,0,0,0,16,0V88a16,16,0,0,1,32,0v16a8,8,0,0,0,16,0V88a16,16,0,0,1,32,0v16a8,8,0,0,0,16,0,16,16,0,0,1,32,0Z"></path></svg></div></div>',
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
