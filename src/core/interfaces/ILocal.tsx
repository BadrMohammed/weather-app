import { LocalizedStringsMethods } from 'react-localization';

export default interface ILocal extends LocalizedStringsMethods {
  [key: string]: any;
}
