import logo from "../../assets/images/logo.svg";
import Toggle from "../Toggle/Toggle";
import DropDown from "../DropDown/DropDown";

type Props = {
  darkMode: boolean;
}

function Navbar({ darkMode }: Props): JSX.Element {
  return (
    <div className="flex justify-between">
      <img src={logo} />
      <div className="flex items-center gap-4">
        <DropDown />
        <div>
          <Toggle toggleOn={false} /> 
        </div>
      </div>
    </div>
  )
}

export default Navbar;
