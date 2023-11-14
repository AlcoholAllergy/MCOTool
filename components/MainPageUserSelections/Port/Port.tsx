import { MouseEvent } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState, AppDispatch } from '@/redux/store';

import getCSS from '../tabsCSS';

import {
  setLayerCount,
  setPortType,
  setMortgageAmountAdjustmentList,
  setHowExistingMtgMoveList,
  setFinalType,
  setFileStatus,
  setAdjustment,
  setPromptsList,
} from '@/redux/userSelection/userSelectionSlice';

const Port = () => {
  const dispatch = useDispatch();

  const { portType, portTypesList } = useSelector(
    (state: RootState) => state.userSelect.port,
  );

  //handle all the envents once user click the bottom
  const onClickHandler = (option: any) => {
    return (e: MouseEvent) => {
      dispatch(setPortType(option.name));
      dispatch(setLayerCount(4));
      dispatch(
        setMortgageAmountAdjustmentList(option.mortgageAmountAdjustment),
      );
      dispatch(setHowExistingMtgMoveList([]));
      dispatch(setFinalType(''));
      dispatch(setFileStatus(''));
      dispatch(setAdjustment(''));
      dispatch(setPromptsList([]));
    };
  };

  return (
    <div className="tabs mt-[-50px] min-h-[50px]">
      {portTypesList.map((option) => {
        const selected = option.name === portType;
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

export default Port;
