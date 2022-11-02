interface Props {
  sectionNumber: string;
  title: string;
}
const SectionTitle = ({ sectionNumber, title }: Props) => {
  return (
    <>
      <div className="flex justify-between gap-2">
        <div className="flex items-center gap-2">
          <p className="text-base text-accent md:-mt-1 md:text-xl">
            {sectionNumber}
          </p>
          <h3 className="font-heebo text-2xl font-bold text-primary md:text-3xl">
            {title}
          </h3>
        </div>
        <div className="flex-1 self-center border-b-[1px] border-secondary/60"></div>
      </div>
    </>
  );
};

export default SectionTitle;
