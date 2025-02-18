export function formatKoreanDate(dateString: string) {
  const [year, month, day] = dateString.split("-");

  return `${year}년 ${Number(month)}월 ${Number(day)}일`;
}
