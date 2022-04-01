import { useQuery } from "react-query";
import axios from "axios";
export const GetHook = () => {
  return useQuery("get", () =>
    axios
      .get("/db./posts")
      .then((res) => res.data)
      .catch(() => console.log("error"))
  );
};
