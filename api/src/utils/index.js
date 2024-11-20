const passwordValidator = require("password-validator");
const AWS = require("aws-sdk");

const validatePassword = (password) => {
  const schema = new passwordValidator();
  schema
    .is()
    .min(6) // Minimum 6 caractères
    .has()
    .letters() // Contient des lettres
    .has()
    .digits(); // Contient des chiffres

  if (!schema.validate(password)) {
    return "Password must be at least 6 characters long and include letters and numbers.";
  }
};

module.exports = {
  validatePassword,
};
