import { getAllPerfumes } from "../../modules/shop/service";

async function handler(req, res) {
  const perfumes = await getAllPerfumes();
  try {
    const results = req.query.q
      ? perfumes.perfumes.filter((perfume) =>
          perfume.title.toLowerCase().includes(req.query.q.toLowerCase())
        )
      : [];

    res.status(200).json({ searchRes: results });
  } catch (error) {
    res.status(500).json({ message: "No matches found." });
  }
}

export default handler;
