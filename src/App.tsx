// app.tsx
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import RouterComponent from '@/router'; // 假设 Router 组件位于同一目录下的 Router.tsx 文件中
import '@/App.css';

const App: React.FC = () => {
  return (
    <Router>
      <RouterComponent />
    </Router>
  );
};

export default App;