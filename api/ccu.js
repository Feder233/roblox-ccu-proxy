export default async function handler(req, res) {
  const universeId = '8159748875';

  try {
    const response = await fetch(`https://games.roblox.com/v1/games?universeIds=${universeId}`);
    if (!response.ok) throw new Error('Roblox API Fehler: ' + response.status);

    const data = await response.json();

    if (data && data.data && data.data.length > 0) {
      res.status(200).json({ playing: data.data[0].playing });
    } else {
      res.status(404).json({ error: 'Keine Daten gefunden' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Interner Serverfehler' });
  }
}
