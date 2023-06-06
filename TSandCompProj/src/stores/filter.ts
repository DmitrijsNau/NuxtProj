import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useFilterStore = defineStore('filter', {
  state: ()=>({
    filters:{
      "RTS" :false,
      "FPS":false,
      "Moba":false,
      "OpenWorld":false
    },
    filterList: []
  }),
  actions: {
    addFilters(){
      for(let filter in this.filters){
        if(this.filters[filter] && !this.filterList.includes(filter)){
          this.filterList.push(filter)
        }
      }
    },
    clearFilters(){
      this.filterList = []
    }
  }
})

export default useFilterStore