import { createSlice } from '@reduxjs/toolkit';

const initialState = [
  {
    id: 1,
    username: 'user1',
    videoUrl: 'video1.mp4', 
    description: 'This is video 1',
    likes: 0,
    dislikes: 0,
  },

];

const videosSlice = createSlice({
  name: 'videos',
  initialState,
  reducers: {
    likeVideo: (state, action) => {
      const video = state.find((video) => video.id === action.payload);
      if (video) video.likes += 1;
    },
    dislikeVideo: (state, action) => {
      const video = state.find((video) => video.id === action.payload);
      if (video) video.dislikes += 1;
    },
  },
});

export const { likeVideo, dislikeVideo } = videosSlice.actions;
export default videosSlice.reducer;
