import logo from "../../assets/images/logo.svg";
import Toggle from "../Toggle/Toggle";
import DropDown from "../DropDown/DropDown";

type AppProps = {
    handleFontChange: Function;
}

function Navbar({handleFontChange}: AppProps) {
  return (
    <div className="flex justify-between">
      <img src={logo} />
      <div className="flex items-center gap-4">
        <DropDown handleFontChange={handleFontChange} />
        <div>
          <Toggle /> 
        </div>
      </div>
    </div>
  )
}

export default Navbar;
