import { getEvents, PlannedEvent } from "../api/events/route";
import EventCard from "../../components/EventCard";
import { Background } from "../../components/Background";
export default async function events() {

    const events = (await getEvents()) as PlannedEvent[];
    return (
        <>
            <Background />
            <ul>
                {events.map((event, index) => (
                    <li key={index}>
                        <EventCard {...event} />
                    </li>
                ))}
            </ul>
        </>
    )
}