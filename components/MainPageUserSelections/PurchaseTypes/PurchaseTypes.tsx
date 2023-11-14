import { MouseEvent } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState, AppDispatch } from '@/redux/store';

import getCSS from '../tabsCSS';

import {
  setFinalType,
  setPromptsList,
  setPurchaseType,
} from '@/redux/userSelection/userSelectionSlice';

const PurchaseTypes = () => {
  const dispatch = useDispatch();

  const { purchaseType, purchaseTypeList } = useSelector(
    (state: RootState) => state.userSelect,
  );

  //handle all the envents once user click the bottom
  const onClickHandler = (option: any) => {
    return (e: MouseEvent) => {
      dispatch(setPurchaseType(option.name));
      dispatch(setFinalType(option.transactionType));
      dispatch(setPromptsList([]));
    };
  };

  return (
    <div className="tabs mt-[-50px] min-h-[50px]">
      {purchaseTypeList.map((option) => {
        const selected = option.name === purchaseType;
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

export default PurchaseTypes;
