import { PlannedEvent } from "../app/api/events/route"
// import Link from "next/link";
// import Image from "next/image";

export default function EventCard (event: PlannedEvent){
    return (
        <div>
            <h2>{event.title}</h2>
            {/* <Image 
                src={event.thumbnail_url as string}
                alt={event.alt_text as string}
            /> */}
            <p>{event.event_description}</p>
             <time dateTime={event.during instanceof Date ? event.during.toISOString() : event.during}>
                {event.during instanceof Date ? event.during.toString() : event.during}
            </time>
            <address>
                {event.street_address}
                <br />
                {event.city}
                <br />
                {event.state_province}
                <br />
                {event.postal_code}
            </address>
            {/* <Link href={event.ticket_rsvp_link as string} /> */}
        </div>
    )
}