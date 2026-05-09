type CheckListProps = {
  items: string[];
};

export default function CheckList({ items }: CheckListProps) {
  return (
    <ul className="check-list">
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
}
