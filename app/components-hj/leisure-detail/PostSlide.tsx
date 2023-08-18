export default function PostSlide() {
  return (
    <div className="relative w-full h-[25rem] slide bg-grayBg">
      <div className="slide-inner"></div>
      <div className="absolute bottom-4 left-[50%] -translate-x-[50%] rounded-full slide-cnt bg-darkGrayBg">
        <p className="px-3 py-1 text-xs text-center ">
          <strong>1</strong> / 10
        </p>
      </div>
    </div>
  );
}
