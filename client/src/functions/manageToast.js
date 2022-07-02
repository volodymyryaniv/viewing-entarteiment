import { showToast } from "../redux/actions/toastActions";
import  {v4} from 'uuid';

export const manageToast = (dispatch, message) => {
  const tweet = {
    ...message,
    autoclose: true,
    id: v4(),
  }
  dispatch(showToast(tweet));
};
