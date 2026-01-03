'use client';

import { useState, useRef, useEffect } from 'react';

interface Option {
  label: string;
  value: string;
}

interface SelectProps {
  options: Option[];
  placeholder?: string;
  defaultValue?: string;
  onChange?: (value: string) => void;
  className?: string;
}

export function Select({
  options,
  placeholder = 'Select an option',
  defaultValue = '',
  onChange,
  className = '',
}: SelectProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [shouldRender, setShouldRender] = useState(false);
  const [selectedValue, setSelectedValue] = useState(defaultValue);
  const containerRef = useRef<HTMLDivElement>(null);

  const selectedLabel =
    options.find((opt) => opt.value === selectedValue)?.label || placeholder;

  const handleSelect = (value: string) => {
    setSelectedValue(value);
    setIsOpen(false);
    if (onChange) {
      onChange(value);
    }
  };

  const toggleDropdown = () => {
    const nextState = !isOpen;
    if (nextState) {
      setShouldRender(true);
    }
    setIsOpen(nextState);
  };

  const handleAnimationEnd = () => {
    if (!isOpen) {
      setShouldRender(false);
    }
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className={`relative ${className}`} ref={containerRef}>
      <button
        type='button'
        onClick={toggleDropdown}
        className={`flex h-9 w-full items-center justify-between rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring disabled:cursor-not-allowed disabled:opacity-50 transition-colors duration-200 ease-in-out hover:bg-accent hover:text-foreground cursor-pointer ${
          isOpen ? 'ring-1 ring-ring text-foreground' : 'text-muted-foreground'
        }`}
        aria-expanded={isOpen}
        aria-haspopup='listbox'
      >
        <span className='truncate font-medium'>{selectedLabel}</span>
        <span
          className={`icon-[iconamoon--arrow-down-2] transition-transform duration-200 ${
            isOpen ? 'rotate-180' : ''
          }`}
          role='img'
          aria-hidden='true'
        />
      </button>

      {shouldRender && (
        <div
          onAnimationEnd={handleAnimationEnd}
          className={`absolute right-0 z-50 mt-1 max-h-60 w-full min-w-32 overflow-hidden rounded-md border border-border bg-popover text-popover-foreground shadow-lg ${
            isOpen ? 'animate-dropdown-in' : 'animate-dropdown-out'
          }`}
        >
          <div className='p-1 space-y-1'>
            {options.map((option) => (
              <div
                key={option.value}
                onClick={() => handleSelect(option.value)}
                role='option'
                aria-selected={selectedValue === option.value}
                className={`relative flex w-full cursor-pointer select-none items-center rounded-sm py-2 px-4 text-sm outline-none  data-disabled:pointer-events-none data-disabled:opacity-50 transition-colors duration-200 ease-in-out ${
                  selectedValue === option.value
                    ? 'bg-accent text-foreground font-medium'
                    : 'text-muted-foreground hover:bg-sidebar-accent hover:text-foreground'
                }`}
              >
                <span className='truncate'>{option.label}</span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
