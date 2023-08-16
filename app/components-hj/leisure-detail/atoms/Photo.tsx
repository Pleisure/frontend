import { SlideProps } from './Slide';

interface Props extends SlideProps {
  divStyle: string;
  imgStyle: string;
}

export default function Photo({ imgUrl, divStyle, imgStyle }: Props) {
  return (
    <div className={divStyle}>
      <img src={imgUrl} className={imgStyle} />
    </div>
  );
}
