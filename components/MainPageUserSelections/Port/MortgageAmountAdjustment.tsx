import { MouseEvent } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState, AppDispatch } from '@/redux/store';

import {
  setLayerCount,
  setAdjustment,
  setFinalType,
  setFileStatus,
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
    };
  };

  return (
    <div className="tabs mt-[-50px] min-h-[50px]">
      {mortgageAmountAdjustmentList.map((option) => {
        const selected = option.name === adjustment;
        return (
          <p
            className={`tab tab-lifted tab-lg font-semibold text-gray-300 hover:scale-105  hover:bg-slate-400 ${
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

export default MortgageAmountAdjustment;
