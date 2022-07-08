export const signinService = async (email, password) => {
  const controller = new AbortController();
  setTimeout(() => {
    controller.abort();
  }, 10000);
  const res = await fetch("/api/auth/signin", {
    method: "POST",
    signal: controller.signal,
    body: JSON.stringify({
      email: email,
      password: password,
    }),
    headers: {
      "Content-Type": "application/json",
      domain: "localhost",
    },
  });
  const response = await res.json();
  if (response) {
    return response;
  } else if (!response) {
    throw new Error(data.message || "Something went wrong!");
  }
};
export const signupService = async (email, password, fullname) => {
  const controller = new AbortController();
  setTimeout(() => {
    controller.abort();
  }, 10000);
  const res = await fetch("/api/auth/signup", {
    method: "POST",
    signal: controller.signal,
    body: JSON.stringify({
      fullname: fullname,
      email: email,
      password: password,
    }),
    headers: {
      "Content-Type": "application/json",
      domain: "localhost",
    },
  });
  const response = await res.json();
  if (response) {
    return response;
  } else if (!response) {
    throw new Error(data.message || "Something went wrong!");
  }
};
