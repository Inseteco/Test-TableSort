new Vue ({
  el:'#app',

  data () {
    return {
      numdata:[
        [3, 4, 7],
        [6, 1, 2],
        [1, 9, 1]
      ],
      numb:[
        false,
        false,
        false
      ]
    }
  },

  methods: {
    sortBy(e){
      if(this.numb) {
        this.numb = false;
        this.numdata.sort((a,b) => a[e] - b[e])
      } else{
        this.numb = true;
        this.numdata.sort((a,b) => b[e] - a[e])
      }
    }
  }
})
