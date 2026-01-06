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
        className={`hover:bg-surface-hover hover:text-foreground focus:ring-primary flex h-9 w-full items-center justify-between rounded-md border bg-transparent px-3 py-2 text-sm shadow-sm transition-colors duration-200 ease-in-out focus:ring-1 focus:outline-none disabled:cursor-not-allowed disabled:opacity-50 ${isOpen ? 'bg-surface-active text-foreground' : 'text-muted-foreground'}`}
        aria-expanded={isOpen}
        aria-haspopup='listbox'
      >
        <span className='truncate font-medium'>{selectedLabel}</span>
        <span
          className={`icon-[iconamoon--arrow-down-2] transition-transform duration-200 ${
            isOpen ? 'text-primary rotate-180' : 'text-muted-foreground'
          }`}
          aria-hidden='true'
        />
      </button>

      {shouldRender && (
        <div
          onAnimationEnd={handleAnimationEnd}
          className={`bg-background border-border bg-popover absolute right-0 z-50 mt-1 max-h-60 w-full min-w-32 overflow-hidden rounded-md border shadow-lg ${
            isOpen ? 'animate-dropdown-in' : 'animate-dropdown-out'
          }`}
        >
          <div className='space-y-1 p-1'>
            {options.map((option) => (
              <div
                key={option.value}
                onClick={() => handleSelect(option.value)}
                role='option'
                aria-selected={selectedValue === option.value}
                className={`relative flex w-full cursor-pointer items-center rounded-sm px-4 py-2 text-sm transition-colors duration-200 ease-in-out outline-none select-none ${
                  selectedValue === option.value
                    ? 'bg-surface-active text-foreground font-medium'
                    : 'text-muted-foreground hover:bg-surface-hover hover:text-foreground'
                }`}
              >
                {selectedValue === option.value && (
                  <span className='bg-primary absolute left-1 h-4 w-1 rounded-full' />
                )}

                <span className='truncate'>{option.label}</span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
