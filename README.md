# Smart Mirror

A smart mirror built on top of the [MagicMirror²](https://github.com/MichMich/MagicMirror) framework, running on a Raspberry Pi behind a sheet of 30% reflective plastic mounted in a wood-stained 2x4 frame. The plastic lets the monitor's light through while the rest of the surface acts as a mirror — so when a module is displaying information, you see it, and everywhere else you just see your reflection.

The mirror is also Alexa-controllable. Different voice commands swap which modules are visible and where they're positioned on screen, so you can switch between views without touching anything.

## Modules

- **Calendar** — pulls events via the Google Calendar API
- **Gmail Feed** — displays latest unread emails
- **Compliments** — daily compliments, because why not
- **Weather** — current conditions via OpenWeatherMap API
- **Pollen Count** — local pollen breakdown by type
- **News Feed** — latest headlines via RSS
- **Tweets** — tweets from favorited accounts via the Twitter API
- **Alexa Control** — voice commands to toggle modules and switch display modes

## Demo

Below is a screenshot of the mirror in use — calendar, weather, news feed, and other modules displaying real-time information.

In this video, I'm using Alexa voice commands to swap between different module layouts on the mirror in real time.

[![Smart Mirror Alexa Demo](https://github.com/user-attachments/assets/PLACEHOLDER)](https://github.com/user-attachments/assets/PLACEHOLDER "Smart Mirror Alexa Control Demo")

## Credits

- [MagicMirror²](https://github.com/MichMich/MagicMirror)
- [Google Calendar API](https://developers.google.com/calendar)
- [OpenWeatherMap API](https://openweathermap.org/api)
- [Twitter API](https://developer.twitter.com/)
- [Alexa Skills Kit](https://developer.amazon.com/en-US/alexa)
