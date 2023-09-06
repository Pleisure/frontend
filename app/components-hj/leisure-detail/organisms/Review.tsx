'use client';

import { useState } from 'react';
import Button from '../atoms/Button';
import Modal from '../molecules/Modal';
import Rating from '../molecules/Rating';
import ReviewArticle from './ReviewArticle';
import Dropdown from '@/app/components-hj/leisure-detail/molecules/Dropdown';
import { REVIEW_ARTICLE_DATA } from '@/app/libs-hj/data/REVIEW_ARTICLE_DATA';

export default function Review() {
  const [showModal, setShowModal] = useState<boolean>(false);

  return (
    <section className="relative px-5 review">
      <Rating />
      <Dropdown />
      {REVIEW_ARTICLE_DATA.map((data, i, currentArr) => {
        return (
          <ReviewArticle
            key={data.storeReviewId}
            dataIdx={i}
            dataLength={currentArr.length}
            reviewWriterProfilePictureUrl={data.reviewWriterProfilePictureUrl}
            reviewWriterNickname={data.reviewWriterNickname}
            createdAt={data.createdAt}
            reviewWriterAge={data.reviewWriterAge}
            reviewWriterGender={data.reviewWriterGender}
            storeReviewId={data.storeReviewId}
            storeReviewContent={data.storeReviewContent}
            storeReviewRating={data.storeReviewRating}
            storeReviewPhotoUrls={data.storeReviewPhotoUrls}
            setShowModal={setShowModal}
          />
        );
      })}
      <Modal showModal={showModal} setShowModal={setShowModal} />
      <Button
        divStyle="all-review-btn"
        buttonStyle="w-full bg-white btn btn-active border-1 border-cyanTxt text-cyanTxt hover:bg-white hover:border-cyanTxt"
        content="모든 리뷰 보기"
      />
      {showModal && (
        <div className="fixed top-0 left-[28.35%] m-auto max-w-md w-full h-screen bg-[rgba(0,0,0,0.5)] z-[100]" />
      )}
    </section>
  );
}
