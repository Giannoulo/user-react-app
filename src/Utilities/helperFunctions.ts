interface ErrorObject {
  firstNameError: string;
  lastNameError: string;
  emailError: string;
}
export function validateUserForm(
  firstName: string,
  lastName: string,
  email: string
): (boolean | ErrorObject)[] {
  const errors = {
    firstNameError: "",
    lastNameError: "",
    emailError: "",
  };
  let hasError = false;
  errors.firstNameError = checkName(firstName);
  errors.lastNameError = checkName(lastName, false);
  errors.emailError = checkEmail(email);
  for (const property in errors) {
    if (errors[property as keyof ErrorObject].length > 0) {
      hasError = true;
    }
  }
  return [hasError, errors];
}

function checkName(name: string, firstname = true): string {
  if (name.length === 0) {
    return `${firstname ? "First" : "Last"} name cannot be empty`;
  } else {
    return "";
  }
}

function checkEmail(email: string): string {
  const re = /\S+@\S+\.\S+/;
  if (re.test(email)) {
    return "";
  } else {
    return "Please insert a valid email address";
  }
}
