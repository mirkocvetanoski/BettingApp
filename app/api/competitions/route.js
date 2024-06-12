export const GET = async (request) => {
  try {
    const res = await fetch("https://sportspredict.xyz/api/competitions");

    const data = await res.json();

    const result = {
      competitions: data,
    };

    return new Response(JSON.stringify(result), { status: 200 });
  } catch (error) {
    console.log(error);
    return new Response("Something Went Wrong", { status: 500 });
  }
};
