# Smart Mirror
 
A smart mirror built on top of the [MagicMirror²](https://github.com/MichMich/MagicMirror) framework, running on a Raspberry Pi. The frame is built from wood-stained 2x4s, and the screen is a sheet of 30% reflective plastic sitting in front of a standard monitor. The plastic lets the monitor's backlight through wherever a module is rendering content, and everywhere else it acts as a regular mirror. The result is that information appears to float on a reflective surface — calendar events, weather, emails — all visible at a glance while you're getting ready in the morning.
 
The mirror pulls from several APIs to display real-time data: Google Calendar for events, Gmail for unread emails, OpenWeatherMap for current conditions, a pollen tracker that breaks down counts by pollen type for my local area, and an RSS-based news feed for headlines. There's also a Twitter module that surfaces tweets from favorited accounts, and a compliments module that rotates daily compliments on screen (because why not).
 
The whole thing is Alexa-controllable. Using the Alexa Skills Kit, I set up voice commands that toggle which modules are visible and reposition them on screen. Different commands trigger different display modes — so you can say something and the mirror rearranges itself, swapping between a full dashboard view and a more minimal layout without touching anything. The integration means the mirror essentially has multiple "views" you can switch between hands-free.
 
On the hardware side, the Raspberry Pi connects to the monitor and runs the MagicMirror² server. The config handles module placement, API keys, and the Alexa skill routing. The CSS layer handles the visual styling on the reflective surface.
 
## Modules
 
- **Calendar** — pulls events via the Google Calendar API
- **Gmail Feed** — displays latest unread emails
- **Compliments** — daily compliments, rotated on screen
- **Weather** — current conditions via OpenWeatherMap API
- **Pollen Count** — local pollen breakdown by type
- **News Feed** — latest headlines via RSS
- **Tweets** — tweets from favorited accounts via the Twitter API
- **Alexa Control** — voice commands to toggle modules, switch layouts, and reposition content
 
## Demo
 
Below is a screenshot of the mirror in use — calendar, weather, news feed, and other modules displaying real-time information.
 
In this video, I'm using Alexa voice commands to swap between different module layouts on the mirror in real time.

[![Smart Mirror Demo](https://github.com/user-attachments/assets/84f04a63-4e9e-4597-804a-00e303a1b65d)](https://github.com/user-attachments/assets/84f04a63-4e9e-4597-804a-00e303a1b65d "Smart Mirror Demo Video")

Credits

- [MagicMirror²](https://github.com/MichMich/MagicMirror)
- [Google Calendar API](https://developers.google.com/calendar)
- [OpenWeatherMap API](https://openweathermap.org/api)
- [Twitter API](https://developer.twitter.com/en/docs/twitter-api)
- [Alexa Skills Kit](https://developer.amazon.com/en-US/alexa/alexa-skills-kit)
