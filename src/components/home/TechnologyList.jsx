export default function TechnologyList({ items }) {
  return <ul className="hero-technologies" aria-label="Technology stack">{items.map((item) => <li key={item}>{item}</li>)}</ul>;
}
