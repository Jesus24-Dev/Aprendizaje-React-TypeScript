import { useQuery } from "@tanstack/react-query"
import { api } from "../api/api"
import type { MinBreed } from "../types/minBreedType"

export const useBreeds = () => useQuery ({
    queryKey: ['breeds'],
    queryFn: async () => (await api.get('/breeds')).data
})

export const useBreedsById = (id?: string) => useQuery<MinBreed>({
    queryKey: ['breed', id],
    queryFn: async () => {
        const res = await api.get<MinBreed>(`/breeds/${id}`)
        return res.data;
    }
})

export const useBreedsImage = (image?: string) => useQuery({
    queryKey: ['breedImg', image],
    queryFn: async () => (await api.get(`/images/${image}`)).data
})