'use client';

import { useState } from 'react';
import ContentText from './content-text';

export default function CollapsibleContentText({
  originalContent,
  croppedContent,
}: {
  originalContent: string;
  croppedContent: string;
}) {
  const [isCropped, setIsCropped] = useState(true);
  const [content, setContent] = useState(croppedContent);

  return (
    <div
      onClick={() => {
        setContent(isCropped ? originalContent : croppedContent);
        setIsCropped((cur) => !cur);
      }}
    >
      <ContentText>{content}</ContentText>
      {isCropped ? (
        <p className="text-gray-500">...더보기</p>
      ) : (
        <p className="text-gray-500">접기</p>
      )}
    </div>
  );
}
