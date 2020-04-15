import React from "react";
import {
  Link
} from "react-router-dom";

function ArticleCard(props) {
  const { id, categoryName, title, postedAt, summary, imageUrl } = props;
  return (
    <div className="row no-gutters border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
      <div className="col p-4 d-flex flex-column position-static">
        <strong className="d-inline-block mb-2 text-primary">
          {categoryName}
        </strong>
        <h3 className="mb-0">{title}</h3>
        <div className="mb-1 text-muted">{postedAt}</div>
        <p className="card-text mb-auto">{summary}</p>
        <Link to={"/blog/"+ id} className="stretched-link">
          Continue reading
        </Link>
      </div>
      <div className="col-auto d-none d-lg-block">
        <img
          className="bd-placeholder-img"
          width="200"
          height="250"
          aria-label="Placeholder: Thumbnail"
          src={imageUrl}
          alt={title}
        />
      </div>
    </div>
  );
}

class Blog extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      isLoading: true,
      error: null
    };
  }

  componentDidMount() {
    fetch("/api/blog")
      .then(res => res.json())
      .then(json =>
        this.setState({
          data: json.data,
          isLoading: false,
          error: null
        })
      )
      .catch(err => {
        this.setState({
          data: [],
          isLoading: false,
          error: err.message
        });
      });
  }

  render() {
    if (this.state.isLoading) {
      return "Loading...";
    }

    if (this.state.error !== null) {
      return this.state.error;
    }

    return (
      <div className="row mb-2">
        {this.state.data.map((article, index) => (
          <div className="col-md-6" key={index}>
            <ArticleCard
              id={article.id}
              categoryName = {article.categoryName}
              title = {article.title}
              postedAt = {article.postedAt}
              summary = {article.summary}
              imageUrl = {article.imageUrl}
            />
          </div>
        ))}
      </div>
    );
  }
}
export default Blog;
