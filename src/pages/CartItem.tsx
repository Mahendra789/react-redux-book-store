import { FaMinus, FaPlus, FaTrashAlt } from 'react-icons/fa';
import { Book } from '../interfaces/Book';
import { useAppDispatch } from '../app/hooks';
import { decrease, increase, removeFromCart } from '../features/shopSlice';

function CartItem({ id, title, price, quantity, imgUrl }: Book) {
  const dispatch = useAppDispatch();
  return (
    <div>
      <div className='py-5' key={id}>
        <img src={imgUrl} alt='title' className='w-25' />
        <h3 className='text-muted fs-4 fy-4'>{title}</h3>
        <h1 className='fs-2 my-2'>{price}</h1>
        <h4 className='fs-2 my-2'>{quantity}</h4>
        <button
          className='btn btn-outline-danger me-2'
          onClick={() => {
            if (quantity === 1) {
              dispatch(removeFromCart(id));
            } else {
              dispatch(decrease({ id }));
            }
          }}
        >
          <FaMinus />
        </button>
        <button
          className='btn btn-danger'
          onClick={() => dispatch(removeFromCart(id))}
        >
          <FaTrashAlt /> Remove
        </button>
        <button
          className='btn btn-outline-danger ms-2'
          onClick={() => dispatch(increase({ id }))}
        >
          <FaPlus />
        </button>
      </div>
    </div>
  );
}

export default CartItem;
