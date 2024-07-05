export const dynamic = "force-dynamic";

// GET /api/leagues/[Country]
export const GET = async (request, { params }) => {
  try {
    let slug = params.slug;

    // Fetch leagues by country
    const res = await fetch(
      `https://sportspredict.xyz/api/leagues/${slug.charAt(0).toUpperCase() + slug.slice(1)}`,
    );

    const data = await res.json();

    const result = {
      leagues: data,
    };

    return new Response(JSON.stringify(result), { status: 200 });
  } catch (error) {
    console.log(error);
    return new Response("Something Went Wrong", { status: 500 });
  }
};
