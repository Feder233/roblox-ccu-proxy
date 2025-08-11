import fetch from 'node-fetch';

export default async function handler(req, res) {
  const universeId = '8159748875'; // deine UniverseId

  try {
    const response = await fetch(`https://games.roblox.com/v1/games?universeIds=${universeId}`);
    const data = await response.json();

    if (data && data.data && data.data.length > 0) {
      res.status(200).json({ playing: data.data[0].playing });
    } else {
      res.status(404).json({ error: 'Daten nicht gefunden' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Fehler beim Abruf' });
  }
}
