import { navigate, reset, goBack } from './navigator';

export const NavigateGoBack = () => {
  goBack();
};

export const NavigateToWelcomeScreen = () => {
  reset('Welcome');
};

export const NavigateToBooksView = () => {
  navigate('BooksScreen');
};

export { setNavigator } from './navigator';
