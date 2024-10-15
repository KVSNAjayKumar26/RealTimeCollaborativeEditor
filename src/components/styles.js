// src/styles.js
import styled, { createGlobalStyle } from 'styled-components';
import { motion } from 'framer-motion'; // For animations

export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    font-family: 'Arial', sans-serif;
    background-color: #f4f4f4;
    color: #333;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  max-width: 800px;
  margin: auto;

  @media (max-width: 768px) {
    padding: 10px;
    max-width: 95%;
  }
`;

export const Header = styled.h1`
  color: #4A90E2;
  animation: fadeIn 1s;

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

export const UserListContainer = styled.div`
  margin: 20px 0;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  padding: 15px;
  width: 100%;
  transition: transform 0.3s;
  
  &:hover {
    transform: translateY(-5px);
  }

  @media (max-width: 768px) {
    padding: 10px;
  }
`;

export const UserListItem = styled.li`
  list-style: none;
  padding: 8px;
  background: #e7f3ff;
  margin: 5px 0;
  border-radius: 4px;
  transition: background-color 0.3s;

  &:hover {
    background: #d1e7ff;
  }
`;

export const EditorContainer = styled.div`
  width: 100%;
  border: 1px solid #ccc;
  border-radius: 8px;
  overflow: hidden;
  background-color: #fff;
  transition: box-shadow 0.3s;

  &:hover {
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
  }

  .ql-toolbar {
    background-color: #f0f0f0;
  }

  .ql-container {
    min-height: 300px;
  }

  @media (max-width: 768px) {
    .ql-container {
      min-height: 200px;
    }
  }
`;
