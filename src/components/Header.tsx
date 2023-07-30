import { FC, useEffect } from 'react'
import {
  AiFillGithub,
  AiFillTwitterCircle,
  AiOutlineCheck,
} from 'react-icons/ai'
import { BsPalette2 } from 'react-icons/bs'
import { MdOutlineArticle } from 'react-icons/md'
import { GoProjectSymlink } from 'react-icons/go'
import { themeChange } from 'theme-change'
import Link from 'next/link'
import rep from '@/libs/images/rep.jpg'
import Image from 'next/image'
import { SiAboutdotme, SiQiita } from 'react-icons/si'
import { HiOutlineSquares2X2 } from 'react-icons/hi2'

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

  const themeList = () => {
    return (
      <ul
        tabIndex={0}
        className='dropdown-content menu rounded-box h-[70vh] max-h-96 w-fit flex-nowrap overflow-y-auto bg-base-300 p-2 shadow'
      >
        {listTheme.map((theme, index) => (
          <li key={index} data-theme={theme} className='my-1 bg-transparent'>
            <button
              className='flex justify-between rounded-lg bg-base-100'
              data-set-theme={theme}
              data-act-class='[&_svg]:visible'
            >
              <AiOutlineCheck className='check invisible' />
              {theme.toUpperCase()}
              <div className='flex gap-1'>
                <span className='inline-block h-5 w-3 rounded-full bg-primary'></span>
                <span className='inline-block h-5 w-3 rounded-full bg-secondary'></span>
                <span className='inline-block h-5 w-3 rounded-full bg-success'></span>
                <span className='inline-block h-5 w-3 rounded-full bg-neutral'></span>
              </div>
            </button>
          </li>
        ))}
      </ul>
    )
  }

  return (
    <div className='navbar bg-base-100'>
      <div className='navbar-start w-[22rem]'>
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
            <li>
              <Link href='/wordle'>Wordle</Link>
            </li>
            <li>
              <a target='_blank' href='https://twitter.com/pg_maaaashi'>
                Twitter
              </a>
            </li>
            <li>
              <a target='_blank' href='https://github.com/maaaashi'>
                GitHub
              </a>
            </li>
            <li>
              <a target='_blank' href='https://qiita.com/maaaashi'>
                Qiita
              </a>
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
            className='hidden md:block'
            style={{ marginRight: '5px', borderRadius: '50%' }}
          />
          <h1>{"Maaaashi's Website"}</h1>
        </Link>
      </div>
      <div className='navbar-end w-full gap-4 md:inline-flex'>
        <div className='hidden gap-4 md:inline-flex'>
          <Link
            href='/about-me'
            className='btn-info btn flex-col justify-around'
          >
            <SiAboutdotme size='20px' />
            About me
          </Link>
          <Link href='/qiita' className='btn-info btn flex-col justify-around'>
            <MdOutlineArticle size='20px' />
            Qiita
          </Link>
          <Link
            href='/mini-project'
            className='btn-info btn flex-col justify-around'
          >
            <GoProjectSymlink size='20px' />
            Mini Project
          </Link>
          <Link href='/wordle' className='btn-info btn flex-col justify-around'>
            <HiOutlineSquares2X2 size='20px' />
            Wordle
          </Link>
          <div className='dropdown-end dropdown'>
            <label tabIndex={0} className='btn flex-col justify-around'>
              <BsPalette2 size='15px' />
              Theme
            </label>
            {themeList()}
          </div>
        </div>
        <div className='dropdown-end dropdown'>
          <div tabIndex={0} className='avatar md:hidden'>
            <label className='btn-ghost btn'>
              <BsPalette2 size='20px' />
            </label>
          </div>
          {themeList()}
        </div>
        <div className='avatar hidden lg:block'>
          <div className='w-full rounded-full'>
            <a href='https://twitter.com/pg_maaaashi' target='_blank'>
              <AiFillTwitterCircle
                size='30px'
                color='#1877f2'
                className='rounded-full bg-white hover:bg-slate-300'
              />
            </a>
          </div>
        </div>
        <div className='avatar hidden lg:block'>
          <div className='w-full rounded-full'>
            <a href='https://github.com/maaaashi' target='_blank'>
              <AiFillGithub
                size='30px'
                color='#111'
                className='rounded-full bg-white hover:bg-slate-300'
              />
            </a>
          </div>
        </div>
        <div className='avatar mr-3 hidden lg:block'>
          <div className='w-full'>
            <a href='https://qiita.com/maaaashi' target='_blank'>
              <SiQiita
                size='30PX'
                color='white'
                style={{ backgroundColor: '#00c600' }}
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header
