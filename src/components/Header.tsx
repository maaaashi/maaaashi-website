import { FC, useEffect } from 'react'
import { AiFillTwitterCircle } from 'react-icons/ai'
import { themeChange } from 'theme-change'
import Link from 'next/link'
import rep from '@/libs/images/rep.jpg'
import Image from 'next/image'

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
      <div className='navbar-start w-2/5'>
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
              <Link href='/about-me'>About me</Link>
            </li>
            <li>
              <Link href='/qiita'>Qiita</Link>
            </li>
            <li>
              <Link href='/mini-project'>Mini Project</Link>
            </li>
          </ul>
        </div>
        <Link
          href='/'
          className='btn-ghost btn flex items-center text-xl font-bold normal-case'
        >
          <Image
            src={rep}
            alt=''
            width='30'
            style={{ marginRight: '5px', borderRadius: '50%' }}
          />
          <h1>{"Maaaashi's Website"}</h1>
        </Link>
      </div>
      <div className='navbar-end w-3/5 gap-4 md:inline-flex'>
        <div className='hidden gap-4 md:inline-flex'>
          <Link href='/about-me' className='btn-primary btn'>
            About me
          </Link>
          <Link href='/qiita' className='btn-primary btn'>
            Qiita
          </Link>
          <Link href='/mini-project' className='btn-primary btn'>
            Mini Project
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
