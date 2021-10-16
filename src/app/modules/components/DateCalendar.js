import './DateCalendar.css'

function DateCalendar(props) {
    const dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const monthNames = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];

    return (
        <div className="daticon">
            <div className="dow">
                {dayNames[props.date.getDay()].substring(0,3)}
            </div>
            <div className="day">
                {props.date.getDate()}
            </div>
            <div className="month">
                {monthNames[props.date.getMonth()].substring(0,3)}
            </div>
            { (typeof props.count !== 'undefined') && <span className="count">{props.count}</span> }
        </div>
    );
}

export default DateCalendar