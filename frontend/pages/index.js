
export default function Home() {

  const days = [
    'Даваа', 'Мягмар', 'Лхагва', 'Пүрэв', 'Баасан', 'Бямба', 'Ням'
  ];
  const times = [
    '00:00-00:00',
    '07:40-08:25', '08:25-09:10',
    '09:20-10:05', '10:05-10:50',
    '11:00-11:45', '11:45-12:30',
    '12:40-13:25', '13:25-14:10',
    '14:20-15:05', '15:05-15:50',
    '16:00-16:45', '16:45-17:30',
    '17:40-18:25', '18:25-19:10',
    '19:20-20:05', '20:05-20:50',
    '21:00-21:45', '21:45-22:30',
  ]
  return (
    <div className="justify-center flex border m-20 flex-col" >
      {times.map((time, i) => (
        <div className="flex-row flex">
          <div className="border m-5 p-5 rounded grow">
            {time}
          </div>
          {days.map(day => (
            <div className="border m-5 p-5 rounded flex-1">
              {i === 0 ? day : null}
            </div>
          ))}
        </div>
      ))}
    </div>
  )
}

function TableData({children}){
  return (
    <td className="border">
      {children}
    </td>
  )
}