        exports.seed = function(knex, Promise) {
          // Deletes ALL existing entries
          return knex('posts').del()
            .then(function() {
              return Promise.all([
                // Inserts seed entries
                knex('posts').insert([
                  {
                    id: 1,
                    title: "Back Pain",
                    // user_id: 1,
                    description : "I would like some advice on how to align my back in this pose. I am experiencing pain in my shoulders. Can someone help?",
                    pose_id: 1,
                    post_img : "http://media.yogajournal.com/wp-content/uploads/249_hp_groove_09.jpg",
                    post_video : "",
                    created_at : new Date('2016-06-29 14:26:16 UTC'),
                    updated_at : new Date('2016-06-29 14:26:16 UTC')
                  },
                  {
                    id: 2,
                    title: "Help with my hips!",
                    // user_id: 3,
                    description : "I tore my hip flex while I was squatting, does anyone have suggestions on what stretches are best for this?",
                    pose_id: 3,
                    post_img : "http://1.bp.blogspot.com/_sCVN1yQuK3A/TNfcYl4FG8I/AAAAAAAADI8/jpc-oc9UaMs/s1600/dhanurasana-posizione-dellarco.jpg",
                    post_video : "",
                    created_at : new Date('2016-06-29 14:26:16 UTC'),
                    updated_at : new Date('2016-06-29 14:26:16 UTC')
                  },
                  {
                    id: 3,
                    title: "Stretching advice.",
                    // user_id: 2,
                    description : "I am a climber and I would like to incorporate stretching into my regiment. What poses are the best for beginners? My arms and back need the most attention.",
                    pose_id: 2,
                    post_img : "/images/wheel.jpg",
                    post_video : "",
                    created_at : new Date('2016-06-29 14:26:16 UTC'),
                    updated_at : new Date('2016-06-29 14:26:16 UTC')
                  }
              ])
              ]);
            }).then(() => {
              return knex.raw("SELECT setval('posts_id_seq', (SELECT MAX(id) FROM posts));")
            });
        };
