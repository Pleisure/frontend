import CollapsibleContentText from './collapsible-content-text';
import ContentText from './content-text';

export default function ReviewContent({
  content: originalContent,
}: {
  content: string;
}) {
  const MAX_LENGTH = 60;
  const isShort = originalContent.length <= MAX_LENGTH;
  if (isShort) {
    return <ContentText>{originalContent}</ContentText>;
  }

  const croppedContent = originalContent.substring(0, MAX_LENGTH);
  return (
    <CollapsibleContentText
      content={originalContent}
      // originalContent={originalContent}
      // croppedContent={croppedContent}
    />
  );
}
