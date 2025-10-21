// src/formatTime/index.ts

/**
 * 格式化时间
 * @param {number} timestamp - 时间戳
 * @param {string} format - 格式化字符串 (可选)
 * @returns {string} 格式化后的时间字符串
 */
export function formatTime(
  timestamp: number,
  format = 'YYYY-MM-DD HH:mm:ss',
): string {
  const date = new Date(timestamp);
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  const hours = String(date.getHours()).padStart(2, '0');
  const minutes = String(date.getMinutes()).padStart(2, '0');
  const seconds = String(date.getSeconds()).padStart(2, '0');
  const map: { [key: string]: string } = {
    YYYY: String(year),
    MM: month,
    DD: day,
    HH: hours,
    mm: minutes,
    ss: seconds,
  };
  return format.replace(/YYYY|MM|DD|HH|mm|ss/g, (match) => map[match]);
}

export default formatTime;
