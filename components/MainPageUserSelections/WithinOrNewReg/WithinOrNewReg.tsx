import { MouseEvent } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState, AppDispatch } from '@/redux/store';
import getCSS from '../tabsCSS';

import {
  setWithinOrNewReg,
  setFinalType,
  setFileStatus,
  setHowExistingMtgMoveList,
  setHowExistingMtgMove,
  setPromptsList,
} from '@/redux/userSelection/userSelectionSlice';

const WithinOrNewReg = () => {
  const dispatch = useDispatch();

  const { withinOrNewReg, withinOrNewRegList } = useSelector(
    (state: RootState) => state.userSelect,
  );

  //handle all the events once user click the bottom
  const onClickHandler = (option: any) => {
    return (e: MouseEvent) => {
      dispatch(setWithinOrNewReg(option.name));
      dispatch(setHowExistingMtgMoveList(option.howExistingMtgMove));
      dispatch(setHowExistingMtgMove(''));
      dispatch(setFinalType(''));
      dispatch(setFileStatus(''));
      dispatch(setPromptsList([]));
    };
  };

  return (
    <div className="tabs mt-[-50px] min-h-[50px]">
      {withinOrNewRegList.map((option) => {
        const selected = option.name === withinOrNewReg;
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

export default WithinOrNewReg;
