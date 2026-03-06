// Countries data with flags and travel information
const countries = [
    // Existing countries (1-10)
    {
        id: 1,
        name: "France",
        capital: "Paris",
        continent: "Europe",
        flag: "🇫🇷",
        image: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        description: "Experience the romance of Paris, the French Riviera, and world-class cuisine.",
        bestTime: "April-June, September-October",
        currency: "Euro (€)",
        languages: ["French"],
        popularCities: ["Paris", "Nice", "Lyon", "Marseille"],
        averageCost: "$$$"
    },
    {
        id: 2,
        name: "Japan",
        capital: "Tokyo",
        continent: "Asia",
        flag: "🇯🇵",
        image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        description: "Blend of ancient traditions and cutting-edge technology.",
        bestTime: "March-May, September-November",
        currency: "Japanese Yen (¥)",
        languages: ["Japanese"],
        popularCities: ["Tokyo", "Kyoto", "Osaka", "Hiroshima"],
        averageCost: "$$$"
    },
    {
        id: 3,
        name: "United States",
        capital: "Washington D.C.",
        continent: "North America",
        flag: "🇺🇸",
        image: "https://images.unsplash.com/photo-1516483638261-f4dbaf036963?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        description: "Diverse landscapes from New York skyscrapers to California beaches.",
        bestTime: "May-September",
        currency: "US Dollar ($)",
        languages: ["English"],
        popularCities: ["New York", "Los Angeles", "Las Vegas", "Miami"],
        averageCost: "$$$"
    },
    {
        id: 4,
        name: "Italy",
        capital: "Rome",
        continent: "Europe",
        flag: "🇮🇹",
        image: "https://images.unsplash.com/photo-1515542622106-78bda8ba0e5b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        description: "Historic landmarks, delicious cuisine, and beautiful coastlines.",
        bestTime: "April-June, September-October",
        currency: "Euro (€)",
        languages: ["Italian"],
        popularCities: ["Rome", "Venice", "Florence", "Milan"],
        averageCost: "$$$"
    },
    {
        id: 5,
        name: "Australia",
        capital: "Canberra",
        continent: "Oceania",
        flag: "🇦🇺",
        image: "https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        description: "Stunning beaches, unique wildlife, and vibrant cities.",
        bestTime: "September-November, March-May",
        currency: "Australian Dollar (A$)",
        languages: ["English"],
        popularCities: ["Sydney", "Melbourne", "Brisbane", "Perth"],
        averageCost: "$$$"
    },
    {
        id: 6,
        name: "Thailand",
        capital: "Bangkok",
        continent: "Asia",
        flag: "🇹🇭",
        image: "https://images.unsplash.com/photo-1528181304800-259b08848526?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        description: "Beautiful beaches, ornate temples, and delicious street food.",
        bestTime: "November-February",
        currency: "Thai Baht (฿)",
        languages: ["Thai"],
        popularCities: ["Bangkok", "Phuket", "Chiang Mai", "Pattaya"],
        averageCost: "$"
    },
    {
        id: 7,
        name: "Canada",
        capital: "Ottawa",
        continent: "North America",
        flag: "🇨🇦",
        image: "https://images.unsplash.com/photo-1503614472-8c93d56e92ce?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        description: "Vast wilderness, friendly cities, and multicultural society.",
        bestTime: "June-August, December-March",
        currency: "Canadian Dollar (C$)",
        languages: ["English", "French"],
        popularCities: ["Toronto", "Vancouver", "Montreal", "Quebec City"],
        averageCost: "$$$"
    },
    {
        id: 8,
        name: "Spain",
        capital: "Madrid",
        continent: "Europe",
        flag: "🇪🇸",
        image: "https://images.unsplash.com/photo-1512470876302-972faa2aa9a4?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        description: "Vibrant culture, stunning architecture, and beautiful beaches.",
        bestTime: "March-May, September-November",
        currency: "Euro (€)",
        languages: ["Spanish"],
        popularCities: ["Barcelona", "Madrid", "Seville", "Valencia"],
        averageCost: "$$"
    },
    {
        id: 9,
        name: "United Kingdom",
        capital: "London",
        continent: "Europe",
        flag: "🇬🇧",
        image: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        description: "Rich history, royal heritage, and diverse cities.",
        bestTime: "June-August",
        currency: "British Pound (£)",
        languages: ["English"],
        popularCities: ["London", "Edinburgh", "Manchester", "Liverpool"],
        averageCost: "$$$"
    },
    {
        id: 10,
        name: "Mexico",
        capital: "Mexico City",
        continent: "North America",
        flag: "🇲🇽",
        image: "https://images.unsplash.com/photo-1518635017498-87f514b751ba?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        description: "Ancient ruins, beautiful beaches, and vibrant culture.",
        bestTime: "December-April",
        currency: "Mexican Peso (MXN)",
        languages: ["Spanish"],
        popularCities: ["Cancun", "Mexico City", "Guadalajara", "Tulum"],
        averageCost: "$"
    },
    
    // Europe (11-50)
    {
        id: 11,
        name: "Germany",
        capital: "Berlin",
        continent: "Europe",
        flag: "🇩🇪",
        image: "https://images.unsplash.com/photo-1528728329032-2972f65dfb3f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        description: "Historic cities, stunning castles, and vibrant cultural scene.",
        bestTime: "May-September",
        currency: "Euro (€)",
        languages: ["German"],
        popularCities: ["Berlin", "Munich", "Hamburg", "Frankfurt"],
        averageCost: "$$$"
    },
    {
        id: 12,
        name: "Portugal",
        capital: "Lisbon",
        continent: "Europe",
        flag: "🇵🇹",
        image: "https://images.unsplash.com/photo-1555881400-74d7acaacd8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        description: "Beautiful coastline, historic cities, and delicious cuisine.",
        bestTime: "March-October",
        currency: "Euro (€)",
        languages: ["Portuguese"],
        popularCities: ["Lisbon", "Porto", "Faro", "Madeira"],
        averageCost: "$$"
    },
    {
        id: 13,
        name: "Netherlands",
        capital: "Amsterdam",
        continent: "Europe",
        flag: "🇳🇱",
        image: "https://images.unsplash.com/photo-1512470887635-5c6c30080e28?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        description: "Canals, windmills, tulip fields, and cycling culture.",
        bestTime: "April-September",
        currency: "Euro (€)",
        languages: ["Dutch"],
        popularCities: ["Amsterdam", "Rotterdam", "Utrecht", "The Hague"],
        averageCost: "$$$"
    },
    {
        id: 14,
        name: "Switzerland",
        capital: "Bern",
        continent: "Europe",
        flag: "🇨🇭",
        image: "https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        description: "Alpine landscapes, chocolate, and precision engineering.",
        bestTime: "June-September, December-March",
        currency: "Swiss Franc (CHF)",
        languages: ["German", "French", "Italian", "Romansh"],
        popularCities: ["Zurich", "Geneva", "Lucerne", "Interlaken"],
        averageCost: "$$$$"
    },
    {
        id: 15,
        name: "Greece",
        capital: "Athens",
        continent: "Europe",
        flag: "🇬🇷",
        image: "https://images.unsplash.com/photo-1523531294919-4bcd7c65e216?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        description: "Ancient history, beautiful islands, and Mediterranean cuisine.",
        bestTime: "May-October",
        currency: "Euro (€)",
        languages: ["Greek"],
        popularCities: ["Athens", "Santorini", "Mykonos", "Thessaloniki"],
        averageCost: "$$"
    },
    {
        id: 16,
        name: "Sweden",
        capital: "Stockholm",
        continent: "Europe",
        flag: "🇸🇪",
        image: "https://images.unsplash.com/photo-1513944174027-5dc3c9b5d6f6?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        description: "Northern lights, archipelagos, and modern design.",
        bestTime: "June-August, December-February",
        currency: "Swedish Krona (SEK)",
        languages: ["Swedish"],
        popularCities: ["Stockholm", "Gothenburg", "Malmö", "Uppsala"],
        averageCost: "$$$"
    },
    {
        id: 17,
        name: "Norway",
        capital: "Oslo",
        continent: "Europe",
        flag: "🇳🇴",
        image: "https://images.unsplash.com/photo-1527004013197-933c4bb611b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        description: "Fjords, northern lights, and stunning natural beauty.",
        bestTime: "June-August, December-February",
        currency: "Norwegian Krone (NOK)",
        languages: ["Norwegian"],
        popularCities: ["Oslo", "Bergen", "Trondheim", "Tromsø"],
        averageCost: "$$$$"
    },
    {
        id: 18,
        name: "Denmark",
        capital: "Copenhagen",
        continent: "Europe",
        flag: "🇩🇰",
        image: "https://images.unsplash.com/photo-1513622470522-26c3c8a854bc?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        description: "Hygge culture, modern design, and happy people.",
        bestTime: "June-August",
        currency: "Danish Krone (DKK)",
        languages: ["Danish"],
        popularCities: ["Copenhagen", "Aarhus", "Odense", "Aalborg"],
        averageCost: "$$$"
    },
    {
        id: 19,
        name: "Ireland",
        capital: "Dublin",
        continent: "Europe",
        flag: "🇮🇪",
        image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        description: "Green landscapes, friendly pubs, and rich literary history.",
        bestTime: "June-August",
        currency: "Euro (€)",
        languages: ["English", "Irish"],
        popularCities: ["Dublin", "Galway", "Cork", "Belfast"],
        averageCost: "$$$"
    },
    {
        id: 20,
        name: "Austria",
        capital: "Vienna",
        continent: "Europe",
        flag: "🇦🇹",
        image: "https://images.unsplash.com/photo-1516550893923-42d28e5677af?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        description: "Alpine scenery, classical music, and imperial history.",
        bestTime: "April-October, December",
        currency: "Euro (€)",
        languages: ["German"],
        popularCities: ["Vienna", "Salzburg", "Innsbruck", "Graz"],
        averageCost: "$$$"
    },
    {
        id: 21,
        name: "Belgium",
        capital: "Brussels",
        continent: "Europe",
        flag: "🇧🇪",
        image: "https://images.unsplash.com/photo-1580976961738-f0a7c9d7d158?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        description: "Medieval towns, chocolate, beer, and EU headquarters.",
        bestTime: "April-June, September-October",
        currency: "Euro (€)",
        languages: ["Dutch", "French", "German"],
        popularCities: ["Brussels", "Bruges", "Ghent", "Antwerp"],
        averageCost: "$$$"
    },
    {
        id: 22,
        name: "Czech Republic",
        capital: "Prague",
        continent: "Europe",
        flag: "🇨🇿",
        image: "https://images.unsplash.com/photo-1519677100203-9ff7c8a1c710?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        description: "Historic architecture, delicious beer, and medieval charm.",
        bestTime: "April-October",
        currency: "Czech Koruna (CZK)",
        languages: ["Czech"],
        popularCities: ["Prague", "Brno", "Český Krumlov", "Karlovy Vary"],
        averageCost: "$$"
    },
    {
        id: 23,
        name: "Poland",
        capital: "Warsaw",
        continent: "Europe",
        flag: "🇵🇱",
        image: "https://images.unsplash.com/photo-1599159340650-c9c8218f3b4c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        description: "Rich history, medieval architecture, and hearty cuisine.",
        bestTime: "May-September",
        currency: "Polish Złoty (PLN)",
        languages: ["Polish"],
        popularCities: ["Warsaw", "Krakow", "Gdańsk", "Wrocław"],
        averageCost: "$$"
    },
    {
        id: 24,
        name: "Hungary",
        capital: "Budapest",
        continent: "Europe",
        flag: "🇭🇺",
        image: "https://images.unsplash.com/photo-1551867633-194f125bddfa?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        description: "Thermal baths, grand architecture, and unique cuisine.",
        bestTime: "April-May, September-October",
        currency: "Hungarian Forint (HUF)",
        languages: ["Hungarian"],
        popularCities: ["Budapest", "Debrecen", "Szeged", "Eger"],
        averageCost: "$$"
    },
    {
        id: 25,
        name: "Finland",
        capital: "Helsinki",
        continent: "Europe",
        flag: "🇫🇮",
        image: "https://images.unsplash.com/photo-1511895426328-dc8714191300?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        description: "Thousands of lakes, sauna culture, and northern lights.",
        bestTime: "June-August, December-February",
        currency: "Euro (€)",
        languages: ["Finnish", "Swedish"],
        popularCities: ["Helsinki", "Rovaniemi", "Tampere", "Turku"],
        averageCost: "$$$"
    },
    {
        id: 26,
        name: "Iceland",
        capital: "Reykjavik",
        continent: "Europe",
        flag: "🇮🇸",
        image: "https://images.unsplash.com/photo-1501706362039-c06b2d715385?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        description: "Geothermal wonders, volcanoes, and stunning landscapes.",
        bestTime: "June-August, September-March (Northern Lights)",
        currency: "Icelandic Króna (ISK)",
        languages: ["Icelandic"],
        popularCities: ["Reykjavik", "Akureyri", "Vík", "Húsavík"],
        averageCost: "$$$$"
    },
    
    // Asia (27-60)
    {
        id: 27,
        name: "China",
        capital: "Beijing",
        continent: "Asia",
        flag: "🇨🇳",
        image: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        description: "Ancient civilization, modern cities, and diverse landscapes.",
        bestTime: "April-May, September-October",
        currency: "Chinese Yuan (¥)",
        languages: ["Mandarin"],
        popularCities: ["Beijing", "Shanghai", "Xi'an", "Guilin"],
        averageCost: "$$"
    },
    {
        id: 28,
        name: "India",
        capital: "New Delhi",
        continent: "Asia",
        flag: "🇮🇳",
        image: "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        description: "Diverse culture, ancient history, and vibrant colors.",
        bestTime: "October-March",
        currency: "Indian Rupee (₹)",
        languages: ["Hindi", "English"],
        popularCities: ["Delhi", "Mumbai", "Jaipur", "Goa"],
        averageCost: "$"
    },
    {
        id: 29,
        name: "South Korea",
        capital: "Seoul",
        continent: "Asia",
        flag: "🇰🇷",
        image: "https://images.unsplash.com/photo-1534274988757-a28bf1a57c17?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        description: "K-pop, technology, ancient temples, and delicious food.",
        bestTime: "April-June, September-November",
        currency: "South Korean Won (₩)",
        languages: ["Korean"],
        popularCities: ["Seoul", "Busan", "Jeju Island", "Incheon"],
        averageCost: "$$"
    },
    {
        id: 30,
        name: "Vietnam",
        capital: "Hanoi",
        continent: "Asia",
        flag: "🇻🇳",
        image: "https://images.unsplash.com/photo-1528127269322-539801943592?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        description: "Stunning landscapes, rich history, and amazing cuisine.",
        bestTime: "February-April, August-October",
        currency: "Vietnamese Dong (₫)",
        languages: ["Vietnamese"],
        popularCities: ["Hanoi", "Ho Chi Minh City", "Halong Bay", "Hoi An"],
        averageCost: "$"
    },
    {
        id: 31,
        name: "Indonesia",
        capital: "Jakarta",
        continent: "Asia",
        flag: "🇮🇩",
        image: "https://images.unsplash.com/photo-1513415564515-763d91423bdd?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        description: "Thousands of islands, diverse cultures, and beautiful beaches.",
        bestTime: "May-September",
        currency: "Indonesian Rupiah (Rp)",
        languages: ["Indonesian"],
        popularCities: ["Bali", "Jakarta", "Yogyakarta", "Lombok"],
        averageCost: "$"
    },
    {
        id: 32,
        name: "Philippines",
        capital: "Manila",
        continent: "Asia",
        flag: "🇵🇭",
        image: "https://images.unsplash.com/photo-1528164344705-47542687000d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        description: "Beautiful islands, friendly people, and amazing diving spots.",
        bestTime: "November-April",
        currency: "Philippine Peso (₱)",
        languages: ["Filipino", "English"],
        popularCities: ["Manila", "Cebu", "Palawan", "Boracay"],
        averageCost: "$"
    },
    {
        id: 33,
        name: "Malaysia",
        capital: "Kuala Lumpur",
        continent: "Asia",
        flag: "🇲🇾",
        image: "https://images.unsplash.com/photo-1528495612343-9ca9f4a4de28?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        description: "Modern cities, rainforests, and diverse cultures.",
        bestTime: "December-March, June-August",
        currency: "Malaysian Ringgit (RM)",
        languages: ["Malay"],
        popularCities: ["Kuala Lumpur", "Penang", "Langkawi", "Malacca"],
        averageCost: "$$"
    },
    {
        id: 34,
        name: "Singapore",
        capital: "Singapore",
        continent: "Asia",
        flag: "🇸🇬",
        image: "https://images.unsplash.com/photo-1525625293386-3f8f99389edd?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        description: "Garden city, diverse food, and modern architecture.",
        bestTime: "February-April",
        currency: "Singapore Dollar (S$)",
        languages: ["English", "Malay", "Mandarin", "Tamil"],
        popularCities: ["Singapore"],
        averageCost: "$$$"
    },
    {
        id: 35,
        name: "Sri Lanka",
        capital: "Colombo",
        continent: "Asia",
        flag: "🇱🇰",
        image: "https://images.unsplash.com/photo-1564569946618-e936ac502f32?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        description: "Tea plantations, ancient ruins, and beautiful beaches.",
        bestTime: "December-March",
        currency: "Sri Lankan Rupee (LKR)",
        languages: ["Sinhala", "Tamil"],
        popularCities: ["Colombo", "Kandy", "Galle", "Mirissa"],
        averageCost: "$$"
    },
    {
        id: 36,
        name: "Turkey",
        capital: "Ankara",
        continent: "Asia",
        flag: "🇹🇷",
        image: "https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        description: "Where East meets West, rich history and diverse landscapes.",
        bestTime: "April-May, September-October",
        currency: "Turkish Lira (₺)",
        languages: ["Turkish"],
        popularCities: ["Istanbul", "Cappadocia", "Antalya", "Izmir"],
        averageCost: "$$"
    },
    {
        id: 37,
        name: "United Arab Emirates",
        capital: "Abu Dhabi",
        continent: "Asia",
        flag: "🇦🇪",
        image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        description: "Modern architecture, luxury shopping, and desert adventures.",
        bestTime: "November-March",
        currency: "UAE Dirham (AED)",
        languages: ["Arabic"],
        popularCities: ["Dubai", "Abu Dhabi", "Sharjah", "Fujairah"],
        averageCost: "$$$"
    },
    
    // Africa (38-60)
    {
        id: 38,
        name: "Egypt",
        capital: "Cairo",
        continent: "Africa",
        flag: "🇪🇬",
        image: "https://images.unsplash.com/photo-1572252009286-268acec5ca0a?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        description: "Ancient pyramids, Nile River, and rich history.",
        bestTime: "October-April",
        currency: "Egyptian Pound (E£)",
        languages: ["Arabic"],
        popularCities: ["Cairo", "Luxor", "Alexandria", "Sharm El Sheikh"],
        averageCost: "$$"
    },
    {
        id: 39,
        name: "South Africa",
        capital: "Pretoria",
        continent: "Africa",
        flag: "🇿🇦",
        image: "https://images.unsplash.com/photo-1523805009345-7448845a9e53?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        description: "Safaris, diverse landscapes, and vibrant cities.",
        bestTime: "May-September",
        currency: "South African Rand (R)",
        languages: ["English", "Afrikaans", "Zulu", "Xhosa"],
        popularCities: ["Cape Town", "Johannesburg", "Durban", "Pretoria"],
        averageCost: "$$"
    },
    {
        id: 40,
        name: "Kenya",
        capital: "Nairobi",
        continent: "Africa",
        flag: "🇰🇪",
        image: "https://images.unsplash.com/photo-1523805009345-7448845a9e53?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        description: "Wildlife safaris, Maasai culture, and beautiful beaches.",
        bestTime: "July-September, January-February",
        currency: "Kenyan Shilling (KSh)",
        languages: ["Swahili", "English"],
        popularCities: ["Nairobi", "Mombasa", "Nakuru", "Kisumu"],
        averageCost: "$$"
    },
    {
        id: 41,
        name: "Morocco",
        capital: "Rabat",
        continent: "Africa",
        flag: "🇲🇦",
        image: "https://images.unsplash.com/photo-1543349689-9a4d426bee8e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        description: "Ancient medinas, Sahara desert, and colorful markets.",
        bestTime: "March-May, September-November",
        currency: "Moroccan Dirham (MAD)",
        languages: ["Arabic", "Berber"],
        popularCities: ["Marrakech", "Casablanca", "Fez", "Chefchaouen"],
        averageCost: "$$"
    },
    {
        id: 42,
        name: "Tanzania",
        capital: "Dodoma",
        continent: "Africa",
        flag: "🇹🇿",
        image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        description: "Mount Kilimanjaro, Serengeti, and Zanzibar beaches.",
        bestTime: "June-October, December-February",
        currency: "Tanzanian Shilling (TZS)",
        languages: ["Swahili", "English"],
        popularCities: ["Dar es Salaam", "Zanzibar", "Arusha", "Stone Town"],
        averageCost: "$$"
    },
    {
        id: 43,
        name: "Ethiopia",
        capital: "Addis Ababa",
        continent: "Africa",
        flag: "🇪🇹",
        image: "https://images.unsplash.com/photo-1559561738-d1d0d6d4f92c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        description: "Ancient history, unique culture, and stunning landscapes.",
        bestTime: "October-May",
        currency: "Ethiopian Birr (ETB)",
        languages: ["Amharic"],
        popularCities: ["Addis Ababa", "Lalibela", "Axum", "Gondar"],
        averageCost: "$"
    },
    
    // North America (44-55)
    {
        id: 44,
        name: "Costa Rica",
        capital: "San José",
        continent: "North America",
        flag: "🇨🇷",
        image: "https://images.unsplash.com/photo-1536700503339-1e4b06520771?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        description: "Biodiversity, rainforests, and eco-tourism.",
        bestTime: "December-April",
        currency: "Costa Rican Colón (₡)",
        languages: ["Spanish"],
        popularCities: ["San José", "Monteverde", "La Fortuna", "Tamarindo"],
        averageCost: "$$"
    },
    {
        id: 45,
        name: "Cuba",
        capital: "Havana",
        continent: "North America",
        flag: "🇨🇺",
        image: "https://images.unsplash.com/photo-1509316785289-025f5b846b35?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        description: "Vintage cars, colorful architecture, and vibrant music.",
        bestTime: "November-April",
        currency: "Cuban Peso (CUP)",
        languages: ["Spanish"],
        popularCities: ["Havana", "Varadero", "Trinidad", "Viñales"],
        averageCost: "$$"
    },
    {
        id: 46,
        name: "Dominican Republic",
        capital: "Santo Domingo",
        continent: "North America",
        flag: "🇩🇴",
        image: "https://images.unsplash.com/photo-1542037114709-2b8e9a8b3f3f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        description: "Beautiful beaches, merengue music, and colonial history.",
        bestTime: "December-April",
        currency: "Dominican Peso (DOP)",
        languages: ["Spanish"],
        popularCities: ["Santo Domingo", "Punta Cana", "Puerto Plata", "La Romana"],
        averageCost: "$$"
    },
    
    // South America (47-60)
    {
        id: 47,
        name: "Brazil",
        capital: "Brasília",
        continent: "South America",
        flag: "🇧🇷",
        image: "https://images.unsplash.com/photo-1483729558449-99ef09a8c325?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        description: "Amazon rainforest, Carnival, and beautiful beaches.",
        bestTime: "December-March",
        currency: "Brazilian Real (R$)",
        languages: ["Portuguese"],
        popularCities: ["Rio de Janeiro", "São Paulo", "Salvador", "Brasília"],
        averageCost: "$$"
    },
    {
        id: 48,
        name: "Argentina",
        capital: "Buenos Aires",
        continent: "South America",
        flag: "🇦🇷",
        image: "https://images.unsplash.com/photo-1551927336-09d50efd69cd?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        description: "Tango, wine, glaciers, and passionate culture.",
        bestTime: "October-April",
        currency: "Argentine Peso ($)",
        languages: ["Spanish"],
        popularCities: ["Buenos Aires", "Mendoza", "Bariloche", "Ushuaia"],
        averageCost: "$$"
    },
    {
        id: 49,
        name: "Peru",
        capital: "Lima",
        continent: "South America",
        flag: "🇵🇪",
        image: "https://images.unsplash.com/photo-1526392060635-9d6019884377?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        description: "Machu Picchu, ancient ruins, and diverse landscapes.",
        bestTime: "May-September",
        currency: "Peruvian Sol (S/)",
        languages: ["Spanish", "Quechua"],
        popularCities: ["Lima", "Cusco", "Arequipa", "Machu Picchu"],
        averageCost: "$$"
    },
    {
        id: 50,
        name: "Chile",
        capital: "Santiago",
        continent: "South America",
        flag: "🇨🇱",
        image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        description: "Deserts, mountains, and Patagonian wilderness.",
        bestTime: "November-March",
        currency: "Chilean Peso (CLP)",
        languages: ["Spanish"],
        popularCities: ["Santiago", "Valparaíso", "Puerto Natales", "San Pedro de Atacama"],
        averageCost: "$$"
    },
    {
        id: 51,
        name: "Colombia",
        capital: "Bogotá",
        continent: "South America",
        flag: "🇨🇴",
        image: "https://images.unsplash.com/photo-1587595431973-160d0d94add1?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        description: "Coffee region, Caribbean coast, and vibrant cities.",
        bestTime: "December-March",
        currency: "Colombian Peso (COP)",
        languages: ["Spanish"],
        popularCities: ["Bogotá", "Medellín", "Cartagena", "Cali"],
        averageCost: "$$"
    },
    
    // Oceania (52-60)
    {
        id: 52,
        name: "New Zealand",
        capital: "Wellington",
        continent: "Oceania",
        flag: "🇳🇿",
        image: "https://images.unsplash.com/photo-1507699622108-4be3abd695ad?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        description: "Stunning landscapes, adventure sports, and Maori culture.",
        bestTime: "December-February",
        currency: "New Zealand Dollar (NZ$)",
        languages: ["English", "Maori"],
        popularCities: ["Auckland", "Queenstown", "Wellington", "Christchurch"],
        averageCost: "$$$"
    },
    {
        id: 53,
        name: "Fiji",
        capital: "Suva",
        continent: "Oceania",
        flag: "🇫🇯",
        image: "https://images.unsplash.com/photo-1582979512210-99b6a53386f9?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        description: "Tropical paradise, crystal-clear waters, and friendly locals.",
        bestTime: "May-October",
        currency: "Fijian Dollar (FJ$)",
        languages: ["English", "Fijian", "Hindi"],
        popularCities: ["Nadi", "Suva", "Denarau Island", "Mamanuca Islands"],
        averageCost: "$$$"
    },
    
    // Additional countries to reach 60
    {
        id: 54,
        name: "Russia",
        capital: "Moscow",
        continent: "Europe",
        flag: "🇷🇺",
        image: "https://images.unsplash.com/photo-1513326738677-b964603b136d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        description: "Largest country, rich history, and diverse landscapes.",
        bestTime: "June-August",
        currency: "Russian Ruble (₽)",
        languages: ["Russian"],
        popularCities: ["Moscow", "Saint Petersburg", "Sochi", "Kazan"],
        averageCost: "$$"
    },
    {
        id: 55,
        name: "Ukraine",
        capital: "Kyiv",
        continent: "Europe",
        flag: "🇺🇦",
        image: "https://images.unsplash.com/photo-1597773150796-e5c14ebecbf5?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        description: "Rich cultural heritage, beautiful architecture, and friendly people.",
        bestTime: "May-September",
        currency: "Ukrainian Hryvnia (₴)",
        languages: ["Ukrainian"],
        popularCities: ["Kyiv", "Lviv", "Odessa", "Kharkiv"],
        averageCost: "$"
    },
    {
        id: 56,
        name: "Israel",
        capital: "Jerusalem",
        continent: "Asia",
        flag: "🇮🇱",
        image: "https://images.unsplash.com/photo-1580930894441-39c6d1c73c5c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        description: "Historical and religious sites, modern cities, and diverse culture.",
        bestTime: "April-May, October-November",
        currency: "Israeli New Shekel (₪)",
        languages: ["Hebrew", "Arabic"],
        popularCities: ["Jerusalem", "Tel Aviv", "Haifa", "Eilat"],
        averageCost: "$$$"
    },
    {
        id: 57,
        name: "Jordan",
        capital: "Amman",
        continent: "Asia",
        flag: "🇯🇴",
        image: "https://images.unsplash.com/photo-1560851248-5b2c8f806cd6?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        description: "Petra, Dead Sea, and ancient history.",
        bestTime: "March-May, September-November",
        currency: "Jordanian Dinar (JOD)",
        languages: ["Arabic"],
        popularCities: ["Amman", "Petra", "Wadi Rum", "Aqaba"],
        averageCost: "$$"
    },
    {
        id: 58,
        name: "Qatar",
        capital: "Doha",
        continent: "Asia",
        flag: "🇶🇦",
        image: "https://images.unsplash.com/photo-1586769852044-692eb51d3d6c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        description: "Modern architecture, desert landscapes, and cultural heritage.",
        bestTime: "November-April",
        currency: "Qatari Riyal (QAR)",
        languages: ["Arabic"],
        popularCities: ["Doha", "Al Wakrah", "Al Khor", "Mesaieed"],
        averageCost: "$$$"
    },
    {
        id: 59,
        name: "Saudi Arabia",
        capital: "Riyadh",
        continent: "Asia",
        flag: "🇸🇦",
        image: "https://images.unsplash.com/photo-1513542789411-b6a5d4f31634?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        description: "Ancient history, desert landscapes, and religious significance.",
        bestTime: "November-February",
        currency: "Saudi Riyal (SAR)",
        languages: ["Arabic"],
        popularCities: ["Riyadh", "Jeddah", "Mecca", "Medina"],
        averageCost: "$$$"
    },
    {
        id: 60,
        name: "Maldives",
        capital: "Malé",
        continent: "Asia",
        flag: "🇲🇻",
        image: "https://images.unsplash.com/photo-1590523277543-a94d2e4eb00b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        description: "Tropical paradise, overwater bungalows, and coral reefs.",
        bestTime: "November-April",
        currency: "Maldivian Rufiyaa (MVR)",
        languages: ["Dhivehi"],
        popularCities: ["Malé", "Maafushi", "Hulhumalé", "Addu City"],
        averageCost: "$$$$"
    }
];

// Function to get all countries
function getAllCountries() {
    return countries;
}

// Function to search countries
function searchCountries(searchTerm) {
    const term = searchTerm.toLowerCase().trim();
    return countries.filter(country =>
        country.name.toLowerCase().includes(term) ||
        country.capital.toLowerCase().includes(term) ||
        country.continent.toLowerCase().includes(term) ||
        country.popularCities.some(city => city.toLowerCase().includes(term))
    );
}

// Function to get countries by continent
function getCountriesByContinent(continent) {
    return countries.filter(country =>
        country.continent.toLowerCase() === continent.toLowerCase()
    );
}

// Function to get country by ID
function getCountryById(id) {
    return countries.find(country => country.id === id);
}

// Function to get random countries for featured section
function getRandomCountries(count = 6) {
    const shuffled = [...countries].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
}

// Function to get popular countries (based on average cost and description)
function getPopularCountries() {
    return countries.filter(country => 
        country.averageCost === "$$" || country.averageCost === "$$$"
    ).slice(0, 8);
}

// Function to get countries by budget
function getCountriesByBudget(budget) {
    const budgetMap = {
        "$": "$",
        "$$": "$$",
        "$$$": "$$$",
        "$$$$": "$$$$"
    };
    return countries.filter(country => country.averageCost === budgetMap[budget]);
}

// Function to get unique continents
function getContinents() {
    const continents = countries.map(country => country.continent);
    return [...new Set(continents)].sort();
}
// Add this to your existing countries.js file

// Function to search countries with real-time matching
function searchCountries(searchTerm) {
    const term = searchTerm.toLowerCase().trim();
    
    if (!term) return []; // Return empty array for empty search
    
    return countries.filter(country => {
        // Check name (including partial matches)
        if (country.name.toLowerCase().includes(term)) return true;
        
        // Check capital
        if (country.capital.toLowerCase().includes(term)) return true;
        
        // Check continent
        if (country.continent.toLowerCase().includes(term)) return true;
        
        // Check popular cities
        if (country.popularCities.some(city => city.toLowerCase().includes(term))) return true;
        
        // Check languages
        if (country.languages.some(lang => lang.toLowerCase().includes(term))) return true;
        
        return false;
    });
}

// Function to display search results
function displaySearchResults(results, containerId = 'results-container') {
    const container = document.getElementById(containerId);
    
    if (!container) {
        console.error('Container not found:', containerId);
        return;
    }
    
    if (!results || results.length === 0) {
        container.innerHTML = `
            <div class="no-results">
                <i class="fas fa-search"></i>
                <h3>No destinations found</h3>
                <p>Try searching for a country, city, or continent</p>
            </div>
        `;
        return;
    }
    
    const resultsHTML = results.map(country => `
        <div class="country-card" data-country-id="${country.id}">
            <div class="country-flag">${country.flag}</div>
            <img src="${country.image}" alt="${country.name}" class="country-image">
            <div class="country-info">
                <h3><i class="fas fa-map-marker-alt"></i> ${country.name}</h3>
                <div class="country-details">
                    <p><i class="fas fa-building"></i> <strong>Capital:</strong> ${country.capital}</p>
                    <p><i class="fas fa-globe"></i> <strong>Continent:</strong> ${country.continent}</p>
                    <p><i class="fas fa-calendar-alt"></i> <strong>Best Time:</strong> ${country.bestTime}</p>
                    <p><i class="fas fa-money-bill-wave"></i> <strong>Currency:</strong> ${country.currency}</p>
                    <p><i class="fas fa-comments"></i> <strong>Languages:</strong> ${country.languages.join(', ')}</p>
                    <p><i class="fas fa-tag"></i> <strong>Average Cost:</strong> ${country.averageCost}</p>
                </div>
                <p class="country-description">${country.description}</p>
                <div class="country-tags">
                    <span class="tag"><i class="fas fa-city"></i> ${country.popularCities[0]}</span>
                    <span class="tag"><i class="fas fa-city"></i> ${country.popularCities[1]}</span>
                    <span class="tag"><i class="fas fa-city"></i> ${country.popularCities[2]}</span>
                </div>
                <div class="country-actions">
                    <button class="btn-small btn-primary" onclick="viewCountryDetails(${country.id})">
                        <i class="fas fa-eye"></i> View Details
                    </button>
                    <button class="btn-small btn-outline" onclick="saveCountry(${country.id})">
                        <i class="fas fa-heart"></i> Save
                    </button>
                    <button class="btn-small btn-outline" onclick="planTripToCountry(${country.id})">
                        <i class="fas fa-plane"></i> Plan Trip
                    </button>
                </div>
            </div>
        </div>
    `).join('');
    
    container.innerHTML = resultsHTML;
}

// Function to initialize search functionality
function initializeSearch() {
    // Get search input elements
    const heroSearch = document.getElementById('hero-search');
    const mainSearch = document.getElementById('main-search');
    const searchButton = document.getElementById('search-button');
    
    // Setup hero search (on homepage)
    if (heroSearch) {
        heroSearch.addEventListener('input', function(e) {
            const searchTerm = e.target.value;
            if (searchTerm.length >= 2) {
                const results = searchCountries(searchTerm);
                displaySearchResults(results, 'results-container');
            } else if (searchTerm.length === 0) {
                // Show all countries or featured countries when search is cleared
                displayAllCountries();
            }
        });
        
        heroSearch.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                performSearch(this.value);
            }
        });
    }
    
    // Setup main search (on search page)
    if (mainSearch) {
        mainSearch.addEventListener('input', function(e) {
            const searchTerm = e.target.value;
            if (searchTerm.length >= 1) { // Start searching after 1 character
                const results = searchCountries(searchTerm);
                displaySearchResults(results, 'results-container');
                updateSearchStats(results.length);
            } else if (searchTerm.length === 0) {
                displayAllCountries();
                updateSearchStats(countries.length);
            }
        });
        
        mainSearch.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                performSearch(this.value);
            }
        });
    }
    
    // Setup search button
    if (searchButton) {
        searchButton.addEventListener('click', function() {
            const searchTerm = mainSearch ? mainSearch.value : heroSearch.value;
            if (searchTerm) {
                performSearch(searchTerm);
            }
        });
    }
    
    // Setup continent filter
    const continentFilter = document.getElementById('continent-filter');
    if (continentFilter) {
        continentFilter.addEventListener('change', function(e) {
            if (e.target.value === 'all') {
                displayAllCountries();
            } else {
                const results = getCountriesByContinent(e.target.value);
                displaySearchResults(results, 'results-container');
                updateSearchStats(results.length);
            }
        });
    }
    
    // Setup budget filter
    const budgetFilter = document.getElementById('budget-filter');
    if (budgetFilter) {
        budgetFilter.addEventListener('change', function(e) {
            if (e.target.value === 'all') {
                displayAllCountries();
            } else {
                const results = getCountriesByBudget(e.target.value);
                displaySearchResults(results, 'results-container');
                updateSearchStats(results.length);
            }
        });
    }
}

// Function to display all countries
function displayAllCountries() {
    const container = document.getElementById('results-container');
    if (!container) return;
    
    // Display all countries or featured selection
    const allCountries = getAllCountries();
    displaySearchResults(allCountries, 'results-container');
    updateSearchStats(allCountries.length);
}

// Function to update search statistics
function updateSearchStats(count) {
    const statsElement = document.getElementById('search-stats');
    if (statsElement) {
        statsElement.textContent = `Found ${count} ${count === 1 ? 'destination' : 'destinations'}`;
    }
}

// Function to perform search and show results
function performSearch(searchTerm) {
    if (!searchTerm.trim()) {
        showNotification('Please enter a search term', 'warning');
        return;
    }
    
    const results = searchCountries(searchTerm);
    
    if (results.length === 0) {
        showNotification(`No destinations found for "${searchTerm}"`, 'info');
    } else {
        showNotification(`Found ${results.length} destinations for "${searchTerm}"`, 'success');
    }
    
    displaySearchResults(results, 'results-container');
    updateSearchStats(results.length);
}

// Function to show country details
function viewCountryDetails(countryId) {
    const country = getCountryById(countryId);
    if (!country) {
        showNotification('Country not found', 'error');
        return;
    }
    
    // Create modal with country details
    const modalHTML = `
        <div class="country-modal" id="country-modal-${countryId}">
            <div class="modal-content">
                <div class="modal-header">
                    <h2>${country.flag} ${country.name}</h2>
                    <button class="close-modal" onclick="closeModal('country-modal-${countryId}')">
                        <i class="fas fa-times"></i>
                    </button>
                </div>
                <div class="modal-body">
                    <div class="modal-image">
                        <img src="${country.image}" alt="${country.name}">
                    </div>
                    <div class="modal-details">
                        <p><strong>Capital:</strong> ${country.capital}</p>
                        <p><strong>Continent:</strong> ${country.continent}</p>
                        <p><strong>Best Time to Visit:</strong> ${country.bestTime}</p>
                        <p><strong>Currency:</strong> ${country.currency}</p>
                        <p><strong>Languages:</strong> ${country.languages.join(', ')}</p>
                        <p><strong>Average Cost:</strong> ${country.averageCost}</p>
                        <p><strong>Popular Cities:</strong> ${country.popularCities.join(', ')}</p>
                        <p><strong>Description:</strong> ${country.description}</p>
                    </div>
                </div>
                <div class="modal-footer">
                    <button class="btn-primary" onclick="planTripToCountry(${countryId})">
                        <i class="fas fa-plane"></i> Plan a Trip
                    </button>
                    <button class="btn-outline" onclick="saveCountry(${countryId})">
                        <i class="fas fa-heart"></i> Save for Later
                    </button>
                    <button class="btn-outline" onclick="shareCountry(${countryId})">
                        <i class="fas fa-share"></i> Share
                    </button>
                </div>
            </div>
        </div>
    `;
    
    // Add modal to page
    document.body.insertAdjacentHTML('beforeend', modalHTML);
    
    // Add CSS for modal
    const modalStyle = document.createElement('style');
    modalStyle.textContent = `
        .country-modal {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0,0,0,0.8);
            display: flex;
            align-items: center;
            justify-content: center;
            z-index: 9999;
            animation: fadeIn 0.3s ease;
        }
        
        @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
        }
        
        .modal-content {
            background: white;
            border-radius: 15px;
            max-width: 800px;
            width: 90%;
            max-height: 90vh;
            overflow-y: auto;
            animation: slideUp 0.3s ease;
        }
        
        @keyframes slideUp {
            from { transform: translateY(50px); opacity: 0; }
            to { transform: translateY(0); opacity: 1; }
        }
        
        .modal-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 20px;
            border-bottom: 1px solid #eee;
            background: linear-gradient(135deg, #1a237e 0%, #283593 100%);
            color: white;
            border-radius: 15px 15px 0 0;
        }
        
        .modal-header h2 {
            margin: 0;
            font-size: 24px;
        }
        
        .close-modal {
            background: none;
            border: none;
            color: white;
            font-size: 24px;
            cursor: pointer;
            padding: 5px;
        }
        
        .modal-body {
            padding: 20px;
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 20px;
        }
        
        .modal-image img {
            width: 100%;
            height: 300px;
            object-fit: cover;
            border-radius: 10px;
        }
        
        .modal-details {
            display: flex;
            flex-direction: column;
            gap: 10px;
        }
        
        .modal-details p {
            margin: 5px 0;
            color: #333;
        }
        
        .modal-details strong {
            color: #1a237e;
            width: 150px;
            display: inline-block;
        }
        
        .modal-footer {
            padding: 20px;
            border-top: 1px solid #eee;
            display: flex;
            gap: 10px;
            justify-content: center;
        }
        
        @media (max-width: 768px) {
            .modal-body {
                grid-template-columns: 1fr;
            }
            
            .modal-footer {
                flex-direction: column;
            }
        }
    `;
    
    document.head.appendChild(modalStyle);
}

// Function to close modal
function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.remove();
    }
}

// Function to save country to favorites
function saveCountry(countryId) {
    const country = getCountryById(countryId);
    if (!country) return;
    
    // Get saved countries from localStorage
    let savedCountries = JSON.parse(localStorage.getItem('savedCountries') || '[]');
    
    // Check if already saved
    if (savedCountries.some(c => c.id === countryId)) {
        showNotification(`${country.name} is already saved!`, 'info');
        return;
    }
    
    // Add to saved
    savedCountries.push({
        id: countryId,
        name: country.name,
        flag: country.flag,
        savedAt: new Date().toISOString()
    });
    
    localStorage.setItem('savedCountries', JSON.stringify(savedCountries));
    showNotification(`${country.name} saved to favorites!`, 'success');
}

// Function to plan a trip to a country
function planTripToCountry(countryId) {
    const country = getCountryById(countryId);
    if (!country) return;
    
    // Store country info for trip planning
    const tripInfo = {
        countryId: countryId,
        countryName: country.name,
        countryFlag: country.flag,
        plannedAt: new Date().toISOString()
    };
    
    // Save to localStorage
    let plannedTrips = JSON.parse(localStorage.getItem('plannedTrips') || '[]');
    plannedTrips.push(tripInfo);
    localStorage.setItem('plannedTrips', JSON.stringify(plannedTrips));
    
    // Show confirmation and redirect to trip planner
    showNotification(`Planning trip to ${country.name}!`, 'success');
    
    setTimeout(() => {
        // Redirect to trip planner or show planning interface
        window.location.href = `trip-planner.html?country=${countryId}`;
        // If trip-planner.html doesn't exist, show alert
        if (!window.location.href.includes('trip-planner')) {
            alert(`Trip planning for ${country.name} would start here.\n\nYou would set dates, budget, activities, etc.`);
        }
    }, 1000);
}

// Function to share country
function shareCountry(countryId) {
    const country = getCountryById(countryId);
    if (!country) return;
    
    const shareText = `Check out ${country.name} ${country.flag} on Smart Travel!\n\n${country.description}\n\nPlan your trip at ${window.location.origin}`;
    
    if (navigator.share) {
        navigator.share({
            title: `Visit ${country.name} - Smart Travel`,
            text: shareText,
            url: window.location.href
        }).catch(console.error);
    } else {
        // Fallback: copy to clipboard
        navigator.clipboard.writeText(shareText).then(() => {
            showNotification('Destination link copied to clipboard!', 'success');
        }).catch(() => {
            prompt('Copy this link to share:', shareText);
        });
    }
}

// Function to show notification (reuse from dashboard)
function showNotification(message, type = 'info') {
    const toast = document.createElement('div');
    toast.className = `notification-toast ${type}`;
    
    const iconMap = {
        'success': 'check-circle',
        'error': 'exclamation-circle',
        'warning': 'exclamation-triangle',
        'info': 'info-circle'
    };
    
    toast.innerHTML = `
        <i class="fas fa-${iconMap[type] || 'info-circle'}"></i>
        <span>${message}</span>
    `;
    
    document.body.appendChild(toast);
    
    setTimeout(() => toast.classList.add('show'), 100);
    
    setTimeout(() => {
        toast.classList.remove('show');
        setTimeout(() => toast.remove(), 400);
    }, 3000);
}

// Initialize search when page loads
document.addEventListener('DOMContentLoaded', function() {
    // Display all countries initially
    displayAllCountries();
    
    // Initialize search functionality
    initializeSearch();
    
    // Show welcome message if no search has been performed
    const searchInputs = document.querySelectorAll('input[type="text"]');
    let hasSearched = false;
    
    searchInputs.forEach(input => {
        input.addEventListener('input', function() {
            hasSearched = true;
        });
    });
    
    // If no search after 3 seconds, show welcome message
    setTimeout(() => {
        if (!hasSearched) {
            const container = document.getElementById('results-container');
            if (container && container.children.length === countries.length) {
                // You could show a welcome message here
                console.log('Ready to search destinations!');
            }
        }
    }, 3000);
});