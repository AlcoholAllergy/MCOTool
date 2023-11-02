import { useEffect } from 'react';

import { MouseEvent } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState, AppDispatch } from '@/redux/store';

import {
  setLayerCount,
  setCurrentRegisterParty,
  setFileOptionList,
  setFinalType,
  setFileOption,
  setFileStatus,
} from '@/redux/userSelection/userSelectionSlice';

const RegisterParty = () => {
  const dispatch = useDispatch();

  const { selectedRegisterParty, registerPartiesList } = useSelector(
    (state: RootState) => state.userSelect,
  );

  useEffect(() => {
    if (selectedRegisterParty) {
      const fileOptionsList = registerPartiesList.filter(
        (item) => item.name === selectedRegisterParty,
      )[0].fileOptions;
      dispatch(setFileOptionList(fileOptionsList));
    }

    return () => {};
  }, [selectedRegisterParty, registerPartiesList, dispatch]);

  //handle all the envents once user click the bottom
  const onClickHandler = (name: string) => {
    return (e: MouseEvent) => {
      dispatch(setCurrentRegisterParty(name));
      dispatch(setLayerCount(2));
      dispatch(setFinalType(''));
      dispatch(setFileOption(''));
      dispatch(setFileStatus(''));
    };
  };

  return (
    <div className="tabs mt-[-50px] min-h-[50px]">
      {registerPartiesList.map((party) => {
        const selected = party.name === selectedRegisterParty;
        return (
          <a
            className={`tab tab-lifted tab-lg font-semibold text-gray-300 hover:scale-105 hover:bg-slate-400 ${
              selected ? 'tab-active bg-secondary text-gray-600' : null
            }`}
            key={party.id}
            onClick={onClickHandler(party.name)}
          >
            {party.name}
          </a>
        );
      })}
    </div>
  );
};

export default RegisterParty;
