import { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';
import { MoonIcon, SunIcon } from '@heroicons/react/outline';

export function Switcher() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const isDark = resolvedTheme === 'dark';

  const toggleTheme = () => {
    setTheme(isDark ? 'light' : 'dark');
  };

  return (
    <div className={'fixed top-1/4 -right-1 z-[999]'}>
      <button
        type={'button'}
        onClick={toggleTheme}
        aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
        className={[
          'relative inline-block rotate-90 cursor-pointer rounded-full flex justify-between items-center p-1 w-14 h-8',
          'bg-slate-900 dark:bg-white shadow dark:shadow-gray-800 border-0',
        ].join(' ')}
      >
        <MoonIcon className={'h-5 w-5 text-yellow-500'} />
        <SunIcon className={'h-5 w-5 text-yellow-500'} />
        <span
          className={[
            'ball bg-white dark:bg-slate-900 rounded-full absolute top-[2px] left-[2px] w-7 h-7',
            'transition-transform duration-200',
            isDark ? 'translate-x-6' : 'translate-x-0',
          ].join(' ')}
        />
      </button>
    </div>
  );
}
