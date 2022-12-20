import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogActions,
  Button,
  Iconify,
  Divider,
} from "@components";

import { useTranslation } from "@i18n";
import { styles } from "assets/constants";
function DialogComponent(props) {
  const { title, handleCancel, handleSubmit, open, children, approveKey } =
    props;
  const { t } = useTranslation();

  return (
    <Dialog open={open} onClose={handleCancel}>
      <DialogTitle sx={{ ...styles.centerize, fontWeight: 800 }}>
        <Iconify
          icon={"mdi:warning-circle-outline"}
          style={{ fontSize: 30, color: "red" }}
        ></Iconify>
        {title}
      </DialogTitle>
      <DialogContent>
        <Divider></Divider>
      </DialogContent>
      <DialogContent>{children}</DialogContent>
      <DialogActions sx={{ ...styles.spaceBetween }}>
        <Button color="error" onClick={handleCancel} variant="text">
          {t("cancel")}
        </Button>
        <Button color="primary" onClick={handleSubmit} variant="outlined">
          {approveKey}
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export default DialogComponent;
