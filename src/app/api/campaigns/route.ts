import { supabase } from "@/lib/supabase";
import { sendSuccess } from "@/lib/responseHandler";
import { handleError } from "@/lib/errorHandler";

export async function GET() {
  try {
    const { data: campaigns, error } = await supabase
      .from("Campaign")
      .select("id, title, date, location, organizer, createdAt")
      .order("date", { ascending: true });

    if (error) throw error;

    return sendSuccess(campaigns);
  } catch (error) {
    return handleError(error, "GET /api/campaigns");
  }
}
