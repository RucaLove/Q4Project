'use strict';

exports.seed = function(knex) {
  return knex('poses').del()
    .then(() => {
      return knex('poses').insert([
        {
            id: 1,
            pose_name_english: "Mountain",
            pose_name_sanskrit: "Tadasana",
            pose_name_sanskrit_characters: "ताडासन",
            pose_img: "/images/mountain.jpg",
            difficulty_level: "Easy",
            category: "Standing Poses",
            description: "Stand with the feet parallel and hip width apart. Lengthen the body from earth to sky and increase the space and openness throughout your being. Lift the rib cage evenly, widen the shoulders, and tuck the pelvis. Close your eyes for a moment, and relax deeply into your center.",
            chakra_sanskrit: "Muladhara",
            chakra_english: "Root",
            chakra_img: "/images/charka1.png"
        },
        {
            id: 2,
            pose_name_english: "Bow",
            pose_name_sanskrit: "Dhanurasana",
            pose_name_sanskrit_characters: "धनुरासन",
            pose_img: "/images/bow.jpg",
            difficulty_level: "Easy",
            category: "Back Bends",
            description: "In this asana, the practitioner lies flat on the stomach and bends the knees. Then the arms reach back to grab the ankles. The back arches and the thighs lift off of the floor as the chest pushes forward, bending the body to resemble a bow.",
            chakra_sanskrit: "Anahata",
            chakra_english: "Heart",
            chakra_img: "/images/charka4.png"
        },
        {
            id: 3,
            pose_name_english: "Downward Facing Dog",
            pose_name_sanskrit: "Adho Mukha Svanasana",
            pose_name_sanskrit_characters: "अधोमुखश्वानासन",
            pose_img: "/images/downwardfacingdog",
            difficulty_level: "Easy",
            category: "Forward Bends",
            description: "To begin this stance or pose, begin on all fours. Keep your knees beneath the hips and your hands a little before your shoulders. Exhale and lift your knees away from the floor far. At first, you can keep your knees somewhat bowed and your heels lifted up from the floor. At that point, stretch your tailbone far from your pelvis and press it delicately to the pubis. Now raise your sitting bones against this resistance toward the roof and draw your legs into the crotch. During exhalation let the highest point of your thighs be pushed back and your heel extended against the ground. Brace your arms and press your index finger effectively into the floor. Your head ought to be between your arms. Abstain from giving it a chance to drop.",
            chakra_sanskrit: "Vishuddha",
            chakra_english: "Throat",
            chakra_img: "/images/charka5.png"
        },
        {
            id: 4,
            pose_name_english: "Head Stand",
            pose_name_sanskrit: "Sirshasana",
            pose_name_sanskrit_characters: "शीर्षासन",
            pose_img: "/images/headstand.jpg",
            difficulty_level: "Advanced",
            category: "Inversions",
            description: "Come to your hands and knees with the wrists underneath the shoulders and the knees underneath the hips. Bring your forearms to the floor, keeping your elbows directly under your shoulders. Clasp your hands together on the floor, interlacing your fingers. Place the crown of your head on the floor. Lift your hips and straighten your legs as if your were coming into downward facing dog. Carefully walk your feet in towards your head until your hips as close to over your shoulders as possible. Bend your knees. Draw one knee into your chest, lifting that foot from the floor. Then draw the other knee in. Both feet are now up. Lift one leg straight up toward the ceiling. When that leg is in line with your torso, lift the other foot off the floor. Balance here. One you get the legs up, reach through the balls of your feet. Press down strongly into your forearms.",
            chakra_english: "Crown",
            chakra_img: "/images/charka7.png"
        }
      ]);
    })
    .then(() => {
  return knex.raw("SELECT setval('poses_id_seq', (SELECT MAX(id) FROM poses))");
})
};
