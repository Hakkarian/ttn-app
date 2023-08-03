import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { fetchUsers } from '../../store/reducers/ActionCreators';

const App = () => {
  const { users, isLoading, error } = useAppSelector(state => state.userReducer);
  // const {FetchUsers} = userSlice.actions;
  const dispatch = useAppDispatch();

  console.log(error)

  useEffect(() => {
    dispatch(fetchUsers())
  }, [dispatch])

  return (
    <div>
      {isLoading && !error && <h2>Loading...</h2>}
      {error ? <h2>{error}</h2> : <p>{JSON.stringify(users, null, 2)}</p>}
    </div>
  );
}

export default App