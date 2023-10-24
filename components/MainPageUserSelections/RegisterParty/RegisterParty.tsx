import { useEffect } from 'react';

import { MouseEvent } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState, AppDispatch } from '@/redux/store';

import {
  setLayerCount,
  setCurrentRegisterParty,
  setFileOptionList,
  setFinalType,
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
    };
  };

  return (
    <div className="flex justify-start items-center mt-[-50px]">
      {registerPartiesList.map((party) => {
        const selected = party.name === selectedRegisterParty;
        return (
          <p
            className={`truncate select-none m-0 py-2 px-4  text-white bg-gray-900 cursor-pointer duration-300 text-xl ${
              selected
                ? 'bg-gray-400  scale-95  '
                : 'bg-gray-900 hover:bg-yellow-400 hover:scale-90'
            }`}
            key={party.id}
            onClick={onClickHandler(party.name)}
          >
            {party.name}
          </p>
        );
      })}
    </div>
  );
};

export default RegisterParty;
