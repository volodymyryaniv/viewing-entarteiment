import { showToast, removeToast } from "../redux/actions/toastActions";
import  {v4} from 'uuid';

export const manageToast = (dispatch, message) => {
  const tweet = {
    ...message,
    id: v4(),
  }
  dispatch(showToast(tweet));
  return setTimeout(() => dispatch(removeToast(tweet.id)),4000) 
};
