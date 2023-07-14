type Props = {
  navLinks: { id: string; title: string }[];
};

const DesktopLinkList = (props: Props) => {
  const { navLinks } = props;
  return (
    <ul className="list-none flex flex-row gap-10">
      {navLinks.map((link) => (
        <li
          key={link.id}
          className="text-secondary hover:text-white text-[18px] font-medium"
        >
          <a href={`#${link.id}`}>{link.title}</a>
        </li>
      ))}
    </ul>
  );
};

export default DesktopLinkList;
