/**
 * @format
 */
import { LogBox } from 'react-native';

LogBox.ignoreAllLogs(true);
LogBox.ignoreLogs(['Warning: isMounted(...) is deprecated', 'Module RCTImageLoader']);
console.log = function () {};
console.warn = function () {};
console.error = function () {};
