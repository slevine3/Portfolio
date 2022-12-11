import LinearProgress from "@mui/material/LinearProgress";
import Box from "@mui/material/Box";

const Loading = ({ loading, children }) => {
  return loading ? (
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
  ) : (
    children
  );
};

export default Loading;
