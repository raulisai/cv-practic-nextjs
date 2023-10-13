'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import style from './Navigation.module.css'

const links = [
    { href: '/', label: 'Home' },
    { href: '/blog', label: 'Blog' },
    { href: '/contact', label: 'Contact' }
];

export default function Navigation() {
    const pathname = usePathname();


    return (
        <nav className="flex justify-end mt-10 me-36">
        <ul className="flex items-center">
            {links.map(({ href, label }) => (      
          <li className="mr-5" key={href}>
            <Link className={`${style.link} text-white hover:text-gray-600 ${pathname === href ? style.active : ''}`} href={href}>
            {label}
            </Link>
          </li>
            ))}
        </ul>
      </nav>
        );
    
    }