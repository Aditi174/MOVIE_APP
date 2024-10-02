import { useContext, useState } from "react";
import { MovieDataType } from "../../Interfaces";
import { MovieContext } from "../../context/Movie_context";
import Layout from "../../Layout";
import {
  Box,
  InputAdornment,
  InputBase,
  Paper,
  Typography,
} from "@mui/material";
import SearchIcon from "../../assets/icons/icon-search.svg";
import MovieList from "../../Component/movie-list";

function BookMark() {
  const [search, setSearch] = useState<string>("");
  const [searchList, setSearchList] = useState<MovieDataType[]>([]);
  const { state } = useContext(MovieContext);
  const { movies } = state;
  const bookMark = movies.filter((movie) => movie.isBookmarked);

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
            <Typography variant="h5" component="h1" my={6} fontWeight={400}>
              BookMarked
            </Typography>
            <MovieList recommendList={bookMark} />
          </Box>
        ) : (
          <Box width="100%">
            <Typography>
              Found {searchList.length} results for "{search}"{""}
            </Typography>
            <MovieList recommendList={searchList} />
          </Box>
        )}
      </Box>
    </Layout>
  );
}

export default BookMark;
