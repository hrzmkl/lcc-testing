'use client';

import { getCustomerTypeNumber } from "@/constants";
import { fetchCommunauteProfile } from "@/services/data";
import { PaginatedProfile } from "@/types/community";
import { useMemo, useCallback } from "react";
import useSWR from "swr";
import CommunauteCardListSkeleton from "../landingPage/CommunauteCardListSkeleton";
import CommunauteCardSkeleton from "../landingPage/CommunauteCardSkeleton";
import dynamic from "next/dynamic";
import { useRouter, useSearchParams, usePathname } from 'next/navigation';

const CommunauteCardList = dynamic(() => import('@/components/landingPage/CommunauteCardList'), {
  ssr: false,
  loading: () => <CommunauteCardListSkeleton />,
});

const CommunauteCard = dynamic(() => import('@/components/landingPage/CommunauteCard'), {
  ssr: false,
  loading: () => <CommunauteCardSkeleton />,
})

type DisplayType = 'list' | 'thumbnails';

const CommunityListingMain = () => {
    const router = useRouter();
    const pathname = usePathname();
    const searchParams = useSearchParams();

    const createQueryString = useCallback(
      (params: Record<string, string | string[] | null>) => {
        const current = new URLSearchParams(
          Array.from(searchParams?.entries() || [])
        );
  
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

    const displayType = searchParams?.get('display') as DisplayType || 'thumbnails';
    const activeFilter = useMemo(() => searchParams?.get('filters')?.split(',') || [], [searchParams]);
    const searchQuery = searchParams?.get('search') || '';
    const selectedDate = searchParams?.get('date') || 'Tout';
    const currentPage = parseInt(searchParams?.get('page') || '1');

    const sqlFilters = useMemo(() => {
      let sqlfilters = activeFilter
        .map((filter) => {
          const customerNumber = getCustomerTypeNumber(filter);
          return customerNumber ? `(t.customer_type:=:${customerNumber})` : null;
        })
        .filter(Boolean)
        .join(' OR ');

      if (selectedDate !== 'Tout') {
        sqlfilters += `${sqlfilters ? ' AND ' : ''}(t.date_carbone_killer:=:${selectedDate})`;
      }
      return sqlfilters;
    }, [activeFilter, selectedDate]);

    const swrKey = useMemo(() => ({
      url: 'api/communities',
      page: currentPage,
      search: searchQuery,
      filters: sqlFilters,
    }), [currentPage, searchQuery, sqlFilters]);

    const { data: communities, isLoading } = useSWR<PaginatedProfile>(
      swrKey,
      () => fetchCommunauteProfile(21, currentPage, searchQuery, sqlFilters),
      {
        keepPreviousData: true,
        revalidateOnFocus: false,
        onSuccess: (newData) => {
          if (currentPage > 1) {
            const prevData = communities?.data || [];
            newData.data = [...prevData, ...newData.data];
          }
        }
      }
    );

    const handleLoadMore = () => {
      router.replace(`${pathname}?${createQueryString({ page: (currentPage + 1).toString() || null })}`, { scroll: false });
    }
  
    const loading = isLoading && currentPage === 1;
    const loadingMore = isLoading && currentPage > 1;
    const disabledLoadingMore = loading || loadingMore || !communities?.pagination.has_next;
  
  return (
    <div className="w-full flex flex-col pb-8 justify-center items-start left-0 right-0 overflow-hidden">
      <div
        className={`w-full max-w-[1022px] mx-auto pt-[0.94rem] text-center  backdrop-blur-lg`}
      >
        {
          loading ? 
          ( displayType === 'list' ? <CommunauteCardListSkeleton /> : <CommunauteCardSkeleton /> )
          : communities && communities?.data.length !== 0
            ? (displayType === 'list'
              ? <CommunauteCardList data={communities.data} />
              : <CommunauteCard data={communities.data} />)
            : (<p className="mx-auto text-[20px] text-[#aa7fb9] py-6">Aucun contributeur trouvé</p>)
        }
      </div>
        {communities?.data.length !== 0 && (
        <button
          aria-label="Charger plus de contenu"
          onClick={handleLoadMore}
          disabled={disabledLoadingMore}
          className={`w-full mx-auto my-12 h-[52px] sm:h-[52px] sm:w-auto shadow-lg px-6 py-3 
            sm:px-6 sm:py-3 text-center rounded-full text-[#e9c0ea]
            transition-transform duration-300 will-change-transform
            ${!disabledLoadingMore ? 'hover:-translate-y-[3px] md:hover:scale-105 bg-[#4f2273]' : 'bg-[#aa7fb9]'}
            disabled:bg-[#aa7fb9]`}
        >
          {loadingMore ? 'Chargement...' : 'Afficher plus'}
        </button>)}
    </div>
  )
}

export default CommunityListingMain;