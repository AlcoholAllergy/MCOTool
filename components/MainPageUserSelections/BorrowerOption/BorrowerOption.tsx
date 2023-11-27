import { MouseEvent } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState, AppDispatch } from '@/redux/store';

import getCSS from '../tabsCSS';

import {
  setLayerCount,
  setIfBorrowerChange,
  setHowExistingMtgMoveList,
  setFinalType,
  setFileStatus,
  setWithinOrNewRegList,
  setBorrowerOption,
  setPromptsList,
  setHowExistingMtgMove,
} from '@/redux/userSelection/userSelectionSlice';
import HowExistingMtgMove from '../HowExistingMtgMove/HowExistingMtgMove';

const BorrowerOption = () => {
  const dispatch = useDispatch();

  const { borrowerChangeList, borrowerOption } = useSelector(
    (state: RootState) => state.userSelect,
  );

  //handle all the events once user click the bottom
  const onClickHandler = (option: any) => {
    return (e: MouseEvent) => {
      dispatch(setIfBorrowerChange(option.ifBorrowerChange));
      dispatch(setBorrowerOption(option.name));
      dispatch(setLayerCount(4));
      //If borrower changes, close the homeline increase tabs
      if (option.name === 'Borrower Changes') {
        dispatch(setWithinOrNewRegList([]));
      }

      //when the file is not a homeline increase
      if (option.hasOwnProperty('howExistingMtgMove')) {
        dispatch(setHowExistingMtgMoveList(option.howExistingMtgMove));
        dispatch(setFinalType(''));
        dispatch(setHowExistingMtgMove(''));

        dispatch(setPromptsList([]));
        return;
      }
      //when the file is a homeline increase

      dispatch(setFinalType(''));

      dispatch(setFileStatus(''));
      dispatch(setPromptsList([]));
    };
  };

  return (
    <div className="tabs mt-[-50px] min-h-[50px]">
      {borrowerChangeList.map((option) => {
        const selected = option.name === borrowerOption;
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

export default BorrowerOption;
