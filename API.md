Users
===

Request
---

`GET /users/:screenname`

Response
---
```
  {
    user: {
      contributors_enabled: false,
      created_at: "Wed Dec 30 18:54:20 +0000 2009",
      default_profile: false,
      default_profile_image: false,
      description: "Software Engineer @AxiomZenTeam. Hacking on @ZenHubIO. Native French, I also speak English, Ruby and Javascript among others.",
      entities: {},
      favourites_count: 90,
      follow_request_sent: false,
      followers_count: 146,
      following: false,
      friends_count: 194,
      geo_enabled: true,
      id: 100569078,
      id_str: "100569078",
      is_translation_enabled: false,
      is_translator: false,
      lang: "en",
      listed_count: 8,
      location: "Vancouver, Canada",
      name: "Geoffrey Tisserand",
      needs_phone_verification: false,
      notifications: false,
      profile_background_color: "2E2E2E",
      profile_background_image_url: "http://abs.twimg.com/images/themes/theme1/bg.png",
      profile_background_image_url_https: "https://abs.twimg.com/images/themes/theme1/bg.png",
      profile_background_tile: true,
      profile_banner_url: "https://pbs.twimg.com/profile_banners/100569078/1424967070",
      profile_image_url: "http://pbs.twimg.com/profile_images/411876895324508161/X3w7VVqq_normal.jpeg",
      profile_image_url_https: "https://pbs.twimg.com/profile_images/411876895324508161/X3w7VVqq_normal.jpeg",
      profile_link_color: "858C8F",
      profile_location: null,
      profile_sidebar_border_color: "000000",
      profile_sidebar_fill_color: "DDEEF6",
      profile_text_color: "333333",
      profile_use_background_image: false,
      protected: false,
      screen_name: "geoffrey___",
      statuses_count: 202,
      suspended: false,
      time_zone: "Pacific Time (US & Canada)",
      url: "http://t.co/TDJUfoXMsu",
      utc_offset: -28800,
      verified: false
    }
  }
```

User tweets
===
Request
---
`GET /users/:screenname/tweets`

Response
---
```
{
  latest_tweets: [
    {
      contributors: null,
      coordinates: null,
      created_at: "Tue Mar 03 22:17:26 +0000 2015",
      entities: {},
      favorite_count: 0,
      favorited: false,
      geo: null,
      id: 572883506432327700,
      id_str: "572883506432327682",
      in_reply_to_screen_name: "github",
      in_reply_to_status_id: null,
      in_reply_to_status_id_str: null,
      in_reply_to_user_id: 13334762,
      in_reply_to_user_id_str: "13334762",
      lang: "en",
      place: null,
      retweet_count: 0,
      retweeted: false,
      source: "<a href="http://twitter.com" rel="nofollow">Twitter Web Client</a>",
      text: "@github @GitHubAPI any reason why label updates are not picked up by the issue list endpoint when using ,the since parameter? The rest is ok",
      truncated: false
    }
  ]
}

```
User reputation
===

Request
---
`GET /users/:screenname/reputation`

Response
---

