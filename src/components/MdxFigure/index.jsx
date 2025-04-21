export default function MdxFigure({ src, desc }) {
  return (
    <figure>
      <img src={src} alt={desc} />
      <figcaption>{desc}</figcaption>
    </figure>
  );
}
