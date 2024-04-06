// require('node-fetch').then((resp)=>console.log(resp))
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
  const {default: fetch} = await import("node-fetch");

    for (const i of api) {
        console.log(i)
        console.log('\n')
        const [obj] = Object.values(i);
        console.log(obj)        
        const { param, method } = obj;
        const response = await fetch(
        `https://test-3sz1.onrender.com${Object.keys(i)}?name=${encodeURIComponent(param)}`,
      { method: method }
    );

    console.log(await response.json())
  }
};

testingAPI();
