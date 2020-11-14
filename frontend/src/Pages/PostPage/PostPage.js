import React, { useState, useEffect } from 'react';
import { Container, Grow, Grid } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';

import { getPosts } from '../../actions/posts';
import Posts from '../../components/Posts/Posts';
import Form from '../../components/Form/Form';
import useStyles from './styles';

const PostPage = () => {
  const [currentId, setCurrentId] = useState(null);
  const [postData, setPostData] = useState({ creator: '', title: '', message: '', tags: '', selectedFile: '' })
  const classes = useStyles();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch, currentId]);

  return (
    <Container maxwidth="lg">
      <Grow in>
        <Container>
          <Grid className={classes.mainContainer} container justify="space-between" alignItems="stretch" spacing={3}>
            <Grid item xs={12} sm={7}>
              <Posts setCurrentId={setCurrentId}/>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Form currentId={currentId} setCurrentId={setCurrentId} postData={postData} setPostData={setPostData} />
            </Grid>
          </Grid>
        </Container>
      </Grow>
    </Container>
  );
}

export default PostPage;