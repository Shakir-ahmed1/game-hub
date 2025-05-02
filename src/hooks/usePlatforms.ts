import platforms from "../data/platforms";

interface Platform {    
    name: string;   
    id: number;
    slug: string;
}
export const usePlatforms = () => ({data: platforms, isLoading: false, error: null})