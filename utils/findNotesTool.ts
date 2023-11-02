import FUNDINGNOTES from '../static/fundingNotes';
import CONDITIONS from '../static/conditions';

import {
  RegisterPartyTypes,
  FinalTypes,
  hlpOrResTypes,
} from '../types/generalTypes';

export const getFundingNotes = (
  selectedRegisterParty: RegisterPartyTypes,
  finalType: FinalTypes,
) => {
  return (
    FUNDINGNOTES[selectedRegisterParty]?.[finalType] ??
    `${finalType} is missing`
  );
};

export const getConditions = (
  hlpOrRes: hlpOrResTypes,
  finalType: FinalTypes,
) => {
  return CONDITIONS[hlpOrRes]?.[finalType] ?? `${finalType} is missing`;
};
