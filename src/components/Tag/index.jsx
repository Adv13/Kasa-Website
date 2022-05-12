function Tag({ tags }) {
    return (
      <div className="tags">
        {tags.map((tag, key) => (
          <div className="tag" key={key}>
            <p>{tag}</p>
          </div>
        ))}
      </div>
    );
  }
  
  export default Tag;