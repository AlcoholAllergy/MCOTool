import { MouseEvent } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState, AppDispatch } from '@/redux/store';

import {
  setLayerCount,
  setAdjustment,
  setFinalType,
} from '@/redux/userSelection/userSelectionSlice';

const MortgageAmountAdjustment = () => {
  const dispach = useDispatch();

  const { mortgageAmountAdjustmentList, adjustment } = useSelector(
    (state: RootState) => state.userSelect.port,
  );

  //handle all the envents once user click the bottom
  const onClickHandler = (option: any) => {
    return (e: MouseEvent) => {
      dispach(setAdjustment(option.name));
      dispach(setFinalType(option.transactionType));
    };
  };

  return (
    <div className="flex justify-start items-center mt-[-50px]">
      {mortgageAmountAdjustmentList.map((option) => {
        const selected = option.name === adjustment;
        return (
          <p
            className={`truncate select-none m-0 py-2 px-4  text-white bg-gray-900 cursor-pointer duration-300 text-xl ${
              selected
                ? 'bg-gray-400  scale-95  '
                : 'bg-gray-900 hover:bg-yellow-400 hover:scale-90'
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
