export default function ReviewCountLimit(count: number) {
  return count > 999 ? '999+' : count;
}
