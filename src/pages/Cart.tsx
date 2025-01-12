import { useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../app/hooks';
import CartItem from './CartItem';
import { toast } from 'react-toastify';
import { clearCart } from '../features/shopSlice';

function Cart() {
  const { cartItems, quantity, total } = useAppSelector((state) => state.shop);

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();

    if (quantity === 0 && total === 0) {
      toast.warn('Your Cart is empty', {
        position: 'top-center',
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'colored',
      });
      setTimeout(() => {
        navigate('/');
      }, 2000);
    } else {
      toast.warn('Thanks for purchase!', {
        position: 'top-center',
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'colored',
      });
      setTimeout(() => {
        dispatch(clearCart());
        navigate('/');
      }, 2000);
    }
  };

  return (
    <div className='container-lg py-4'>
      <div className='text-center'>
        <h2 className='fw-bold mb-5'>Your Cart</h2>
      </div>
      <div className='row text-center justify-content-center'>
        {cartItems.map((book) => (
          <CartItem {...book} />
        ))}
      </div>
      <div className='text-center pt-5'>
        <h2 className='fs-4 my-4'>Cart Summary</h2>
        <div className='text-danger fs-1 fw-bold mt-4'>
          <span>
            Total ({quantity}) : {total} $
          </span>
        </div>
        <button
          onClick={handleClick}
          className='btn btn-danger text-decoration-none'
        >
          Purchase
        </button>
      </div>
    </div>
  );
}

export default Cart;
