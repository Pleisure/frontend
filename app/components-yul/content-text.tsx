export default function ContentText({
  children,
}: {
  children: React.ReactNode;
}) {
  return <p style={{ whiteSpace: 'pre-wrap' }}>{children}</p>;
}
