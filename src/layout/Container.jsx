import DataCol from "../components/DataCol";

export default function Container(props) {
  const { children } = props;
  return (
    <div className="grid lg:grid-cols-2 xl:w-3/5  sm:w-4/5 w-full sm:h-fit h-full sm:rounded-xl overflow-hidden shadow-xl mb-3">
      <DataCol />
      {children}
    </div>
  );
}
