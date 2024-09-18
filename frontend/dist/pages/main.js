async function o(){const e=await(await fetch("https://name-of-worker.harminder.workers.dev/api/hello")).json();console.log(e),window.alert(e.message)}o();
