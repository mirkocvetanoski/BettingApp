export const dynamic = "force-dynamic";

// GET /api/countries/[Competition]
export const GET = async (request, { params }) => {
  try {
    let slug = params.slug;

    console.log(slug.charAt(0).toUpperCase() + slug.slice(1));

    // Fetch countries by competition
    const res = await fetch(
      `https://sportspredict.xyz/api/countries/${slug.charAt(0).toUpperCase() + slug.slice(1)}`,
    );

    const data = await res.json();

    const result = {
      countries: data,
    };

    return new Response(JSON.stringify(result), { status: 200 });
  } catch (error) {
    console.log(error);
    return new Response("Something Went Wrong", { status: 500 });
  }
};
