import { useState } from "react"

import { CustomHeader } from "./shared/components/CustomHeader"
import { SearchBar } from "./shared/components/SearchBar"
import { PreviousSearches } from "./gifs/components/PreviousSearches"
import { GifsList } from './gifs/components/GifsList';

import { getGifsByQuery } from "./gifs/actions/get-gifs-by-query.action"
import type { Gif } from "./gifs/interfaces/gif.interface";


export const GifsApp = () => {
    const [gifs, setGifs] = useState<Gif[]>([])
    const [previousTerms, setPreviousTerms] = useState<string[]>([]);


    const handleTermClicked = (term: string) => {
        console.log({ term });
    }

    const handleSearch = async (query: string = '') => {
        query = query.trim().toLowerCase();
        if (query.length === 0) return;

        if (previousTerms.includes(query)) return;

        setPreviousTerms([query, ...previousTerms].slice(0, 8));

        const gifs = await getGifsByQuery(query);

        setGifs(gifs);
    }

    return (
        <>
            {/* Header */}
            <CustomHeader title="Buscador de Gifs" description="Descubre y comparte un gif perfecto" />
            {/* Search Bar */}
            <SearchBar placeholder="Buscar Gifs" onQuery={handleSearch} />
            {/* Busqueda previas de Gifs */}
            <PreviousSearches searches={previousTerms} onLabelClicked={handleTermClicked} />
            {/* Gifs List */}
            <GifsList gifs={gifs} />
        </>
    )
}
