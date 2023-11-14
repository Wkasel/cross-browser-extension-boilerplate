
import logo from '@common/assets/logo.svg';
import { config } from '@common/config';

export function PopupPage(): JSX.Element {
  return (
    <div className="wrapper">
      <h2>Popup page</h2>
      <h3 className="bg-red-500 text-green-500">SCSS</h3>
      <img src={logo} width={48} height={48} />
      <center>{config.someKey}</center>
    </div>
  );
}
