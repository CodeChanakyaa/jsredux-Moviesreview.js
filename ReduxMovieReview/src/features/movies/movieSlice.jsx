import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import MovieApi from '../../common/apis/MovieApi'
import { ApiKey } from '../../common/apis/MovieApiKey'

export const fetchAsyncMovies = createAsyncThunk("movies/fetchAsyncMovies", async (searchterm) => {
    const res = await MovieApi.get(`?apiKey=${ApiKey}&s=${searchterm}&type=movie`);
    return res.data;
});

export const fetchAsyncShows = createAsyncThunk("movies/fetchAsyncShows", async (searchterm) => {
    const res = await MovieApi.get(`?apiKey=${ApiKey}&s=${searchterm}&type=series`);
    return res.data;
});

export const fetchAsyncMovieOrShowDetail = createAsyncThunk("movies/fetchAsyncMovieOrShowDetail", async (id) => {
    const res = await MovieApi.get(`?apiKey=${ApiKey}&i=${id}&Plot=full`);
    return res.data;
});

const initialState = {
    movies: {},
    shows: {},
    selectMovieOrShow: {},
}

const movieSlice = createSlice({
    name: "movies",
    initialState,
    reducers: {
        removeSelectedMovieOrShow: (state) => {
            state.selectMovieOrShow = {};
        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchAsyncMovies.pending, () => {
            console.log("Movie Pending");
        }),
            builder.addCase(fetchAsyncMovies.fulfilled, (state, { payload }) => {
                console.log("Movie Fulfilled");
                return ({ ...state, movies: payload });
            }),
            builder.addCase(fetchAsyncMovies.rejected, () => {
                console.log("Movie Rejected");
            }),
            builder.addCase(fetchAsyncShows.fulfilled, (state, { payload }) => {
                console.log("Series Fulfilled");
                return ({ ...state, shows: payload });
            }),
            builder.addCase(fetchAsyncMovieOrShowDetail.fulfilled, (state, { payload }) => {
                console.log("Detail Fulfilled");
                return ({ ...state, selectMovieOrShow: payload });
            })
    }
})

export const { removeSelectedMovieOrShow } = movieSlice.actions;
export const getAllMovies = (state) => state.movies.movies;
export const getAllShows = (state) => state.movies.shows;
export const getSelectedMovieOrShow = (state) => state.movies.selectMovieOrShow;
export default movieSlice.reducer;