// Utility Function to Add List Items
function addItem(listId, text) {
    const list = document.getElementById(listId);
    const li = document.createElement('li');
    li.textContent = text;
    const delBtn = document.createElement('button');
    delBtn.textContent = 'Delete';
    delBtn.onclick = function() { list.removeChild(li); };
    li.appendChild(delBtn);
    list.appendChild(li);
  }
  
  // Workout Tracker
  document.getElementById('workout-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const exercise = document.getElementById('exercise').value;
    const sets = document.getElementById('sets').value;
    const reps = document.getElementById('reps').value;
    addItem('workout-list', `${exercise} - ${sets} sets of ${reps} reps`);
    this.reset();
  });
  
  // Meditation App
  function startMeditation() {
    alert("Relax and breathe deeply for 5 minutes.");
  }
  
  // Nutrition Planner
  document.getElementById('nutrition-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const food = document.getElementById('food').value;
    const calories = document.getElementById('calories').value;
    addItem('nutrition-list', `${food} - ${calories} kcal`);
    this.reset();
  });
  
  // Water Intake Tracker
  let waterCount = 0;
  function addWater() {
    waterCount++;
    document.getElementById('water-count').textContent = waterCount;
  }
  
  // Sleep Tracker
  document.getElementById('sleep-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const hours = document.getElementById('hours').value;
    addItem('sleep-list', `${hours} hours`);
    this.reset();
  });
  
  // Mental Health Journal
  document.getElementById('journal-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const mood = document.getElementById('mood').value;
    addItem('journal-list', `${mood}`);
    this.reset();
  });
  
  // Yoga Platform
  function showYogaPose() {
    const poses = ["Downward Dog", "Tree Pose", "Child's Pose", "Warrior II", "Mountain Pose"];
    const randomPose = poses[Math.floor(Math.random() * poses.length)];
    document.getElementById('yoga-pose').textContent = `Today's Pose: ${randomPose}`;
  }
  
  // Medical Appointment Scheduler
  document.getElementById('appointment-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const doctor = document.getElementById('doctor').value;
    const appointmentDate = document.getElementById('appointment-date').value;
    addItem('appointment-list', `Dr. ${doctor} on ${appointmentDate}`);
    this.reset();
  });
  
  // Allergy Tracker
  document.getElementById('allergy-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const allergen = document.getElementById('allergen').value;
    const symptoms = document.getElementById('symptoms').value;
    addItem('allergy-list', `${allergen} - Symptoms: ${symptoms}`);
    this.reset();
  });
  
  // Pregnancy Tracker
  document.getElementById('pregnancy-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const dueDate = document.getElementById('due-date').value;
    const today = new Date();
    const due = new Date(dueDate);
    const timeDiff = due - today;
    const daysLeft = Math.ceil(timeDiff / (1000 * 60 * 60 * 24));
    document.getElementById('pregnancy-info').textContent =
      `Due Date: ${dueDate} — ${daysLeft > 0 ? daysLeft + " days remaining" : "Due date passed!"}`;
    this.reset();
  });
  