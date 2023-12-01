'use client';

export default function Nav() {
  return (
    <nav className="z-30 flex mb-8 font-bold text-center bg-white leisure-tab">
      <div className="w-1/2 pb-3 pt-6 text-cyanTxt border-b-[1px] border-b-cyanTxt cursor-pointer">
        레저 정보
      </div>
      <div className="w-1/2 pb-3 pt-6 border-b-[1px] cursor-pointer">
        리뷰 (999+)
      </div>
      <style jsx>
        {`
          .leisure-tab {
            position: -webkit-sticky;
            position: sticky;
            top: 0;
          }
        `}
      </style>
    </nav>
  );
}
