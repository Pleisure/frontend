export default function Gender({ value }: { value: string }) {
  switch (value) {
    case 'MALE':
      return <>남</>;
    case 'FEMALE':
      return <>여</>;
    default:
      return <>비공개</>;
  }
}
