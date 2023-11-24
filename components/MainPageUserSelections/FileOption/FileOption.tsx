import { MouseEvent } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState, AppDispatch } from '@/redux/store';
import getCSS from '../tabsCSS';

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
  setWithinOrNewRegList,
  setBorrowerOption,
  setPurchaseTypeList,
  setPurchaseType,
  setPromptsList,
  setHowExistingMtgMove,
} from '@/redux/userSelection/userSelectionSlice';

const FileOption = () => {
  const dispatch = useDispatch();

  const { fileOption, fileOptionList } = useSelector(
    (state: RootState) => state.userSelect,
  );

  //handle all the envents once user click the bottom
  const onClickHandler = (option: any) => {
    return (e: MouseEvent) => {
      dispatch(setFileOption(option.name));
      if (option.hasOwnProperty('transactionType')) {
        dispatch(setIsPort(false));
        dispatch(setFinalType(option.transactionType));
        dispatch(setBorrowerChangeList([]));
        dispatch(setHowExistingMtgMoveList([]));
        dispatch(setMortgageAmountAdjustmentList([]));
        dispatch(setFileStatus(''));
        dispatch(setPurchaseTypeList([]));
        dispatch(setPurchaseType(''));
        dispatch(setPromptsList([]));
        if (option.hasOwnProperty('prompts')) {
          dispatch(setPromptsList(option.prompts));
        }
        return;
      } else if (option.hasOwnProperty('purchaseTypes')) {
        dispatch(setFileStatus(''));
        dispatch(setIsPort(false));

        dispatch(setBorrowerChangeList([]));
        dispatch(setHowExistingMtgMoveList([]));
        dispatch(setMortgageAmountAdjustmentList([]));
        dispatch(setPurchaseTypeList(option.purchaseTypes));
        dispatch(setPurchaseType(''));
        dispatch(setPromptsList([]));
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
      dispatch(setWithinOrNewRegList([]));
      dispatch(setBorrowerOption(''));
      dispatch(setPurchaseTypeList([]));
      dispatch(setPurchaseType(''));
      dispatch(setPromptsList([]));
      dispatch(setHowExistingMtgMoveList([]));
      dispatch(setHowExistingMtgMove(''));
    };
  };

  return (
    <div className="tabs mt-[-50px] min-h-[50px]">
      {fileOptionList.map((option) => {
        const selected = option.name === fileOption;
        return (
          <p
            className={getCSS(selected)}
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
