const texts = {
  en: {
    siteTitle: "World Kitchen Recipes",
    btnAll: "All",
    btnMyanmar: "🇲🇲 Myanmar",
    btnJapan: "🇯🇵 Japan",
    btnItaly: "🇮🇹 Italy",
    recipes: [
      {
        country: "Myanmar",
        name: "Mohinga",
        image: "mohinga.jpg",
        ingredients: "Rice noodles, fish broth, banana stem...",
        steps: "1. Prepare broth. 2. Boil noodles. 3. Combine and serve."
      },
      {
        country: "Myanmar",
        name: "Secret Braised Pork",
        image: "Pork.jpg",
        ingredients: "pork belly, minced garlic, soy sauce, water, sugar, salt",
        steps: [
       " Wash the pork belly, remove the hair and cut into small pieces. Blanch in boiling water, then rinse with cold water until completely cooled.",
       " Boil water again and blanch the pork belly a second time. Cool again.",
       " In a frying pan, sauté garlic in a little oil until fragrant. Add pork and stir-fry until lightly browned. Add light soy sauce, dark soy sauce, sugar, and water. Simmer for 20–30 minutes. Let it cool, then add items like eggs or potatoes. Stew for another 20–30 minutes."
    ]
     },
      {
        country: "Japan",
        name: "Tempura",
        image:"Tempura.jpg",
        ingredients:"Seafood – prawn (shrimp), whiting, squid, scallop, conger eel,Vegetables – pumpkin, carrot, eggplant, sweet potato, burdock, lotus root, shiitake mushrooms, shiso (Japanese perilla) leaves",
        steps:[
            "Add the egg and cold water to a bowl or measuring cup, and mix well until there is no cluster of egg white.Add two thirds each of the egg mixture and the flour to a separate bowl, and gently mix by drawing the number 8 several times, leaving powdery lumps of flour. Keep the remaining egg mixture and flour in the fridge, as they will be added late",
            "Fill a deep frypan or pot with oil up to a minimum depth of 3cm (1¼”) and heat the oil to 170C (335F). Drop a tiny amount of batter onto the surface, and if it hardly touches the bottom and returns to the surface, it is at the right temperature.Cook the same ingredients together unless you are serving one person at a time. The order can vary, but prawns should be cooked last. Cook in batches but do not cover more than 30-40% of the surface area of the oil with the tempura. Ingredients should be patted dry before dipping in the batter.",
            "Eggplants – dip in the batter to coat the entire eggplant piece, then drop it gently into the oil one by one. Cook for about 45-60 seconds until the eggplant tempura comes to the surface and you can see large bubbles around it. Flip it over and cook for a further 45 seconds or so until the eggplant becomes light when lifted and very lightly browned, then transfer to a wire rack.Enoki mushrooms – hold at the root with a yaki nori strip and dip the enoki in the batter, without letting go so that the yaki nori strip is not coated. Drop it gently into the oil and cook for 10-20 seconds. Flip it over and cook for few seconds. Transfer to a wire rack.Shiso leaves – hold the end of the stem and dip only the back side of the leaf into the batter, then drop the whole leaf into the oil, making sure that the battered side is facing the bottom of the pan. Cook for 5-10 seconds and transfer to a wire rack.Carrots – add all the carrot sticks to the batter. Take about a quarter of them and place on a flat wooden spatula, then slide them into the oil while holding them together. Cook for about 60 seconds until the carrot tempura comes up to the surface and you can see large bubbles around it. Flip it over and cook for a further 45-60 seconds, then transfer to a wire rack.",
            "Add remaining egg mixture and flour to the batter and gently mix just like the first time. Try not to mix with the batter left at the bottom of the bowl too much as they are now glutinous.Increase the temperature of the oil to 180C (350F). At this temperature, when you drop a tiny amount of batter it will surface straight away.Hold a prawn by the tail and dip it into the batter, leaving the tail uncoated. Drop it gently into the oil and cook for about 60 seconds, until it comes to the surface and you can see large bubbles around it. Flip it over and cook for a further 45-60 seconds, then transfer to a wire rack.",
            "Place one piece each of eggplant, enoki mushroom and carrot tempura onto the plate. Place three prawns tail-side up, then a shiso tempura. Repeat for the other three servings.Take a quarter of daikon per serving and gently squeeze out any water, then place it to the side of the tempura. Add a quarter of the ginger on top of the daikon.Serve immediately with dipping sauce in a small bowl."
        ]
      },
     {
        country: "Japan",
        name: "Sushi",
        image: "sushi.jpg",
        ingredients: "Rice, nori, raw fish, vinegar...",
        steps: "1. Cook rice. 2. Add vinegar. 3. Roll with fish."
      },
      {
        country: "Italy",
        name: "Pizza Margherita",
        image: "pizza.jpg",
        ingredients: "Flour, tomato, cheese, basil...",
        steps: "1. Make dough. 2. Add sauce. 3. Bake in oven."
      }
    ]
  },
  jp: {
    siteTitle: "世界の料理レシピ",
    btnAll: "全部",
    btnMyanmar: "🇲🇲 ミャンマー",
    btnJapan: "🇯🇵 日本",
    btnItaly: "🇮🇹 イタリア",
    recipes: [
      {
        country: "Myanmar",
        name: "モヒンガー",
        image: "mohinga.jpg",
        ingredients: "米の麺、魚のスープ、バナナの茎...",
        steps: "1. スープを作る。2. 麺を茹でる。3. 混ぜて提供。"
      },
      {
        country: "Japan",
        name: "寿司",
        image: "sushi.jpg",
        ingredients: "米、海苔、生魚、酢...",
        steps: "1. 米を炊く。2. 酢を加える。3. 魚で巻く。"
      },
      {
        country: "Italy",
        name: "ピザマルゲリータ",
        image: "pizza.jpg",
        ingredients: "小麦粉、トマト、チーズ、バジル...",
        steps: "1. 生地を作る。2. ソースをのせる。3. オーブンで焼く。"
      }
    ]
  },
  my: {
    siteTitle: "ကမ္ဘာ့ဟင်းချက်နည်းများ",
    btnAll: "အားလုံး",
    btnMyanmar: "🇲🇲 မြန်မာ",
    btnJapan: "🇯🇵 ဂျပန်",
    btnItaly: "🇮🇹 အီတလီ",
    recipes: [
      {
        country: "Myanmar",
        name: "မုန့်ဟင်းခါး",
        image: "mohinga.jpg",
        ingredients: "ဆန်ခေါက်ဆွဲ၊ ငါးရည်၊ ငှက်ပျောပင်...",
        steps: "1. ရည်ပြင်ဆင်ပါ။ 2. ခေါက်ဆွဲပြုတ်ပါ။ 3. တွဲပေးပါ။"
      },
      {
        country: "Japan",
        name: "ဆူရှီ",
        image: "sushi.jpg",
        ingredients: "ဆန်၊ နို့ရီ၊ အသားကောင်း၊ ဗိုင်နီဂါ...",
        steps: "1. ဆန်ချက်ပါ။ 2. ဗိုင်နီဂါထည့်ပါ။ 3. အသားနှင့်လှုပ်ပါ။"
      },
      {
        country: "Italy",
        name: "ပီဇာမာဂေရိတာ",
        image: "pizza.jpg",
        ingredients: "ပုံပြင်မှုန့်၊ ခရမ်းချဥ်၊ ချိစ်၊ ဘာဆစ်...",
        steps: "1. ထမင်းပြုလုပ်ပါ။ 2. ဆော့စ်ထည့်ပါ။ 3. မီးဖိုမှာချက်ပါ။"
      }
    ]
  }
};

let currentLanguage = 'en';

function setLanguage(lang) {
  currentLanguage = lang;

  // Update static text
  document.getElementById('site-title').innerText = texts[lang].siteTitle;
  document.getElementById('btn-all').innerText = texts[lang].btnAll;
  document.getElementById('btn-myanmar').innerText = texts[lang].btnMyanmar;
  document.getElementById('btn-japan').innerText = texts[lang].btnJapan;
  document.getElementById('btn-italy').innerText = texts[lang].btnItaly;

  // Show recipes in the selected language
  displayRecipes(texts[lang].recipes);
}

function displayRecipes(recipesToShow) {
  const container = document.getElementById('recipe-list');
  container.innerHTML = '';

  recipesToShow.forEach(recipe => {
    // Handle steps (array or string)
    let stepsHTML = '';
    if (Array.isArray(recipe.steps)) {
      stepsHTML = '<ol>';
      recipe.steps.forEach(step => {
        stepsHTML += `<li>${step}</li>`;
      });
      stepsHTML += '</ol>';
    } else {
      stepsHTML = `<p><strong>Steps:</strong> ${recipe.steps}</p>`;
    }

    container.innerHTML += `
      <div class="recipe-card">
        <h2>${recipe.name} (${recipe.country})</h2>
        <img src="${recipe.image}" alt="${recipe.name}" />
        <p><strong>Ingredients:</strong> ${recipe.ingredients}</p>
        ${stepsHTML}
      </div>
    `;
  });
}


function filterByCountry(country) {
  let filtered;
  if (country === 'all') {
    filtered = texts[currentLanguage].recipes;
  } else {
    filtered = texts[currentLanguage].recipes.filter(r => r.country === country);
  }
  displayRecipes(filtered);
}

// Initialize page with English recipes
setLanguage('en');


