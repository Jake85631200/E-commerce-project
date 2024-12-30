class GetAllProductsFeature {
  constructor(query, queryString) {
    this.query = query;
    this.queryString = queryString;
  }

  search() {
    if (this.queryString.keyword) {
      const keyword = {
        product_name: {
          $regex: this.queryString.keyword,
          $options: "i",
        },
      };
      this.query = this.query.find(keyword);
    }
    return this;
  }

  filter() {
    // 對req.query進行淺拷貝，以便對其修改或添加屬性，且不改變原始req.query
    const queryObj = { ...this.queryString };

    // 排除以下不適用過濾數據的query，作為優化
    const excludeQuery = ["page", "limit", "sort", "fields", "keyword"];
    excludeQuery.forEach((el) => delete queryObj[el]);

    // 將 "$" 從 URL 移除，因可能被作為保留字元
    let queryInString = JSON.stringify(queryObj);
    queryInString = queryInString.replace(/\b(gte|gt|lte|lt)\b/g, (match) => `$${match}`);
    this.query = this.query.find(JSON.parse(queryInString));

    return this;
  }

  paginate() {
    const page = this.queryString.page * 1 || 1;
    const limit = this.queryString.limit * 1 || 100;

    this.query = this.query.skip((page - 1) * limit).limit(limit);

    return this;
  }

  sort() {
    if (this.queryString.sort) {
      const sortBy = this.queryString.sort.split(",").join(" ");
      this.query = this.query.sort(sortBy);
    } else {
      this.query = this.query.sort("-release_date");
    }

    return this;
  }

  fields() {
    if (this.queryString.fields) {
      const fields = this.queryString.fields.split(",").join(" ");
      this.query = this.query.select(fields);
    }
    return this;
  }
}

module.exports = GetAllProductsFeature;
