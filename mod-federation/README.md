# What is a Microfrontend
- A Microfrontend is an _architectural pattern_ that is inspired by and applies the principles of _**microservices**_ into front-end world.
- It breaks down a large, complex user interface system into smaller, independent, and reusable modules, each with its own **functionality and business specifications**.
- One of the primary advantages of adopting the **micro-frontend** architecture is that you can _decompose_ a large web application into several funcational modules that can hosted in separate _repositories_ each with its own team of developers that are responsible for it's **feature release and maintenance**.
- By using micro-frontends, companies can create and maintain large-scale web applications with greater **flexibility and speed**. This approach enables better **scalability, greater development efficiency, and shorter time-to-market**.

## Monolithic Frontend
- With monolithic Frontend, all of the application **modules** are _consolidated_ into one large system, often where these modules are _tightly coupled_ with one another.
- This tight coupling between components reduces _efficiency and reliability_. Sometimes if a module crashes, it can cause entire system to be completely out of service.
- Changes to any one module requires a complete **E2E testing** to ensure that the new changes do not have regressive effects on system.

![image](https://github.com/mayur256/react-examples/assets/39913092/1d77bacc-17ea-4abb-a952-7b9fa6e7f596)

## Micro-Frontend
- On the contrary with micro-frontend we have several independent, loosely coupled modules or components that are developed or maintained in isolation.
- Each micro-frontend is a **self-contained** module that can be _developed, tested, and deployed independently_.
  
![image](https://github.com/mayur256/react-examples/assets/39913092/55073f0b-9d12-4112-8146-bdcbb559dda0)
