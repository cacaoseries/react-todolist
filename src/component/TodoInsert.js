import React, { useState, useCallback } from 'react';
import { MdAdd } from 'react-icons/md';
import './TodoInsert.scss';
    
const TodoInsert = ({ onInsert }) => {
  const [value, setValue] = useState('');

  const onChange = useCallback(e => {
    setValue(e.target.value);
  }, []);

  const onSubmit = useCallback(
    e => {
      onInsert(value);
      setValue('');
      e.preventDefault(); // 브라우저 새로고침 방지, onClick은 Enter 입력시 작동 안하므로 onSubmit 구현
    },
    [onInsert, value],
  );

  return (
    <form className="TodoInsert">
      <input placeholder="할 일을 입력하세요" value={value} onChange={onChange} />
      <button type="submit" onClick={onSubmit}>
        <MdAdd />
      </button>
    </form>
  );
};      
    
export default TodoInsert;    