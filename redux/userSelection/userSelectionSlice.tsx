import { createSlice } from '@reduxjs/toolkit';

export interface UserSelectionState {
  currentSelectedSystem:
    | 'Linx-Homeline'
    | 'Linx-Residential'
    | 'Casper-Homeline'
    | 'Casper-Residential'
    | '';
  selectedSystem: 'Linx' | 'Casper' | '';
  selectedRegisterParty: 'Lawyer' | 'FCT' | 'FNF' | '';
  homelineOrResidential: 'Homeline' | 'Residential' | '';
  layerCount: number;
  ifBorrowerChange: boolean;
  finalType: string;
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

  showConditionTextBox: boolean;
  showFundingNotesTextBox: boolean;
  showNotePadTextBox: boolean;
  fileOptionList: any[];
  registerPartiesList: any[];
  borrowerChangeList: any[];
}

const initialState: UserSelectionState = {
  currentSelectedSystem: '',
  selectedSystem: '',
  selectedRegisterParty: '',
  homelineOrResidential: '',
  layerCount: 0,
  fileOption: '',
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

  isNewHomelineACRequired: false,
  showConditionTextBox: false,
  showFundingNotesTextBox: false,
  showNotePadTextBox: false,
  fileOptionList: [],
  registerPartiesList: [],
  borrowerChangeList: [],
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
} = UserSelectionSlice.actions;

export default UserSelectionSlice.reducer;
