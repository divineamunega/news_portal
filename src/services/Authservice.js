const URL = "http://localhost:3000/api/v1/";

export async function loginAPI(email, password) {
  try {
    const object = { email, password };
    console.log(object);

    const res = await fetch(`${URL}auth/login`, {
      method: "POST",
      body: JSON.stringify(object),
      headers: {
        "Content-Type": "application/json",
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

export async function validateSignup(name, email, password) {
  try {
    const object = { name, email, password };
    const res = await fetch(`${URL}auth/signup`, {
      method: "POST",
      body: JSON.stringify(object),
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
    });
    const data = await res.json();
    return data;
  } catch (err) {
    throw new Error("Network Error. Please Connect to the internet.");
  }
}

export const checkAuthStatus = async (role) => {
  const response = await fetch(`${URL}auth/check`, {
    method: "GET",
    credentials: "include",
  });

  if (!response.ok) throw new Error("Please try again");
  const data = await response.json();

  if (data.status === "success") {
    if (data.data.role !== role) throw new Error("You can't access this page.");

    return { user: data.data };
  }
  if (data.status !== "success") return false;

  return response.ok;
};
