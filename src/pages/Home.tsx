import { useState } from 'react';
import { useMangasQuery } from '../features/mangasApi';
import { FaCartPlus } from 'react-icons/fa';

function Home() {
  const { data } = useMangasQuery();
  const [search, setSearch] = useState('')
  return (
    <div className='container-lg py-4'>

      <div className="input-group mb-3">
        <input type="search" placeholder="Monster..." onChange={(e:React.ChangeEvent<HTMLInputElement>)=> setSearch(e.target.value)} className="form-control" aria-label="Text input with dropdown button" />
        <button className="btn btn-danger dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">Sort By</button>
        <ul className="dropdown-menu dropdown-menu-end">
          <li className="dropdown-item">
            <div className="form-check">
              <label htmlFor="default" className="form-check-label">Default</label>
              <input type="radio" id="default" name="sort" className="form-check-input" />
            </div>
          </li>
          <hr className="dropdown-divider" />
          <li className="dropdown-item">
            <div className="form-check">
              <label htmlFor="low" className="form-check-label">Price (Lowest)</label>
              <input type="radio" id="low" name="sort" className="form-check-input" />
            </div>
          </li>
          <li className="dropdown-item">
            <div className="form-check">
              <label htmlFor="high" className="form-check-label">Price (Highest)</label>
              <input type="radio" id="high" name="sort" className="form-check-input" />
            </div>
          </li>
          <li className="dropdown-item">
            <div className="form-check">
              <label htmlFor="a-z" className="form-check-label">A-Z</label>
              <input type="radio" id="a-z" name="sort" className="form-check-input" />
            </div>
          </li>
          <li className="dropdown-item">
            <div className="form-check">
              <label htmlFor="z-a" className="form-check-label">Z-A</label>
              <input type="radio" id="z-a" name="sort" className="form-check-input" />
            </div>
          </li>
        </ul>
      </div>
  
      <div className='row'>
        {data &&
          data.filter((items)=>{
            return search.toLocaleLowerCase() == '' ? items : items.title.toLocaleLowerCase().includes(search)
          }).map((manga) => (
            <div key={manga.id} className='col-md-6 col-lg-4 text-center'>
              <div className='py-4'>
                <img
                  src={manga.imgUrl}
                  alt={manga.title}
                  width={180}
                  height={150}
                />
                <h3 className='fs-5 my-4'>{manga.title}</h3>
                <h2 className='lead fw-bold fs-4 my-2'>{manga.price}</h2>
                <button className='btn btn-danger text-decoration-none ms-2 my-4'>
                  <FaCartPlus className='me-2 fs-5' /> Add to cart
                </button>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}

export default Home;
