import ReactHtmlParser from 'react-html-parser';

export default (title: { rendered: any }) => {
  const renderTitle = ReactHtmlParser(title.rendered);

  // @ts-ignore
  const matchDates = renderTitle[0].match(/\b\d*\.\d*\.\d*\b/ig);
  const dateStr = matchDates[0];
  const [day, month, year] = dateStr.split('.');

  const weekDay = new Date(+`20${year}`, month - 1, day).getDay();

  const days = [
    'воскресенье',
    'понедельник',
    'вторник',
    'среда',
    'четверг',
    'пятница',
    'суббота',
  ];

  return { day, month, year, weekDay: days[weekDay] };
};