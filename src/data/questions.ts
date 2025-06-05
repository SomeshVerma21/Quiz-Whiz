
import type { Question, AllQuestions, GradeLevel, SubjectName } from '@/lib/types';

// Using a smaller set of questions for demo purposes.
// The application is designed to handle up to 30 questions per subject/grade.
export const questionsData: AllQuestions = {
  1: {
    math: [
      { id: 'm1-1-1', q: 'What is 1 + 1?', options: ['1', '2', '3', '0'], answer: '2' },
      { id: 'm1-1-2', q: 'Which number is bigger: 3 or 5?', options: ['3', '5', 'Same', 'None'], answer: '5' },
      { id: 'm1-1-3', q: 'How many sides does a triangle have?', options: ['2', '3', '4', '5'], answer: '3' },
      { id: 'm1-1-4', q: 'What is 2 + 3?', options: ['4', '5', '6', '2'], answer: '5' },
      { id: 'm1-1-5', q: 'If you have 3 apples and eat 1, how many are left?', options: ['1', '2', '3', '0'], answer: '2' },
      { id: 'm1-1-6', q: 'How many fingers are on one hand?', options: ['4', '5', '6', '10'], answer: '5' },
      { id: 'm1-1-7', q: 'Which shape has 4 equal sides?', options: ['Triangle', 'Circle', 'Square', 'Rectangle'], answer: 'Square' },
      { id: 'm1-1-8', q: 'What is 4 - 1?', options: ['1', '2', '3', '5'], answer: '3' },
      { id: 'm1-1-9', q: 'Count by ones: 1, 2, 3, __, 5', options: ['6', '4', '7', '0'], answer: '4' },
      { id: 'm1-1-10', q: 'Which number comes after 7?', options: ['6', '8', '9', '5'], answer: '8' },
      { id: 'm1-1-11', q: 'How many wheels does a bicycle have?', options: ['1', '2', '3', '4'], answer: '2' },
      { id: 'm1-1-12', q: 'What is 3 + 0?', options: ['0', '1', '2', '3'], answer: '3' },
    ],
    science: [
      { id: 's1-1-1', q: 'Is the sun hot or cold?', options: ['Hot', 'Cold', 'Warm', 'Icy'], answer: 'Hot' },
      { id: 's1-1-2', q: 'What do plants need to grow?', options: ['Soda', 'Sunlight', 'Candy', 'TV'], answer: 'Sunlight' },
      { id: 's1-1-3', q: 'What color is the sky on a sunny day?', options: ['Green', 'Blue', 'Red', 'Yellow'], answer: 'Blue' },
      { id: 's1-1-4', q: 'Do rocks grow?', options: ['Yes', 'No', 'Sometimes', 'Only small ones'], answer: 'No' },
      { id: 's1-1-5', q: 'What do we use to see?', options: ['Ears', 'Nose', 'Eyes', 'Mouth'], answer: 'Eyes' },
      { id: 's1-1-6', q: 'Which of these is a liquid?', options: ['Wood', 'Water', 'Stone', 'Air'], answer: 'Water' },
      { id: 's1-1-7', q: 'Where do fish live?', options: ['Sky', 'Trees', 'Water', 'Underground'], answer: 'Water' },
      { id: 's1-1-8', q: 'What makes a kite fly?', options: ['Water', 'Fire', 'Wind', 'Soil'], answer: 'Wind' },
      { id: 's1-1-9', q: 'What season comes after summer?', options: ['Winter', 'Spring', 'Autumn', 'None'], answer: 'Autumn' },
      { id: 's1-1-10', q: 'Can we breathe underwater without help?', options: ['Yes', 'No', 'Only for a minute', 'If we try hard'], answer: 'No' },
      { id: 's1-1-11', q: 'What is the moon visible?', options: ['Only day', 'Only night', 'Day and night', 'Never'], answer: 'Day and night' }, // Often at night, but can be seen in day
      { id: 's1-1-12', q: 'What do bees make?', options: ['Milk', 'Honey', 'Juice', 'Bread'], answer: 'Honey' },
    ],
    biology: [
      { id: 'b1-1-1', q: 'How many legs does a cat have?', options: ['2', '4', '6', '8'], answer: '4' },
      { id: 'b1-1-2', q: 'What sound does a dog make?', options: ['Moo', 'Meow', 'Woof', 'Oink'], answer: 'Woof' },
      { id: 'b1-1-3', q: 'Which animal says "moo"?', options: ['Sheep', 'Cow', 'Chicken', 'Duck'], answer: 'Cow' },
      { id: 'b1-1-4', q: 'Where do birds build their nests?', options: ['In water', 'Underground', 'In trees', 'In caves'], answer: 'In trees' },
      { id: 'b1-1-5', q: 'What do we call a baby dog?', options: ['Kitten', 'Puppy', 'Foal', 'Calf'], answer: 'Puppy' },
      { id: 'b1-1-6', q: 'Which of these is a fruit?', options: ['Carrot', 'Apple', 'Potato', 'Broccoli'], answer: 'Apple' },
      { id: 'b1-1-7', q: 'Do fish have legs?', options: ['Yes', 'No', 'Some do', 'Only two'], answer: 'No' },
      { id: 'b1-1-8', q: 'What covers a bird\'s body?', options: ['Fur', 'Scales', 'Feathers', 'Shell'], answer: 'Feathers' },
      { id: 'b1-1-9', q: 'Which animal lives on a farm and gives us eggs?', options: ['Pig', 'Horse', 'Chicken', 'Goat'], answer: 'Chicken' },
      { id: 'b1-1-10', q: 'What do caterpillars turn into?', options: ['Spiders', 'Butterflies', 'Worms', 'Ants'], answer: 'Butterflies' },
      { id: 'b1-1-11', q: 'Are humans animals?', options: ['Yes', 'No', 'Sometimes', 'Not sure'], answer: 'Yes' },
      { id: 'b1-1-12', q: 'What do you call a baby cat?', options: ['Puppy', 'Kitten', 'Cub', 'Chick'], answer: 'Kitten' },
    ],
  },
  2: {
    math: [
      { id: 'm1-2-1', q: 'What is 5 - 2?', options: ['1', '2', '3', '4'], answer: '3' },
      { id: 'm1-2-2', q: 'Count by twos: 2, 4, __, 8', options: ['5', '6', '7', '3'], answer: '6' },
      { id: 'm1-2-3', q: 'What is 10 + 5?', options: ['12', '15', '18', '20'], answer: '15' },
      { id: 'm1-2-4', q: 'How many corners does a rectangle have?', options: ['3', '4', '5', '6'], answer: '4' },
      { id: 'm1-2-5', q: 'Which is more: 1 dozen or 10 items?', options: ['1 dozen', '10 items', 'They are equal', 'Cannot tell'], answer: '1 dozen' }, // 1 dozen = 12
      { id: 'm1-2-6', q: 'What is 7 + 7?', options: ['12', '13', '14', '15'], answer: '14' },
      { id: 'm1-2-7', q: 'If you have 4 groups of 3, how many in total?', options: ['7', '10', '12', '15'], answer: '12' },
      { id: 'm1-2-8', q: 'What is 20 - 10?', options: ['5', '10', '15', '0'], answer: '10' },
      { id: 'm1-2-9', q: 'Which number is odd: 2, 4, 5, 8?', options: ['2', '4', '5', '8'], answer: '5' },
      { id: 'm1-2-10', q: 'How many minutes are in half an hour?', options: ['15', '30', '45', '60'], answer: '30' },
      { id: 'm1-2-11', q: 'What is 3 x 3?', options: ['6', '8', '9', '12'], answer: '9' },
      { id: 'm1-2-12', q: 'What is next in the pattern: 5, 10, 15, __?', options: ['16', '18', '20', '25'], answer: '20' },
    ],
    science: [
      { id: 's1-2-1', q: 'What are the three states of matter?', options: ['Hot, Cold, Warm', 'Solid, Liquid, Gas', 'Hard, Soft, Bouncy', 'Big, Small, Medium'], answer: 'Solid, Liquid, Gas' },
      { id: 's1-2-2', q: 'What pulls things towards the Earth?', options: ['Magnetism', 'Wind', 'Gravity', 'Friction'], answer: 'Gravity' },
      { id: 's1-2-3', q: 'Which planet is known as the Red Planet?', options: ['Earth', 'Mars', 'Jupiter', 'Venus'], answer: 'Mars' },
      { id: 's1-2-4', q: 'What gas do humans breathe out?', options: ['Oxygen', 'Nitrogen', 'Carbon Dioxide', 'Helium'], answer: 'Carbon Dioxide' },
      { id: 's1-2-5', q: 'What is the process of a liquid turning into a gas called?', options: ['Freezing', 'Melting', 'Evaporation', 'Condensation'], answer: 'Evaporation' },
      { id: 's1-2-6', q: 'What tool measures temperature?', options: ['Ruler', 'Scale', 'Thermometer', 'Compass'], answer: 'Thermometer' },
      { id: 's1-2-7', q: 'Which of these is a source of light?', options: ['Moon', 'Mirror', 'Star', 'Book'], answer: 'Star' }, // Moon reflects light
      { id: 's1-2-8', q: 'What is a shadow?', options: ['A type of light', 'An area where light is blocked', 'A reflection', 'A type of heat'], answer: 'An area where light is blocked' },
      { id: 's1-2-9', q: 'What force makes a ball roll down a hill?', options: ['Push', 'Pull', 'Gravity', 'Friction'], answer: 'Gravity' },
      { id: 's1-2-10', q: 'What is the name of our galaxy?', options: ['Andromeda', 'Pinwheel', 'Milky Way', 'Sombrero'], answer: 'Milky Way' },
      { id: 's1-2-11', q: 'How many primary colors are there in light?', options: ['Two', 'Three', 'Four', 'Five'], answer: 'Three' }, // Red, Green, Blue for additive
      { id: 's1-2-12', q: 'What do magnets attract?', options: ['Wood', 'Plastic', 'Iron', 'Glass'], answer: 'Iron' },
    ],
    biology: [
      { id: 'b1-2-1', q: 'What part of a plant absorbs water from the soil?', options: ['Leaves', 'Stem', 'Roots', 'Flowers'], answer: 'Roots' },
      { id: 'b1-2-2', q: 'Which of these animals is a mammal?', options: ['Frog', 'Snake', 'Whale', 'Fish'], answer: 'Whale' },
      { id: 'b1-2-3', q: 'What is the main job of leaves on a plant?', options: ['To attract bees', 'To make food (photosynthesis)', 'To hold the plant up', 'To store water'], answer: 'To make food (photosynthesis)' },
      { id: 'b1-2-4', q: 'How many stages are in a butterfly\'s life cycle?', options: ['Two', 'Three', 'Four', 'Five'], answer: 'Four' }, // Egg, Larva, Pupa, Adult
      { id: 'b1-2-5', q: 'Which human sense helps us taste food?', options: ['Sight', 'Smell', 'Touch', 'Taste (tongue)'], answer: 'Taste (tongue)' },
      { id: 'b1-2-6', q: 'What do omnivores eat?', options: ['Only plants', 'Only meat', 'Both plants and meat', 'Only insects'], answer: 'Both plants and meat' },
      { id: 'b1-2-7', q: 'Which of these is NOT a living thing?', options: ['Tree', 'Rock', 'Dog', 'Flower'], answer: 'Rock' },
      { id: 'b1-2-8', q: 'What is the hard outer covering of an insect called?', options: ['Skin', 'Shell', 'Exoskeleton', 'Fur'], answer: 'Exoskeleton' },
      { id: 'b1-2-9', q: 'Which group of animals breathes with gills?', options: ['Birds', 'Mammals', 'Fish', 'Reptiles'], answer: 'Fish' },
      { id: 'b1-2-10', q: 'What is the process by which plants make their own food using sunlight?', options: ['Respiration', 'Digestion', 'Photosynthesis', 'Pollination'], answer: 'Photosynthesis' },
      { id: 'b1-2-11', q: 'What is the largest organ in the human body?', options: ['Brain', 'Heart', 'Lungs', 'Skin'], answer: 'Skin' },
      { id: 'b1-2-12', q: 'Which animal is known for changing its color to match its surroundings?', options: ['Lion', 'Elephant', 'Chameleon', 'Zebra'], answer: 'Chameleon' },
    ]
  },
  8: {
    math: [
      { id: 'm8-8-1', q: 'Solve for x: 2x + 3 = 7', options: ['1', '2', '3', '4'], answer: '2' },
      { id: 'm8-8-2', q: 'What is the square root of 64?', options: ['6', '7', '8', '9'], answer: '8' },
      { id: 'm8-8-3', q: 'What is the area of a rectangle with length 5cm and width 3cm?', options: ['8 cm²', '15 cm²', '16 cm²', '30 cm²'], answer: '15 cm²' },
      { id: 'm8-8-4', q: 'Simplify the ratio 12:18.', options: ['2:3', '3:4', '4:5', '1:2'], answer: '2:3' },
      { id: 'm8-8-5', q: 'If a car travels 120 miles in 2 hours, what is its average speed?', options: ['50 mph', '60 mph', '70 mph', '240 mph'], answer: '60 mph' },
      { id: 'm8-8-6', q: 'What is 25% of 80?', options: ['10', '15', '20', '25'], answer: '20' },
      { id: 'm8-8-7', q: 'What is the value of π (pi) approximately?', options: ['2.14', '3.14', '4.14', '1.34'], answer: '3.14' },
      { id: 'm8-8-8', q: 'Solve: (3 + 4) x 2 = ?', options: ['10', '11', '14', '24'], answer: '14' },
      { id: 'm8-8-9', q: 'What is the next prime number after 7?', options: ['8', '9', '10', '11'], answer: '11' },
      { id: 'm8-8-10', q: 'How many degrees are in a right angle?', options: ['45°', '90°', '180°', '360°'], answer: '90°' },
      { id: 'm8-8-11', q: 'What is the perimeter of a square with side length 4 units?', options: ['8 units', '12 units', '16 units', '20 units'], answer: '16 units' },
      { id: 'm8-8-12', q: 'If y = 3x - 1, what is y when x = 2?', options: ['3', '4', '5', '6'], answer: '5' },
    ],
    science: [
      { id: 's8-8-1', q: 'What is H2O commonly known as?', options: ['Salt', 'Sugar', 'Water', 'Air'], answer: 'Water' },
      { id: 's8-8-2', q: 'What is the chemical symbol for Gold?', options: ['Ag', 'Au', 'Gd', 'Go'], answer: 'Au' },
      { id: 's8-8-3', q: 'Which gas is most abundant in Earth\'s atmosphere?', options: ['Oxygen', 'Nitrogen', 'Carbon Dioxide', 'Argon'], answer: 'Nitrogen' },
      { id: 's8-8-4', q: 'What type of energy does the sun primarily emit?', options: ['Kinetic', 'Chemical', 'Nuclear', 'Electromagnetic (Light and Heat)'], answer: 'Electromagnetic (Light and Heat)' },
      { id: 's8-8-5', q: 'What is the pH of a neutral substance?', options: ['0', '7', '14', '1'], answer: '7' },
      { id: 's8-8-6', q: 'Which law states that for every action, there is an equal and opposite reaction?', options: ['Ohm\'s Law', 'Newton\'s First Law', 'Newton\'s Third Law', 'Boyle\'s Law'], answer: 'Newton\'s Third Law' },
      { id: 's8-8-7', q: 'What is the unit of electrical resistance?', options: ['Volt', 'Ampere', 'Ohm', 'Watt'], answer: 'Ohm' },
      { id: 's8-8-8', q: 'What is the hardest known natural substance?', options: ['Gold', 'Iron', 'Diamond', 'Quartz'], answer: 'Diamond' },
      { id: 's8-8-9', q: 'What process converts sugar into alcohol and carbon dioxide, often used in baking and brewing?', options: ['Photosynthesis', 'Respiration', 'Fermentation', 'Oxidation'], answer: 'Fermentation' },
      { id: 's8-8-10', q: 'Which planet is known for its prominent rings?', options: ['Jupiter', 'Saturn', 'Uranus', 'Neptune'], answer: 'Saturn' },
      { id: 's8-8-11', q: 'What is the speed of light in a vacuum (approximately)?', options: ['300,000 km/h', '300,000 m/s', '300,000 km/s', '3,000,000 km/s'], answer: '300,000 km/s' },
      { id: 's8-8-12', q: 'What is the name of the force that opposes motion between surfaces in contact?', options: ['Gravity', 'Magnetism', 'Friction', 'Tension'], answer: 'Friction' },
    ],
    biology: [
      { id: 'b8-8-1', q: 'What is the powerhouse of the cell?', options: ['Nucleus', 'Ribosome', 'Mitochondria', 'Golgi Apparatus'], answer: 'Mitochondria' },
      { id: 'b8-8-2', q: 'What is the name of the process by which green plants use sunlight, water, and carbon dioxide to create their own food?', options: ['Respiration', 'Fermentation', 'Photosynthesis', 'Transpiration'], answer: 'Photosynthesis' },
      { id: 'b8-8-3', q: 'What type of molecule carries genetic information in humans?', options: ['RNA', 'Protein', 'Carbohydrate', 'DNA'], answer: 'DNA' },
      { id: 'b8-8-4', q: 'Which part of the human brain is responsible for controlling balance and coordination?', options: ['Cerebrum', 'Cerebellum', 'Medulla Oblongata', 'Thalamus'], answer: 'Cerebellum' },
      { id: 'b8-8-5', q: 'What are the tiny air sacs in the lungs where gas exchange takes place called?', options: ['Bronchioles', 'Alveoli', 'Capillaries', 'Trachea'], answer: 'Alveoli' },
      { id: 'b8-8-6', q: 'Which kingdom do mushrooms belong to?', options: ['Plantae', 'Animalia', 'Fungi', 'Protista'], answer: 'Fungi' },
      { id: 'b8-8-7', q: 'What is the scientific study of insects called?', options: ['Botany', 'Zoology', 'Entomology', 'Ornithology'], answer: 'Entomology' },
      { id: 'b8-8-8', q: 'What red pigment in blood is responsible for carrying oxygen?', options: ['Melanin', 'Chlorophyll', 'Hemoglobin', 'Keratin'], answer: 'Hemoglobin' },
      { id: 'b8-8-9', q: 'What is the term for an organism that can make its own food?', options: ['Heterotroph', 'Consumer', 'Autotroph', 'Decomposer'], answer: 'Autotroph' },
      { id: 'b8-8-10', q: 'Which system in the human body is responsible for fighting off diseases?', options: ['Digestive System', 'Respiratory System', 'Immune System', 'Nervous System'], answer: 'Immune System' },
      { id: 'b8-8-11', q: 'What is the largest bone in the human body?', options: ['Femur', 'Humerus', 'Tibia', 'Skull'], answer: 'Femur' },
      { id: 'b8-8-12', q: 'What is the process of change in the heritable characteristics of biological populations over successive generations?', options: ['Metamorphosis', 'Evolution', 'Adaptation', 'Symbiosis'], answer: 'Evolution' },
    ]
  }
};

// Function to get questions for a specific grade and subject
export const getQuestions = (grade: GradeLevel, subject: SubjectName): Question[] => {
  const gradeQuestions = questionsData[grade];
  if (gradeQuestions) {
    const subjectQuestions = gradeQuestions[subject];
    if (subjectQuestions) {
      // Return questions directly.
      // Shuffling of question order and options will be handled client-side to avoid hydration issues.
      // Slice to ensure we don't mutate original and to adhere to max 30 if more are added later.
      return [...subjectQuestions].slice(0, 30);
    }
  }
  return []; // Return empty array if no questions found
};

