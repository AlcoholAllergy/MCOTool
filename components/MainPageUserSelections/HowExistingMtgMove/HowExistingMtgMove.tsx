import { MouseEvent } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState, AppDispatch } from '@/redux/store';
import getCSS from '../tabsCSS';

import {
  setFinalType,
  setHowExistingMtgMove,
  setIsPort,
  setMortgageAmountAdjustmentList,
  setFileStatus,
  setPromptsList,
} from '@/redux/userSelection/userSelectionSlice';

const HowExistingMtgMove = () => {
  const dispatch = useDispatch();

  const { howExistingMtgMoveList, howExistingMtgMove } = useSelector(
    (state: RootState) => state.userSelect,
  );

  //handle all the envents once user click the bottom
  const onClickHandler = (option: any) => {
    return (e: MouseEvent) => {
      dispatch(setHowExistingMtgMove(option.name));
      dispatch(setFinalType(option.transactionType));
      dispatch(setIsPort(false));
      dispatch(setMortgageAmountAdjustmentList([]));
      dispatch(setFileStatus(''));
      if (option.hasOwnProperty('prompts')) {
        dispatch(setPromptsList(option.prompts));
      }
    };
  };

  return (
    <div className="tabs mt-[-50px] min-h-[50px]">
      {howExistingMtgMoveList.map((option) => {
        const selected = option.name === howExistingMtgMove;
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

export default HowExistingMtgMove;
