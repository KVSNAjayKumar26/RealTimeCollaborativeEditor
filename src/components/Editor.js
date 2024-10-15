// src/Editor.js
import React, { useEffect, useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { EditorContainer } from './styles';

const Editor = ({ socket }) => {
  const [content, setContent] = useState('');

  const handleChange = (value) => {
    setContent(value);
    socket.emit('documentChange', value);
  };

  useEffect(() => {
    socket.on('documentUpdate', (newContent) => {
      setContent(newContent);
    });

    return () => {
      socket.off('documentUpdate');
    };
  }, [socket]);

  return (
    <EditorContainer>
      <ReactQuill value={content} onChange={handleChange} />
    </EditorContainer>
  );
};

export default Editor;
