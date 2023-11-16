import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState, AppDispatch } from '@/redux/store';

import layerTree from '@/static/layerTreeConfig';
import {
  setSelectedSystem,
  setCurrentSelectedSystem,
  setHomelineOrResidential,
  setLayerCount,
  setRegisterPartiesList,
  setFinalType,
  setFileStatus,
  setCurrentRegisterParty,
  setPurchaseType,
  setPurchaseTypeList,
  setPromptsList,
} from '@/redux/userSelection/userSelectionSlice';

interface SystemItemProps {
  name: string;
  homelineOrResidential: string;
  currentSystem: string;
  layerCount: number;
}

const SystemItem = ({
  name,
  homelineOrResidential,
  currentSystem,
  layerCount,
}: SystemItemProps) => {
  const dispatch = useDispatch();
  const { currentSelectedSystem } = useSelector(
    (state: RootState) => state.userSelect,
  );

  useEffect(() => {
    if (currentSelectedSystem) {
      const registerPartiesList = layerTree.filter(
        (item) => item.name === currentSelectedSystem,
      )[0].registerParties;
      dispatch(setRegisterPartiesList(registerPartiesList));
    }

    return () => {};
  }, [currentSelectedSystem, dispatch]);

  // Dispatch your Redux action to update the selected item

  const onClickHandler = () => {
    if (disableList.includes(name)) {
      return;
    }
    dispatch(setSelectedSystem(currentSystem));
    dispatch(setCurrentSelectedSystem(name));
    dispatch(setLayerCount(layerCount));
    dispatch(setHomelineOrResidential(homelineOrResidential));
    dispatch(setFinalType(''));
    dispatch(setFileStatus(''));
    dispatch(setCurrentRegisterParty(''));
    dispatch(setPurchaseType(''));
    dispatch(setPurchaseTypeList([]));
    dispatch(setPromptsList([]));
  };

  const disableList = ['Casper-Homeline', 'Casper-Residential'];
  // for css
  const itemClass = `mt-8 mb-8 mx-4 truncate select-none h-20 flex justify-center items-center text-l text-gray-300 hover:text-white px-3 py-2 ${
    name === currentSelectedSystem
      ? 'bg-blue-800 shadow-md border-4 border-gray-500 scale-95 rounded-lg p-2'
      : 'bg-gray-900 hover:bg-gray-600 transition duration-200 transform hover:scale-90 rounded-lg'
  } min-w-[150px] `;
  return (
    <p className={`${itemClass} whitespace-normal`} onClick={onClickHandler}>
      {name}
    </p>
  );
};

export default SystemItem;
