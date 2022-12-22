import axios from "axios";

interface IdayData {
  status: number;
  copyright: string;
  date: string;
  explanation: string;
  hdurl: string;
  media_type: string;
  service_version: string;
  title: string;
  url: string;
}

interface Ierror {
  status: number;
}
export class NasaPlug {
  async getDay(day: string): Promise<IdayData | Ierror> {
    try {
      const content = await axios.get("https://api.nasa.gov/planetary/apod", {
        params: {
          api_key: process.env.NASA_API_KEY,
          date: day,
        },
      });
      return { status: 200, ...content.data };
    } catch (error) {
      return { status: 500 };
    }
  }
}
