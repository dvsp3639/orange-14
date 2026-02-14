// Categories configuration - extracted from CSV structure
var categories = [
    {
        id: "recommended",
        name: "Recommended",
        icon: "fas fa-star",
        displayOrder: 1
    },
    {
        id: "soups",
        name: "Soups",
        icon: "fas fa-bowl-hot",
        displayOrder: 2,
        subcategories: [
            { id: "veg", name: "Veg Soups" },
            { id: "non-veg", name: "Non-Veg Soups" }
        ]
    },
    {
        id: "starters",
        name: "Starters",
        icon: "fas fa-drumstick-bite",
        displayOrder: 3,
        subcategories: [
            { id: "veg", name: "Veg Starters" },
            { id: "chicken", name: "Chicken Starters" },
            { id: "egg", name: "Egg Starters" },
            { id: "prawns", name: "Prawns Starters" },
            { id: "mutton", name: "Mutton Starters" },
            { id: "fish", name: "Fish Starters" }
        ]
    },
    {
        id: "noodles",
        name: "Noodles",
        icon: "fas fa-utensils",
        displayOrder: 4,
        subcategories: [
            { id: "veg", name: "Veg Noodles" },
            { id: "non-veg", name: "Non-Veg Noodles" }
        ]
    },
    {
        id: "tandoori",
        name: "Tandoori",
        icon: "fas fa-fire",
        displayOrder: 5,
        subcategories: [
            { id: "veg", name: "Veg Tandoori" },
            { id: "non-veg", name: "Non-Veg Tandoori" }
        ]
    },
    {
        id: "curries",
        name: "Curries",
        icon: "fas fa-utensils",
        displayOrder: 6,
        subcategories: [
            { id: "veg", name: "Veg Curries" },
            { id: "non-veg", name: "Non-Veg Curries" }
        ]
    },
    {
        id: "fried-rice",
        name: "Fried Rice",
        icon: "fas fa-utensils",
        displayOrder: 7,
        subcategories: [
            { id: "veg", name: "Veg Fried Rice" },
            { id: "non-veg", name: "Non-Veg Fried Rice" }
        ]
    },
    {
        id: "biryanis",
        name: "Biryanis",
        icon: "fas fa-utensil-spoon",
        displayOrder: 8,
        subcategories: [
            { id: "veg", name: "Veg Biryanis" },
            { id: "non-veg", name: "Non-Veg Biryanis" }
        ]
    },
    {
        id: "soft-drinks",
        name: "Soft Drinks",
        icon: "fas fa-glass-whiskey",
        displayOrder: 9
    },
    {
        id: "juice",
        name: "Juice",
        icon: "fas fa-glass-whiskey",
        displayOrder: 10
    },
    {
        id: "ice-cream",
        name: "Ice Cream",
        icon: "fas fa-ice-cream",
        displayOrder: 11
    },
    {
        id: "dessert",
        name: "Desserts",
        icon: "fas fa-ice-cream",
        displayOrder: 12
    },
    {
        id: "extras",
        name: "Extras",
        icon: "fas fa-plus",
        displayOrder: 13
    },
    {
        id: "family-pack",
        name: "Family Pack",
        icon: "fas fa-users",
        displayOrder: 14
    },
    {
        id: "papad",
        name: "Papad & More",
        icon: "fas fa-paperclip",
        displayOrder: 15
    },
    {
        id: "store-items",
        name: "Store Items",
        icon: "fas fa-store",
        displayOrder: 16
    },
    {
        id: "boild-eggs",
        name: "Boiled Eggs",
        icon: "fas fa-egg",
        displayOrder: 17
    },
    {
        id: "half",
        name: "Half Portions",
        icon: "fas fa-balance-scale",
        displayOrder: 18
    },
    {
        id: "drinks",
        name: "Drinks",
        icon: "fas fa-wine-glass-alt",
        displayOrder: 19
    }
];

// Menu items - All items initialized with isActive: true
var menuItems = [
    // Soups - Veg
    {
        id: 101,
        name: "Veg Sweet Corn Soup",
        price: 113.63,
        description: "",
        category: "soups",
        subcategory: "veg",
        isActive: true
    },
    {
        id: 102,
        name: "Veg Manchow Soup",
        price: 125,
        description: "",
        category: "soups",
        subcategory: "veg",
        isActive: true
    },
    {
        id: 103,
        name: "Veg Hot N Sour Soup",
        price: 124.49,
        description: "",
        category: "soups",
        subcategory: "veg",
        isActive: true
    },
    {
        id: 104,
        name: "Lemon Corriander Soup",
        price: 124.49,
        description: "",
        category: "soups",
        subcategory: "veg",
        isActive: true
    },
    {
        id: 105,
        name: "Veg Manchurian",
        price: 189.66,
        description: "",
        category: "soups",
        subcategory: "veg",
        isActive: true
    },
    
    // Soups - Non-Veg
    {
        id: 201,
        name: "Chicken Soup",
        price: 124.49,
        description: "",
        category: "soups",
        subcategory: "non-veg",
        isActive: true
    },
    {
        id: 202,
        name: "Chicken Corn Soup",
        price: 124.49,
        description: "",
        category: "soups",
        subcategory: "non-veg",
        isActive: true
    },
    {
        id: 203,
        name: "Chicken Manchow Soup",
        price: 135.36,
        description: "",
        category: "soups",
        subcategory: "non-veg",
        isActive: true
    },
    
    // Starters - Veg
    {
        id: 301,
        name: "Chilly Gobi",
        price: 200.53,
        description: "",
        category: "starters",
        subcategory: "veg",
        isActive: true
    },
    {
        id: 302,
        name: "Paneer Chilly",
        price: 285,
        description: "",
        category: "starters",
        subcategory: "veg",
        customizable: true,
        isActive: true
    },
    {
        id: 303,
        name: "Paneer Manchurian",
        price: 285,
        description: "",
        category: "starters",
        subcategory: "veg",
        customizable: true,
        isActive: true
    },
    {
        id: 304,
        name: "Crispy Corn",
        price: 199,
        description: "Crunchy, golden corn kernels seasoned to perfection",
        category: "starters",
        subcategory: "veg",
        isActive: true
    },
    
    // Starters - Chicken
    {
        id: 401,
        name: "Chilli Chicken",
        price: 264.85,
        description: "",
        category: "starters",
        subcategory: "chicken",
        isActive: true
    },
    {
        id: 402,
        name: "CHICKEN 65",
        price: 280,
        description: "",
        category: "starters",
        subcategory: "chicken",
        isActive: true
    },
    {
        id: 403,
        name: "Chicken Manchurian",
        price: 264.85,
        description: "",
        category: "starters",
        subcategory: "chicken",
        isActive: true
    },
    {
        id: 404,
        name: "Chicken Lollypops",
        price: 286.57,
        description: "Chicken wings or drumettes, marinated and deep-fried",
        category: "starters",
        subcategory: "chicken",
        isActive: true
    },
    {
        id: 405,
        name: "Crispy Chicken",
        price: 320,
        description: "Juicy, tender chicken coated in perfectly seasoned crispy batter",
        category: "starters",
        subcategory: "chicken",
        recommended: true,
        customizable: true,
        isActive: true
    },
    
    // Starters - Egg
    {
        id: 501,
        name: "Egg 65",
        price: 167.94,
        description: "",
        category: "starters",
        subcategory: "egg",
        isActive: true
    },
    {
        id: 502,
        name: "Egg Manchurian",
        price: 189.66,
        description: "",
        category: "starters",
        subcategory: "egg",
        isActive: true
    },
    {
        id: 503,
        name: "Chilli Egg",
        price: 167.94,
        description: "",
        category: "starters",
        subcategory: "egg",
        isActive: true
    },
    
    // Starters - Prawns
    {
        id: 601,
        name: "Prawns 65",
        price: 298.3,
        description: "",
        category: "starters",
        subcategory: "prawns",
        isActive: true
    },
    {
        id: 602,
        name: "Prawns Manchurian",
        price: 309.15,
        description: "",
        category: "starters",
        subcategory: "prawns",
        isActive: true
    },
    {
        id: 603,
        name: "Chilly Prawns",
        price: 309.15,
        description: "",
        category: "starters",
        subcategory: "prawns",
        isActive: true
    },
    
    // Starters - Mutton
    {
        id: 701,
        name: "Chilly Mutton",
        price: 330.89,
        description: "",
        category: "starters",
        subcategory: "mutton",
        isActive: true
    },
    {
        id: 702,
        name: "Mutton 65",
        price: 330.89,
        description: "",
        category: "starters",
        subcategory: "mutton",
        isActive: true
    },
    
    // Starters - Fish
    {
        id: 801,
        name: "Chilli Fish",
        price: 265.7,
        description: "",
        category: "starters",
        subcategory: "fish",
        isActive: true
    },
    {
        id: 802,
        name: "Apollo Fish",
        price: 276.57,
        description: "",
        category: "starters",
        subcategory: "fish",
        isActive: true
    },
    
    // Noodles - Veg
    {
        id: 901,
        name: "Veg Soft Noodles",
        price: 135.36,
        description: "",
        category: "noodles",
        subcategory: "veg",
        isActive: true
    },
    {
        id: 902,
        name: "Veg Schezwan Noodles",
        price: 157.08,
        description: "",
        category: "noodles",
        subcategory: "veg",
        isActive: true
    },
    {
        id: 903,
        name: "Paneer Noodles",
        price: 310,
        description: "",
        category: "noodles",
        subcategory: "veg",
        isActive: true
    },
    
    // Noodles - Non-Veg
    {
        id: 1001,
        name: "Egg Soft Noodles",
        price: 189.66,
        description: "",
        category: "noodles",
        subcategory: "non-veg",
        isActive: true
    },
    {
        id: 1002,
        name: "Chicken Noodles",
        price: 232.26,
        description: "",
        category: "noodles",
        subcategory: "non-veg",
        isActive: true
    },
    {
        id: 1003,
        name: "Mixed Noodles",
        price: 330.89,
        description: "",
        category: "noodles",
        subcategory: "non-veg",
        isActive: true
    },
    
    // Tandoori - Veg
    {
        id: 1101,
        name: "Roti single without curry",
        price: 60,
        description: "",
        category: "tandoori",
        subcategory: "veg",
        isActive: true
    },
    {
        id: 1102,
        name: "Butter Roti",
        price: 75,
        description: "",
        category: "tandoori",
        subcategory: "veg",
        customizable: true,
        isActive: true
    },
    {
        id: 1103,
        name: "Plain Naan",
        price: 65,
        description: "",
        category: "tandoori",
        subcategory: "veg",
        customizable: true,
        isActive: true
    },
    {
        id: 1104,
        name: "Garlic Naan",
        price: 81.04,
        description: "",
        category: "tandoori",
        subcategory: "veg",
        customizable: true,
        isActive: true
    },
    
    // Tandoori - Non-Veg
    {
        id: 1201,
        name: "Tandoori Chicken (Full)",
        price: 503.83,
        description: "",
        category: "tandoori",
        subcategory: "non-veg",
        recommended: true,
        customizable: true,
        isActive: true
    },
    {
        id: 1202,
        name: "Chicken Tikka",
        price: 297.43,
        description: "",
        category: "tandoori",
        subcategory: "non-veg",
        customizable: true,
        isActive: true
    },
    {
        id: 1203,
        name: "Tangidi Kabab (Full)",
        price: 320,
        description: "",
        category: "tandoori",
        subcategory: "non-veg",
        isActive: true
    },
    {
        id: 1204,
        name: "Malai Kabab",
        price: 340.89,
        description: "",
        category: "tandoori",
        subcategory: "non-veg",
        isActive: true
    },
    
    // Curries - Veg
    {
        id: 1301,
        name: "Tomato Curry",
        price: 167.94,
        description: "",
        category: "curries",
        subcategory: "veg",
        customizable: true,
        isActive: true
    },
    {
        id: 1302,
        name: "Plain Palak",
        price: 189.66,
        description: "",
        category: "curries",
        subcategory: "veg",
        isActive: true
    },
    {
        id: 1303,
        name: "Palak Paneer",
        price: 299,
        description: "",
        category: "curries",
        subcategory: "veg",
        customizable: true,
        isActive: true
    },
    {
        id: 1304,
        name: "Paneer Butter Masala",
        price: 290,
        description: "",
        category: "curries",
        subcategory: "veg",
        recommended: true,
        customizable: true,
        isActive: true
    },
    {
        id: 1305,
        name: "Veg. Malai Kufta",
        price: 243.98,
        description: "",
        category: "curries",
        subcategory: "veg",
        isActive: true
    },
    
    // Curries - Non-Veg
    {
        id: 1401,
        name: "Egg Masala Curry",
        price: 168.81,
        description: "",
        category: "curries",
        subcategory: "non-veg",
        customizable: true,
        isActive: true
    },
    {
        id: 1402,
        name: "Boneless Chicken Curry",
        price: 275.7,
        description: "",
        category: "curries",
        subcategory: "non-veg",
        customizable: true,
        isActive: true
    },
    {
        id: 1403,
        name: "Boneless Butter Chicken",
        price: 275.7,
        description: "",
        category: "curries",
        subcategory: "non-veg",
        customizable: true,
        isActive: true
    },
    {
        id: 1404,
        name: "Orange Special Butter Mutton",
        price: 385.19,
        description: "[Chef's Special]",
        category: "curries",
        subcategory: "non-veg",
        recommended: true,
        customizable: true,
        isActive: true
    },
    
    // Fried Rice - Veg
    {
        id: 1501,
        name: "Veg Fried Rice",
        price: 200.53,
        description: "A delicious dish made with cooked rice stir-fried with mixed vegetables",
        category: "fried-rice",
        subcategory: "veg",
        isActive: true
    },
    {
        id: 1502,
        name: "Special Veg Fried Rice",
        price: 222.26,
        description: "Flavorful dish made with fragrant fried rice mixed with assorted vegetables",
        category: "fried-rice",
        subcategory: "veg",
        customizable: true,
        isActive: true
    },
    {
        id: 1503,
        name: "Jeera Rice",
        price: 200.53,
        description: "Fragrant basmati rice with toasted cumin seeds",
        category: "fried-rice",
        subcategory: "veg",
        isActive: true
    },
    {
        id: 1504,
        name: "Paneer Fried Rice",
        price: 299,
        description: "Fragrant fried rice mixed with cubes of paneer and vegetables",
        category: "fried-rice",
        subcategory: "veg",
        isActive: true
    },
    
    // Fried Rice - Non-Veg
    {
        id: 1601,
        name: "Egg Fried Rice",
        price: 222.26,
        description: "",
        category: "fried-rice",
        subcategory: "non-veg",
        isActive: true
    },
    {
        id: 1602,
        name: "Chicken Fried Rice",
        price: 285.7,
        description: "",
        category: "fried-rice",
        subcategory: "non-veg",
        isActive: true
    },
    {
        id: 1603,
        name: "Special Chicken Fried Rice",
        price: 339.15,
        description: "Restaurant recommended",
        category: "fried-rice",
        subcategory: "non-veg",
        customizable: true,
        isActive: true
    },
    {
        id: 1604,
        name: "Orange Special Non Veg Mixed Fried Rice",
        price: 340,
        description: "[Chef's Special]",
        category: "fried-rice",
        subcategory: "non-veg",
        recommended: true,
        customizable: true,
        isActive: true
    },
    
    // Biryanis - Veg
    {
        id: 1701,
        name: "Veg Pulav",
        price: 315,
        description: "Vibrant Indian rice dish cooked with assorted vegetables and aromatic spices",
        category: "biryanis",
        subcategory: "veg",
        customizable: true,
        isActive: true
    },
    {
        id: 1702,
        name: "Special Veg Biryani",
        price: 290,
        description: "Delightful Indian rice dish brimming with colorful assortment of veggies",
        category: "biryanis",
        subcategory: "veg",
        customizable: true,
        isActive: true
    },
    {
        id: 1703,
        name: "Special Paneer Biryani",
        price: 360,
        description: "Enjoy our Special Biryani",
        category: "biryanis",
        subcategory: "veg",
        customizable: true,
        isActive: true
    },
    {
        id: 1704,
        name: "Special Cashewnut Biryani",
        price: 450,
        description: "Sumptuous fusion of fragrant rice with cashew nut curry",
        category: "biryanis",
        subcategory: "veg",
        isActive: true
    },
    
    // Biryanis - Non-Veg
    {
        id: 1801,
        name: "Special Egg Biryani",
        price: 302.5,
        description: "Flavorful rice dish cooked with fragrant spices and boiled eggs",
        category: "biryanis",
        subcategory: "non-veg",
        isActive: true
    },
    {
        id: 1802,
        name: "Chicken Dum Biryani",
        price: 340,
        description: "Fragrant rice layered with marinated, tender chicken pieces",
        category: "biryanis",
        subcategory: "non-veg",
        isActive: true
    },
    {
        id: 1803,
        name: "Chicken Fry Biryani",
        price: 383.9,
        description: "Tantalizing dish featuring fried chicken pieces with aromatic biryani rice",
        category: "biryanis",
        subcategory: "non-veg",
        isActive: true
    },
    {
        id: 1804,
        name: "Orange Special Biryani",
        price: 370,
        description: "Restaurant's signature dish featuring aromatic biryani rice",
        category: "biryanis",
        subcategory: "non-veg",
        recommended: true,
        customizable: true,
        isActive: true
    },
    {
        id: 1805,
        name: "Mutton Dum Biryani",
        price: 434.5,
        description: "Classic Indian dish with tender mutton pieces and fragrant basmati rice",
        category: "biryanis",
        subcategory: "non-veg",
        customizable: true,
        isActive: true
    },
    {
        id: 1806,
        name: "Fish Fry Biryani",
        price: 400,
        description: "Marinated and fried fish pieces served with aromatic biryani rice",
        category: "biryanis",
        subcategory: "non-veg",
        isActive: true
    },
    {
        id: 1807,
        name: "Chicken Jumbo Biryani [Serves - 4]",
        price: 770,
        description: "Chicken Biryani [Serves -4]",
        category: "biryanis",
        subcategory: "non-veg",
        recommended: true,
        customizable: false,
        isActive: true
    },
    {
        id: 1808,
        name: "Rambo Spicy Biryani",
        price: 420,
        description: "Chef's Special Rambo Spicy Biryani with Kashmiri chili powder",
        category: "biryanis",
        subcategory: "non-veg",
        recommended: true,
        customizable: true,
        isActive: true
    },
    
    // Soft Drinks
    {
        id: 1901,
        name: "Water Bottle 1l",
        price: 28.6,
        description: "mineral water bottle 1l",
        category: "soft-drinks",
        isActive: true
    },
    {
        id: 1902,
        name: "Sprite 600 Ml",
        price: 59.32,
        description: "",
        category: "soft-drinks",
        customizable: true,
        isActive: true
    },
    {
        id: 1903,
        name: "Coke 600ml",
        price: 59.32,
        description: "",
        category: "soft-drinks",
        customizable: true,
        isActive: true
    },
    {
        id: 1904,
        name: "Thums Up 600ml",
        price: 59.32,
        description: "",
        category: "soft-drinks",
        customizable: true,
        isActive: true
    },
    {
        id: 1905,
        name: "Sweet Lassi",
        price: 70.17,
        description: "",
        category: "soft-drinks",
        customizable: true,
        isActive: true
    },
    
    // Juice
    {
        id: 2001,
        name: "Carrot Milkshake",
        price: 115,
        description: "",
        category: "juice",
        customizable: true,
        isActive: true
    },
    {
        id: 2002,
        name: "Mosanbi",
        price: 80,
        description: "",
        category: "juice",
        isActive: true
    },
    {
        id: 2003,
        name: "Banana Milkshake",
        price: 80,
        description: "",
        category: "juice",
        customizable: true,
        isActive: true
    },
    {
        id: 2004,
        name: "Apple Milkshake",
        price: 90,
        description: "",
        category: "juice",
        customizable: true,
        isActive: true
    },
    {
        id: 2005,
        name: "Grape",
        price: 80,
        description: "",
        category: "juice",
        isActive: true
    },
    
    // Ice Cream
    {
        id: 2101,
        name: "Butter Scotch Ice Cream",
        price: 100,
        description: "",
        category: "ice-cream",
        customizable: true,
        isActive: true
    },
    {
        id: 2102,
        name: "Vanila Ice Cream",
        price: 80,
        description: "",
        category: "ice-cream",
        customizable: true,
        isActive: true
    },
    {
        id: 2103,
        name: "Chocolate Ice Cream",
        price: 100,
        description: "",
        category: "ice-cream",
        customizable: true,
        isActive: true
    },
    {
        id: 2104,
        name: "Strawberry Ice Cream",
        price: 80,
        description: "",
        category: "ice-cream",
        customizable: true,
        isActive: true
    },
    
    // Desserts
    {
        id: 2201,
        name: "Gulab Jamun With Ice Cream",
        price: 70,
        description: "Soft, syrup-soaked gulab jamuns served with creamy ice cream",
        category: "dessert",
        recommended: true,
        isActive: true
    },
    {
        id: 2202,
        name: "Chocolate Pastry",
        price: 60,
        description: "",
        category: "dessert",
        isActive: true
    },
    {
        id: 2203,
        name: "Black Forest",
        price: 90,
        description: "",
        category: "dessert",
        isActive: true
    },
    {
        id: 2204,
        name: "Rasmalai",
        price: 60,
        description: "",
        category: "dessert",
        isActive: true
    },
    
    // Extras
    {
        id: 2301,
        name: "Extra 1/2",
        price: 15.87,
        description: "",
        category: "extras",
        isActive: true
    },
    {
        id: 2302,
        name: "Rambo Extra Piece",
        price: 101.09,
        description: "",
        category: "extras",
        isActive: true
    },
    {
        id: 2303,
        name: "Sweet Paan",
        price: 21.3,
        description: "",
        category: "extras",
        isActive: true
    },
    {
        id: 2304,
        name: "Curd",
        price: 26.72,
        description: "",
        category: "extras",
        isActive: true
    },
    {
        id: 2305,
        name: "Onion Salad",
        price: 15.87,
        description: "",
        category: "extras",
        isActive: true
    },
    
    // Family Pack
    {
        id: 2401,
        name: "Family Pack Veg",
        price: 656.77,
        description: "",
        category: "family-pack",
        customizable: true,
        isActive: true
    },
    {
        id: 2402,
        name: "Family Pack Non-veg",
        price: 765.4,
        description: "",
        category: "family-pack",
        customizable: true,
        isActive: true
    },
    
    // Papad & More
    {
        id: 2501,
        name: "Spl Curd Rice",
        price: 179,
        description: "",
        category: "papad",
        isActive: true
    },
    
    // Boiled Eggs
    {
        id: 2601,
        name: "Boild Eggs",
        price: 37.59,
        description: "",
        category: "boild-eggs",
        isActive: true
    },
    
    // Half Portions
    {
        id: 2701,
        name: "Chicken Dum Half",
        price: 220,
        description: "Chicken Dum Biryani in 600ml box",
        category: "half",
        isActive: true
    },
    {
        id: 2702,
        name: "Veg Fried Rice Half",
        price: 140,
        description: "Veg fried rice bursting with colorful veggies",
        category: "half",
        isActive: true
    },
    
    // Drinks
    {
        id: 2801,
        name: "special bhadam",
        price: 60,
        description: "",
        category: "drinks",
        isActive: true
    },
    
    // Store Items
    {
        id: 2901,
        name: "Hall Charges 1 hour",
        price: 1000,
        description: "",
        category: "store-items",
        isActive: true
    },
    {
        id: 2902,
        name: "Transport Charge",
        price: 850,
        description: "",
        category: "store-items",
        isActive: true
    }
];

function initializeDefaultData() {
    // This function is called from firebase-init.js to initialize Firebase with default data
    return {
        categories: window.categories,
        menuItems: window.menuItems
    };
}