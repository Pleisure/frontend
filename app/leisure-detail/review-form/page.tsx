'use client';

import Button from '@/app/components-dd/atoms/Button';
import Container from '@/app/components-dd/atoms/Container';

import ImageUploader from '@/app/components-dd/atoms/ImageUploader';
import Spacing from '@/app/components-dd/atoms/Spacing';
import Star from '@/app/components-dd/atoms/Star';
import Textarea from '@/app/components-dd/atoms/Textarea';
import Txt from '@/app/components-dd/atoms/Txt';
import UploadedImage from '@/app/components-dd/atoms/UploadedImage';
import Section from '@/app/components-dd/molecules/Section';
import PageLayout from '@/app/components-dd/organisms/PageLayout';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function ReviewForm() {
  const router = useRouter();
  const [reviewImages, setReviewImages] = useState<any>([]);
  const handleReviewImageUpload = (e: any) => {
    const uploadingImage = e.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(uploadingImage);
    reader.onloadend = () => {
      const newImageArray = [...reviewImages, reader.result];
      setReviewImages(newImageArray);
    };
  };
  const handleImageDelete = (imageIndex: number) => {
    const newImagesArray = reviewImages.slice(0, imageIndex).concat(reviewImages.slice(imageIndex + 1));
    setReviewImages(newImagesArray);
  };
  return (
    <PageLayout
      header={{
        type: 'detail',
        title: '리뷰',
        hasBorder: true,
        left: [
          {
            onClick: () => router.back(),
            svg: (
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='w-6 h-6'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
                strokeWidth={2}
              >
                <path strokeLinecap='round' strokeLinejoin='round' d='M15 19l-7-7 7-7' />
              </svg>
            ),
          },
        ],
      }}
      footer={{
        type: 'buttons',
        root: 'leisures',
        children: (
          <Button variant='primary' isWidthFull={true} size='large'>
            리뷰 제출하기
          </Button>
        ),
      }}
    >
      <Section isHeightFull={true}>
        <Container className='flex flex-col w-full px-5'>
          <Spacing size='large' />
          <Container>
            <Txt>가평빠지월드</Txt>
          </Container>
          <Spacing size='large' />
          <Container className='flex flex-col items-center justify-center w-full'>
            <Txt typography='title3'>좋았던 만큼 별을 채워주세요!</Txt>
            <Container className='flex items-center justify-center w-full space-x-2 '>
              <Star size={'large'} color='secondary' />
              <Star size={'large'} color='secondary' />
              <Star size={'large'} color='secondary' />
              <Star size={'large'} color='secondary' />
              <Star size={'large'} color='secondary' />
            </Container>
          </Container>
        </Container>
        <Spacing size='large' />
        <Container className='flex flex-col w-full px-5'>
          <Txt>리뷰를 남겨주세요(사진 최대 10장)</Txt>
          <Spacing size='medium' />
          <Container className='flex w-full'>
            <ImageUploader size={'small'} handleChange={handleReviewImageUpload} />
            <Container className='flex overflow-x-scroll scrollbar-hide'>
              <Container className='flex px-2 space-x-2 w-fit h-fit'>
                {reviewImages.map((image: string, index: any) => (
                  <UploadedImage
                    key={`reviewImage${index}`}
                    id={index}
                    size={'small'}
                    imageUrl={image}
                    handleDelete={() => handleImageDelete(index)}
                  />
                ))}
              </Container>
            </Container>
          </Container>
          <Spacing size='medium' />
          <Textarea id='reviewContent' rows={5} cols={80} maxLength={400} required={true} />
        </Container>
        <Spacing size='large' />
      </Section>
    </PageLayout>
  );
}
