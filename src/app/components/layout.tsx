'use client'
import {  useState } from "react";
import Link from "next/link";


export default function Layout({
    children,
  }: {
    children: React.ReactNode
  }) {
    
    const [isOpen, setIsOpen] = useState(false);
    
    const toggleMenu = () => {
      setIsOpen(!isOpen);
    };

    
    return (
      <div lang="en">
        <nav className={`w-full px-8 py-3  ${
                isOpen ? 'h-screen fixed top-0 left-0 bg-[#1f3d69]' : 'sticky h-20 top-0 bg-white'
              }`}>
          <div className="w-full flex items-center justify-between">
            <Link href={"/"}>
              <img src="/assets/logovino.png" alt="vino" className="w-12 h-12"/>
            </Link>
            <button onClick={toggleMenu}>
            <span
              className={`block h-1 w-6 transform transition duration-300 ${
                isOpen ? 'rotate-45 translate-y-1 bg-[#e3ded5]' : 'bg-black'
              }`}
            ></span>
            <span
              className={`block h-1 w-6  mt-1 transform transition duration-300 ${
                isOpen ? '-rotate-45 -translate-y-1 bg-[#e3ded5]' : 'bg-black'
              }`}
            ></span>
            </button>
          </div>
          {isOpen && (
            <div className="w-full mt-20">
              <ul className="text-[#e3ded5] text-5xl w-full flex flex-col items-center justify-between">
                <li className="pt-11">
                  <Link href={"/components/bio"} onClick={() => setIsOpen(false)} className="hover:underline">BIO</Link>
                </li>
                <li className="pt-11">
                  <Link href={"/components/what"} onClick={() => setIsOpen(false)} className="hover:underline">QUE HAGO?</Link>
                </li>
                <li className="pt-11">
                  <Link href={"/components/tips"}  onClick={() => setIsOpen(false)} className="hover:underline">ALE TIPS</Link>
                </li>
                <li className="pt-11">
                  <a href="#" className="hover:underline">CONTACTO</a>
                </li>
              </ul>
            </div>
          )}
        </nav>
        <div>{children}</div>
      </div>
    )
}