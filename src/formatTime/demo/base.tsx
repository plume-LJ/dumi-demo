import { formatTime } from 'dumi2-demo';
import React, { useEffect, useState } from 'react';

const APP: React.FC = () => {
  const [currentDate, setCurrentDate] = useState(formatTime(Date.now()));
  const [siteDate, setSiteDate] = useState<string>();

  useEffect(() => {
    const timeStamp = 1673850986000;
    setSiteDate(formatTime(timeStamp));
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentDate(formatTime(Date.now()));
    }, 1000);
    return () => {
      clearInterval(timer);
    };
  }, []);

  const inputRef = React.createRef<HTMLInputElement>();
  const onFormatData = () => {
    const value = inputRef.current?.value;
    if (value) {
      setSiteDate(formatTime(Number(value)));
    }
  };

  return (
    <>
      当前时间:{currentDate}
      <hr />
      指定时间转换：
      <input ref={inputRef} type="number" defaultValue={1673850986000} />
      <button type="button" onClick={onFormatData}>
        转换
      </button>
      <span>{siteDate}</span>
    </>
  );
};

export default APP;
