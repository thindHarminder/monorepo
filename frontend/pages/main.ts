async function loadHello() {
  const res = await fetch(import.meta.env.VITE_SERVER_BASE_URL + "/api/hello");
  const data = await res.json();
  console.log(data);
  window.alert(data.message);
}

loadHello();
