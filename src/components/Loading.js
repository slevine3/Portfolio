import LinearProgress from "@mui/material/LinearProgress";
import Box from "@mui/material/Box";

const Loading = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#191919",
        height: "100vh",
        width: "100%",
      }}
    >
      <Box sx={{ width: "40%" }}>
        <h1 style={{ textAlign: "center", color: "white" }}>Loading...</h1>
        <LinearProgress />
      </Box>
    </Box>
  );
};

export default Loading;
