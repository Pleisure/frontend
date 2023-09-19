import { CEO_INFO } from '@/app/libs-hj/data/CEO_INFO';
import { Table } from '../molecules/Table';

export default function CEOInfo() {
  const keyNames = Object.keys(CEO_INFO);

  return (
    <div className="mt-6 text-sm business-info">
      <p className="font-bold">판매자 정보</p>
      <Table tableClassName="w-full mt-2" tbodyClassName="text-left">
        <Table.Row
          keyNames={keyNames}
          keyNameIdx={0}
          ceoInfo={CEO_INFO.ceoName}
        />
        <Table.Row keyNameIdx={1} ceoInfo={CEO_INFO.ceoPhone} />
        <Table.Row keyNameIdx={2} ceoInfo={CEO_INFO.ceoEmail} />
        <Table.Row keyNameIdx={3} ceoInfo={CEO_INFO.ceoAddress} />
        <Table.Row keyNameIdx={4} ceoInfo={CEO_INFO.businessName} />
        <Table.Row keyNameIdx={5} ceoInfo={CEO_INFO.businessRegNumber} />
      </Table>
    </div>
  );
}
