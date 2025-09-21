'use client';

import { useTheme } from 'next-themes';
import { usePathname } from 'next/navigation';
import {
  BellIcon,
  ClockCounterClockwiseIcon,
  MoonIcon,
  SidebarIcon,
  StarIcon,
  SunIcon,
} from '@phosphor-icons/react';
import { CommandIcon, Search } from 'lucide-react';

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';
import { Button } from '@/components/ui/button';
import { SidebarTrigger } from '@/components/ui/sidebar';
import { capitalize } from '@/utils';

type Props = {
  onToggleRightSection: () => void;
};

function Header({ onToggleRightSection }: Props) {
  const { theme, setTheme } = useTheme();
  const pathname = usePathname();
  const pathSegments = pathname.split('/').filter(Boolean);

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <header className='bg-background flex h-16 shrink-0 items-center justify-between border-b px-4 sm:px-6'>
      {/* Left Section: Hamburger Menu (Mobile) & Breadcrumbs (Desktop) */}
      <div className='flex items-center gap-4'>
        {/* Hamburger menu trigger, visible only on screens smaller than md */}
        <div className='flex items-center gap-4'>
          <SidebarTrigger
            size={'lg'}
            icon={<SidebarIcon className='text-lg' weight='duotone' />}
          />

          <StarIcon className='text-lg' weight='duotone' />
        </div>

        {/* Breadcrumbs, hidden on screens smaller than md */}
        <div className='hidden md:block'>
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href='/' className='text-foreground'>
                  Dashboard
                </BreadcrumbLink>
              </BreadcrumbItem>
              {pathSegments.map((segment, index) => (
                <>
                  <BreadcrumbSeparator key={index}>/</BreadcrumbSeparator>
                  <BreadcrumbItem>
                    <BreadcrumbLink
                      href={`/${pathSegments.slice(0, index + 1).join('/')}`}
                      className='text-foreground'
                    >
                      {capitalize(segment)}
                    </BreadcrumbLink>
                  </BreadcrumbItem>
                </>
              ))}
            </BreadcrumbList>
          </Breadcrumb>
        </div>
      </div>

      {/* Right Section: Search and Action Icons */}
      <div className='flex items-center gap-2'>
        {/* Full search bar for desktop, hidden on screens smaller than md */}
        <div className='bg-muted hidden items-center rounded-md px-2 py-2 md:flex'>
          <Search size={20} className='text-muted-foreground mr-2' />
          <input
            type='text'
            placeholder='Search...'
            className='placeholder:text-muted-foreground w-32 bg-transparent text-sm transition-all focus:w-48 focus:ring-0 focus:outline-none'
          />
          <div className='text-muted-foreground ml-2 flex items-center gap-1 text-xs'>
            <CommandIcon size={12} />/
          </div>
        </div>

        {/* Search icon button for mobile, visible only on screens smaller than md */}
        <Button variant='ghost' size='icon' className='md:hidden'>
          <Search className='text-lg' />
        </Button>

        {/* Theme, History, and Notification Buttons */}
        <Button onClick={toggleTheme} variant='ghost' size='icon'>
          {theme === 'light' ? (
            <SunIcon className='text-lg' weight='duotone' />
          ) : (
            <MoonIcon className='text-lg' weight='duotone' />
          )}
        </Button>
        <Button variant='ghost' size='icon'>
          <ClockCounterClockwiseIcon className='text-lg' weight='duotone' />
        </Button>
        <Button variant='ghost' size='icon'>
          <BellIcon className='text-lg' weight='duotone' />
        </Button>

        {/* Right Section Toggle Button */}
        <Button variant='ghost' size='icon' onClick={onToggleRightSection}>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='32'
            height='32'
            fill='currentColor'
            viewBox='0 0 256 256'
          >
            <path d='M216,40H40A16,16,0,0,0,24,56V192a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A16,16,0,0,0,216,40Zm0,16V192H160V56ZM40,56H144V192H40Z'></path>
          </svg>
        </Button>
      </div>
    </header>
  );
}

export default Header;
