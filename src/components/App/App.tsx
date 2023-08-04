import { useEffect } from 'react';
import { useAppDispatch } from '../../hooks/redux';
import { fetchUsers2 } from '../../store/reducers/ActionCreators';
import React from 'react';
import PostContainer from '../PostContainer/PostContainer';
import PostContainer2 from '../PostContainer/PostContainer2';

const App = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchUsers2())
  }, [dispatch])

  
  return (
    <>
      <PostContainer />
      <PostContainer2 />
    </>
  );
}

export default App