// Gray placeholder box that stands in for the page's photographs.
export default function GrayBox({ className = '', label }) {
  if (label) {
    return <div role="img" aria-label={label} className={`bg-gray-300 ${className}`} />;
  }
  return <div aria-hidden="true" className={`bg-gray-300 ${className}`} />;
}
