<p align="center">
  <h2 align="center">OpenMind Academy Dashboard</h3>

  <p align="center">
    A web based dashboard for management of students.
    <br />
    <br />
    <a href="https://openmind-academy-dashboard.onrender.com">View Demo</a>
    ·
    <a href="https://github.com/thusarasenanayake/openmind-academy-dashboard/issues">Report Bug</a>
    ·
    <a href="https://github.com/thusarasenanayake/openmind-academy-dashboard/issues">Request Feature</a>
  </p>
</p>

## About The Project

This web application was primarily build with **Express**, **Mongo DB**, **Bootstrap** and featured with front-end validation, back-end validation, authentication and ect. Funtionality wise authorised users can add, view, update and delete students. To interact with the dashboard you must have logged in with a registered email and password. For the [demonstration](https://openmind-academy-dashboard.onrender.com "see the demo") purposes I have added fake data and registered **guest@openmindacademy.com** with the password of **abc123123**
<br />


[![a snapshot of the project][product-screenshot]](https://openmind-academy-dashboard.onrender.com)
[![a snapshot of the project][product-screenshot2]](https://openmind-academy-dashboard.onrender.com)
[![a snapshot of the project][product-screenshot3]](https://openmind-academy-dashboard.onrender.com)
[![a snapshot of the project][product-screenshot4]](https://openmind-academy-dashboard.onrender.com)

A list of commonly used resources that I find helpful are listed in the acknowledgements.

## Built With

- [Express](https://expressjs.com/)
- [Mongo DB Atlas](https://www.mongodb.com/cloud/atlas)
- [Bootstrap](https://getbootstrap.com)


<!-- GETTING STARTED -->

## Getting Started

To get a local copy up and running, open your terminal in a favoured location and follow these simple example steps.

  ```sh
  git clone https://github.com/thusarasenanayake/openmind-academy-dashboard.git openmind-academy-dashboard
  cd openmind-academy-dashboard
  npm install 
  ```
After successful installation, configure these settings related with **.env.example** file.

```
- Rename .env.example to .env
- Replace <MONGODB_URI> with your MongoDB connection string
    example for local db : MONGODB_URI=mongodb://localhost:27017/
    example for MongoDB Atlas: MONGODB_URI=mongodb+srv://name:<password>@cluster0.wszwp.mongodb.net/test
```
And then run the project by
```sh
npm start
```
Finally create an account using **http://localhost:3000/dashboard/signup** link and enjoy.


## Roadmap

See the [open issues](https://github.com/thusarasenanayake/openmind-academy-dashboard/issues) for a list of proposed features (and known issues).

<!-- CONTRIBUTING -->

## Contributing

Contributions are what make the open source community such an amazing place to be learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<!-- LICENSE -->

## License

Distributed under the MIT License. See `LICENSE` for more information.

<!-- CONTACT -->

## Contact

Project Link: [OpenMind Academy Dashboard](https://github.com/thusarasenanayake/openmind-academy-dashboard)

<!-- ACKNOWLEDGEMENTS -->

## Acknowledgements

- [Feather](https://feathericons.com/)
- [Dashboard Snippet](https://getbootstrap.com/docs/5.1/examples/dashboard/)
- [404 Snippet](https://codepen.io/uiswarup/pen/XWdXGGV)
- [Sign-in Snippet](https://getbootstrap.com/docs/5.1/examples/sign-in/)
- [Faker](https://www.npmjs.com/package/faker)
- [README Template](https://github.com/othneildrew/Best-README-Template)
- [Choose an Open Source License](https://choosealicense.com)

[product-screenshot]: /public/assets/img/SNAG-21082813112400.png
[product-screenshot2]: /public/assets/img/SNAG-21082813115200.png
[product-screenshot3]: /public/assets/img/SNAG-21082813153800.png
[product-screenshot4]: /public/assets/img/SNAG-21082813200100.png
