import { PayloadAction, createSlice } from '@reduxjs/toolkit';

import {
  RegisterPartyTypes,
  FinalTypes,
  FileStatusTypes,
  WithinOrNewReg,
  HowExistingMtgMove,
  PurchaseTypeNames,
  PurchaseType,
} from '@/types/generalTypes';

export interface UserSelectionState {
  currentSelectedSystem:
    | 'Linx-Homeline'
    | 'Linx-Residential'
    | 'Casper-Homeline'
    | 'Casper-Residential'
    | '';
  selectedSystem: 'Linx' | 'Casper' | '';
  selectedRegisterParty: RegisterPartyTypes;
  homelineOrResidential: 'Homeline' | 'Residential' | '';
  layerCount: number;
  ifBorrowerChange: boolean;
  borrowerOption: 'No Borrower Changes' | 'Borrower Changes' | '';
  rclOnly: boolean;
  holdingCompany: boolean;

  purchaseType: PurchaseTypeNames;
  purchaseTypeList: PurchaseType[];

  finalType: FinalTypes;
  isNewHomelineACRequired: boolean;

  havePrompt: boolean;
  promptsList: any[];

  fileOption: string;
  howExistingMtgMove: string;
  howExistingMtgMoveList: HowExistingMtgMove[];

  withinOrNewReg: 'Within' | 'New Reg' | '';
  withinOrNewRegList: WithinOrNewReg[];

  port: {
    isPort: boolean;
    portType: string;
    portTypesList: any[];
    adjustment: string;
    mortgageAmountAdjustmentList: any[];
  };

  fileStatus: FileStatusTypes;

  showConditionTextBox: boolean;
  showFundingNotesTextBox: boolean;
  showNotePadTextBox: boolean;
  fileOptionList: any[];
  registerPartiesList: any[];
  borrowerChangeList: any[];

  notes: {
    dummyState: boolean;
    notePadNotes: string;
  };
}

const initialState: UserSelectionState = {
  currentSelectedSystem: '',
  selectedSystem: '',
  selectedRegisterParty: '',
  homelineOrResidential: '',
  layerCount: 0,
  fileOption: '',
  rclOnly: false,
  holdingCompany: false,
  ifBorrowerChange: false,
  borrowerOption: '',

  purchaseType: '',
  purchaseTypeList: [],

  finalType: '',
  howExistingMtgMove: '',
  howExistingMtgMoveList: [],

  withinOrNewReg: '',
  withinOrNewRegList: [],

  port: {
    isPort: false,
    portType: '',
    portTypesList: [],
    adjustment: '',
    mortgageAmountAdjustmentList: [],
  },

  havePrompt: false,
  promptsList: [],

  fileStatus: '',
  isNewHomelineACRequired: false,
  showConditionTextBox: false,
  showFundingNotesTextBox: false,
  showNotePadTextBox: false,
  fileOptionList: [],
  registerPartiesList: [],
  borrowerChangeList: [],

  notes: {
    dummyState: false,
    notePadNotes: '',
  },
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
    setBorrowerOption: (state, action) => {
      state.borrowerOption = action.payload;
    },
    setFinalType: (state, action) => {
      state.finalType = action.payload;
    },
    setRclOnly: (state, action) => {
      state.rclOnly = action.payload;
    },
    setHoldingCompany: (state, action) => {
      state.holdingCompany = action.payload;
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
    setWithinOrNewReg: (state, action) => {
      state.withinOrNewReg = action.payload;
    },
    setWithinOrNewRegList: (state, action) => {
      state.withinOrNewRegList = action.payload;
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
    resetUserSelectionState: (state) => {
      return { ...initialState };
    },
    setNotes: (state, action) => {
      state.notes.dummyState = action.payload;
    },
    setNotePadNotes: (state, action) => {
      state.notes.notePadNotes = action.payload;
    },

    //Prompts
    setHavePrompt: (state, action) => {
      state.havePrompt = action.payload;
    },
    setPromptsList: (state, action) => {
      state.promptsList = action.payload;
    },

    setPurchaseType: (state, action) => {
      state.purchaseType = action.payload;
    },
    setPurchaseTypeList: (state, action) => {
      state.purchaseTypeList = action.payload;
    },
  },
});

export const {
  setLayerCount,
  setPurchaseType,
  setPurchaseTypeList,
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
  setBorrowerOption,
  setShowConditionTextBox,
  setShowFundingNotesTextBox,
  setShowNotePadTextBox,
  setFileOptionList,
  setRegisterPartiesList,
  setBorrowerChangeList,
  setWithinOrNewReg,
  setWithinOrNewRegList,
  setPortTypesList,
  setMortgageAmountAdjustmentList,
  setHowExistingMtgMove,
  setHowExistingMtgMoveList,
  setFileStatus,
  resetUserSelectionState,
  setNotes,
  setNotePadNotes,
  setHavePrompt,
  setPromptsList,
  setHoldingCompany,
} = UserSelectionSlice.actions;

export default UserSelectionSlice.reducer;
