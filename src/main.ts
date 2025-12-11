import './global.css';
import { Header } from './components/header.ts';
import { Footer } from './components/footer.ts';
import { Subscribe } from './components/subscribe.ts';
import { Card1 } from './components/card1.ts';
import { Card2 } from './components/card2.ts';
import { adCard } from './components/adCard.ts';
import { SlideCard } from './components/slideCard.ts';

//Data
const recipeData = [
  {
    id: 1,
    imageSrc: './src/images/Dish12@2x.png',
    imageAlt: 'Healthy Japanese Fried Rice with Asparagus',
    title: 'Healthy Japanese Fried Rice with Asparagus',
    content: "This healthy Japanese fried rice with asparagus is a quick and easy meal that is packed with flavor and nutrients. Made with brown rice, fresh asparagus, and a variety of vegetables, this dish is perfect for a light lunch or dinner. The combination of soy sauce, ginger, and garlic gives it a delicious umami flavor that will satisfy your taste buds. Plus, it's gluten-free and can be made vegan by omitting the egg. Enjoy this tasty and nutritious meal in under 30 minutes!",
    minutesToPrepare: 30,
    foodStyle: 'Healthy',
    nutrition: { calories: 450, protein: 15, fat: 10, carbs: 70, cholesterol: 0 },
    author: 'John Doe',
    date: '15 March 2022',
    readMoreLink: './detail.html?id=1',
    ingredients: [
      '2 cups cooked brown rice (preferably day-old)',
      '1 cup fresh asparagus, trimmed and cut into bite-sized pieces',
      '1 tablespoon olive oil or sesame oil',
      '2 cloves garlic, minced',
      '1 teaspoon fresh ginger, grated',
      '1 small onion, finely chopped',
      '1/2 cup carrots, diced',
      '2 tablespoons low-sodium soy sauce or tamari',
      '1 large egg (optional, omit for vegan)',
      'Salt and black pepper to taste',
      '1 teaspoon sesame seeds (optional, for garnish)',
      '2 green onions, sliced for garnish'
    ],
    directions: [
      'Heat the oil in a large skillet or wok over medium heat.',
      'Add the chopped onion and sauté for 2–3 minutes until softened.',
      'Stir in the garlic and grated ginger, cooking for about 30 seconds until fragrant.',
      'Add the diced carrots and asparagus, and cook for 4–5 minutes until tender but still crisp.',
      'Push the vegetables to one side of the pan and crack the egg into the empty space. Scramble until fully cooked (skip this step for vegan version).',
      'Add the cooked brown rice to the pan and stir well to combine with the vegetables.',
      'Pour in the soy sauce and mix evenly, letting the rice cook for another 3–4 minutes.',
      'Season with salt and black pepper to taste.',
      'Remove from heat and garnish with green onions and sesame seeds before serving.'
    ]
  },

  {
    id: 2,
    imageSrc: './src/images/Dish1@2x.png',
    imageAlt: 'Spicy delicious chicken wings',
    title: 'Spicy Delicious Chicken Wings',
    content: "Crispy oven-baked chicken wings tossed in a sticky, spicy glaze. Perfect as an appetizer or game-day snack. Balance heat with honey and a splash of soy for umami.",
    minutesToPrepare: 45,
    foodStyle: 'Spicy',
    nutrition: { calories: 520, protein: 35, fat: 35, carbs: 12, cholesterol: 140 },
    author: 'John Doe',
    date: '15 March 2022',
    readMoreLink: './detail.html?id=2',
    ingredients: [
      '1.5 kg chicken wings, tips removed and split',
      '1 tablespoon baking powder (aluminum-free)',
      '1 teaspoon salt',
      '1/2 teaspoon black pepper',
      '2 tablespoons olive oil',
      '3 tablespoons hot sauce (e.g., sriracha)',
      '2 tablespoons honey',
      '1 tablespoon soy sauce',
      '1 tablespoon rice vinegar',
      '2 cloves garlic, minced',
      'Sesame seeds and sliced green onions for garnish'
    ],
    directions: [
      'Preheat oven to 220°C (425°F) and line a baking sheet with foil or parchment paper.',
      'Pat chicken wings dry with paper towels and place in a large bowl.',
      'Toss wings with baking powder, salt, and black pepper until evenly coated.',
      'Arrange wings on the baking sheet in a single layer and bake for 25–30 minutes, flipping once halfway, until golden and crispy.',
      'While wings bake, whisk together hot sauce, honey, soy sauce, rice vinegar, olive oil, and minced garlic to make the glaze.',
      'Remove wings from oven and transfer to a large bowl.',
      'Pour the glaze over the wings and toss well to coat each piece evenly.',
      'Return glazed wings to the baking sheet and broil for 2–3 minutes to caramelize the glaze—watch closely to avoid burning.',
      'Garnish with sesame seeds and sliced green onions before serving.'
    ]
  },

  {
    id: 3,
    imageSrc: './src/images/Dish2@2x.png',
    imageAlt: 'Big and Juicy Wagyu Beef Cheeseburger',
    title: 'Big and Juicy Wagyu Beef Cheeseburger',
    content: "A decadent Wagyu beef burger topped with melted cheese, caramelized onions, and a tangy special sauce. Rich, juicy, and perfect for a special burger night.",
    minutesToPrepare: 35,
    foodStyle: 'Comfort',
    nutrition: { calories: 920, protein: 48, fat: 68, carbs: 40, cholesterol: 160 },
    author: 'John Doe',
    date: '15 March 2022',
    readMoreLink: './detail.html?id=3',
    ingredients: [
      '500 g Wagyu ground beef (or high-fat ground beef)',
      'Salt and freshly ground black pepper',
      '4 slices cheddar cheese',
      '2 tablespoons butter',
      '1 large onion, thinly sliced',
      '2 tablespoons brown sugar',
      '2 tablespoons balsamic vinegar',
      '4 burger buns, toasted',
      'Lettuce, tomato slices, pickles as desired',
      'Special sauce: 3 tbsp mayonnaise, 1 tbsp ketchup, 1 tsp mustard'
    ],
    directions: [
      'In a skillet over medium heat, melt 1 tablespoon butter and add sliced onions.',
      'Cook onions for 10–12 minutes, stirring occasionally, until caramelized. Add brown sugar and balsamic vinegar in the last 2 minutes and stir to coat, then remove from heat.',
      'Form the ground Wagyu into four equal patties, handling gently. Season both sides with salt and pepper.',
      'Heat a grill or cast-iron skillet to medium-high and sear patties 3–4 minutes per side for medium (adjust to desired doneness).',
      'Place a slice of cheddar on each patty during the last minute of cooking and cover to melt.',
      'Toast buns lightly with remaining butter on the grill or skillet.',
      'Assemble burgers: spread special sauce on buns, add lettuce and tomato, top with the cheesy patty, caramelized onions, and pickles.',
      'Serve immediately while hot and juicy.'
    ]
  },

  {
    id: 4,
    imageSrc: './src/images/Dish3@2x.png',
    imageAlt: 'Fresh Lime Roasted Salmon with Ginger Sauce',
    title: 'Fresh Lime Roasted Salmon with Ginger Sauce',
    content: "Oven-roasted salmon fillets brightened by fresh lime and a warm ginger-soy glaze. Quick, healthy, and elegant enough for guests.",
    minutesToPrepare: 25,
    foodStyle: 'Healthy',
    nutrition: { calories: 420, protein: 34, fat: 24, carbs: 6, cholesterol: 95 },
    author: 'John Doe',
    date: '15 March 2022',
    readMoreLink: './detail.html?id=4',
    ingredients: [
      '4 salmon fillets (about 150–180 g each)',
      'Salt and freshly ground pepper',
      '2 tablespoons olive oil',
      'Juice and zest of 1 lime',
      '2 tablespoons soy sauce',
      '1 tablespoon honey or maple syrup',
      '1 tablespoon fresh ginger, grated',
      '1 clove garlic, minced',
      'Lime wedges and chopped cilantro for serving'
    ],
    directions: [
      'Preheat oven to 200°C (400°F) and line a baking tray with foil.',
      'Place salmon fillets skin-side down on the tray and drizzle with olive oil. Season with salt and pepper.',
      'In a small bowl, whisk together lime juice, lime zest, soy sauce, honey, grated ginger, and minced garlic.',
      'Brush half of the ginger-lime sauce over the salmon.',
      'Roast salmon in the oven for 10–12 minutes, or until cooked through and flaky.',
      'Remove from oven and spoon remaining sauce over the fillets.',
      'Garnish with lime wedges and chopped cilantro before serving.'
    ]
  },

  {
    id: 5,
    imageSrc: './src/images/Dish4@2x.png',
    imageAlt: 'Strawberry Oatmeal Pancake with Honey Syrup',
    title: 'Strawberry Oatmeal Pancake with Honey Syrup',
    content: "Hearty oatmeal pancakes studded with fresh strawberries and drizzled with honey syrup—great for a comforting breakfast that's not too heavy.",
    minutesToPrepare: 25,
    foodStyle: 'Breakfast',
    nutrition: { calories: 360, protein: 8, fat: 9, carbs: 60, cholesterol: 50 },
    author: 'John Doe',
    date: '15 March 2022',
    readMoreLink: './detail.html?id=5',
    ingredients: [
      '1 cup rolled oats',
      '1 cup milk (or plant-based milk)',
      '1 large egg',
      '1/2 cup all-purpose flour',
      '1 tablespoon baking powder',
      '2 tablespoons sugar or maple syrup',
      '1/2 teaspoon salt',
      '1 cup fresh strawberries, chopped',
      '2 tablespoons melted butter or oil',
      'Honey or maple syrup for serving'
    ],
    directions: [
      'In a bowl, combine rolled oats and milk and let soak for 5–10 minutes until softened.',
      'Stir in the egg, flour, baking powder, sugar, salt, and melted butter until just combined.',
      'Fold in the chopped strawberries gently.',
      'Heat a non-stick skillet over medium heat and lightly grease with butter or oil.',
      'Drop 1/4 cup portions of batter onto the skillet and cook for 2–3 minutes until bubbles form on top.',
      'Flip and cook an additional 1–2 minutes until golden and cooked through.',
      'Serve warm stacked with honey or maple syrup drizzled over the pancakes.'
    ]
  },

  {
    id: 6,
    imageSrc: './src/images/Dish5@2x.png',
    imageAlt: 'Fresh and Healthy Mixed Mayonnaise Salad',
    title: 'Fresh and Healthy Mixed Mayonnaise Salad',
    content: "A colorful mixed salad with crunchy vegetables and a light mayonnaise-based dressing. Can be served as a side or a light meal with added protein.",
    minutesToPrepare: 15,
    foodStyle: 'Healthy',
    nutrition: { calories: 280, protein: 5, fat: 18, carbs: 22, cholesterol: 30 },
    author: 'John Doe',
    date: '15 March 2022',
    readMoreLink: './detail.html?id=6',
    ingredients: [
      '2 cups mixed salad greens',
      '1/2 cup cherry tomatoes, halved',
      '1/2 cucumber, sliced',
      '1/4 red onion, thinly sliced',
      '1/2 cup corn kernels (fresh or frozen, thawed)',
      '1/2 cup shredded carrot',
      '1/4 cup mayonnaise',
      '1 tablespoon Greek yogurt or sour cream',
      '1 tablespoon lemon juice',
      'Salt and pepper to taste'
    ],
    directions: [
      'In a large bowl, combine salad greens, cherry tomatoes, cucumber, red onion, corn, and shredded carrot.',
      'In a small bowl, whisk together mayonnaise, Greek yogurt, lemon juice, salt, and pepper until smooth.',
      'Pour the dressing over the salad and toss gently to coat all ingredients evenly.',
      'Adjust seasoning as needed and serve chilled or at room temperature.'
    ]
  },

  {
    id: 7,
    imageSrc: './src/images/Dish6@2x.png',
    imageAlt: 'Chicken Meatballs with Cream Cheese',
    title: 'Chicken Meatballs with Cream Cheese',
    content: "Tender chicken meatballs with a creamy cheese center—baked or pan-fried and served with a savory sauce. A fun twist that keeps meatballs moist.",
    minutesToPrepare: 40,
    foodStyle: 'Comfort',
    nutrition: { calories: 410, protein: 28, fat: 22, carbs: 18, cholesterol: 85 },
    author: 'John Doe',
    date: '15 March 2022',
    readMoreLink: './detail.html?id=7',
    ingredients: [
      '500 g ground chicken',
      '1/2 cup breadcrumbs',
      '1 large egg',
      '1/4 cup grated parmesan',
      '2 cloves garlic, minced',
      '1/4 cup finely chopped parsley',
      'Salt and pepper to taste',
      '8–12 small cream cheese cubes (about 1 tsp each)',
      '2 tablespoons olive oil',
      'Marinara sauce for serving (optional)'
    ],
    directions: [
      'Preheat oven to 200°C (400°F) if baking, or heat oil in a skillet if frying.',
      'In a bowl, mix ground chicken, breadcrumbs, egg, parmesan, garlic, parsley, salt, and pepper until just combined.',
      'Take a tablespoon of mixture, flatten slightly, place a cube of cream cheese in the center, and wrap the meat around it to form a sealed meatball.',
      'Repeat until all meat mixture is used.',
      'If baking, place meatballs on a lined baking sheet and bake for 15–18 minutes until cooked through and golden.',
      'If frying, heat olive oil in a skillet and cook meatballs, turning occasionally, for 10–12 minutes until cooked through.',
      'Serve hot with marinara sauce or as desired.'
    ]
  },

  {
    id: 8,
    imageSrc: './src/images/Dish7@2x.png',
    imageAlt: 'Fruity Pancake with Orange & Blueberry',
    title: 'Fruity Pancake with Orange & Blueberry',
    content: "Light and fluffy pancakes flavored with orange zest and studded with fresh blueberries—bright, fruity, and perfect for brunch.",
    minutesToPrepare: 25,
    foodStyle: 'Breakfast',
    nutrition: { calories: 380, protein: 9, fat: 10, carbs: 62, cholesterol: 45 },
    author: 'John Doe',
    date: '15 March 2022',
    readMoreLink: './detail.html?id=8',
    ingredients: [
      '1 cup all-purpose flour',
      '2 tablespoons sugar',
      '1 tablespoon baking powder',
      '1/4 teaspoon salt',
      '1 cup milk',
      '1 large egg',
      '2 tablespoons melted butter',
      'Zest of 1 orange',
      '3/4 cup fresh blueberries',
      'Maple syrup for serving'
    ],
    directions: [
      'In a bowl, whisk together flour, sugar, baking powder, and salt.',
      'In another bowl, combine milk, egg, melted butter, and orange zest.',
      'Pour wet ingredients into dry and stir until just combined; fold in blueberries.',
      'Heat a skillet over medium heat and grease lightly.',
      'Scoop 1/4 cup batter for each pancake and cook until bubbles form and edges set, about 2–3 minutes.',
      'Flip and cook another 1–2 minutes until golden.',
      'Serve warm with maple syrup and extra blueberries if desired.'
    ]
  },

  {
    id: 9,
    imageSrc: './src/images/Dish8@2x.png',
    imageAlt: 'The Best Easy One Pot Chicken and Rice',
    title: 'The Best Easy One Pot Chicken and Rice',
    content: "A comforting one-pot meal with seasoned chicken, rice, and vegetables. Minimal cleanup and full of homey flavor.",
    minutesToPrepare: 50,
    foodStyle: 'Comfort',
    nutrition: { calories: 640, protein: 42, fat: 22, carbs: 72, cholesterol: 120 },
    author: 'John Doe',
    date: '15 March 2022',
    readMoreLink: './detail.html?id=9',
    ingredients: [
      '4 bone-in chicken thighs (or breasts)',
      'Salt and pepper',
      '2 tablespoons olive oil',
      '1 onion, chopped',
      '2 cloves garlic, minced',
      '1 cup long-grain rice, rinsed',
      '2 cups chicken broth',
      '1 cup frozen peas and carrots',
      '1 teaspoon dried thyme',
      'Fresh parsley to garnish'
    ],
    directions: [
      'Season chicken with salt and pepper.',
      'Heat oil in a large pot over medium-high heat and brown chicken 4–5 minutes per side. Remove and set aside.',
      'In the same pot, add onion and cook 3–4 minutes until softened.',
      'Add garlic and cook 30 seconds until fragrant.',
      'Stir in rice and toast for 1–2 minutes.',
      'Pour in chicken broth and add dried thyme, then return chicken to the pot, placing on top of rice.',
      'Bring to a simmer, then cover and cook on low for 20–25 minutes until rice is tender and chicken is cooked through.',
      'Stir in frozen peas and carrots, cover for 2–3 minutes to heat through.',
      'Garnish with fresh parsley and serve.'
    ]
  },

  {
    id: 10,
    imageSrc: './src/images/Dish9@2x.png',
    imageAlt: 'The Creamiest Creamy Chicken and Bacon Pasta',
    title: 'The Creamiest Creamy Chicken and Bacon Pasta',
    content: "A rich and indulgent pasta with tender chicken, crispy bacon, and a silky cream sauce. Comfort food at its best.",
    minutesToPrepare: 35,
    foodStyle: 'Comfort',
    nutrition: { calories: 820, protein: 45, fat: 48, carbs: 60, cholesterol: 160 },
    author: 'John Doe',
    date: '15 March 2022',
    readMoreLink: './detail.html?id=10',
    ingredients: [
      '300 g pasta (fettuccine or penne)',
      '2 chicken breasts, cubed',
      '4 slices bacon, chopped',
      '2 tablespoons olive oil',
      '1 small onion, finely chopped',
      '2 cloves garlic, minced',
      '1 cup heavy cream',
      '1/2 cup chicken broth',
      '1/2 cup grated parmesan',
      'Salt, pepper, and chopped parsley to finish'
    ],
    directions: [
      'Cook pasta according to package instructions until al dente. Reserve 1/2 cup pasta water and drain.',
      'In a skillet, cook chopped bacon until crisp. Remove and drain on paper towels.',
      'Season cubed chicken with salt and pepper and cook in the bacon fat (or add oil) until cooked through, about 5–6 minutes. Remove and set aside.',
      'Add onion to the skillet and cook 3–4 minutes until softened, then add garlic and cook 30 seconds.',
      'Pour in heavy cream and chicken broth; bring to a gentle simmer.',
      'Stir in parmesan until melted and the sauce thickens slightly. If too thick, add reserved pasta water a little at a time.',
      'Return chicken and bacon to the sauce and toss in cooked pasta until evenly coated.',
      'Season to taste, garnish with parsley, and serve immediately.'
    ]
  },

  {
    id: 11,
    imageSrc: './src/images/Dish10@2x.png',
    imageAlt: 'Mixed Tropical Fruit Salad with Superfood Boosts',
    title: 'Mixed Tropical Fruit Salad with Superfood Boosts',
    content: "A refreshing tropical fruit salad topped with chia seeds, toasted coconut, and a lime-honey dressing—bright, healthy, and energizing.",
    minutesToPrepare: 20,
    foodStyle: 'Healthy',
    nutrition: { calories: 220, protein: 3, fat: 5, carbs: 50, cholesterol: 0 },
    author: 'John Doe',
    date: '15 March 2022',
    readMoreLink: './detail.html?id=11',
    ingredients: [
      '1 cup pineapple chunks',
      '1 cup mango, diced',
      '1 cup papaya, diced',
      '1 cup kiwi, sliced',
      '1/2 cup strawberries, halved',
      '1 tablespoon chia seeds',
      '2 tablespoons toasted coconut flakes',
      'Juice of 1 lime',
      '1 tablespoon honey or agave syrup'
    ],
    directions: [
      'Combine all chopped fruits in a large bowl.',
      'In a small bowl, whisk together lime juice and honey until combined.',
      'Pour dressing over the fruit and toss gently to coat.',
      'Sprinkle chia seeds and toasted coconut on top before serving.',
      'Serve chilled for best flavor.'
    ]
  },

  {
    id: 12,
    imageSrc: './src/images/Dish11@2x.png',
    imageAlt: 'Juicy steak with crispy fries',
    title: 'Juicy Steak with Crispy Fries',
    content: "A perfectly seared steak paired with homemade crispy fries. Simple seasoning brings out the beefy flavor while fries get golden and crunchy.",
    minutesToPrepare: 45,
    foodStyle: 'Comfort',
    nutrition: { calories: 900, protein: 55, fat: 50, carbs: 60, cholesterol: 130 },
    author: 'John Doe',
    date: '15 March 2022',
    readMoreLink: './detail.html?id=12',
    ingredients: [
      '2 ribeye or strip steaks (about 250–300 g each)',
      'Salt and freshly ground black pepper',
      '2 tablespoons butter',
      '2 cloves garlic, smashed',
      'Fresh rosemary or thyme sprig',
      '4 large potatoes, cut into fries',
      '2 tablespoons vegetable oil',
      'Salt for fries'
    ],
    directions: [
      'Preheat oven to 220°C (425°F) for fries.',
      'Toss potato fries with vegetable oil and a pinch of salt, spread on a baking sheet, and bake for 30–35 minutes turning once until golden and crispy.',
      'Bring steaks to room temperature and season generously with salt and pepper on both sides.',
      'Heat a heavy skillet until very hot, add butter, garlic, and herbs.',
      'Sear steaks 3–4 minutes per side for medium-rare (adjust time for desired doneness), spooning butter over the steaks as they cook.',
      'Remove steaks to rest for 5–10 minutes before slicing.',
      'Serve steak slices alongside crispy fries.'
    ]
  },

  {
    id: 13,
    imageSrc: './src/images/Dish13@2x.png',
    imageAlt: 'Cauliflower Walnut Vegetarian Taco Meat',
    title: 'Cauliflower Walnut Vegetarian Taco Meat',
    content: "A flavorful plant-based taco filling made from cauliflower and walnuts, seasoned to mimic taco meat texture and taste—great for vegetarian tacos or bowls.",
    minutesToPrepare: 30,
    foodStyle: 'Vegan',
    nutrition: { calories: 340, protein: 8, fat: 24, carbs: 24, cholesterol: 0 },
    author: 'John Doe',
    date: '15 March 2022',
    readMoreLink: './detail.html?id=13',
    ingredients: [
      '1 head cauliflower, chopped into florets',
      '1 cup walnuts',
      '1 tablespoon olive oil',
      '1 small onion, chopped',
      '2 cloves garlic, minced',
      '2 teaspoons chili powder',
      '1 teaspoon ground cumin',
      '1/2 teaspoon smoked paprika',
      '2 tablespoons soy sauce or tamari',
      'Salt and pepper to taste',
      'Taco shells or tortillas and toppings (lettuce, salsa, avocado)'
    ],
    directions: [
      'Pulse cauliflower and walnuts in a food processor until crumbly texture resembling ground meat—do not overprocess into a paste.',
      'Heat oil in a skillet over medium heat and sauté onion for 3–4 minutes until translucent.',
      'Add garlic and cook 30 seconds until fragrant.',
      'Add the cauliflower-walnut mixture to the pan and cook for 6–8 minutes, stirring occasionally, until lightly browned.',
      'Stir in chili powder, cumin, smoked paprika, soy sauce, salt, and pepper and cook another 2–3 minutes to allow flavors to meld.',
      'Adjust seasoning to taste and serve in taco shells or over rice with desired toppings.'
    ]
  },

  {
    id: 14,
    imageSrc: './src/images/Dish14@2x.png',
    imageAlt: 'Rainbow Chicken Salad with Almond Honey Mustard Dressing',
    title: 'Rainbow Chicken Salad with Almond Honey Mustard Dressing',
    content: "A colorful salad with shredded chicken, crunchy veggies, and a nutty honey-mustard dressing—bright, filling, and great for meal prep.",
    minutesToPrepare: 20,
    foodStyle: 'Healthy',
    nutrition: { calories: 420, protein: 36, fat: 18, carbs: 28, cholesterol: 95 },
    author: 'John Doe',
    date: '15 March 2022',
    readMoreLink: './detail.html?id=14',
    ingredients: [
      '2 cups cooked shredded chicken',
      'Mixed salad greens',
      '1/2 red bell pepper, julienned',
      '1/2 yellow bell pepper, julienned',
      '1/2 cup shredded purple cabbage',
      '1/2 cup sliced cucumber',
      '1/4 cup sliced almonds, toasted',
      'For dressing: 2 tbsp honey, 2 tbsp Dijon mustard, 2 tbsp olive oil, 1 tbsp apple cider vinegar, salt and pepper'
    ],
    directions: [
      'In a large bowl, combine shredded chicken and salad vegetables.',
      'In a jar or small bowl, whisk together honey, Dijon mustard, olive oil, apple cider vinegar, salt, and pepper until emulsified.',
      'Pour dressing over the salad and toss to coat evenly.',
      'Sprinkle toasted sliced almonds on top before serving.'
    ]
  },

  {
    id: 15,
    imageSrc: './src/images/Dish15@2x.png',
    imageAlt: 'Barbeque Spicy Sandwiches with Chips',
    title: 'Barbeque Spicy Sandwiches with Chips',
    content: "Smoky barbeque-spiced pulled meat (or plant-based alternative) piled on toasted buns with spicy slaw and a side of chips—satisfying and bold.",
    minutesToPrepare: 50,
    foodStyle: 'Casual',
    nutrition: { calories: 700, protein: 30, fat: 28, carbs: 80, cholesterol: 90 },
    author: 'John Doe',
    date: '15 March 2022',
    readMoreLink: './detail.html?id=15',
    ingredients: [
      '500 g pulled pork or shredded jackfruit for vegan option',
      '1 cup barbeque sauce',
      '1/2 teaspoon smoked paprika',
      '1/4 teaspoon cayenne (optional for heat)',
      '4 sandwich buns, toasted',
      'For slaw: 1 cup shredded cabbage, 1/4 cup mayonnaise, 1 tbsp apple cider vinegar, salt and pepper',
      'Chips or fries for serving'
    ],
    directions: [
      'If using pulled pork, warm it in a saucepan with barbeque sauce, smoked paprika, and cayenne until heated through. If using jackfruit, sauté then simmer with sauce until tender.',
      'Prepare slaw by combining shredded cabbage, mayonnaise, apple cider vinegar, salt, and pepper in a bowl.',
      'Pile warm barbeque filling onto toasted buns and top with a generous spoonful of slaw.',
      'Serve immediately with chips or fries on the side.'
    ]
  },

  {
    id: 16,
    imageSrc: './src/images/Dish16@2x.png',
    imageAlt: 'Firecracker Vegan Lettuce Wraps - Spicy!',
    title: 'Firecracker Vegan Lettuce Wraps - Spicy!',
    content: "A spicy, crunchy vegan filling served in crisp lettuce leaves—loaded with veggies, hoisin, and a kick of chili for a light, flavorful bite.",
    minutesToPrepare: 25,
    foodStyle: 'Vegan',
    nutrition: { calories: 310, protein: 7, fat: 14, carbs: 42, cholesterol: 0 },
    author: 'John Doe',
    date: '15 March 2022',
    readMoreLink: './detail.html?id=16',
    ingredients: [
      '1 block firm tofu, crumbled',
      '1 tablespoon oil',
      '1/2 cup shredded carrots',
      '1/2 cup diced red bell pepper',
      '1/2 cup diced water chestnuts',
      '2 cloves garlic, minced',
      '2 tablespoons hoisin sauce',
      '1 tablespoon soy sauce',
      '1 teaspoon chili garlic sauce (adjust to taste)',
      '1 head butter or iceberg lettuce, leaves separated',
      'Chopped cilantro and chopped peanuts for garnish'
    ],
    directions: [
      'Heat oil in a skillet over medium-high heat and sauté crumbled tofu until golden and slightly crisp.',
      'Add garlic, carrots, red bell pepper, and water chestnuts and cook 3–4 minutes until vegetables are tender-crisp.',
      'Stir in hoisin sauce, soy sauce, and chili garlic sauce and cook another 1–2 minutes until well combined.',
      'Spoon the spicy filling into lettuce leaves, garnish with cilantro and chopped peanuts, and serve immediately.'
    ]
  },

  {
    id: 17,
    imageSrc: './src/images/Dish17@2x.png',
    imageAlt: 'Chicken Ramen Soup with Mushroom',
    title: 'Chicken Ramen Soup with Mushroom',
    content: "A comforting bowl of chicken ramen with savory mushroom broth, tender chicken, noodles, and soft-boiled egg—perfect for chilly nights.",
    minutesToPrepare: 40,
    foodStyle: 'Comfort',
    nutrition: { calories: 560, protein: 36, fat: 18, carbs: 60, cholesterol: 185 },
    author: 'John Doe',
    date: '15 March 2022',
    readMoreLink: './detail.html?id=17',
    ingredients: [
      '2 chicken thighs or breasts',
      '4 cups chicken broth',
      '2 cups water',
      '1 cup mixed mushrooms, sliced (shiitake, cremini)',
      '2 cloves garlic, smashed',
      '1-inch piece ginger, sliced',
      '2 tablespoons soy sauce',
      '1 tablespoon mirin (optional)',
      '2 portions ramen noodles',
      '2 soft-boiled eggs',
      '2 green onions, sliced',
      '1 tablespoon sesame oil'
    ],
    directions: [
      'In a pot, combine chicken, chicken broth, water, garlic, and ginger. Bring to a simmer and cook for 15–20 minutes until chicken is cooked through.',
      'Remove chicken and shred or slice; skim any foam from broth.',
      'Add sliced mushrooms to the broth and simmer 5–7 minutes until mushrooms are tender.',
      'Stir in soy sauce and mirin, then adjust seasoning to taste.',
      'Cook ramen noodles separately according to package instructions, drain and divide into bowls.',
      'Place shredded chicken and a soft-boiled egg half in each bowl over the noodles.',
      'Ladle hot broth and mushrooms over the bowls, drizzle with sesame oil, and garnish with sliced green onions before serving.'
    ]
  }
];

const slideData = recipeData.slice(1, 5);
const recipeData1 = recipeData.slice(0, 5);
const recipeData2 = recipeData.slice(5, 8);
const dishData = recipeData.slice(9, 17);

const categoryData = [
  {
    imageSrc: './src/images/breakfast@2x.png',
    imageAlt: 'Breakfast',
    title: 'Breakfast',
  },
  {
    imageSrc: './src/images/vegan@2x.png',
    imageAlt: 'Vegan',
    title: 'Vegan',
  },
  {
    imageSrc: './src/images/meat@2x.png',
    imageAlt: 'Meat',
    title: 'Meat',
  },
  {
    imageSrc: './src/images/dessert@2x.png',
    imageAlt: 'Dessert',
    title: 'Dessert',
  },
  {
    imageSrc: './src/images/lunch@2x.png',
    imageAlt: 'Lunch',
    title: 'Lunch',
  },
  {
    imageSrc: './src/images/chocolate@2x.png',
    imageAlt: 'Chocolate',
    title: 'Chocolate',
  }
];

const postData = [
  {
    imageSrc: './src/images/Post1.png',
    imageAlt: 'post1',
  },
  {
    imageSrc: './src/images/Post2.png',
    imageAlt: 'post2',
  },
  {
    imageSrc: './src/images/Post3.png',
    imageAlt: 'post3',
  },
  {
    imageSrc: './src/images/Post4.png',
    imageAlt: 'post4',
  }
]

// Insert Header at the top of the body
document.body.prepend(Header());

// Main Section 1 - Slide Cards
const main_section1_container = document.querySelector('#main-section1-track');
if (!main_section1_container) {
  throw new Error('Element with ID "main-section1-track" not found.');
}
slideData.forEach(slide => {
  main_section1_container.appendChild(SlideCard(slide));
});

const track = document.querySelector('#main-section1-track') as HTMLElement;

let index = 0;

function goToSlide(i: number) {
  index = i;
  track.style.transform = `translateX(-${index * 88.89}vw)`;
}

setInterval(() => {
  index = (index + 1) % slideData.length;
  goToSlide(index);
}, 5000);


// Main Section 2 - Categories
const main_section2_bottom = document.querySelector('#main-section2-bottom');
if (!main_section2_bottom) {
  throw new Error('Element with ID "main-section2-bottom" not found.');
}

categoryData.forEach(category => {
  const card = document.createElement('div');
  card.className = 'main-section2-card';
  card.style.backgroundImage = `url(${category.imageSrc})`;
  card.setAttribute('aria-label', category.imageAlt);
  card.textContent = category.title;
  main_section2_bottom.append(card);
});

// Main Section 3 - Simple and Tasty Recipes
const main_section3_bottom = document.querySelector('#main-section3-bottom');
if (!main_section3_bottom) {
  throw new Error('Element with ID "main-section3-bottom" not found.');
}

recipeData1.forEach(recipe => {
  const card = Card2(recipe);
  main_section3_bottom.append(card);
});
main_section3_bottom.appendChild(adCard());
recipeData2.forEach(recipe => {
  const card = Card2(recipe);
  main_section3_bottom.appendChild(card);
});

// Main Section 5 - Featured Image
const main_section5_middle = document.querySelector('#main-section5-middle');
if (!main_section5_middle) {
  throw new Error('Element with ID "main-section5-middle" not found.');
}

postData.forEach(post => {
  const img = document.createElement('img');
  img.src = `${post.imageSrc}`;
  img.alt = post.imageAlt;
  main_section5_middle.append(img);
});

// Main Section 6 - Dish Cards
const main_section6_dish_image = document.querySelector('#main-section6-dish-image');
if (!main_section6_dish_image) {
  throw new Error('Element with ID "main-section6-dish-image" not found.');
}

dishData.forEach(dish => {
  const card = Card1(dish);
  main_section6_dish_image.append(card);
});


const main_section7 = document.querySelector('#main-section7');
if (!main_section7) {
  throw new Error('Element with ID "main-section7" not found.');
}
main_section7.appendChild(Subscribe());

document.body.append(Footer());


// Page Loading Logic
function waitForImages(container: HTMLElement) {
  const images = Array.from(container.querySelectorAll('img'));
  if (images.length === 0) return Promise.resolve();

  return Promise.all(images.map(img => {
    if (img.complete) return Promise.resolve();
    return new Promise(resolve => {
      img.onload = img.onerror = () => resolve(true);
    });
  }));
}

window.addEventListener('DOMContentLoaded', async () => {
  const loading = document.getElementById('page-loading');
  const app = document.getElementById('app');

  if (!loading || !app) return;

  const minTime = new Promise(resolve => setTimeout(resolve, 300));
  await Promise.all([waitForImages(app), minTime]);

  app.classList.remove('app-hidden');
  app.classList.add('app-visible');

  loading.classList.add('hidden');
  setTimeout(() => loading.remove(), 300);
});