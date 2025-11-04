import { defineStore } from 'pinia'
import axios from 'axios'

export const useResopitories = defineStore('respotitories', {
    state: () => ({
        respotitories: []
    }),
    actions: {
        async fetchResopitories() {
            try {
                const { data } = await axios.get('https://dummyjson.com/products/category/smartphones')
                this.respotitories = data.products // ✅ FIX HERE
            } catch (error) {
                console.error("Error fetching products:", error)
            }
        }
    }
})