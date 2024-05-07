import React, { useState, useEffect } from 'react';
import { auth, db } from './firebaseConfig';
import { onAuthStateChanged } from 'firebase/auth';
import { doc, getDoc } from 'firebase/firestore';

const Principal = () => {
  const [userInfo, setUserInfo] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        const userDoc = await getDoc(doc(db, 'users', user.uid));
        setUserInfo(userDoc.data());
      }
    });

    return () => unsubscribe(); // Limpar listener quando o componente é desmontado
  }, []);

  return (
    <div>
      {userInfo ? (
        <div>
          <h2>Página Principal</h2>
          <p>Nome: {userInfo.nome}</p>
          <p>Sobrenome: {userInfo.sobrenome}</p>
          <p>Data de nascimento: {userInfo.dataNascimento}</p>
        </div>
      ) : (
        <p>Carregando...</p>
      )}
    </div>
  );
};

export default Principal;
