
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('store').del()
    .then(function () {
      knex('store').insert([
        {
          id: 1,
          dosha: "Vata",
          product: "Vata Herbal Tea Blend",
          img : "/images/vata-tea.jpg",
          price : "$13.00 USD",
          size : "16oz",
          description : "Made using organic and naturally grown herbs of rosemary, shatavari, lotus leaf, sarsaparilla root, chamomile flower, hibiscus flower, chrysanthemum flower, spearmint, cinnamon, lemon peel, orange peel, hawthorn leaf and flower."
        },
        {
          id: 2,
          dosha: "Pitta",
          product: "Pitta Herbal Tea Blend",
          img : "/images/pitta-tea.jpg",
          price : "$13.00 USD",
          size : "16oz",
          description : "Made using organic and naturally grown herbs of chamomile flower, hibiscus flower, indian sarsaparilla root, dandelion leaf, shatavari, cinnamon, rosemary, peppermint leaf, raspberry leaf, gymnema, lemon peel and spearmint."
        },
        {
          id: 3,
          dosha: "Kapha",
          product: "Kapha Herbal Tea Blend",
          img : "/images/kapha-tea.jpg",
          price : "$13.00 USD",
          size : "16oz",
          description : "Made using organic and naturally grown herbs of nettle leaf, hibiscus flower, dandelion leaf, chrysanthemum flower, spearmint, indian sarsaparilla root, shatavari, cinnamon, rosemary, lemon peel and holy basil."
        },
        {
          id: 4,
          dosha: "Tridoshic",
          product: "Tridoshic Herbal Tea Blend",
          img : "/images/tridoshic-tea.jpg",
          price : "$13.00 USD",
          size : "16oz",
          description : "Made using organic and naturally grown herbs of chamomile flower, hibiscus flower, lemongrass, peppermint leaf, fennel seed, indian sarsaparilla root, brahmi, shatavari, spearmint, cinnamon, rosebuds and lemon peel."
        },
        {
          id: 5,
          dosha: "Custom",
          product: "Custom Herbal Tea Blend",
          img : "/images/tea.jpg",
          price : "$13.00 USD",
          size : "16oz",
          description : "Made using organic and naturally grown herbs tailored to your unique dosha."
        },
        {
          id: 6,
          dosha: "Vata",
          product: "Vata Churna Spice Blend",
          img : "/images/vata-churna.jpg",
          price : "$13.00 USD",
          size : "4oz",
          description : "Made using organic and naturally grown herbs of shatavari, marshmallow, turmeric, coriander, himilayan pink salt, hibiscus flower, wild cherry bark, fennel, lemongrass, cinnamon and ginger."
        },
        {
          id: 7,
          dosha: "Pitta",
          product: "Pitta Churna Spice Blend",
          img : "/images/pitta-churna.jpg",
          price : "$13.00 USD",
          size : "4oz",
          description : "Made using organic and naturally grown herbs of shatavari, hibiscus flower, turmeric, wild cherry bark, himilayan pink salt, coriander, cinnamon, lemongrass and fennel."
        },
        {
          id: 8,
          dosha: "Kapha",
          product: "Kapha Churna Spice Blend",
          img : "/images/kapha-churna.jpg",
          price : "$13.00 USD",
          size : "4oz",
          description : "Made using organic and naturally grown herbs of ginger, hibiscus flower, coriander, himilayan pink salt, turmeric, wild cherry bark, shatavari, cumin, clove and nutmeg."
        },
        {
          id: 9,
          dosha: "Tridoshic",
          product: "Tridoshic Churna Spice Blend",
          img : "/images/tridoshic-churna.jpg",
          price : "$13.00 USD",
          size : "4oz",
          description : "Made using organic and naturally grown herbs of cumin, hibiscus flower, shatavari, himilayan pink salt, turmeric, wild cherry bark, fennel, coriander and ginger."
        },
        {
          id: 10,
          dosha: "Custom",
          product: "Custom Churna Spice Blend",
          img : "",
          price : "$13.00 USD",
          size : "4oz",
          description : "Made using organic and naturally grown herbs tailored to your unique dosha."
        },
        {
          id: 11,
          dosha: "Vata",
          product: "Vata Calming Abhyanga Oil",
          img : "/images/vata-abhyanga-oil.jpg",
          price : "$13.00 USD",
          size : "4oz",
          description : "Made using 100% essential oils and carrier oils of tangerine, sweet orange, grapefruit, lavender, rosemary, tea tree, fennel, clove and ginger."
        },
        {
          id: 12,
          dosha: "Pitta",
          product: "Pitta Cooling Abhyanga Oil",
          img : "/images/pitta-abhyanga-oil.jpg",
          price : "$13.00 USD",
          size : "4oz",
          description : "Made using 100% essential oils and carrier oils of tea tree, lime, spearmint, roman chamomile, lavender and patchouli."
        },
        {
          id: 13,
          dosha: "Kapha",
          product: "Kapha Stimulating Abhyanga Oil",
          img : "/images/kapha-abhyanga-oil.jpg",
          price : "$13.00 USD",
          size : "4oz",
          description : "Made using 100% essential oils and carrier oils of tea tree, eucalyptus, lemon, peppermint, ginger, lavender, rosemary, turmeric and clove."
        },
        {
          id: 14,
          dosha: "Tridoshic",
          product: "Trodoshic Harmonizing Abhyanga Oil",
          img : "/images/tridoshic-abhyanga-oil.jpg",
          price : "$13.00 USD",
          size : "4oz",
          description : "Made using 100% essential oils and carrier oils of lemongrass, tea tree, peppermint, ylang ylang, fennel, lavender and rose."
        },
        {
          id: 15,
          dosha: "",
          product: "Abhyanga Oil - 16oz Refill Bottle",
          img : "/images/custom-abhyanga-oil.jpg",
          price : "$50.00 USD",
          size : "16oz",
          description : "Made using 100% essential oils and carrier oils. Choose from Vata, Pitta, Kapha Tridoshic or custom blend."
        },
        {
          id: 16,
          dosha: "Custom",
          product: "Abhyanga Oil Custom Concentrate",
          img : "",
          price : "$10.00 USD",
          size : "2oz",
          description : "Made using 100% essential oils tailored to your unique dosha."
        },
        {
          id: 17,
          dosha: "Custom",
          product: "Yoga Mat Refreshening Spray",
          img : "/images/spray.jpg",
          price : "$9.00 USD",
          size : "2oz",
          description : "Made using 100% essential oils mixed with distilled water."
        }
    ])
  }).then(() => {
    return knex.raw("SELECT setval('store_id_seq', (SELECT MAX(id) FROM store));")
  });
};
