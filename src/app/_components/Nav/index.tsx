'use client';

import React from 'react';


import {
  Navbar,
  NavbarBrand,
  NavbarMenuToggle,
  NavbarMenuItem,
  NavbarMenu,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
} from '@nextui-org/react';
import Image from 'next/image';
// import CompanyName from '../CompanyName/CompanyName';
import { usePathname } from 'next/navigation';
export default function Nav() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  type MenuItem = {
    name: string;
    href: string;
    external: boolean;
  };

  type MenuItems = MenuItem[];

  const menuItems: MenuItems = [
    { name: 'Home', href: '/product', external: false },
    { name: 'About', href: '/about', external: false  },
    { name: 'Contact', href: '/contact', external: false},
  ];

  const pathname = usePathname();

  return (
    <Navbar className="bg-black" isBordered isMenuOpen={isMenuOpen} onMenuOpenChange={setIsMenuOpen} maxWidth="full">
     <NavbarContent className="sm:hidden" 
    //  justify start sends hamburger menu to the left side the page  
     justify="start">
        <NavbarMenuToggle
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
        />
      </NavbarContent>
      <NavbarContent className="">
        <NavbarBrand>
          <Image
            src="/iball247.png"
            alt="iball247 Logo"
            width={124}
            height={50}
            quality={100}
          />
          
        </NavbarBrand>
        </NavbarContent>
        {
          <NavbarContent className="hidden md:flex gap-4" justify="end">
            {menuItems.map((link) => {
              const isActive = pathname.startsWith(link.href);
              return (
                <NavbarItem key={link.name} isActive={isActive}>
                  <Link color='primary'
                    href={link.href}
                    isExternal={link.external}
                  >
                    {link.name}
                  </Link>
                </NavbarItem>
              );
            })}
         </NavbarContent>
        }
      
      {/* <NavbarContent justify= "start"> */}
      <NavbarMenu className='bg-black'>
        <>
          {menuItems.map((link) => {
            return (
              <NavbarMenuItem key={link.name}>
                <Link color="primary"
                  href={link.href}
                  isExternal={link.external}
                >
                  {link.name}
                </Link>
              </NavbarMenuItem>
            );
          })}
        </>
      </NavbarMenu>
    {/* </NavbarContent> */}
    </Navbar>
  );
}