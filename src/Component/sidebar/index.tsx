import { Box, Typography } from "@mui/material";
import homeIcon from "../../assets/icons/icon-nav-home.svg";
import movieIcon from "../../assets/icons/icon-nav-movies.svg";
import tvSeriesIcon from "../../assets/icons/icon-nav-tv-series.svg";
import bookmarkIcon from "../../assets/icons/icon-nav-bookmark.svg";

import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
// import PigmentHidden from "@mui/material/PigmentHidden";

// import { Hidden } from "@mui/material";
const navlinks = [
  {
    name: "Home",
    Icon: homeIcon,
    link: "/",
  },

  {
    name: "Movies",
    Icon: movieIcon,
    link: "/movies",
  },

  {
    name: "TVseries",
    Icon: tvSeriesIcon,
    link: "/tvseries",
  },

  {
    name: "Bookmark",
    Icon: bookmarkIcon,
    link: "/bookmarks",
  },
];

function SideBar() {
  const { pathname } = useLocation();

  return (
    <Box
      sx={{
        backgroundColor: "#161d2f",
        padding: 2,
        borderRadius: 2,
        display: "flex",
        flexDirection: {
          xs: "row",
          lg: "column",
        },
        alignItems: "center",
        justifyContent: "space-between",
        width: {
          sm: "100%",
          lg: 200,
        },
        height:{
          lg:"100%"
        }
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: {
            xs: "row",
            lg: "column",
          },
          gap: 5,
          alignItems: {
            xs: "center",
            lg: "start",
          },
          width: "100%",
        }}
      >
        <Box sx={{ display: { xs: "none", md: "block" } }}>
          <Typography
            variant="h5"
            component="h1"
            my={2}
            fontWeight={400}
            fontSize={18}
          >
            MovieShowApp
          </Typography>
        </Box>

        <Box
          sx={{
            py: {
              xs: "0px",
              lg: "16px",
            },
            display: "flex",
            flexDirection: {
              xs: "row",
              lg: "column",
            },
            gap: 4,
          }}
        >
          {navlinks.map((item) => (
            <Link
              key={item.name}
              to={item.link}
              style={{ textDecoration: "none" }}
            >
              <Box
                sx={{
                  display: "flex",
                  // flexDirection: "column",
                  alignItems: "center",
                  gap: 2,
                  color: "white",
                  textDecoration: "none",
                  zIndex: 1,
                }}
              >
                <img
                  src={item.Icon}
                  alt={item.name}
                  style={{
                    width: "18px",
                    filter: `${
                      pathname === item.link
                        ? "invert(48%) sepia(14%) saturate(3166%) hue-rotate(215deg) brightness(91%) contrast(87%)"
                        : "invert(84%) "
                    }`,
                  }}
                />
                <Box sx={{ display: { xs: "none", md: "block" } }}>
                  <Typography>{item.name}</Typography>
                </Box>
              </Box>
            </Link>
          ))}
        </Box>
      </Box>
    </Box>
  );
}

export default SideBar;