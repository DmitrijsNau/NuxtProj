import { ref, computed, reactive } from 'vue'
import { defineStore } from 'pinia'

export const useExampleStore = defineStore('toggleExampleId', {
  state: () => ({
    currId: "",
    message: reactive({flashMessage:''})
  }),
  actions: {
    changeId(id){
      this.currId=''
      this.currId=id
    }
  }
  })

  export default useExampleStore 
  
