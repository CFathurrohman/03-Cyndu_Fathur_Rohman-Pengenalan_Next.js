export default async function handler(req, res) {
    try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=-7.9806&lon=112.6153&appid=cfb635cd0a30a6c2c275bbaaeabe3e73&units=metric`);
        
        if (!response.ok) {
            throw new Error('Failed to fetch weather data');
        }
        
        const data = await response.json();
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}