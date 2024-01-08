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

  type LinkType = {
    href: string
    value: string
    icon: JSX.Element
  }[]

  const linkListInnternal: LinkType = [
    { href: '/about-me', value: 'About me', icon: <SiAboutdotme size={20} /> },
    { href: '/qiita', value: 'Qiita', icon: <MdOutlineArticle size={20} /> },
    {
      href: '/catalog',
      value: 'SITE CATALOG',
      icon: <GoProjectSymlink size={20} />,
    },
  ]

  const linkListExternal: LinkType = [
    {
      href: 'https://twitter.com/pg_maaaashi',
      value: 'Twitter',
      icon: (
        <AiFillTwitterCircle
          size='30px'
          color='#1877f2'
          className='rounded-full bg-white hover:bg-slate-300'
        />
      ),
    },
    {
      href: 'https://github.com/maaaashi',
      value: 'GitHub',
      icon: (
        <AiFillGithub
          size='30px'
          color='#111'
          className='rounded-full bg-white hover:bg-slate-300'
        />
      ),
    },
    {
      href: 'https://qiita.com/maaaashi',
      value: 'Qiita',
      icon: (
        <SiQiita
          size='30PX'
          color='white'
          style={{ backgroundColor: '#00c600' }}
        />
      ),
    },
  ]

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
            {linkListInnternal.map(({ href, value }, index) => (
              <li key={index}>
                <Link href={href}>{value}</Link>
              </li>
            ))}
            {linkListExternal.map(({ href, value }, index) => (
              <li key={index}>
                <a target='_blank' href={href}>
                  {value}
                </a>
              </li>
            ))}
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
          {linkListInnternal.map(({ href, value, icon }, index) => (
            <Link
              href={href}
              className='btn-info btn flex-col justify-around'
              key={index}
            >
              {icon}
              {value}
            </Link>
          ))}
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
        <div className='mr-3 flex gap-3'>
          {linkListExternal.map(({ href, icon }, index) => (
            <div className='avatar hidden lg:block' key={index}>
              <div className='w-full rounded-full'>
                <a href={href} target='_blank'>
                  {icon}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Header
