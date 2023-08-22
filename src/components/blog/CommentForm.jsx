import React, { useState } from 'react';
import CommentCard from './CommentCard';
import {Box, TextField } from '@mui/material';
import Button from '@mui/material/Button';
import useBlogsCalls from '../../hooks/useBlogsCalls';


const CommentForm = ({ commentId }) => {
  const { postCommentData } = useBlogsCalls();

  const [yorum, setYorum] = useState({ content: '', post: 1 });

  const handleSubmit = (e) => {
    e.preventDefault();
    postCommentData(commentId, yorum);

    // Form gönderildikten sonra yeni yorum içeriğini temizle
    setYorum({ content: '', post: 1 });
  };

  console.log('yorum', yorum);

  return (
    <div lexDirection="column"> <Box display="flex" justifyContent="center" alignItems="center" f>
      <form onSubmit={handleSubmit} >
        <TextField
          sx={{ width: '620px', display:"flex", justifyContent: 'center' }}
          id="ccc"
          label="Comment"
          multiline
          rows={2}
          placeholder="Add a comment"
          value={yorum.content}
          onChange={(e) => setYorum({ ...yorum, content: e.target.value })}
        />
        <Button variant="contained" sx={{ backgroundColor: 'orange', marginTop:2, marginBottom:2 }} type="submit">
          ADD COMMENT
        </Button>
      </form>
      </Box>
      <CommentCard commentId={commentId} />
      </div>

  );
};

export default CommentForm;
