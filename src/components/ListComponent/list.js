import data from './../../assets/json/data.json';
import Paginate from 'object-pager';

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
      data: Object
    }
  },
  mounted() {
    this.laws = data;
    this.paginated = Paginate(data, 10);
    this.firstPage = 0;
    this.lastPage = this.paginated.length - 1;
    this.currentPage = 0;
    this.nextPage = this.currentPage + 1;
    this.prevPage = (this.currentPage - 1) < 0 ? 0 : this.currentPage - 1;
    this.data = this.paginated[this.currentPage];
  },
  methods: {
    next() {
      this.prevPage = this.currentPage;
      this.currentPage = this.nextPage;
      this.nextPage++;
      this.data = this.paginated[this.nextPage];
    },
    prev() {
      this.prevPage = (this.currentPage - 1) < 0 ? 0 : this.currentPage - 1;
      this.currentPage = this.prevPage;
      this.nextPage = this.currentPage + 1;
      this.data = this.paginated[this.prevPage];
    }
  },
}