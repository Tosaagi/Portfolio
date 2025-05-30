import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-black text-gray-300 py-8 mt-16 border-gray-800 border-t">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-6">
        
        {/* Branding */}
        <div className="text-lg font-semibold">
          © {new Date().getFullYear()} Vitto. All rights reserved.
        </div>

        {/* Social Icons */}
        <div className="flex space-x-4 text-xl">
          <a href="https://github.com/tosaagi" target="_blank" rel="noopener noreferrer" className="hover:text-white">
            <FaGithub />
          </a>
          <a href="https://linkedin.com/in/mochamad-ariva-alvitto" target="_blank" rel="noopener noreferrer" className="hover:text-white">
            <FaLinkedin />
          </a>
          <a href="https://instagram.com/_alvitto" target="_blank" rel="noopener noreferrer" className="hover:text-white">
            <FaInstagram />
          </a>
        </div>
      </div>
    </footer>
  );
}