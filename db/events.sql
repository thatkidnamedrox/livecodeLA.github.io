CREATE TABLE public.events (
    event_id SERIAL NOT NULL,
    title VARCHAR(255) NOT NULL,
    event_description text NOT NULL,
    during tstzrange,
    thumbnail_url text,
    street_address text,
    city text,
    state_province character VARCHAR(255),
    postal_code character VARCHAR(10),
    ticket_rsvp_link text,
    price real NOT NULL,
    PRIMARY KEY (event_id)
);

INSERT INTO public.events (
    event_id, title, 
    event_description, 
    during, 
    thumbnail_url, 
    street_address, 
    city,
    state_province,
    postal_code,
    ticket_rsvp_link,
    price
    ) VALUES (
        1,
        'Meetup @ Heavy Manners',
        'Join us for livecodeLA''s first meetup at Heavy Manners Library.
         We will be hosting an open projector, as well as a Flok jam.
         If you plan to partake in live coding, bring a laptop, otherwise, 
         feel free to bring just yourself. All skill levels are welcome!
         ',
         '[2026-04-05 15:00:00 America/Los_Angeles, 2026-04-05 18:00:00 America/Los_Angeles]',
         'https://upload.wikimedia.org/wikipedia/commons/2/25/Hydra-Foto.jpg',
         '1200 N Alvarado St Unit D',
         'Los Angeles',
         'CA',
         '90026',
         'https://heavymannerslibrary.com/',
         0
    )

INSERT INTO public.events (
    event_id, title, 
    event_description, 
    during, 
    thumbnail_url, 
    street_address, 
    city,
    state_province,
    postal_code,
    ticket_rsvp_link,
    price
    ) VALUES (
        2,
        'Meetup @ Heavy Manners',
        'Join us for livecodeLA''s first meetup at Heavy Manners Library.
         We will be hosting an open projector, as well as a Flok jam.
         If you plan to partake in live coding, bring a laptop, otherwise, 
         feel free to bring just yourself. All skill levels are welcome!
         ',
         '[2026-05-05 15:00:00 America/Los_Angeles, 2026-05-05 18:00:00 America/Los_Angeles]',
         'https://upload.wikimedia.org/wikipedia/commons/2/25/Hydra-Foto.jpg',
         '1200 N Alvarado St Unit D',
         'Los Angeles',
         'CA',
         '90026',
         'https://heavymannerslibrary.com/',
         0
    )

INSERT INTO public.events (
    event_id, title, 
    event_description, 
    during, 
    thumbnail_url, 
    street_address, 
    city,
    state_province,
    postal_code,
    ticket_rsvp_link,
    price
    ) VALUES (
        3,
        'Meetup @ Heavy Manners',
        'Join us for livecodeLA''s first meetup at Heavy Manners Library.
         We will be hosting an open projector, as well as a Flok jam.
         If you plan to partake in live coding, bring a laptop, otherwise, 
         feel free to bring just yourself. All skill levels are welcome!
         ',
         '[2026-06-05 15:00:00 America/Los_Angeles, 2026-04-05 18:00:00 America/Los_Angeles]',
         'https://upload.wikimedia.org/wikipedia/commons/2/25/Hydra-Foto.jpg',
         '1200 N Alvarado St Unit D',
         'Los Angeles',
         'CA',
         '90026',
         'https://heavymannerslibrary.com/',
         0
    )