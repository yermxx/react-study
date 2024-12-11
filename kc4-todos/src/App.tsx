import { FormEvent, useEffect, useRef, useState } from 'react';
import TodoItems from './components/TodoItems';
import { IoIosAdd } from 'react-icons/io';
import './index.css';

type Todo = {
  id: number;
  text: string;
};

export default function App() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = inputRef.current?.value;
    if (!data) return alert('내용을 입력해주세요!');
    setTodos([...todos, { id: Date.now(), text: data }]);
    inputRef.current.value = '';
  };

  const handleDelete = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  // 새로고침
  const handleReset = () => {
    if (inputRef.current) inputRef.current.value = '';
    setTodos([]);
  };

  return (
    <div className='min-h-screen flex justify-center text-center'>
      <div className='w-52 pt-10'>
        <h1
          className='text-blue-500 mb-5 font-mono font-bold cursor-pointer'
          onClick={handleReset}
        >
          Rimi Todos
        </h1>
        <form
          onSubmit={handleSubmit}
          className='flex items-center justify-center gap-2 mb-5'
        >
          <input
            type='text'
            ref={inputRef}
            placeholder='공부해야지...'
            className='rounded-md border border-gray-200 px-2'
          />
          <button
            type='submit'
            className='rounded-lg px-2 py-1 border border-white bg-blue-300 text-white font-extrabold'
          >
            <IoIosAdd />
          </button>
        </form>
        {todos.map((todo) => {
          return (
            <p key={todo.id} className='mb-2'>
              <TodoItems
                id={todo.id}
                text={todo.text}
                onDelete={handleDelete}
              />
            </p>
          );
        })}
      </div>
    </div>
  );
}
