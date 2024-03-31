type ExpItemProps = {
  title: string;
  role: string;
  description: string;
  tags: string[];
  date: Date;
};

export const ExpItem = ({
  title,
  role,
  description,
  tags,
  date,
}: ExpItemProps) => {
  return (
    <div className="empresa">
      <span className="empresa-ano">{date.getFullYear()}</span>
      <h3 className="empresa-titulo">{title}</h3>
      <span className="empresa-titulo">{role}</span>
      <p className="empresa-texto">{description}</p>
      <ul className="empresa-habilidades">
        {tags.map((tag, idx) => {
          return <li key={idx}>{tag.toUpperCase()}</li>;
        })}
      </ul>
    </div>
  );
};
