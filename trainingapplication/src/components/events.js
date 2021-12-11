import SchedulerCalendar from 'scheduler-calendar'
import 'scheduler-calendar/dist/index.css'


function Events() {
    return (
        <div style={{ width: '1000px', marginLeft: '25%' }}>
            <SchedulerCalendar
                availabilities={[
                    {
                        day: "2021-12-24",
                        slots: [
                            { from: '10:30', to: '11:30' },
                        ]
                    },
                    {
                        day: "2021-12-21",
                        slots: [
                            { from: '12:32', to: '13:32' },
                            { from: '12:32', to: '13:02' },
                        ]
                    },
                    {
                        day: "2021-12-22",
                        slots: [
                            { from: '12:45', to: '14:15' },
                        ]
                    },
                    {
                        day: "2021-12-28",
                        slots: [
                            { from: '12:15', to: '13:15' },
                        ]
                    },
                    {
                        day: "2021-12-29",
                        slots: [
                            { from: '17:00', to: '18:00' },
                        ]
                    },
                    {
                        day: "mon",
                        slots: [
                            { from: '09:00', to: '10:30' },
                            { from: '11:30', to: '13:00' },
                            { from: '14:30', to: '17:00' },
                        ]
                    },
                    {
                        day: "2021-12-28",
                        slots: [
                            { from: '09:00', to: '10:30' },
                            { from: '11:30', to: '19:00' },
                        ]
                    },
                ]}
                availabilityType={'infinity'}
                duration={10}
                onIntervalChange={() => { }}
                is24hour={true}
            />
        </div>
    )
}

export default Events;