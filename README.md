# Admin Dashboard

This dashboard was build for Booking Application but still not integrated.

![Screenshot 2022-09-08 at 13.40.23 Large.jpeg](https://res.craft.do/user/full/9becb574-f036-dae3-8b23-ef86b3c4a5d4/230500EF-A79A-4F3C-8376-726BFF0EF05B_2/dErFZkFSt3POfySamW9AYfzxchCg4jZHxXvjZQaFqKQz/Screenshot%202022-09-08%20at%2013.40.23%20Large.jpeg)

## Technology Stack:

- React.js
- TypeScript
- Styled-Components
- Algolia Search
- Firebase Auth
- Material UI (Tables)

## Dark theme

As we all know, users love dark theme, so I decided to implement it. For this purpose, I used React context with reducers to add global states that controls dark/light toggle.

![Screenshot 2022-09-08 at 13.40.35 Large.jpeg](https://res.craft.do/user/full/9becb574-f036-dae3-8b23-ef86b3c4a5d4/881607FE-3094-4C0A-BD16-6C458203563B_2/VmFwvrty2jgkyoOI4LNjQBtJsV9pHOgyfqQCxdFuc8gz/Screenshot%202022-09-08%20at%2013.40.35%20Large.jpeg)

## Authentication

Authentication is done on the client side with Firebase Auth API. Authorization is done on the server side, but more about that, you can see in the admin-dashboard-api project documentation.

![Screenshot 2022-09-08 at 13.43.27 Large.jpeg](https://res.craft.do/user/full/9becb574-f036-dae3-8b23-ef86b3c4a5d4/A313683C-233C-4FFC-9A37-EE7BB016713F_2/BarK9xZ8zLFq7mkJKO38THJNkBezbfiwPrxrgEM4YPIz/Screenshot%202022-09-08%20at%2013.43.27%20Large.jpeg)

## Search feature

To search users, orders, etc. I implemented Algolia Search with they're API.

![Screenshot 2022-09-08 at 13.42.24 Large.jpeg](https://res.craft.do/user/full/9becb574-f036-dae3-8b23-ef86b3c4a5d4/EA2BC2BF-F8AC-418D-8CA6-BA32097C4BEA_2/mV8Mtnb5DwyIlNkcxBUgVYmQj7R3dwsui1nicK9X4FEz/Screenshot%202022-09-08%20at%2013.42.24%20Large.jpeg)

## Tables

Tables are implemented with Material UI. Data about users and orders is dynamically collected from the database. On the server side, CRUD functions are implemented with Firebase Admin SDK, so admin can add, read, update and delete users and orders.

![Screenshot 2022-09-08 at 13.41.04 Large.jpeg](https://res.craft.do/user/full/9becb574-f036-dae3-8b23-ef86b3c4a5d4/0F803FDF-2D52-4EB8-828B-FC435D6964B1_2/FPIJsHRo7FzfUYfGegM10o7e9930t2xCohpol2axpuoz/Screenshot%202022-09-08%20at%2013.41.04%20Large.jpeg)

