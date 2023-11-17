import { MouseEvent } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState, AppDispatch } from '@/redux/store';

import getCSS from '../tabsCSS';

import {
  setAdjustment,
  setFinalType,
  setFileStatus,
  setPromptsList,
  setHavePrompt,
} from '@/redux/userSelection/userSelectionSlice';

const MortgageAmountAdjustment = () => {
  const dispatch = useDispatch();

  const { mortgageAmountAdjustmentList, adjustment } = useSelector(
    (state: RootState) => state.userSelect.port,
  );

  //handle all the envents once user click the bottom
  const onClickHandler = (option: any) => {
    return (e: MouseEvent) => {
      dispatch(setAdjustment(option.name));
      dispatch(setFinalType(option.transactionType));
      dispatch(setFileStatus(''));
      dispatch(setPromptsList([]));
      if (option.hasOwnProperty('prompts')) {
        dispatch(setHavePrompt(true));
        dispatch(setPromptsList(option['prompts']));
      }
    };
  };

  return (
    <div className="tabs mt-[-50px] min-h-[50px]">
      {mortgageAmountAdjustmentList.map((option) => {
        const selected = option.name === adjustment;
        return (
          <p
            className={getCSS(selected)}
            key={option.id}
            onClick={onClickHandler(option)}
          >
            {option.name}
          </p>
        );
      })}
    </div>
  );
};

export default MortgageAmountAdjustment;
