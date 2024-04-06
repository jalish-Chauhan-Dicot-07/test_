
const api = [
    {
    "/": {
      param: "Jalish",
      method: "GET",
    },
},
{
    "/post": {
      param: "",
      method: "POST",
    },
},
];
const testingAPI = async () => {
    for (const i of api) {
        const [obj] = Object.values(i);
        const { param, method } = obj;
        const response = await fetch(
        `http://localhost:8000${Object.keys(i)}?name=${encodeURIComponent(param)}`,
      { method: method }
    );

    console.log(await response.json())
  }
};

testingAPI();
