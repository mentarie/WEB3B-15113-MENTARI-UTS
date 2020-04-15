import React from "react";

function ArticleCard(props) {
  const  {title, summary, imageUrl}  = props;
  return (
    <div className="col-lg-8">
      <h1 className="mt-4">title</h1>

      <img className="img-fluid rounded" src={imageUrl} alt={title} />

      <hr />

      <p className="lead">{summary}</p>
      <blockquote className="blockquote">
        <p className="mb-0">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
          posuere erat a ante.
        </p>
        <footer className="blockquote-footer">
          Someone famous in
          <cite title="Source Title">Source Title</cite>
        </footer>
      </blockquote>

      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error,
        nostrum, aliquid, animi, ut quas placeat totam sunt tempora commodi
        nihil ullam alias modi dicta saepe minima ab quo voluptatem obcaecati?
      </p>

      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum, dolor
        quis. Sunt, ut, explicabo, aliquam tenetur ratione tempore quidem
        voluptates cupiditate voluptas illo saepe quaerat numquam recusandae?
        Qui, necessitatibus, est!
      </p>

      <hr />
    </div>
  );
}

class DetailBlog extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {},
      isLoading: true,
      error: null
    };
  }

  componentDidMount() {
    const { articleId } = this.props.match.params;
    fetch("/api/blog/" + articleId)
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

    const article = this.state.data || {};

    return (
      <div className="row mb-2">
        <div className="col-md-6">
          <ArticleCard
            title={article.title}
            summary={article.summary}
            imageUrl={article.imageUrl}
          />
        </div>
      </div>
    );
  }
}
export default DetailBlog;
