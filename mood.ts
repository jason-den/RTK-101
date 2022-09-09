import { createSlice } from '@reduxjs/toolkit';

export const MOODS = {
  SAD: 'sad',
  SHOCKED: 'shocked',
  HAPPY: 'happy',
  BLISSFUL: 'blissful',
  LOVESTRUCK: 'lovestruck',
  EXCITED: 'excited',
  KO: 'ko',
};

const flappyModeSlice = createSlice({
  name: 'Mode',
  initialState: { mood: MOODS.SAD },
  reducers: {
    updateMood: (state, action) => {
      state.mood = action.payload;
    },
  },
});

export const { updateMood } = flappyModeSlice.actions;
export default flappyModeSlice.reducer;
