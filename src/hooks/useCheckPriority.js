import { priorities } from "assets/constants";

const useCheckPriority = () => {
  const checkPriority = (val) => {
    const value = priorities.find((item) => item.key === val).priority;
    return value;
  };
  return checkPriority;
};

export default useCheckPriority;
