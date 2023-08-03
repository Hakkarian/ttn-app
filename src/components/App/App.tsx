import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { userSlice } from '../../store/reducers/UserSlice';

const App = () => {
  const { count } = useAppSelector(state => state.userReducer);
  const { increment } = userSlice.actions;
  const dispatch = useAppDispatch();

  return (
    <div><h1>{count}</h1>
    <button type='button' onClick={() => dispatch(increment(1))}>Increment</button></div>
  )
}

export default App