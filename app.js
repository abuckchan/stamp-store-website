// ═══════════════════════════════════════════════════════════════
// 产品数据（精简版 - 只包含10个产品用于测试）
// ═══════════════════════════════════════════════════════════════

const products = [
  {
    "id": 19026,
    "name": "A Visit From St.Nick Forever Stamps",
    "category": "Forever Stamps 73$, Holiday",
    "theme": "Commemorative",
    "postage": "Forever First-Class",
    "image": "https://discountstampdeal.com/wp-content/uploads/2025/02/2176520D-F158-3A23-E811-3CE0D3C23097.jpg",
    "rating": "4.5",
    "reviews": 29,
    "description": "The A Visit from St. Nick Stamps feature four jovial designs. Woodard created his images by first sketching then digitizing them. He worked in a palette of original colors of dark blue, red, green, pink and gold/brown.",
    "variants": [
      {
        "sku": "STAMP-00-205-CN",
        "shippingFrom": "CN",
        "shippingDesc": "China Shipping (2-3 weeks)",
        "price": 5,
        "originalPrice": 19.99
      },
      {
        "sku": "STAMP-00-205-US",
        "shippingFrom": "US",
        "shippingDesc": "Local Shipping (3-5 days)",
        "price": 15,
        "originalPrice": 19.99
      }
    ]
  },
  {
    "id": 19027,
    "name": "Espresso Drinks Forever Stamps",
    "category": "Commemorative, Forever Stamps 73$",
    "theme": "Commemorative",
    "postage": "Forever First-Class",
    "image": "https://discountstampdeal.com/wp-content/uploads/2025/02/USA-5569-72__24421.jpg",
    "rating": "4.1",
    "reviews": 6,
    "description": "This booklet of 20 Stamps features four unique designs illustrating popular espresso drinks??espresso, cappuccino, caffe latte, and caffe mocha. Capturing the inviting atmosphere of an early 20th-century caf??, each digital illustration was created w",
    "variants": [
      {
        "sku": "STAMP-00-203-CN",
        "shippingFrom": "CN",
        "shippingDesc": "China Shipping (2-3 weeks)",
        "price": 5,
        "originalPrice": 19.99
      },
      {
        "sku": "STAMP-00-203-US",
        "shippingFrom": "US",
        "shippingDesc": "Local Shipping (3-5 days)",
        "price": 15,
        "originalPrice": 19.99
      }
    ]
  },
  {
    "id": 19028,
    "name": "Garden Beauty Forever Stamps",
    "category": "Forever Stamps 73$, Fruits & Flowers, Wedding",
    "theme": "Commemorative",
    "postage": "Forever First-Class",
    "image": "https://discountstampdeal.com/wp-content/uploads/2025/02/a07qt-ppdjd.jpg",
    "rating": "4.5",
    "reviews": 34,
    "description": "These Stamps celebrate America's love of flowers and gardens with 10 new stamp designs in a booklet of 20.",
    "variants": [
      {
        "sku": "STAMP-00-201-CN",
        "shippingFrom": "CN",
        "shippingDesc": "China Shipping (2-3 weeks)",
        "price": 5,
        "originalPrice": 19.99
      },
      {
        "sku": "STAMP-00-201-US",
        "shippingFrom": "US",
        "shippingDesc": "Local Shipping (3-5 days)",
        "price": 15,
        "originalPrice": 19.99
      }
    ]
  },
  {
    "id": 19029,
    "name": "Love Forever Stamps 2021",
    "category": "Forever Stamps 73$, Love, Wedding",
    "theme": "Wedding",
    "postage": "Forever First-Class",
    "image": "https://discountstampdeal.com/wp-content/uploads/2025/02/amd14-395e1.jpg",
    "rating": "4.2",
    "reviews": 51,
    "description": "The stamp art features a lighthearted and colorful digital illustration with the word ??LOVE?? and three large hearts shown in an unconventional palette of color duos, strikingly set against a dark blue background.",
    "variants": [
      {
        "sku": "STAMP-00-200-CN",
        "shippingFrom": "CN",
        "shippingDesc": "China Shipping (2-3 weeks)",
        "price": 5,
        "originalPrice": 19.99
      },
      {
        "sku": "STAMP-00-200-US",
        "shippingFrom": "US",
        "shippingDesc": "Local Shipping (3-5 days)",
        "price": 15,
        "originalPrice": 19.99
      }
    ]
  },
  {
    "id": 19030,
    "name": "Winter Berries Forever Stamps",
    "category": "Forever Stamps 73$, Holiday",
    "theme": "Holiday",
    "postage": "Forever First-Class",
    "image": "https://discountstampdeal.com/wp-content/uploads/2025/02/9580714F-F7D5-3824-BF1B-D58DC3843B69.jpg",
    "rating": "4.3",
    "reviews": 18,
    "description": "These stamps feature four designs of winter berries - holly, winterberry, juniper, and cranberry.",
    "variants": [
      {
        "sku": "STAMP-00-198-CN",
        "shippingFrom": "CN",
        "shippingDesc": "China Shipping (2-3 weeks)",
        "price": 5,
        "originalPrice": 19.99
      },
      {
        "sku": "STAMP-00-198-US",
        "shippingFrom": "US",
        "shippingDesc": "Local Shipping (3-5 days)",
        "price": 15,
        "originalPrice": 19.99
      }
    ]
  },
  {
    "id": 19031,
    "name": "Celebrate Forever Stamps",
    "category": "Forever Stamps 73$, Holiday",
    "theme": "Holiday",
    "postage": "Forever First-Class",
    "image": "https://discountstampdeal.com/wp-content/uploads/2025/02/2176520D-F158-3A23-E811-3CE0D3C23097.jpg",
    "rating": "4.6",
    "reviews": 42,
    "description": "Celebrate with these festive stamps featuring colorful confetti and balloons.",
    "variants": [
      {
        "sku": "STAMP-00-196-CN",
        "shippingFrom": "CN",
        "shippingDesc": "China Shipping (2-3 weeks)",
        "price": 5,
        "originalPrice": 19.99
      },
      {
        "sku": "STAMP-00-196-US",
        "shippingFrom": "US",
        "shippingDesc": "Local Shipping (3-5 days)",
        "price": 15,
        "originalPrice": 19.99
      }
    ]
  },
  {
    "id": 19032,
    "name": "Snowflakes Forever Stamps",
    "category": "Forever Stamps 73$, Holiday",
    "theme": "Holiday",
    "postage": "Forever First-Class",
    "image": "https://discountstampdeal.com/wp-content/uploads/2025/02/9580714F-F7D5-3824-BF1B-D58DC3843B69.jpg",
    "rating": "4.4",
    "reviews": 27,
    "description": "Beautiful snowflake designs capture the magic of winter.",
    "variants": [
      {
        "sku": "STAMP-00-194-CN",
        "shippingFrom": "CN",
        "shippingDesc": "China Shipping (2-3 weeks)",
        "price": 5,
        "originalPrice": 19.99
      },
      {
        "sku": "STAMP-00-194-US",
        "shippingFrom": "US",
        "shippingDesc": "Local Shipping (3-5 days)",
        "price": 15,
        "originalPrice": 19.99
      }
    ]
  },
  {
    "id": 19033,
    "name": "Spring Blossoms Forever Stamps",
    "category": "Forever Stamps 73$, Fruits & Flowers",
    "theme": "Commemorative",
    "postage": "Forever First-Class",
    "image": "https://discountstampdeal.com/wp-content/uploads/2025/02/a07qt-ppdjd.jpg",
    "rating": "4.7",
    "reviews": 35,
    "description": "Celebrate spring with these beautiful blossom stamps.",
    "variants": [
      {
        "sku": "STAMP-00-192-CN",
        "shippingFrom": "CN",
        "shippingDesc": "China Shipping (2-3 weeks)",
        "price": 5,
        "originalPrice": 19.99
      },
      {
        "sku": "STAMP-00-192-US",
        "shippingFrom": "US",
        "shippingDesc": "Local Shipping (3-5 days)",
        "price": 15,
        "originalPrice": 19.99
      }
    ]
  },
  {
    "id": 19034,
    "name": "Autumn Leaves Forever Stamps",
    "category": "Forever Stamps 73$, Fruits & Flowers",
    "theme": "Commemorative",
    "postage": "Forever First-Class",
    "image": "https://discountstampdeal.com/wp-content/uploads/2025/02/a07qt-ppdjd.jpg",
    "rating": "4.3",
    "reviews": 22,
    "description": "Capture the beauty of autumn with these colorful leaf stamps.",
    "variants": [
      {
        "sku": "STAMP-00-190-CN",
        "shippingFrom": "CN",
        "shippingDesc": "China Shipping (2-3 weeks)",
        "price": 5,
        "originalPrice": 19.99
      },
      {
        "sku": "STAMP-00-190-US",
        "shippingFrom": "US",
        "shippingDesc": "Local Shipping (3-5 days)",
        "price": 15,
        "originalPrice": 19.99
      }
    ]
  },
  {
    "id": 19035,
    "name": "Summer Flowers Forever Stamps",
    "category": "Forever Stamps 73$, Fruits & Flowers",
    "theme": "Commemorative",
    "postage": "Forever First-Class",
    "image": "https://discountstampdeal.com/wp-content/uploads/2025/02/a07qt-ppdjd.jpg",
    "rating": "4.5",
    "reviews": 31,
    "description": "Enjoy summer vibes with these vibrant flower stamps.",
    "variants": [
      {
        "sku": "STAMP-00-188-CN",
        "shippingFrom": "CN",
        "shippingDesc": "China Shipping (2-3 weeks)",
        "price": 5,
        "originalPrice": 19.99
      },
      {
        "sku": "STAMP-00-188-US",
        "shippingFrom": "US",
        "shippingDesc": "Local Shipping (3-5 days)",
        "price": 15,
        "originalPrice": 19.99
      }
    ]
  }
];



const productsByTheme = {
  "Commemorative": [
    {
      "id": 19026,
      "name": "A Visit From St.Nick Forever Stamps",
      "category": "Forever Stamps 73$, Holiday",
      "theme": "Commemorative",
      "postage": "Forever First-Class",
      "image": "https://discountstampdeal.com/wp-content/uploads/2025/02/2176520D-F158-3A23-E811-3CE0D3C23097.jpg",
      "rating": "4.5",
      "reviews": 29,
      "description": "The A Visit from St. Nick Stamps feature four jovial designs. Woodard created his images by first sketching then digitizing them. He worked in a palette of original colors of dark blue, red, green, pink and gold/brown.",
      "variants": [
        {
          "sku": "STAMP-00-205-CN",
          "shippingFrom": "CN",
          "shippingDesc": "China Shipping (2-3 weeks)",
          "price": 5,
          "originalPrice": 19.99
        },
        {
          "sku": "STAMP-00-205-US",
          "shippingFrom": "US",
          "shippingDesc": "Local Shipping (3-5 days)",
          "price": 15,
          "originalPrice": 19.99
        }
      ]
    },
    {
      "id": 19027,
      "name": "Espresso Drinks Forever Stamps",
      "category": "Commemorative, Forever Stamps 73$",
      "theme": "Commemorative",
      "postage": "Forever First-Class",
      "image": "https://discountstampdeal.com/wp-content/uploads/2025/02/USA-5569-72__24421.jpg",
      "rating": "4.1",
      "reviews": 6,
      "description": "This booklet of 20 Stamps features four unique designs illustrating popular espresso drinks??espresso, cappuccino, caffe latte, and caffe mocha. Capturing the inviting atmosphere of an early 20th-century caf??, each digital illustration was created w",
      "variants": [
        {
          "sku": "STAMP-00-203-CN",
          "shippingFrom": "CN",
          "shippingDesc": "China Shipping (2-3 weeks)",
          "price": 5,
          "originalPrice": 19.99
        },
        {
          "sku": "STAMP-00-203-US",
          "shippingFrom": "US",
          "shippingDesc": "Local Shipping (3-5 days)",
          "price": 15,
          "originalPrice": 19.99
        }
      ]
    },
    {
      "id": 19028,
      "name": "Garden Beauty Forever Stamps",
      "category": "Forever Stamps 73$, Fruits &amp; Flowers, Wedding",
      "theme": "Commemorative",
      "postage": "Forever First-Class",
      "image": "https://discountstampdeal.com/wp-content/uploads/2025/02/a07qt-ppdjd.jpg",
      "rating": "4.5",
      "reviews": 34,
      "description": "These Stamps celebrate America&#8217;s love of flowers and gardens with 10 new stamp designs in a booklet of 20.",
      "variants": [
        {
          "sku": "STAMP-00-201-CN",
          "shippingFrom": "CN",
          "shippingDesc": "China Shipping (2-3 weeks)",
          "price": 5,
          "originalPrice": 19.99
        },
        {
          "sku": "STAMP-00-201-US",
          "shippingFrom": "US",
          "shippingDesc": "Local Shipping (3-5 days)",
          "price": 15,
          "originalPrice": 19.99
        }
      ]
    },
    {
      "id": 19030,
      "name": "Drug Free USA Forever Stamps",
      "category": "Commemorative, Forever Stamps 73$, Patriotic",
      "theme": "Commemorative",
      "postage": "Forever First-Class",
      "image": "https://discountstampdeal.com/wp-content/uploads/2025/02/5_.jpg",
      "rating": "4.0",
      "reviews": 50,
      "description": "The Drug Free USA stamp art features a white star with lines of red, light blue and blue radiating from one side of each of the star??s five points, suggesting the unity necessary at all levels to effectively address drug abuse.",
      "variants": [
        {
          "sku": "STAMP-00-297-CN",
          "shippingFrom": "CN",
          "shippingDesc": "China Shipping (2-3 weeks)",
          "price": 5,
          "originalPrice": 19.99
        },
        {
          "sku": "STAMP-00-297-US",
          "shippingFrom": "US",
          "shippingDesc": "Local Shipping (3-5 days)",
          "price": 15,
          "originalPrice": 19.99
        }
      ]
    },
    {
      "id": 19031,
      "name": "Earth Day Forever Stamps",
      "category": "Commemorative, Forever Stamps 73$",
      "theme": "Commemorative",
      "postage": "Forever First-Class",
      "image": "https://discountstampdeal.com/wp-content/uploads/2025/02/40428C41-A6A2-0585-0B98-4F6D3C681E03.webp",
      "rating": "4.4",
      "reviews": 14,
      "description": "Earth Day is celebrated annually by more than two billion people, making it the largest secular observance on the planet.",
      "variants": [
        {
          "sku": "STAMP-00-295-CN",
          "shippingFrom": "CN",
          "shippingDesc": "China Shipping (2-3 weeks)",
          "price": 5,
          "originalPrice": 19.99
        },
        {
          "sku": "STAMP-00-295-US",
          "shippingFrom": "US",
          "shippingDesc": "Local Shipping (3-5 days)",
          "price": 15,
          "originalPrice": 19.99
        }
      ]
    },
    {
      "id": 19032,
      "name": "Contemporary Boutonniere Forever Stamps",
      "category": "Forever Stamps 73$, Fruits &amp; Flowers, Love, Wedding",
      "theme": "Commemorative",
      "postage": "Forever First-Class",
      "image": "https://discountstampdeal.com/wp-content/uploads/2025/02/1-1.jpg",
      "rating": "4.4",
      "reviews": 7,
      "description": "The stamp art features a photograph of a burgundy mini-cymbidium orchid bloom, a succulent, and a touch of green hydrangea, accented with loops of variegated lily grass.",
      "variants": [
        {
          "sku": "STAMP-00-293-CN",
          "shippingFrom": "CN",
          "shippingDesc": "China Shipping (2-3 weeks)",
          "price": 5,
          "originalPrice": 19.99
        },
        {
          "sku": "STAMP-00-293-US",
          "shippingFrom": "US",
          "shippingDesc": "Local Shipping (3-5 days)",
          "price": 15,
          "originalPrice": 19.99
        }
      ]
    },
    {
      "id": 19037,
      "name": "Otters in Snow Forever Stamps",
      "category": "Animals &amp; Nature, Forever Stamps 73$",
      "theme": "Commemorative",
      "postage": "Forever First-Class",
      "image": "https://discountstampdeal.com/wp-content/uploads/2025/02/B-52.webp",
      "rating": "4.8",
      "reviews": 11,
      "description": "The four usps forever Stamps feature artwork by John Burgoyne, with each stamp showing a single otter playing or posing within a white winter scene.",
      "variants": [
        {
          "sku": "STAMP-00-283-CN",
          "shippingFrom": "CN",
          "shippingDesc": "China Shipping (2-3 weeks)",
          "price": 5,
          "originalPrice": 19.99
        },
        {
          "sku": "STAMP-00-283-US",
          "shippingFrom": "US",
          "shippingDesc": "Local Shipping (3-5 days)",
          "price": 15,
          "originalPrice": 19.99
        }
      ]
    },
    {
      "id": 19039,
      "name": "Our Lady of Gu??pulo Forever Stamps",
      "category": "Forever Stamps 73$, Holiday",
      "theme": "Commemorative",
      "postage": "Forever First-Class",
      "image": "https://discountstampdeal.com/wp-content/uploads/2025/02/3FC90198-7C22-A22E-68C5-918462E9191B.webp",
      "rating": "4.1",
      "reviews": 52,
      "description": "This Christmas stamp features a detail of the painting Our Lady of Gu??pulo. Painted in the 18th century by an unknown artist in Cuzco, Peru, Our Lady of Gu??pulo is from the collection of The Metropolitan Museum of Art in New York. Enrobed in a pyra",
      "variants": [
        {
          "sku": "STAMP-00-279-CN",
          "shippingFrom": "CN",
          "shippingDesc": "China Shipping (2-3 weeks)",
          "price": 5,
          "originalPrice": 19.99
        },
        {
          "sku": "STAMP-00-279-US",
          "shippingFrom": "US",
          "shippingDesc": "Local Shipping (3-5 days)",
          "price": 15,
          "originalPrice": 19.99
        }
      ]
    },
    {
      "id": 19040,
      "name": "2 Ounce Garden Corsage Forever Stamps",
      "category": "Fruits &amp; Flowers, Love, Two Ounce 92$, Wedding",
      "theme": "Commemorative",
      "postage": "Forever First-Class",
      "image": "https://discountstampdeal.com/wp-content/uploads/2025/02/a-32.webp",
      "rating": "5.0",
      "reviews": 23,
      "description": "The stamp art features a photograph of a corsage containing a spray of peach roses and a pink ranunculus, accented with deep-pink heather and seeded eucalyptus. A cream-colored lace ribbon entwines the flowers. Garden Corsage is similar in design to ",
      "variants": [
        {
          "sku": "STAMP-00-277-CN",
          "shippingFrom": "CN",
          "shippingDesc": "China Shipping (2-3 weeks)",
          "price": 5,
          "originalPrice": 37
        },
        {
          "sku": "STAMP-00-277-US",
          "shippingFrom": "US",
          "shippingDesc": "Local Shipping (3-5 days)",
          "price": 15,
          "originalPrice": 37
        }
      ]
    },
    {
      "id": 19041,
      "name": "Wild Orchids Forever Stamps",
      "category": "Forever Stamps 73$, Fruits &amp; Flowers",
      "theme": "Commemorative",
      "postage": "Forever First-Class",
      "image": "https://discountstampdeal.com/wp-content/uploads/2025/02/USA-5452__80194.webp",
      "rating": "4.9",
      "reviews": 44,
      "description": "Celebrates the beauty of Wild Orchids with Stamps of flowers that grow in the United States. The stamp art highlights photos taken by photographer Jim Fowler. Art director Ethel Kessler designed the Stamps. Each stamp features a photograph of one of ",
      "variants": [
        {
          "sku": "STAMP-00-275-CN",
          "shippingFrom": "CN",
          "shippingDesc": "China Shipping (2-3 weeks)",
          "price": 5,
          "originalPrice": 19.99
        },
        {
          "sku": "STAMP-00-275-US",
          "shippingFrom": "US",
          "shippingDesc": "Local Shipping (3-5 days)",
          "price": 15,
          "originalPrice": 19.99
        }
      ]
    },
    {
      "id": 19043,
      "name": "Barns Postcard Forever Stamps",
      "category": "History &amp; Heritage, Postcard 53$",
      "theme": "Commemorative",
      "postage": "Postcard",
      "image": "https://discountstampdeal.com/wp-content/uploads/2025/02/DF9A7BE6-E785-22C4-5D8B-9BA544A30442.webp",
      "rating": "4.4",
      "reviews": 26,
      "description": "The U.S. Postal Service issues four new postcard Stamps that celebrate the beauty and history of American barns. Each piece reflects one of the four seasons: a round barn surrounded by the hazy light and warm colors of fall; a gambrel-roofed barn in ",
      "variants": [
        {
          "sku": "STAMP-00-271-CN",
          "shippingFrom": "CN",
          "shippingDesc": "China Shipping (2-3 weeks)",
          "price": 5,
          "originalPrice": 24
        },
        {
          "sku": "STAMP-00-271-US",
          "shippingFrom": "US",
          "shippingDesc": "Local Shipping (3-5 days)",
          "price": 15,
          "originalPrice": 24
        }
      ]
    },
    {
      "id": 19044,
      "name": "Squirrel Tree Frog Forever Stamps",
      "category": "Animals &amp; Nature, Forever Stamps 73$",
      "theme": "Commemorative",
      "postage": "Forever First-Class",
      "image": "https://discountstampdeal.com/wp-content/uploads/2025/02/b-51.webp",
      "rating": "4.8",
      "reviews": 37,
      "description": "Digital illustrations of four North American frogs grace these new Stamps: the Pacific tree frog, the northern leopard frog, the American green tree frog, and the squirrel tree frog. Working with a primarily green color palette, the artist captured t",
      "variants": [
        {
          "sku": "STAMP-00-269-CN",
          "shippingFrom": "CN",
          "shippingDesc": "China Shipping (2-3 weeks)",
          "price": 5,
          "originalPrice": 19.99
        },
        {
          "sku": "STAMP-00-269-US",
          "shippingFrom": "US",
          "shippingDesc": "Local Shipping (3-5 days)",
          "price": 15,
          "originalPrice": 19.99
        }
      ]
    },
    {
      "id": 19045,
      "name": "Global: Chrysanthemum Forever Stamps",
      "category": "Fruits &amp; Flowers, International $1.55",
      "theme": "Commemorative",
      "postage": "International",
      "image": "https://discountstampdeal.com/wp-content/uploads/2025/02/141ED549-F440-2111-D846-D219CA5CCB9F.webp",
      "rating": "4.6",
      "reviews": 26,
      "description": "Chrysanthemum International Stamps are a must-have for global Forever stamp collectors! Featuring a beautiful chrysanthemum design, these global Forever Stamps are perfect for mailing letters and packages with elegance.",
      "variants": [
        {
          "sku": "STAMP-00-267-CN",
          "shippingFrom": "CN",
          "shippingDesc": "China Shipping (2-3 weeks)",
          "price": 5,
          "originalPrice": 39
        },
        {
          "sku": "STAMP-00-267-US",
          "shippingFrom": "US",
          "shippingDesc": "Local Shipping (3-5 days)",
          "price": 15,
          "originalPrice": 39
        }
      ]
    },
    {
      "id": 19046,
      "name": "Global: Poinsettia Forever Stamps",
      "category": "Fruits &amp; Flowers, International $1.55",
      "theme": "Commemorative",
      "postage": "International",
      "image": "https://discountstampdeal.com/wp-content/uploads/2025/02/USA-5311__84947.webp",
      "rating": "4.6",
      "reviews": 14,
      "description": "Celebrate the holidays with Poinsettia, a new Global Forever? stamp from the U.S. Postal Service?. This Global Forever stamp can be used to mail a one-ounce letter to any country\nto which First-Class Mail International? service is available.\n&nbsp;\n&",
      "variants": [
        {
          "sku": "STAMP-00-265-CN",
          "shippingFrom": "CN",
          "shippingDesc": "China Shipping (2-3 weeks)",
          "price": 5,
          "originalPrice": 39
        },
        {
          "sku": "STAMP-00-265-US",
          "shippingFrom": "US",
          "shippingDesc": "Local Shipping (3-5 days)",
          "price": 15,
          "originalPrice": 39
        }
      ]
    },
    {
      "id": 19048,
      "name": "Disney Villains Forever Stamps",
      "category": "Commemorative, Forever Stamps 73$, Kids",
      "theme": "Commemorative",
      "postage": "Forever First-Class",
      "image": "https://discountstampdeal.com/wp-content/uploads/2025/02/b-50.webp",
      "rating": "4.1",
      "reviews": 9,
      "description": "The U.S. Postal Service celebrate the rich legacy of the Walt Disney Studio??s Ink &amp; Paint Department by dedicating a sheet of 20 Forever Stamps featuring 10 classic Disney Villains.\n&nbsp;",
      "variants": [
        {
          "sku": "STAMP-00-261-CN",
          "shippingFrom": "CN",
          "shippingDesc": "China Shipping (2-3 weeks)",
          "price": 5,
          "originalPrice": 19.99
        },
        {
          "sku": "STAMP-00-261-US",
          "shippingFrom": "US",
          "shippingDesc": "Local Shipping (3-5 days)",
          "price": 15,
          "originalPrice": 19.99
        }
      ]
    },
    {
      "id": 19049,
      "name": "Mystery Message Forever Stamps",
      "category": "Forever Stamps 73$, History &amp; Heritage",
      "theme": "Commemorative",
      "postage": "Forever First-Class",
      "image": "https://discountstampdeal.com/wp-content/uploads/2025/02/03C6F794-15E8-CD77-945E-76E2CB7D24F5.webp",
      "rating": "4.8",
      "reviews": 14,
      "description": "The new Mystery Message Forever stamp is designed to put your sleuthing skills to the test! Featuring bright colors and interesting shapes, the stamp design is a visual riddle spelling out a difficult-to-discern message. Each colorful square contains",
      "variants": [
        {
          "sku": "STAMP-00-259-CN",
          "shippingFrom": "CN",
          "shippingDesc": "China Shipping (2-3 weeks)",
          "price": 5,
          "originalPrice": 19.99
        },
        {
          "sku": "STAMP-00-259-US",
          "shippingFrom": "US",
          "shippingDesc": "Local Shipping (3-5 days)",
          "price": 15,
          "originalPrice": 19.99
        }
      ]
    },
    {
      "id": 19050,
      "name": "Day of the Dead Forever Stamps",
      "category": "Commemorative, Forever Stamps 73$, Holiday",
      "theme": "Commemorative",
      "postage": "Forever First-Class",
      "image": "https://discountstampdeal.com/wp-content/uploads/2025/02/7FCBE507-DBDA-0A5A-A03E-1DDFF04CDEA0.webp",
      "rating": "4.9",
      "reviews": 39,
      "description": "With the release of these four new Stamps, the U.S. Postal Service celebrates Day of the Dead, an increasingly popular holiday in the United States.Each of the pane??s five identical rows includes four colorful Stamps featuring several iconic element",
      "variants": [
        {
          "sku": "STAMP-00-257-CN",
          "shippingFrom": "CN",
          "shippingDesc": "China Shipping (2-3 weeks)",
          "price": 5,
          "originalPrice": 19.99
        },
        {
          "sku": "STAMP-00-257-US",
          "shippingFrom": "US",
          "shippingDesc": "Local Shipping (3-5 days)",
          "price": 15,
          "originalPrice": 19.99
        }
      ]
    },
    {
      "id": 19051,
      "name": "Spooky Silhouettes Forever Stamps",
      "category": "Celebrations &amp; Thanks, Forever Stamps 73$, Holiday",
      "theme": "Commemorative",
      "postage": "Forever First-Class",
      "image": "https://discountstampdeal.com/wp-content/uploads/2025/02/a-30.webp",
      "rating": "4.9",
      "reviews": 41,
      "description": "The Postal Service issues four Forever Stamps in time for Halloween. The Spooky Silhouettes Stamps feature digital illustrations with Halloween motifs rendered as black silhouettes in eerily backlit windows.\n&nbsp;",
      "variants": [
        {
          "sku": "STAMP-00-255-CN",
          "shippingFrom": "CN",
          "shippingDesc": "China Shipping (2-3 weeks)",
          "price": 5,
          "originalPrice": 19.99
        },
        {
          "sku": "STAMP-00-255-US",
          "shippingFrom": "US",
          "shippingDesc": "Local Shipping (3-5 days)",
          "price": 15,
          "originalPrice": 19.99
        }
      ]
    },
    {
      "id": 19053,
      "name": "Happy Birthday Forever Stamps",
      "category": "Celebrations &amp; Thanks, Forever Stamps 73$",
      "theme": "Commemorative",
      "postage": "Forever First-Class",
      "image": "https://discountstampdeal.com/wp-content/uploads/2025/02/a-26.webp",
      "rating": "4.9",
      "reviews": 8,
      "description": "This Happy Birthday stamp conveys exuberant greetings by calling to mind the childhood excitement of a birthday party.",
      "variants": [
        {
          "sku": "STAMP-00-251-CN",
          "shippingFrom": "CN",
          "shippingDesc": "China Shipping (2-3 weeks)",
          "price": 5,
          "originalPrice": 19.99
        },
        {
          "sku": "STAMP-00-251-US",
          "shippingFrom": "US",
          "shippingDesc": "Local Shipping (3-5 days)",
          "price": 15,
          "originalPrice": 19.99
        }
      ]
    },
    {
      "id": 19082,
      "name": "The Snowy Day Forever Stamps",
      "category": "Forever Stamps 73$, Kids",
      "theme": "Commemorative",
      "postage": "Forever First-Class",
      "image": "https://discountstampdeal.com/wp-content/uploads/2025/02/a-29.webp",
      "rating": "4.5",
      "reviews": 24,
      "description": "Each of the four new Stamps in this 20-stamp booklet features a different illustration of main character Peter exploring and playing in his neighborhood while wearing his iconic red snowsuit.",
      "variants": [
        {
          "sku": "STAMP-00-243-CN",
          "shippingFrom": "CN",
          "shippingDesc": "China Shipping (2-3 weeks)",
          "price": 5,
          "originalPrice": 19.99
        },
        {
          "sku": "STAMP-00-243-US",
          "shippingFrom": "US",
          "shippingDesc": "Local Shipping (3-5 days)",
          "price": 15,
          "originalPrice": 19.99
        }
      ]
    },
    {
      "id": 19084,
      "name": "Winter Berries Forever Stamps",
      "category": "Forever Stamps 73$, Fruits &amp; Flowers",
      "theme": "Commemorative",
      "postage": "Forever First-Class",
      "image": "https://discountstampdeal.com/wp-content/uploads/2025/02/751B2EB3-635D-576E-6683-70BE190D4923.webp",
      "rating": "4.9",
      "reviews": 41,
      "description": "The stamp art features highly detailed botanical portraits of each plant that highlight the bold colors and rich textures of their berries. Artist Steve Buchanan worked with Art Director Antonio Alcal?? to create these four new Stamps.",
      "variants": [
        {
          "sku": "STAMP-00-239-CN",
          "shippingFrom": "CN",
          "shippingDesc": "China Shipping (2-3 weeks)",
          "price": 5,
          "originalPrice": 19.99
        },
        {
          "sku": "STAMP-00-239-US",
          "shippingFrom": "US",
          "shippingDesc": "Local Shipping (3-5 days)",
          "price": 15,
          "originalPrice": 19.99
        }
      ]
    },
    {
      "id": 19108,
      "name": "SHARKS 2017 Forever Stamps",
      "category": "Animals &amp; Nature, Forever Stamps 73$",
      "theme": "Commemorative",
      "postage": "Forever First-Class",
      "image": "https://discountstampdeal.com/wp-content/uploads/2025/02/a-22.webp",
      "rating": "4.8",
      "reviews": 25,
      "description": "The U.S. Postal Service celebrated the wonder of sharks by issuing the Sharks Forever Stamps featuring five species that inhabit American waters ?? the mako, thresher, great white, hammerhead and whale sharks.",
      "variants": [
        {
          "sku": "STAMP-17-231-CN",
          "shippingFrom": "CN",
          "shippingDesc": "China Shipping (2-3 weeks)",
          "price": 5,
          "originalPrice": 19.99
        },
        {
          "sku": "STAMP-17-231-US",
          "shippingFrom": "US",
          "shippingDesc": "Local Shipping (3-5 days)",
          "price": 15,
          "originalPrice": 19.99
        }
      ]
    },
    {
      "id": 19109,
      "name": "$1.12 Colorado Hairstreak Forever Stamps",
      "category": "Animals &amp; Nature, Non-Machineable $1.12",
      "theme": "Commemorative",
      "postage": "Forever First-Class",
      "image": "https://discountstampdeal.com/wp-content/uploads/2025/02/a-23.webp",
      "rating": "4.4",
      "reviews": 12,
      "description": "The Colorado hairstreak butterfly graces the eighth non-machineable butterfly stamp for use on irregularly sized envelopes, such as square greeting cards, invitations, or announcements. The stamp art was digitally created using images of preserved bu",
      "variants": [
        {
          "sku": "STAMP-00-229-CN",
          "shippingFrom": "CN",
          "shippingDesc": "China Shipping (2-3 weeks)",
          "price": 5,
          "originalPrice": 35
        },
        {
          "sku": "STAMP-00-229-US",
          "shippingFrom": "US",
          "shippingDesc": "Local Shipping (3-5 days)",
          "price": 15,
          "originalPrice": 35
        }
      ]
    },
    {
      "id": 19111,
      "name": "Coral Reefs Postcard Forever Stamps",
      "category": "Animals &amp; Nature, Postcard 53$",
      "theme": "Commemorative",
      "postage": "Postcard",
      "image": "https://discountstampdeal.com/wp-content/uploads/2025/02/C31EFC9E-728B-2A8E-D8B5-176CD49FBC8D.webp",
      "rating": "4.3",
      "reviews": 44,
      "description": "Celebrate the beauty and wonder of coral reefs with four new postcard Stamps from the U.S. Postal Service?. Featuring highly stylized digital portraits, the stamp art depicts four types of stony corals with associated reef fish.",
      "variants": [
        {
          "sku": "STAMP-00-225-CN",
          "shippingFrom": "CN",
          "shippingDesc": "China Shipping (2-3 weeks)",
          "price": 5,
          "originalPrice": 24
        },
        {
          "sku": "STAMP-00-225-US",
          "shippingFrom": "US",
          "shippingDesc": "Local Shipping (3-5 days)",
          "price": 15,
          "originalPrice": 24
        }
      ]
    },
    {
      "id": 19134,
      "name": "Have a ball Forever Stamps",
      "category": "Forever Stamps 73$, Sports",
      "theme": "Commemorative",
      "postage": "Forever First-Class",
      "image": "https://discountstampdeal.com/wp-content/uploads/2025/02/a-20.webp",
      "rating": "4.5",
      "reviews": 22,
      "description": "The USPS issued the Have A Ball! Stamps on June 14th 2017. The pane of 16 featuring eight different designs presents a special coating applied only to selected areas. This gives the Stamps a textured feel. Mike Ryan was the designer while Greg Breedi",
      "variants": [
        {
          "sku": "STAMP-00-219-CN",
          "shippingFrom": "CN",
          "shippingDesc": "China Shipping (2-3 weeks)",
          "price": 5,
          "originalPrice": 19.99
        },
        {
          "sku": "STAMP-00-219-US",
          "shippingFrom": "US",
          "shippingDesc": "Local Shipping (3-5 days)",
          "price": 15,
          "originalPrice": 19.99
        }
      ]
    },
    {
      "id": 19135,
      "name": "Frozen Treats Forever Stamps",
      "category": "Commemorative, Forever Stamps 73$",
      "theme": "Commemorative",
      "postage": "Forever First-Class",
      "image": "https://discountstampdeal.com/wp-content/uploads/2025/02/d-30.webp",
      "rating": "4.9",
      "reviews": 52,
      "description": "Frozen Treats?Stamps feature frosty, colorful pops on a stick in a variety of shapes and flavors. This booklet of 20 scratch-and-sniff Stamps showcases whimsical watercolor illustrations in 10 different designs. The Stamps are printed with a coating ",
      "variants": [
        {
          "sku": "STAMP-00-217-CN",
          "shippingFrom": "CN",
          "shippingDesc": "China Shipping (2-3 weeks)",
          "price": 5,
          "originalPrice": 19.99
        },
        {
          "sku": "STAMP-00-217-US",
          "shippingFrom": "US",
          "shippingDesc": "Local Shipping (3-5 days)",
          "price": 15,
          "originalPrice": 19.99
        }
      ]
    },
    {
      "id": 19158,
      "name": "Hot Wheels Forever Stamps",
      "category": "Forever Stamps 73$, History &amp; Heritage",
      "theme": "Commemorative",
      "postage": "Forever First-Class",
      "image": "https://discountstampdeal.com/wp-content/uploads/2025/02/4417F554-EF57-894C-D4C6-C94570EE2098.webp",
      "rating": "4.4",
      "reviews": 54,
      "description": "In celebration of Hot Wheels?? 50th Anniversary, the U.S. Postal Service today issued a pane of 20 Forever Stamps showcasing some of the classic toy car??s most outrageous designs.",
      "variants": [
        {
          "sku": "STAMP-00-209-CN",
          "shippingFrom": "CN",
          "shippingDesc": "China Shipping (2-3 weeks)",
          "price": 5,
          "originalPrice": 19.99
        },
        {
          "sku": "STAMP-00-209-US",
          "shippingFrom": "US",
          "shippingDesc": "Local Shipping (3-5 days)",
          "price": 15,
          "originalPrice": 19.99
        }
      ]
    },
    {
      "id": 19159,
      "name": "Summer Harvest Forever Stamps",
      "category": "Forever Stamps 73$, Fruits &amp; Flowers",
      "theme": "Commemorative",
      "postage": "Forever First-Class",
      "image": "https://discountstampdeal.com/wp-content/uploads/2025/02/a-15.webp",
      "rating": "4.5",
      "reviews": 20,
      "description": "The U.S. Postal Service celebrates a few of those favorites-corn, tomatoes, cantaloupes, and watermelons-with four new Stamps. Vintage produce advertising, including 19th- and early 20th-century crate labels, seed packets, and catalogs, inspired thes",
      "variants": [
        {
          "sku": "STAMP-00-207-CN",
          "shippingFrom": "CN",
          "shippingDesc": "China Shipping (2-3 weeks)",
          "price": 5,
          "originalPrice": 19.99
        },
        {
          "sku": "STAMP-00-207-US",
          "shippingFrom": "US",
          "shippingDesc": "Local Shipping (3-5 days)",
          "price": 15,
          "originalPrice": 19.99
        }
      ]
    },
    {
      "id": 19184,
      "name": "Fruits &#038; Vegetables Forever Stamps",
      "category": "Forever Stamps 73$, Fruits &amp; Flowers",
      "theme": "Commemorative",
      "postage": "Forever First-Class",
      "image": "https://discountstampdeal.com/wp-content/uploads/2025/02/a-14.webp",
      "rating": "4.0",
      "reviews": 52,
      "description": "Fruit &amp; Vegetables Booklet Pane of 20 First-Class Mail Forever Stamps The U.S. Postal Service captures the classic beauty of still-life paintings in a booklet of 20 Stamps featuring 10 stunning portraits of fruits and vegetables.\n&nbsp;",
      "variants": [
        {
          "sku": "STAMP-00-199-CN",
          "shippingFrom": "CN",
          "shippingDesc": "China Shipping (2-3 weeks)",
          "price": 5,
          "originalPrice": 19.99
        },
        {
          "sku": "STAMP-00-199-US",
          "shippingFrom": "US",
          "shippingDesc": "Local Shipping (3-5 days)",
          "price": 15,
          "originalPrice": 19.99
        }
      ]
    },
    {
      "id": 19186,
      "name": "Go Beyond: Buzz Lightyear",
      "category": "Forever Stamps 73$, Kids",
      "theme": "Commemorative",
      "postage": "Forever First-Class",
      "image": "https://discountstampdeal.com/wp-content/uploads/2025/02/2B6CD5D9-0D81-B8A8-7E2A-7A25D2275FE9.webp",
      "rating": "4.3",
      "reviews": 17,
      "description": "Go Beyond with famed Space Ranger Buzz Lightyear! With this pane of 20 Forever? Stamps, the legendary hero blasts beyond his familiar role as a toy. Four different stamp designs celebrate the hero who inspired the over-confident action figure from th",
      "variants": [
        {
          "sku": "STAMP-00-195-CN",
          "shippingFrom": "CN",
          "shippingDesc": "China Shipping (2-3 weeks)",
          "price": 5,
          "originalPrice": 19.99
        },
        {
          "sku": "STAMP-00-195-US",
          "shippingFrom": "US",
          "shippingDesc": "Local Shipping (3-5 days)",
          "price": 15,
          "originalPrice": 19.99
        }
      ]
    },
    {
      "id": 19187,
      "name": "Lunar New Year: Year Of The Ox",
      "category": "Forever Stamps 73$, History &amp; Heritage, Holiday",
      "theme": "Commemorative",
      "postage": "Forever First-Class",
      "image": "https://discountstampdeal.com/wp-content/uploads/2025/02/a-10.webp",
      "rating": "4.1",
      "reviews": 15,
      "description": "Lunar New Year is one of the most important holidays of the year for many Asian communities around the world and is primarily celebrated by people of Chinese, Korean, Vietnamese, Tibetan, Mongolian, Malaysian, and Filipino heritage. Across these vari",
      "variants": [
        {
          "sku": "STAMP-00-193-CN",
          "shippingFrom": "CN",
          "shippingDesc": "China Shipping (2-3 weeks)",
          "price": 5,
          "originalPrice": 19.99
        },
        {
          "sku": "STAMP-00-193-US",
          "shippingFrom": "US",
          "shippingDesc": "Local Shipping (3-5 days)",
          "price": 15,
          "originalPrice": 19.99
        }
      ]
    },
    {
      "id": 19211,
      "name": "Tulip Blossoms Forever Stamps",
      "category": "Forever Stamps 73$, Fruits &amp; Flowers",
      "theme": "Commemorative",
      "postage": "Forever First-Class",
      "image": "https://discountstampdeal.com/wp-content/uploads/2025/02/D98BCCDD-EE6E-43D0-92E1-EDE8B1461C03.webp",
      "rating": "4.7",
      "reviews": 21,
      "description": "Each fall, millions of gardeners bury bulbs in the earth, eagerly anticipating the rewards that springtime will bring. Months later, thick green leaves poke through the soil, soon revealing their payload: tulip blossoms in spectacular variety from pr",
      "variants": [
        {
          "sku": "STAMP-00-191-CN",
          "shippingFrom": "CN",
          "shippingDesc": "China Shipping (2-3 weeks)",
          "price": 5,
          "originalPrice": 19.99
        },
        {
          "sku": "STAMP-00-191-US",
          "shippingFrom": "US",
          "shippingDesc": "Local Shipping (3-5 days)",
          "price": 15,
          "originalPrice": 19.99
        }
      ]
    },
    {
      "id": 19212,
      "name": "Rudolph the Red-Nosed Reindeer Forever Stamps",
      "category": "Forever Stamps 73$, Holiday, Kids",
      "theme": "Commemorative",
      "postage": "Forever First-Class",
      "image": "https://discountstampdeal.com/wp-content/uploads/2025/02/CB126444-DB93-455D-8D69-CCC624906AC0.webp",
      "rating": "4.7",
      "reviews": 46,
      "description": "The us postal service issued this set of forever Stamps on November 6, 2014 to commemorate the occasion. This stamp has four designs, Rudolph, Santa, Hermey and the lovable Bumble.\n&nbsp;",
      "variants": [
        {
          "sku": "STAMP-00-189-CN",
          "shippingFrom": "CN",
          "shippingDesc": "China Shipping (2-3 weeks)",
          "price": 5,
          "originalPrice": 19.99
        },
        {
          "sku": "STAMP-00-189-US",
          "shippingFrom": "US",
          "shippingDesc": "Local Shipping (3-5 days)",
          "price": 15,
          "originalPrice": 19.99
        }
      ]
    },
    {
      "id": 19213,
      "name": "Bugs Bunny Rabbit Forever Stamps",
      "category": "Forever Stamps 73$, History &amp; Heritage, Kids",
      "theme": "Commemorative",
      "postage": "Forever First-Class",
      "image": "https://discountstampdeal.com/wp-content/uploads/2025/02/a-9.webp",
      "rating": "4.3",
      "reviews": 23,
      "description": "This issuance celebrates Bugs Bunny and the marvelous masquerades he has employed to foil foes over the course of his 80-year career. The sheet of 20 Stamps features Bugs in 10 classic costumes.",
      "variants": [
        {
          "sku": "STAMP-00-187-CN",
          "shippingFrom": "CN",
          "shippingDesc": "China Shipping (2-3 weeks)",
          "price": 5,
          "originalPrice": 19.99
        },
        {
          "sku": "STAMP-00-187-US",
          "shippingFrom": "US",
          "shippingDesc": "Local Shipping (3-5 days)",
          "price": 15,
          "originalPrice": 19.99
        }
      ]
    },
    {
      "id": 19215,
      "name": "Mountain Flora Forever Stamps",
      "category": "Forever Stamps 73$, Fruits &amp; Flowers, Wedding",
      "theme": "Commemorative",
      "postage": "Forever First-Class",
      "image": "https://discountstampdeal.com/wp-content/uploads/2025/02/595B8D96-7FF5-FEB7-5443-1D22AC6F4903-1.webp",
      "rating": "4.6",
      "reviews": 44,
      "description": "Celebrate the beauty of mountain wildflowers with four new Stamps. Each stamp in the block of four includes an the characteristics of each plant and reclassify them.",
      "variants": [
        {
          "sku": "STAMP-00-183-CN",
          "shippingFrom": "CN",
          "shippingDesc": "China Shipping (2-3 weeks)",
          "price": 5,
          "originalPrice": 19.99
        },
        {
          "sku": "STAMP-00-183-US",
          "shippingFrom": "US",
          "shippingDesc": "Local Shipping (3-5 days)",
          "price": 15,
          "originalPrice": 19.99
        }
      ]
    },
    {
      "id": 19216,
      "name": "Bonsai Trees Forever Stamps",
      "category": "Animals &amp; Nature, Forever Stamps 73$",
      "theme": "Commemorative",
      "postage": "Forever First-Class",
      "image": "https://discountstampdeal.com/wp-content/uploads/2025/02/81LLWgOkMCL._AC_SX679_.jpg",
      "rating": "4.6",
      "reviews": 40,
      "description": "Bonsai is an art form that stems from ancient, oriental culture and the art of the Bonsai is a rare form of beauty and craftsmanship which takes a lot of care and patience??\n&nbsp;",
      "variants": [
        {
          "sku": "STAMP-00-181-CN",
          "shippingFrom": "CN",
          "shippingDesc": "China Shipping (2-3 weeks)",
          "price": 5,
          "originalPrice": 19.99
        },
        {
          "sku": "STAMP-00-181-US",
          "shippingFrom": "US",
          "shippingDesc": "Local Shipping (3-5 days)",
          "price": 15,
          "originalPrice": 19.99
        }
      ]
    },
    {
      "id": 19268,
      "name": "Tulips Forever Stamps",
      "category": "Forever Stamps 73$, Fruits &amp; Flowers, Wedding",
      "theme": "Commemorative",
      "postage": "Forever First-Class",
      "image": "https://discountstampdeal.com/wp-content/uploads/2025/02/FA5865E5-A0BF-AE24-16F5-CA48E43AAE85.webp",
      "rating": "4.6",
      "reviews": 18,
      "description": "A perennial source of beauty on U.S. Stamps, flowers provoke a swirl of emotions that transcend words. This stamp offers a bright,cheerful panorama of tulips that are sure to evoke positive feelings as they appear by the millions on letters and cards",
      "variants": [
        {
          "sku": "STAMP-00-167-CN",
          "shippingFrom": "CN",
          "shippingDesc": "China Shipping (2-3 weeks)",
          "price": 5,
          "originalPrice": 19.99
        },
        {
          "sku": "STAMP-00-167-US",
          "shippingFrom": "US",
          "shippingDesc": "Local Shipping (3-5 days)",
          "price": 15,
          "originalPrice": 19.99
        }
      ]
    },
    {
      "id": 19269,
      "name": "Lunar New Year: Year of the Tiger Forever Stamps",
      "category": "Celebrations &amp; Thanks, Forever Stamps 73$",
      "theme": "Commemorative",
      "postage": "Forever First-Class",
      "image": "https://discountstampdeal.com/wp-content/uploads/2025/02/548B5DF4-FD32-1E71-0013-7EC3C15530A9.webp",
      "rating": "4.9",
      "reviews": 8,
      "description": "Utilizing orange as the predominant color ??characteristic of the markings of Bengal tigers and said to be one of the lucky colors for individuals born during the Year of the Tiger??the tiger mask in the stamp design incorporates elements with symbol",
      "variants": [
        {
          "sku": "STAMP-00-165-CN",
          "shippingFrom": "CN",
          "shippingDesc": "China Shipping (2-3 weeks)",
          "price": 5,
          "originalPrice": 19.99
        },
        {
          "sku": "STAMP-00-165-US",
          "shippingFrom": "US",
          "shippingDesc": "Local Shipping (3-5 days)",
          "price": 15,
          "originalPrice": 19.99
        }
      ]
    },
    {
      "id": 19270,
      "name": "Hip Hop Forever Stamps",
      "category": "Forever Stamps 73$, Sports",
      "theme": "Commemorative",
      "postage": "Forever First-Class",
      "image": "https://discountstampdeal.com/wp-content/uploads/2025/02/c-13.webp",
      "rating": "4.5",
      "reviews": 21,
      "description": "This pane of 20 Stamps features CadeMartin??s photographs depicting fourelements of hip hop: MCing (rapping), bboying (break dancing), DJing, and graffitiart.",
      "variants": [
        {
          "sku": "STAMP-00-163-CN",
          "shippingFrom": "CN",
          "shippingDesc": "China Shipping (2-3 weeks)",
          "price": 5,
          "originalPrice": 19.99
        },
        {
          "sku": "STAMP-00-163-US",
          "shippingFrom": "US",
          "shippingDesc": "Local Shipping (3-5 days)",
          "price": 15,
          "originalPrice": 19.99
        }
      ]
    },
    {
      "id": 19271,
      "name": "Diwali Forever Stamps",
      "category": "Commemorative, Forever Stamps 73$",
      "theme": "Commemorative",
      "postage": "Forever First-Class",
      "image": "https://discountstampdeal.com/wp-content/uploads/2025/02/B450444F-90A3-AE77-DCB5-4AD51FD76300.webp",
      "rating": "4.3",
      "reviews": 35,
      "description": "Celebrate the joyous festival of Diwali,which is also known as Deepavali. The Hindu holiday celebrates the triumph of good over evil.",
      "variants": [
        {
          "sku": "STAMP-00-161-CN",
          "shippingFrom": "CN",
          "shippingDesc": "China Shipping (2-3 weeks)",
          "price": 5,
          "originalPrice": 19.99
        },
        {
          "sku": "STAMP-00-161-US",
          "shippingFrom": "US",
          "shippingDesc": "Local Shipping (3-5 days)",
          "price": 15,
          "originalPrice": 19.99
        }
      ]
    },
    {
      "id": 19272,
      "name": "Global: African Daisy Forever Stamps",
      "category": "Fruits &amp; Flowers, International $1.55",
      "theme": "Commemorative",
      "postage": "International",
      "image": "https://discountstampdeal.com/wp-content/uploads/2025/02/41517B3B-8CB6-5A22-96E2-86BF5B10EE53.webp",
      "rating": "4.1",
      "reviews": 28,
      "description": "Colorful African Daisy graces a new Global stamp from the U.S. Postal Service. This round Global stamp can be used to mail a one-ounce letter to any country to which First-Class Mail\nInternational? service is available.",
      "variants": [
        {
          "sku": "STAMP-00-159-CN",
          "shippingFrom": "CN",
          "shippingDesc": "China Shipping (2-3 weeks)",
          "price": 5,
          "originalPrice": 39
        },
        {
          "sku": "STAMP-00-159-US",
          "shippingFrom": "US",
          "shippingDesc": "Local Shipping (3-5 days)",
          "price": 15,
          "originalPrice": 39
        }
      ]
    },
    {
      "id": 19273,
      "name": "Neon Celebrate Forever Stamps",
      "category": "Celebrations &amp; Thanks, Forever Stamps 73$",
      "theme": "Commemorative",
      "postage": "Forever First-Class",
      "image": "https://discountstampdeal.com/wp-content/uploads/2025/02/a-6.webp",
      "rating": "4.6",
      "reviews": 19,
      "description": "Good times call for good wishes, and the U.S. Postal Service gets in on the act with the Neon Celebrate! Forever stamp, first issued in 2011, and reissued in 2015. Bringing an extra wish for happiness to anyone celebrating a special time, this stamp ",
      "variants": [
        {
          "sku": "STAMP-00-157-CN",
          "shippingFrom": "CN",
          "shippingDesc": "China Shipping (2-3 weeks)",
          "price": 5,
          "originalPrice": 19.99
        },
        {
          "sku": "STAMP-00-157-US",
          "shippingFrom": "US",
          "shippingDesc": "Local Shipping (3-5 days)",
          "price": 15,
          "originalPrice": 19.99
        }
      ]
    },
    {
      "id": 19294,
      "name": "Winter Scenes Forever Stamps",
      "category": "Animals &amp; Nature, Forever Stamps 73$",
      "theme": "Commemorative",
      "postage": "Forever First-Class",
      "image": "https://discountstampdeal.com/wp-content/uploads/2025/02/5-2.jpg",
      "rating": "4.5",
      "reviews": 16,
      "description": "Winter Scenes celebrates the beauty and serenity of seasonal sights amid snowy landscapes. The ten different photographs featured in this booklet of 20 Stamps showcase the special allure of winter with iconic scenes from the northern part of the Unit",
      "variants": [
        {
          "sku": "STAMP-00-155-CN",
          "shippingFrom": "CN",
          "shippingDesc": "China Shipping (2-3 weeks)",
          "price": 5,
          "originalPrice": 19.99
        },
        {
          "sku": "STAMP-00-155-US",
          "shippingFrom": "US",
          "shippingDesc": "Local Shipping (3-5 days)",
          "price": 15,
          "originalPrice": 19.99
        }
      ]
    },
    {
      "id": 19295,
      "name": "Geometric Snowflakes Forever Stamps",
      "category": "Animals &amp; Nature, Forever Stamps 73$",
      "theme": "Commemorative",
      "postage": "Forever First-Class",
      "image": "https://discountstampdeal.com/wp-content/uploads/2025/02/a-4.webp",
      "rating": "4.6",
      "reviews": 32,
      "description": "Celebrate the joys of a winter snowfall with Geometric Snowflakes, four colorful new Stamps from the U.S. Postal Service. Each of the four Stamps depicts a different snowflake. When it snows, untold millions of ephemeral ice crystals form unique patt",
      "variants": [
        {
          "sku": "STAMP-00-153-CN",
          "shippingFrom": "CN",
          "shippingDesc": "China Shipping (2-3 weeks)",
          "price": 5,
          "originalPrice": 19.99
        },
        {
          "sku": "STAMP-00-153-US",
          "shippingFrom": "US",
          "shippingDesc": "Local Shipping (3-5 days)",
          "price": 15,
          "originalPrice": 19.99
        }
      ]
    },
    {
      "id": 19296,
      "name": "Sesame Street Forever Stamps",
      "category": "Forever Stamps 73$, Kids",
      "theme": "Commemorative",
      "postage": "Forever First-Class",
      "image": "https://discountstampdeal.com/wp-content/uploads/2025/02/a-5.webp",
      "rating": "4.6",
      "reviews": 45,
      "description": "These sheets of US postage Stamps honors 50th anniversary of Sesame Street, the influential and beloved children??s television show.\n&nbsp;",
      "variants": [
        {
          "sku": "STAMP-00-151-CN",
          "shippingFrom": "CN",
          "shippingDesc": "China Shipping (2-3 weeks)",
          "price": 5,
          "originalPrice": 25
        },
        {
          "sku": "STAMP-00-151-US",
          "shippingFrom": "US",
          "shippingDesc": "Local Shipping (3-5 days)",
          "price": 15,
          "originalPrice": 25
        }
      ]
    },
    {
      "id": 19298,
      "name": "Thank You Forever Stamps",
      "category": "Celebrations &amp; Thanks, Forever Stamps 73$",
      "theme": "Commemorative",
      "postage": "Forever First-Class",
      "image": "https://discountstampdeal.com/wp-content/uploads/2025/02/a-3.webp",
      "rating": "4.4",
      "reviews": 51,
      "description": "Two simple words can mean so much. Say ??thank you?? in style with four new Stamps.",
      "variants": [
        {
          "sku": "STAMP-00-147-CN",
          "shippingFrom": "CN",
          "shippingDesc": "China Shipping (2-3 weeks)",
          "price": 5,
          "originalPrice": 19.99
        },
        {
          "sku": "STAMP-00-147-US",
          "shippingFrom": "US",
          "shippingDesc": "Local Shipping (3-5 days)",
          "price": 15,
          "originalPrice": 19.99
        }
      ]
    },
    {
      "id": 19314,
      "name": "2022 Title IX Forever Stamps",
      "category": "Commemorative, Forever Stamps 73$",
      "theme": "Commemorative",
      "postage": "Forever First-Class",
      "image": "https://discountstampdeal.com/wp-content/uploads/2025/02/2-1-43.webp",
      "rating": "4.7",
      "reviews": 47,
      "description": "With these Stamps, the U.S. Postal Service commemorates the 50th anniversary of the passage of Title IX, a civil rights law prohibiting discrimination on the basis of sex from any educational program or activity receiving federal financial assistance",
      "variants": [
        {
          "sku": "STAMP-22-145-CN",
          "shippingFrom": "CN",
          "shippingDesc": "China Shipping (2-3 weeks)",
          "price": 5,
          "originalPrice": 19.99
        },
        {
          "sku": "STAMP-22-145-US",
          "shippingFrom": "US",
          "shippingDesc": "Local Shipping (3-5 days)",
          "price": 15,
          "originalPrice": 19.99
        }
      ]
    },
    {
      "id": 19315,
      "name": "2014 Winter Fun Forever Stamps",
      "category": "Forever Stamps 73$, Holiday, Kids",
      "theme": "Commemorative",
      "postage": "Forever First-Class",
      "image": "https://discountstampdeal.com/wp-content/uploads/2025/02/a-2.webp",
      "rating": "4.9",
      "reviews": 25,
      "description": "With four playful designs, Winter Fun Stamps celebrate some of the season??s most enjoyable activities: ice-skating, making snow angels, building snowmen, and bird-watching.",
      "variants": [
        {
          "sku": "STAMP-14-143-CN",
          "shippingFrom": "CN",
          "shippingDesc": "China Shipping (2-3 weeks)",
          "price": 5,
          "originalPrice": 19.99
        },
        {
          "sku": "STAMP-14-143-US",
          "shippingFrom": "US",
          "shippingDesc": "Local Shipping (3-5 days)",
          "price": 15,
          "originalPrice": 19.99
        }
      ]
    },
    {
      "id": 19316,
      "name": "Sun Science Forever Stamps",
      "category": "Forever Stamps 73$, Science &amp; Space",
      "theme": "Commemorative",
      "postage": "Forever First-Class",
      "image": "https://discountstampdeal.com/wp-content/uploads/2025/02/C6630A86-5737-63E6-0768-F4FEDB5689CD.webp",
      "rating": "4.3",
      "reviews": 43,
      "description": "One of the Stamps highlights sunspots, two feature images of coronal holes, two show coronal loops, two depict plasma blasts, one is a view of an active sun that emphasizes its magnetic fields, and two show different views of a solar flare.",
      "variants": [
        {
          "sku": "STAMP-00-141-CN",
          "shippingFrom": "CN",
          "shippingDesc": "China Shipping (2-3 weeks)",
          "price": 5,
          "originalPrice": 19.99
        },
        {
          "sku": "STAMP-00-141-US",
          "shippingFrom": "US",
          "shippingDesc": "Local Shipping (3-5 days)",
          "price": 15,
          "originalPrice": 19.99
        }
      ]
    },
    {
      "id": 19317,
      "name": "Save Vanishing Species Forever Stamps",
      "category": "Fundraising, Semipostal 85$",
      "theme": "Commemorative",
      "postage": "Forever First-Class",
      "image": "https://discountstampdeal.com/wp-content/uploads/2025/02/8EAADD86-4D05-3250-FDBF-C74951A427CA.webp",
      "rating": "4.1",
      "reviews": 9,
      "description": "This is the Save Vanishing Species stamp &#8211; featuring an Amur tiger cub graphic, one of the magnificent animals this stamp is designed to help.\n&nbsp;",
      "variants": [
        {
          "sku": "STAMP-00-139-CN",
          "shippingFrom": "CN",
          "shippingDesc": "China Shipping (2-3 weeks)",
          "price": 5,
          "originalPrice": 29
        },
        {
          "sku": "STAMP-00-139-US",
          "shippingFrom": "US",
          "shippingDesc": "Local Shipping (3-5 days)",
          "price": 15,
          "originalPrice": 29
        }
      ]
    },
    {
      "id": 19341,
      "name": "Wild and Scenic Rivers Forever Stamps",
      "category": "Animals &amp; Nature, Forever Stamps 73$",
      "theme": "Commemorative",
      "postage": "Forever First-Class",
      "image": "https://discountstampdeal.com/wp-content/uploads/2025/02/C1E187D9-DC5B-953E-BC22-64C1067EF298.webp",
      "rating": "4.3",
      "reviews": 7,
      "description": "The pane of a dozen different designs features a portfolio of photographs that beautifully represent the more than 200 rivers or river segments designated within the Wild and Scenic Rivers System. Art Director Derry Noyes designed the pane using exis",
      "variants": [
        {
          "sku": "STAMP-00-137-CN",
          "shippingFrom": "CN",
          "shippingDesc": "China Shipping (2-3 weeks)",
          "price": 5,
          "originalPrice": 30
        },
        {
          "sku": "STAMP-00-137-US",
          "shippingFrom": "US",
          "shippingDesc": "Local Shipping (3-5 days)",
          "price": 15,
          "originalPrice": 30
        }
      ]
    },
    {
      "id": 19344,
      "name": "2021 Heritage Breeds Forever Stamps",
      "category": "Animals &amp; Nature, Forever Stamps 73$",
      "theme": "Commemorative",
      "postage": "Forever First-Class",
      "image": "https://discountstampdeal.com/wp-content/uploads/2025/02/9FBE47F7-99B3-E04D-0539-083331B1A0F1.webp",
      "rating": "4.7",
      "reviews": 34,
      "description": "The pane of 20 Stamps includes photographs of 10 heritage breeds: the Mulefoot hog, the Wyandotte chicken, the Milking Devon cow, the Narragansett turkey, the American Mammoth Jackstock donkey, (second row) the Cotton Patch goose, the San Clemente Is",
      "variants": [
        {
          "sku": "STAMP-21-131-CN",
          "shippingFrom": "CN",
          "shippingDesc": "China Shipping (2-3 weeks)",
          "price": 5,
          "originalPrice": 19.99
        },
        {
          "sku": "STAMP-21-131-US",
          "shippingFrom": "US",
          "shippingDesc": "Local Shipping (3-5 days)",
          "price": 15,
          "originalPrice": 19.99
        }
      ]
    },
    {
      "id": 19345,
      "name": "$28.75 Great Smoky Mountains Forever Stamps",
      "category": "Animals &amp; Nature, Priority Mail Express",
      "theme": "Commemorative",
      "postage": "Forever First-Class",
      "image": "https://discountstampdeal.com/wp-content/uploads/2025/02/BF4A54E6-A2D0-DCC5-FE28-2BA778F8DA7A.webp",
      "rating": "4.5",
      "reviews": 19,
      "description": "The new Priority Mail Express? stamp celebrates the beauty of the Great Smoky Mountains. The Smokies are home to extensive national lands and a vast array of native plants and animals. The stamp art captures an iconic mountain scene located near Newf",
      "variants": [
        {
          "sku": "STAMP-00-129-CN",
          "shippingFrom": "CN",
          "shippingDesc": "China Shipping (2-3 weeks)",
          "price": 5,
          "originalPrice": 46
        },
        {
          "sku": "STAMP-00-129-US",
          "shippingFrom": "US",
          "shippingDesc": "Local Shipping (3-5 days)",
          "price": 15,
          "originalPrice": 46
        }
      ]
    },
    {
      "id": 19346,
      "name": "Elephants Forever Stamps",
      "category": "Animals &amp; Nature, Forever Stamps 73$",
      "theme": "Commemorative",
      "postage": "Forever First-Class",
      "image": "https://discountstampdeal.com/wp-content/uploads/2025/02/44742679-2958-5BD2-37B4-9C345CC2E40B.webp",
      "rating": "4.8",
      "reviews": 20,
      "description": "Americans have been intrigued by Elephants since the first one arrived on our shores in 1796. The cute and fun stamp from the U.S. Postal Service celebrates the affection and ever-evolving connection between humans and elephants.",
      "variants": [
        {
          "sku": "STAMP-00-127-CN",
          "shippingFrom": "CN",
          "shippingDesc": "China Shipping (2-3 weeks)",
          "price": 5,
          "originalPrice": 19.99
        },
        {
          "sku": "STAMP-00-127-US",
          "shippingFrom": "US",
          "shippingDesc": "Local Shipping (3-5 days)",
          "price": 15,
          "originalPrice": 19.99
        }
      ]
    },
    {
      "id": 19371,
      "name": "$9.65 Florida Everglades Forever Stamps",
      "category": "Animals &amp; Nature, Priority Mail",
      "theme": "Commemorative",
      "postage": "Forever First-Class",
      "image": "https://discountstampdeal.com/wp-content/uploads/2025/02/USA-5751.webp",
      "rating": "4.7",
      "reviews": 41,
      "description": "With this Priority Mail? stamp, the U.S. Postal Service celebrates the Florida Everglades. Spanning some 2 million acres in southern Florida, from Lake Okeechobee to Florida Bay, the Everglades is one of the largest wetlands in the world and the most",
      "variants": [
        {
          "sku": "STAMP-00-125-CN",
          "shippingFrom": "CN",
          "shippingDesc": "China Shipping (2-3 weeks)",
          "price": 5,
          "originalPrice": 23
        },
        {
          "sku": "STAMP-00-125-US",
          "shippingFrom": "US",
          "shippingDesc": "Local Shipping (3-5 days)",
          "price": 15,
          "originalPrice": 23
        }
      ]
    },
    {
      "id": 19373,
      "name": "The Mighty Mississippi River Forever Stamps",
      "category": "Animals &amp; Nature, Forever Stamps 73$, History &amp; Heritage",
      "theme": "Commemorative",
      "postage": "Forever First-Class",
      "image": "https://discountstampdeal.com/wp-content/uploads/2025/02/a-1.webp",
      "rating": "4.9",
      "reviews": 49,
      "description": "The Mississippi River is at the core of the nation??s heritage and is variously referred to as America??s backbone, its heart, and its soul. This issuance honors the Mighty Mississippi with a portfolio of ten exquisite photographic Stamps, each repre",
      "variants": [
        {
          "sku": "STAMP-00-121-CN",
          "shippingFrom": "CN",
          "shippingDesc": "China Shipping (2-3 weeks)",
          "price": 5,
          "originalPrice": 27
        },
        {
          "sku": "STAMP-00-121-US",
          "shippingFrom": "US",
          "shippingDesc": "Local Shipping (3-5 days)",
          "price": 15,
          "originalPrice": 27
        }
      ]
    },
    {
      "id": 19375,
      "name": "Santa and Sleigh Forever Stamps",
      "category": "Forever Stamps 73$, Holiday, Kids",
      "theme": "Commemorative",
      "postage": "Forever First-Class",
      "image": "https://discountstampdeal.com/wp-content/uploads/2025/02/1-12.webp",
      "rating": "4.5",
      "reviews": 41,
      "description": "The U.S. Postal Service??s? holiday Stamps for 2012 fea-ture a ??classic?? image of Santa and his reindeer circling around snow-covered rooftops. The scene is composed of four different stamp designs in two rows of two Stamps each. Art director Howar",
      "variants": [
        {
          "sku": "STAMP-00-117-CN",
          "shippingFrom": "CN",
          "shippingDesc": "China Shipping (2-3 weeks)",
          "price": 5,
          "originalPrice": 19.99
        },
        {
          "sku": "STAMP-00-117-US",
          "shippingFrom": "US",
          "shippingDesc": "Local Shipping (3-5 days)",
          "price": 15,
          "originalPrice": 19.99
        }
      ]
    },
    {
      "id": 19400,
      "name": "Railroad Stations Forever Stamps",
      "category": "Forever Stamps 73$, History &amp; Heritage",
      "theme": "Commemorative",
      "postage": "Forever First-Class",
      "image": "https://discountstampdeal.com/wp-content/uploads/2025/02/F32C9A5C-902D-ED43-3F5C-AE1705AA3148.webp",
      "rating": "4.2",
      "reviews": 51,
      "description": "Noteworthy railroad stations began brightening the American landscape by the 1870s and, although many fell to the wrecking ball once they had outlived their original purpose, hundreds survived. This issuance of five different Stamps features five arc",
      "variants": [
        {
          "sku": "STAMP-00-113-CN",
          "shippingFrom": "CN",
          "shippingDesc": "China Shipping (2-3 weeks)",
          "price": 5,
          "originalPrice": 19.99
        },
        {
          "sku": "STAMP-00-113-US",
          "shippingFrom": "US",
          "shippingDesc": "Local Shipping (3-5 days)",
          "price": 15,
          "originalPrice": 19.99
        }
      ]
    },
    {
      "id": 19401,
      "name": "Botanical Art Forever Stamps",
      "category": "Forever Stamps 73$, Fruits &amp; Flowers, Wedding",
      "theme": "Commemorative",
      "postage": "Forever First-Class",
      "image": "https://discountstampdeal.com/wp-content/uploads/2025/02/70008152-6E75-D223-36B3-0E11DDDF8B9D.webp",
      "rating": "4.1",
      "reviews": 39,
      "description": "These colorful issues feature eight types of flowers:? Corn lilies, tulips, dahlias, stocks, roses, Japanese irises, petunias, daffodils, and jonquils.",
      "variants": [
        {
          "sku": "STAMP-00-111-CN",
          "shippingFrom": "CN",
          "shippingDesc": "China Shipping (2-3 weeks)",
          "price": 5,
          "originalPrice": 19.99
        },
        {
          "sku": "STAMP-00-111-US",
          "shippingFrom": "US",
          "shippingDesc": "Local Shipping (3-5 days)",
          "price": 15,
          "originalPrice": 19.99
        }
      ]
    },
    {
      "id": 19402,
      "name": "Tomie dePaola Forever Stamps",
      "category": "Commemorative, Forever Stamps 73$, Kids",
      "theme": "Commemorative",
      "postage": "Forever First-Class",
      "image": "https://discountstampdeal.com/wp-content/uploads/2025/02/313F6559-F13E-6B36-EC3F-70DCCEB6F022.webp",
      "rating": "4.2",
      "reviews": 44,
      "description": "The Forever stamp depicts the &#8220;Grandma witch&#8221; with her magic pasta pot. Published in 1975, &#8220;Strega Nona&#8221; is a Caldecott Honor book and was voted one of the &#8220;Top 100 Picture Books&#8221; by the School Library Journal.",
      "variants": [
        {
          "sku": "STAMP-00-109-CN",
          "shippingFrom": "CN",
          "shippingDesc": "China Shipping (2-3 weeks)",
          "price": 5,
          "originalPrice": 19.99
        },
        {
          "sku": "STAMP-00-109-US",
          "shippingFrom": "US",
          "shippingDesc": "Local Shipping (3-5 days)",
          "price": 15,
          "originalPrice": 19.99
        }
      ]
    },
    {
      "id": 19403,
      "name": "Chief Standing Bear Forever Stamps",
      "category": "Forever Stamps 73$, People",
      "theme": "Commemorative",
      "postage": "Forever First-Class",
      "image": "https://discountstampdeal.com/wp-content/uploads/2025/02/AC5C9D81-16F6-0605-1743-B92ACED1E665.webp",
      "rating": "4.3",
      "reviews": 12,
      "description": "The stamp features a portrait of Chief Standing Bear by Thomas Blackshear II based on a black-and-white photograph taken of Standing Bear in 1877 while he was in Washington, D.C., as part of a delegation of Ponca chiefs. For the color of his attire, ",
      "variants": [
        {
          "sku": "STAMP-00-107-CN",
          "shippingFrom": "CN",
          "shippingDesc": "China Shipping (2-3 weeks)",
          "price": 5,
          "originalPrice": 19.99
        },
        {
          "sku": "STAMP-00-107-US",
          "shippingFrom": "US",
          "shippingDesc": "Local Shipping (3-5 days)",
          "price": 15,
          "originalPrice": 19.99
        }
      ]
    },
    {
      "id": 19404,
      "name": "Roy Lichtenstein Forever Stamps",
      "category": "Commemorative, Forever Stamps 73$",
      "theme": "Commemorative",
      "postage": "Forever First-Class",
      "image": "https://discountstampdeal.com/wp-content/uploads/2025/02/1EA26665-C95B-16E4-2E63-808A49698DAD.webp",
      "rating": "4.8",
      "reviews": 15,
      "description": "With these eye-catching new Stamps, the U.S. Postal Service honors Roy Lichtenstein (1923?C1997), the iconic American artist of the pop art movement. This genre, which arose in the late 1950s and reached its height in the 1960s, looked to popular cul",
      "variants": [
        {
          "sku": "STAMP-00-105-CN",
          "shippingFrom": "CN",
          "shippingDesc": "China Shipping (2-3 weeks)",
          "price": 5,
          "originalPrice": 19.99
        },
        {
          "sku": "STAMP-00-105-US",
          "shippingFrom": "US",
          "shippingDesc": "Local Shipping (3-5 days)",
          "price": 15,
          "originalPrice": 19.99
        }
      ]
    },
    {
      "id": 19405,
      "name": "Jack-O&#8217;-Lanterns Forever Stamps",
      "category": "Celebrations &amp; Thanks, Forever Stamps 73$, Holiday",
      "theme": "Commemorative",
      "postage": "Forever First-Class",
      "image": "https://discountstampdeal.com/wp-content/uploads/2025/02/1-11.webp",
      "rating": "4.9",
      "reviews": 48,
      "description": "The sheet of 20 Stamps features four different photographs of jack-o??-lanterns. The jack-o??-lanterns were carved by Paul Montanari and photographed by Sally Andersen-Bruce. The Stamps were designed by art director Derry Noyes.",
      "variants": [
        {
          "sku": "STAMP-00-103-CN",
          "shippingFrom": "CN",
          "shippingDesc": "China Shipping (2-3 weeks)",
          "price": 5,
          "originalPrice": 19.99
        },
        {
          "sku": "STAMP-00-103-US",
          "shippingFrom": "US",
          "shippingDesc": "Local Shipping (3-5 days)",
          "price": 15,
          "originalPrice": 19.99
        }
      ]
    },
    {
      "id": 19427,
      "name": "Waterfalls Forever Stamps",
      "category": "Animals &amp; Nature, Forever Stamps 73$",
      "theme": "Commemorative",
      "postage": "Forever First-Class",
      "image": "https://discountstampdeal.com/wp-content/uploads/2025/02/7DB1B1CB-348C-9E95-0B1F-87B6AC4BD3CB.webp",
      "rating": "4.7",
      "reviews": 39,
      "description": "Among nature??s most beautiful wonders, waterfalls come in all shapes and sizes, from serene cascades to mighty cataracts. The U.S. Postal Service celebrates the variety and beauty of\nAmerican waterfalls with 12 new Stamps.",
      "variants": [
        {
          "sku": "STAMP-00-101-CN",
          "shippingFrom": "CN",
          "shippingDesc": "China Shipping (2-3 weeks)",
          "price": 5,
          "originalPrice": 30
        },
        {
          "sku": "STAMP-00-101-US",
          "shippingFrom": "US",
          "shippingDesc": "Local Shipping (3-5 days)",
          "price": 15,
          "originalPrice": 30
        }
      ]
    },
    {
      "id": 19428,
      "name": "The Holy Family Forever Stamps",
      "category": "Forever Stamps 73$, Holiday",
      "theme": "Commemorative",
      "postage": "Forever First-Class",
      "image": "https://discountstampdeal.com/wp-content/uploads/2025/02/1_2-1.webp",
      "rating": "4.5",
      "reviews": 44,
      "description": "The dramatic story of the flight of the Holy Family into Egypt has been depicted in art and music for centuries.The story travels on millions of Forever Stamps with the U.S. Postal Service??s issuance of the Holy Family stamp as the nation prepares f",
      "variants": [
        {
          "sku": "STAMP-00-199-CN",
          "shippingFrom": "CN",
          "shippingDesc": "China Shipping (2-3 weeks)",
          "price": 5,
          "originalPrice": 19.99
        },
        {
          "sku": "STAMP-00-199-US",
          "shippingFrom": "US",
          "shippingDesc": "Local Shipping (3-5 days)",
          "price": 15,
          "originalPrice": 19.99
        }
      ]
    },
    {
      "id": 19429,
      "name": "Endangered Species Forever Stamps",
      "category": "Animals &amp; Nature, Forever Stamps 73$",
      "theme": "Commemorative",
      "postage": "Forever First-Class",
      "image": "https://discountstampdeal.com/wp-content/uploads/2025/02/34AD04A8-AF67-9953-8203-D93E4C8CAEAF.webp",
      "rating": "4.2",
      "reviews": 17,
      "description": "Under the Endangered Species Act, which marks its 50th anniversary in 2023, more than 1,600 imperiled plant and animal species are safeguarded to increase their chances of survival. With this pane of 20 Stamps, the U.S. Postal Service? presents a pho",
      "variants": [
        {
          "sku": "STAMP-00-197-CN",
          "shippingFrom": "CN",
          "shippingDesc": "China Shipping (2-3 weeks)",
          "price": 5,
          "originalPrice": 19.99
        },
        {
          "sku": "STAMP-00-197-US",
          "shippingFrom": "US",
          "shippingDesc": "Local Shipping (3-5 days)",
          "price": 15,
          "originalPrice": 19.99
        }
      ]
    },
    {
      "id": 19430,
      "name": "First Moon Landing Forever Forever Stamps",
      "category": "Forever Stamps 73$, Science &amp; Space",
      "theme": "Commemorative",
      "postage": "Forever First-Class",
      "image": "https://discountstampdeal.com/wp-content/uploads/2025/02/1-10.webp",
      "rating": "4.4",
      "reviews": 8,
      "description": "The U.S. Postal Service is celebrating the 50th anniversary of Apollo 11 and man??s first steps on the Moon with two Forever Stamps.",
      "variants": [
        {
          "sku": "STAMP-00-195-CN",
          "shippingFrom": "CN",
          "shippingDesc": "China Shipping (2-3 weeks)",
          "price": 5,
          "originalPrice": 19.99
        },
        {
          "sku": "STAMP-00-195-US",
          "shippingFrom": "US",
          "shippingDesc": "Local Shipping (3-5 days)",
          "price": 15,
          "originalPrice": 19.99
        }
      ]
    },
    {
      "id": 19431,
      "name": "Let&#8217;s Celebrate! Forever Stamps",
      "category": "Celebrations &amp; Thanks, Forever Stamps 73$",
      "theme": "Commemorative",
      "postage": "Forever First-Class",
      "image": "https://discountstampdeal.com/wp-content/uploads/2025/02/2B782682-E901-0001-10F1-E6C409B4CBA5.webp",
      "rating": "4.4",
      "reviews": 27,
      "description": "This new Celebrate stamp will help send cheer to those deserving of well wishes, no matter the occasion. Whether celebrating a birthday or anniversary, a new job or retirement, this stamp is sure to keep the good times rolling.",
      "variants": [
        {
          "sku": "STAMP-00-193-CN",
          "shippingFrom": "CN",
          "shippingDesc": "China Shipping (2-3 weeks)",
          "price": 5,
          "originalPrice": 19.99
        },
        {
          "sku": "STAMP-00-193-US",
          "shippingFrom": "US",
          "shippingDesc": "Local Shipping (3-5 days)",
          "price": 15,
          "originalPrice": 19.99
        }
      ]
    },
    {
      "id": 19453,
      "name": "Western Wear Forever Stamps",
      "category": "Forever Stamps 73$, History &amp; Heritage",
      "theme": "Commemorative",
      "postage": "Forever First-Class",
      "image": "https://discountstampdeal.com/wp-content/uploads/2025/02/DBBAD352-47C2-40EE-7280-46DEE9022FBE.webp",
      "rating": "4.9",
      "reviews": 48,
      "description": "The U.S. Postal Service celebrates the enduring legacy of Western wear with four fun new Forever? Stamps. Inspired by the clothing and gear used by working ranchers and reimagined in fun and fanciful ways, the garments and accessories of the West com",
      "variants": [
        {
          "sku": "STAMP-00-189-CN",
          "shippingFrom": "CN",
          "shippingDesc": "China Shipping (2-3 weeks)",
          "price": 5,
          "originalPrice": 19.99
        },
        {
          "sku": "STAMP-00-189-US",
          "shippingFrom": "US",
          "shippingDesc": "Local Shipping (3-5 days)",
          "price": 15,
          "originalPrice": 19.99
        }
      ]
    },
    {
      "id": 19454,
      "name": "Pony Cars Forever Stamps",
      "category": "Commemorative, Forever Stamps 73$, Sports",
      "theme": "Commemorative",
      "postage": "Forever First-Class",
      "image": "https://discountstampdeal.com/wp-content/uploads/2025/02/1_-1.webp",
      "rating": "4.0",
      "reviews": 39,
      "description": "These Stamps celebrate five iconic U.S. automobiles??the 1969 Ford Mustang Boss 302, the 1970 Dodge Challenger R/T, the 1969 Chevrolet Camaro Z/28, the 1967 Mercury Cougar XR-7 GT, and the 1969 AMC Javelin SST. Painted using oil paint on panels, the ",
      "variants": [
        {
          "sku": "STAMP-00-187-CN",
          "shippingFrom": "CN",
          "shippingDesc": "China Shipping (2-3 weeks)",
          "price": 5,
          "originalPrice": 19.99
        },
        {
          "sku": "STAMP-00-187-US",
          "shippingFrom": "US",
          "shippingDesc": "Local Shipping (3-5 days)",
          "price": 15,
          "originalPrice": 19.99
        }
      ]
    },
    {
      "id": 19455,
      "name": "Women&#8217;s Soccer Forever Stamps",
      "category": "Forever Stamps 73$, Sports",
      "theme": "Commemorative",
      "postage": "Forever First-Class",
      "image": "https://discountstampdeal.com/wp-content/uploads/2025/02/1_.webp",
      "rating": "4.5",
      "reviews": 40,
      "description": "This new Forever? stamp celebrates women??s soccer in the United States. From youth leagues to the elite world champion U.S. national team, millions of girls and women throughout the country participate in the fast-paced, competitive sport of soccer.",
      "variants": [
        {
          "sku": "STAMP-00-185-CN",
          "shippingFrom": "CN",
          "shippingDesc": "China Shipping (2-3 weeks)",
          "price": 5,
          "originalPrice": 19.99
        },
        {
          "sku": "STAMP-00-185-US",
          "shippingFrom": "US",
          "shippingDesc": "Local Shipping (3-5 days)",
          "price": 15,
          "originalPrice": 19.99
        }
      ]
    },
    {
      "id": 19456,
      "name": "Ernest J. Gaines Forever Stamps",
      "category": "Forever Stamps 73$, People",
      "theme": "Commemorative",
      "postage": "Forever First-Class",
      "image": "https://discountstampdeal.com/wp-content/uploads/2025/02/1_.jpg",
      "rating": "4.4",
      "reviews": 37,
      "description": "The 46th stamp in the Black Heritage series honors author Ernest J. Gaines (1933?C2019). Best known for such novels as The Autobiography of Miss Jane Pittman and A Lesson Before Dying, Gaines drew from his childhood as the son of sharecroppers on a L",
      "variants": [
        {
          "sku": "STAMP-00-183-CN",
          "shippingFrom": "CN",
          "shippingDesc": "China Shipping (2-3 weeks)",
          "price": 5,
          "originalPrice": 19.99
        },
        {
          "sku": "STAMP-00-183-US",
          "shippingFrom": "US",
          "shippingDesc": "Local Shipping (3-5 days)",
          "price": 15,
          "originalPrice": 19.99
        }
      ]
    },
    {
      "id": 19457,
      "name": "Snowy Beauty Forever Stamps",
      "category": "Forever Stamps 73$, Fruits &amp; Flowers, Love, Wedding",
      "theme": "Commemorative",
      "postage": "Forever First-Class",
      "image": "https://discountstampdeal.com/wp-content/uploads/2025/02/68EC0E3C-82E1-8F92-3BDE-2B1EE977EE66.webp",
      "rating": "4.0",
      "reviews": 35,
      "description": "Snowy Beauty celebrates the unexpected beauty of flowers in snow. Ten stamp designs, painted in oils on panel, feature ten different plants: camellia, crocus, hellebore, winterberry, pansy, plum blossom, grape hyacinth, daffodil, ranunculus, and wint",
      "variants": [
        {
          "sku": "STAMP-00-181-CN",
          "shippingFrom": "CN",
          "shippingDesc": "China Shipping (2-3 weeks)",
          "price": 5,
          "originalPrice": 19.99
        },
        {
          "sku": "STAMP-00-181-US",
          "shippingFrom": "US",
          "shippingDesc": "Local Shipping (3-5 days)",
          "price": 15,
          "originalPrice": 19.99
        }
      ]
    },
    {
      "id": 19487,
      "name": "Sailboats Postcard Forever Stamps",
      "category": "Animals &amp; Nature, Celebrations &amp; Thanks, Holiday, Postcard 53$",
      "theme": "Commemorative",
      "postage": "Postcard",
      "image": "https://discountstampdeal.com/wp-content/uploads/2025/02/1_2.webp",
      "rating": "4.7",
      "reviews": 38,
      "description": "??Let??s go sailing!?? The U.S. Postal Servicecelebrates a favorite outdoor activity with two colorful postcard Stamps. Illustrator Libby VanderPloeg grew up in Grand Haven, MI, a little harbor town on Lake Michigan, so sailboats were always dotting ",
      "variants": [
        {
          "sku": "STAMP-00-175-CN",
          "shippingFrom": "CN",
          "shippingDesc": "China Shipping (2-3 weeks)",
          "price": 5,
          "originalPrice": 24
        },
        {
          "sku": "STAMP-00-175-US",
          "shippingFrom": "US",
          "shippingDesc": "Local Shipping (3-5 days)",
          "price": 15,
          "originalPrice": 24
        }
      ]
    },
    {
      "id": 19488,
      "name": "Lunar New Year: Year of the Rabbit Forever Stamps",
      "category": "Celebrations &amp; Thanks, Forever Stamps 73$",
      "theme": "Commemorative",
      "postage": "Forever First-Class",
      "image": "https://discountstampdeal.com/wp-content/uploads/2025/02/C89C6858-9A09-EF41-7C8F-5A4B7EE206D4.webp",
      "rating": "4.7",
      "reviews": 28,
      "description": "In 2023, the U.S. Postal Service issues the fourth of 12 Stamps in the latest Lunar New Year series. The Year of the Rabbit begins January 22, 2023, and ends on February 9, 2024.\nUtilizing red, pink, and purple as the predominant colors??said to be l",
      "variants": [
        {
          "sku": "STAMP-00-173-CN",
          "shippingFrom": "CN",
          "shippingDesc": "China Shipping (2-3 weeks)",
          "price": 5,
          "originalPrice": 19.99
        },
        {
          "sku": "STAMP-00-173-US",
          "shippingFrom": "US",
          "shippingDesc": "Local Shipping (3-5 days)",
          "price": 15,
          "originalPrice": 19.99
        }
      ]
    },
    {
      "id": 19489,
      "name": "Art of the Skateboard Forever Stamps",
      "category": "Forever Stamps 73$, Sports",
      "theme": "Commemorative",
      "postage": "Forever First-Class",
      "image": "https://discountstampdeal.com/wp-content/uploads/2025/02/D96D07B9-C634-695B-1359-B0914B795ECF.webp",
      "rating": "4.5",
      "reviews": 50,
      "description": "The bold artwork emblazoned on a skateboard deck is often as eye-catching and individualistic as a skater&#8217;s most breathtaking moves.These four Stamps celebrate the Art of the Skateboard with vibrant designs that capture skateboarding&#8217;s ex",
      "variants": [
        {
          "sku": "STAMP-00-171-CN",
          "shippingFrom": "CN",
          "shippingDesc": "China Shipping (2-3 weeks)",
          "price": 5,
          "originalPrice": 19.99
        },
        {
          "sku": "STAMP-00-171-US",
          "shippingFrom": "US",
          "shippingDesc": "Local Shipping (3-5 days)",
          "price": 15,
          "originalPrice": 19.99
        }
      ]
    },
    {
      "id": 19490,
      "name": "Mariachi Forever Stamps",
      "category": "Forever Stamps 73$, People",
      "theme": "Commemorative",
      "postage": "Forever First-Class",
      "image": "https://discountstampdeal.com/wp-content/uploads/2025/02/A76F8A43-3D2F-34AC-BAA4-DF9115098B36.webp",
      "rating": "4.5",
      "reviews": 53,
      "description": "Each of the five new Stamps features a musician dressed in traje de charro,the traditional outfit of mariachi performers,playing one of five iconic mariachi instrments:guitar,guitarron,vihuela,violin,and trumpet. The geometric shapes in the backgroun",
      "variants": [
        {
          "sku": "STAMP-00-169-CN",
          "shippingFrom": "CN",
          "shippingDesc": "China Shipping (2-3 weeks)",
          "price": 5,
          "originalPrice": 19.99
        },
        {
          "sku": "STAMP-00-169-US",
          "shippingFrom": "US",
          "shippingDesc": "Local Shipping (3-5 days)",
          "price": 15,
          "originalPrice": 19.99
        }
      ]
    },
    {
      "id": 19491,
      "name": "Nancy Reagan Forever Stamps",
      "category": "Forever Stamps 73$, People",
      "theme": "Commemorative",
      "postage": "Forever First-Class",
      "image": "https://discountstampdeal.com/wp-content/uploads/2025/02/68D4A0AA-35FA-1FA5-371A-B595DDA42E45.webp",
      "rating": "5.0",
      "reviews": 35,
      "description": "This new stamp from the U.S. Postal Service commemorates Nancy Reagan(1921-2016),wife of the 40th president,Ronald Reagan,and first lady of the United States from 1981 to 1989.Her husband&#8217;s most trusted advisor and champion,she was an important",
      "variants": [
        {
          "sku": "STAMP-00-167-CN",
          "shippingFrom": "CN",
          "shippingDesc": "China Shipping (2-3 weeks)",
          "price": 5,
          "originalPrice": 19.99
        },
        {
          "sku": "STAMP-00-167-US",
          "shippingFrom": "US",
          "shippingDesc": "Local Shipping (3-5 days)",
          "price": 15,
          "originalPrice": 19.99
        }
      ]
    },
    {
      "id": 19520,
      "name": "Eugenie Clark Forever Stamps",
      "category": "Forever Stamps 73$, People",
      "theme": "Commemorative",
      "postage": "Forever First-Class",
      "image": "https://discountstampdeal.com/wp-content/uploads/2025/02/C4F4F0E9-F039-0CC7-3DEC-5EB750E938C9.webp",
      "rating": "4.4",
      "reviews": 52,
      "description": "The U.S. Postal Service honors pioneering marine biologist Eugenie Clark(1922-2015) with the release of a new commemorative stamp.Affectionately known as the &#8220;Shark Lady&#8221;,Clark conducted many important studies that provided fascinating in",
      "variants": [
        {
          "sku": "STAMP-00-165-CN",
          "shippingFrom": "CN",
          "shippingDesc": "China Shipping (2-3 weeks)",
          "price": 5,
          "originalPrice": 19.99
        },
        {
          "sku": "STAMP-00-165-US",
          "shippingFrom": "US",
          "shippingDesc": "Local Shipping (3-5 days)",
          "price": 15,
          "originalPrice": 19.99
        }
      ]
    },
    {
      "id": 19521,
      "name": "Charles M. Schulz Forever Stamps",
      "category": "Forever Stamps 73$, Kids",
      "theme": "Commemorative",
      "postage": "Forever First-Class",
      "image": "https://discountstampdeal.com/wp-content/uploads/2025/02/2-1-13.webp",
      "rating": "4.2",
      "reviews": 18,
      "description": "Ten different stamp designs showcase Charlie Brown, Snoopy,and other unforgettable friends from the most successful comic strip in the history of the medium.Bright colors and whimsical drawings bring to life the magic of the &#8220;Peanuts&#8221; gan",
      "variants": [
        {
          "sku": "STAMP-00-163-CN",
          "shippingFrom": "CN",
          "shippingDesc": "China Shipping (2-3 weeks)",
          "price": 5,
          "originalPrice": 19.99
        },
        {
          "sku": "STAMP-00-163-US",
          "shippingFrom": "US",
          "shippingDesc": "Local Shipping (3-5 days)",
          "price": 15,
          "originalPrice": 19.99
        }
      ]
    },
    {
      "id": 19522,
      "name": "Shel Silverstein Forever Stamps",
      "category": "Forever Stamps 73$, Kids",
      "theme": "Commemorative",
      "postage": "Forever First-Class",
      "image": "https://discountstampdeal.com/wp-content/uploads/2025/02/43C05443-6D8B-C261-ED26-C6DF7E7517E9.webp",
      "rating": "4.2",
      "reviews": 25,
      "description": "Shel Silverstein(September 25, 1930-May 10,1999) was one of America&#8217;s most well-known children&#8217;s authors.However,he did much more than that.He was also an accomplished illustrator,songwriter,and more.",
      "variants": [
        {
          "sku": "STAMP-00-161-CN",
          "shippingFrom": "CN",
          "shippingDesc": "China Shipping (2-3 weeks)",
          "price": 5,
          "originalPrice": 19.99
        },
        {
          "sku": "STAMP-00-161-US",
          "shippingFrom": "US",
          "shippingDesc": "Local Shipping (3-5 days)",
          "price": 15,
          "originalPrice": 19.99
        }
      ]
    },
    {
      "id": 19523,
      "name": "Scooby-Doo Forever Stamps",
      "category": "Forever Stamps 73$, Kids",
      "theme": "Commemorative",
      "postage": "Forever First-Class",
      "image": "https://discountstampdeal.com/wp-content/uploads/2025/02/1-7.webp",
      "rating": "4.9",
      "reviews": 22,
      "description": "Scooby-Doo is one of the most beloved cartoon characters of all time.First appearing in 1969,the iconic brown and black great dane has been solving mysteries and capturing hearts ever since.",
      "variants": [
        {
          "sku": "STAMP-00-159-CN",
          "shippingFrom": "CN",
          "shippingDesc": "China Shipping (2-3 weeks)",
          "price": 5,
          "originalPrice": 30
        },
        {
          "sku": "STAMP-00-159-US",
          "shippingFrom": "US",
          "shippingDesc": "Local Shipping (3-5 days)",
          "price": 15,
          "originalPrice": 30
        }
      ]
    },
    {
      "id": 19525,
      "name": "Message Monsters Forever Stamps",
      "category": "Forever Stamps 73$, Kids",
      "theme": "Commemorative",
      "postage": "Forever First-Class",
      "image": "https://discountstampdeal.com/wp-content/uploads/2025/02/E27D2126-E918-53CD-D3F4-F0BA260757DE.webp",
      "rating": "4.7",
      "reviews": 9,
      "description": "In 2021, the United States Postal Service issued a set of four Forever Stamps picturing Message Monsters. The childlike designs were created in collaboration with Canadian children&#8217;s author Elise Gravel to help get kids more interested in Stamp",
      "variants": [
        {
          "sku": "STAMP-00-155-CN",
          "shippingFrom": "CN",
          "shippingDesc": "China Shipping (2-3 weeks)",
          "price": 5,
          "originalPrice": 19.99
        },
        {
          "sku": "STAMP-00-155-US",
          "shippingFrom": "US",
          "shippingDesc": "Local Shipping (3-5 days)",
          "price": 15,
          "originalPrice": 19.99
        }
      ]
    },
    {
      "id": 19555,
      "name": "Life Magnified Forever Stamps",
      "category": "Forever Stamps 73$, Science &amp; Space",
      "theme": "Commemorative",
      "postage": "Forever First-Class",
      "image": "https://discountstampdeal.com/wp-content/uploads/2025/02/8F4F9850-1764-6FDB-B203-FE6A49269CF4.webp",
      "rating": "4.9",
      "reviews": 20,
      "description": "With 20 otherworldly images, this issuance explores life on Earth, as few have ever seen it. The pane features images taken using microscopes and highly specialized photographic techniques to capture details of life undetectable by the human eye.",
      "variants": [
        {
          "sku": "STAMP-00-149-CN",
          "shippingFrom": "CN",
          "shippingDesc": "China Shipping (2-3 weeks)",
          "price": 5,
          "originalPrice": 19.99
        },
        {
          "sku": "STAMP-00-149-US",
          "shippingFrom": "US",
          "shippingDesc": "Local Shipping (3-5 days)",
          "price": 15,
          "originalPrice": 19.99
        }
      ]
    },
    {
      "id": 19556,
      "name": "Thinking of You Forever Stamps",
      "category": "Celebrations &amp; Thanks, Forever Stamps 73$",
      "theme": "Commemorative",
      "postage": "Forever First-Class",
      "image": "https://discountstampdeal.com/wp-content/uploads/2025/02/05B909F8-2862-0DED-10EC-CF582BD56F3E.webp",
      "rating": "4.6",
      "reviews": 36,
      "description": "Celebrate kindness and connection with the 2023 Thinking of You Forever Stamps, featuring cheerful and colorful designs of flowers, balloons, rainbows, and hearts. Created to brighten someone’s day, these stamps are perfect for cards, letters, and th",
      "variants": [
        {
          "sku": "STAMP-00-147-CN",
          "shippingFrom": "CN",
          "shippingDesc": "China Shipping (2-3 weeks)",
          "price": 5,
          "originalPrice": 19.99
        },
        {
          "sku": "STAMP-00-147-US",
          "shippingFrom": "US",
          "shippingDesc": "Local Shipping (3-5 days)",
          "price": 15,
          "originalPrice": 19.99
        }
      ]
    },
    {
      "id": 19557,
      "name": "OSIRIS-REx Forever Stamps",
      "category": "Forever Stamps 73$, Science &amp; Space",
      "theme": "Commemorative",
      "postage": "Forever First-Class",
      "image": "https://discountstampdeal.com/wp-content/uploads/2025/02/1A4C0DA5-B1AF-8D0C-EF1C-F35BD2818B75-1.webp",
      "rating": "4.7",
      "reviews": 25,
      "description": "Celebrate space exploration with this new OSIRIS-REx stamp from the U.S. Postal Service.",
      "variants": [
        {
          "sku": "STAMP-00-145-CN",
          "shippingFrom": "CN",
          "shippingDesc": "China Shipping (2-3 weeks)",
          "price": 5,
          "originalPrice": 19.99
        },
        {
          "sku": "STAMP-00-145-US",
          "shippingFrom": "US",
          "shippingDesc": "Local Shipping (3-5 days)",
          "price": 15,
          "originalPrice": 19.99
        }
      ]
    },
    {
      "id": 19558,
      "name": "Pi?atas! Forever Stamps",
      "category": "Forever Stamps 73$, History &amp; Heritage",
      "theme": "Commemorative",
      "postage": "Forever First-Class",
      "image": "https://discountstampdeal.com/wp-content/uploads/2025/02/9AF7451E-22C4-5C8C-B104-D29657334698.webp",
      "rating": "4.9",
      "reviews": 39,
      "description": "Two Stamps feature different donkey pi?atas with purple or green backgrounds. Pink or orange backgrounds showcase pi?atas with different 7-point stars. With these Stamps you will bring back memories of celebrations with friends and family and inspire",
      "variants": [
        {
          "sku": "STAMP-00-143-CN",
          "shippingFrom": "CN",
          "shippingDesc": "China Shipping (2-3 weeks)",
          "price": 5,
          "originalPrice": 19.99
        },
        {
          "sku": "STAMP-00-143-US",
          "shippingFrom": "US",
          "shippingDesc": "Local Shipping (3-5 days)",
          "price": 15,
          "originalPrice": 19.99
        }
      ]
    },
    {
      "id": 19559,
      "name": "Snow Globes Forever Stamps",
      "category": "Forever Stamps 73$, Holiday",
      "theme": "Commemorative",
      "postage": "Forever First-Class",
      "image": "https://discountstampdeal.com/wp-content/uploads/2025/02/3B26DDCA-2017-6EAB-0D6A-6D3794D298B9.webp",
      "rating": "4.8",
      "reviews": 26,
      "description": "",
      "variants": [
        {
          "sku": "STAMP-00-141-CN",
          "shippingFrom": "CN",
          "shippingDesc": "China Shipping (2-3 weeks)",
          "price": 5,
          "originalPrice": 19.99
        },
        {
          "sku": "STAMP-00-141-US",
          "shippingFrom": "US",
          "shippingDesc": "Local Shipping (3-5 days)",
          "price": 15,
          "originalPrice": 19.99
        }
      ]
    },
    {
      "id": 20386,
      "name": "$489 Get 3000 Forever Stamps, 100+ Styles Available",
      "category": "Specials Collection",
      "theme": "Commemorative",
      "postage": "Forever First-Class",
      "image": "https://discountstampdeal.com/wp-content/uploads/2025/02/Group-933.webp",
      "rating": "4.8",
      "reviews": 33,
      "description": "",
      "variants": [
        {
          "sku": "STAMP-00-123-CN",
          "shippingFrom": "CN",
          "shippingDesc": "China Shipping (2-3 weeks)",
          "price": 5,
          "originalPrice": 498
        },
        {
          "sku": "STAMP-00-123-US",
          "shippingFrom": "US",
          "shippingDesc": "Local Shipping (3-5 days)",
          "price": 15,
          "originalPrice": 498
        }
      ]
    },
    {
      "id": 20518,
      "name": "Buy More, More Discounts: $888 Get 6000 Forever Stamps",
      "category": "Specials Collection",
      "theme": "Commemorative",
      "postage": "Forever First-Class",
      "image": "https://discountstampdeal.com/wp-content/uploads/2025/02/Group-926.webp",
      "rating": "4.2",
      "reviews": 35,
      "description": "",
      "variants": [
        {
          "sku": "STAMP-00-121-CN",
          "shippingFrom": "CN",
          "shippingDesc": "China Shipping (2-3 weeks)",
          "price": 5,
          "originalPrice": 888
        },
        {
          "sku": "STAMP-00-121-US",
          "shippingFrom": "US",
          "shippingDesc": "Local Shipping (3-5 days)",
          "price": 15,
          "originalPrice": 888
        }
      ]
    },
    {
      "id": 20650,
      "name": "All Time Low (Price): $1200 Get 10000 Forever Stamps, More Than 100 Styles to Choose",
      "category": "Specials Collection",
      "theme": "Commemorative",
      "postage": "Forever First-Class",
      "image": "https://discountstampdeal.com/wp-content/uploads/2025/02/Group-923.webp",
      "rating": "4.9",
      "reviews": 8,
      "description": "",
      "variants": [
        {
          "sku": "STAMP-00-119-CN",
          "shippingFrom": "CN",
          "shippingDesc": "China Shipping (2-3 weeks)",
          "price": 5,
          "originalPrice": 1200
        },
        {
          "sku": "STAMP-00-119-US",
          "shippingFrom": "US",
          "shippingDesc": "Local Shipping (3-5 days)",
          "price": 15,
          "originalPrice": 1200
        }
      ]
    },
    {
      "id": 20794,
      "name": "Ursula K. Le Guin Three Ounce Forever Stamps",
      "category": "Commemorative, Three Ounce $1.16",
      "theme": "Commemorative",
      "postage": "Forever First-Class",
      "image": "https://discountstampdeal.com/wp-content/uploads/2025/02/USA-5619__23133_.jpg",
      "rating": "4.3",
      "reviews": 7,
      "description": "Honoring Ursula K. Le Guin in the?Literary Arts?series. She contributed to fantasy and science fiction through short stories and novels.",
      "variants": [
        {
          "sku": "STAMP-00-117-CN",
          "shippingFrom": "CN",
          "shippingDesc": "China Shipping (2-3 weeks)",
          "price": 5,
          "originalPrice": 39
        },
        {
          "sku": "STAMP-00-117-US",
          "shippingFrom": "US",
          "shippingDesc": "Local Shipping (3-5 days)",
          "price": 15,
          "originalPrice": 39
        }
      ]
    },
    {
      "id": 20798,
      "name": "R u t h Bader Ginsburg Forever Stamps",
      "category": "Commemorative, Forever Stamps 73$, People",
      "theme": "Commemorative",
      "postage": "Forever First-Class",
      "image": "https://discountstampdeal.com/wp-content/uploads/2025/02/1-1-1.webp",
      "rating": "4.0",
      "reviews": 46,
      "description": "Honor an icon of American culture with this new Ruth Bader Ginsburg stamp. Ruth Bader Ginsburg served as the 107th Supreme Court Justice of the United States. The stamp shows Ginsburg in her black judge??s robe with a white collar",
      "variants": [
        {
          "sku": "STAMP-00-115-CN",
          "shippingFrom": "CN",
          "shippingDesc": "China Shipping (2-3 weeks)",
          "price": 5,
          "originalPrice": 19.99
        },
        {
          "sku": "STAMP-00-115-US",
          "shippingFrom": "US",
          "shippingDesc": "Local Shipping (3-5 days)",
          "price": 15,
          "originalPrice": 19.99
        }
      ]
    },
    {
      "id": 20814,
      "name": "Constance Baker Motley Forever Stamps",
      "category": "Commemorative, People",
      "theme": "Commemorative",
      "postage": "Forever First-Class",
      "image": "https://discountstampdeal.com/wp-content/uploads/2025/02/united-states-2024-c.jpg",
      "rating": "5.0",
      "reviews": 38,
      "description": "Honor a civil rights pioneer and the first African American woman known to have argued a case before the United States Supreme Court with the new Constance Baker Motley stamp from the U.S. Postal Service. The 47th stamp in the Black Heritage series d",
      "variants": [
        {
          "sku": "STAMP-00-111-CN",
          "shippingFrom": "CN",
          "shippingDesc": "China Shipping (2-3 weeks)",
          "price": 5,
          "originalPrice": 19.99
        },
        {
          "sku": "STAMP-00-111-US",
          "shippingFrom": "US",
          "shippingDesc": "Local Shipping (3-5 days)",
          "price": 15,
          "originalPrice": 19.99
        }
      ]
    },
    {
      "id": 20857,
      "name": "2017 Celebration Corsage Two Ounce Forever First Class Forever Stamps",
      "category": "Forever Stamps 73$, Love, Wedding",
      "theme": "Commemorative",
      "postage": "Two-Ounce",
      "image": "https://discountstampdeal.com/wp-content/uploads/2025/02/2024-12-07-1.jpg",
      "rating": "4.7",
      "reviews": 27,
      "description": "",
      "variants": [
        {
          "sku": "STAMP-17-103-CN",
          "shippingFrom": "CN",
          "shippingDesc": "China Shipping (2-3 weeks)",
          "price": 5,
          "originalPrice": 19.99
        },
        {
          "sku": "STAMP-17-103-US",
          "shippingFrom": "US",
          "shippingDesc": "Local Shipping (3-5 days)",
          "price": 15,
          "originalPrice": 19.99
        }
      ]
    },
    {
      "id": 20861,
      "name": "2017-Uncle Sam??s Hat Stamp Additional Ounce Postage Stamps",
      "category": "Forever Stamps 73$, Patriotic, People",
      "theme": "Commemorative",
      "postage": "Forever First-Class",
      "image": "https://discountstampdeal.com/wp-content/uploads/2025/02/2024-12-09-1.jpg",
      "rating": "4.9",
      "reviews": 34,
      "description": "",
      "variants": [
        {
          "sku": "STAMP-17-101-CN",
          "shippingFrom": "CN",
          "shippingDesc": "China Shipping (2-3 weeks)",
          "price": 5,
          "originalPrice": 19.99
        },
        {
          "sku": "STAMP-17-101-US",
          "shippingFrom": "US",
          "shippingDesc": "Local Shipping (3-5 days)",
          "price": 15,
          "originalPrice": 19.99
        }
      ]
    },
    {
      "id": 20865,
      "name": "2022 Raven Story Forever First Class Postage Stamps",
      "category": "Animals &amp; Nature, Forever Stamps 73$",
      "theme": "Commemorative",
      "postage": "Forever First-Class",
      "image": "https://discountstampdeal.com/wp-content/uploads/2025/02/2024-12-12-1.webp",
      "rating": "4.7",
      "reviews": 27,
      "description": "",
      "variants": [
        {
          "sku": "STAMP-22-099-CN",
          "shippingFrom": "CN",
          "shippingDesc": "China Shipping (2-3 weeks)",
          "price": 5,
          "originalPrice": 19.99
        },
        {
          "sku": "STAMP-22-099-US",
          "shippingFrom": "US",
          "shippingDesc": "Local Shipping (3-5 days)",
          "price": 15,
          "originalPrice": 19.99
        }
      ]
    },
    {
      "id": 20869,
      "name": "2023 School Bus stamps",
      "category": "Forever Stamps 73$, Kids",
      "theme": "Commemorative",
      "postage": "Forever First-Class",
      "image": "https://discountstampdeal.com/wp-content/uploads/2025/02/2024-12-15-1.webp",
      "rating": "4.1",
      "reviews": 31,
      "description": "",
      "variants": [
        {
          "sku": "STAMP-23-097-CN",
          "shippingFrom": "CN",
          "shippingDesc": "China Shipping (2-3 weeks)",
          "price": 5,
          "originalPrice": 19.99
        },
        {
          "sku": "STAMP-23-097-US",
          "shippingFrom": "US",
          "shippingDesc": "Local Shipping (3-5 days)",
          "price": 15,
          "originalPrice": 19.99
        }
      ]
    },
    {
      "id": 20877,
      "name": "2023 Toni Morrison forever stamps",
      "category": "Forever Stamps 73$, People",
      "theme": "Commemorative",
      "postage": "Forever First-Class",
      "image": "https://discountstampdeal.com/wp-content/uploads/2025/02/2024-12-18-1.jpg",
      "rating": "4.8",
      "reviews": 20,
      "description": "",
      "variants": [
        {
          "sku": "STAMP-23-093-CN",
          "shippingFrom": "CN",
          "shippingDesc": "China Shipping (2-3 weeks)",
          "price": 5,
          "originalPrice": 19.99
        },
        {
          "sku": "STAMP-23-093-US",
          "shippingFrom": "US",
          "shippingDesc": "Local Shipping (3-5 days)",
          "price": 15,
          "originalPrice": 19.99
        }
      ]
    },
    {
      "id": 20900,
      "name": "2022 George Morrison Forever Stamps",
      "category": "Denomination, Forever Stamps 73$, People",
      "theme": "Commemorative",
      "postage": "Forever First-Class",
      "image": "https://discountstampdeal.com/wp-content/uploads/2025/02/2024-12-21-1.webp",
      "rating": "4.5",
      "reviews": 24,
      "description": "",
      "variants": [
        {
          "sku": "STAMP-22-091-CN",
          "shippingFrom": "CN",
          "shippingDesc": "China Shipping (2-3 weeks)",
          "price": 5,
          "originalPrice": 19.99
        },
        {
          "sku": "STAMP-22-091-US",
          "shippingFrom": "US",
          "shippingDesc": "Local Shipping (3-5 days)",
          "price": 15,
          "originalPrice": 19.99
        }
      ]
    },
    {
      "id": 20920,
      "name": "2014 Where Dreams Blossom Forever Stamps",
      "category": "Forever Stamps 73$, Love, Priority Mail, Priority Mail Express, Wedding",
      "theme": "Commemorative",
      "postage": "Forever First-Class",
      "image": "https://discountstampdeal.com/wp-content/uploads/2025/02/2024-12-36-1.webp",
      "rating": "4.4",
      "reviews": 19,
      "description": "",
      "variants": [
        {
          "sku": "STAMP-14-083-CN",
          "shippingFrom": "CN",
          "shippingDesc": "China Shipping (2-3 weeks)",
          "price": 5,
          "originalPrice": 19.99
        },
        {
          "sku": "STAMP-14-083-US",
          "shippingFrom": "US",
          "shippingDesc": "Local Shipping (3-5 days)",
          "price": 15,
          "originalPrice": 19.99
        }
      ]
    },
    {
      "id": 20944,
      "name": "2021 Brush Rabbit First Class Postage Stamps",
      "category": "Animals &amp; Nature, Animals&amp;Nature, Forever Stamps 73$, Priority Mail",
      "theme": "Commemorative",
      "postage": "Forever First-Class",
      "image": "https://discountstampdeal.com/wp-content/uploads/2025/02/2024-12-41-1.webp",
      "rating": "4.5",
      "reviews": 48,
      "description": "",
      "variants": [
        {
          "sku": "STAMP-21-079-CN",
          "shippingFrom": "CN",
          "shippingDesc": "China Shipping (2-3 weeks)",
          "price": 5,
          "originalPrice": 19.99
        },
        {
          "sku": "STAMP-21-079-US",
          "shippingFrom": "US",
          "shippingDesc": "Local Shipping (3-5 days)",
          "price": 15,
          "originalPrice": 19.99
        }
      ]
    },
    {
      "id": 20952,
      "name": "1998 22c Uncle Sam First Class Postage Stamps",
      "category": "Forever Stamps 73$, History &amp; Heritage, People, Priority Mail Express, Three Ounce $1.16",
      "theme": "Commemorative",
      "postage": "Forever First-Class",
      "image": "https://discountstampdeal.com/wp-content/uploads/2025/02/2024-12-46-1.webp",
      "rating": "4.8",
      "reviews": 22,
      "description": "",
      "variants": [
        {
          "sku": "STAMP-00-075-CN",
          "shippingFrom": "CN",
          "shippingDesc": "China Shipping (2-3 weeks)",
          "price": 5,
          "originalPrice": 19.99
        },
        {
          "sku": "STAMP-00-075-US",
          "shippingFrom": "US",
          "shippingDesc": "Local Shipping (3-5 days)",
          "price": 15,
          "originalPrice": 19.99
        }
      ]
    },
    {
      "id": 21017,
      "name": "2016 EID Greetings Forever First Class Postage Stamps",
      "category": "Celebrations &amp; Thanks, Forever Stamps 73$",
      "theme": "Commemorative",
      "postage": "Forever First-Class",
      "image": "https://discountstampdeal.com/wp-content/uploads/2025/02/2025-1-4-20-1.webp",
      "rating": "4.0",
      "reviews": 21,
      "description": "",
      "variants": [
        {
          "sku": "STAMP-16-057-CN",
          "shippingFrom": "CN",
          "shippingDesc": "China Shipping (2-3 weeks)",
          "price": 5,
          "originalPrice": 19.99
        },
        {
          "sku": "STAMP-16-057-US",
          "shippingFrom": "US",
          "shippingDesc": "Local Shipping (3-5 days)",
          "price": 15,
          "originalPrice": 19.99
        }
      ]
    },
    {
      "id": 21021,
      "name": "2017 Global Green Succulent Stamps",
      "category": "Animals &amp; Nature, Animals&amp;Nature, Forever Stamps 73$, Love, Wedding",
      "theme": "Commemorative",
      "postage": "International",
      "image": "https://discountstampdeal.com/wp-content/uploads/2025/02/2025-1-4-23-1.webp",
      "rating": "4.2",
      "reviews": 26,
      "description": "",
      "variants": [
        {
          "sku": "STAMP-17-055-CN",
          "shippingFrom": "CN",
          "shippingDesc": "China Shipping (2-3 weeks)",
          "price": 5,
          "originalPrice": 39.99
        },
        {
          "sku": "STAMP-17-055-US",
          "shippingFrom": "US",
          "shippingDesc": "Local Shipping (3-5 days)",
          "price": 15,
          "originalPrice": 39.99
        }
      ]
    },
    {
      "id": 21029,
      "name": "2020 Grand Island Ice Cave Express Priority Stamps",
      "category": "Forever Stamps 73$, Priority Mail, Priority Mail Express",
      "theme": "Commemorative",
      "postage": "Forever First-Class",
      "image": "https://discountstampdeal.com/wp-content/uploads/2025/02/2025-1-4-31-1.webp",
      "rating": "5.0",
      "reviews": 45,
      "description": "",
      "variants": [
        {
          "sku": "STAMP-20-051-CN",
          "shippingFrom": "CN",
          "shippingDesc": "China Shipping (2-3 weeks)",
          "price": 5,
          "originalPrice": 25
        },
        {
          "sku": "STAMP-20-051-US",
          "shippingFrom": "US",
          "shippingDesc": "Local Shipping (3-5 days)",
          "price": 15,
          "originalPrice": 25
        }
      ]
    },
    {
      "id": 21065,
      "name": "2022 Palace of Fine Arts Express Priority Stamps",
      "category": "Celebrations, Celebrations &amp; Thanks, History, History &amp; Heritage, Non-Machineable $1.12, Postcard 53$, Semipostal 85$, Three Ounce $1.16, Two Ounce 92$",
      "theme": "Commemorative",
      "postage": "Forever First-Class",
      "image": "https://discountstampdeal.com/wp-content/uploads/2025/02/2025-1-4-45-1.webp",
      "rating": "4.2",
      "reviews": 5,
      "description": "",
      "variants": [
        {
          "sku": "STAMP-22-041-CN",
          "shippingFrom": "CN",
          "shippingDesc": "China Shipping (2-3 weeks)",
          "price": 5,
          "originalPrice": 110
        },
        {
          "sku": "STAMP-22-041-US",
          "shippingFrom": "US",
          "shippingDesc": "Local Shipping (3-5 days)",
          "price": 15,
          "originalPrice": 110
        }
      ]
    }
  ],
  "Wedding": [
    {
      "id": 19029,
      "name": "Love Forever Stamps 2021",
      "category": "Forever Stamps 73$, Love, Wedding",
      "theme": "Wedding",
      "postage": "Forever First-Class",
      "image": "https://discountstampdeal.com/wp-content/uploads/2025/02/amd14-395e1.jpg",
      "rating": "4.2",
      "reviews": 51,
      "description": "The stamp art features a lighthearted and colorful digital illustration with the word ??LOVE?? and three large hearts shown in an unconventional palette of color duos, strikingly set against a dark blue background.",
      "variants": [
        {
          "sku": "STAMP-21-299-CN",
          "shippingFrom": "CN",
          "shippingDesc": "China Shipping (2-3 weeks)",
          "price": 5,
          "originalPrice": 19.99
        },
        {
          "sku": "STAMP-21-299-US",
          "shippingFrom": "US",
          "shippingDesc": "Local Shipping (3-5 days)",
          "price": 15,
          "originalPrice": 19.99
        }
      ]
    },
    {
      "id": 19033,
      "name": "Made of Hearts Forever Stamps",
      "category": "Celebrations &amp; Thanks, Forever Stamps 73$, Love, Wedding",
      "theme": "Wedding",
      "postage": "Forever First-Class",
      "image": "https://discountstampdeal.com/wp-content/uploads/2025/02/A-1-1.webp",
      "rating": "4.1",
      "reviews": 46,
      "description": "The stamp art features horizontal lines of red and pink hearts on a white background. Toward the center, red hearts in varying sizes replace pink hearts in a formation that creates one large red heart, the focal point of this graphic design.",
      "variants": [
        {
          "sku": "STAMP-00-291-CN",
          "shippingFrom": "CN",
          "shippingDesc": "China Shipping (2-3 weeks)",
          "price": 5,
          "originalPrice": 19.99
        },
        {
          "sku": "STAMP-00-291-US",
          "shippingFrom": "US",
          "shippingDesc": "Local Shipping (3-5 days)",
          "price": 15,
          "originalPrice": 19.99
        }
      ]
    },
    {
      "id": 19034,
      "name": "Love 2022 Forever Stamps",
      "category": "Forever Stamps 73$, Love, Wedding",
      "theme": "Wedding",
      "postage": "Forever First-Class",
      "image": "https://discountstampdeal.com/wp-content/uploads/2025/02/CA710450-919C-087B-16F0-4E0932AB24B9.webp",
      "rating": "4.5",
      "reviews": 28,
      "description": "Celebrate the joy that flowers bring with two new Love Stamps",
      "variants": [
        {
          "sku": "STAMP-22-289-CN",
          "shippingFrom": "CN",
          "shippingDesc": "China Shipping (2-3 weeks)",
          "price": 5,
          "originalPrice": 19.99
        },
        {
          "sku": "STAMP-22-289-US",
          "shippingFrom": "US",
          "shippingDesc": "Local Shipping (3-5 days)",
          "price": 15,
          "originalPrice": 19.99
        }
      ]
    },
    {
      "id": 19035,
      "name": "Hearts Blossom Forever Stamps",
      "category": "Forever Stamps 73$, Love, Wedding",
      "theme": "Wedding",
      "postage": "Forever First-Class",
      "image": "https://discountstampdeal.com/wp-content/uploads/2025/02/A-33.webp",
      "rating": "4.2",
      "reviews": 40,
      "description": "Hearts Blossom is the latest stamp in the Love series from the U.S. Postal Service. The stamp art features the word ??Love?? in cursive script below 12 colorful hearts meant to visually express love??s joyful, bountiful nature. The color palette ?? r",
      "variants": [
        {
          "sku": "STAMP-00-287-CN",
          "shippingFrom": "CN",
          "shippingDesc": "China Shipping (2-3 weeks)",
          "price": 5,
          "originalPrice": 19.99
        },
        {
          "sku": "STAMP-00-287-US",
          "shippingFrom": "US",
          "shippingDesc": "Local Shipping (3-5 days)",
          "price": 15,
          "originalPrice": 19.99
        }
      ]
    },
    {
      "id": 19182,
      "name": "Love Flourishes Forever Stamps",
      "category": "Forever Stamps 73$, Fruits &amp; Flowers, Love, Wedding",
      "theme": "Wedding",
      "postage": "Forever First-Class",
      "image": "https://discountstampdeal.com/wp-content/uploads/2025/02/a-12.webp",
      "rating": "4.4",
      "reviews": 38,
      "description": "Love Flourishes is the latest stamp in the popular Love series, which began 45 years ago. The stamp art features a fanciful garden of colorful flowers surrounding the word ??Love?? written in cursive script. Hand-painted by artist Anna Bond, the flow",
      "variants": [
        {
          "sku": "STAMP-00-203-CN",
          "shippingFrom": "CN",
          "shippingDesc": "China Shipping (2-3 weeks)",
          "price": 5,
          "originalPrice": 19.99
        },
        {
          "sku": "STAMP-00-203-US",
          "shippingFrom": "US",
          "shippingDesc": "Local Shipping (3-5 days)",
          "price": 15,
          "originalPrice": 19.99
        }
      ]
    },
    {
      "id": 19244,
      "name": "Garden of Love: Strawberry",
      "category": "Forever Stamps 73$, Fruits &amp; Flowers, Love, Wedding",
      "theme": "Wedding",
      "postage": "Forever First-Class",
      "image": "https://discountstampdeal.com/wp-content/uploads/2025/02/CAC49D0F-ECE3-7DE0-A30E-15BC2CFF0EC1.webp",
      "rating": "4.8",
      "reviews": 18,
      "description": "The Garden of Love,consists of 10 different Stamps depicting a colorful mosaic of flora and fauna in a garden setting. These Stamps are a continuation of the Love series begun in 1973. They are intended for use on Valentine??s Day, Mother??s Day and ",
      "variants": [
        {
          "sku": "STAMP-00-169-CN",
          "shippingFrom": "CN",
          "shippingDesc": "China Shipping (2-3 weeks)",
          "price": 5,
          "originalPrice": 19.99
        },
        {
          "sku": "STAMP-00-169-US",
          "shippingFrom": "US",
          "shippingDesc": "Local Shipping (3-5 days)",
          "price": 15,
          "originalPrice": 19.99
        }
      ]
    },
    {
      "id": 19486,
      "name": "Love 2023 Forever Stamps",
      "category": "Forever Stamps 73$, Love, Wedding",
      "theme": "Wedding",
      "postage": "Forever First-Class",
      "image": "https://discountstampdeal.com/wp-content/uploads/2025/02/9A9A11E0-2F93-551F-54C1-633DCA6C19DD.webp",
      "rating": "4.5",
      "reviews": 35,
      "description": "The U.S. Postal Service continues its popular Love series with two new Stamps, one featuring a kitten and the other a puppy.The stamp art was painted with oils on wood panel, then scanned and edited digitally to create the final images. Cats and dogs",
      "variants": [
        {
          "sku": "STAMP-23-177-CN",
          "shippingFrom": "CN",
          "shippingDesc": "China Shipping (2-3 weeks)",
          "price": 5,
          "originalPrice": 19.99
        },
        {
          "sku": "STAMP-23-177-US",
          "shippingFrom": "US",
          "shippingDesc": "Local Shipping (3-5 days)",
          "price": 15,
          "originalPrice": 19.99
        }
      ]
    },
    {
      "id": 20069,
      "name": "Love 2024 Forever Stamps",
      "category": "Forever Stamps 73$, Love",
      "theme": "Wedding",
      "postage": "Forever First-Class",
      "image": "https://discountstampdeal.com/wp-content/uploads/2025/02/aa_x.png",
      "rating": "4.5",
      "reviews": 19,
      "description": "",
      "variants": [
        {
          "sku": "STAMP-24-133-CN",
          "shippingFrom": "CN",
          "shippingDesc": "China Shipping (2-3 weeks)",
          "price": 5,
          "originalPrice": 19.99
        },
        {
          "sku": "STAMP-24-133-US",
          "shippingFrom": "US",
          "shippingDesc": "Local Shipping (3-5 days)",
          "price": 15,
          "originalPrice": 19.99
        }
      ]
    },
    {
      "id": 20810,
      "name": "Purple Heart Medal 2019 Forever Stamps",
      "category": "Forever Stamps 73$, Patriotic",
      "theme": "Wedding",
      "postage": "Forever First-Class",
      "image": "https://discountstampdeal.com/wp-content/uploads/2025/02/207acf44dce9c7d20578c78b4e223470.jpg",
      "rating": "5.0",
      "reviews": 43,
      "description": "",
      "variants": [
        {
          "sku": "STAMP-19-113-CN",
          "shippingFrom": "CN",
          "shippingDesc": "China Shipping (2-3 weeks)",
          "price": 5,
          "originalPrice": 19.99
        },
        {
          "sku": "STAMP-19-113-US",
          "shippingFrom": "US",
          "shippingDesc": "Local Shipping (3-5 days)",
          "price": 15,
          "originalPrice": 19.99
        }
      ]
    },
    {
      "id": 20853,
      "name": "2011 Wedding Roses Commemorative Forever First Class Postage Stamps",
      "category": "Forever Stamps 73$, Love, Wedding",
      "theme": "Wedding",
      "postage": "Forever First-Class",
      "image": "https://discountstampdeal.com/wp-content/uploads/2025/02/2024-12-07.webp",
      "rating": "4.5",
      "reviews": 27,
      "description": "",
      "variants": [
        {
          "sku": "STAMP-11-105-CN",
          "shippingFrom": "CN",
          "shippingDesc": "China Shipping (2-3 weeks)",
          "price": 5,
          "originalPrice": 19.99
        },
        {
          "sku": "STAMP-11-105-US",
          "shippingFrom": "US",
          "shippingDesc": "Local Shipping (3-5 days)",
          "price": 15,
          "originalPrice": 19.99
        }
      ]
    },
    {
      "id": 20916,
      "name": "2015 Wedding Series: Vintage Tulip Two Ounce First Class Postage Stamps",
      "category": "Animals &amp; Nature, Animals&amp;Nature, Denomination, Forever Stamps 73$, Holiday, Wedding",
      "theme": "Wedding",
      "postage": "Two-Ounce",
      "image": "https://discountstampdeal.com/wp-content/uploads/2025/02/2024-12-33-1.webp",
      "rating": "4.3",
      "reviews": 35,
      "description": "",
      "variants": [
        {
          "sku": "STAMP-15-085-CN",
          "shippingFrom": "CN",
          "shippingDesc": "China Shipping (2-3 weeks)",
          "price": 5,
          "originalPrice": 19.99
        },
        {
          "sku": "STAMP-15-085-US",
          "shippingFrom": "US",
          "shippingDesc": "Local Shipping (3-5 days)",
          "price": 15,
          "originalPrice": 19.99
        }
      ]
    },
    {
      "id": 20981,
      "name": "2010 Love stamp – Purple Orchid – 44 cents",
      "category": "Animals &amp; Nature, Animals&amp;Nature, Forever Stamps 73$, Fruits &amp; Flowers, Love",
      "theme": "Wedding",
      "postage": "Forever First-Class",
      "image": "https://discountstampdeal.com/wp-content/uploads/2025/02/2025-1-4-9-1.webp",
      "rating": "4.9",
      "reviews": 12,
      "description": "",
      "variants": [
        {
          "sku": "STAMP-10-067-CN",
          "shippingFrom": "CN",
          "shippingDesc": "China Shipping (2-3 weeks)",
          "price": 5,
          "originalPrice": 19.99
        },
        {
          "sku": "STAMP-10-067-US",
          "shippingFrom": "US",
          "shippingDesc": "Local Shipping (3-5 days)",
          "price": 15,
          "originalPrice": 19.99
        }
      ]
    },
    {
      "id": 20993,
      "name": "2014 Wedding Series: Wedding Cake First Class Postage Stamps",
      "category": "Forever Stamps 73$, Fruits &amp; Flowers, Love, Wedding",
      "theme": "Wedding",
      "postage": "Forever First-Class",
      "image": "https://discountstampdeal.com/wp-content/uploads/2025/02/2025-1-4-14-1.webp",
      "rating": "4.8",
      "reviews": 32,
      "description": "",
      "variants": [
        {
          "sku": "STAMP-14-061-CN",
          "shippingFrom": "CN",
          "shippingDesc": "China Shipping (2-3 weeks)",
          "price": 5,
          "originalPrice": 19.99
        },
        {
          "sku": "STAMP-14-061-US",
          "shippingFrom": "US",
          "shippingDesc": "Local Shipping (3-5 days)",
          "price": 15,
          "originalPrice": 19.99
        }
      ]
    },
    {
      "id": 21025,
      "name": "2017 Wedding Series Celebration Boutonniere Forever Stamps",
      "category": "Animals &amp; Nature, Animals&amp;Nature, Love, Wedding",
      "theme": "Wedding",
      "postage": "Forever First-Class",
      "image": "https://discountstampdeal.com/wp-content/uploads/2025/02/2025-1-4-26-1.jpg",
      "rating": "4.1",
      "reviews": 43,
      "description": "",
      "variants": [
        {
          "sku": "STAMP-17-053-CN",
          "shippingFrom": "CN",
          "shippingDesc": "China Shipping (2-3 weeks)",
          "price": 5,
          "originalPrice": 19.99
        },
        {
          "sku": "STAMP-17-053-US",
          "shippingFrom": "US",
          "shippingDesc": "Local Shipping (3-5 days)",
          "price": 15,
          "originalPrice": 19.99
        }
      ]
    },
    {
      "id": 21089,
      "name": "Two-Ounce Stamps 2015 Yes, I Do – Wedding Invitation, First-Class Postage",
      "category": "Forever Stamps 73$, Love, Wedding",
      "theme": "Wedding",
      "postage": "Two-Ounce",
      "image": "https://discountstampdeal.com/wp-content/uploads/2025/02/2025-1-4-62-1.webp",
      "rating": "4.2",
      "reviews": 12,
      "description": "Celebrate weddings and special occasions with the 2015 Yes, I Do Two-Ounce Stamps, featuring elegant typography that conveys love and commitment. Designed specifically for heavier wedding invitations, save-the-dates, and greeting cards, these stamps ",
      "variants": [
        {
          "sku": "STAMP-15-029-CN",
          "shippingFrom": "CN",
          "shippingDesc": "China Shipping (2-3 weeks)",
          "price": 5,
          "originalPrice": 49.99
        },
        {
          "sku": "STAMP-15-029-US",
          "shippingFrom": "US",
          "shippingDesc": "Local Shipping (3-5 days)",
          "price": 15,
          "originalPrice": 49.99
        }
      ]
    },
    {
      "id": 21113,
      "name": "2024 Wedding Blooms Two Ounce Forever First Class Postage Stamps",
      "category": "Forever Stamps 73$, Love, Wedding",
      "theme": "Wedding",
      "postage": "Two-Ounce",
      "image": "https://discountstampdeal.com/wp-content/uploads/2025/02/2025-1-4-64-1.jpg",
      "rating": "4.1",
      "reviews": 16,
      "description": "",
      "variants": [
        {
          "sku": "STAMP-24-027-CN",
          "shippingFrom": "CN",
          "shippingDesc": "China Shipping (2-3 weeks)",
          "price": 5,
          "originalPrice": 19.99
        },
        {
          "sku": "STAMP-24-027-US",
          "shippingFrom": "US",
          "shippingDesc": "Local Shipping (3-5 days)",
          "price": 15,
          "originalPrice": 19.99
        }
      ]
    }
  ],
  "Patriotic": [
    {
      "id": 19036,
      "name": "U.S. Flag Forever Stamps 2019",
      "category": "Forever Stamps 73$, Patriotic",
      "theme": "Patriotic",
      "postage": "Forever First-Class",
      "image": "https://discountstampdeal.com/wp-content/uploads/2025/02/11_-1.jpg",
      "rating": "4.5",
      "reviews": 22,
      "description": "With this new 2019 stamp, the Postal Service celebrates the American flag ?C the most recognizable symbol of the nation ?C on the 150th anniversary of the first U.S. Stamps to depict Old Glory.",
      "variants": [
        {
          "sku": "STAMP-19-285-CN",
          "shippingFrom": "CN",
          "shippingDesc": "China Shipping (2-3 weeks)",
          "price": 5,
          "originalPrice": 19.99
        },
        {
          "sku": "STAMP-19-285-US",
          "shippingFrom": "US",
          "shippingDesc": "Local Shipping (3-5 days)",
          "price": 15,
          "originalPrice": 19.99
        }
      ]
    },
    {
      "id": 19081,
      "name": "U.S. Flag 2019 Forever Stamps",
      "category": "Forever Stamps 73$, Patriotic",
      "theme": "Patriotic",
      "postage": "Forever First-Class",
      "image": "https://discountstampdeal.com/wp-content/uploads/2025/02/5f09b187a219b4960d9a8424ba58dcdc.webp",
      "rating": "4.5",
      "reviews": 26,
      "description": "With this new 2019 stamp, the Postal Service? celebrates the American flag, the most recognizable symbol of our nation. The stamp features a U.S. flag, one of several on the flagpoles near the end of Chicago??s Navy Pier, waving in a May breeze. The ",
      "variants": [
        {
          "sku": "STAMP-19-245-CN",
          "shippingFrom": "CN",
          "shippingDesc": "China Shipping (2-3 weeks)",
          "price": 5,
          "originalPrice": 19.99
        },
        {
          "sku": "STAMP-19-245-US",
          "shippingFrom": "US",
          "shippingDesc": "Local Shipping (3-5 days)",
          "price": 15,
          "originalPrice": 19.99
        }
      ]
    },
    {
      "id": 19083,
      "name": "U.S. Flag 2022 Forever Stamps",
      "category": "Forever Stamps 73$, Patriotic",
      "theme": "Patriotic",
      "postage": "Forever First-Class",
      "image": "https://discountstampdeal.com/wp-content/uploads/2025/02/39683f4aca2b0bb87a544efaf05ee178.webp",
      "rating": "4.9",
      "reviews": 54,
      "description": "The stamp art is a painting of three flags in a circular formation, reminiscent of the 50 flags encircling the Washington Monument. The artist used three separate photographs of the same flag taken seconds apart as reference and stitched together the",
      "variants": [
        {
          "sku": "STAMP-22-241-CN",
          "shippingFrom": "CN",
          "shippingDesc": "China Shipping (2-3 weeks)",
          "price": 5,
          "originalPrice": 19.99
        },
        {
          "sku": "STAMP-22-241-US",
          "shippingFrom": "US",
          "shippingDesc": "Local Shipping (3-5 days)",
          "price": 15,
          "originalPrice": 19.99
        }
      ]
    },
    {
      "id": 19086,
      "name": "U.S. Flag 2022 Forever Stamps",
      "category": "Forever Stamps 73$, Patriotic",
      "theme": "Patriotic",
      "postage": "Forever First-Class",
      "image": "https://discountstampdeal.com/wp-content/uploads/2025/02/a-25.webp",
      "rating": "4.8",
      "reviews": 9,
      "description": "The stamp art is a painting of three flags in a circular formation, reminiscent of the 50 flags encircling the Washington Monument. The artist used three separate photographs of the same flag taken seconds apart as reference and stitched together the",
      "variants": [
        {
          "sku": "STAMP-22-235-CN",
          "shippingFrom": "CN",
          "shippingDesc": "China Shipping (2-3 weeks)",
          "price": 5,
          "originalPrice": 19.99
        },
        {
          "sku": "STAMP-22-235-US",
          "shippingFrom": "US",
          "shippingDesc": "Local Shipping (3-5 days)",
          "price": 15,
          "originalPrice": 19.99
        }
      ]
    },
    {
      "id": 19107,
      "name": "U.S. Flag 2022 Forever Stamps",
      "category": "Forever Stamps 73$, Patriotic",
      "theme": "Patriotic",
      "postage": "Forever First-Class",
      "image": "https://discountstampdeal.com/wp-content/uploads/2025/02/a-21.webp",
      "rating": "4.9",
      "reviews": 33,
      "description": "The stamp art is a painting of three flags in a circular formation, reminiscent of the 50 flags encircling the Washington Monument. The artist used three separate photographs of the same flag taken seconds apart as reference and stitched together the",
      "variants": [
        {
          "sku": "STAMP-22-233-CN",
          "shippingFrom": "CN",
          "shippingDesc": "China Shipping (2-3 weeks)",
          "price": 5,
          "originalPrice": 19.99
        },
        {
          "sku": "STAMP-22-233-US",
          "shippingFrom": "US",
          "shippingDesc": "Local Shipping (3-5 days)",
          "price": 15,
          "originalPrice": 19.99
        }
      ]
    },
    {
      "id": 19110,
      "name": "U.S. Flag 2018 Forever Stamps",
      "category": "Forever Stamps 73$, Patriotic",
      "theme": "Patriotic",
      "postage": "Forever First-Class",
      "image": "https://discountstampdeal.com/wp-content/uploads/2025/02/740bde02190d644fdab917a5b1232864.jpg",
      "rating": "4.2",
      "reviews": 47,
      "description": "For more than half a century, U.S. Stamps have depicted the American flag in vivid red, white, and blue. This eye-catching new stamp issue continues that tradition with a striking graphic design of a flag with two crisp folds.\n&nbsp;",
      "variants": [
        {
          "sku": "STAMP-18-227-CN",
          "shippingFrom": "CN",
          "shippingDesc": "China Shipping (2-3 weeks)",
          "price": 5,
          "originalPrice": 19.99
        },
        {
          "sku": "STAMP-18-227-US",
          "shippingFrom": "US",
          "shippingDesc": "Local Shipping (3-5 days)",
          "price": 15,
          "originalPrice": 19.99
        }
      ]
    },
    {
      "id": 19132,
      "name": "U.S. Flag 2017 Forever Stamps",
      "category": "Forever Stamps 73$, Patriotic",
      "theme": "Patriotic",
      "postage": "Forever First-Class",
      "image": "https://discountstampdeal.com/wp-content/uploads/2025/02/faf0eda76e3bc7c9f39aa21f39ee6140.jpg",
      "rating": "4.7",
      "reviews": 37,
      "description": "Feature one of our nation??s most recognizable symbols. The stamp features a detail from a photograph of the billowing Stars and Stripes.",
      "variants": [
        {
          "sku": "STAMP-17-223-CN",
          "shippingFrom": "CN",
          "shippingDesc": "China Shipping (2-3 weeks)",
          "price": 5,
          "originalPrice": 19.99
        },
        {
          "sku": "STAMP-17-223-US",
          "shippingFrom": "US",
          "shippingDesc": "Local Shipping (3-5 days)",
          "price": 15,
          "originalPrice": 19.99
        }
      ]
    },
    {
      "id": 19240,
      "name": "U.S. Flag 2023 Forever Stamps",
      "category": "Forever Stamps 73$, Patriotic",
      "theme": "Patriotic",
      "postage": "Forever First-Class",
      "image": "https://discountstampdeal.com/wp-content/uploads/2025/02/1-16.webp",
      "rating": "4.7",
      "reviews": 35,
      "description": "With the 2023 U.S. Flag stamp, the U.S. Postal Service honors an important symbol of our nation. The stamp, which is being issued in booklets of 20.",
      "variants": [
        {
          "sku": "STAMP-23-177-CN",
          "shippingFrom": "CN",
          "shippingDesc": "China Shipping (2-3 weeks)",
          "price": 5,
          "originalPrice": 19.99
        },
        {
          "sku": "STAMP-23-177-US",
          "shippingFrom": "US",
          "shippingDesc": "Local Shipping (3-5 days)",
          "price": 15,
          "originalPrice": 19.99
        }
      ]
    },
    {
      "id": 19241,
      "name": "U.S. Flag Coil 2023 Forever Stamps",
      "category": "Forever Stamps 73$, Patriotic",
      "theme": "Patriotic",
      "postage": "Forever First-Class",
      "image": "https://discountstampdeal.com/wp-content/uploads/2025/02/a-7.webp",
      "rating": "4.0",
      "reviews": 14,
      "description": "The stamp bears a straightforward graphic design of red, white, and blue with the word FREEDOM below it in gray. The flag serves as a visual reminder of the array of freedoms that Americans enjoy.",
      "variants": [
        {
          "sku": "STAMP-23-175-CN",
          "shippingFrom": "CN",
          "shippingDesc": "China Shipping (2-3 weeks)",
          "price": 5,
          "originalPrice": 19.99
        },
        {
          "sku": "STAMP-23-175-US",
          "shippingFrom": "US",
          "shippingDesc": "Local Shipping (3-5 days)",
          "price": 15,
          "originalPrice": 19.99
        }
      ]
    },
    {
      "id": 19297,
      "name": "2012 Four Flags Forever Forever Stamps",
      "category": "Forever Stamps 73$, Patriotic",
      "theme": "Patriotic",
      "postage": "Forever First-Class",
      "image": "https://discountstampdeal.com/wp-content/uploads/2025/02/3EB7D3BA-3BC0-98E7-EBF4-2075DA6F65F6.webp",
      "rating": "4.8",
      "reviews": 30,
      "description": "One of the most iconic and beloved USPS Forever Stamps issues. This quartet of Stamps features a bright U.S. flag against a white background. A single word appears on each of the four Stamps in large letters: Freedom, Liberty, Equality, and Justice. ",
      "variants": [
        {
          "sku": "STAMP-12-149-CN",
          "shippingFrom": "CN",
          "shippingDesc": "China Shipping (2-3 weeks)",
          "price": 5,
          "originalPrice": 19.99
        },
        {
          "sku": "STAMP-12-149-US",
          "shippingFrom": "US",
          "shippingDesc": "Local Shipping (3-5 days)",
          "price": 15,
          "originalPrice": 19.99
        }
      ]
    },
    {
      "id": 20080,
      "name": "Limited Time Deal: $89.99 for 5 Rolls(500 Forever Stamps) – 2017/2018/2019/2022 Flag",
      "category": "Specials Collection",
      "theme": "Patriotic",
      "postage": "Forever First-Class",
      "image": "https://discountstampdeal.com/wp-content/uploads/2025/02/Group-955.webp",
      "rating": "4.1",
      "reviews": 7,
      "description": "",
      "variants": [
        {
          "sku": "STAMP-17-129-CN",
          "shippingFrom": "CN",
          "shippingDesc": "China Shipping (2-3 weeks)",
          "price": 5,
          "originalPrice": 89.99
        },
        {
          "sku": "STAMP-17-129-US",
          "shippingFrom": "US",
          "shippingDesc": "Local Shipping (3-5 days)",
          "price": 15,
          "originalPrice": 89.99
        }
      ]
    },
    {
      "id": 20101,
      "name": "Highly Recommended: $149 for 10 Rolls(1000pcs) – 2017/2018/2019/2022 Flag",
      "category": "Specials Collection",
      "theme": "Patriotic",
      "postage": "Forever First-Class",
      "image": "https://discountstampdeal.com/wp-content/uploads/2025/02/Group-939.webp",
      "rating": "4.1",
      "reviews": 37,
      "description": "",
      "variants": [
        {
          "sku": "STAMP-17-127-CN",
          "shippingFrom": "CN",
          "shippingDesc": "China Shipping (2-3 weeks)",
          "price": 5,
          "originalPrice": 149.99
        },
        {
          "sku": "STAMP-17-127-US",
          "shippingFrom": "US",
          "shippingDesc": "Local Shipping (3-5 days)",
          "price": 15,
          "originalPrice": 149.99
        }
      ]
    },
    {
      "id": 20849,
      "name": "2008 Liberty Bell Forever Stamps",
      "category": "Forever Stamps 73$, Priority Mail",
      "theme": "Patriotic",
      "postage": "Forever First-Class",
      "image": "https://discountstampdeal.com/wp-content/uploads/2025/02/2024-12-01-1.webp",
      "rating": "4.1",
      "reviews": 14,
      "description": "",
      "variants": [
        {
          "sku": "STAMP-08-107-CN",
          "shippingFrom": "CN",
          "shippingDesc": "China Shipping (2-3 weeks)",
          "price": 5,
          "originalPrice": 19.99
        },
        {
          "sku": "STAMP-08-107-US",
          "shippingFrom": "US",
          "shippingDesc": "Local Shipping (3-5 days)",
          "price": 15,
          "originalPrice": 19.99
        }
      ]
    },
    {
      "id": 20956,
      "name": "2002 Night Friends American Bats First Class Postage Stamps",
      "category": "Animals, Animals &amp; Nature, Forever Stamps 73$",
      "theme": "Patriotic",
      "postage": "Forever First-Class",
      "image": "https://discountstampdeal.com/wp-content/uploads/2025/02/2025-1-4-1-1.webp",
      "rating": "4.3",
      "reviews": 39,
      "description": "",
      "variants": [
        {
          "sku": "STAMP-02-073-CN",
          "shippingFrom": "CN",
          "shippingDesc": "China Shipping (2-3 weeks)",
          "price": 5,
          "originalPrice": 19.99
        },
        {
          "sku": "STAMP-02-073-US",
          "shippingFrom": "US",
          "shippingDesc": "Local Shipping (3-5 days)",
          "price": 15,
          "originalPrice": 19.99
        }
      ]
    },
    {
      "id": 20960,
      "name": "2001 US America Responds First Class Forever Stamps",
      "category": "Forever Stamps 73$, History, History &amp; Heritage",
      "theme": "Patriotic",
      "postage": "Forever First-Class",
      "image": "https://discountstampdeal.com/wp-content/uploads/2025/02/2025-1-4-2-1.webp",
      "rating": "4.6",
      "reviews": 50,
      "description": "",
      "variants": [
        {
          "sku": "STAMP-01-071-CN",
          "shippingFrom": "CN",
          "shippingDesc": "China Shipping (2-3 weeks)",
          "price": 5,
          "originalPrice": 19.99
        },
        {
          "sku": "STAMP-01-071-US",
          "shippingFrom": "US",
          "shippingDesc": "Local Shipping (3-5 days)",
          "price": 15,
          "originalPrice": 19.99
        }
      ]
    },
    {
      "id": 20997,
      "name": "2016 Patriotic Spiral Forever First Class Forever Stamps",
      "category": "Celebrations, Celebrations &amp; Thanks, Forever Stamps 73$, Science &amp; Space",
      "theme": "Patriotic",
      "postage": "Forever First-Class",
      "image": "https://discountstampdeal.com/wp-content/uploads/2025/02/2025-1-4-17-1.webp",
      "rating": "4.4",
      "reviews": 16,
      "description": "",
      "variants": [
        {
          "sku": "STAMP-16-059-CN",
          "shippingFrom": "CN",
          "shippingDesc": "China Shipping (2-3 weeks)",
          "price": 5,
          "originalPrice": 19.99
        },
        {
          "sku": "STAMP-16-059-US",
          "shippingFrom": "US",
          "shippingDesc": "Local Shipping (3-5 days)",
          "price": 15,
          "originalPrice": 19.99
        }
      ]
    },
    {
      "id": 21081,
      "name": "2013 A Flag for All Seasons Forever First Class Postage Stamps",
      "category": "Forever Stamps 73$, History &amp; Heritage, Patriotic",
      "theme": "Patriotic",
      "postage": "Forever First-Class",
      "image": "https://discountstampdeal.com/wp-content/uploads/2025/02/2025-1-4-57-1.webp",
      "rating": "4.1",
      "reviews": 46,
      "description": "",
      "variants": [
        {
          "sku": "STAMP-13-033-CN",
          "shippingFrom": "CN",
          "shippingDesc": "China Shipping (2-3 weeks)",
          "price": 5,
          "originalPrice": 19.99
        },
        {
          "sku": "STAMP-13-033-US",
          "shippingFrom": "US",
          "shippingDesc": "Local Shipping (3-5 days)",
          "price": 15,
          "originalPrice": 19.99
        }
      ]
    },
    {
      "id": 21121,
      "name": "2024 U.S. Flags Forever First Class Postage Stamps",
      "category": "Forever Stamps 73$",
      "theme": "Patriotic",
      "postage": "Forever First-Class",
      "image": "https://discountstampdeal.com/wp-content/uploads/2025/02/2-23-4.webp",
      "rating": "4.5",
      "reviews": 6,
      "description": "",
      "variants": [
        {
          "sku": "STAMP-24-023-CN",
          "shippingFrom": "CN",
          "shippingDesc": "China Shipping (2-3 weeks)",
          "price": 5,
          "originalPrice": 19.99
        },
        {
          "sku": "STAMP-24-023-US",
          "shippingFrom": "US",
          "shippingDesc": "Local Shipping (3-5 days)",
          "price": 15,
          "originalPrice": 19.99
        }
      ]
    },
    {
      "id": 21125,
      "name": "2024 U.S. Flags Forever First Class Postage Stamps",
      "category": "Forever Stamps 73$",
      "theme": "Patriotic",
      "postage": "Forever First-Class",
      "image": "https://discountstampdeal.com/wp-content/uploads/2025/02/2-23-5.webp",
      "rating": "4.5",
      "reviews": 7,
      "description": "",
      "variants": [
        {
          "sku": "STAMP-24-021-CN",
          "shippingFrom": "CN",
          "shippingDesc": "China Shipping (2-3 weeks)",
          "price": 5,
          "originalPrice": 19.99
        },
        {
          "sku": "STAMP-24-021-US",
          "shippingFrom": "US",
          "shippingDesc": "Local Shipping (3-5 days)",
          "price": 15,
          "originalPrice": 19.99
        }
      ]
    },
    {
      "id": 710592,
      "name": "2025 U.S. Flags Forever First Class Postage Stamps",
      "category": "Denomination, Forever Stamps 73$",
      "theme": "Patriotic",
      "postage": "Forever First-Class",
      "image": "https://discountstampdeal.com/wp-content/uploads/2025/12/25JIAO.webp",
      "rating": "4.4",
      "reviews": 21,
      "description": "",
      "variants": [
        {
          "sku": "STAMP-25-009-CN",
          "shippingFrom": "CN",
          "shippingDesc": "China Shipping (2-3 weeks)",
          "price": 5,
          "originalPrice": 19.99
        },
        {
          "sku": "STAMP-25-009-US",
          "shippingFrom": "US",
          "shippingDesc": "Local Shipping (3-5 days)",
          "price": 15,
          "originalPrice": 19.99
        }
      ]
    },
    {
      "id": 710593,
      "name": "2025 U.S. Flag – Patriotic Symbol, First-Class Postage",
      "category": "Denomination, Forever Stamps 73$",
      "theme": "Patriotic",
      "postage": "Forever First-Class",
      "image": "https://discountstampdeal.com/wp-content/uploads/2025/12/25-z.webp",
      "rating": "4.5",
      "reviews": 10,
      "description": "",
      "variants": [
        {
          "sku": "STAMP-25-007-CN",
          "shippingFrom": "CN",
          "shippingDesc": "China Shipping (2-3 weeks)",
          "price": 5,
          "originalPrice": 19.99
        },
        {
          "sku": "STAMP-25-007-US",
          "shippingFrom": "US",
          "shippingDesc": "Local Shipping (3-5 days)",
          "price": 15,
          "originalPrice": 19.99
        }
      ]
    }
  ],
  "Holiday": [
    {
      "id": 19038,
      "name": "Hanukkah Forever Stamps",
      "category": "Celebrations &amp; Thanks, Forever Stamps 73$, Holiday",
      "theme": "Holiday",
      "postage": "Forever First-Class",
      "image": "https://discountstampdeal.com/wp-content/uploads/2025/02/D6EEC23D-91C6-3DC7-CBF7-3DC1C71C0380.webp",
      "rating": "4.5",
      "reviews": 26,
      "description": "The forever Stamps art??s colorful digital illustration shows the lighting of the Hanukiah on the last evening of Hanukkah.",
      "variants": [
        {
          "sku": "STAMP-00-281-CN",
          "shippingFrom": "CN",
          "shippingDesc": "China Shipping (2-3 weeks)",
          "price": 5,
          "originalPrice": 19.99
        },
        {
          "sku": "STAMP-00-281-US",
          "shippingFrom": "US",
          "shippingDesc": "Local Shipping (3-5 days)",
          "price": 15,
          "originalPrice": 19.99
        }
      ]
    },
    {
      "id": 19042,
      "name": "Sparkling Holidays Souvenir Forever Stamps",
      "category": "Forever Stamps 73$, Holiday",
      "theme": "Holiday",
      "postage": "Forever First-Class",
      "image": "https://discountstampdeal.com/wp-content/uploads/2025/02/a-31.webp",
      "rating": "4.7",
      "reviews": 36,
      "description": "New Sparkling Holidays Commemorative Forever Stamps featuring classic images of Santa are available for mailing holiday cards and letters this year?? a time-honored tradition embraced by millions annually.",
      "variants": [
        {
          "sku": "STAMP-00-273-CN",
          "shippingFrom": "CN",
          "shippingDesc": "China Shipping (2-3 weeks)",
          "price": 5,
          "originalPrice": 19.99
        },
        {
          "sku": "STAMP-00-273-US",
          "shippingFrom": "US",
          "shippingDesc": "Local Shipping (3-5 days)",
          "price": 15,
          "originalPrice": 19.99
        }
      ]
    },
    {
      "id": 19052,
      "name": "Holiday Windows Forever Stamps",
      "category": "Forever Stamps 73$, Holiday",
      "theme": "Holiday",
      "postage": "Forever First-Class",
      "image": "https://discountstampdeal.com/wp-content/uploads/2025/02/b-49.webp",
      "rating": "4.6",
      "reviews": 40,
      "description": "The Stamps reflect the simple pleasures of the wintry holiday season and feature a candle, a wreath, a star and a lighted tree.",
      "variants": [
        {
          "sku": "STAMP-00-253-CN",
          "shippingFrom": "CN",
          "shippingDesc": "China Shipping (2-3 weeks)",
          "price": 5,
          "originalPrice": 19.99
        },
        {
          "sku": "STAMP-00-253-US",
          "shippingFrom": "US",
          "shippingDesc": "Local Shipping (3-5 days)",
          "price": 15,
          "originalPrice": 19.99
        }
      ]
    },
    {
      "id": 19054,
      "name": "Holiday Wreaths Forever Stamps",
      "category": "Forever Stamps 73$, Holiday",
      "theme": "Holiday",
      "postage": "Forever First-Class",
      "image": "https://discountstampdeal.com/wp-content/uploads/2025/02/a-27.webp",
      "rating": "4.1",
      "reviews": 6,
      "description": "Part of what makes the holiday season so enjoyable is the beauty and nostalgia of the many different decorations. There is garland, twinkling lights, jolly snowmen, Christmas trees, and, of course, wreaths.",
      "variants": [
        {
          "sku": "STAMP-00-249-CN",
          "shippingFrom": "CN",
          "shippingDesc": "China Shipping (2-3 weeks)",
          "price": 5,
          "originalPrice": 19.99
        },
        {
          "sku": "STAMP-00-249-US",
          "shippingFrom": "US",
          "shippingDesc": "Local Shipping (3-5 days)",
          "price": 15,
          "originalPrice": 19.99
        }
      ]
    },
    {
      "id": 19156,
      "name": "Christmas Carols Forever Stamps",
      "category": "Forever Stamps 73$, Holiday",
      "theme": "Holiday",
      "postage": "Forever First-Class",
      "image": "https://discountstampdeal.com/wp-content/uploads/2025/02/a-17.webp",
      "rating": "4.1",
      "reviews": 32,
      "description": "The U.S. Postal Service celebrate the Holiday season tomorrow with four new Forever Stamps featuring images that illustrate the themes of four beloved Christmas carols: ??Jingle Bells,?? ??Deck the Halls,?? ??Silent Night?? and ??Jolly Old Saint Nich",
      "variants": [
        {
          "sku": "STAMP-00-213-CN",
          "shippingFrom": "CN",
          "shippingDesc": "China Shipping (2-3 weeks)",
          "price": 5,
          "originalPrice": 19.99
        },
        {
          "sku": "STAMP-00-213-US",
          "shippingFrom": "US",
          "shippingDesc": "Local Shipping (3-5 days)",
          "price": 15,
          "originalPrice": 19.99
        }
      ]
    },
    {
      "id": 19157,
      "name": "Holiday Delights Forever Stamps",
      "category": "Forever Stamps 73$, Holiday",
      "theme": "Holiday",
      "postage": "Forever First-Class",
      "image": "https://discountstampdeal.com/wp-content/uploads/2025/02/a-18.webp",
      "rating": "4.3",
      "reviews": 49,
      "description": "Celebrate the holidays with Holiday Delights. Inspired by folk art but with a modern graphic vibe, these charming Stamps will add a touch of whimsy to your holiday mailings.\n&nbsp;",
      "variants": [
        {
          "sku": "STAMP-00-211-CN",
          "shippingFrom": "CN",
          "shippingDesc": "China Shipping (2-3 weeks)",
          "price": 5,
          "originalPrice": 19.99
        },
        {
          "sku": "STAMP-00-211-US",
          "shippingFrom": "US",
          "shippingDesc": "Local Shipping (3-5 days)",
          "price": 15,
          "originalPrice": 19.99
        }
      ]
    },
    {
      "id": 19342,
      "name": "Holiday Elves Forever Stamps",
      "category": "Commemorative, Forever Stamps 73$, Holiday",
      "theme": "Holiday",
      "postage": "Forever First-Class",
      "image": "https://discountstampdeal.com/wp-content/uploads/2025/02/0C7F2171-F210-0D9F-3576-5D8FA3316BCB.webp",
      "rating": "4.1",
      "reviews": 46,
      "description": "Whimsical elves bring smiles to the holidays with four new se tenant Stamps from the U.S. Postal Service. The stamp art features an original digital illustration of four elves preparing treats and toys for holiday gift giving.",
      "variants": [
        {
          "sku": "STAMP-00-135-CN",
          "shippingFrom": "CN",
          "shippingDesc": "China Shipping (2-3 weeks)",
          "price": 5,
          "originalPrice": 19.99
        },
        {
          "sku": "STAMP-00-135-US",
          "shippingFrom": "US",
          "shippingDesc": "Local Shipping (3-5 days)",
          "price": 15,
          "originalPrice": 19.99
        }
      ]
    },
    {
      "id": 19376,
      "name": "A Charlie Brown Christmas Forever Stamps",
      "category": "Forever Stamps 73$, Holiday, Kids",
      "theme": "Holiday",
      "postage": "Forever First-Class",
      "image": "https://discountstampdeal.com/wp-content/uploads/2025/02/6FBC0C46-B1E3-94D8-CBCB-E717617FB17C.webp",
      "rating": "4.6",
      "reviews": 26,
      "description": "The Charlie Brown Christmas Forever Stamps provide youngsters with the perfect start for getting into stamp collecting.",
      "variants": [
        {
          "sku": "STAMP-00-115-CN",
          "shippingFrom": "CN",
          "shippingDesc": "China Shipping (2-3 weeks)",
          "price": 5,
          "originalPrice": 19.99
        },
        {
          "sku": "STAMP-00-115-US",
          "shippingFrom": "US",
          "shippingDesc": "Local Shipping (3-5 days)",
          "price": 15,
          "originalPrice": 19.99
        }
      ]
    },
    {
      "id": 19526,
      "name": "Contemporary Christmas: Gingerbread Houses Forever Stamps",
      "category": "Forever Stamps 73$, Holiday",
      "theme": "Holiday",
      "postage": "Forever First-Class",
      "image": "https://discountstampdeal.com/wp-content/uploads/2025/02/1-5.webp",
      "rating": "4.4",
      "reviews": 7,
      "description": "The fondest holiday memories often include the scent of warm ginger, cinnamon, cloves, and molasses used in gingerbread drifting throughout the house. With a little imagination and a lot of patience, gingerbread can be converted into a whimsical hous",
      "variants": [
        {
          "sku": "STAMP-00-153-CN",
          "shippingFrom": "CN",
          "shippingDesc": "China Shipping (2-3 weeks)",
          "price": 5,
          "originalPrice": 19.99
        },
        {
          "sku": "STAMP-00-153-US",
          "shippingFrom": "US",
          "shippingDesc": "Local Shipping (3-5 days)",
          "price": 15,
          "originalPrice": 19.99
        }
      ]
    },
    {
      "id": 19554,
      "name": "Traditional Christmas: Nativity Forever Stamps",
      "category": "Forever Stamps 73$, Holiday",
      "theme": "Holiday",
      "postage": "Forever First-Class",
      "image": "https://discountstampdeal.com/wp-content/uploads/2025/02/1-6.webp",
      "rating": "4.8",
      "reviews": 29,
      "description": "This beautiful stamp was published on the theme of &#8220;Christmas 2016&#8221;. The Forever stamp shows a classic nativity scene of the Holy Family with the baby Jesus and the shining star of Bethlehem in the background.",
      "variants": [
        {
          "sku": "STAMP-00-151-CN",
          "shippingFrom": "CN",
          "shippingDesc": "China Shipping (2-3 weeks)",
          "price": 5,
          "originalPrice": 0
        },
        {
          "sku": "STAMP-00-151-US",
          "shippingFrom": "US",
          "shippingDesc": "Local Shipping (3-5 days)",
          "price": 15,
          "originalPrice": 0
        }
      ]
    },
    {
      "id": 19594,
      "name": "Christmas Magi Forever Stamps",
      "category": "Celebrations &amp; Thanks, Forever Stamps 73$, Holiday",
      "theme": "Holiday",
      "postage": "Forever First-Class",
      "image": "https://discountstampdeal.com/wp-content/uploads/2025/02/1-2.webp",
      "rating": "4.5",
      "reviews": 26,
      "description": "The stamp celebrates the biblical story of three visitors from the east who came bearing gifts for Jesus. The stamp art depicts the Magi atop camels near the summit of a small hill. Guiding them is a large, dazzling star.",
      "variants": [
        {
          "sku": "STAMP-00-137-CN",
          "shippingFrom": "CN",
          "shippingDesc": "China Shipping (2-3 weeks)",
          "price": 5,
          "originalPrice": 19.99
        },
        {
          "sku": "STAMP-00-137-US",
          "shippingFrom": "US",
          "shippingDesc": "Local Shipping (3-5 days)",
          "price": 15,
          "originalPrice": 19.99
        }
      ]
    },
    {
      "id": 20873,
      "name": "2022 Kwanzaa Forever First Class Postage Stamps",
      "category": "Commemorative, Denomination, Forever Stamps 73$, Fundraising, History &amp; Heritage, Priority Mail",
      "theme": "Holiday",
      "postage": "Forever First-Class",
      "image": "https://discountstampdeal.com/wp-content/uploads/2025/02/2024-12-17-1.jpg",
      "rating": "4.0",
      "reviews": 5,
      "description": "",
      "variants": [
        {
          "sku": "STAMP-22-095-CN",
          "shippingFrom": "CN",
          "shippingDesc": "China Shipping (2-3 weeks)",
          "price": 5,
          "originalPrice": 19.99
        },
        {
          "sku": "STAMP-22-095-US",
          "shippingFrom": "US",
          "shippingDesc": "Local Shipping (3-5 days)",
          "price": 15,
          "originalPrice": 19.99
        }
      ]
    },
    {
      "id": 20908,
      "name": "Holiday Baubles 2011 Forever Stamps",
      "category": "Forever Stamps 73$, Holiday, Priority Mail",
      "theme": "Holiday",
      "postage": "Forever First-Class",
      "image": "https://discountstampdeal.com/wp-content/uploads/2025/02/2024-12-29-1.jpg",
      "rating": "4.6",
      "reviews": 39,
      "description": "",
      "variants": [
        {
          "sku": "STAMP-11-087-CN",
          "shippingFrom": "CN",
          "shippingDesc": "China Shipping (2-3 weeks)",
          "price": 5,
          "originalPrice": 19.99
        },
        {
          "sku": "STAMP-11-087-US",
          "shippingFrom": "US",
          "shippingDesc": "Local Shipping (3-5 days)",
          "price": 15,
          "originalPrice": 19.99
        }
      ]
    },
    {
      "id": 20985,
      "name": "2010 Holiday Evergreens Forever First Class Forever Stamps",
      "category": "Animals &amp; Nature, Animals&amp;Nature, Forever Stamps 73$, Fruits",
      "theme": "Holiday",
      "postage": "Forever First-Class",
      "image": "https://discountstampdeal.com/wp-content/uploads/2025/02/2025-1-4-11-1.webp",
      "rating": "4.9",
      "reviews": 46,
      "description": "",
      "variants": [
        {
          "sku": "STAMP-10-065-CN",
          "shippingFrom": "CN",
          "shippingDesc": "China Shipping (2-3 weeks)",
          "price": 5,
          "originalPrice": 19.99
        },
        {
          "sku": "STAMP-10-065-US",
          "shippingFrom": "US",
          "shippingDesc": "Local Shipping (3-5 days)",
          "price": 15,
          "originalPrice": 19.99
        }
      ]
    },
    {
      "id": 21033,
      "name": "2020 Kwanzaa Forever First Class Postage Stamps",
      "category": "Commemorative, Denomination, Forever Stamps 73$",
      "theme": "Holiday",
      "postage": "Forever First-Class",
      "image": "https://discountstampdeal.com/wp-content/uploads/2025/02/2025-1-4-34-1.webp",
      "rating": "4.4",
      "reviews": 49,
      "description": "",
      "variants": [
        {
          "sku": "STAMP-20-049-CN",
          "shippingFrom": "CN",
          "shippingDesc": "China Shipping (2-3 weeks)",
          "price": 5,
          "originalPrice": 19.99
        },
        {
          "sku": "STAMP-20-049-US",
          "shippingFrom": "US",
          "shippingDesc": "Local Shipping (3-5 days)",
          "price": 15,
          "originalPrice": 19.99
        }
      ]
    },
    {
      "id": 21157,
      "name": "2024 Carnival Nights Forever First Class Postage Stamps",
      "category": "Forever Stamps 73$",
      "theme": "Holiday",
      "postage": "Forever First-Class",
      "image": "https://discountstampdeal.com/wp-content/uploads/2025/02/2-23-15.webp",
      "rating": "4.4",
      "reviews": 15,
      "description": "",
      "variants": [
        {
          "sku": "STAMP-24-013-CN",
          "shippingFrom": "CN",
          "shippingDesc": "China Shipping (2-3 weeks)",
          "price": 5,
          "originalPrice": 19.99
        },
        {
          "sku": "STAMP-24-013-US",
          "shippingFrom": "US",
          "shippingDesc": "Local Shipping (3-5 days)",
          "price": 15,
          "originalPrice": 19.99
        }
      ]
    },
    {
      "id": 21161,
      "name": "2024 Kwanzaa Forever First Class Postage Stamps",
      "category": "Forever Stamps 73$",
      "theme": "Holiday",
      "postage": "Forever First-Class",
      "image": "https://discountstampdeal.com/wp-content/uploads/2025/02/2-23-18.webp",
      "rating": "4.7",
      "reviews": 52,
      "description": "",
      "variants": [
        {
          "sku": "STAMP-24-011-CN",
          "shippingFrom": "CN",
          "shippingDesc": "China Shipping (2-3 weeks)",
          "price": 5,
          "originalPrice": 19.99
        },
        {
          "sku": "STAMP-24-011-US",
          "shippingFrom": "US",
          "shippingDesc": "Local Shipping (3-5 days)",
          "price": 15,
          "originalPrice": 19.99
        }
      ]
    },
    {
      "id": 710594,
      "name": "2025 Holiday Cheer – Cardinals, Wreath, Holly & Poinsettia Designs, First-Class Postage",
      "category": "Denomination, Holiday",
      "theme": "Holiday",
      "postage": "Forever First-Class",
      "image": "https://discountstampdeal.com/wp-content/uploads/2025/12/25-HQ8.webp",
      "rating": "4.4",
      "reviews": 38,
      "description": "",
      "variants": [
        {
          "sku": "STAMP-25-005-CN",
          "shippingFrom": "CN",
          "shippingDesc": "China Shipping (2-3 weeks)",
          "price": 5,
          "originalPrice": 19.99
        },
        {
          "sku": "STAMP-25-005-US",
          "shippingFrom": "US",
          "shippingDesc": "Local Shipping (3-5 days)",
          "price": 15,
          "originalPrice": 19.99
        }
      ]
    },
    {
      "id": 710595,
      "name": "2024 First-Class Forever Stamps – Holiday Joy",
      "category": "Celebrations &amp; Thanks, Commemorative, Denomination, Forever Stamps 73$, Holiday",
      "theme": "Holiday",
      "postage": "Forever First-Class",
      "image": "https://discountstampdeal.com/wp-content/uploads/2025/12/24-4.jpg",
      "rating": "4.0",
      "reviews": 19,
      "description": "",
      "variants": [
        {
          "sku": "STAMP-24-003-CN",
          "shippingFrom": "CN",
          "shippingDesc": "China Shipping (2-3 weeks)",
          "price": 5,
          "originalPrice": 19.99
        },
        {
          "sku": "STAMP-24-003-US",
          "shippingFrom": "US",
          "shippingDesc": "Local Shipping (3-5 days)",
          "price": 15,
          "originalPrice": 19.99
        }
      ]
    }
  ],
  "Kids": [
    {
      "id": 19047,
      "name": "Florentine Madonna And Child Forever Stamps",
      "category": "Forever Stamps 73$, History &amp; Heritage, Holiday",
      "theme": "Kids",
      "postage": "Forever First-Class",
      "image": "https://discountstampdeal.com/wp-content/uploads/2025/02/0E7AC201-CC26-7171-53A6-D2AEE884CAB5.webp",
      "rating": "4.4",
      "reviews": 49,
      "description": "This Christmas stamp features a detail of Madonna and Child, a 15th-century tempera-on-panel painting.",
      "variants": [
        {
          "sku": "STAMP-00-263-CN",
          "shippingFrom": "CN",
          "shippingDesc": "China Shipping (2-3 weeks)",
          "price": 5,
          "originalPrice": 19.99
        },
        {
          "sku": "STAMP-00-263-US",
          "shippingFrom": "US",
          "shippingDesc": "Local Shipping (3-5 days)",
          "price": 15,
          "originalPrice": 19.99
        }
      ]
    },
    {
      "id": 19343,
      "name": "Virgin and Child Forever Stamps",
      "category": "Holiday",
      "theme": "Kids",
      "postage": "Forever First-Class",
      "image": "https://discountstampdeal.com/wp-content/uploads/2025/02/79.jpg",
      "rating": "4.0",
      "reviews": 36,
      "description": "Depicting the tender bond between a mother and her child, interpretations of the Virgin Mary with the Christ Child take innumerable forms in the Christian art of the Italian Renaissance. This stamp features Virgin and Child, an oil-on-panel painting ",
      "variants": [
        {
          "sku": "STAMP-00-133-CN",
          "shippingFrom": "CN",
          "shippingDesc": "China Shipping (2-3 weeks)",
          "price": 5,
          "originalPrice": 19.99
        },
        {
          "sku": "STAMP-00-133-US",
          "shippingFrom": "US",
          "shippingDesc": "Local Shipping (3-5 days)",
          "price": 15,
          "originalPrice": 19.99
        }
      ]
    },
    {
      "id": 19595,
      "name": "2018 Madonna and Child Forever Stamps",
      "category": "Forever Stamps 73$, History &amp; Heritage",
      "theme": "Kids",
      "postage": "Forever First-Class",
      "image": "https://discountstampdeal.com/wp-content/uploads/2025/02/1-1.webp",
      "rating": "4.6",
      "reviews": 14,
      "description": "This forever stamp features a detail of Bachiacca??s oil-and-gold-on-panel painting ??Madonna and Child,?? which dates from the early 1520s, showing the Christ child clutching a bouquet of jasmine, a symbol of divine love, alongside the Virgin Mary??",
      "variants": [
        {
          "sku": "STAMP-18-135-CN",
          "shippingFrom": "CN",
          "shippingDesc": "China Shipping (2-3 weeks)",
          "price": 5,
          "originalPrice": 19.99
        },
        {
          "sku": "STAMP-18-135-US",
          "shippingFrom": "US",
          "shippingDesc": "Local Shipping (3-5 days)",
          "price": 15,
          "originalPrice": 19.99
        }
      ]
    }
  ],
  "Science & Space": [
    {
      "id": 19055,
      "name": "2014 Star-Spangled Banner Forever Stamps",
      "category": "Forever Stamps 73$, Patriotic",
      "theme": "Science & Space",
      "postage": "Forever First-Class",
      "image": "https://discountstampdeal.com/wp-content/uploads/2025/02/D7A52853-F332-9FD7-D658-E9F27DBEF204.webp",
      "rating": "4.4",
      "reviews": 40,
      "description": "This stamp design features a photograph of the flag that flies over Fort McHenry National Monument and His-toric Shrine in Baltimore, MD. This flag is a replica of the one that inspired Francis Scott Key to write ??The Star-Spangled Banner?? after re",
      "variants": [
        {
          "sku": "STAMP-14-247-CN",
          "shippingFrom": "CN",
          "shippingDesc": "China Shipping (2-3 weeks)",
          "price": 5,
          "originalPrice": 19.99
        },
        {
          "sku": "STAMP-14-247-US",
          "shippingFrom": "US",
          "shippingDesc": "Local Shipping (3-5 days)",
          "price": 15,
          "originalPrice": 19.99
        }
      ]
    },
    {
      "id": 19185,
      "name": "Star Wars? Droids Forever Stamps",
      "category": "Forever Stamps 73$",
      "theme": "Science & Space",
      "postage": "Forever First-Class",
      "image": "https://discountstampdeal.com/wp-content/uploads/2025/02/a-11.webp",
      "rating": "4.3",
      "reviews": 39,
      "description": "Star Wars? Droids, the marvelousmechanical characters inspired by agalaxy far, far away, have entertained and inspired for more than four decades. In 2021, the U.S. Postal Service celebrates these wondrous creations with a pane of 20 Stamps featuring",
      "variants": [
        {
          "sku": "STAMP-00-197-CN",
          "shippingFrom": "CN",
          "shippingDesc": "China Shipping (2-3 weeks)",
          "price": 5,
          "originalPrice": 19.99
        },
        {
          "sku": "STAMP-00-197-US",
          "shippingFrom": "US",
          "shippingDesc": "Local Shipping (3-5 days)",
          "price": 15,
          "originalPrice": 19.99
        }
      ]
    },
    {
      "id": 19432,
      "name": "James Webb Space Telescope Forever Stamps",
      "category": "Forever Stamps 73$, Science &amp; Space",
      "theme": "Science & Space",
      "postage": "Forever First-Class",
      "image": "https://discountstampdeal.com/wp-content/uploads/2025/02/602654AF-40E1-7AA7-5E1B-76910505DD00.webp",
      "rating": "4.4",
      "reviews": 53,
      "description": "With this stamp,the U.S. Postal Service calebrates the James Webb Space Telescope,the largest and most sensitive telescope ever deployed in space.The James Webb Space Telescope stamp is being issued as a Forever stamp in panes of 20.",
      "variants": [
        {
          "sku": "STAMP-00-191-CN",
          "shippingFrom": "CN",
          "shippingDesc": "China Shipping (2-3 weeks)",
          "price": 5,
          "originalPrice": 19.99
        },
        {
          "sku": "STAMP-00-191-US",
          "shippingFrom": "US",
          "shippingDesc": "Local Shipping (3-5 days)",
          "price": 15,
          "originalPrice": 19.99
        }
      ]
    },
    {
      "id": 20833,
      "name": "$9.85 Pillars of Creation Forever Stamps",
      "category": "Priority Mail, Science &amp; Space",
      "theme": "Science & Space",
      "postage": "Forever First-Class",
      "image": "https://discountstampdeal.com/wp-content/uploads/2025/02/m93866849744_1.jpg",
      "rating": "4.6",
      "reviews": 36,
      "description": "Imagine the origins of solar systems with the new Priority Mail? Pillars of Creation stamp from the U.S. Postal Service?. The aweinspiring image is an example of deep space exploration made possible by the James Webb Space Telescope (Webb).",
      "variants": [
        {
          "sku": "STAMP-00-109-CN",
          "shippingFrom": "CN",
          "shippingDesc": "China Shipping (2-3 weeks)",
          "price": 5,
          "originalPrice": 25
        },
        {
          "sku": "STAMP-00-109-US",
          "shippingFrom": "US",
          "shippingDesc": "Local Shipping (3-5 days)",
          "price": 15,
          "originalPrice": 25
        }
      ]
    },
    {
      "id": 20948,
      "name": "2019 Star Ribbon Forever First Class Postage Stamps",
      "category": "Celebrations &amp; Thanks, Denomination, Forever Stamps 73$, Patriotic, Priority Mail",
      "theme": "Science & Space",
      "postage": "Forever First-Class",
      "image": "https://discountstampdeal.com/wp-content/uploads/2025/02/2024-12-43-1.webp",
      "rating": "4.6",
      "reviews": 10,
      "description": "",
      "variants": [
        {
          "sku": "STAMP-19-077-CN",
          "shippingFrom": "CN",
          "shippingDesc": "China Shipping (2-3 weeks)",
          "price": 5,
          "originalPrice": 19.99
        },
        {
          "sku": "STAMP-19-077-US",
          "shippingFrom": "US",
          "shippingDesc": "Local Shipping (3-5 days)",
          "price": 15,
          "originalPrice": 19.99
        }
      ]
    },
    {
      "id": 21077,
      "name": "2024 Pillars of Creation and Cosmic Priority Mail Postage Stamps",
      "category": "Commemorative, Denomination, International $1.55, Priority Mail, Priority Mail Express, Semipostal 85$, Three Ounce $1.16, Two Ounce 92$",
      "theme": "Science & Space",
      "postage": "Priority Mail",
      "image": "https://discountstampdeal.com/wp-content/uploads/2025/02/2025-1-4-54-1.webp",
      "rating": "4.5",
      "reviews": 35,
      "description": "",
      "variants": [
        {
          "sku": "STAMP-24-035-CN",
          "shippingFrom": "CN",
          "shippingDesc": "China Shipping (2-3 weeks)",
          "price": 5,
          "originalPrice": 140
        },
        {
          "sku": "STAMP-24-035-US",
          "shippingFrom": "US",
          "shippingDesc": "Local Shipping (3-5 days)",
          "price": 15,
          "originalPrice": 140
        }
      ]
    }
  ],
  "Animals & Nature": [
    {
      "id": 19085,
      "name": "Pets Celebrate Animals Forever Stamps",
      "category": "Animals &amp; Nature, Forever Stamps 73$",
      "theme": "Animals & Nature",
      "postage": "Forever First-Class",
      "image": "https://discountstampdeal.com/wp-content/uploads/2025/02/a-24.webp",
      "rating": "4.9",
      "reviews": 26,
      "description": "Americans love their pets ?C in 2015 alone, over 60 billion dollars was spent to purchase and care for them. In the United States, over 312 million dogs, cats, birds, horses, fish, reptiles and other small animals are kept as pets and companions.",
      "variants": [
        {
          "sku": "STAMP-00-237-CN",
          "shippingFrom": "CN",
          "shippingDesc": "China Shipping (2-3 weeks)",
          "price": 5,
          "originalPrice": 19.99
        },
        {
          "sku": "STAMP-00-237-US",
          "shippingFrom": "US",
          "shippingDesc": "Local Shipping (3-5 days)",
          "price": 15,
          "originalPrice": 19.99
        }
      ]
    },
    {
      "id": 19136,
      "name": "$1.12 California Dogface Butterfly",
      "category": "Animals &amp; Nature, Non-Machineable $1.12",
      "theme": "Animals & Nature",
      "postage": "Forever First-Class",
      "image": "https://discountstampdeal.com/wp-content/uploads/2025/02/D6D37D75-BB21-1A37-2262-ADEA2E5FDC67.webp",
      "rating": "4.1",
      "reviews": 28,
      "description": "The stamp art was digitally created using images of preserved butterflies as a starting point. The result is a highly stylized, simplified image of a California Dogface (Zerene eurydice) rather than an exact reproduction.",
      "variants": [
        {
          "sku": "STAMP-00-215-CN",
          "shippingFrom": "CN",
          "shippingDesc": "China Shipping (2-3 weeks)",
          "price": 5,
          "originalPrice": 35
        },
        {
          "sku": "STAMP-00-215-US",
          "shippingFrom": "US",
          "shippingDesc": "Local Shipping (3-5 days)",
          "price": 15,
          "originalPrice": 35
        }
      ]
    },
    {
      "id": 19160,
      "name": "Birds in Winter Forever Stamps",
      "category": "Animals &amp; Nature, Forever Stamps 73$",
      "theme": "Animals & Nature",
      "postage": "Forever First-Class",
      "image": "https://discountstampdeal.com/wp-content/uploads/2025/02/45646.webp",
      "rating": "4.3",
      "reviews": 38,
      "description": "Issued in Sept 2018, these forever Stamps feature four striking designs that highlight the handsome plumage of these resident birds.",
      "variants": [
        {
          "sku": "STAMP-00-205-CN",
          "shippingFrom": "CN",
          "shippingDesc": "China Shipping (2-3 weeks)",
          "price": 5,
          "originalPrice": 19.99
        },
        {
          "sku": "STAMP-00-205-US",
          "shippingFrom": "US",
          "shippingDesc": "Local Shipping (3-5 days)",
          "price": 15,
          "originalPrice": 19.99
        }
      ]
    },
    {
      "id": 19183,
      "name": "Songbirds in Snow Forever Stamps",
      "category": "Animals &amp; Nature, Forever Stamps 73$",
      "theme": "Animals & Nature",
      "postage": "Forever First-Class",
      "image": "https://discountstampdeal.com/wp-content/uploads/2025/02/a-13.webp",
      "rating": "4.0",
      "reviews": 48,
      "description": "The four birds on these Stamps are all native to North America, though some are more commonly seen than others.",
      "variants": [
        {
          "sku": "STAMP-00-201-CN",
          "shippingFrom": "CN",
          "shippingDesc": "China Shipping (2-3 weeks)",
          "price": 5,
          "originalPrice": 19.99
        },
        {
          "sku": "STAMP-00-201-US",
          "shippingFrom": "US",
          "shippingDesc": "Local Shipping (3-5 days)",
          "price": 15,
          "originalPrice": 19.99
        }
      ]
    },
    {
      "id": 19485,
      "name": "40¢ Stamps 2023 Red Fox – Wildlife Series, First-Class Rate",
      "category": "Additional Postage, Animals &amp; Nature",
      "theme": "Animals & Nature",
      "postage": "Forever First-Class",
      "image": "https://discountstampdeal.com/wp-content/uploads/2025/02/2B5B32C4-874D-0301-E5FE-DF7E171E319E.webp",
      "rating": "4.3",
      "reviews": 23,
      "description": "This 40-cent stamp features a red fox. Sold in panes of 20 and in self-adhesive coils of 3,000 and 10,000, the stamp is intended for use by bulk mailers for items such as circulars, newsletters, and catalogs. It can also be used by customers who enjo",
      "variants": [
        {
          "sku": "STAMP-23-179-CN",
          "shippingFrom": "CN",
          "shippingDesc": "China Shipping (2-3 weeks)",
          "price": 5,
          "originalPrice": 23
        },
        {
          "sku": "STAMP-23-179-US",
          "shippingFrom": "US",
          "shippingDesc": "Local Shipping (3-5 days)",
          "price": 15,
          "originalPrice": 23
        }
      ]
    },
    {
      "id": 19560,
      "name": "Winter Woodland Animals Forever Stamps",
      "category": "Forever Stamps 73$, Holiday",
      "theme": "Animals & Nature",
      "postage": "Forever First-Class",
      "image": "https://discountstampdeal.com/wp-content/uploads/2025/02/20240509113751_.png",
      "rating": "4.8",
      "reviews": 51,
      "description": "The U.S. Postal Service is celebrating four species that make their homes in the woodlands of North America with today??s issuance of the Winter Woodland Animals Stamps. Among the most familiar wildlife spotted across much of the American landscape, ",
      "variants": [
        {
          "sku": "STAMP-00-139-CN",
          "shippingFrom": "CN",
          "shippingDesc": "China Shipping (2-3 weeks)",
          "price": 5,
          "originalPrice": 19.99
        },
        {
          "sku": "STAMP-00-139-US",
          "shippingFrom": "US",
          "shippingDesc": "Local Shipping (3-5 days)",
          "price": 15,
          "originalPrice": 19.99
        }
      ]
    },
    {
      "id": 20940,
      "name": "2019 Military Working Dogs Forever Stamps",
      "category": "Animals&amp;Nature, Denomination, Forever Stamps 73$, Priority Mail",
      "theme": "Animals & Nature",
      "postage": "Forever First-Class",
      "image": "https://discountstampdeal.com/wp-content/uploads/2025/02/2024-12-38-1.jpg",
      "rating": "4.8",
      "reviews": 38,
      "description": "",
      "variants": [
        {
          "sku": "STAMP-19-081-CN",
          "shippingFrom": "CN",
          "shippingDesc": "China Shipping (2-3 weeks)",
          "price": 5,
          "originalPrice": 19.99
        },
        {
          "sku": "STAMP-19-081-US",
          "shippingFrom": "US",
          "shippingDesc": "Local Shipping (3-5 days)",
          "price": 15,
          "originalPrice": 19.99
        }
      ]
    },
    {
      "id": 20989,
      "name": "BIRDS OF PREY 2012  Postage Stamps",
      "category": "Animals &amp; Nature, Forever Stamps 73$, Priority Mail Express",
      "theme": "Animals & Nature",
      "postage": "Forever First-Class",
      "image": "https://discountstampdeal.com/wp-content/uploads/2025/02/2025-1-12-1.webp",
      "rating": "4.3",
      "reviews": 30,
      "description": "",
      "variants": [
        {
          "sku": "STAMP-12-063-CN",
          "shippingFrom": "CN",
          "shippingDesc": "China Shipping (2-3 weeks)",
          "price": 5,
          "originalPrice": 19.99
        },
        {
          "sku": "STAMP-12-063-US",
          "shippingFrom": "US",
          "shippingDesc": "Local Shipping (3-5 days)",
          "price": 15,
          "originalPrice": 19.99
        }
      ]
    },
    {
      "id": 21085,
      "name": "2006 Common Buckeye Butterfly First Class Postage Stamps",
      "category": "Animals &amp; Nature, Animals&amp;Nature, Forever Stamps 73$",
      "theme": "Animals & Nature",
      "postage": "Forever First-Class",
      "image": "https://discountstampdeal.com/wp-content/uploads/2025/02/2025-1-4-60-1.webp",
      "rating": "4.6",
      "reviews": 36,
      "description": "",
      "variants": [
        {
          "sku": "STAMP-06-031-CN",
          "shippingFrom": "CN",
          "shippingDesc": "China Shipping (2-3 weeks)",
          "price": 5,
          "originalPrice": 59.98
        },
        {
          "sku": "STAMP-06-031-US",
          "shippingFrom": "US",
          "shippingDesc": "Local Shipping (3-5 days)",
          "price": 15,
          "originalPrice": 59.98
        }
      ]
    },
    {
      "id": 21129,
      "name": "2024 Horses Forever First Class Postage Stamps",
      "category": "Forever Stamps 73$",
      "theme": "Animals & Nature",
      "postage": "Forever First-Class",
      "image": "https://discountstampdeal.com/wp-content/uploads/2025/02/2-23-6.webp",
      "rating": "5.0",
      "reviews": 21,
      "description": "",
      "variants": [
        {
          "sku": "STAMP-24-019-CN",
          "shippingFrom": "CN",
          "shippingDesc": "China Shipping (2-3 weeks)",
          "price": 5,
          "originalPrice": 19.99
        },
        {
          "sku": "STAMP-24-019-US",
          "shippingFrom": "US",
          "shippingDesc": "Local Shipping (3-5 days)",
          "price": 15,
          "originalPrice": 19.99
        }
      ]
    },
    {
      "id": 21133,
      "name": "2024 Protect Sea Turtles Forever First Class Postage Stamps",
      "category": "Forever Stamps 73$",
      "theme": "Animals & Nature",
      "postage": "Forever First-Class",
      "image": "https://discountstampdeal.com/wp-content/uploads/2025/02/2-23-9.webp",
      "rating": "4.4",
      "reviews": 51,
      "description": "",
      "variants": [
        {
          "sku": "STAMP-24-017-CN",
          "shippingFrom": "CN",
          "shippingDesc": "China Shipping (2-3 weeks)",
          "price": 5,
          "originalPrice": 19.99
        },
        {
          "sku": "STAMP-24-017-US",
          "shippingFrom": "US",
          "shippingDesc": "Local Shipping (3-5 days)",
          "price": 15,
          "originalPrice": 19.99
        }
      ]
    }
  ],
  "Floral": [
    {
      "id": 19133,
      "name": "Cactus Flowers Forever Stamps",
      "category": "Forever Stamps 73$, Fruits &amp; Flowers",
      "theme": "Floral",
      "postage": "Forever First-Class",
      "image": "https://discountstampdeal.com/wp-content/uploads/2025/02/a-19.webp",
      "rating": "4.8",
      "reviews": 27,
      "description": "Cactus flowers generally occur singly, although many separate blossoms might appear on a plant at the same time. Flowering occurs at different times of the year and even different times of the day or night. Most cactus flowers are large and flamboyan",
      "variants": [
        {
          "sku": "STAMP-00-221-CN",
          "shippingFrom": "CN",
          "shippingDesc": "China Shipping (2-3 weeks)",
          "price": 5,
          "originalPrice": 19.99
        },
        {
          "sku": "STAMP-00-221-US",
          "shippingFrom": "US",
          "shippingDesc": "Local Shipping (3-5 days)",
          "price": 15,
          "originalPrice": 19.99
        }
      ]
    },
    {
      "id": 19214,
      "name": "Flowers from the Garden Forever Stamps",
      "category": "Forever Stamps 73$, Fruits &amp; Flowers",
      "theme": "Floral",
      "postage": "Forever First-Class",
      "image": "https://discountstampdeal.com/wp-content/uploads/2025/02/1.jpg",
      "rating": "4.5",
      "reviews": 17,
      "description": "The U.S. Postal Service celebrates the beauty of flowers from American gardens by issuing the Flowers from the Garden Forever Stamps. The four Stamps feature still-life paintings of bountiful floral bouquets, sold in booklets of 20 Stamps.\n&nbsp;",
      "variants": [
        {
          "sku": "STAMP-00-185-CN",
          "shippingFrom": "CN",
          "shippingDesc": "China Shipping (2-3 weeks)",
          "price": 5,
          "originalPrice": 19.99
        },
        {
          "sku": "STAMP-00-185-US",
          "shippingFrom": "US",
          "shippingDesc": "Local Shipping (3-5 days)",
          "price": 15,
          "originalPrice": 19.99
        }
      ]
    },
    {
      "id": 19243,
      "name": "Sunflower Bouquet Forever Stamps Two Ounce",
      "category": "Fruits &amp; Flowers, Two Ounce 92$, Wedding",
      "theme": "Floral",
      "postage": "Two-Ounce",
      "image": "https://discountstampdeal.com/wp-content/uploads/2025/02/DAD1608C-EA4E-7032-E425-3E38C7AC73AD.webp",
      "rating": "4.3",
      "reviews": 41,
      "description": "This new stamp features five sunflowers as part of a bright and beautiful bouquet. As a two-ounce stamp, Sunflower Bouquet can accommodate the weight of heavy invitations for birthdays, weddings, anniversaries, and other celebrations; oversized greet",
      "variants": [
        {
          "sku": "STAMP-00-171-CN",
          "shippingFrom": "CN",
          "shippingDesc": "China Shipping (2-3 weeks)",
          "price": 5,
          "originalPrice": 37
        },
        {
          "sku": "STAMP-00-171-US",
          "shippingFrom": "US",
          "shippingDesc": "Local Shipping (3-5 days)",
          "price": 15,
          "originalPrice": 37
        }
      ]
    },
    {
      "id": 19524,
      "name": "Winter Flowers Forever Stamps",
      "category": "Forever Stamps 73$, Fruits &amp; Flowers",
      "theme": "Floral",
      "postage": "Forever First-Class",
      "image": "https://discountstampdeal.com/wp-content/uploads/2025/02/1-8.webp",
      "rating": "4.6",
      "reviews": 50,
      "description": "The U.S. Postal Service celebrates the blooms that brighten the gray days of winter today by issuing the Winter Flowers Forever Stamps. Pictured clockwise from upper left, the four featured plants ?? amaryllis, cyclamen, Christmas cactus and paperwhi",
      "variants": [
        {
          "sku": "STAMP-00-157-CN",
          "shippingFrom": "CN",
          "shippingDesc": "China Shipping (2-3 weeks)",
          "price": 5,
          "originalPrice": 19.99
        },
        {
          "sku": "STAMP-00-157-US",
          "shippingFrom": "US",
          "shippingDesc": "Local Shipping (3-5 days)",
          "price": 15,
          "originalPrice": 19.99
        }
      ]
    },
    {
      "id": 20904,
      "name": "2015 Engraved Vintage Rose Forever First Class Stamps",
      "category": "Denomination, Forever Stamps 73$, Love, Priority Mail Express, Wedding",
      "theme": "Floral",
      "postage": "Forever First-Class",
      "image": "https://discountstampdeal.com/wp-content/uploads/2025/02/2024-12-24-1.webp",
      "rating": "4.3",
      "reviews": 35,
      "description": "",
      "variants": [
        {
          "sku": "STAMP-15-089-CN",
          "shippingFrom": "CN",
          "shippingDesc": "China Shipping (2-3 weeks)",
          "price": 5,
          "originalPrice": 19.99
        },
        {
          "sku": "STAMP-15-089-US",
          "shippingFrom": "US",
          "shippingDesc": "Local Shipping (3-5 days)",
          "price": 15,
          "originalPrice": 19.99
        }
      ]
    },
    {
      "id": 20977,
      "name": "Four Flowers Stamps 2000",
      "category": "Forever Stamps 73$, Fruits &amp; Flowers",
      "theme": "Floral",
      "postage": "Forever First-Class",
      "image": "https://discountstampdeal.com/wp-content/uploads/2025/02/2025-1-4-5-1.jpg",
      "rating": "4.8",
      "reviews": 29,
      "description": "",
      "variants": [
        {
          "sku": "STAMP-00-069-CN",
          "shippingFrom": "CN",
          "shippingDesc": "China Shipping (2-3 weeks)",
          "price": 5,
          "originalPrice": 19.99
        },
        {
          "sku": "STAMP-00-069-US",
          "shippingFrom": "US",
          "shippingDesc": "Local Shipping (3-5 days)",
          "price": 15,
          "originalPrice": 19.99
        }
      ]
    },
    {
      "id": 21041,
      "name": "2022 $5 Floral Geometry Forever First Class Postage Stamp",
      "category": "Postcard 53$, Priority Mail, Priority Mail Express",
      "theme": "Floral",
      "postage": "Forever First-Class",
      "image": "https://discountstampdeal.com/wp-content/uploads/2025/02/2025-1-4-39-1.webp",
      "rating": "4.7",
      "reviews": 28,
      "description": "",
      "variants": [
        {
          "sku": "STAMP-22-045-CN",
          "shippingFrom": "CN",
          "shippingDesc": "China Shipping (2-3 weeks)",
          "price": 5,
          "originalPrice": 29.99
        },
        {
          "sku": "STAMP-22-045-US",
          "shippingFrom": "US",
          "shippingDesc": "Local Shipping (3-5 days)",
          "price": 15,
          "originalPrice": 29.99
        }
      ]
    },
    {
      "id": 21061,
      "name": "2022 $2 Floral Geometry Forever First Class Postage Stamp",
      "category": "Forever Stamps 73$, International $1.55, Non-Machineable $1.12, Three Ounce $1.16, Two Ounce 92$",
      "theme": "Floral",
      "postage": "Forever First-Class",
      "image": "https://discountstampdeal.com/wp-content/uploads/2025/02/2025-1-4-43-1.webp",
      "rating": "4.5",
      "reviews": 22,
      "description": "",
      "variants": [
        {
          "sku": "STAMP-22-043-CN",
          "shippingFrom": "CN",
          "shippingDesc": "China Shipping (2-3 weeks)",
          "price": 5,
          "originalPrice": 39.99
        },
        {
          "sku": "STAMP-22-043-US",
          "shippingFrom": "US",
          "shippingDesc": "Local Shipping (3-5 days)",
          "price": 15,
          "originalPrice": 39.99
        }
      ]
    },
    {
      "id": 21073,
      "name": "2023 $10 Floral Geometry Forever First Class Postage Stamp",
      "category": "Commemorative, Denomination, Priority Mail, Priority Mail Express, Semipostal 85$",
      "theme": "Floral",
      "postage": "Forever First-Class",
      "image": "https://discountstampdeal.com/wp-content/uploads/2025/02/2025-1-4-51-1.webp",
      "rating": "4.9",
      "reviews": 38,
      "description": "",
      "variants": [
        {
          "sku": "STAMP-23-037-CN",
          "shippingFrom": "CN",
          "shippingDesc": "China Shipping (2-3 weeks)",
          "price": 5,
          "originalPrice": 59.99
        },
        {
          "sku": "STAMP-23-037-US",
          "shippingFrom": "US",
          "shippingDesc": "Local Shipping (3-5 days)",
          "price": 15,
          "originalPrice": 59.99
        }
      ]
    }
  ],
  "Pop Culture": [
    {
      "id": 19239,
      "name": "Backyard Games Forever Stamps",
      "category": "Forever Stamps 73$, Kids",
      "theme": "Pop Culture",
      "postage": "Forever First-Class",
      "image": "https://discountstampdeal.com/wp-content/uploads/2025/02/FCE2E6D7-E34A-CD0B-27B3-8BCB76DB2300.webp",
      "rating": "4.5",
      "reviews": 50,
      "description": "With this pane of 16 Forever? Stamps, the U.S. Postal Service celebrates the variety of games Americans play for outdoor recreation.",
      "variants": [
        {
          "sku": "STAMP-00-179-CN",
          "shippingFrom": "CN",
          "shippingDesc": "China Shipping (2-3 weeks)",
          "price": 5,
          "originalPrice": 19.99
        },
        {
          "sku": "STAMP-00-179-US",
          "shippingFrom": "US",
          "shippingDesc": "Local Shipping (3-5 days)",
          "price": 15,
          "originalPrice": 19.99
        }
      ]
    },
    {
      "id": 20073,
      "name": "Lunar New Year: Year of the Dragon Forever Stamps",
      "category": "Celebrations &amp; Thanks, Forever Stamps 73$",
      "theme": "Pop Culture",
      "postage": "Forever First-Class",
      "image": "https://discountstampdeal.com/wp-content/uploads/2025/02/aaa.webp",
      "rating": "4.5",
      "reviews": 9,
      "description": "",
      "variants": [
        {
          "sku": "STAMP-00-131-CN",
          "shippingFrom": "CN",
          "shippingDesc": "China Shipping (2-3 weeks)",
          "price": 5,
          "originalPrice": 19.99
        },
        {
          "sku": "STAMP-00-131-US",
          "shippingFrom": "US",
          "shippingDesc": "Local Shipping (3-5 days)",
          "price": 15,
          "originalPrice": 19.99
        }
      ]
    },
    {
      "id": 21153,
      "name": "2024 Dungeons & Dragons Stamps Forever First Class Postage Stamps",
      "category": "Forever Stamps 73$",
      "theme": "Pop Culture",
      "postage": "Forever First-Class",
      "image": "https://discountstampdeal.com/wp-content/uploads/2025/02/2-23-12.webp",
      "rating": "4.3",
      "reviews": 45,
      "description": "",
      "variants": [
        {
          "sku": "STAMP-24-015-CN",
          "shippingFrom": "CN",
          "shippingDesc": "China Shipping (2-3 weeks)",
          "price": 5,
          "originalPrice": 19.99
        },
        {
          "sku": "STAMP-24-015-US",
          "shippingFrom": "US",
          "shippingDesc": "Local Shipping (3-5 days)",
          "price": 15,
          "originalPrice": 19.99
        }
      ]
    }
  ],
  "Landmarks": [
    {
      "id": 19242,
      "name": "Mid Atlantic Lighthouses Forever Stamps",
      "category": "Forever Stamps 73$, History &amp; Heritage",
      "theme": "Landmarks",
      "postage": "Forever First-Class",
      "image": "https://discountstampdeal.com/wp-content/uploads/2025/02/464CA94D-8769-C773-EBC4-8358A5BFFE1C.webp",
      "rating": "4.7",
      "reviews": 17,
      "description": "These Stamps bring lighthouses to public attention and remind us all that these beautiful and antique structures are pieces of our nation&#8217;s history we all need to fight to save.",
      "variants": [
        {
          "sku": "STAMP-00-173-CN",
          "shippingFrom": "CN",
          "shippingDesc": "China Shipping (2-3 weeks)",
          "price": 5,
          "originalPrice": 19.99
        },
        {
          "sku": "STAMP-00-173-US",
          "shippingFrom": "US",
          "shippingDesc": "Local Shipping (3-5 days)",
          "price": 15,
          "originalPrice": 19.99
        }
      ]
    },
    {
      "id": 19372,
      "name": "$8.95 Monument Valley Forever Stamps",
      "category": "Animals &amp; Nature, History &amp; Heritage, Priority Mail",
      "theme": "Landmarks",
      "postage": "Forever First-Class",
      "image": "https://discountstampdeal.com/wp-content/uploads/2025/02/1-13.webp",
      "rating": "4.2",
      "reviews": 22,
      "description": "This Priority Mail stamp celebrates Monument Valley, an iconic landscape of the American West. Reminiscent of a vintage travel poster, the stamp art emphasizes the vast stone formations of Monument Valley while highlighting the vivid colors of the sk",
      "variants": [
        {
          "sku": "STAMP-00-123-CN",
          "shippingFrom": "CN",
          "shippingDesc": "China Shipping (2-3 weeks)",
          "price": 5,
          "originalPrice": 23.8
        },
        {
          "sku": "STAMP-00-123-US",
          "shippingFrom": "US",
          "shippingDesc": "Local Shipping (3-5 days)",
          "price": 15,
          "originalPrice": 23.8
        }
      ]
    },
    {
      "id": 19374,
      "name": "National Marine Sanctuaries Forever Stamps",
      "category": "Animals &amp; Nature, Forever Stamps 73$",
      "theme": "Landmarks",
      "postage": "Forever First-Class",
      "image": "https://discountstampdeal.com/wp-content/uploads/2025/02/CDC3AE64-7449-1DE4-732F-24A53911B610.webp",
      "rating": "4.8",
      "reviews": 48,
      "description": "U.S. National Marine Sanctuaries and marine national monuments have protected areas with special ecological, cultural, and historical significance for 50 years. The 16 Stamps on the National Marine Sanctuaries pane showcase the abundant wildlife and ",
      "variants": [
        {
          "sku": "STAMP-00-119-CN",
          "shippingFrom": "CN",
          "shippingDesc": "China Shipping (2-3 weeks)",
          "price": 5,
          "originalPrice": 19.99
        },
        {
          "sku": "STAMP-00-119-US",
          "shippingFrom": "US",
          "shippingDesc": "Local Shipping (3-5 days)",
          "price": 15,
          "originalPrice": 19.99
        }
      ]
    },
    {
      "id": 21117,
      "name": "2021 Mid Atlantic Lighthouses Forever First Class Postage Stamps",
      "category": "Forever Stamps 73$",
      "theme": "Landmarks",
      "postage": "Forever First-Class",
      "image": "https://discountstampdeal.com/wp-content/uploads/2025/02/2025-1-7-1-2.webp",
      "rating": "4.5",
      "reviews": 12,
      "description": "",
      "variants": [
        {
          "sku": "STAMP-21-025-CN",
          "shippingFrom": "CN",
          "shippingDesc": "China Shipping (2-3 weeks)",
          "price": 5,
          "originalPrice": 19.99
        },
        {
          "sku": "STAMP-21-025-US",
          "shippingFrom": "US",
          "shippingDesc": "Local Shipping (3-5 days)",
          "price": 15,
          "originalPrice": 19.99
        }
      ]
    }
  ],
  "Postage Supplies": [
    {
      "id": 20117,
      "name": "Special Price: $198 Get 1000 Forever Stamps, Various Styles On Sale, can Mail Letters, Envelopes and Others",
      "category": "Specials Collection",
      "theme": "Postage Supplies",
      "postage": "Forever First-Class",
      "image": "https://discountstampdeal.com/wp-content/uploads/2025/02/Group-932.webp",
      "rating": "4.3",
      "reviews": 41,
      "description": "",
      "variants": [
        {
          "sku": "STAMP-00-125-CN",
          "shippingFrom": "CN",
          "shippingDesc": "China Shipping (2-3 weeks)",
          "price": 5,
          "originalPrice": 198
        },
        {
          "sku": "STAMP-00-125-US",
          "shippingFrom": "US",
          "shippingDesc": "Local Shipping (3-5 days)",
          "price": 15,
          "originalPrice": 198
        }
      ]
    },
    {
      "id": 21037,
      "name": "2021 USPS Castillo de San Marcos Priority Mail Postage Stamps",
      "category": "History &amp; Heritage, Priority Mail, Priority Mail Express",
      "theme": "Postage Supplies",
      "postage": "Priority Mail",
      "image": "https://discountstampdeal.com/wp-content/uploads/2025/02/2025-1-4-37-1.webp",
      "rating": "4.1",
      "reviews": 53,
      "description": "",
      "variants": [
        {
          "sku": "STAMP-21-047-CN",
          "shippingFrom": "CN",
          "shippingDesc": "China Shipping (2-3 weeks)",
          "price": 5,
          "originalPrice": 35
        },
        {
          "sku": "STAMP-21-047-US",
          "shippingFrom": "US",
          "shippingDesc": "Local Shipping (3-5 days)",
          "price": 15,
          "originalPrice": 35
        }
      ]
    }
  ],
  "People & Figures": [
    {
      "id": 21069,
      "name": "2023 John Lewis Forever First Class Postage Stamps",
      "category": "Forever Stamps 73$, International $1.55, Non-Machineable $1.12, People, Semipostal 85$, Three Ounce $1.16, Two Ounce 92$",
      "theme": "People & Figures",
      "postage": "Forever First-Class",
      "image": "https://discountstampdeal.com/wp-content/uploads/2025/02/2023-1-4-48-1.webp",
      "rating": "4.3",
      "reviews": 47,
      "description": "",
      "variants": [
        {
          "sku": "STAMP-23-039-CN",
          "shippingFrom": "CN",
          "shippingDesc": "China Shipping (2-3 weeks)",
          "price": 5,
          "originalPrice": 25.99
        },
        {
          "sku": "STAMP-23-039-US",
          "shippingFrom": "US",
          "shippingDesc": "Local Shipping (3-5 days)",
          "price": 15,
          "originalPrice": 25.99
        }
      ]
    },
    {
      "id": 710596,
      "name": "2025 First-Class Forever Stamp – Betty White",
      "category": "Commemorative, Denomination, Forever Stamps 73$, People",
      "theme": "People & Figures",
      "postage": "Forever First-Class",
      "image": "https://discountstampdeal.com/wp-content/uploads/2025/12/25-A.jpg",
      "rating": "4.2",
      "reviews": 10,
      "description": "",
      "variants": [
        {
          "sku": "STAMP-25-001-CN",
          "shippingFrom": "CN",
          "shippingDesc": "China Shipping (2-3 weeks)",
          "price": 5,
          "originalPrice": 19.99
        },
        {
          "sku": "STAMP-25-001-US",
          "shippingFrom": "US",
          "shippingDesc": "Local Shipping (3-5 days)",
          "price": 15,
          "originalPrice": 19.99
        }
      ]
    }
  ]
};

const postageValues = [
  'Forever First-Class',
  'Priority Mail',
  'Two-Ounce',
  'Postcard',
  'International',
];

function getProductsByPostage(value) {
  return products.filter(p => p.postage === value);
}

document.addEventListener('DOMContentLoaded', () => {
    function renderProducts(productList, containerId = 'product-grid') {
    const container = document.getElementById(containerId);
    if (!container) return;

    if (productList.length === 0) {
      container.innerHTML = '<div class="no-products">没有找到符合条件的产品</div>';
      return;
    }

    container.innerHTML = productList.map(p => {
      const lowestPrice = Math.min(...p.variants.map(v => v.price));
      return `
        <div class="product-card" data-id="${p.id}" data-theme="${p.theme}" data-postage="${p.postage}">
          <div class="product-image">
            <img src="${p.image}" alt="${p.name}" loading="lazy" onerror="this.src='data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>📮</text></svg>'">
            <button class="quick-view-btn" onclick="openProductModal(${p.id})">
              <i class="icon-eye"></i> Quick View
            </button>
          </div>
          <div class="product-info">
            <h3 class="product-title" title="${p.name}">${p.name.substring(0, 60)}${p.name.length > 60 ? '...' : ''}</h3>
            <div class="product-meta">
              <span class="product-rating">★ ${p.rating} (${p.reviews})</span>
            </div>
            <div class="product-price">
              <span class="current-price">${lowestPrice.toFixed(2)}</span>
              <span class="price-unit">/ Set (1 Set = 5 Rolls)</span>
            </div>
            <div class="product-shipping">
              ${p.variants.map(v => `<span class="shipping-tag">${v.shippingDesc}</span>`).join('')}
            </div>
          </div>
        </div>
      `;
    }).join('');
  }

  renderProducts(products);

  function filterProducts() {
    const selectedTheme = document.getElementById('theme-filter')?.value || 'all';
    const selectedPostage = document.getElementById('postage-filter')?.value || 'all';
    const minPrice = parseFloat(document.getElementById('min-price')?.value) || 0;
    const maxPrice = parseFloat(document.getElementById('max-price')?.value) || 9999;
    const sortBy = document.getElementById('sort-by')?.value || 'default';

    let filtered = products.filter(p => {
      const matchTheme = selectedTheme === 'all' || p.theme === selectedTheme;
      const matchPostage = selectedPostage === 'all' || p.postage === selectedPostage;
      const prices = p.variants.map(v => v.price);
      const matchPrice = prices.some(price => price >= minPrice && price <= maxPrice);
      return matchTheme && matchPostage && matchPrice;
    });

    switch (sortBy) {
      case 'rating':
        filtered.sort((a, b) => parseFloat(b.rating) - parseFloat(a.rating));
        break;
      case 'price-low':
        filtered.sort((a, b) => Math.min(...a.variants.map(v=>v.price)) - Math.min(...b.variants.map(v=>v.price)));
        break;
      case 'price-high':
        filtered.sort((a, b) => Math.max(...b.variants.map(v=>v.price)) - Math.max(...a.variants.map(v=>v.price)));
        break;
      case 'newest':
        filtered.sort((a, b) => b.id - a.id);
        break;
    }

    renderProducts(filtered);
    updateProductCount(filtered.length);
  }

  function updateProductCount(count) {
    const countEl = document.getElementById('product-count');
    if (countEl) countEl.textContent = count;
  }

  const themeFilter = document.getElementById('theme-filter');
  const postageFilter = document.getElementById('postage-filter');
  const minPriceInput = document.getElementById('min-price');
  const maxPriceInput = document.getElementById('max-price');
  const sortSelect = document.getElementById('sort-by');

  if (themeFilter) themeFilter.addEventListener('change', filterProducts);
  if (postageFilter) postageFilter.addEventListener('change', filterProducts);
  if (minPriceInput) minPriceInput.addEventListener('input', filterProducts);
  if (maxPriceInput) maxPriceInput.addEventListener('input', filterProducts);
  if (sortSelect) sortSelect.addEventListener('change', filterProducts);

    window.openProductModal = function(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;

    const modal = document.getElementById('product-modal');
    if (!modal) return;

    const cnVariant = product.variants.find(v => v.shippingFrom === 'CN');
    const usVariant = product.variants.find(v => v.shippingFrom === 'US');
    const defaultPrice = cnVariant?.price || usVariant?.price || 0;

    modal.innerHTML = `
      <div class="modal-content">
        <button class="modal-close" onclick="closeProductModal()">×</button>
        <div class="modal-body">
          <div class="modal-image">
            <img src="${product.image}" alt="${product.name}" onerror="this.src='data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>📮</text></svg>'">
          </div>
          <div class="modal-details">
            <h2 class="modal-title">${product.name}</h2>
            <div class="modal-meta">
              <span class="rating">★ ${product.rating} (${product.reviews} reviews)</span>
              <span class="badge">${product.theme}</span>
              <span class="badge">${product.postage}</span>
            </div>
            <div class="modal-price">Starting at ${defaultPrice.toFixed(2)} / Set</div>

            <div class="price-notice">
              <p><strong>💰 Price说明：</strong>显示价格为<strong>1套</strong>的价格</p>
              <p>• 1套 = 5版（Sheets）</p>
              <p>• 1版 = 20张邮票</p>
            </div>

            <p class="modal-description">${product.description || 'Official USPS Forever stamps. Valid for First-Class Mail forever.'}</p>

            <div class="shipping-options">
              <h4>选择发货地：</h4>
              ${product.variants.map((v, i) => {
                const isActive = i === 0 ? 'active' : '';
                const isChecked = i === 0 ? 'checked' : '';
                let shippingInfo = '';
                if (v.shippingFrom === 'CN') {
                  shippingInfo = `
                    <div class="shipping-info">
                      <p>• <strong>最低采购量：</strong>10套</p>
                      <p>• <strong>运输方式：</strong>普通快递 / 联邦快递</p>
                      <p>• <strong>时效：</strong>10套-59套（30天内）| 60套以上（10天内）</p>
                      <p>• <strong>费用：</strong>包邮 📦</p>
                    </div>
                  `;
                } else {
                  shippingInfo = `
                    <div class="shipping-info">
                      <p>• <strong>运输方式：</strong>本地配送</p>
                      <p>• <strong>时效：</strong>3-5天</p>
                      <p>• <strong>费用：</strong>包邮 📦</p>
                    </div>
                  `;
                }
                return `
                  <div class="shipping-option ${isActive}"
                       data-sku="${v.sku}"
                       data-price="${v.price}"
                       data-shipping-from="${v.shippingFrom}"
                       onclick="selectShipping(this, ${v.price})">
                    <input type="radio" name="shipping" value="${v.sku}" ${isChecked}>
                    <div class="option-info">
                      <strong>${v.shippingDesc}</strong>
                      <span class="option-price">${v.price.toFixed(2)} / Set</span>
                    </div>
                    ${shippingInfo}
                  </div>
                `;
              }).join('')}
            </div>

            <div class="quantity-selector">
              <label>采购数量（套）：</label>
              <input type="number" id="product-quantity" value="10" min="10" max="1000" onchange="updateShippingInfo()">
              <span class="quantity-unit">套（1套=5版）</span>
            </div>

            <div class="total-notice" id="total-notice"></div>

            <div class="modal-actions">
              <button class="btn-primary" onclick="addToCart()">
                Add to Cart - $<span id="modal-total">${(defaultPrice * 10).toFixed(2)}</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    `;

    modal.style.display = 'flex';
    document.body.style.overflow = 'hidden';
    updateShippingInfo();
  };

  window.closeProductModal = function() {
    const modal = document.getElementById('product-modal');
    if (modal) {
      modal.style.display = 'none';
      document.body.style.overflow = 'auto';
    }
  };

  window.selectShipping = function(el, price) {
    document.querySelectorAll('.shipping-option').forEach(opt => opt.classList.remove('active'));
    el.classList.add('active');
    const quantity = parseInt(document.getElementById('product-quantity').value) || 1;
    document.getElementById('modal-total').textContent = (price * quantity).toFixed(2);
  };

  
  window.updateShippingInfo = function() {
    const quantity = parseInt(document.getElementById('product-quantity')?.value) || 10;
    const selectedOption = document.querySelector('.shipping-option.active');
    const shippingFrom = selectedOption?.dataset.shippingFrom || '';
    const price = parseFloat(selectedOption?.dataset.price) || 0;
    const total = price * quantity;

    // 更新总价
    document.getElementById('modal-total').textContent = total.toFixed(2);

    // 更新运输说明
    const noticeEl = document.getElementById('total-notice');
    if (shippingFrom === 'CN') {
      if (quantity >= 60) {
        noticeEl.innerHTML = '<div class="shipping-notice fedex">🚀 <strong>联邦快递优先配送</strong>（10天内送达）</div>';
      } else {
        noticeEl.innerHTML = '<div class="shipping-notice standard">📦 <strong>标准快递配送</strong>（30天内送达）</div>';
      }
    } else {
      noticeEl.innerHTML = '<div class="shipping-notice local">🚚 <strong>本地配送</strong>（3-5天内送达）</div>';
    }
  };

  window.addToCart = function() {
    const quantity = parseInt(document.getElementById('product-quantity')?.value) || 10;
    const selectedOption = document.querySelector('.shipping-option.active');
    const sku = selectedOption?.dataset.sku || '';
    const shippingFrom = selectedOption?.dataset.shippingFrom || '';
    const price = parseFloat(selectedOption?.dataset.price) || 0;
    const total = price * quantity;

    let shippingInfo = '';
    if (shippingFrom === 'CN') {
      shippingInfo = quantity >= 60 ? '联邦快递（10天内）' : '标准快递（30天内）';
    } else {
      shippingInfo = '本地配送（3-5天）';
    }

    alert(`已加入购物车：\\n\\n产品：${product?.name || 'N/A'}\\nSKU：${sku}\\n采购数量：${quantity} 套（${quantity * 5} 版）\\n发货地：${shippingFrom}\\n运输方式：${shippingInfo}\\n\\n总计：${total.toFixed(2)}（已包含运费）`);
  };


  document.addEventListener('change', (e) => {
    if (e.target.id === 'product-quantity') {
      const quantity = parseInt(e.target.value) || 1;
      const selectedOption = document.querySelector('.shipping-option.active');
      if (selectedOption) {
        const price = parseFloat(selectedOption.dataset.price) || 0;
        document.getElementById('modal-total').textContent = (price * quantity).toFixed(2);
      }
    }
  });

  document.addEventListener('click', (e) => {
    if (e.target.id === 'product-modal') {
      closeProductModal();
    }
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeProductModal();
    }
  });

  function initSidebar() {
    const themeList = document.getElementById('theme-list');
    if (!themeList) return;

    Object.keys(productsByTheme).forEach(theme => {
      const count = productsByTheme[theme].length;
      const item = document.createElement('div');
      item.className = 'sidebar-item';
      item.innerHTML = `
        <label>
          <input type="checkbox" value="${theme}" onchange="filterByTheme('${theme}')">
          ${theme}
          <span class="count">${count}</span>
        </label>
      `;
      themeList.appendChild(item);
    });
  }

  window.filterByTheme = function(theme) {
    const checkbox = document.querySelector(`input[value="${theme}"]`);
    const selectedThemes = Array.from(document.querySelectorAll('#theme-list input:checked')).map(cb => cb.value);

    if (selectedThemes.length === 0) {
      renderProducts(products);
      return;
    }

    const filtered = products.filter(p => selectedThemes.includes(p.theme));
    renderProducts(filtered);
  };

  initSidebar();
});

