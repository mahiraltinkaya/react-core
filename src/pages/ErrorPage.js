import { useRouteError } from "react-router-dom";
import { Container, Grid, Link } from "@components";
import PageLayout from "components/PageLayout";

import { styles } from "assets/constants";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <PageLayout>
      <Container>
        <Grid container spacing={8}>
          <Grid item xs={12} sx={styles.centerize}>
            <img
              src="https://static.vecteezy.com/system/resources/previews/006/549/647/original/404-landing-page-free-vector.jpg"
              alt="Page Not Found Image"
              width={340}
            />
          </Grid>
          <Grid item xs={12} sx={styles.centerize}>
            {error?.statusText}. <Link to="/">You can click to home </Link>
          </Grid>
        </Grid>
      </Container>
    </PageLayout>
  );
}
