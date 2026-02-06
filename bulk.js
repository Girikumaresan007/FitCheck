
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
                <li> Barbell Bench Press</li>
                <li> Incline Dumbbell Press</li> 
                <li>Decline Bench Press</li> 
                <li>Dumbbell Flyes</li> 
                <li>Cable Crossover</li> 
                </ul>
     
                <b>Back:</b>
                <ul>
                <li> Pull-ups</li>
                <li> Lat Pulldown</li>
                 <li> Seated Cable Row</li>
                <li> Barbell Rows</li>
                  <li> Deadlift </li>
                </ul>
        
                <b>Biceps:</b>
                 <ul>
                <li>Barbell Bicep Curls</li>
                <li>Dumbbell Hammer Curls</li>
                <li>Incline Dumbbell Curls</li>
                <li>Preacher Curls</li>
                <li>Cable Bicep Curls</li>
                </ul>`;
       plan1.innerHTML=
                `<b>Triceps:</b>
                <ul>
                <li> Close-Grip Bench Press </li>
                <li> Tricep Pushdowns (Cable)</li>
                <li>Overhead Dumbbell Extension</li>
                <li>Skull Crushers</li>
                <li> Dips</li>
                </ul>
              
                <b>Shoulders:</b>
                <ul>
                <li>Overhead Barbell</li>
                <li>Lateral Raises</li>
                <li>Front Raises</li>
                <li>Rear Delt Flyes</li>
                <li>Arnold Press</li>
                </ul>
                
                <b>Legs:</b>
                <ul>
                <li>Squats</li>
                <li>Leg Press</li>
                <li>Lunges</li>
                <li>Leg Curls</li>
                <li>Calf Raises</li>
                </ul>`;
            plan2.innerHTML=
              `  <b>Abs:</b>
                <ul>
                <li>Cable Crunches</li>
                <li>Hanging Leg Raises</li>
                <li>Decline Bench Sit-Ups</li>
                <li>Russian Twists</li>
                <li>Ab Wheel Rollouts</li>
                </ul> 
  <b>Cardio Workouts :</b>
<ul>
  <li>Treadmill running / incline walking</li>
  <li>Stationary cycling / spin bike</li>
  <li>Elliptical cross trainer</li>
  <li>Rowing machine</li>
  <li>Stair climber / stepper</li>
  <li>Jump rope (skipping)</li>
  <li>High knees (on treadmill or floor)</li>
  <li>Mountain climbers</li>
  <li>Battle ropes</li>
  <li>Box jumps / step-ups</li>
</ul>
`;
    }
    else if(selected && selected.value =="Home") {
  plan.innerHTML= `
                <b>Chest:</b>
                <ul>
                <li> Push-Ups</li>
                <li>Chest Dips</li> 
                <li>Floor Chest Fly</li> 
                <li>Svend Press</li> 
                <li>Resistance Band Chest Press</li> 
                </ul>
     
                <b>Back:</b>
                <ul>
                <li> Pull-ups</li>
                <li> Reverse Snow Angels</li>
                 <li> Superman Hold</li>
                <li> Bent-Over Rows</li>
                <li> Prone Y-T-W Holds </li>
                </ul>
        
                <b>Biceps:</b>
                 <ul>
                <li> Bicep Curls</li>
                <li>Hammer Curls</li>
                <li>Concentration Curls</li>
                <li>Resistance Band Curl</li>
                <li>Isometric Curl Hold</li>
                </ul>`;
       plan1.innerHTML=
                `<b>Triceps:</b>
                <ul>
                <li> Tricep Dips</li>
                <li> Overhead Tricep Extension</li>
                <li> Kickbacks</li>
                <li> Close-Grip Floor Press</li>
                <li> Resistance Band Pushdown</li>
                </ul>
              
                <b>Shoulders:</b>
                <ul>
                <li>Pike Press</li>
                <li>Handstand Hold</li>
                <li>Lying Side Lateral Raise</li>
                <li>Arm Circles</li>
                <li>Wall Angels</li>
                </ul>
                
                <b>Legs:</b>
                <ul>
                <li>Squats</li>
                <li>Lunges</li>
                <li>Glute Bridges</li>
                <li>Bulgarian Split Squat</li>
                <li>Calf Raises</li>
                </ul>`;
            plan2.innerHTML=
              `  <b>Abs:</b>
                <ul>
                <li>Planks</li>
                <li>Crunches</li>
                <li>Leg Raises</li>
                <li>Russian Twists</li>
                <li>Bicycle Crunches</li>
                </ul> 
<b> Cardio Workouts :</b>
<ul>
  <li>Jumping jacks</li>
  <li>High knees</li>
  <li>Butt kicks</li>
  <li>Burpees</li>
  <li>Mountain climbers</li>
  <li>Skater jumps</li>
  <li>Jump squats</li>
  <li>Lunges with jumps</li>
  <li>Shadow boxing</li>
  <li>Stair climbing (if stairs available)</li>
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
                <li>Soy Chunks</li>
                <li> Paneer</li> 
                <li>Chickpeas</li> 
                <li>Quinoa</li> 
                <li>Peanuts</li> 
                </ul>
     
                <b>Carbohydrate:</b>
                <ul>
                <li> Rice (White / Brown)</li>
                <li> Oats</li>
                 <li>Sweet Potatoes</li>
                <li>Bananas & Dates</li>
                <li>Dark Chocolate</li>
                </ul>
        
                <b>Healthy Fat:</b>
                 <ul>
                <li>Avocado</li>
                <li>Seeds</li>
                <li>Olive Oil</li>
                <li>Almonds & Other Nuts</li>
                <li>Cable Bicep Curls</li>
                </ul>`;
       plan1.innerHTML=
                `<b>Vitamins & Minerals:</b>
                <ul>
                <li>Spinach & Leafy Greens </li>
                <li> Carrot</li>
                <li>Oranges & Amla</li>
                <li>Broccoli</li>
                <li>Beetroot</li>
                </ul>
              
                <b>Fiber:</b>
                <ul>
                <li>Berries</li>
                <li>Artichoke</li>
                <li>Barley & Millets</li>
                <li>Chia Pudding</li>
                <li>Pears & Plums</li>
                </ul>
                
                <b>Electrolytes:</b>
                <ul>
                <li>Pomegranate</li>
                <li>Tomatoes</li>
                <li>Citrus Fruits</li>
                <li>Mushrooms</li>
                <li>Moringa Leaves</li>
                </ul>`;
            plan2.innerHTML=
              `  <b>Hydration:</b>
                <ul>
                <li>Cucumber</li>
                <li>Watermelon</li>
                <li>Pineapple</li>
                <li>Strawberries</li>
                <li>Grapes</li>
                </ul> `;
    }
      else if(selected && selected.value =="nonveg") {
  plan.innerHTML= `
                <b>Protein:</b>
                <ul>
                <li> Chicken Breast</li>
                <li>Eggs</li> 
                <li>Salmon</li> 
                <li>Turkey</li> 
                <li>Tuna</li> 
                </ul>
     
                <b>Carbohydrate:</b>
                <ul>
                <li> Milk</li>
                <li>Yogurt</li>
                <li> Cheese</li>
                <li> Eggs</li>
                <li> Kefir </li>
                </ul>
        
                <b>Healthy Fat:</b>
                 <ul>
                <li> Salmon (Omega-3)</li>
                <li>Sardines</li>
                <li>Eggs (yolk)</li>
                <li>Butter / Ghee</li>
                <li>Cheese</li>
                </ul>`;
       plan1.innerHTML=
                `<b>Vitamins & Minerals:</b>
                <ul>
                <li>Oysters</li>
                <li> Clams</li>
                <li> Tuna</li>
                <li> Liver</li>
                <li> Chicken</li>
                </ul>
              
                <b>Fiber:</b>
                <ul>
                <li>Chicken + Spinach</li>
                <li>Fish + Lentils</li>
                <li>Eggs + Avocado</li>
                <li>Meat + Quinoas</li>
                <li>Seafood + Beans</li>
                </ul>
                
                <b>Electrolytes:</b>
                <ul>
                <li>Salmon</li>
                <li>Sardines</li>
                <li>Cod</li>
                <li>Beef</li>
                <li>Mackerel</li>
                </ul>`;
            plan2.innerHTML=
              `  <b>Hydration:</b>
                <ul>
                <li>Chicken Soup</li>
                <li>Salmon Broth</li>
                <li>Bone Broth</li>
                <li>Yogurt Drink</li>
                <li>Coconut Water</li>
                </ul> `;
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