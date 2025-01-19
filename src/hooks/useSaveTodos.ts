// import { useCallback, useContext, useEffect, useState } from 'react';

// import { TodoContext } from '../contexts/TodoContext';

// import { AES, enc } from 'crypto-js';
// import { Todo } from '../types/Todo';

// const SECRET_KEY = import.meta.env.VITE_SECRET_KEY as string;
// const LOCAL_STORAGE_KEY = 'TODOS_DATA';

// export function useSaveTodos() {
//   const [gottedInitialData, setGottedInitialData] = useState(false);

//   const { state, dispatch } = useContext(TodoContext);

//   const handleChangesTodo = useCallback(() => {
//     const value = AES.encrypt(JSON.stringify(state), SECRET_KEY);

//     localStorage.setItem(LOCAL_STORAGE_KEY, value.toString());
//   }, [state]);

//   useEffect(() => {
//     try {
//       const todosData = localStorage.getItem(LOCAL_STORAGE_KEY);

//       if (todosData) {
//         const bytes = AES.decrypt(todosData, SECRET_KEY);
//         const decrypted: Todo[] = JSON.parse(bytes.toString(enc.Utf8));

//         dispatch({ type: 'add', payload: decrypted });
//       }
//     } catch {
//       alert('Não foi possível obter as tarefas salvas.');
//     } finally {
//       setGottedInitialData(true);
//     }
//   }, [dispatch]);

//   useEffect(() => {
//     if (!gottedInitialData) return;
//     handleChangesTodo();

//   }, [handleChangesTodo, gottedInitialData]);
// }
