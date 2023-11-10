import FUNDINGNOTES from '../static/fundingNotes';
import CONDITIONS from '../static/conditions';
import BUSINESSNOTES from '../static/businessNotes';

import {
  RegisterPartyTypes,
  FinalTypes,
  hlpOrResTypes,
  FileStatusTypes,
} from '../types/generalTypes';

//find the correct Fundint notes
export const getFundingNotes = (
  selectedRegisterParty: RegisterPartyTypes,
  finalType: FinalTypes,
) => {
  return (
    FUNDINGNOTES[selectedRegisterParty]?.[finalType] ??
    `${finalType} is missing`
  );
};

//find the correct Conditions
export const getConditions = (
  hlpOrRes: hlpOrResTypes,
  finalType: FinalTypes,
) => {
  return CONDITIONS[hlpOrRes]?.[finalType] ?? `${finalType} is missing`;
};

//find the correct Business Notes

export const getBusinessNotes = (fileStatus: FileStatusTypes) => {
  return BUSINESSNOTES[fileStatus] ?? `${fileStatus} is missing`;
};
