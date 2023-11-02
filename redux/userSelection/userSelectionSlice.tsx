import { createSlice } from '@reduxjs/toolkit';

import { RegisterPartyType, FinalType } from '@/types/generalTypes';

export interface UserSelectionState {
  currentSelectedSystem:
    | 'Linx-Homeline'
    | 'Linx-Residential'
    | 'Casper-Homeline'
    | 'Casper-Residential'
    | '';
  selectedSystem: 'Linx' | 'Casper' | '';
  selectedRegisterParty: RegisterPartyType;
  homelineOrResidential: 'Homeline' | 'Residential' | '';
  layerCount: number;
  ifBorrowerChange: boolean;
  rclOnly: boolean;
  finalType: FinalType;
  isNewHomelineACRequired: boolean;

  fileOption: string;
  howExistingMtgMove: string;
  howExistingMtgMoveList: any[];

  port: {
    isPort: boolean;
    portType: string;
    portTypesList: any[];
    adjustment: string;
    mortgageAmountAdjustmentList: any[];
  };

  fileStatus: 'In Order' | 'OOO Review Complete' | 'OOO Review Incomplete' | '';

  showConditionTextBox: boolean;
  showFundingNotesTextBox: boolean;
  showNotePadTextBox: boolean;
  fileOptionList: any[];
  registerPartiesList: any[];
  borrowerChangeList: any[];
  promptsList: any[];
}

const initialState: UserSelectionState = {
  currentSelectedSystem: '',
  selectedSystem: '',
  selectedRegisterParty: '',
  homelineOrResidential: '',
  layerCount: 0,
  fileOption: '',
  rclOnly: false,
  ifBorrowerChange: false,
  finalType: '',
  howExistingMtgMove: '',
  howExistingMtgMoveList: [],
  port: {
    isPort: false,
    portType: '',
    portTypesList: [],
    adjustment: '',
    mortgageAmountAdjustmentList: [],
  },

  fileStatus: '',
  isNewHomelineACRequired: false,
  showConditionTextBox: false,
  showFundingNotesTextBox: false,
  showNotePadTextBox: false,
  fileOptionList: [],
  registerPartiesList: [],
  borrowerChangeList: [],
  promptsList: [],
};

const UserSelectionSlice = createSlice({
  name: 'userSelection',
  initialState,
  reducers: {
    setLayerCount: (state, action) => {
      state.layerCount = action.payload;
    },
    setCurrentSelectedSystem: (state, action) => {
      state.currentSelectedSystem = action.payload;
    },
    setSelectedSystem: (state, action) => {
      state.selectedSystem = action.payload;
    },
    setHomelineOrResidential: (state, action) => {
      state.homelineOrResidential = action.payload;
    },
    setCurrentRegisterParty: (state, action) => {
      state.selectedRegisterParty = action.payload;
    },
    setFileOption: (state, action) => {
      state.fileOption = action.payload;
    },
    setIfBorrowerChange: (state, action) => {
      state.ifBorrowerChange = action.payload;
    },
    setFinalType: (state, action) => {
      state.finalType = action.payload;
    },
    setRclOnly: (state, action) => {
      state.rclOnly = action.payload;
    },
    setIsPort: (state, action) => {
      state.port.isPort = action.payload;
    },
    setPortType: (state, action) => {
      state.port.portType = action.payload;
    },
    setAdjustment: (state, action) => {
      state.port.adjustment = action.payload;
    },
    setShowConditionTextBox: (state, action) => {
      state.showConditionTextBox = !state.showConditionTextBox;
    },
    setShowFundingNotesTextBox: (state, action) => {
      state.showFundingNotesTextBox = !state.showFundingNotesTextBox;
    },
    setShowNotePadTextBox: (state, action) => {
      state.showNotePadTextBox = !state.showNotePadTextBox;
    },
    setFileOptionList: (state, action) => {
      state.fileOptionList = action.payload;
    },
    setRegisterPartiesList: (state, action) => {
      state.registerPartiesList = action.payload;
    },
    setBorrowerChangeList: (state, action) => {
      state.borrowerChangeList = action.payload;
    },
    setHowExistingMtgMove: (state, action) => {
      state.howExistingMtgMove = action.payload;
    },
    setHowExistingMtgMoveList: (state, action) => {
      state.howExistingMtgMoveList = action.payload;
    },
    setPortTypesList: (state, action) => {
      state.port.portTypesList = action.payload;
    },
    setMortgageAmountAdjustmentList: (state, action) => {
      state.port.mortgageAmountAdjustmentList = action.payload;
    },
    setFileStatus: (state, action) => {
      state.fileStatus = action.payload;
    },
    setPromptsList: (state, action) => {
      state.promptsList = action.payload;
    },
    resetUserSelectionState: (state) => {
      return { ...initialState };
    },
  },
});

export const {
  setLayerCount,
  setCurrentSelectedSystem,
  setSelectedSystem,
  setHomelineOrResidential,
  setCurrentRegisterParty,
  setFileOption,
  setFinalType,
  setIsPort,
  setPortType,
  setRclOnly,
  setAdjustment,
  setIfBorrowerChange,
  setShowConditionTextBox,
  setShowFundingNotesTextBox,
  setShowNotePadTextBox,
  setFileOptionList,
  setRegisterPartiesList,
  setBorrowerChangeList,
  setPortTypesList,
  setMortgageAmountAdjustmentList,
  setHowExistingMtgMove,
  setHowExistingMtgMoveList,
  setFileStatus,
  resetUserSelectionState,
  setPromptsList,
} = UserSelectionSlice.actions;

export default UserSelectionSlice.reducer;
