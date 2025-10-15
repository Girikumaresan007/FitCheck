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
  <li>Dumbbell Bench Press</li>
  <li>Incline Barbell Press</li>
  <li>Chest Dips (weighted if possible)</li>
  <li>Pec Deck Machine Flyes</li>
  <li>Push-Ups (weighted or decline)</li>
</ul>

<b>Back:</b>
<ul>
  <li>Pullovers (dumbbell)</li>
  <li>T-Bar Row</li>
  <li>One-Arm Dumbbell Row</li>
  <li>Chin-Ups (weighted)</li>
  <li>Rack Pulls</li>
</ul>

<b>Biceps:</b>
<ul>
  <li>Concentration Curls</li>
  <li>Zottman Curls</li>
  <li>Cable Rope Hammer Curls</li>
  <li>Spider Curls</li>
  <li>Reverse Barbell Curls</li>
</ul>`;

plan1.innerHTML=`
<b>Triceps:</b>
<ul>
  <li>Diamond Push-Ups</li>
  <li>One-Arm Dumbbell Overhead Extension</li>
  <li>Rope Overhead Cable Extension</li>
  <li>Kickbacks (dumbbell)</li>
  <li>Bench Dips (weighted)</li>
</ul>

<b>Shoulders:</b>
<ul>
  <li>Seated Dumbbell Shoulder Press</li>
  <li>Arnold Dumbbell Press</li>
  <li>Upright Rows</li>
  <li>Dumbbell Shrugs</li>
  <li>Face Pulls (cable)</li>
</ul>

<b>Legs:</b>
<ul>
  <li>Bulgarian Split Squats</li>
  <li>Hack Squats</li>
  <li>Romanian Deadlifts</li>
  <li>Leg Extensions</li>
  <li>Standing Calf Raises </li>
</ul>`;

plan2.innerHTML=`
<b>Abs:</b>
<ul>
  <li>Plank (weighted or time-based)</li>
  <li>Bicycle Crunches</li>
  <li>Flutter Kicks</li>
  <li>Toe Touches</li>
  <li>Hanging Knee Raises with Twist</li>
</ul>
<b>Cardio Workouts:</b>
<ul>
  <li>Sled push / sled pull</li>
  <li>Assault bike (air bike)</li>
  <li>VersaClimber workout</li>
  <li>Plyometric jump lunges</li>
  <li>Kettlebell clean and press (cardio style)</li>
  <li>Medicine ball slams</li>
  <li>Ladder drills (agility ladder)</li>
  <li>Burpees with jump</li>
  <li>Row-sprint intervals (short bursts)</li>
  <li>Boxing on heavy bag (cardio rounds)</li>
</ul>

`;
  }
    else if(selected && selected.value =="Home") {
  plan.innerHTML= plan.innerHTML= `
<b>Chest:</b>
<ul>
  <li>Decline Push-Ups (feet elevated)</li>
  <li>Archer Push-Ups</li>
  <li>Resistance Band Chest Fly</li>
  <li>Explosive Clap Push-Ups</li>
  <li>Wide-Grip Push-Ups</li>
</ul>

<b>Back:</b>
<ul>
  <li>Inverted Rows (using table/rod)</li>
  <li>Resistance Band Face Pulls</li>
  <li>Good Mornings (bodyweight or band)</li>
  <li>Back Extensions (on floor)</li>
  <li>Reverse Plank Hold</li>
</ul>

<b>Biceps:</b>
<ul>
  <li>Chin-Ups</li>
  <li>Resistance Band Reverse Curls</li>
  <li>Towel Curls (isometric against door handle)</li>
  <li>Doorway Isometric Curls</li>
  <li>Static Hold Curl with Backpack</li>
</ul>`;

plan1.innerHTML=`
<b>Triceps:</b>
<ul>
  <li>Diamond Push-Ups</li>
  <li>Bench Dips (using chair)</li>
  <li>Resistance Band Overhead Extension</li>
  <li>Close-Grip Push-Ups</li>
  <li>Floor Skull Crushers </li>
</ul>

<b>Shoulders:</b>
<ul>
  <li>Handstand Push-Ups </li>
  <li>Resistance Band Shoulder Press</li>
  <li>Front Plate Raise </li>
  <li>Lateral Arm Holds</li>
  <li>Pseudo Planche Push-Ups</li>
</ul>

<b>Legs:</b>
<ul>
  <li>Pistol Squats</li>
  <li>Jumping Split Squats</li>
  <li>Wall Sit (weighted with backpack)</li>
  <li>Hip Thrusts</li>
  <li>Duck Walk</li>
</ul>`;

plan2.innerHTML=`
<b>Abs:</b>
<ul>
  <li>V-Ups</li>
  <li>Toe Touch Sit-Ups</li>
  <li>Plank to Shoulder Tap</li>
  <li>Reverse Crunches</li>
  <li>Side Plank with Hip Dips</li>
</ul>

<b>Cardio Workouts:</b>
<ul>
  <li>Crab Walk</li>
  <li>Bear Crawl Shoulder Taps</li>
  <li>Lateral Hops (side-to-side jumps)</li>
  <li>Jumping Lunges with Twist</li>
  <li>Frog Jumps</li>
  <li>Plank Jacks</li>
  <li>Speed Skipping (with or without rope)</li>
  <li>Inchworm to Push-Up</li>
  <li>Side-to-Side Shuffle</li>
  <li>Burpee with Star Jump</li>
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
  <li>Paneer (Full-fat)</li>
  <li>Soy Chunks / Soybeans</li>
  <li>Tofu</li>
  <li>Whole Milk & Yogurt</li>
  <li>Lentils (Moong, Masoor, Chana dal)</li>
</ul>

<b>Carbohydrate:</b>
<ul>
  <li>White Rice & Brown Rice</li>
  <li>Whole Wheat Pasta & Rotis</li>
  <li>Sweet Potatoes & Potatoes</li>
  <li>Bananas, Dates & Raisins</li>
  <li>Granola & Oats</li>
</ul>

<b>Healthy Fat:</b>
<ul>
  <li>Avocado</li>
  <li>Peanut Butter & Almond Butter</li>
  <li>Olive Oil & Coconut Oil</li>
  <li>Almonds, Cashews & Walnuts</li>
  <li>Cheese</li>
</ul>`;
  plan1.innerHTML=`

<b>Vitamins & Minerals:</b>
<ul>
  <li>Spinach & Leafy Greens</li>
  <li>Carrots & Pumpkin</li>
  <li>Oranges, Grapes & Amla</li>
  <li>Broccoli & Cauliflower</li>
  <li>Beetroot</li>
</ul>

<b>Fiber:</b>
<ul>
  <li>Berries (Strawberry, Blueberry)</li>
  <li>Oats & Barley</li>
  <li>Millets (Ragi, Bajra, Jowar)</li>
  <li>Chia Seeds & Flax Seeds</li>
  <li>Pears & Apples</li>
</ul>

<b>Electrolytes:</b>
<ul>
  <li>Banana</li>
  <li>Tomatoes</li>
  <li>Oranges & Citrus Fruits</li>
  <li>Coconut Water</li>
  <li>Moringa Leaves</li>
</ul>`;
  plan2.innerHTML=`
<b>Hydration:</b>
<ul>
  <li>Full Cream Milk</li>
  <li>Fruit & Nut Smoothies</li>
  <li>Lassi & Buttermilk</li>
  <li>Natural Fruit Juices</li>
  <li>Milkshakes (Banana, Mango, Dates)</li>
</ul>
`;
    }
     else if(selected && selected.value =="nonveg") {
  plan.innerHTML= `
  <b>Protein:</b>
<ul>
  <li>Chicken Thighs & Drumsticks</li>
  <li>Whole Eggs (with yolk)</li>
  <li>Fatty Fish (Salmon, Mackerel)</li>
  <li>Lean Red Meat (Mutton, Beef)</li>
  <li>Prawns & Shrimp</li>
</ul>

<b>Carbohydrate:</b>
<ul>
  <li>White Rice with Chicken/Fish</li>
  <li>Whole Wheat Pasta with Meat Sauce</li>
  <li>Potatoes & Sweet Potatoes</li>
  <li>Bread Sandwiches (with chicken/egg)</li>
  <li>Oats with Milk & Eggs</li>
</ul>

<b>Healthy Fat:</b>
<ul>
  <li>Egg Yolks</li>
  <li>Fatty Fish (Salmon, Sardines)</li>
  <li>Butter / Ghee with Meat</li>
  <li>Cheese with Eggs/Chicken</li>
  <li>Chicken Skin (when cooked healthy)</li>
</ul>`;
plan1.innerHTML= `
<b>Vitamins & Minerals:</b>
<ul>
  <li>Liver (rich in iron & vitamin A)</li>
  <li>Oysters / Shellfish</li>
  <li>Chicken & Turkey (B-vitamins)</li>
  <li>Fish (Vitamin D & Omega-3)</li>
  <li>Eggs (Vitamin B12 & D)</li>
</ul>

<b>Fiber (Paired with Non-Veg):</b>
<ul>
  <li>Chicken with Spinach</li>
  <li>Fish with Lentils</li>
  <li>Eggs with Avocado</li>
  <li>Meat with Quinoa</li>
  <li>Seafood with Beans</li>
</ul>

<b>Electrolytes:</b>
<ul>
  <li>Salmon (Potassium + Sodium)</li>
  <li>Sardines (Magnesium)</li>
  <li>Beef (Rich in Zinc)</li>
  <li>Chicken (Potassium)</li>
  <li>Mackerel (Magnesium & Sodium)</li>
</ul>`;
plan2.innerHTML= `
<b>Hydration:</b>
<ul>
  <li>Chicken Soup (with rice/pasta)</li>
  <li>Fish Broth</li>
  <li>Bone Broth (Collagen + Minerals)</li>
  <li>Yogurt Drink (Lassi style)</li>
  <li>Coconut Water</li>
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
                <li><b><i>Breakfast:</b></i> Oats with milk, banana, peanut butter</li>
                <li><b><i>Lunch:</b></i> Brown rice, paneer curry, mixed veggies, salad</li>
                <li><b><i>Dinner:</b></i> Dal tadka, 2 rotis, spinach curry, cucumber salad</li> 
                </ul>
     
                <b>Tuesday:</b>
                <ul>
                  <li><b><i>Breakfast:</b></i> Vegetable upma, 1 glass milk, 5 soaked almonds</li>
                <li><b><i>Lunch:</b></i> Lunch: Quinoa pulao, chole curry, salad</li>
                <li><b><i>Dinner:</b></i> Dinner: Roti, palak paneer, brown rice, dal</li> 
                </ul>
        
                <b>Wednesday:</b>
                 <ul>
                  <li><b><i>Breakfast:</b></i> Poha with peanuts, orange juice</li>
                <li><b><i>Lunch:</b></i> Millet roti, rajma curry, vegetable stir fry</li>
                <li><b><i>Dinner:</b></i>Dinner: Vegetable khichdi with curd</li> 
                </ul>`;
       plan1.innerHTML=`
                <b>Thursday:</b>
                <ul>
                 <li><b><i>Breakfast:</b></i> Breakfast: Idli with sambar and chutney</li>
                <li><b><i>Lunch:</b></i>Lunch: Brown rice, dal, cabbage stir fry, salad</li>
                <li><b><i>Dinner:</b></i>Dinner: Roti, paneer bhurji, mixed veg curry</li> 
                </ul>
              
                <b>Friday:</b>
                <ul>
                  <li><b><i>Breakfast:</b></i> Whole wheat toast with peanut butter and banana</li>
                <li><b><i>Lunch:</b></i> Quinoa, mixed dal curry, salad</li>
                <li><b><i>Dinner:</b></i> Roti, dal palak, broccoli stir fry</li> 
                </ul>
                
                <b>Saturday:</b>
                <ul>
                  <li><b><i>Breakfast:</b></i> Dosa with chutney, 1 glass milk</li>
                <li><b><i>Lunch:</b></i> Brown rice, paneer curry, mixed veggies, salad</li>
                <li><b><i>Dinner:</b></i>Roti, rajma curry, spinach curry</li> 
                </ul>`;
            plan2.innerHTML=
              `  <b>Sunday:</b>
               <ul> 
                  <li><b><i>Breakfast:</b></i>Vegetable sandwich with paneer filling, milk</li>
                <li><b><i>Lunch:</b></i>Brown rice, dal tadka, mixed vegetable curry</li>
                <li><b><i>Dinner:</b></i>Roti, baingan bharta, tomato soup</li> 
                </ul> 
                <b>Snacks :</b>
                <ul>
                <li>Greek yogurt with granola</li>
                <li>Peanut butter sandwich, protein smoothie</li> 
                <li>Sprouts chaat with lemon</li> 
                <li>Banana with almonds</li> 
                <li>Fruit smoothie</li> 
                <li>Roasted chickpeas with lemon</li>
                <li>Papaya with flax seeds</li> 
                <li>Grapes with sunflower seeds</li> 
                <li>Dry fruit mix</li> 
                <li>Paneer cubes with black pepper</li> 
                
                </ul>
               `;
    }
    else if(selected && selected.value =="dailydietnv") {
  plan.innerHTML= `
<b>Monday:</b>
<ul>
  <li><b><i>Breakfast:</b></i> Oats with milk, boiled eggs, banana</li>
  <li><b><i>Lunch:</b></i> Brown rice, chicken breast, stir-fried veggies, salad</li>
  <li><b><i>Dinner:</b></i> 2 rotis, fish curry, spinach curry, cucumber salad</li> 
</ul>
  <b>Tuesday:</b>
<ul>
  <li><b><i>Breakfast:</b></i> Vegetable omelette, 1 glass milk, 5 soaked almonds</li>
  <li><b><i>Lunch:</b></i> Quinoa pulao, boiled eggs (2), chicken curry, salad</li>
  <li><b><i>Dinner:</b></i> Roti, grilled fish, brown rice, dal tadka</li> 
</ul>

        
 <b>Wednesday:</b>
<ul>
  <li><b><i>Breakfast:</b></i> Poha with scrambled eggs, orange juice</li>
  <li><b><i>Lunch:</b></i> Millet roti, rajma curry, chicken breast </li>
  <li><b><i>Dinner:</b></i> Chicken khichdi with curd, vegetable stir fry</li> 
</ul>`;
plan1.innerHTML=
  `<b>Thursday:</b>
<ul>
  <li><b><i>Breakfast:</b></i> Idli with sambar, 2 boiled eggs</li>
  <li><b><i>Lunch:</b></i> Brown rice, grilled chicken, dal, cabbage stir fry</li>
  <li><b><i>Dinner:</b></i> Roti, egg curry, mixed veg curry</li> 
</ul>
              
  <b>Friday:</b>
<ul>
  <li><b><i>Breakfast:</b></i> wheat toast with peanut butter, boiled eggs</li>
  <li><b><i>Lunch:</b></i> Quinoa, fish curry, mixed dal, salad</li>
  <li><b><i>Dinner:</b></i> Roti, chicken palak, broccoli stir fry</li> 
</ul>

                
 <b>Saturday:</b>
<ul>
  <li><b><i>Breakfast:</b></i> Dosa with chutney, 1 glass milk, 2 boiled eggs</li>
  <li><b><i>Lunch:</b></i> Brown rice, chicken curry, mixed veggies, salad</li>
  <li><b><i>Dinner:</b></i> Roti, mutton curry (lean cuts), spinach curry</li> 
</ul>`;
 plan2.innerHTML= 
  `  <b>Sunday:</b>
<ul>
  <li><b><i>Breakfast:</b></i> Chicken sandwich with paneer filling, milk</li>
  <li><b><i>Lunch:</b></i> Brown rice, dal tadka, grilled fish, vegetable curry</li>
  <li><b><i>Dinner:</b></i> Roti, egg bhurji, tomato soup, salad</li> 
</ul> 
<b>Snacks :</b>
<ul>
  <li>Boiled eggs with black pepper</li>
  <li>Grilled chicken breast cubes with lemon</li>
  <li>Egg bhurji (scrambled eggs with onion & tomato)</li>
  <li>chicken sandwich (whole wheat bread, lettuce, tomato)</li>
  <li>Chicken salad bowl</li>
  <li>grilled fish chunks </li>
  <li>Omelette wrap (egg omelette rolled in chapati)</li>
  <li>Chicken seekh kebab </li>
  <li>Stuffed egg wrap (boiled egg pieces inside chapati)</li>
</ul>

`;
    }
  }