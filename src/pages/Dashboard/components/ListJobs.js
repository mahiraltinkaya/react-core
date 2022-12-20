import { useState, useMemo } from "react";
import {
  Table,
  TableContainer,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Toolbar,
  Typography,
  Box,
  Paper,
  Grid,
  TextField,
  MenuItem,
  InputAdornment,
  Iconify,
  IconButton,
  Card,
  CardContent,
  TableSortLabel,
} from "@components";

import DialogComponent from "components/dialog";

import { priorities, styles } from "assets/constants";

import useCheckPriority from "hooks/useCheckPriority";

import { updateJob, deleteJob } from "@store/slices/todoSlices";
import { useDispatch } from "react-redux";

function ListJobs({ todoList = [] }) {
  const dispatch = useDispatch();
  const [selected, setSelected] = useState(null);
  const [deleteModel, setDeleteModal] = useState(false);
  const [updateModal, setUpdateModal] = useState(false);
  const checkPriority = useCheckPriority();
  const [priority, setPriority] = useState("all");
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState(false);

  const StatusFinder = (props) => {
    const { priorityKey } = props;
    const obj = priorities.find((item) => item.key === priorityKey);
    return (
      <Box
        sx={{
          ...styles.centerize,
          borderRadius: 1,
          backgroundColor: obj.color,
          height: 35,
        }}
      >
        <Typography variant={"body2"} sx={{ fontWeight: 800, color: "white" }}>
          {obj.title}
        </Typography>
      </Box>
    );
  };

  const filteredList = useMemo(() => {
    if (priority !== "all") {
      return todoList.filter((item) => item.priority === priority);
    }

    if (search.trim() !== "") {
      return todoList.filter((item) =>
        String(Object.values(item)).toLowerCase().match(search.toLowerCase())
      );
    }

    if (sort && todoList.length > 0) {
      todoList = [...todoList].sort((a, b) => {
        if (checkPriority(a.priority) < checkPriority(b.priority)) {
          return -1;
        }
        if (checkPriority(a.priority) > checkPriority(b.priority)) {
          return 1;
        }
        return 0;
      });
    }

    if (!sort && todoList.length > 0) {
      todoList = [...todoList].sort((a, b) => {
        if (checkPriority(a.priority) > checkPriority(b.priority)) {
          return -1;
        }
        if (checkPriority(a.priority) < checkPriority(b.priority)) {
          return 1;
        }
        return 0;
      });
    }

    return todoList || [];
  }, [todoList, priority, search, sort]);

  const ContentBox = ({ children }) => (
    <Box>
      <Card elevation={0} sx={{ width: 340 }}>
        <CardContent>{children}</CardContent>
      </Card>
    </Box>
  );

  return (
    <Grid container sx={{ flexGrow: 1, mt: 2 }} spacing={3}>
      <Grid item xs={12} sx={{ ...styles.centerize }}>
        <Typography variant="body1" sx={{ fontWeight: 800 }}>
          Job List
        </Typography>
        <Box sx={{ flexGrow: 1 }}></Box>
        <Typography variant="body1" sx={{ fontWeight: 800 }}>
          {filteredList.length} / {`${todoList.length}`}
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Toolbar sx={{ backgroundColor: "#e4eafc", pt: 2 }}>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={7} md={8}>
              <TextField
                value={search}
                sx={{ background: "white" }}
                label="Search"
                size="small"
                fullWidth
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <Iconify icon={"ic:baseline-search"}></Iconify>
                    </InputAdornment>
                  ),
                }}
                onChange={(e) => {
                  setSearch(e.target.value);
                }}
              ></TextField>
            </Grid>
            <Grid item xs={12} sm={5} md={4}>
              <TextField
                value={priority || ""}
                type="text"
                sx={{ background: "white" }}
                select
                size="small"
                inputProps={{
                  maxLength: 255,
                }}
                label="Select Priority"
                fullWidth
                autoFocus
                onChange={(e) => {
                  setPriority(e.target.value);
                }}
              >
                {[{ title: "Priority(All)", key: "all" }, ...priorities].map(
                  (item, i) => (
                    <MenuItem
                      key={i}
                      sx={{ color: item.color }}
                      value={item.key}
                    >
                      {item.title}
                    </MenuItem>
                  )
                )}
              </TextField>
            </Grid>
          </Grid>
        </Toolbar>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow sx={{ backgroundColor: "#e4eafc" }}>
                <TableCell sx={{ width: "100%" }}>
                  <Typography variant={"body2"} sx={{ fontWeight: 800 }}>
                    Name
                  </Typography>
                </TableCell>
                <TableCell align="center">
                  <TableSortLabel
                    direction={sort ? "asc" : "desc"}
                    onClick={() => {
                      setSort(!sort);
                    }}
                  >
                    <Typography
                      variant={"body2"}
                      sx={{ fontWeight: 800, width: 100 }}
                    >
                      Priority
                    </Typography>
                  </TableSortLabel>
                </TableCell>
                <TableCell align="center">
                  <Typography
                    variant={"body2"}
                    sx={{ fontWeight: 800, width: 100 }}
                  >
                    Actions
                  </Typography>
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {filteredList.map((row, i) => (
                <TableRow
                  key={i}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {row.title}
                  </TableCell>
                  <TableCell align="center">
                    <StatusFinder priorityKey={row.priority}></StatusFinder>
                  </TableCell>
                  <TableCell align="center">
                    <IconButton
                      onClick={() => {
                        setSelected(row);
                        setUpdateModal(true);
                      }}
                    >
                      <Iconify icon={"material-symbols:edit-outline"}></Iconify>
                    </IconButton>
                    <IconButton
                      onClick={() => {
                        setSelected(row);
                        setDeleteModal(true);
                      }}
                    >
                      <Iconify
                        icon={"material-symbols:delete-outline-rounded"}
                      ></Iconify>
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Grid>

      {deleteModel && (
        <DialogComponent
          open={deleteModel}
          title={"Job Delete"}
          handleCancel={() => {
            setDeleteModal(false);
          }}
          handleSubmit={() => {
            dispatch(deleteJob(selected));
            setSelected(null);
            setDeleteModal(false);
          }}
          approveKey={"Onayla"}
        >
          <ContentBox>
            <Grid container>
              <Grid item>
                <Typography variant="body1" sx={{ fontWeight: 800 }}>
                  "{selected.title}"
                </Typography>{" "}
                görevi silinecektir. Onaylıyor musunuz?
              </Grid>
            </Grid>
          </ContentBox>
        </DialogComponent>
      )}

      {updateModal && (
        <DialogComponent
          open={updateModal}
          title={"Job Update"}
          handleCancel={() => {
            setUpdateModal(false);
          }}
          handleSubmit={() => {
            dispatch(updateJob(selected));
            setUpdateModal(false);
          }}
          approveKey={"Kaydet"}
        >
          <ContentBox>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  size={"small"}
                  value={selected.title}
                  disabled
                ></TextField>
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  size={"small"}
                  value={selected.priority}
                  select
                  onChange={(e) =>
                    setSelected({ ...selected, priority: e.target.value })
                  }
                >
                  {priorities &&
                    priorities.map((item) => (
                      <MenuItem
                        key={item.key}
                        value={item.key}
                        sx={{ color: item.color }}
                      >
                        {item.title}
                      </MenuItem>
                    ))}
                </TextField>
              </Grid>
            </Grid>
          </ContentBox>
        </DialogComponent>
      )}
    </Grid>
  );
}

export default ListJobs;
