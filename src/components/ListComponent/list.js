import data from './../../assets/json/data.json';
import Paginate from 'object-pager';
import jsonQuery from 'json-query';

export default {
  name: 'ListComponent',
  data() {
    return {
      paginated: Object,
      lastPage: 0,
      firstPage: 0,
      currentPage: 0,
      nextPage: 0,
      prevPage: 0,
      data: Object,
      laws: Object,
      search: ''
    }
  },
  mounted() {
    this.laws = data;
    this.paginated = Paginate(data, 10);
    this.firstPage = 0;
    this.lastPage = parseInt(this.paginated.length) - 1;
    this.currentPage = localStorage.getItem('currentpage') ? localStorage.getItem('currentpage') : 0;
    this.nextPage = parseInt(this.currentPage) + 1;
    this.prevPage = (this.currentPage - 1) < 0 ? 0 : this.currentPage - 1;
    this.data = this.paginated[this.currentPage];
  },
  unmounted() {
    this.saveCurrentPage();
  },
  methods: {
    next() {
      this.prevPage = parseInt(this.currentPage);
      this.currentPage = parseInt(this.nextPage);
      this.nextPage++;
      this.data = this.paginated[this.nextPage];
      this.saveCurrentPage();
    },
    prev() {
      this.prevPage = (this.currentPage - 1) < 0 ? 0 : this.currentPage - 1;
      this.currentPage = parseInt(this.prevPage);
      this.nextPage = parseInt(this.currentPage) + 1;
      this.data = this.paginated[this.prevPage];
      this.saveCurrentPage();
    },
    filter() {
      let $this = this;
      let allData = {
        laws: $this.laws
      };

      this.$http.get(`https://translation.googleapis.com/language/translate/v2?q=${$this.search}&target=en&source=tl&key=AIzaSyCchV4W_rIGyd8RSSpbvcHYGq2PHodHfz8`)
        .then(function(data) {
          let q = data.data.data.translations[0].translatedText;

          let filtered = jsonQuery('laws[*Description~/'+ q +'/i]', {
          data: allData,
          allowRegexp: true
          }).value;
          
          $this.data = filtered;
        });

    },
    saveCurrentPage() {
      localStorage.setItem('currentpage', this.currentPage);
    }
  },
}