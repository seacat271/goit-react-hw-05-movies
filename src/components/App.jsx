// import axios from "axios";
import { Route, Routes } from "react-router-dom";
import { Layout } from "./Layout/Layout";

export const App =  () => {
 
  return (
    <div>
<Routes>
  <Route path="/" element={<Layout/>}></Route>
</Routes>
</div>
  );
};

// "https://api.themoviedb.org/3/trending/all/day?api_key=4e997d9f74601693c84e243277b61d66"