/**
 * @format
 */

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ToastView = (message: string, duration: string = 'short') => {
  toast['dark'](message);
};

export const ShowToast = (
  message: string,
  type?: 'info' | 'warn' | 'success' | 'error' | 'dark' | '',
  duration?: number
) => {
  if (!type) {
    toast(message);
    return;
  }
  toast[type](message);
};

export const ShowTopToast = (message: string) => {
  //Toast.showWithGravity(message, Toast.LONG, Toast.TOP);
};

export const ShowCenterToast = (message: string) => {
  //Toast.showWithGravity(message, Toast.SHORT, Toast.CENTER);
};

export default ToastView;
