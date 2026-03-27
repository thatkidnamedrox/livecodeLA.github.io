import { PlannedEvent } from "../app/api/events/route"

export default function EventCard (event: PlannedEvent){

    const formatTimestamp = (timestamp:string) => {
        const date = timestamp.slice(0, 10);
        const time = timestamp.slice(11, 16);
        
        return [date, time];
    }
    
    const dateTime = event.during instanceof Date ? event.during.toISOString() : event.during
    return (
        <div className="event-card">
            <h2>{event.title}</h2>
            <p>{event.event_description}</p>
             <time dateTime={dateTime}>
                {formatTimestamp(dateTime!)[0]}
                <br />
                {formatTimestamp(dateTime!)[1]}
            </time>
            <address>
                {event.street_address}
                <br />
                {event.city}
                <br />
                {event.state_province + ' '}
                {event.postal_code}
            </address>
            {/* <Link href={event.ticket_rsvp_link as string} /> */}
        </div>
    )
}