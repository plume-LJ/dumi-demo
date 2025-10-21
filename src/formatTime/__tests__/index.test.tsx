// src/formatTime/__tests__/index.test.tsx
import formatTime from '..';

describe('formatTime', () => {
  it('should format the timestamp correctly', () => {
    const timestamp = 1673850986000;
    const formattedTime = formatTime(timestamp);
    expect(formattedTime).toBe('2023-01-16 14:36:26');
  });

  it('should format the timestamp with custom format', () => {
    const timestamp = 1673850986000;
    const customFormat = 'YYYY-MM-DD HH:mm:ss';
    const formattedTime = formatTime(timestamp, customFormat);
    expect(formattedTime).toBe('2023-01-16 14:36:26');
  });
});
