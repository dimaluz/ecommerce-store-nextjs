import { Category } from "@/types";

// const URL = `${process.env.NEXT_PUBLIC_API_URL}/categories`
const URL = 'http://localhost:3000/api/clvkzlm7r000218p3v4aowf85/categories'

const getCategories = async (): Promise<Category[]> => {
    const response = await fetch('http://localhost:3000/api/clvkzlm7r000218p3v4aowf85/c')
    return response.json()
}

export default getCategories