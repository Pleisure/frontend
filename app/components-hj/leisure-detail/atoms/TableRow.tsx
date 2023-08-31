interface BusinessInfo {
  ceoName: string;
  ceoPhone: string;
  ceoEmail: string;
  ceoAddress: string;
  businessName: string;
  businessRegNumber: string;
  [key: string]: string; // 인덱스 시그니처
}

interface Props {
  keyNames?: string[] | undefined;
  keyNameIdx: number;
  ceoInfo: string;
}

export default function TableRow({
  keyNames = [
    'ceoName',
    'ceoPhone',
    'ceoEmail',
    'ceoAddress',
    'businessName',
    'businessRegNumber',
  ],
  keyNameIdx,
  ceoInfo,
}: Props) {
  return (
    <tr>
      <th className="border-[1px] bg-grayBg py-3 pl-3">
        {BUSINESS_INFO[keyNames[keyNameIdx]]}
      </th>
      <td className="border-[1px] py-3 pl-3 text-lightGrayTxt">{ceoInfo}</td>
    </tr>
  );
}

const BUSINESS_INFO: BusinessInfo = {
  ceoName: '대표자명',
  ceoPhone: '연락처',
  ceoEmail: '이메일 주소',
  ceoAddress: '사업자 주소',
  businessName: '상호명',
  businessRegNumber: '사업자 등록번호',
};
