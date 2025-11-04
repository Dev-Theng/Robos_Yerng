import { defineStore } from 'pinia'
import axios from 'axios'

export const useProfileStore = defineStore('profile', {
    state: () => ({
        profile: {}, // ✅ lowercase and use object (GitHub user returns an object, not an array)
    }),
    actions: {
        async fetchProfile() {
            try {
                const { data } = await axios.get('https://dummyjson.com/products/category/smartphones')
                this.profile = data // ✅ matches lowercase "profile"
            } catch (error) {
                console.error('Error fetching profile:', error)
            }
        },
    },
})