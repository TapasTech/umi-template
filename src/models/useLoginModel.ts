import { useCallback, useState } from 'react';
import { request, useModel } from 'umi';
import { getToken, setToken, getRememberme, setRememberme, clearAll } from '@/utils';

export default function useLoginModel() {
  const initState = useModel('@@initialState');
  const [currentToken, setCurrentToken] = useState(getToken());
  const [isRememberme, setCurrentRememberme] = useState(!!getRememberme());

  const { refresh } = initState;

  const toggleRememberme = useCallback(() => {
    const nextState = !isRememberme;
    setCurrentRememberme(nextState);
    setRememberme(nextState);
  }, [isRememberme, setCurrentRememberme]);

  const login = useCallback(
    async (account: string, password: string) => {
      try {
        const res = await request('/login', {
          method: 'post',
          data: {
            account,
            password,
          },
        });

        setCurrentToken(res.data.token);
        setToken(res.data.token, isRememberme);
        refresh();
      } catch (error) {
        // ignore
      }
    },
    [setCurrentToken, isRememberme, refresh]
  );

  const logout = useCallback(() => {
    clearAll();
    setCurrentToken('');
    refresh();
  }, [refresh]);

  return {
    currentToken,
    isRememberme,
    toggleRememberme,
    login,
    logout,
  };
}
