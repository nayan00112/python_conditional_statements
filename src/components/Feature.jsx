function Feature({ title, img, children }) {
  return (
    <div className="card">
      <img src={img} alt={title} />
      <h3>{title}</h3>
      <p>{children}</p>
    </div>
  );
}
export default Feature;
