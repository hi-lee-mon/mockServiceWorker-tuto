import axios from 'axios';
import { useState } from 'react';

const App = () => {
  const [auth, setAuth] = useState(false);
  const [message, setMessage] = useState('');
  const [username, setUsername] = useState('');

  const login = async () => {
    const response = await axios.post('./login');
    if (response.status === 200) {
      setMessage('');
      setAuth(true);
      return;
    }
    setMessage('ログイン失敗');
  };

  const handleClick = async () => {
    const response = await axios.get('./user');
    setUsername(response.data.username);
  };
  return (
    <div>
      メッセージ：{message}
      <h1>mswの学習</h1>
      <p>{auth && 'ログイン中'}</p>
      <button type="button" onClick={login}>
        ログイン
      </button>
      {auth && (
        <>
          <p>ログイン中のユーザは：{username}</p>
          <button type="button" onClick={handleClick}>
            ユーザ名取得
          </button>
        </>
      )}
    </div>
  );
};

export default App;
