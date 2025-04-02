'use client';

import { usePathname } from 'next/navigation';
import { useContext, useEffect, useState } from 'react';
import { SearchContext } from "@/components/context/SearchContext";
import { PolishContext } from "@/components/context/PolishContext";


export function RouteChangeListener() {
    const { clearSearchState } = useContext(SearchContext);
    const { clearPolishState } = useContext(PolishContext);
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

    useEffect(() => {
        console.log(`Route changed to: ${pathname}`);
        if(pathname.startsWith('/polish')){
            console.log('not cleaer')
        }else{
            clearPolishState();
            console.log('cleared')
        }
        setChanges((prev) => prev + 1);
    }, [pathname]);

    return <></>;
}