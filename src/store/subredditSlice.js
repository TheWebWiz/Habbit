import { createSlice } from "@reduxjs/toolkit";
import subredditdata from "../components/assets/utils/data/subredditsdata";

const initialState = {
  subreddits: subredditdata,
};

const subredditSlice = createSlice({
  name: "subreddits",
  initialState,
});

export default subredditSlice.reducer;
