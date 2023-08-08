export default function NavTab() {
  return (
    <nav className="flex mb-8 font-bold text-center leisure-tab">
      <div className="w-1/2 text-cyanTxt border-b-[1px] border-b-cyanTxt py-3 cursor-pointer">
        레저 정보
      </div>
      <div className="w-1/2 border-b-[1px] py-3 cursor-pointer">
        리뷰 (999+)
      </div>
    </nav>
  );
}
