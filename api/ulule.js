export default async function handler(req, res) {
    try {
        const response = await fetch("https://api.ulule.com/v1/projects/202073");
        const data = await response.json();
        res.setHeader("Access-Control-Allow-Origin", "*");
        res.status(200).json(data);
    } catch (error) {
        console.error("Erreur lors de la récupération des données :", error);
        res
        .status(500)
        .json({ error: "Erreur lors de la récupération des données" });
    }
}
