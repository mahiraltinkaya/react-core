const useAlphaNumeric = () => {
  const isAlphaNumeric = (val) => {
    // Alphanumerics and white spaces allowed.
    if (/^[a-zA-Z0-9_  .]*$/i.test(val)) {
      return true;
    }
    return false;
  };

  return isAlphaNumeric;
};

export default useAlphaNumeric;
