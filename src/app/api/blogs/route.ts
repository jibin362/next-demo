import { data } from "@/data/data";

export async function GET() {
  return Response.json({
    data,
  });
}
