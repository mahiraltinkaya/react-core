import { colors } from "@components";

export const priorities = [
  {
    title: "Urgent",
    key: "urgent",
    priority: 10,
    color: colors.red[500],
  },
  {
    title: "Regular",
    key: "regular",
    priority: 5,
    color: colors.orange[500],
  },
  {
    title: "Trivial",
    key: "trivial",
    priority: 0,
    color: colors.blue[500],
  },
];

export const styles = {
  centerize: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  spaceBetween: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
};
