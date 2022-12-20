import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogActions,
  Button,
} from "@components";
import { useTranslation } from "@i18n";
function DialogComponent(props) {
  const { title, handleCancel, handleSubmit, open, children, approveKey } =
    props;
  const { t } = useTranslation();

  return (
    <Dialog
      open={open}
      onClose={handleCancel}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">{title}</DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          {children}
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button color="error" onClick={handleCancel} variant="text">
          {t("cancel")}
        </Button>
        <Button color="primary" onClick={handleSubmit} variant="outlined">
          {t(approveKey)}
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export default DialogComponent;
