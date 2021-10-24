import bcrypt from "bcrypt"

const data = {
    users: [
        {
          name: 'Bassem',
          email: 'admin@gmail.com',
          password: bcrypt.hashSync('1234', 8),
          isAdmin: true,
        },
        {
          name: 'ahmed',
          email: 'ahmed@gmail.com',
          password: bcrypt.hashSync('1234', 8),
          isAdmin: false,
        },
      ],
    products:[{
       
        name:'Chemise',
        category:'chemise',
        image:'/images/p1.jpg',
        price:60,
        countInStock:2,

    },
    {
        
        name:'Chemise',
        category:'chemise',
        image:'/images/p2.jpg',
        price:60,
        countInStock:0,

    },
    {
        
        name:'T-shirt',
        category:'T-shirt',
        image:'/images/p3.jpg',
        price:50,
        countInStock:7,
    },
    {
       
        name:'T-shirt',
        category:'T-shirt',
        image:'/images/p4.jpg',
        price:50,
        countInStock:10,
    },
    {
        
        name:'Pontallon',
        category:'pontallon',
        image:'/images/p5.jpg',
        price:70,
        countInStock:3,
    },
    {
      
        name:'Pontallon',
        category:'pontallon',
        image:'/images/p6.jpg',
        price:75,
        countInStock:9,
    },
    {
        
        name:'Chaussure adidas',
        category:'chaussures',
        image:'/images/p8.jpg',
        price:180,
        countInStock:2,
    },
    {
        
        name:'Chaussure Fila',
        category:'chaussures',
        image:'/images/p7.jpg',
        price:170,
        countInStock:0,

    },



],
};
export default data