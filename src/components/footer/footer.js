import { Box, Paper, Grid, Iconify } from "@components";
import { styles } from "assets/constants";

function Footer() {
  return (
    <Paper
      sx={{ position: "fixed", bottom: 0, left: 0, right: 0 }}
      elevation={3}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          height: 50,
          px: 4,
        }}
      >
        <Box>
          <a
            href="https://github.com/mahiraltinkaya/rise-assessment"
            target={"_blank"}
            style={styles.centerize}
          >
            <Iconify icon="mdi:git" style={{ fontSize: 22 }}></Iconify>
            Repository
          </a>
        </Box>
        <Box sx={{ ...styles.centerize, fontSize: 12, color: "grey" }}>
          <Iconify icon="ri:copyright-line"></Iconify>{" "}
          {`${new Date().getFullYear()} | Mahir Altınkaya`}
        </Box>
      </Box>
    </Paper>
  );
}

export default Footer;
