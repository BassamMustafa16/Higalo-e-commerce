type Fields = {
  firstName?: string;
  lastName?: string;
  email?: string;
  password?: string;
  confirmPassword?: string;
};

export function validateFields(fields: Fields) {
  const errors: { [key: string]: string } = {};

  const capitalRegex = /[A-Z]/;
  const numberRegex = /[0-9]/;
  const specialCharRegex = /[^A-Za-z0-9]/;
  const minLength = 6;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  // First Name
  if ("firstName" in fields && !fields.firstName?.trim()) {
    errors.firstName = "First name is required.";
  }

  // Last Name
  if ("lastName" in fields && !fields.lastName?.trim()) {
    errors.lastName = "Last name is required.";
  }

  // Email
  if ("email" in fields) {
    if (!fields.email?.trim()) {
      errors.email = "Email is required.";
    } else if (!emailRegex.test(fields.email)) {
      errors.email = "Invalid email address.";
    }
  }

  // Password
  if ("password" in fields) {
    const password = fields.password || "";
    const hasCapital = capitalRegex.test(password);
    const hasNumber = numberRegex.test(password);
    const hasSpecial = specialCharRegex.test(password);
    const hasMinLength = password.length >= minLength;
    const validPassword = hasCapital && hasNumber && hasSpecial && hasMinLength;

    if (!password.trim()) {
      errors.password = "Password is required";
    } else if (!validPassword) {
      errors.password =
        "Password must have a capital letter, number, special character, and be at least 6 characters.";
    }

    // Confirm Password
    if ("confirmPassword" in fields) {
      if (!fields.confirmPassword?.trim()) {
        errors.confirmPassword = "Confirmation Password is required";
      } else if (fields.confirmPassword !== password || !validPassword) {
        errors.confirmPassword = "Passwords do not match.";
      }
    }
  }

  return errors;
}