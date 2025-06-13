import { useState, useEffect } from 'react';
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

const navigationLinks = [
  { name: 'Home', href: '#', id: 'home' },
  { name: 'About', href: '#about', id: 'about' },
  { name: 'Skills', href: '#skills', id: 'skills' },
  { name: 'Projects', href: '#projects', id: 'projects' },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function Navbar() {
  const [active, setActive] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = navigationLinks.map(link => document.getElementById(link.id.replace('#', '')));
      const scrollPosition = window.scrollY + 100; // Add offset for better accuracy

      sections.forEach(section => {
        if (section) {
          const sectionTop = section.offsetTop;
          const sectionHeight = section.offsetHeight;

          if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            setActive(section.id);
          }
        }
      });
    };

    // Add event listener for scroll
    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleLinkClick = (id) => {
    document.getElementById(id.replace('#', ''))?.scrollIntoView({ behavior: 'smooth' });
  };


  return (
    <Disclosure as="nav" className="sticky top-0 z-50 max-w-7xl mx-auto bg-[#121212]">
      <div className="mx-auto px-2 sm:px-6 lg:px-8 border-b border-gray-400 border-dotted">
        <div className="relative flex h-16 items-center justify-between">
          {/* Logo + Desktop Nav */}
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-between">
            <div className="flex sm:w-full items-center justify-center sm:justify-start">
              <h1 className="font-pacifico text-3xl">Ariva Alvitto</h1>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden sm:block">
              <div className="flex justify-center space-x-4">
                {navigationLinks.map((item) => (
                  <a
                    key={item.id}
                    href={item.href}
                    onClick={(e) => {
                      e.preventDefault(); // Prevent default anchor behavior
                      handleLinkClick(item.id);
                    }}
                    className={classNames(
                      active === item.id
                        ? 'text-mainaccent'
                        : 'text-gray-300 hover:text-mainaccent',
                      'rounded-md px-3 py-2 text-sm font-medium'
                    )}
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Mobile Hamburger Menu */}
          <div className="absolute inset-y-0 right-0 flex items-center sm:hidden">
            <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:text-mainaccent focus:ring-2 focus:ring-inset focus:ring-white focus:outline-hidden">
              <span className="absolute -inset-0.5" />
              <span className="sr-only">Open main menu</span>
              <Bars3Icon aria-hidden="true" className="block size-6 group-data-open:hidden" />
              <XMarkIcon aria-hidden="true" className="hidden size-6 group-data-open:block" />
            </DisclosureButton>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Panel */}
      <DisclosurePanel className="sm:hidden mx-2">
        <div className="space-y-1 px-2 pt-2 pb-3 border-white rounded-md border-1 z-10">
          {navigationLinks.map((item) => (
            <DisclosureButton
              key={item.id}
              as="a"
              href={item.href}
              onClick={(e) => {
                e.preventDefault(); // Prevent default anchor behavior
                handleLinkClick(item.id);
              }}
              className={classNames(
                active === item.id
                  ? 'text-mainaccent bg-gray-900'
                  : 'text-gray-300 hover:text-mainaccent hover:bg-gray-900',
                'block rounded-md px-3 py-2 text-base font-medium'
              )}
            >
              {item.name}
            </DisclosureButton>
          ))}
        </div>
      </DisclosurePanel>
    </Disclosure>
  );
}