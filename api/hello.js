export async function GET(request) {
  const today = new Date()
    .toLocaleString("en-EN", { month: "long", day: "numeric" })
    .replace(" ", "_");

  console.log(today);

  const response = await fetch(
    `https://en.wikipedia.org/w/api.php?action=parse&page=${today}&format=json&prop=text&section=2&disableeditsection=true`
  );

  const data = await response.json();

  console.log(data.parse.text["*"].replace(/<[^>]*>/g, ""));

  return new Response(`Hello ${data.parse.text["*"].replace(/<[^>]*>/g, "")}`);
}
