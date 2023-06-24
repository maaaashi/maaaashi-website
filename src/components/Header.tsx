import { FC, useEffect } from 'react'
import { AiFillTwitterCircle } from 'react-icons/ai'
import { themeChange } from 'theme-change'
import Link from 'next/link'
const Header: FC = () => {
  useEffect(() => {
    themeChange(false)
  }, [])

  const listTheme = [
    'light',
    'dark',
    'cupcake',
    'bumblebee',
    'emerald',
    'corporate',
    'synthwave',
    'retro',
    'cyberpunk',
    'valentine',
    'halloween',
    'garden',
    'forest',
    'aqua',
    'lofi',
    'pastel',
    'fantasy',
    'wireframe',
    'black',
    'luxury',
    'dracula',
    'cmyk',
    'autumn',
    'business',
    'acid',
    'lemonade',
    'night',
    'coffee',
    'winter',
  ]

  return (
    <div className='navbar bg-base-100'>
      <div className='navbar-start'>
        <div className='dropdown'>
          <label tabIndex={0} className='btn-ghost btn md:hidden'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-5 w-5'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M4 6h16M4 12h8m-8 6h16'
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className='dropdown-content menu rounded-box menu-compact mt-3 w-52 bg-base-100 p-2 shadow'
          >
            <li>
              <Link href='/'>Home</Link>
            </li>
            <li>
              <Link href='/profile'>Profile</Link>
            </li>
            <li>
              <Link href='/qiita'>Qiita</Link>
            </li>
            <li>
              <Link href='/works'>Works</Link>
            </li>
            <li>
              <a>Theme</a>
            </li>
          </ul>
        </div>
        <a className='btn-ghost btn text-xl normal-case'>
          {"Maaaashi's Website"}
        </a>
      </div>
      <div className='navbar-end gap-4 md:inline-flex'>
        <div className='hidden gap-4 md:inline-flex'>
          <Link href='/' className='btn-primary btn'>
            Home
          </Link>
          <Link href='/profile' className='btn-primary btn'>
            Profile
          </Link>
          <Link href='/qiita' className='btn-primary btn'>
            Qiita
          </Link>
          <Link href='/works' className='btn-primary btn'>
            Works
          </Link>
          <div className='dropdown dropdown-end'>
            <label tabIndex={0} className='btn'>
              Theme
            </label>
            <ul
              tabIndex={0}
              className='dropdown-content menu rounded-box h-44 w-fit flex-nowrap overflow-y-auto bg-base-100 p-2 shadow'
            >
              {listTheme.map((theme, index) => (
                <li key={index} data-theme={theme}>
                  <button data-set-theme={theme} data-act-class='border'>
                    <span className='h-5 w-5 bg-primary'></span>
                    <span className='h-5 w-5 bg-secondary'></span>
                    <span className='h-5 w-5 bg-success'></span>
                    <span className='h-5 w-5 bg-neutral'></span>
                    {theme.toUpperCase()}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className='avatar'>
          <div className='w-full rounded-full'>
            <a href='https://twitter.com/pg_maaaashi' target='_blank'>
              <AiFillTwitterCircle size='30px' color='#1877f2' />
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header
