import { RiDeleteBinLine } from 'react-icons/ri';

type Props = {
  id: number;
  text: string;
  onDelete: (id: number) => void;
};

export default function TodoItems({ id, text, onDelete }: Props) {
  return (
    <div className='flex items-center justify-between'>
      <p className='font-mono'>{text}</p>
      <button
        type='button'
        className='text-blue-300'
        onClick={() => onDelete(id)}
      >
        <RiDeleteBinLine />
      </button>
    </div>
  );
}
