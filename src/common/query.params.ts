export class QueryParams {
  page: number;
  start: number;
  limit: number;
  sort: string;
  constructor(page: number, start: number, limit: number, sort: string) {
    this.page = page;
    this.start = start;
    this.limit = limit;
    this.sort = sort;
  }
}
