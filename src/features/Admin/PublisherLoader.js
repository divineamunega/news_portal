import { getUsers } from "../../services/Userservice";

const loader = async function ({ request }) {
  const url = new URL(request.url);
  const page = url.searchParams.get("page") || 1; // Get page from query params
  let limit = url.searchParams.get("limit") || 5;
  limit = +limit < 5 ? 5 : limit;

  const data = await getUsers({ role: "PUBLISHER", limit, page });
  return data;
};

export default loader;
