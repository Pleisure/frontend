export default function CEOInfo() {
  return (
    <div className="mt-6 text-sm business-info">
      <p className="font-bold">판매자 정보</p>
      <table className="w-full mt-2">
        <tbody className="text-left">
          {BUSINESS_INFO.map(({ title, content }) => {
            return (
              <tr key={title}>
                <th className="border-[1px] bg-grayBg py-3 pl-3">{title}</th>
                <td className="border-[1px] py-3 pl-3 text-lightGrayTxt">
                  {content}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

const BUSINESS_INFO = [
  { title: '대표자명', content: '김사장' },
  { title: '상호명', content: '주식회사 빠지월드' },
  {
    title: '사업자 주소',
    content: '서울특별시 강남구 영동대로112길 15 (삼성동)',
  },
  { title: '사업자 등록번호', content: '191-81-12345' },
  { title: '이메일 주소', content: 'daeunkim212@gmail.com' },
  { title: '연락처', content: '010-1234-5678' },
];
