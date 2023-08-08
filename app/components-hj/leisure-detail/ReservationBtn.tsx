'use client';
export default function Reservation() {
  return (
    <div className="fixed z-50 w-[28rem] rounded-t-lg bottom-2 reservation-btn">
      <button className="w-full h-[3.5rem] text-white bg-cyanTxt btn btn-active border-1 border-cyanTxt hover:border-cyanTxt hover:bg-cyanTxt text-xl">
        예약하기
      </button>
      <style jsx>{`
        .reservation-btn {
          box-shadow: 0px -5px 5px 0 rgba(87, 83, 78, 0.2);
        }
      `}</style>
    </div>
  );
}
