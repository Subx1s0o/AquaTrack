import React from 'react';

import { showToast } from '@/utils/toast';

const ToastTest: React.FC = () => {
  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <button
        onClick={() => showToast('success', 'Operation successful!')}
        style={{
          margin: '10px',
          padding: '10px 20px',
          backgroundColor: 'green',
          color: '#fff',
        }}
      >
        Show Success Toast
      </button>
      <button
        onClick={() => showToast('error', 'An error occurred!')}
        style={{
          margin: '10px',
          padding: '10px 20px',
          backgroundColor: 'red',
          color: '#fff',
        }}
      >
        Show Error Toast
      </button>
      <button
        onClick={() => showToast('info', 'Here is some information!')}
        style={{
          margin: '10px',
          padding: '10px 20px',
          backgroundColor: 'blue',
          color: '#fff',
        }}
      >
        Show Info Toast
      </button>
      <button
        onClick={() => showToast('warning', 'This is a warning!')}
        style={{
          margin: '10px',
          padding: '10px 20px',
          backgroundColor: 'orange',
          color: '#fff',
        }}
      >
        Show Warning Toast
      </button>
    </div>
  );
};

export default ToastTest;
