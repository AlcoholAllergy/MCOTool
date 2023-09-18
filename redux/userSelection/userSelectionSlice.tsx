import { createSlice } from '@reduxjs/toolkit';
import { PayloadAction } from '@reduxjs/toolkit';

export interface UserSelectionState {
  selectedSystem: string;
  selectedRegisterParty: string;
  fileType: string;
}

const initialState: UserSelectionState = {
  selectedSystem: '',
  selectedRegisterParty: '',
  fileType: '',
};

const UserSelectionSlice = createSlice({
  name: 'userSelection',
  initialState,
  reducers: {
    setCurrentSystem: (state, action) => {
      state.selectedSystem = action.payload;
    },
    setCurrentRegisterParty: (state, action) => {
      state.selectedRegisterParty = action.payload;
    },
    setFileType: (state, action) => {
      state.fileType = action.payload;
    },
  },
});

export const { setCurrentSystem, setCurrentRegisterParty, setFileType } =
  UserSelectionSlice.actions;

export default UserSelectionSlice.reducer;
