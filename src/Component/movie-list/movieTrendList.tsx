import { Box, Grid2, Paper } from "@mui/material";
import { MovieTrendListprops } from "../../Interfaces";
import MovieTrendCard from "../movie-cards/movieTrendCard";


function MovieTrendList({ trendingList }: MovieTrendListprops) {
  console.log("the trendingList movies are:", trendingList);

  return (
    <Box sx={{ display: "flex", gap: 2, overflowX: "scroll" }}>
      {trendingList.map((movie) => (
        <Grid2  key={movie.id}>
          <Paper elevation={0} sx={{backgroundColor: "transparent"}}>
            <MovieTrendCard movie={movie} />
          </Paper>
        </Grid2>
      ))}
    </Box>
  );
}

export default MovieTrendList;