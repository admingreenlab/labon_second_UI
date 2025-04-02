'use client';

import { usePathname } from 'next/navigation';
import { useContext, useEffect, useState } from 'react';
import { SearchContext } from "@/components/context/SearchContext";
import { PolishProvider } from "@/components/context/PolishContext"; 


export function RouteChangeListener() {
    const { clearSearchState } = useContext(SearchContext);
    const pathname = usePathname();
    const [changes, setChanges] = useState(0);

    useEffect(() => {
        console.log(`Route changed to: ${pathname}`);
        if(pathname.startsWith('/serch')){
            console.log('not cleaer')
        }else{
            clearSearchState();
            console.log('cleared')
        }
        setChanges((prev) => prev + 1);
    }, [pathname]);

    return <></>;
}