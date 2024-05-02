const routes = [
  {
    method: "GET",
    path: "/",
    handler: (request, h) => {
      return "Homepage";
    },
  },
  {
    method: "*",
    path: "/",
    handler: (request, h) => {
      return "Halaman tidak dapat diakses dengan method tersebut";
    },
  },
  {
    method: "GET",
    path: "/about",
    handler: (request, h) => {
      return "About page";
    },
  },
  {
    method: "*",
    path: "/about",
    handler: (request, h) => {
      return "Halaman tidak dapat diakses dengan method";
    },
  },
  {
    method: "GET",
    path: "/hello/{name?}", // memberikan efek null safety
    handler: (request, h) => {
      const { name = "stranger" } = request.params; // untuk path params
      const { lang } = request.query; // untuk query params
      if (lang === "id") {
        return `Hai, ${name}!`;
      }
      return `Hello, ${name}`;
    },
  },
  {
    method: "GET",
    path: "/coba/{test*}", // dengan * ini akan memberikan efek bisa disi parameter sebanyak yang kita mau, sepertu /chandra/ari
    handler: (request, h) => {
      const { test = "stranger" } = request.params;
      return `Hello, ${test}`;
    },
  },
  {
    method: "*",
    path: "/{any*}",
    handler: (request, h) => {
      return "Halaman tidak ditemukan";
    },
  },
  {
    method: "POST",
    path: "/login",
    handler: (request, h) => {
      const { username, password } = request.payload;
      return `Welcome ${username}`;
    },
  },
];

module.exports = routes;
