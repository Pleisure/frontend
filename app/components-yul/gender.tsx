export default function Gender({ value }: { value: string }) {
  switch (value) {
    case 'MALE':
      return <>남성</>;
    case 'FEMALE':
      return <>여성</>;
    default:
      return <>비공개</>;
  }
}
