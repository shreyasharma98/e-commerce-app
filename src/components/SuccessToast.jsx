import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const SuccessToast = () => {
  return (
    <div>
      <span role="img" aria-label="checkmark">
        ✅
      </span>{' '}
      Cart has been emptied!
    </div>
  );
};

export default SuccessToast;
