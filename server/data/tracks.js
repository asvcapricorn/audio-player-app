const tracks = [
  {
    id: 1,
    title: "Eternal Sunset",
    artist: "Skyline Sounds",
    duration: 2.31,
    size_mb: 8.57
  },
  {
    id: 2,
    title: "City Nights",
    artist: "Urban Beats",
    duration: 4.24,
    size_mb: 3.88
  },
  {
    id: 3,
    title: "Ocean Breeze",
    artist: "Deep Wave",
    duration: 3.93,
    size_mb: 3.6
  },
  {
    id: 4,
    title: "Morning Dew",
    artist: "Fresh Air",
    duration: 8.47,
    size_mb: 7.75
  },
  {
    id: 5,
    title: "Starlit Road",
    artist: "Cosmic Rhythms",
    duration: 2.20,
    size_mb: 2.01
  },
  {
    id: 6,
    title: "Midnight Escape",
    artist: "Nightfall",
    duration: 5.23,
    size_mb: 4.77
  },
  {
    id: 7,
    title: "Electric Heart",
    artist: "Volt Sparks",
    duration: 6.85,
    size_mb: 6.33
  },
  {
    id: 8,
    title: "Sunrise Over The City",
    artist: "Dawn Architects",
    duration: 4.96,
    size_mb: 4.57
  },
  {
    id: 9,
    title: "Lost in the Echo",
    artist: "Wave Form",
    duration: 7.56,
    size_mb: 6.98
  },
  {
    id: 10,
    title: "Neon Pulse",
    artist: "Urban Vibes",
    duration: 3.87,
    size_mb: 3.54
  },
  {
    id: 11,
    title: "Underwater Dreams",
    artist: "Aqua Groove",
    duration: 6.62,
    size_mb: 6.09
  },
  {
    id: 12,
    title: "Desert Mirage",
    artist: "Sahara Beats",
    duration: 4.77,
    size_mb: 4.38
  },
  {
    id: 13,
    title: "Night Sky",
    artist: "Celestial Sounds",
    duration: 3.94,
    size_mb: 3.61
  },
  {
    id: 14,
    title: "Horizon Shift",
    artist: "Future Horizons",
    duration: 7.33,
    size_mb: 6.74
  },
  {
    id: 15,
    title: "Echoes of the Past",
    artist: "Timeless Waves",
    duration: 5.64,
    size_mb: 5.16
  },
  {
    id: 16,
    title: "Rising Tide",
    artist: "Ocean Flow",
    duration: 6.41,
    size_mb: 5.88
  },
  {
    id: 17,
    title: "Blue Horizon",
    artist: "Sky Coast",
    duration: 8.15,
    size_mb: 7.47
  },
  {
    id: 18,
    title: "Northern Lights",
    artist: "Aurora Dream",
    duration: 6.94,
    size_mb: 6.39
  },
  {
    id: 19,
    title: "Silent Night",
    artist: "Solitude Beats",
    duration: 4.48,
    size_mb: 4.13
  },
  {
    id: 20,
    title: "Moonlit Journey",
    artist: "Lunar Orchestra",
    duration: 9.23,
    size_mb: 8.44
  },
  {
    id: 21,
    title: "Frozen Moments",
    artist: "Ice Queen",
    duration: 4.03,
    size_mb: 3.71
  },
  {
    id: 22,
    title: "Violet Sky",
    artist: "Dusk Echo",
    duration: 7.29,
    size_mb: 6.73
  },
  {
    id: 23,
    title: "Waves of Change",
    artist: "Fluid Motion",
    duration: 6.75,
    size_mb: 6.17
  },
  {
    id: 24,
    title: "Crystal Lake",
    artist: "Nature Spirits",
    duration: 5.49,
    size_mb: 5.05
  },
  {
    id: 25,
    title: "Timeless Moment",
    artist: "Vintage Rhythms",
    duration: 7.64,
    size_mb: 7.02
  },
  {
    id: 26,
    title: "Galaxy's Edge",
    artist: "Stellar Frequencies",
    duration: 8.28,
    size_mb: 7.64
  },
  {
    id: 27,
    title: "Infinite Dreams",
    artist: "Endless Journey",
    duration: 6.52,
    size_mb: 5.99
  },
  {
    id: 28,
    title: "Solar Flare",
    artist: "Heatwave",
    duration: 5.89,
    size_mb: 5.42
  },
  {
    id: 29,
    title: "Into the Wilderness",
    artist: "Wild Roots",
    duration: 4.21,
    size_mb: 3.88
  },
  {
    id: 30,
    title: "Echo in the Mountains",
    artist: "Alpine Voice",
    duration: 8.14,
    size_mb: 7.46
  },
  {
    id: 31,
    title: "Morning Mist",
    artist: "Cloudrise",
    duration: 6.47,
    size_mb: 5.95
  },
  {
    id: 32,
    title: "Chasing the Moon",
    artist: "Lunar Run",
    duration: 4.92,
    size_mb: 4.5
  },
  {
    id: 33,
    title: "Whispers of the Forest",
    artist: "Green Echoes",
    duration: 7.02,
    size_mb: 6.44
  },
  {
    id: 34,
    title: "Crimson Sunset",
    artist: "Red Sky",
    duration: 5.8,
    size_mb: 5.33
  },
  {
    id: 35,
    title: "Digital Dreams",
    artist: "Techno Pulse",
    duration: 6.33,
    size_mb: 5.9
  },
  {
    id: 36,
    title: "Gravity Waves",
    artist: "Planetary Sound",
    duration: 7.15,
    size_mb: 6.56
  },
  {
    id: 37,
    title: "Electric Dreams",
    artist: "Neon Flux",
    duration: 5.91,
    size_mb: 5.46
  },
  {
    id: 38,
    title: "Wind in the Pines",
    artist: "Whispering Winds",
    duration: 7.67,
    size_mb: 7.05
  },
  {
    id: 39,
    title: "Silent Sea",
    artist: "Blue Horizon",
    duration: 6.0,
    size_mb: 5.5
  },
  {
    id: 40,
    title: "Autumn Breeze",
    artist: "Harvest Song",
    duration: 8.1,
    size_mb: 7.42
  },
  {
    id: 41,
    title: "Falling Stars",
    artist: "Cosmic Voyagers",
    duration: 6.25,
    size_mb: 5.75
  },
  {
    id: 42,
    title: "Nightfall",
    artist: "The Dark Knights",
    duration: 7.52,
    size_mb: 6.92
  },
  {
    id: 43,
    title: "Deep Blue",
    artist: "Aqua Beat",
    duration: 6.82,
    size_mb: 6.26
  },
  {
    id: 44,
    title: "Melancholy Dream",
    artist: "Dream State",
    duration: 5.92,
    size_mb: 5.48
  },
  {
    id: 45,
    title: "Golden Hour",
    artist: "Sunset Sounds",
    duration: 7.35,
    size_mb: 6.76
  },
  {
    id: 46,
    title: "Distant Echoes",
    artist: "Faraway Rhythm",
    duration: 6.51,
    size_mb: 5.99
  },
  {
    id: 47,
    title: "Winter Solstice",
    artist: "Chillwave",
    duration: 8.33,
    size_mb: 7.65
  },
  {
    id: 48,
    title: "Electric Skies",
    artist: "Future Electro",
    duration: 7.88,
    size_mb: 7.23
  },
  {
    id: 49,
    title: "Lost Time",
    artist: "Retro Wave",
    duration: 6.12,
    size_mb: 5.64
  },
  {
    id: 50,
    title: "Firefly Lights",
    artist: "Night Dreams",
    duration: 5.72,
    size_mb: 5.26
  },
];

module.exports = { tracks };
