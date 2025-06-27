'use client';
import { useCallback, useMemo, useRef, useState } from 'react';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import ImageKit from '@/components/ui/ImageKit';
import Button from '@/components/common/Button';
import { CommunityCategory } from '@/types/community';

const DATES = ['Tout', '2025', '2024', '2023', '2022', '2021', '2020', '2019'];
type DisplayType = 'list' | 'thumbnails';

type Props = {
    categories: CommunityCategory[];
}

const CommunauteTrieClient = ({ categories }: Props) => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const [searchActive, setSearchActive] = useState(false);
  const [isSearchEmpty, setIsSearchEmpty] = useState(true);

  const currentDisplayType = (searchParams?.get('display') as DisplayType) || 'thumbnails';
  const currentFilters = searchParams?.get('filters')?.split(',') || ['Tout'];
  const currentDate = searchParams?.get('date') || 'Tout';
  const currentSearch = useRef<HTMLInputElement>(null);

  const filterItems = useMemo(
    () => ['Tout', ...(categories?.map((category) => category.label) || [])],
    [categories]
  );

  const createQueryString = useCallback(
    (params: Record<string, string | string[] | null>) => {
      const current = new URLSearchParams(
        Array.from(searchParams?.entries() || [])
      );
      current.set('page', '1');

      Object.entries(params).forEach(([key, value]) => {
        if (!value) {
          current.delete(key);
        } else if (Array.isArray(value)) {
          current.set(key, value.join(','));
        } else {
          current.set(key, value);
        }
      });

      return current.toString();
    },
    [searchParams]
  );

  const handleButtonClick = (button: string | { label: string }) => {
    const buttonLabel = typeof button === 'string' ? button : button.label;
    let newFilters: string[];

    if (buttonLabel === 'Tout') {
      newFilters = ['Tout'];
    } else {
      newFilters = currentFilters.includes(buttonLabel)
        ? currentFilters.filter((b) => b !== buttonLabel)
        : [...currentFilters.filter((b) => b !== 'Tout'), buttonLabel];
    }

    if (newFilters.length === 0) newFilters = ['Tout'];

    // Vide le champ input
    if (currentSearch.current) {
      currentSearch.current.value = '';
      setIsSearchEmpty(true)
    }

    const newQueryString = createQueryString({
      filters: newFilters,
      search: null, 
    });

    router.replace(`${pathname}?${newQueryString}`, { scroll: false });
  };


  const handleSearch = (query: string) => {
    if (currentSearch.current) {
      currentSearch.current.value = query;
      
      if(currentSearch.current.value.trim() !== '')
        setIsSearchEmpty(false)
    }

    const newQueryString = createQueryString({
      filters: null,
      search: query.trim() || null,
    });

    router.replace(`${pathname}?${newQueryString}`, { scroll: false });
  };

  const handleDisplayType = (type: DisplayType) => {
    router.replace(`${pathname}?${createQueryString({ display: type })}`, { scroll: false });
  };

  const handleDateSelect = (date: string) => {
    router.replace(
      `${pathname}?${createQueryString({
        date: date === 'Tout' ? null : date,
      })}`,
      { scroll: false }
    );
  };

  return (
    <div className="w-full flex flex-col pt-4 justify-center items-start left-0 right-0">
      <div className="flex flex-col sm:flex-row gap-6 sm:gap-0 justify-between items-start w-full max-w-[1022px] mx-auto pt-6">
        <div className="flex flex-col sm:flex-row sm:flex-wrap justify-center sm:justify-start gap-3 w-full sm:w-auto">
          { filterItems.map((button, index) => (
                <Button
                  key={index}
                  onClick={() => handleButtonClick(button)}
                  active={isSearchEmpty ? currentFilters.includes(button) : false}
                >
                  {button}
                </Button>
              ))
          }
        </div>

        <div className="relative w-full flex flex-col-reverse md:flex-row items-center justify-start sm:w-auto sm:justify-end gap-3">
          <div className="flex flex-nowrap lg:flex-wrap mid-xl:flex-nowrap gap-3 max-w-full md:max-w-[252px]">
            <div className="relative h-[52px]">
              <button
              className={`flex flex-nowrap items-center justify-center transition-all duration-300 ease-in-out 
              w-auto h-[52px] sm:h-[52px] sm:w-auto px-6 py-3 sm:px-6 sm:py-3 rounded-full text-[#e9c0ea]
              bg-[#aa7fb9] hover:scale-105 hover:-translate-y-[3px]
              ${
              searchActive
                ? 'opacity-0 scale-90 absolute pointer-events-none w-0'
                : 'opacity-100'
              }`}
              onClick={() => {
                setSearchActive(true);
                setTimeout(() => {
                document
                  .querySelector<HTMLInputElement>('input[type="search"]')
                  ?.focus();
                }, 0);
              }}
              >
              <ImageKit
                src="/Images/icons/search.svg"
                alt="search"
                width={50}
                height={50}
                priority
                className="h-7 w-7 min-w-7"
              />
              </button>

              <input
              type="search"
              className={`outline-0 transition-all duration-300 ease-in-out
              h-[52px] sm:h-[52px] px-6 py-3 sm:px-6 sm:py-3 text-[20px]
              text-start rounded-full text-[#4f2273] bg-[#e9c0ea] border-[#aa7fb9] border
              [&::-webkit-search-cancel-button]:relative
              [&::-webkit-search-cancel-button]:appearance-none
              [&::-webkit-search-cancel-button]:h-5
              [&::-webkit-search-cancel-button]:w-5
              [&::-webkit-search-cancel-button]:cursor-pointer
              [&::-webkit-search-cancel-button]:bg-[url('data:image/svg+xml;charset=utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22%234f2273%22%3E%3Cpath%20d%3D%22M19%206.41L17.59%205%2012%2010.59%206.41%205%205%206.41%2010.59%2012%205%2017.59%206.41%2019%2012%2013.41%2017.59%2019%2019%2017.59%2013.41%2012z%22%2F%3E%3C%2Fsvg%3E')]
              ${
              searchActive
                ? 'w-[250px] opacity-100'
                : 'w-[0] opacity-0 pointer-events-none'
              }`}
              placeholder="Rechercher..."
              ref={currentSearch}
              onChange={(e) => handleSearch(e.target.value)}
              onBlur={() => setSearchActive(false)}
              />
            </div>
            <div
              className={`flex gap-3 transition-all duration-300 ease-in-out ${
                searchActive
                  ? 'opacity-0 scale-90 absolute pointer-events-none w-0'
                  : 'opacity-100'
              }`}
            >
              <Button
                active={currentDisplayType === 'list'}
                onClick={() => handleDisplayType('list')}
              >
                <ImageKit
                  src="/Images/icons/list-50.png"
                  alt="list views"
                  width={50}
                  height={50}
                  priority
                  className="h-7 w-7 min-w-7"
                />
              </Button>
              <Button
                active={currentDisplayType === 'thumbnails'}
                onClick={() => handleDisplayType('thumbnails')}
              >
                <ImageKit
                  src="/Images/icons/thumbnail-view-50.png"
                  alt="thumbnails views"
                  width={50}
                  height={50}
                  priority
                  className="h-7 w-7 min-w-7"
                />
              </Button>
            </div>
          </div>
          <div className="relative w-[175px] min-w-[175px] min-h-[52px]">
            <div className="absolute z-20 top-0 left-0 group w-full sm:w-auto bg-[#4f2273] rounded-[26px] overflow-hidden transition-all duration-300 ease-in-out max-h-[52px] hover:max-h-[380px]">
              <button className="w-full sm:w-auto min-w-[7rem] sm:min-w-[8rem] md:min-w-[9rem] h-[52px] sm:h-[52px] px-6 py-3 sm:px-6 sm:py-3 text-sm text-[#e9c0ea] font-medium flex justify-center items-center gap-2 text-center transition-all duration-200 ease-in-out">
                Trier par: date
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 transition-transform duration-300 ease-in-out group-hover:rotate-180"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              <div className="bg-[#aa7fb9] shadow-lg w-full">
                <ul className="text-white font-medium text-sm">
                  {DATES.map((date, index) => (
                    <li
                      key={date}
                      className={`px-4 py-2 hover:bg-[#4f2273] cursor-pointer border-t border-t-[#aa7fb9] whitespace-nowrap transition-colors ease-in-out
                      ${date == currentDate ? 'bg-[#4f2273]' : ''}
                    `}
                      onClick={() => handleDateSelect(date)}
                    >
                      {date}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommunauteTrieClient;