/* eslint-disable react-hooks/exhaustive-deps */
import { useMutation } from '@tanstack/react-query';
import { useEffect, useState } from 'react';

type Authenticate = {
  soc: number;
  startTime: string;
  userId: string;
};

const postTodo = async (todo: Authenticate) => {
  const res = await fetch('https://jsonplaceholder.typicode.com/todos', {
    method: 'POST',
    body: JSON.stringify(todo),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  });
  return res.json();
};

export const Label = () => {
  const [label, setLabel] = useState('Not authenticated');

  const mutation = useMutation({
    mutationFn: postTodo,
    onSuccess: () => {
      setLabel('Authenticated');
    },
  });

  useEffect(() => {
    mutation.mutate({
      userId: '1', // Replace with your data
      soc: 123, // Replace with your data
      startTime: '2024-01-13T12:00:00', // Replace with your data
    });
  }, []); // Run only once after the initial render

  return <p>{label}</p>;
};
