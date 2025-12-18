import ComponentCard from "./ComponentCard";

export default function ComponentSection({ category, components }) {
  return (
    <section className="w-full flex flex-col gap-3.5">
      <div className="w-fit flex items-center gap-3.5 p-5">
        <h3 className="text-2xl font-semibold">{category}</h3>
        <span className="w-fit flex items-center justify-center text-sm px-5 py-1 bg-neutral-50 dark:bg-neutral-900 text-neutral-900 dark:text-neutral-500 rounded-2xl">
          {components.length}
        </span>
      </div>
      <div className="w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-6 gap-3.5">
        {components.map((component) => {
          const colCount = component.columns || 1;
          let colSpan = "";
          if (colCount === 1) {
            colSpan = "xl:col-span-6";
          } else if (colCount === 2) {
            colSpan = "col-span-6 xl:col-span-3";
          } else if (colCount === 3) {
            colSpan = "xl:col-span-2";
          }
          return (
            <div key={component.id} className={colSpan}>
              <ComponentCard component={component} />
            </div>
          );
        })}
      </div>
    </section>
  );
}
