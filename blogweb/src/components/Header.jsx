// import React from 'react'
import { Button, Navbar, TextInput } from 'flowbite-react';
import { Link, useLocation } from 'react-router-dom'
import { AiOutlineSearch } from 'react-icons/ai'
import { FaMoon } from 'react-icons/fa'



export default function Header() {
    const path = useLocation().pathuser;
    return (
        <Navbar className="border-b-2 !mx-0 !px-4 ">
            <Link to="/" className='self-center whitespace-nowrap text-sm sm:text-xl font-semibold dark:text-white'>
                <span className='px-2 py-1 bg-gradient-to-r from-blue-700 via-blue-300 to-red-700 rounded-lg text-white '> Nagares</span>
                Blog
            </Link>
            <form>
                <TextInput
                    type='text'
                    placeholder='search...'
                    rightIcon={AiOutlineSearch}
                    className='hidden lg:inline' />
            </form>
            <Button className='lg:hidden w-12 h-9 color-gray bg-slate-600'>
                <AiOutlineSearch />
            </Button>
            <div className='flex gap-2 md:order-2'>
                <Button className='rounded-full self-center dark:bg-white bg-black hidden sm:inline'>
                    <FaMoon />
                </Button>
                <Link to='/Signin'>
                    <Button className='bg-blue-800 rounded-lg '>Signin</Button>
                </Link>
                <Navbar.Toggle></Navbar.Toggle>
            </div>
            <Navbar.Collapse>
                <Navbar.Link active={path === "/"} as={'div'}>
                    <Link to='/'>Home</Link>
                </Navbar.Link>
                <Navbar.Link active={path === "/about"} as={'div'}>
                    <Link to='/about'>About</Link>
                </Navbar.Link>
                <Navbar.Link active={path === "/projects"} as={'div'}>
                    <Link to='/projects'>Projects</Link>
                </Navbar.Link>
            </Navbar.Collapse>
        </Navbar>
    )
}
