// Countries data with flags and travel information
const countries = [{
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