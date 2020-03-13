import React, { createContext } from 'react';

export const SearchContext = createContext(null);

// export default ({ children }) => {
//     const [trailTags, setTrailTags] = React.useState([])
//     const searchStore = [trailTags, setTrailTags]
//     return <SearchContext.Provider value={searchStore}>{children}</SearchContext.Provider>
// }
