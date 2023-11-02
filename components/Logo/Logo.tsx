import Image from 'next/image';
import { useDispatch, useSelector } from 'react-redux';
import { RootState, AppDispatch } from '@/redux/store';
import { resetUserSelectionState } from '../../redux/userSelection/userSelectionSlice';

const Logo = () => {
  const dispatch = useDispatch();

  const onClickHandler = () => {
    dispatch(resetUserSelectionState());
  };

  return (
    <div className="col-end-2 row-end-2 ">
      <Image
        src="/logo.png"
        alt="HECC"
        width={530}
        height={95.99}
        style={{ width: '230px', height: '95.99px' }}
        onClick={onClickHandler}
      />
    </div>
  );
};

export default Logo;
