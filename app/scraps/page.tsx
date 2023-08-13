import '@/app/globals.css';
import CategoryPopUp from '@/app/components-hj/scrap/CategoryPopUp';
import LeisureStorePost from '@/app/components-hj/scrap/LeisureStorePost';
import Header from '../components-hj/scrap/molecules/Header';

export default function Scrap() {
  const textImg = '/images/scrap/test_thumbnail.jpeg';

  return (
    <div className="container relative max-w-md min-w-[360px] m-auto notosanskr outline outline-offset-1 text-grayTxt pb-3">
      <Header title="스크랩" />

      {/* category */}
      <CategoryPopUp />

      {/* Leisure store post */}
      <section className="grid grid-cols-2 px-4 pt-7 place-items-center">
        <LeisureStorePost
          imgUrl={textImg}
          name="가평빠지월드"
          rating={4.8}
          review={1029}
        />
        <LeisureStorePost
          imgUrl={textImg}
          name="가평빠지월드"
          rating={4.8}
          review={1029}
        />
        <LeisureStorePost
          imgUrl={textImg}
          name="가평빠지월드"
          rating={4.8}
          review={1029}
        />
        <LeisureStorePost
          imgUrl={textImg}
          name="가평빠지월드"
          rating={4.8}
          review={1029}
        />
        <LeisureStorePost
          imgUrl={textImg}
          name="가평빠지월드"
          rating={4.8}
          review={1029}
        />
        <LeisureStorePost
          imgUrl={textImg}
          name="가평빠지월드"
          rating={4.8}
          review={1029}
        />
      </section>
    </div>
  );
}
