export default function Section({ title, children }) {
  return (
    <section>
      <div className=" mb-[70px]">
        <h2 className=" text-center text-[28px] font-martel text-foreground font-medium">{title}</h2>
      </div>

      <div>
        {children}
      </div>
    </section>
  );
}
