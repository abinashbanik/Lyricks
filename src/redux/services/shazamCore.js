import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';


// const options = {
//     method: 'GET',
//     headers: {
//       'X-RapidAPI-Key': '2a11fbe945mshb7b085f8974e442p14a272jsn12f73b1171a6',
//       'X-RapidAPI-Host': 'shazam-core.p.rapidapi.com'
//     }
//   };
  
//   fetch('https://shazam-core.p.rapidapi.com/v1/charts/world', options)
//     .then(response => response.json())
//     .then(response => console.log(response))
//     .catch(err => console.error(err));

    export const shazamCoreApi = createApi({
      reducerPath: 'shazamCoreApi',
      baseQuery: fetchBaseQuery({
        baseUrl:'https://shazam-core.p.rapidapi.com/v1',
        prepareHeaders: (headers) => {
          headers.set('X-RapidAPI-Key', '2a11fbe945mshb7b085f8974e442p14a272jsn12f73b1171a6');

          return headers;
        },
      }),
      endpoints: (builder) => ({
        getTopCharts: builder.query({ query: () => '/charts/world' }),
        getSongsByGenre: builder.query({ query: (genre) => `/charts/genre-world?genre_code=${genre}` }),
        getSongsByCountry: builder.query({ query: (countryCode) => `/charts/country?country_code=${countryCode}` }),
        getSongsBySearch: builder.query({ query: (searchTerm) => `/search/multi?search_type=SONGS_ARTISTS&query=${searchTerm}` }),
        getArtistDetails: builder.query({ query: (artistId) => `/artists/details?artist_id=${artistId}` }),
        getSongDetails: builder.query({ query: ({ songid }) => `/tracks/details?track_id=${songid}` }),
        getSongRelated: builder.query({ query: ({ songid }) => `/tracks/related?track_id=${songid}` }),
      }),
    });
    
    export const {
      useGetTopChartsQuery,
      useGetSongsByGenreQuery,
      useGetSongsByCountryQuery,
      useGetSongsBySearchQuery,
      useGetArtistDetailsQuery,
      useGetSongDetailsQuery,
      useGetSongRelatedQuery,
    } = shazamCoreApi;