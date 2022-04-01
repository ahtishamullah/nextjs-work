import react from "react";
import Grid from "@mui/material/Grid";
import { styled } from "@mui/material/styles";
import { GetHook } from "../../hooks/getHooks";

const Header = () => {
  const { data: posts, status: postsStatus, error: postsError } = GetHook();
  console.log(posts);
  return <>{/* <Grid>{posts.map((posts) => console.log(posts))}</Grid> */}</>;
};
export default Header;
