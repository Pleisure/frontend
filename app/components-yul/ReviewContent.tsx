'use client';

import { useState } from 'react';

export default function ReviewContent({
  content: originalContent,
}: {
  content: string;
}) {
  const MAX_LENGTH = 60;
  const isShort = originalContent.length <= MAX_LENGTH;
  if (isShort) {
    return <p>{originalContent}</p>;
  }

  const croppedContent = originalContent.substring(0, MAX_LENGTH);
  const [isCropped, setIsCropped] = useState(true);
  const [content, setContent] = useState(croppedContent);

  return (
    <div
      onClick={() => {
        setContent(isCropped ? originalContent : croppedContent);
        setIsCropped((cur) => !cur);
      }}
    >
      <p>{content}</p>
      {isCropped ? (
        <p className="text-gray-500">...더보기</p>
      ) : (
        <p className="text-gray-500">접기</p>
      )}
    </div>
  );
}
