import { SlideProps, photoSlideStyle } from './Slide';

interface Props extends SlideProps {}

export default function Photo({ imgUrl, width }: Props) {
  return (
    <div className={`${photoSlideStyle[width]} shrink-0`}>
      <img src={imgUrl} className="rounded-lg" />
    </div>
  );
}
