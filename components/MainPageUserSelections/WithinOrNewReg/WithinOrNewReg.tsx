import { MouseEvent } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState, AppDispatch } from '@/redux/store';

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

export default WithinOrNewReg;
