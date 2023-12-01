'use client';

import { useState } from 'react';
import ContentText from './content-text';

export default function CollapsibleContentText({
  // originalContent,
  // croppedContent,
  content,
}: {
  content: string;
  // originalContent: string;
  // croppedContent: string;
}) {
  const [isCropped, setIsCropped] = useState(false);
  // const [content, setContent] = useState(croppedContent);
  const reviewLengthMinimum = 70;

  return (
    <div
      onClick={() => {
        // setContent(isCropped ? originalContent : croppedContent);
        setIsCropped((cur) => !cur);
      }}
    >
      {/* <ContentText>{content}</ContentText> */}
      {/* {isCropped ? (
        <p className="text-gray-500">...더보기</p>
      ) : (
        <p className="text-gray-500">접기</p>
      )} */}
      <div className="overflow-hidden break-all review-content__text content text-ellipsis">
        {content.length > reviewLengthMinimum && !isCropped && (
          <span className="float-right text-sm more mt-[1.6rem] text-lightGrayTxt cursor-pointer">
            더보기
          </span>
        )}
        <ContentText>{content}</ContentText>
        {content.length > reviewLengthMinimum && isCropped && (
          <span className="block text-sm text-right cursor-pointer text-lightGrayTxt">
            접기
          </span>
        )}
      </div>
      <style jsx>{`
        .content {
          display: ${isCropped ? '' : '-webkit-box'};
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
        }
        .more {
          shape-outside: border-box;
        }
      `}</style>
    </div>
  );
}
