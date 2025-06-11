import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { useState, useEffect } from 'react'

const navigationLinks = [
  { name: 'Home', href: '#', id: 'home' },
  { name: 'About', href: '#about', id: 'about' },
  { name: 'Skills', href: '#skills', id: 'skills' },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Navbar() {
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    const handleScroll = () => {
      const sections = navigationLinks.map(link => document.getElementById(link.id)).filter(section => section);
      const scrollPosition = window.scrollY + window.innerHeight / 2;

      if (window.scrollY === 0) {
        setActiveSection('home');
        return;
      }

      for (const section of sections) {
        if (section.id === 'home') continue;
        const offsetTop = section.offsetTop;
        const offsetHeight = section.offsetHeight;

        if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
          setActiveSection(section.id);
          return;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <Disclosure as="nav" className="sticky top-0 z-50 max-w-7xl mx-auto bg-[#121212]">
      <div className="mx-auto px-2 sm:px-6 lg:px-8 border-gray-400 border-dotted border-b">
        <div className="relative flex h-16 items-center justify-between">
          {/* Center: Logo */}
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-between">
            <div className="flex sm:w-full items-center justify-center sm:justify-start">
              <h1 className='font-pacifico text-3xl'>Ariva Alvitto</h1>
            </div>

            {/* Desktop Nav */}
            <div className="hidden sm:block">
              <div className="flex justify-center space-x-4">
                {navigationLinks.map((item) => {
                  const current = item.id === activeSection;
                  return (
                    <a
                      key={item.name}
                      href={item.href}
                      aria-current={current ? 'page' : undefined}
                      className={classNames(
                        current ? ' text-mainaccent' : 'text-gray-300 hover:text-mainaccent',
                        'rounded-md px-3 py-2 text-sm font-medium',
                      )}
                    >
                      {item.name}
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Desktop: Notification icon (right) */}
            <div className="hidden sm:flex items-center pr-2 sm:ml-6 sm:pr-0">
            </div>
          </div>

          {/* Mobile: Hamburger menu (right) */}
          <div className="absolute inset-y-0 right-0 flex items-center sm:hidden">
            <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:text-mainaccent hover:cursor-pointer focus:ring-2 focus:ring-white focus:outline-hidden focus:ring-inset">
              <span className="absolute -inset-0.5" />
              <span className="sr-only">Open main menu</span>
              <Bars3Icon aria-hidden="true" className="block size-6 group-data-open:hidden" />
              <XMarkIcon aria-hidden="true" className="hidden size-6 group-data-open:block" />
            </DisclosureButton>
          </div>
        </div>
      </div>

      <DisclosurePanel className="sm:hidden">
        <div className="space-y-1 px-2 pt-2 pb-3 border-white rounded-md border-1 z-10">
          {navigationLinks.map((item) => {
            const current = item.id === activeSection;
            return (
              <DisclosureButton
                key={item.name}
                as="a"
                href={item.href}
                aria-current={current ? 'page' : undefined}
                className={classNames(
                  current ? ' text-mainaccent hover:bg-gray-900' : 'text-gray-300 hover:text-mainaccent hover:bg-gray-900',
                  'block rounded-md px-3 py-2 text-base font-medium',
                )}
              >
                {item.name}
              </DisclosureButton>
            );
          })}
        </div>
      </DisclosurePanel>
    </Disclosure>
  )
}
