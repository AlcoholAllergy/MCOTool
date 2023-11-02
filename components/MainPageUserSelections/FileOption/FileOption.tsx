import { MouseEvent } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState, AppDispatch } from '@/redux/store';

import {
  setLayerCount,
  setFileOption,
  setFinalType,
  setBorrowerChangeList,
  setIsPort,
  setPortTypesList,
  setMortgageAmountAdjustmentList,
  setHowExistingMtgMoveList,
  setFileStatus,
} from '@/redux/userSelection/userSelectionSlice';

const FileOption = () => {
  const dispatch = useDispatch();

  const { fileOption, fileOptionList } = useSelector(
    (state: RootState) => state.userSelect,
  );

  //handle all the envents once user click the bottom
  const onClickHandler = (option: any) => {
    return (e: MouseEvent) => {
      const name = option.name;
      dispatch(setFileOption(name));
      if (option.hasOwnProperty('transactionType')) {
        dispatch(setIsPort(false));
        dispatch(setFinalType(name));
        dispatch(setBorrowerChangeList([]));
        dispatch(setHowExistingMtgMoveList([]));
        dispatch(setMortgageAmountAdjustmentList([]));
        dispatch(setFileStatus(''));

        return;
      } else if (option.hasOwnProperty('portTypes')) {
        dispatch(setIsPort(true));
        dispatch(setPortTypesList(option.portTypes));
        dispatch(setLayerCount(3));
        dispatch(setBorrowerChangeList([]));
        dispatch(setFileStatus(''));
      } else {
        dispatch(setBorrowerChangeList(option.borrowerOptions));
        dispatch(setIsPort(false));
        dispatch(setLayerCount(3));
        dispatch(setMortgageAmountAdjustmentList([]));
        dispatch(setFileStatus(''));
      }
      dispatch(setFinalType(''));
    };
  };

  return (
    <div className="tabs mt-[-50px] min-h-[50px]">
      {fileOptionList.map((option) => {
        const selected = option.name === fileOption;
        return (
          <p
            className={`tab tab-lifted tab-md font-semibold text-gray-300 hover:scale-105 hover:bg-slate-400 ${
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

export default FileOption;
