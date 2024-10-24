import BASE_URL from "../ BASE_URL";

const URL = `${BASE_URL}users/`;

export const getUsers = async function ({ role, limit, page }) {
  try {
    const response = await fetch(
      `${URL}?role=${role}&limit=${limit}&page=${page}`,
      {
        method: "GET",
        credentials: "include",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      },
    );

    if (response.status === 404)
      throw new Error(`No ${role.toLowerCase() + "'s"} found!`);

    if (!response.ok)
      throw new Error(`Failed to fetch ${role.toLowerCase()} data.`);

    const data = await response.json();

    return data;
  } catch (err) {
    console.log(err);
    return { err };
  }
};
