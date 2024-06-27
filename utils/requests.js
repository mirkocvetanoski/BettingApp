const apiDomain = process.env.NEXT_PUBLIC_API_DOMAIN || null;

export const dynamic = "force-dynamic";

// Fetch all properties
async function fetchCompetitions() {
  try {
    // Handle the case where the domain is not available yet
    if (!apiDomain) {
      return [];
    }

    const res = await fetch(
      `${apiDomain}/competitions`,
      // { cache: "no-store" }
    );

    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }

    return res.json();
  } catch (error) {
    console.log(error);
    return [];
  }
}

export { fetchCompetitions };
