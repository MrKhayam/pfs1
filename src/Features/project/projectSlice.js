import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    img: false,
    preview: '',
  projects: [
    {
      id: 1,
      pImg: "https://wallpapersok.com/images/high/aesthetic-boy-painting-iy0gc6ix3705yrvq.jpg",
    },
    {
      id: 2,
      pImg: "https://i.ytimg.com/vi/n5LG5sVL7Es/hq720.jpg?sqp=-oaymwE7CK4FEIIDSFryq4qpAy0IARUAAAAAGAAlAADIQj0AgKJD8AEB-AG2CIACgA-KAgwIABABGGUgXihUMA8=&rs=AOn4CLD5vshdPHLe5uc35KYuynu1Ti3ziQ",
    },
    {
      id: 3,
      pImg: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTz74pMx3xV4lAwrbOXavbk8ZviDCunSgjiyA&s",
    },
    {
      id: 4,
      pImg: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDYICZXvje9VKXKMoIDGdd_hJqzSighOYEEQ&s",
    },
    {
      id: 5,
      pImg: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQK3bnyCPIqKpHGaQpH9zvncxDzmJ7SSTZ1Wg&s",
    },
    {
      id: 6,
      pImg: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQK3bnyCPIqKpHGaQpH9zvncxDzmJ7SSTZ1Wg&s",
    },
  ],
};

export const projectSlice = createSlice({
  name: "project",
  initialState,
  reducers: {
    openImg: (state, action) => {
          state.img = true;
          state.preview = action.payload;
    },
    closeImg: (state) => {
      state.img = false;
    },
  },
});

export const { openImg, closeImg } = projectSlice.actions;
export default projectSlice.reducer;
