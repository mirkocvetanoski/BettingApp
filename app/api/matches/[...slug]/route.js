export const dynamic = "force-dynamic";

// GET /api/matches/[Competition]/[date]
export const GET = async (request, { params }) => {
  try {
    let slug = params.slug;

    // Fetch matches by competition and date
    const res = await fetch(
      `https://sportspredict.xyz/api/matches/${slug[0].charAt(0).toUpperCase() + slug[0].slice(1)}/${slug[1].charAt(0).toUpperCase() + slug[1].slice(1)}`,
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
