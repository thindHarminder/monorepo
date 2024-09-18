async function o(){const e=await(await fetch("https://mono-repo-test.pages.dev/pages/api/hello")).json();console.log(e),window.alert(e.message)}o();
