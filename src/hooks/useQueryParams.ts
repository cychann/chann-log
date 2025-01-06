// hooks/useQueryParams.ts
import { useCallback } from "react";
import { useRouter, useSearchParams } from "next/navigation";

export function useQueryParams() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const updateQueryParams = useCallback(
    (updates: Record<string, string | null>) => {
      const params = new URLSearchParams(searchParams.toString());

      Object.entries(updates).forEach(([key, value]) => {
        if (value === null) {
          params.delete(key);
        } else {
          params.set(key, value);
        }
      });

      const queryString = params.toString();
      router.push(`/articles${queryString ? `?${queryString}` : ""}`);
    },
    [router, searchParams]
  );

  return { updateQueryParams };
}
