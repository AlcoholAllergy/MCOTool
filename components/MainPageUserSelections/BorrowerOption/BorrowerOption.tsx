import { MouseEvent } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState, AppDispatch } from '@/redux/store';

import {
  setLayerCount,
  setIfBorrowerChange,
  setHowExistingMtgMoveList,
  setFinalType,
  setFileStatus,
} from '@/redux/userSelection/userSelectionSlice';

const BorrowerOption = () => {
  const dispatch = useDispatch();

  const { borrowerChangeList, ifBorrowerChange } = useSelector(
    (state: RootState) => state.userSelect,
  );

  //handle all the envents once user click the bottom
  const onClickHandler = (option: any) => {
    return (e: MouseEvent) => {
      dispatch(setIfBorrowerChange(option.ifBorrowerChange));
      dispatch(setLayerCount(4));
      dispatch(setHowExistingMtgMoveList(option.howExistingMtgMove));
      dispatch(setFinalType(''));
      dispatch(setFileStatus(''));
    };
  };

  return (
    <div className="tabs mt-[-50px] min-h-[50px]">
      {borrowerChangeList.map((option) => {
        const selected = option.ifBorrowerChange === ifBorrowerChange;
        return (
          <p
            className={`tab tab-lifted tab-lg font-semibold text-gray-300 hover:scale-105 hover:bg-slate-400 ${
              selected ? 'tab-active bg-secondary text-gray-600' : null
            }`}
            key={option.id}
            onClick={onClickHandler(option)}
          >
            {option.name}
          </p>
          //   to add orderStatus component if have a finalType value
        );
      })}
    </div>
  );
};

export default BorrowerOption;
