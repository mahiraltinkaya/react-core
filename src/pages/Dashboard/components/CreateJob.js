import { useState } from "react";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import {
  Grid,
  TextField,
  MenuItem,
  Iconify,
  Typography,
  Button,
  LoadingButton,
} from "@components";
import { priorities } from "assets/constants";
import { useForm, Controller } from "react-hook-form";

import useAlphaNumeric from "hooks/useAlphaNumeric";

function CreateJob() {
  const isAlphaNumeric = useAlphaNumeric();
  const [content, setContent] = useState("");
  const [priority, setPriority] = useState("");

  const validationSchema = Yup.object({
    content: Yup.string().required("Job field is required."),
    priority: Yup.string().required("Priority field is required."),
  }).required();

  const { control, handleSubmit, reset } = useForm({
    resolver: yupResolver(validationSchema),
    defaultValues: {
      content: "",
      priority: "",
    },
  });
  const onSubmit = (val) => {
    console.log(val);
    reset();
  };
  const onErrors = (val) => {
    console.log(val);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit, onErrors)}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Typography variant="body-1" sx={{ fontWeight: 800 }}>
            Create New Job
          </Typography>
        </Grid>
        <Grid
          item
          xs={12}
          sm={7}
          md={8}
          sx={{ display: "flex", flexDirection: "row", alignItems: "start" }}
        >
          <Controller
            name="content"
            control={control}
            render={({ field, fieldState: { error } }) => (
              <TextField
                type="text"
                {...field}
                error={!!error}
                size="small"
                inputProps={{
                  maxLength: 255,
                }}
                helperText={error?.message || `Max 255 characters`}
                label="Job Name"
                fullWidth
                autoFocus
                onKeyDown={(e) => !isAlphaNumeric(e.key) && e.preventDefault()}
              />
            )}
          />
        </Grid>
        <Grid
          item
          xs={12}
          sm={5}
          md={4}
          sx={{ display: "flex", flexDirection: "row", alignItems: "start" }}
        >
          <Controller
            name="priority"
            control={control}
            render={({ field, fieldState: { error } }) => (
              <TextField
                type="text"
                {...field}
                error={!!error}
                select
                size="small"
                inputProps={{
                  maxLength: 255,
                }}
                helperText={error?.message}
                label="Select Priority"
                fullWidth
                autoFocus
              >
                {priorities.map((item, i) => (
                  <MenuItem key={i} sx={{ color: item.color }} value={item.key}>
                    {item.title}
                  </MenuItem>
                ))}
              </TextField>
            )}
          />

          <LoadingButton
            type={"submit"}
            sx={{ px: 4, mx: 2 }}
            loading={false}
            loadingPosition="start"
            color="primary"
            startIcon={
              <Iconify
                icon="material-symbols:add"
                style={{ color: "white" }}
              ></Iconify>
            }
            variant="contained"
            style={{ color: "white" }}
          >
            Create
          </LoadingButton>
        </Grid>
      </Grid>
    </form>
  );
}

export default CreateJob;
