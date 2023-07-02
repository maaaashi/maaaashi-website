import React from 'react'
import dynamic from 'next/dynamic'
import Swal from 'sweetalert2'
const Scene = dynamic(() => import('@/components/Scene'), {
  ssr: false,
})

function App() {
  Swal.fire({
    title: '<strong>Welcome <u>Maaaashi Website</u></strong>',
    html: '<div class="mouseArea"><div class="moveMouse"><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 256 256" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M188,80a27.79,27.79,0,0,0-13.36,3.4,28,28,0,0,0-46.64-11A28,28,0,0,0,80,92v20H68a28,28,0,0,0-28,28v12a88,88,0,0,0,176,0V108A28,28,0,0,0,188,80Zm12,72a72,72,0,0,1-144,0V140a12,12,0,0,1,12-12H80v24a8,8,0,0,0,16,0V92a12,12,0,0,1,24,0v28a8,8,0,0,0,16,0V92a12,12,0,0,1,24,0v28a8,8,0,0,0,16,0V108a12,12,0,0,1,24,0Z"></path></svg></div></div>',
    showCloseButton: false,
    showCancelButton: false,
    focusConfirm: false,
    confirmButtonAriaLabel: 'Thumbs up, great!',
    cancelButtonAriaLabel: 'Thumbs down',
  })

  return (
    <div className='h-full w-full bg-black' style={{ cursor: "grab" }}>
      <Scene />
    </div>
  )
}

export default App
