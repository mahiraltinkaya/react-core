import {
  Helmet,
  Box,
  Container,
  Divider,
  Backdrop,
  CircularProgress,
  Snackbar,
  Alert,
} from "@components";
import Header from "components/header";
import Footer from "components/footer/footer";
import { useDispatch, useSelector } from "react-redux";
import { closeSnackbar } from "@store/slices/todoSlices";
import { useEffect } from "react";

function PageLayout({ children, title, open = false, handleClose }) {
  const dispatch = useDispatch();
  const { snackbar, severity, content } = useSelector((state) => state.todos);

  useEffect(() => {
    dispatch(closeSnackbar());
  }, []);

  return (
    <>
      <Helmet>
        <title> {title || ""} | Rise</title>
      </Helmet>
      <Snackbar
        open={snackbar}
        autoHideDuration={3000}
        onClose={() => dispatch(closeSnackbar())}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
      >
        <Alert onClose={handleClose} severity={severity} sx={{ width: "100%" }}>
          {content}
        </Alert>
      </Snackbar>
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
        <Container maxWidth={"xl"} sx={{ pt: 2, pb: 8, px: 2 }}>
          {children}
        </Container>
        <Footer />
      </Box>
    </>
  );
}

export default PageLayout;
