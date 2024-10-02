import { InputBase, Paper, Typography } from "@mui/material";
import InputAdornment from "@mui/material/InputAdornment";
import React, { useContext, useState } from "react";
import { Box } from "@mui/system";
import Layout from "../../Layout";
import SearchIcon from "../../assets/icons/icon-search.svg";
import MovieTrendList from "../../Component/movie-list/movieTrendList";
import MovieList from "../../Component/movie-list";
import { MovieDataType } from "../../Interfaces";
import { MovieContext } from "../../context/Movie_context";

function Home() {
  const [search, setSearch] = useState<string>("");
  const [searchList, setSearchList] = useState<MovieDataType[]>([]);
  const { state } = useContext(MovieContext);
  const { movies } = state;
  console.log(state);
  const trendingList = movies.filter((movie) => movie.isTrending === true);
  const recommended = movies.filter((movie) => movie.isTrending !== true);

  function onSubmitSearch(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    setSearch(e.target.value);
    const newList = movies.filter((movie) =>
      movie.title.toLowerCase().includes(search.toLowerCase())
    );
    setSearchList(newList);
  }

  return (
    <Layout>
      <Box>
        <Paper
          component="form"
          sx={{
            display: "flex",
            alignItems: "center",
            borderRadius: "default",
            p: 1,
            backgroundColor: "#10141f",
            border: "none",
          }}
        >
          <InputBase
            type="text"
            placeholder="search for movies or for TV-series"
            sx={{
              ml: 1,
              flex: 1,
              color: "white",
              border: "none",
              "& .MuiInputBase-input::placeholder": {
                color: "lightgray",
              },
            }}
            value={search}
            onChange={onSubmitSearch}
            startAdornment={
              <InputAdornment position="start">
                <img src={SearchIcon} width={20} height={20} />
              </InputAdornment>
            }
          />
        </Paper>
      </Box>
      <Box py={2} px={4}>
        {search === "" ? (
          <Box width="100%">
            <Box width="100%">
              <Typography variant="h5" component="h1" my={6} fontWeight={400}>
                Trending
              </Typography>
              <MovieTrendList trendingList={trendingList} />
            </Box>
            <Box width="100%">
              <Typography variant="h5" component="h1" my={6} fontWeight={400}>
                Recommended For You
              </Typography>
              <MovieList recommendList={recommended} />
            </Box>
          </Box>
        ) : (
          <Box width="100%">
            <Typography>{searchList.length} results found for "{search}"</Typography>
            <MovieList recommendList={searchList} />
          </Box>
        )}
      </Box>
    </Layout>
  );
}

export default Home;
