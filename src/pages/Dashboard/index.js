import { useEffect } from "react";

import PageLayout from "components/PageLayout";
import CreateJob from "./components/CreateJob";
import ListJobs from "./components/ListJobs";
import jobService from "services/jobService";

import { setJobsFromServer } from "@store/slices/todoSlices";
import { useDispatch, useSelector } from "react-redux";

function Dashboard({}) {
  const { todoList } = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  useEffect(() => {
    let mount = true;
    const getJobs = async () => {
      if (todoList.length === 0) {
        const data = await jobService.getJobList();
        dispatch(setJobsFromServer(data));
      }
    };
    getJobs();
    return () => {
      mount = false;
    };
  }, []);

  return (
    <PageLayout title="Technology, Consulting & Academy">
      <CreateJob todoList={todoList}></CreateJob>
      <ListJobs todoList={todoList}></ListJobs>
    </PageLayout>
  );
}

export default Dashboard;
