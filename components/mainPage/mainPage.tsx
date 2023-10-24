import { RootState, AppDispatch } from '@/redux/store';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';

import RegisterParty from '../MainPageUserSelections/RegisterParty/RegisterParty';
import FileOption from '../MainPageUserSelections/FileOption/FileOption';
import BorrowerOption from '../MainPageUserSelections/BorrowerOption/BorrowerOption';
import Port from '../MainPageUserSelections/Port/Port';
import MortgageAmountAdjustment from '../MainPageUserSelections/Port/MortgageAmountAdjustment';
import HowExistingMtgMove from '../MainPageUserSelections/HowExistingMtgMove/HowExistingMtgMove';

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
    <div className="flex flex-col items-start space-y-6 min-h-screen p-20 pl-10 bg-gray-600 col-start-2 col-end-13 row-start-2 row-end-11 ">
      {/* to do: create components to match layers */}
      {layerCount >= 1 && <RegisterParty />}
      {layerCount >= 2 && <FileOption />}
      {layerCount >= 3 && borrowerChangeList && <BorrowerOption />}
      {layerCount >= 3 && port.isPort && <Port />}
      {layerCount >= 4 && port.mortgageAmountAdjustmentList && (
        <MortgageAmountAdjustment />
      )}
      {layerCount >= 4 && howExistingMtgMoveList && <HowExistingMtgMove />}
      {finalType && <FileStatus />}
    </div>
  );
};

export default MainPage;
