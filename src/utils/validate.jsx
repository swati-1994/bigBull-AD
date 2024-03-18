export const checkValiddate = (email, password) => {
  const isEmailValid = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,})$/.test(
    email
  );
  const isPasswordValid =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);
  if (!isEmailValid) {
    return "Email id is not valid";
  }
  if (!isPasswordValid) {
    return "password is not valid. Hint: Minimum eight characters, at least one letter, one number and one special char";
  }
  return null;
};
