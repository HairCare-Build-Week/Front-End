export let stylist = [
    {
      id: 1,
      username: 'Stella',
      password: 'Stella',
      name: 'Stella',
      salon: 'Stella\'s Salon',
      email: 'stella@gmail.com',
      city: 'Dallas',
      userType: 'stylist',
      bio: 'Hi, I am Stella. I am a hairstylist.',
      profile_img: 'https://images.unsplash.com/photo-1492106087820-71f1a00d2b11?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80',
      images: [
        {
          imageUrl: 'https://images.unsplash.com/photo-1549236177-f9b0031756eb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60'
        },
        {
          imageUrl: 'https://images.unsplash.com/photo-1554519515-242161756769?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60'
        },
        { imageUrl: 'https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60'
        },
        {imageUrl: 'https://images.unsplash.com/photo-1552425883-1fd7e6a11c31?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80'
        }
      ]
    },
    {
      id: 2,
      username: 'Hector',
      password: 'Hector',
      name: 'Hector',
      salon: 'Hector\'s Barber Shop',
      email: 'hector@gmail.com',
      city: 'San Diego',
      userType: 'stylist',
      bio: 'Wassup? I am a hairstylist in SD.',
      profile_img: 'https://images.unsplash.com/photo-1556755134-a67aafdbd686?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60',
      images: [
        {
          imageUrl: 'https://images.unsplash.com/photo-1522337094846-8a818192de1f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60'
        },
        {
          imageUrl: 'https://images.unsplash.com/photo-1497551060073-4c5ab6435f12?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60'
        },
        { imageUrl: 'https://images.unsplash.com/photo-1534297635766-a262cdcb8ee4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60'
        }
      ]
    },
    {
      id: 3,
      username: 'Jessi',
      password: 'Jessi',
      name: 'Jessi',
      salon: 'Jessi Stylz',
      email: 'jessi@gmail.com',
      city: 'Boise',
      userType: 'stylist',
      bio: 'I\'ve been doing hair for 5yrs. I love it! Everyday I strive to learn and get better to make to the most stylish in town.' ,
      profile_img: 'https://images.unsplash.com/photo-1534445538923-ab38438550d2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60',
      images: [
        {
          imageUrl: 'https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60'
        },
        {
          imageUrl: 'https://images.unsplash.com/photo-1504703395950-b89145a5425b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60'
        },
        { imageUrl: 'https://images.unsplash.com/photo-1522336284037-91f7da073525?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60'
        },
        { imageUrl: 'https://images.unsplash.com/photo-1501699169021-3759ee435d66?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60'
        }
      ]
    },
  ]

  export let users = [
    {
      id: 4,
      password: 'Sierra',
      username: 'Sierra',
      name: 'Sierra',
      email: 'sierra@gmail.com',
      city: 'San Diego',
      userType: 'user',
      profile_img: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60',
      reviews: [
        {review: {
          id: 1,
          stylist_id: 1,
          text: 'Sandy was soooo nice! She did great with my hair.'
        }}
      ],
      saved_stylists: [
        {
          id: 1,
          name: 'Stella',
          salon: 'Stella\'s Salon',
          city: 'Dallas',
          profile_img: 'https://images.unsplash.com/photo-1492106087820-71f1a00d2b11?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80',
        },
        {
            id: 2,
            name: 'Hector',
            salon: 'Hector\'s Barber Shop',
            city: 'San Diego',
            profile_img: 'https://images.unsplash.com/photo-1541705897117-dc56b6637c9e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80',
          },
        {
          id: 3,
          name: 'Jessi',
          salon: 'Jessi Stylz',
          city: 'Boise',
          profile_img: 'https://images.unsplash.com/photo-1534445538923-ab38438550d2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60',}
      ],
    },
    {
      id: 5,
      password: 'Adrian',
      username: 'Adrian',
      name: 'Adrian',
      email: 'adrian@gmail.com',
      city: 'Dallas',
      userType: 'user',
      profile_img: 'https://images.unsplash.com/photo-1522609925277-66fea332c575?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60',
      reviews: [
        {review: {
          id: 1,
          stylist_id: 2,
          text: 'Very professional barbershop.'
        }}
      ],
      saved_stylists: [
        {
          id: 1,
          name: 'Stella',
          salon: 'Stella\'s Salon',
          city: 'Dallas',
          profile_img: 'https://images.unsplash.com/photo-1492106087820-71f1a00d2b11?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80',
        },
        {
            id: 2,
            name: 'Hector',
            salon: 'Hector\'s Barber Shop',
            city: 'San Diego',
            profile_img: 'https://images.unsplash.com/photo-1541705897117-dc56b6637c9e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80',
          },
        {
          id: 3,
          name: 'Jessi',
          salon: 'Jessi Stylz',
          city: 'Boise',
          profile_img: 'https://images.unsplash.com/photo-1534445538923-ab38438550d2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60',}
      ],
    },
  
    {
      id: 6,
      password: 'Sandy',
      username: 'Sandy',
      name: 'Sandy',
      email: 'sandy@gmail.com',
      city: 'Boise',
      userType: 'user',
      profile_img: 'https://images.unsplash.com/photo-1509704215857-7ac19c9842b4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60',
      reviews: [
        {review: {
          id: 1,
          stylist_id: 2,
          text: 'I like the products they used. Stylist was very talkative.'
        }}
      ],
      saved_stylists: [
        {
          id: 1,
          name: 'Stella',
          salon: 'Stella\'s Salon',
          city: 'Dallas',
          profile_img: 'https://images.unsplash.com/photo-1492106087820-71f1a00d2b11?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80',
        },
        {
            id: 2,
            name: 'Hector',
            salon: 'Hector\'s Barber Shop',
            city: 'San Diego',
            profile_img: 'https://images.unsplash.com/photo-1541705897117-dc56b6637c9e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80',
          },
        {
          id: 3,
          name: 'Jessi',
          salon: 'Jessi Stylz',
          city: 'Boise',
          profile_img: 'https://images.unsplash.com/photo-1534445538923-ab38438550d2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60',}
      ],
    },
  ];