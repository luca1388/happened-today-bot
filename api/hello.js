export async function GET(request) {
  const today = new Date()
    .toLocaleString("en-EN", { month: "long", day: "numeric" })
    .replace(" ", "_");

  console.log(today);

  const response = await fetch(
    `https://en.wikipedia.org/w/api.php?action=parse&page=${today}&format=json&prop=text%7Clanglinks%7Ccategories%7Clinks%7Ctemplates%7Cimages%7Cexternallinks%7Csections%7Crevid%7Cdisplaytitle%7Ciwlinks%7Cproperties%7Cparsewarnings&formatversion=2`
  );

  const data = await response.json();

  return new Response(`Hello ${data.parse.text.replace(/<[^>]*>/g, "")}`);
}
