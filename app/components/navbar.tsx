'use client'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { useState } from "react";

import Logo from '../images/Logo.svg'
import { faBarsProgress } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
    const [open, setOpen] = useState(false);
    return (
        <>
        <nav className="hidden lg:block w-full fixed z-50 bg-black/50 backdrop-blur-sm text-white">
        <div className="w-full h-16 flex items-center justify-between px-10">
          <div className="flex items-center space-x-3 font-semibold">
            <img
              src={Logo}
              alt="Logo Gentra Karya"
              className="h-10 aspect-square object-contain"
            />
            <p>Gentra Karya</p>
          </div>
          <ul className="hidden lg:flex space-x-5">
            <li className="nav-item">
              <Link href="">
                Home
              </Link>
            </li>
            {/* TODO : Profil Dinas Scrolling  */}
            <li className="nav-item cursor-pointer hover:text-custom-yellow transition-colors">
            <Link href="">
                Profil
                </Link>
            </li>
            {/* TODO : Visi & Misi Scrolling */}
            <li className="nav-item cursor-pointer hover:text-custom-yellow transition-colors">
            <Link href="">
                Visi Misi
              </Link>
            </li>
            <li className="nav-item">
              {/* <Navlink route="/job-vacancy" name="Lowongan Kerja"></Navlink> */}
            </li>
            {/* TODO : Galery Scrolling */}
            <li className="nav-item">
              {/* <Navlink route="/" name="Galeri"></Navlink> */}
            </li>
            {/* TODO : Kontak Scrolling */}
            <li className="nav-item">
            <Link href="">
                Kontak
              </Link>
            </li>
          </ul>
          <div>
            <a
              href="/login"
              className="hidden lg:block px-5 py-1 rounded-md bg-custom-yellow/20 hover:bg-custom-yellow/50 transition-colors font-semibold border-2 border-custom-yellow"
            >
              Login
            </a>
            <button type="button" className="lg:hidden">
              <FontAwesomeIcon icon={faBarsProgress} />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Version */}
      <nav className="md:hidden w-full h-16 bg-custom-yellow backdrop-blur-sm fixed bottom-0 z-50 flex items-center px-5 text-xs rounded-t-xl">
        <div className="w-full flex justify-evenly font-semibold text-[10px]">
          <div className="h-14 aspect-square rounded-full bg-custom-yellow flex flex-col justify-center items-center border-black border-2">
            {/* <FontAwesomeIcon icon="fa-solid fa-house" /> */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="1em"
              viewBox="0 0 576 512"
            >
              <path d="M575.8 255.5c0 18-15 32.1-32 32.1h-32l.7 160.2c0 2.7-.2 5.4-.5 8.1V472c0 22.1-17.9 40-40 40H456c-1.1 0-2.2 0-3.3-.1c-1.4 .1-2.8 .1-4.2 .1H416 392c-22.1 0-40-17.9-40-40V448 384c0-17.7-14.3-32-32-32H256c-17.7 0-32 14.3-32 32v64 24c0 22.1-17.9 40-40 40H160 128.1c-1.5 0-3-.1-4.5-.2c-1.2 .1-2.4 .2-3.6 .2H104c-22.1 0-40-17.9-40-40V360c0-.9 0-1.9 .1-2.8V287.6H32c-18 0-32-14-32-32.1c0-9 3-17 10-24L266.4 8c7-7 15-8 22-8s15 2 21 7L564.8 231.5c8 7 12 15 11 24z" />
            </svg>
            <p>Home</p>
          </div>
          <button
            type="button"
            id="dropdownMenuButton1u"
            data-te-dropdown-toggle-ref
            aria-expanded="false"
            data-te-ripple-init
            data-te-ripple-color="light"
            className="h-14 aspect-square rounded-full bg-white flex flex-col justify-center items-center"
          >
            {/* <FontAwesomeIcon icon="fa-solid fa-house" /> */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="1em"
              viewBox="0 0 448 512"
            >
              <path d="M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zm96 112a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm80 104c0-30.9 25.1-56 56-56s56 25.1 56 56V350.1c0 36.4-29.5 65.9-65.9 65.9c-17.5 0-34.3-6.9-46.6-19.3L184.8 342l-28.1 56.3c-7.9 15.8-27.1 22.2-42.9 14.3s-22.2-27.1-14.3-42.9l48-96c4.6-9.2 13.3-15.6 23.5-17.3s20.5 1.7 27.8 9L240 306.7V248z" />
            </svg>
            <p>Aktifitas</p>
          </button>
          <div className="h-14 aspect-square rounded-full bg-white flex flex-col justify-center items-center">
            {/* <FontAwesomeIcon icon="fa-solid fa-house" /> */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="1em"
              viewBox="0 0 512 512"
            >
              <path d="M96 96c0-35.3 28.7-64 64-64H448c35.3 0 64 28.7 64 64V416c0 35.3-28.7 64-64 64H80c-44.2 0-80-35.8-80-80V128c0-17.7 14.3-32 32-32s32 14.3 32 32V400c0 8.8 7.2 16 16 16s16-7.2 16-16V96zm64 24v80c0 13.3 10.7 24 24 24H296c13.3 0 24-10.7 24-24V120c0-13.3-10.7-24-24-24H184c-13.3 0-24 10.7-24 24zm208-8c0 8.8 7.2 16 16 16h48c8.8 0 16-7.2 16-16s-7.2-16-16-16H384c-8.8 0-16 7.2-16 16zm0 96c0 8.8 7.2 16 16 16h48c8.8 0 16-7.2 16-16s-7.2-16-16-16H384c-8.8 0-16 7.2-16 16zM160 304c0 8.8 7.2 16 16 16H432c8.8 0 16-7.2 16-16s-7.2-16-16-16H176c-8.8 0-16 7.2-16 16zm0 96c0 8.8 7.2 16 16 16H432c8.8 0 16-7.2 16-16s-7.2-16-16-16H176c-8.8 0-16 7.2-16 16z" />
            </svg>
            <p>Berita</p>
          </div>
          <div className="h-14 aspect-square rounded-full bg-white flex flex-col justify-center items-center">
            {/* <FontAwesomeIcon icon="fa-solid fa-house" /> */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="1em"
              viewBox="0 0 448 512"
            >
              <path d="M48 80a48 48 0 1 1 96 0A48 48 0 1 1 48 80zM0 224c0-17.7 14.3-32 32-32H96c17.7 0 32 14.3 32 32V448h32c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H64V256H32c-17.7 0-32-14.3-32-32z" />
            </svg>
            <p>Tentang</p>
          </div>
          <a
            href="/login"
            className="h-14 aspect-square rounded-full bg-white flex flex-col justify-center items-center"
          >
            {/* <FontAwesomeIcon icon="fa-solid fa-house" /> */}
            <div className="text-base">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="1em"
                viewBox="0 0 448 512"
              >
                <path d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z" />
              </svg>
            </div>
            <p>Akun</p>
          </a>
        </div>
      </nav>

      <ul
        className="absolute z-[1000] float-left m-0 hidden min-w-max list-none overflow-hidden rounded-lg border-none bg-white bg-clip-padding text-left text-base shadow-lg dark:bg-neutral-700 [&[data-te-dropdown-show]]:block"
        aria-labelledby="dropdownMenuButton1u"
        data-te-dropdown-menu-ref
      >
        <li>
          <a
            className="block w-full whitespace-nowrap bg-transparent px-4 py-2 text-sm font-normal text-neutral-700 hover:bg-neutral-100 active:text-neutral-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-neutral-400 dark:text-neutral-200 dark:hover:bg-neutral-600"
            href="#"
            data-te-dropdown-item-ref
          >
            Action
          </a>
        </li>
        <li>
          <a
            className="block w-full whitespace-nowrap bg-transparent px-4 py-2 text-sm font-normal text-neutral-700 hover:bg-neutral-100 active:text-neutral-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-neutral-400 dark:text-neutral-200 dark:hover:bg-neutral-600"
            href="#"
            data-te-dropdown-item-ref
          >
            Another action
          </a>
        </li>
        <li>
          <a
            className="block w-full whitespace-nowrap bg-transparent px-4 py-2 text-sm font-normal text-neutral-700 hover:bg-neutral-100 active:text-neutral-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-neutral-400 dark:text-neutral-200 dark:hover:bg-neutral-600"
            href="#"
            data-te-dropdown-item-ref
          >
            Something else here
          </a>
        </li>
      </ul></>
    )
}

export default Navbar