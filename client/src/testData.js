export const testStylists= [
  {
    id: 1,
    username: 'Stella',
    password: 'Stella',
    name: 'Stella',
    salon: 'Stella\'s Salon',
    email: 'stella@gmail.com',
    city: 'Dallas',
    isStylist: true,
    bio: 'Hi, I am Stella. I am a hairstylist.',
    images: [
      {
        imageUrl: 'https://images.unsplash.com/photo-1549236177-f9b0031756eb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60'
      },
      {
        imageUrl: 'https://images.unsplash.com/photo-1554519515-242161756769?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60'
      },
      { imageUrl: 'https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60'
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
    isStylist: true,
    bio: 'Wassup? I am a hairstylist in SD.',
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
  }
];

export const testCustomers = [
  {
    id: 1,
    isCustomer: true,
    password: 'Sierra',
    username: 'Sierra',
    name: 'Sierra',
    email: 'sierra@gmail.com',
    city: 'San Diego',
    imageUrl: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60',
    reviews: [
      {review: {
        id: 1,
        stylist_id: 1,
        text: 'Sandy was soooo nice! She did great with my hair.'
      }}
    ],
  },
  {
    id: 2,
    isCustomer: true,
    password: 'Adrian',
    username: 'Adrian',
    name: 'Adrian',
    email: 'adrian@gmail.com',
    city: 'Dallas',
    imageUrl: 'https://images.unsplash.com/photo-1522609925277-66fea332c575?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60',
    reviews: [
      {review: {
        id: 1,
        stylist_id: 2,
        text: 'Very professional barbershop.'
      }}
    ],
  },
];

