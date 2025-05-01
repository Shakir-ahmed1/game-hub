import useData from "./useData";

interface Platform {    
    name: string;   
    id: number;
    slug: string;
}
export const usePlatforms = () => useData<Platform>('/platforms/lists/parents');