export default function validateGreeting(greeting) {
  if (greeting === "") {
    return {
      type: "error",
      message: "Please enter greeting"
    };
  }

  if (greeting.length > 5) {
    return {
      type: "warn",
      message: "Your should limit your greeting to at most 5 chars"
    };
  }

  return {
    type: "ok"
  };
}
