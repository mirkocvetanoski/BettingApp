export const dynamic = "force-dynamic";

// GET /api/matches/[Competition]/[date]
export const GET = async (request, { params }) => {
  try {
    let slug = params.slug[0];
    let date = params.slug[1];

    console.log(params);

    // Fetch matches by competition and date
    const res = await fetch(
      `https://sportspredict.xyz/api/matches/${slug.charAt(0).toUpperCase() + slug.slice(1)}/${date}`,
    );

    const data = await res.json();

    const result = {
      matches: data,
    };

    return new Response(JSON.stringify(result), { status: 200 });
  } catch (error) {
    console.log(error);
    return new Response("Something Went Wrong", { status: 500 });
  }
};
