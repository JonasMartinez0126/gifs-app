

import { CustomHeader } from "./shared/components/CustomHeader"
import { SearchBar } from "./shared/components/SearchBar"
import { PreviousSearches } from "./gifs/components/PreviousSearches"
import { GifsList } from './gifs/components/GifsList';
import { useGifs } from "./gifs/hooks/useGifs";


export const GifsApp = () => {
    const { gifs, previousTerms, handleTermClicked, handleSearch } = useGifs();

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
