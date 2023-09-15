import { fetchCall } from ".";

const PLANS_URL =
  "https://run.mocky.io/v3/e4ca79b4-83cd-4dbe-9bca-f9b966b458eb";

export const plansApi = async () => {
  const response = await fetchCall({ url: PLANS_URL });
  const data = await response.json();

  return data?.plans || [];
};
