import { useEffect } from 'react';

import getCSS from '../tabsCSS';
import ToggleTool from '../toggleTool/toggleTool';

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
  setPurchaseTypeList,
  setPurchaseType,
  setPromptsList,
} from '@/redux/userSelection/userSelectionSlice';

const RegisterParty = () => {
  const dispatch = useDispatch();

  const {
    selectedRegisterParty,
    registerPartiesList,
    homelineOrResidential,
    port: { isPort },
  } = useSelector((state: RootState) => state.userSelect);

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
      dispatch(setPurchaseTypeList([]));
      dispatch(setPurchaseType(''));
      dispatch(setPromptsList([]));
    };
  };

  return (
    <div className="tabs mt-[-50px] min-h-[50px]">
      {registerPartiesList.map((party) => {
        const selected = party.name === selectedRegisterParty;
        return (
          <a
            className={getCSS(selected)}
            key={party.id}
            onClick={onClickHandler(party.name)}
          >
            {party.name}
          </a>
        );
      })}
      {!isPort && homelineOrResidential === 'Homeline' && (
        <ToggleTool label="RCL only" />
      )}
      {<ToggleTool label="holding company" />}
    </div>
  );
};

export default RegisterParty;
