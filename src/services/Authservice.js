import BASE_URL from "../ BASE_URL";

const URL = BASE_URL;

export async function loginAPI(email, password) {
  try {
    const object = { email, password };
    const res = await fetch(`${URL}auth/login`, {
      method: "POST",
      body: JSON.stringify(object),
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
      credentials: "include",
    });

    if (res.status === 401) {
      const data = await res.json();
      throw new Error(data.message);
    }
    if (!res.ok) throw new Error("Unexpected Error. Please Try again.");
    const data = await res.json();
    console.log(data);

    return data;
  } catch (err) {
    throw new Error(
      `${err || "Network Error. Please Connect to the internet"}`,
    );
  }
}

export async function signupAPI(name, email, password) {
  try {
    const object = {
      name,
      email,
      password,
    };
    const res = await fetch(`${URL}auth/signup`, {
      method: "POST",
      body: JSON.stringify(object),
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
      credentials: "include",
    });
    const data = await res.json();
    return data;
  } catch (err) {
    throw new Error(err);
  }
}

export async function signupAdmin(name, email, password) {
  try {
    const object = {
      name,
      email,
      password,
      token: localStorage.getItem("token"),
    };
    const res = await fetch(`${URL}auth/signupAdmin`, {
      method: "POST",
      body: JSON.stringify(object),
      headers: {
        "Content-Type": "application/json",

        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
      credentials: "include",
    });
    const data = await res.json();
    return data;
  } catch (err) {
    throw new Error(err);
  }
}

export const checkAuthStatus = async (role) => {
  const response = await fetch(`${URL}auth/check`, {
    method: "GET",
    credentials: "include",
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  });

  if (!response.ok) throw new Error("Please try again");
  const data = await response.json();
  console.log(data);

  if (data.status === "success") {
    console.log(data.data.role);

    if (
      data.data.role !== "ADMIN" &&
      data.data.role !== "PUBLISHER" &&
      data.data.role !== "USER"
    ) {
      throw new Error("You can't access this page.");
    }
    if (data.data.role === "USER" && (role === "PUBLISHER" || role === "ADMIN"))
      throw new Error("You can't access this page");

    if (data.data.role === "PUBLISHER" && role === "ADMIN")
      throw new Error("You can't access this page");
    return { user: data.data };
  }
  if (data.status !== "success") return false;

  return response.ok;
};

export const registerPublisher = async function ({ name, email, password }) {
  const object = {
    name,
    email,
    password,
  };
  console.log(object);

  const response = await fetch(`${URL}auth/signupPublisher`, {
    method: "POST",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
    body: JSON.stringify(object),
  });

  const data = await response.json();

  if (data.status === "fail") throw new Error(data.message);

  return data;
};
