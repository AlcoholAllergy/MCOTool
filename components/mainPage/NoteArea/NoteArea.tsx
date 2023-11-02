import React from 'react';
import { RootState, AppDispatch } from '@/redux/store';
import { useAppSelector } from '@/redux/hooks';
import NotePad from './NotePad/NotePad';
import Condition from './Condition/Condition';
import FundingNotes from './FundingNotes/FundingNotes';
import BusinessNote from './BusinessNote/BusinessNote';

const NoteArea = () => {
  const { finalType, selectedRegisterParty, rclOnly, fileStatus } =
    useAppSelector((state: RootState) => state.userSelect);
  return (
    <div className="w-full ">
      <NotePad />
      {finalType && selectedRegisterParty === 'Lawyer' && <Condition />}
      {fileStatus && <BusinessNote />}
      {finalType && !rclOnly && <FundingNotes />}
    </div>
  );
};

export default NoteArea;
