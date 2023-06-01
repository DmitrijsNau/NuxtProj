import {defineStore} from 'pinia'

export const useNavStore = defineStore({
    id: 'nav-store',
    state: ()=>{
        return {
            drawer: false
        }
    },
    actions: {
        toggleDrawer(){
            this.drawer=!this.drawer
        }
    }
})
export default useNavStore 