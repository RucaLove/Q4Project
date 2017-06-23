exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('comments').del()
    .then(function() {
      return Promise.all([
        // Inserts seed entries
        knex('comments').insert([
            {
                id: 1,
                likes: 75,
                verified: false,
                comment_text : "Keep pulling your shoulders apart, and don't allow your lower back to sag down. Also, the shoulder blades typically want to dip in the middle - don't let that happen. Keep pulling the shoulder blades outward.",
                comment_img : "http://lovemyyoga.com/images/Upward%20Dog.jpg",
                // user_id: 1,
                post_id: 3,
                created_at : new Date('2016-06-29 14:26:16 UTC'),
                updated_at : new Date('2016-06-29 14:26:16 UTC')
            },
            {
                id: 2,
                likes: 2,
                verified: false,
                comment_text : "Looks great!",
                comment_img : "http://lovemyyoga.com/images/Upward%20Dog.jpg",
                // user_id: 4,
                post_id: 2,
                created_at : new Date('2016-06-29 14:26:16 UTC'),
                updated_at : new Date('2016-06-29 14:26:16 UTC')
            },
            {
                id: 3,
                likes: 1178,
                verified: true,
                comment_text : "Mulabhanda!!!",
                comment_img : "http://lovemyyoga.com/images/Upward%20Dog.jpg",
                // user_id: 5,
                post_id: 3,
                created_at : new Date('2016-06-29 14:26:16 UTC'),
                updated_at : new Date('2016-06-29 14:26:16 UTC')
            },
            {
                id: 4,
                likes: 50,
                verified: true,
                comment_text : "Do you even yoga, bro!?",
                comment_img : "http://lovemyyoga.com/images/Upward%20Dog.jpg",
                // user_id: 1,
                post_id: 2,
                created_at : new Date('2016-06-29 14:26:16 UTC'),
                updated_at : new Date('2016-06-29 14:26:16 UTC')
            },
            {
                id: 5,
                likes: 9001,
                verified: true,
                comment_text : "Push through the balls of your feet. This will help you engage the inner thighs and allow you to get more arch in your back.",
                comment_img : "http://lovemyyoga.com/images/Upward%20Dog.jpg",
                // user_id: 2,
                post_id: 2,
                created_at : new Date('2016-06-29 14:26:16 UTC'),
                updated_at : new Date('2016-06-29 14:26:16 UTC')
            }
          ])
      ]);
    }).then(() => {
      return knex.raw("SELECT setval('comments_id_seq', (SELECT MAX(id) FROM comments));")
    });
};
