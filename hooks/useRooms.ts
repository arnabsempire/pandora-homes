import { useQuery } from "@tanstack/react-query";
import api from "@/lib/api";
import { Room } from "@/lib/types";

export function useRooms(filters?: any) {
  return useQuery<Room[]>({
    queryKey: ["rooms", filters],
    queryFn: async () => {
      try {
        const response = await api.getRooms(filters);
        return response.data;
      } catch {
        return [];
      }
    },
  });
}

export function useRoomById(id: string) {
  return useQuery<Room | null>({
    queryKey: ["rooms", id],
    queryFn: async () => {
      try {
        const response = await api.getRoomById(id);
        return response.data;
      } catch {
        return null;
      }
    },
    enabled: !!id,
  });
}

export function useSearchRooms(params: any) {
  return useQuery<Room[]>({
    queryKey: ["rooms", "search", params],
    queryFn: async () => {
      try {
        const response = await api.searchRooms(params);
        return response.data;
      } catch {
        return [];
      }
    },
    enabled: !!params,
  });
}
