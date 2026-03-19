'use server'

import { neon } from '@neondatabase/serverless'


export interface PlannedEvent { 
    _event_id: Number,
    title: String,
    event_description: String,
    during?: Date,
    thumbnail_url?: String,
    street_address?: String,
    city?: String,
    state_province?: String,
    postal_code?: String,
    ticket_rsvp_link?: String,
    ticket_price?: Number,
    alt_text?: String
}

export async function getEvents() {
    const databaseUrl = process.env.NEXT_PUBLIC_DATABASE_URL;
    if (!databaseUrl) {
        throw new Error('Missing NEXT_PUBLIC_DATABASE_URL env var');
    }
    const sql = neon(databaseUrl);
    try {
        const events = await sql `SELECT * FROM livecodela_events`;
        return events;
    } catch (error) {
        console.error('Error fetching events: ', error);
        return [];
    }
}
