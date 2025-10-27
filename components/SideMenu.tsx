import * as React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Logo from './Logo';
import { headerData } from '@/constants/data';
import { X } from 'lucide-react';
import SocialMedia from './SocialMedia';
import { useOutsideClick } from '@/hooks';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const SideMenu: React.FC<SidebarProps> = ({ isOpen, onClose }) => {
  const pathname = usePathname();
  const sidebarRef = useOutsideClick<HTMLDivElement>(onClose);

  return (
    <div
      className={`fixed inset-y-0 h-screen left-0 z-50 w-full bg-black/50 ${
        isOpen ? 'translate-x-0' : '-translate-x-full'
      } hoverEffect`}
    >
      <div
        ref={sidebarRef}
        className="min-w-72 max-w-96 bg-black h-screen p-10 border-r border-r-shop-light-green flex flex-col gap-6"
      >
        <div className="flex items-center justify-between gap-5">
          <Logo className="text-white" spanDesign="group-hover:text-white" />
          <button
            onClick={onClose}
            className="hover:text-shop-light-green hoverEffect"
          >
            <X />
          </button>
        </div>
        <div className="flex flex-col space-y-3.5 font-semibold tracking-wide">
          {headerData?.map((item) => (
            <Link
              key={item?.title}
              href={item?.href}
              className={`hover:text-shop-light-green hoverEffect ${
                pathname === item?.href && 'text-white'
              }`}
            >
              {item?.title}
            </Link>
          ))}
        </div>
        <SocialMedia />
      </div>
    </div>
  );
};

export default SideMenu;
