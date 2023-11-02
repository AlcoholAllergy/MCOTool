import { RootState, AppDispatch } from '@/redux/store';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';

import RegisterParty from '../MainPageUserSelections/RegisterParty/RegisterParty';
import FileOption from '../MainPageUserSelections/FileOption/FileOption';
import BorrowerOption from '../MainPageUserSelections/BorrowerOption/BorrowerOption';
import Port from '../MainPageUserSelections/Port/Port';
import MortgageAmountAdjustment from '../MainPageUserSelections/Port/MortgageAmountAdjustment';
import HowExistingMtgMove from '../MainPageUserSelections/HowExistingMtgMove/HowExistingMtgMove';
import Prompt from '../mainPage/Prompt/Prompt';
import NoteArea from '../mainPage/NoteArea/NoteArea';

import FileStatus from './FileStatus/FileStatus';

const MainPage = () => {
  const {
    layerCount,
    finalType,
    borrowerChangeList,
    port,
    howExistingMtgMoveList,
  } = useAppSelector((state: RootState) => state.userSelect);

  return (
    <div className="flex flex-col min-h-screen p-20 pl-10 bg-gray-600 col-start-2 col-end-13 row-start-2 row-end-11">
      <div className="flex flex-col space-y-6">
        {/* to do: create components to match layers */}
        {layerCount >= 1 && <RegisterParty />}
        {layerCount >= 2 && <FileOption />}
        {layerCount >= 3 && borrowerChangeList.length != 0 && (
          <BorrowerOption />
        )}
        {layerCount >= 3 && port.isPort && <Port />}
        {layerCount >= 4 && port.mortgageAmountAdjustmentList.length != 0 && (
          <MortgageAmountAdjustment />
        )}
        {layerCount >= 4 && howExistingMtgMoveList.length != 0 && (
          <HowExistingMtgMove />
        )}
        {finalType && <FileStatus />}
      </div>
      <div className="flex-grow mb-10 mt-10">
        <Prompt />
      </div>
      <div className="relative bottom-8 lg:w-6/7">
        <NoteArea />
      </div>
    </div>
  );
};

export default MainPage;
