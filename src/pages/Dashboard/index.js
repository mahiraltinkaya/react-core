import { useEffect } from "react";

import PageLayout from "components/PageLayout";
import CreateJob from "./components/CreateJob";
import jobService from "services/jobService";

function Dashboard({}) {
  useEffect(() => {
    const get = () => getJobs();

    get();

    return () => {};
  }, []);

  const getJobs = async () =>
    jobService.get().then((data) => {
      console.log(data);
    });

  return (
    <PageLayout title="Technology, Consulting & Academy">
      <CreateJob></CreateJob>
    </PageLayout>
  );
}

export default Dashboard;
