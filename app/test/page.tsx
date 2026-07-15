"use client";

import { useEffect } from "react";
import { createClient } from "@/lib/supabase/client";

export default function TestPage() {
  useEffect(() => {
    async function testConnection() {
      const supabase = createClient();

      const { data, error } = await supabase.auth.getSession();

      console.log("Session:", data);
      console.log("Error:", error);
    }

    testConnection();
  }, []);

  return (
    <div className="flex min-h-screen items-center justify-center">
      <h1 className="text-3xl font-bold">
        Checking Supabase Connection...
      </h1>
    </div>
  );
}