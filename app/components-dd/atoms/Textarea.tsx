'use client';

import { HTMLAttributes, useState } from 'react';
import Txt from './Txt';
import Container from './Container';

interface Props extends HTMLAttributes<HTMLTextAreaElement> {
  id: string;
  required: boolean;
  rows?: number;
  cols?: number;
  maxLength?: number;
  minLength?: number;
  placeholder?: string;
}

export default function Textarea({
  id,
  required,
  rows = 5,
  cols = 80,
  maxLength = 400,
  minLength = 0,
  placeholder = '',
  ...props
}: Props) {
  const [numOfChars, setNumOfChars] = useState(0);
  return (
    <div className='relative flex w-full p-2 pb-6 border rounded-md group focus:border-cyan-500'>
      <textarea
        id={id}
        required={required}
        rows={rows}
        cols={cols}
        maxLength={maxLength}
        minLength={minLength}
        placeholder={placeholder}
        {...props}
        className='w-full h-full resize-none focus:outline-none'
        onChange={(e) => setNumOfChars(e.target.value.length)}
      />
      {maxLength && (
        <Container className='absolute w-fit h-fit bottom-1 right-1'>
          <Txt typography='caption' color='disable'>
            {numOfChars}/{maxLength}
          </Txt>
        </Container>
      )}
    </div>
  );
}
