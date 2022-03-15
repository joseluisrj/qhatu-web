const ValidateEmail = (text) => {
  const regex = /(^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$)/;
  return regex.test(text);
};

const ValidatePassword = (text) => {
  const regex = /.{6}/;
  return regex.test(text);
};

const RegexValidations = {
  ValidateEmail,
  ValidatePassword,
};

export default RegexValidations;
