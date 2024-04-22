/**
 * @format
 */
import 'react-native-gesture-handler';
import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import {Text, TextInput} from 'react-native';

Text.defaultProps = Text.defaultProps || {};
Text.defaultProps.maxFontSizeMultiplier = 1;

TextInput.defaultProps = Text.defaultProps || {};
TextInput.defaultProps.maxFontSizeMultiplier = 1;

AppRegistry.registerComponent(appName, () => App);
