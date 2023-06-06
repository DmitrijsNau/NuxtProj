import { ref, computed, reactive } from 'vue'
import { defineStore } from 'pinia'

export const useExampleStore = defineStore('toggleExampleId', {
  state: () => ({
    currId: "",
  }),
  actions: {
    changeId(id){
      this.currId=id
    }
  }
  })

  export default useExampleStore 
  
