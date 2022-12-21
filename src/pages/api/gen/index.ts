import { NextApiRequest, NextApiResponse } from "next";
import NextCors from "nextjs-cors";
import { Client } from "@notionhq/client";
import { NasaPlug } from "../../../plugs/nasa";
import { NotionPlug } from "../../../plugs/notion";

const handler = async (request: NextApiRequest, response: NextApiResponse) => {
  await NextCors(request, response, {
    // Options
    methods: ["GET", "HEAD", "PUT", "PATCH", "POST", "DELETE"],
    origin: "*",
    optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
  });

  if (request.method !== "POST") {
    response.status(404).json("");
    return;
  }

  return response.status(200).json("ok");
};

export default handler;
