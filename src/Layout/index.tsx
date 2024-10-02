import SideBar from "../Component/sidebar";
import { Layoutprops } from "../Interfaces";
import { Box } from "@mui/material";

function Layout({ children }: Layoutprops) {
  return (
    <Box
      sx={{
        backgroundColor: "#10141F",
        display: "flex",
        flexDirection: {
          xs: "column",
          md: "row",
          lg: "row",
        },
        color: "white",
        padding: 3,
        gap: 3,
        overflowY: "hidden",
        height: "93.5vh",
        // width: "100%",
      }}
    >
      <SideBar />
      <Box sx={{ width: "100%", overflowY: "scroll" }}>{children}</Box>
    </Box>
  );
}

export default Layout;
