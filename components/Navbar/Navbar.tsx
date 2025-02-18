import InputComponent from '../InputComponent/InputComponent';
import QuickNotes from './QuickNotes/QuickNotes';

const Navbar = () => {
  return (
    <div className="flex justify-between items-center col-start-2 col-end-13 h-24 bg-blue-600 text-black ">
      <QuickNotes />
      <InputComponent
        as="input"
        className="mr-8 border rounded-md border-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-200 pl-1"
        placeholder="employee ID"
      />
    </div>
  );
};

export default Navbar;
