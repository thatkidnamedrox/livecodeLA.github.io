import { getEvents, PlannedEvent } from "../api/events/route";
import EventCard from "../../components/EventCard";
export default async function events() {

    const events = (await getEvents()) as PlannedEvent[];
    return (
        <ul>
            {events.map((event, index) => (
                <li key={index}>
                    <EventCard {...event} />
                </li>
            ))}
        </ul>
    )
}