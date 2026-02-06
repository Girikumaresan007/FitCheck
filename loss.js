function clearRadio(name){
document.querySelectorAll(`input[name="${name}"]`).forEach(r => r.checked = false);
}
function showexercises(){
  clearRadio('diet');
  clearRadio('dailydiet');
    let selected=document.querySelector('input[name="exercise"]:checked');
    let plan =document.getElementById("plan");
    let plan1=document.getElementById('plan1');
    let plan2=document.getElementById("plan2");
    plan.innerHTML = '';
    plan1.innerHTML = '';
    plan2.innerHTML = '';
    if(selected && selected.value =="Gym"){
     plan.innerHTML= `
<b>Chest:</b>
<ul>
  <li>Dumbbell Bench Press </li>
  <li>Incline Push-Ups</li>
  <li>Cable Chest Fly </li>
  <li>Medicine Ball Push-Ups</li>
  <li>Burpee + Push-Up Combo</li>
</ul>

<b>Back:</b>
<ul>
  <li>Lat Pulldown </li>
  <li>Seated Cable Row</li>
  <li>Kettlebell Swings (back & cardio)</li>
  <li>TRX Inverted Rows</li>
  <li>Battle Rope Slams </li>
</ul>

<b>Biceps:</b>
<ul>
  <li>Dumbbell Hammer Curls</li>
  <li>Cable Rope Curls (time under tension)</li>
  <li>Zottman Curls (controlled)</li>
  <li>Resistance Band Curls</li>
  <li>Bicep Curl to Shoulder Press Combo</li>
</ul>`;
  
plan1.innerHTML=`
<b>Triceps:</b>
<ul>
  <li>Diamond Push-Ups (bodyweight burn)</li>
  <li>Cable Rope Pushdowns</li>
  <li>Overhead Dumbbell Extension</li>
  <li>Dips (assisted if needed)</li>
  <li>Close-Grip Push-Ups</li>
</ul>

<b>Shoulders:</b>
<ul>
  <li>Arnold Press (light-moderate weight)</li>
  <li>Lateral Raises (higher reps)</li>
  <li>Front Plate Raises</li>
  <li>Face Pulls (cable)</li>
  <li>Overhead Medicine Ball Slams</li>
</ul>

<b>Legs:</b>
<ul>
  <li>Walking Lunges with Dumbbells</li>
  <li>Goblet Squats</li>
  <li>Step-Ups on Bench</li>
  <li>Plyometric Jump Squats</li>
  <li>Bulgarian Split Squats</li>
</ul>`;
  
plan2.innerHTML=`
<b>Abs:</b>
<ul>
  <li>Plank to Shoulder Taps</li>
  <li>Russian Twists (with medicine ball)</li>
  <li>Bicycle Crunches</li>
  <li>Leg Raises (hanging or lying)</li>
  <li>Mountain Climbers</li>
</ul>

<b>Cardio Workouts:</b>
<ul>
  <li>Treadmill Sprints (HIIT style)</li>
  <li>Rowing Machine Intervals</li>
  <li>Assault Bike (air bike bursts)</li>
  <li>Burpees with Jump</li>
  <li>Battle Ropes (intervals)</li>
  <li>Kettlebell Clean & Press (cardio style)</li>
  <li>Box Jumps</li>
  <li>Jump Rope (speed rounds)</li>
  <li>Ladder Drills (agility)</li>
  <li>Stair Climber (fat burn zone)</li>
</ul>
`;

  }
    else if(selected && selected.value =="Home") {
plan.innerHTML= `
<b>Chest:</b>
<ul>
  <li>Push-Ups (regular or incline/decline)</li>
  <li>Wide Grip Push-Ups</li>
  <li>Plyometric Clap Push-Ups</li>
  <li>Wall Push-Ups (for beginners)</li>
  <li>Burpee + Push-Up Combo</li>
</ul>

<b>Back:</b>
<ul>
  <li>Supermans</li>
  <li>Reverse Snow Angels</li>
  <li>Towel Rows (use sturdy towel around door handle)</li>
  <li>Back Extensions (floor)</li>
  <li>Inverted Rows under Table </li>
</ul>

<b>Biceps:</b>
<ul>
  <li>Water Bottle Curls</li>
  <li>Towel Resistance Curls </li>
  <li>Isometric Wall Curl Hold</li>
  <li>Backpack Bicep Curls</li>
  <li>Shadow Boxing (arm endurance)</li>
</ul>`;
  
plan1.innerHTML=`
<b>Triceps:</b>
<ul>
  <li>Diamond Push-Ups</li>
  <li>Bench Dips (use chair/sofa)</li>
  <li>Overhead Extensions (water bottle/backpack)</li>
  <li>Close-Grip Push-Ups</li>
  <li>Kickbacks (with household weights)</li>
</ul>

<b>Shoulders:</b>
<ul>
  <li>Pike Push-Ups</li>
  <li>Wall Handstand Hold</li>
  <li>Lateral Raises (water bottles)</li>
  <li>Front Raises (water bottles)</li>
  <li>Arm Circles (forward & backward, time-based)</li>
</ul>

<b>Legs:</b>
<ul>
  <li>Bodyweight Squats</li>
  <li>Jump Squats</li>
  <li>Walking Lunges</li>
  <li>Glute Bridges</li>
  <li>Calf Raises (on step or floor)</li>
</ul>`;
  
plan2.innerHTML=`
<b>Abs:</b>
<ul>
  <li>Plank (hold or shoulder taps)</li>
  <li>Bicycle Crunches</li>
  <li>Leg Raises (lying)</li>
  <li>Russian Twists (with household item)</li>
  <li>Mountain Climbers</li>
</ul>

<b>Cardio Workouts:</b>
<ul>
  <li>Jumping Jacks</li>
  <li>High Knees</li>
  <li>Burpees</li>
  <li>Skater Jumps</li>
  <li>Jump Rope (or imaginary rope)</li>
  <li>Shadow Boxing (fast punches)</li>
  <li>Ladder Drills (drawn on floor/taped)</li>
  <li>Side-to-Side Shuffle</li>
  <li>Stair Runs (if available)</li>
  <li>Fast Feet Drill (quick steps in place)</li>
</ul>
`;


    }
}
function showdiet(){
clearRadio('exercise');
clearRadio('dailydiet');
  let selected=document.querySelector('input[name="diet"]:checked'); 
    let plan =document.getElementById("plan");
    let plan1=document.getElementById('plan1');
    let plan2=document.getElementById("plan2");
    plan.innerHTML = '';
    plan1.innerHTML = '';
    plan2.innerHTML = '';
    if(selected && selected.value =="veg"){
       
      plan.innerHTML= `
<b>Protein:</b>
<ul>
  <li>Low-Fat Paneer (grilled or boiled)</li>
  <li>Tofu (stir-fried/steamed)</li>
  <li>Greek Yogurt (low-fat)</li>
  <li>Lentils & Pulses </li>
  <li>Soy Chunks (small portion)</li>
</ul>

<b>Carbohydrate:</b>
<ul>
  <li>Brown Rice (small portion)</li>
  <li>Quinoa / Millets (Ragi, Bajra)</li>
  <li>Whole Wheat Roti (no oil)</li>
  <li>Sweet Potatoes (boiled, limited)</li>
  <li>Oats (water-based)</li>
</ul>

<b>Healthy Fat:</b>
<ul>
  <li>Avocado (¼ fruit per serving)</li>
  <li>Almonds / Walnuts (5–6 pieces)</li>
  <li>Flax Seeds & Chia Seeds</li>
  <li>Olive Oil (1–2 tsp for cooking)</li>
  <li>Pumpkin & Sunflower Seeds</li>
</ul>`;
  
plan1.innerHTML=`
<b>Vitamins & Minerals:</b>
<ul>
  <li>Spinach, Kale & Leafy Greens</li>
  <li>Carrots, Beetroot & Pumpkin</li>
  <li>Broccoli & Cauliflower</li>
  <li>Tomatoes & Bell Peppers</li>
  <li>Berries (Strawberry, Blueberry)</li>
</ul>

<b>Fiber:</b>
<ul>
  <li>Chia Seeds & Flax Seeds</li>
  <li>Whole Fruits</li>
  <li>Vegetables (Zucchini, Beans, Cucumber)</li>
  <li>Oats & Barley</li>
  <li>Lentils & Pulses</li>
</ul>

<b>Electrolytes:</b>
<ul>
  <li>Coconut Water (natural, unsweetened)</li>
  <li>Banana (post workout, limited)</li>
  <li>Oranges & Citrus Fruits</li>
  <li>Cucumber & Tomatoes</li>
  <li>Spinach & Moringa Leaves</li>
</ul>`;
  
plan2.innerHTML=`
<b>Hydration:</b>
<ul>
  <li> Water (2.5–3L daily)</li>
  <li>Green Tea / Herbal Tea (no sugar)</li>
  <li>Lemon Water (without sugar, add chia seeds optional)</li>
  <li>Detox Water (cucumber, mint, lemon)</li>
  <li>Vegetable Soup (clear, no cream)</li>
</ul>
`;

    }
     else if(selected && selected.value =="nonveg") {
 plan.innerHTML= `
<b>Protein:</b>
<ul>
  <li>Skinless Chicken Breast</li>
  <li>Egg Whites (3) + 1 Whole Egg</li>
  <li>White Fish (Cod, Tilapia )</li>
  <li>Turkey Breast (roasted/boiled)</li>
  <li>Prawns / Shrimp </li>
</ul>

<b>Carbohydrate:</b>
<ul>
  <li>Brown Rice (½ cup portion)</li>
  <li>Quinoa / Barley (small serving)</li>
  <li>Oats (water-based, with cinnamon)</li>
  <li>Sweet Potatoes (boiled, ½ cup)</li>
  <li>Whole Wheat Roti (1–2, no oil)</li>
</ul>

<b>Healthy Fat:</b>
<ul>
  <li>Fatty Fish (Salmon, Sardines)</li>
  <li>Almonds / Walnuts (5–6 pieces)</li>
  <li>Flax Seeds / Chia Seeds (1 tsp daily)</li>
  <li>Olive Oil (1 tsp for cooking)</li>
  <li>Avocado (¼ fruit, 2x per week)</li>
</ul>`;
  
plan1.innerHTML=`
<b>Vitamins & Minerals:</b>
<ul>
  <li>Egg Yolks ( 3–4 per week)</li>
  <li>Liver (Chicken/Fish)</li>
  <li>Spinach, Broccoli, Kale</li>
  <li>Tomatoes, Zucchini, Bell Peppers</li>
  <li>Berries (Blueberry, Strawberry)</li>
</ul>

<b>Fiber:</b>
<ul>
  <li>Apples, Pears, Guava</li>
  <li>Green Beans, Asparagus, Cucumber</li>
  <li>Lentils / Chickpeas</li>
  <li>Oats & Whole Grain Cereal </li>
  <li>Leafy Greens (spinach, lettuce)</li>
</ul>

<b>Electrolytes:</b>
<ul>
  <li>Coconut Water (natural, unsweetened)</li>
  <li>Banana (½, only post-workout)</li>
  <li>Pomegranate & Citrus Fruits</li>
  <li>Cucumber & Celery Sticks</li>
  <li>Bone Broth (clear, low salt)</li>
</ul>`;
  
plan2.innerHTML=`
<b>Hydration (Metabolism Support):</b>
<ul>
  <li>Water (2.5–3L daily)</li>
  <li>Green Tea (2 cups, no sugar)</li>
  <li>Lemon Water (morning, no sugar)</li>
  <li>Detox Water (cucumber, mint, lemon)</li>
  <li>Black Coffee (1 cup pre-workout, no sugar)</li>
</ul>
`;

    }
}
function showdailydiet(){
clearRadio('exercise');
clearRadio('diet')
  let selected=document.querySelector('input[name="dailydiet"]:checked'); 
    let plan =document.getElementById("plan");
    let plan1=document.getElementById('plan1');
    let plan2=document.getElementById("plan2");
    plan.innerHTML = '';
    plan1.innerHTML = '';
    plan2.innerHTML = '';
    if(selected && selected.value =="dailydietv"){
       
    plan.innerHTML= `
<b>Monday:</b>
<ul>
  <li><b><i>Breakfast:</b></i> Vegetable oats upma + 5 soaked almonds</li>
  <li><b><i>Lunch:</b></i> Brown rice, dal tadka, cabbage stir fry, salad</li>
  <li><b><i>Dinner:</b></i> 2 multigrain rotis, palak curry, cucumber salad</li> 
</ul>

<b>Tuesday:</b>
<ul>
  <li><b><i>Breakfast:</b></i> Moong dal chilla with mint chutney</li>
  <li><b><i>Lunch:</b></i> Quinoa pulao, rajma curry, carrot-beet salad</li>
  <li><b><i>Dinner:</b></i> Vegetable khichdi (brown rice + dal) with curd</li> 
</ul>

<b>Wednesday:</b>
<ul>
  <li><b><i>Breakfast:</b></i> Poha with peas + 1 glass buttermilk</li>
  <li><b><i>Lunch:</b></i> Millet roti, chole curry, sautéed beans</li>
  <li><b><i>Dinner:</b></i> 2 whole wheat rotis, lauki curry, tomato soup</li> 
</ul>`;
  
plan1.innerHTML=`
<b>Thursday:</b>
<ul>
  <li><b><i>Breakfast:</b></i> Idli with sambar + coconut chutney (no oil)</li>
  <li><b><i>Lunch:</b></i> Brown rice, dal, pumpkin stir fry, salad</li>
  <li><b><i>Dinner:</b></i> 2 rotis, soya chunk curry, cucumber raita</li> 
</ul>

<b>Friday:</b>
<ul>
  <li><b><i>Breakfast:</b></i> Vegetable sandwich (brown bread) + green tea</li>
  <li><b><i>Lunch:</b></i> Quinoa, masoor dal curry, sautéed broccoli</li>
  <li><b><i>Dinner:</b></i> 2 rotis, methi dal, carrot-beans stir fry</li> 
</ul>

<b>Saturday:</b>
<ul>
  <li><b><i>Breakfast:</b></i> Dosa with tomato chutney + 1 glass skim milk</li>
  <li><b><i>Lunch:</b></i> Brown rice, sambar, cabbage curry, salad</li>
  <li><b><i>Dinner:</b></i> 2 rotis, paneer bhurji (low oil), spinach curry</li> 
</ul>`;
  
plan2.innerHTML=`
<b>Sunday:</b>
<ul> 
  <li><b><i>Breakfast:</b></i> Vegetable paratha (no oil) + curd</li>
  <li><b><i>Lunch:</b></i> Brown rice, dal tadka, mixed veg curry</li>
  <li><b><i>Dinner:</b></i> 2 rotis, baingan bharta, clear veg soup</li> 
</ul> 

<b>Snacks (Weight Loss Friendly):</b>
<ul>
  <li>Greek yogurt with flax seeds</li>
  <li>Roasted makhana (fox nuts) with black pepper</li> 
  <li>Sprouts salad with lemon</li> 
  <li>Apple slices with peanut butter</li> 
  <li>Fruit smoothie (no sugar, skim milk/almond milk)</li> 
  <li>Roasted chickpeas</li>
  <li>Papaya or watermelon cubes</li> 
  <li>Cucumber + carrot sticks with hummus</li> 
  <li>Dry fruit mix (almonds, walnuts, raisins)</li> 
  <li>Paneer cubes (grilled, low fat)</li> 
</ul>
`;

    }
    else if(selected && selected.value =="dailydietnv") {
 plan.innerHTML= `
<b>Monday:</b>
<ul>
  <li><b><i>Breakfast:</b></i> 3 boiled egg whites + 1 whole egg, green tea</li>
  <li><b><i>Lunch:</b></i> Grilled chicken breast, brown rice, sautéed veggies</li>
  <li><b><i>Dinner:</b></i> 2 multigrain rotis, fish curry (light), spinach stir fry</li> 
</ul>

<b>Tuesday:</b>
<ul>
  <li><b><i>Breakfast:</b></i> Vegetable omelet (2 egg whites + 1 yolk)</li>
  <li><b><i>Lunch:</b></i> Quinoa, prawn curry (low oil), cucumber salad</li>
  <li><b><i>Dinner:</b></i> Grilled chicken , sautéed broccoli, clear soup</li> 
</ul>

<b>Wednesday:</b>
<ul>
  <li><b><i>Breakfast:</b></i> Oats (water-based) with 1 boiled egg</li>
  <li><b><i>Lunch:</b></i> Millet roti, chicken curry , vegetable stir fry</li>
  <li><b><i>Dinner:</b></i> Baked fish, steamed beans + carrot, tomato soup</li> 
</ul>`;
  
plan1.innerHTML=`
<b>Thursday:</b>
<ul>
  <li><b><i>Breakfast:</b></i> Boiled eggs (2 whites + 1 yolk), lemon water</li>
  <li><b><i>Lunch:</b></i> Brown rice, grilled turkey breast, cabbage stir fry</li>
  <li><b><i>Dinner:</b></i> 2 rotis, egg curry, cucumber salad</li> 
</ul>

<b>Friday:</b>
<ul>
  <li><b><i>Breakfast:</b></i> Whole wheat toast + boiled egg, green tea</li>
  <li><b><i>Lunch:</b></i> Quinoa, fish curry (light), sautéed broccoli</li>
  <li><b><i>Dinner:</b></i> Grilled prawns, spinach stir fry, veg clear soup</li> 
</ul>

<b>Saturday:</b>
<ul>
  <li><b><i>Breakfast:</b></i> Egg white scramble with veggies, 1 glass buttermilk</li>
  <li><b><i>Lunch:</b></i> Brown rice, chicken curry (lean), cabbage salad</li>
  <li><b><i>Dinner:</b></i> 2 rotis, fish tikka (grilled), carrot-beans stir fry</li> 
</ul>`;
  
plan2.innerHTML=`
<b>Sunday:</b>
<ul> 
  <li><b><i>Breakfast:</b></i> Vegetable omelet (2 egg whites + spinach, tomato)</li>
  <li><b><i>Lunch:</b></i> Brown rice, prawn , sautéed zucchini</li>
  <li><b><i>Dinner:</b></i> Grilled chicken (100g), cucumber + tomato salad, veg soup</li> 
</ul> 

<b>Snacks:</b>
<ul>
  <li>Greek yogurt with flax seeds</li>
  <li>Boiled eggs (1–2) with black pepper</li> 
  <li>Grilled chicken cubes</li> 
  <li>Apple or pear slices</li> 
  <li>Protein smoothie (skim milk / almond milk, no sugar)</li> 
  <li>Roasted chickpeas</li>
  <li>Papaya / watermelon cubes</li> 
  <li>Cucumber + carrot sticks</li> 
  <li>Dry fruit mix (almonds, walnuts – small portion)</li> 
  <li>Tuna salad (light dressing)</li> 
</ul>
`;

    }
  }