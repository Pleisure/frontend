import { CEO_INFO } from '@/app/libs-hj/data/CEO_INFO';
import TableRow from '../atoms/TableRow';

export default function CEOInfo() {
  const keyNames = Object.keys(CEO_INFO);

  return (
    <div className="mt-6 text-sm business-info">
      <p className="font-bold">판매자 정보</p>
      <table className="w-full mt-2">
        <tbody className="text-left">
          <TableRow
            keyNames={keyNames}
            keyNameIdx={0}
            ceoInfo={CEO_INFO.ceoName}
          />
          <TableRow keyNameIdx={1} ceoInfo={CEO_INFO.ceoPhone} />
          <TableRow keyNameIdx={2} ceoInfo={CEO_INFO.ceoEmail} />
          <TableRow keyNameIdx={3} ceoInfo={CEO_INFO.ceoAddress} />
          <TableRow keyNameIdx={4} ceoInfo={CEO_INFO.businessName} />
          <TableRow keyNameIdx={5} ceoInfo={CEO_INFO.businessRegNumber} />
        </tbody>
      </table>
    </div>
  );
}
