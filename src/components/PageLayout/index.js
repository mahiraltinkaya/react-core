import {
  Helmet,
  Box,
  Container,
  Divider,
  Backdrop,
  CircularProgress,
} from "@components";
import Header from "components/header";
import Footer from "components/footer/footer";

function PageLayout({ children, title, open = false, handleClose }) {
  return (
    <>
      <Helmet>
        <title> {title || ""} | Rise</title>
      </Helmet>
      <Box height={"100vh"} px={{ xs: 2, sm: 2, md: 8 }}>
        <Backdrop
          sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
          open={open}
          onClick={handleClose}
        >
          <CircularProgress color="inherit" />
        </Backdrop>
        <Header></Header>
        <Divider />
        <Container maxWidth={"xl"} sx={{ pt: 6 }}>
          {children}
        </Container>
        <Footer />
      </Box>
    </>
  );
}

export default PageLayout;
